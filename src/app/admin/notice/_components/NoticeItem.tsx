import { useQuery } from '@tanstack/react-query';

import * as styles from './NoticeItem.css';

import useNotice from '@/hooks/queries/useNotice';
import useBooleanOutput from '@/hooks/useBooleanOutput';

import Modal from '@/components/Modal/Modal';
import NoticeDetailInfo from '@/components/NoticeDetail/NoticeDetailInfo';

import { AdminNoticeType, NoticeDetailType } from '@/lib/types/noticeType';
import formatDate from '@/lib/utils/dateFormat';
import { QUERY_KEYS } from '@/lib/constants/queryKeys';

import getNoticeDetail from '@/app/_api/notice/getNoticeDetail';

interface NoticeDetailModalProps {
  noticeId: number;
}

function NoticeDetailModal({ noticeId }: NoticeDetailModalProps) {
  const { data: notices } = useQuery<NoticeDetailType>({
    queryKey: [QUERY_KEYS.getNoticeDetail],
    queryFn: () => getNoticeDetail(noticeId),
    enabled: !!noticeId,
  });

  return <>{notices && <NoticeDetailInfo noticeData={notices} />}</>;
}

interface NoticeItemProps {
  notice: AdminNoticeType;
}

function NoticeItem({ notice }: NoticeItemProps) {
  const { deletNoticeMutation, sendNoticeAlarmMutation, updateNoticePublicMutation } = useNotice();
  const { isOn, handleSetOn, handleSetOff } = useBooleanOutput();

  const { id, title, description, didSendAlarm, isExposed, category, createdDate } = notice;

  const handleDeleteNotice = () => {
    deletNoticeMutation.mutate(id);
  };

  const handleSendAlarm = () => {
    if (!isExposed) {
      alert('공개 게시물만 알림을 보낼 수 있어요.');
      return;
    }
    if (didSendAlarm) {
      alert('이미 알림을 보낸 게시물입니다.');
      return;
    }
    sendNoticeAlarmMutation.mutate(id, {
      onSuccess: () => alert('알림을 보냈어요.'),
    });
  };

  const handleTogglePublic = () => {
    updateNoticePublicMutation.mutate(id);
  };

  return (
    <>
      <tr className={styles.bodyRow}>
        <td>{formatDate(createdDate)}</td>
        <td>{category}</td>
        <td className={styles.rowItem}>
          <span className={styles.rowText}>{title}</span>
          <span className={styles.rowText}>{description}</span>
        </td>
        <td className={styles.buttons}>
          <button className={styles.variantsButton.default}>수정</button>
          <button className={styles.variantsButton.default} onClick={handleDeleteNotice}>
            삭제
          </button>
        </td>
        <td>
          <button className={styles.variantsButton.default} onClick={handleSetOn}>
            미리보기
          </button>
        </td>
        <td>
          <button
            className={didSendAlarm ? styles.variantsButton.disabled : styles.variantsButton.default}
            onClick={handleSendAlarm}
            disabled={didSendAlarm}
          >
            {`알림 ${didSendAlarm ? '완료' : '보내기'}`}
          </button>
        </td>
        <td>
          <select onChange={handleTogglePublic} value={isExposed ? '공개' : '비공개'}>
            <option>공개</option>
            <option>비공개</option>
          </select>
        </td>
      </tr>

      {isOn && (
        <Modal size="large" handleModalClose={handleSetOff}>
          <section className={styles.modal}>
            <NoticeDetailModal noticeId={id} />
          </section>
        </Modal>
      )}
    </>
  );
}

export default NoticeItem;
