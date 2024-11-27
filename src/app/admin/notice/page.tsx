'use client';

import { useQuery } from '@tanstack/react-query';

import * as styles from './page.css';

import getAdminNotices from '@/app/_api/notice/getAdminNotices';

import { QUERY_KEYS } from '@/lib/constants/queryKeys';
import { AdminNoticeType } from '@/lib/types/noticeType';
import formatDate from '@/lib/utils/dateFormat';

import useNotice from '@/hooks/queries/useNotice';

const TABLE_ROW = ['일시', '카테고리', '제목&소개', '편집', '미리보기', '알림', '공개'];

interface NoticeItemProps {
  notice: AdminNoticeType;
}

function NoticeItem({ notice }: NoticeItemProps) {
  const { deletNoticeMutation, sendNoticeAlarmMutation, updateNoticePublicMutation } = useNotice();

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
        <button className={styles.button}>미리보기</button>
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
  );
}

export default function AdminNoticesPage() {
  const { data: notices } = useQuery<AdminNoticeType[]>({
    queryKey: [QUERY_KEYS.getAdminAllNotice],
    queryFn: getAdminNotices,
    staleTime: 1000 * 60 * 30,
  });

  return (
    <section className={styles.page}>
      <table className={styles.table}>
        <thead>
          <tr className={styles.headRow}>
            {TABLE_ROW.map((item, index) => (
              <th key={index} className={item === '제목&소개' ? styles.rowItem : ''}>
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{notices?.map((notice) => <NoticeItem key={notice.id} notice={notice} />)}</tbody>
      </table>
    </section>
  );
}
