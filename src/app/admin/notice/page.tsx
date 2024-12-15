'use client';

import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';

import * as styles from './page.css';

import getAdminNotices from '@/app/_api/notice/getAdminNotices';

import { QUERY_KEYS } from '@/lib/constants/queryKeys';
import { AdminNoticeType } from '@/lib/types/noticeType';
import NoticeItem from './_components/NoticeItem';

const TABLE_ROW = ['일시', '카테고리', '제목&소개', '편집', '미리보기', '알림', '공개'];

export default function AdminNoticesPage() {
  const { data: notices } = useQuery<AdminNoticeType[]>({
    queryKey: [QUERY_KEYS.getAdminAllNotice],
    queryFn: getAdminNotices,
    staleTime: 1000 * 60 * 30,
  });

  return (
    <section className={styles.page}>
      <div className={styles.button}>
        <Link href="/admin/notice/create" className={styles.plusNoticeButton}>
          + 작성하기
        </Link>
      </div>
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
