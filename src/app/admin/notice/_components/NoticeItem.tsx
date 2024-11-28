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
    staleTime: 1000 * 60 * 30,
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

  const handleDeleteNotice = () => {
    deletNoticeMutation.mutate(notice.id);
  };

  const handleSendAlarm = () => {
    if (!notice.isExposed) {
      alert('공개 게시물만 알림을 보낼 수 있어요.');
      return;
    }
    if (notice.didSendAlarm) {
      alert('이미 알림을 보낸 게시물입니다.');
      return;
    }
    sendNoticeAlarmMutation.mutate(notice.id);
  };

  const handleTogglePublic = () => {
    updateNoticePublicMutation.mutate(notice.id);
  };

  return (
    <>
      <tr className={styles.bodyRow}>
        <td>{formatDate(notice.createdDate)}</td>
        <td>{notice.category}</td>
        <td className={styles.rowItem}>
          <span className={styles.rowText}>{notice.title}</span>
          <span className={styles.rowText}>{notice.description}</span>
        </td>
        <td className={styles.buttons}>
          <button className={styles.button}>수정</button>
          <button className={styles.button} onClick={handleDeleteNotice}>
            삭제
          </button>
        </td>
        <td>
          <button className={styles.button} onClick={handleSetOn}>
            미리보기
          </button>
        </td>
        <td>
          <button className={styles.button} onClick={handleSendAlarm} disabled={notice.didSendAlarm}>
            알림보내기
          </button>
        </td>
        <td>
          <select onChange={handleTogglePublic}>
            <option>{notice.isExposed ? '공개' : '비공개'}</option>
            <option>{notice.isExposed ? '비공개' : '공개'}</option>
          </select>
        </td>
      </tr>

      {isOn && (
        <Modal size="large" handleModalClose={handleSetOff}>
          <section className={styles.modal}>
            <NoticeDetailModal noticeId={notice.id} />
          </section>
        </Modal>
      )}
    </>
  );
}

export default NoticeItem;
