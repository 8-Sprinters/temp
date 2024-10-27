import { useMutation, useQueryClient } from '@tanstack/react-query';

import * as styles from '@/app/list/[listId]/_components/ListDetailInner/CollectButton.css';

import { QUERY_KEYS } from '@/lib/constants/queryKeys';
import { AxiosError } from 'axios';
import { useUser } from '@/store/useUser';
import numberFormatter from '@/lib/utils/numberFormatter';
import collectList from '@/app/_api/collect/__collectList';
import toasting from '@/lib/utils/toasting';
import CollectIcon from '/public/icons/collect.svg';
import CollectedIcon from '/public/icons/collected.svg';
import Modal from '@/components/Modal/Modal';
import LoginModal from '@/components/login/LoginModal';
import useBooleanOutput from '@/hooks/useBooleanOutput';
import { useLanguage } from '@/store/useLanguage';
import toastMessage from '@/lib/constants/toastMessage';
import { ListDetailType } from '@/lib/types/listType';

interface CollectProps {
  ownerId: number;
  listId: number;
  collectCount: number;
  isCollected: boolean;
}

const CollectButton = ({ data }: { data: CollectProps }) => {
  const { language } = useLanguage();
  const { isOn, handleSetOff, handleSetOn } = useBooleanOutput();

  const queryClient = useQueryClient();
  const { user: loginUser } = useUser();

  const collect = useMutation({
    mutationKey: [QUERY_KEYS.collect, data.listId],
    mutationFn: () => collectList(data.listId),
    onMutate: async (listId: string) => {
      await queryClient.cancelQueries({ queryKey: [QUERY_KEYS.getListDetail, listId] });
      const previousListDetail: ListDetailType | undefined = queryClient.getQueryData([
        QUERY_KEYS.getListDetail,
        listId,
      ]);

      if (!previousListDetail) return;

      const nextData = {
        ...previousListDetail,
        isCollected: !data.isCollected,
        collectCount: data.isCollected ? previousListDetail?.collectCount - 1 : previousListDetail?.collectCount + 1,
      };

      queryClient.setQueryData([QUERY_KEYS.getListDetail, listId], nextData);
      return { previousListDetail };
    },
    onError: (error: AxiosError, listId, context) => {
      if (error.response?.status === 401) {
        toasting({ type: 'warning', txt: toastMessage[language].failedCollect });
      }
      queryClient.setQueryData([QUERY_KEYS.getListDetail, listId], context?.previousListDetail);
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.getListDetail, data.listId + ''],
      });
    },
  });

  const handleCollect = () => {
    collect.mutate(data.listId + ''); // string으로 변경
  };

  // TODO: (로그인유저 !== 작성자) 인경우, viewCount, CollectCount를 아예 받아오면안된다.
  if (loginUser?.id == null) {
    return (
      <>
        <div className={styles.collectWrapper}>
          <CollectIcon onClick={handleSetOn} />
        </div>
        {isOn && (
          <Modal handleModalClose={handleSetOff} size="large">
            <LoginModal id="collectLoginBtn" />
          </Modal>
        )}
      </>
    );
  }

  // TODO: 언어설정이 생기면 'ko' 부분을 변수로 수정하기
  if (loginUser?.id === data.ownerId) {
    return (
      <div className={styles.myCollectWrapper}>
        <CollectedIcon />
        <div>{numberFormatter(data.collectCount, 'ko') ?? 0}</div>
      </div>
    );
  }

  return (
    <div className={styles.collectWrapper} onClick={handleCollect}>
      {data.isCollected ? <CollectedIcon /> : <CollectIcon />}
    </div>
  );
};

export default CollectButton;
