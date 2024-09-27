'use client';
import { MouseEvent } from 'react';
import Image from 'next/image';
import { useQuery } from '@tanstack/react-query';
import { useParams, useRouter } from 'next/navigation';
import { AxiosError } from 'axios';

import Collaborators from '@/app/list/[listId]/_components/ListDetailOuter/Collaborators';
import getListDetail from '@/app/_api/list/getListDetail';
import Label from '@/components/Label/Label';
import Modal from '@/components/Modal/Modal';
import Header from '@/components/Header/Header';
import HeaderRight from './HeaderRight';
import Comments from './Comments';
import { useUser } from '@/store/useUser';
import { QUERY_KEYS } from '@/lib/constants/queryKeys';
import timeDiff from '@/lib/utils/time-diff';
import useMoveToPage from '@/hooks/useMoveToPage';
import useBooleanOutput from '@/hooks/useBooleanOutput';
import { UserProfileType } from '@/lib/types/userProfileType';
import { LabelType, ListDetailType } from '@/lib/types/listType';
import ListDetailInner from '@/app/list/[listId]/_components/ListDetailInner';
import CollaboratorsModal from './CollaboratorsModal';
import NoDataComponent from '@/components/NoData/NoDataComponent';
import fallbackProfile from '/public/images/fallback_profileImage.webp';
import { useLanguage } from '@/store/useLanguage';
import { modalLocale, listLocale } from '@/app/list/[listId]/locale';

import * as styles from './ListInformation.css';
import * as modalStyles from '@/components/Modal/ModalButton.css';
import LockIcon from '/public/icons/lock.svg';
import { vars } from '@/styles/__theme.css';

function ListInformation() {
  const { language } = useLanguage();
  const params = useParams<{ listId: string }>();
  const router = useRouter();
  const { onClickMoveToPage } = useMoveToPage();
  const { isOn, handleSetOn, handleSetOff } = useBooleanOutput();

  //zustand로 관리하는 user정보 불러오기
  const { user } = useUser();
  const userId = user?.id;

  const {
    data: list,
    error,
    isError,
  } = useQuery<ListDetailType>({
    queryKey: [QUERY_KEYS.getListDetail, params?.listId],
    queryFn: () => getListDetail(Number(params?.listId)),
    enabled: !!params?.listId,
    retry: 0,
  });

  //이 리스트의 오너인 경우
  const isOwner = list?.ownerId === userId;
  //리스트 생성자 제외한 사람들만 콜라보레이터들로 설정
  const filteredCollaborators = list?.collaborators.filter((item: UserProfileType) => item?.id !== list.ownerId);
  //리스트 오너가 아니고 콜라보레이터인 경우에 권한을 설정하기 위한 변수
  const isCollaborator: boolean | undefined =
    list?.collaborators.some((item: UserProfileType) => item?.id === userId) && userId !== list.ownerId;

  if (isError && error instanceof AxiosError) {
    return (
      <Modal size="basic" handleModalClose={onClickMoveToPage('/')}>
        <Modal.Title>{modalLocale[language].privateMessage}</Modal.Title>
        <div className={modalStyles.buttonContainer}>
          <button type="button" className={modalStyles.button.primary} onClick={onClickMoveToPage('/')}>
            {modalLocale[language].confirm}
          </button>
        </div>
      </Modal>
    );
  }

  if (!list) {
    return null;
  }

  const handleCategorySearch = (categoryEngName: string) => {
    router.push(`/search?category=${categoryEngName}`);
  };

  const handleLabelSearch = (e: MouseEvent<HTMLDivElement>) => {
    const labelElement = e.currentTarget.querySelector('div');
    const labelText = labelElement?.textContent;
    if (labelText) {
      router.push(`/search?keyword=${labelText}`);
    }
  };

  return (
    <>
      {isOn && (
        <Modal handleModalClose={handleSetOff} size="small">
          <CollaboratorsModal collaborators={filteredCollaborators} handleSetOff={handleSetOff} />
        </Modal>
      )}
      <Header
        title={listLocale[language].list}
        left="back"
        right={
          <HeaderRight
            isCollaborator={isCollaborator}
            isOwner={isOwner}
            isPublic={list?.isPublic}
            ownerId={list?.ownerId}
          />
        }
        leftClick={() => router.back()}
      />
      {list?.isPublic === false && !isOwner && !isCollaborator ? (
        <div className={styles.noDataWrapper}>
          <NoDataComponent message={listLocale[language].privateMessage} />
        </div>
      ) : (
        <>
          <div className={styles.wrapper}>
            <div className={styles.categoryWrapper}>
              <div className={styles.labelWrapper} onClick={() => handleCategorySearch(list?.categoryEngName)}>
                <Label colorType="blue">{list?.categoryKorName}</Label>
              </div>
              {list?.labels.map((item: LabelType) => {
                return (
                  <div className={styles.labelWrapper} key={item.name} onClick={handleLabelSearch}>
                    <Label colorType="skyblue">{`${item.name}`}</Label>
                  </div>
                );
              })}
            </div>
            <div className={styles.listTitle}>{list?.title}</div>
            <div className={styles.listDescription}>{list?.description}</div>
          </div>
          <ListDetailInner data={list} listId={Number(params?.listId)} />
          <div className={styles.bottomWrapper}>
            <div className={styles.bottomLeftWrapper}>
              <div className={styles.profileImageParent} onClick={onClickMoveToPage(`/user/${list.ownerId}/mylist`)}>
                {list?.ownerProfileImageUrl !== '' ? (
                  <Image
                    src={list?.ownerProfileImageUrl}
                    alt={listLocale[language].profileImageAlt}
                    className={styles.profileImage}
                    fill
                    style={{
                      objectFit: 'cover',
                    }}
                    sizes="100vw 100vh"
                  />
                ) : (
                  <Image
                    src={fallbackProfile}
                    alt={listLocale[language].profileImageAlt}
                    className={styles.profileImage}
                    fill
                    style={{
                      objectFit: 'cover',
                    }}
                    sizes="100vw 100vh"
                  />
                )}
              </div>
              <div className={styles.informationWrapper}>
                <div className={styles.listOwnerNickname}>{list?.ownerNickname}</div>
                <div className={styles.infoDetailWrapper}>
                  <span>{timeDiff(String(list?.lastUpdatedDate))}</span>
                  {list?.isPublic === false && <LockIcon width={12} height={12} fill={vars.color.gray5} />}
                </div>
              </div>
            </div>
            <div className={styles.collaboratorWrapper} onClick={handleSetOn}>
              <Collaborators collaborators={filteredCollaborators} />
            </div>
          </div>
          <Comments />
        </>
      )}
    </>
  );
}

export default ListInformation;
