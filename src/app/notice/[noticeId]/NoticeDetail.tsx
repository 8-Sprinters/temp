'use client';

import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import getNoticeDetail from '@/app/_api/notice/getNoticeDetail';
import { QUERY_KEYS } from '@/lib/constants/queryKeys';
import { NoticeDetailType } from '@/lib/types/noticeType';

import * as styles from './NoticeDetail.css';
import NoticeDetailInfo from '@/components/NoticeDetail/NoticeDetailInfo';

function NoticeDetailComponent({ params }: { params: { noticeId: string } }) {
  const noticeId = params.noticeId;
  const noticeIdNumber = noticeId ? Number(noticeId) : null;
  const router = useRouter();

  const { data: notice } = useQuery<NoticeDetailType>({
    queryKey: [QUERY_KEYS.getNoticeDetail, noticeIdNumber],
    queryFn: () => getNoticeDetail(noticeIdNumber as number),
    enabled: noticeIdNumber !== null, // noticeIdNumber가 유효한 경우에만 실행
  });

  if (!notice) {
    return null;
  }

  return (
    <>
      <div className={styles.header}>
        <span className={styles.back} onClick={() => router.back()}>
          뒤로가기
        </span>
      </div>
      <NoticeDetailInfo noticeData={notice} />
      <section className={styles.signPostWrapper}>
        {notice?.prevNotice && (
          <Link href={`/notice/${notice?.prevNotice.id}`}>
            <div className={styles.listItemWrapper}>
              <div className={styles.sign}>이전글</div>
              <div className={styles.noticeTitle}>{notice?.prevNotice?.title}</div>
              <p className={styles.noticeDescription}>{notice?.prevNotice?.description}</p>
            </div>
          </Link>
        )}
        {notice?.nextNotice && (
          <Link href={`/notice/${notice?.nextNotice.id}`}>
            <div className={styles.listItemWrapper}>
              <div className={styles.sign}>다음글</div>
              <div className={styles.noticeTitle}>{notice?.nextNotice?.title}</div>
              <p className={styles.noticeDescription}>{notice?.nextNotice?.description}</p>
            </div>
          </Link>
        )}
        <Link href={'/notice'}>
          <button className={styles.link}>목록보기</button>
        </Link>
      </section>
    </>
  );
}

export default NoticeDetailComponent;
