'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';
import { usePathname } from 'next/navigation';

import getNoticeDetail from '@/app/_api/notice/getNoticeDetail';
import { NoticeContentType } from '@/lib/types/noticeType';
import { QUERY_KEYS } from '@/lib/constants/queryKeys';
import { NoticeDetailType } from '@/lib/types/noticeType';

import * as styles from './NoticeDetail.css';
import NoticeDetailInfo from '@/components/NoticeDetail/NoticeDetailInfo';

function NoticeDetailComponent() {
  const pathname = usePathname();
  const noticeId = pathname?.split('/').pop();
  const noticeIdNumber = noticeId ? Number(noticeId) : null;

  const {
    data: notice,
    isLoading,
    isError,
  } = useQuery<NoticeDetailType>({
    queryKey: [QUERY_KEYS.getNoticeDetail, noticeIdNumber],
    queryFn: () => getNoticeDetail(noticeIdNumber as number),
    enabled: noticeIdNumber !== null, // noticeIdNumber가 유효한 경우에만 실행
  });

  console.log(noticeId);

  if (!notice) {
    return null;
  }

  return (
    <>
      {/* <section className={styles.titleSection}>
        <div>
          <span className={styles.category}>{notice?.category}</span>
        </div>
        <h3 className={styles.title}>{notice?.title}</h3>
        <div className={styles.titleSectionDescription}>{notice?.description}</div>
        <p className={styles.titleSectionCreatedDate}>{notice?.createdDate}</p>
      </section>
      <article className={styles.articleWrapper}>
        <ul>
          {notice?.contents?.map((item: NoticeContentType, idx) => (
            <li key={idx.toString()}>
              <NoticeContent item={item} />
            </li>
          ))}
        </ul>
      </article> */}
      <NoticeDetailInfo noticeData={notice} />
      <section className={styles.signPostWrapper}>
        {notice?.prevNotice && (
          <div className={styles.listItemWrapper}>
            <div className={styles.sign}>이전글</div>
            <div className={styles.noticeTitle}>{notice?.prevNotice?.title}</div>
            <p className={styles.noticeDescription}>{notice?.prevNotice?.description}</p>
          </div>
        )}
        {notice?.nextNotice && (
          <div className={styles.listItemWrapper}>
            <div className={styles.sign}>다음글</div>
            <div className={styles.noticeTitle}>{notice?.nextNotice?.title}</div>
            <p className={styles.noticeDescription}>{notice?.nextNotice?.description}</p>
          </div>
        )}
        <Link href={'/notice'}>
          <button className={styles.link}>목록보기</button>
        </Link>
      </section>
    </>
  );
}

export default NoticeDetailComponent;

interface NoticeContentProps {
  item: NoticeContentType;
}

function NoticeContent({ item }: NoticeContentProps) {
  return (
    <>
      {item.type === 'subtitle' && <h4 className={styles.articleSubtitle}>{item.description}</h4>}
      {item.type === 'body' && <p className={styles.articleDescription}>{item.description}</p>}
      {item.type === 'image' && (
        <div className={styles.articleImageWrapper}>
          <Image src={item.imageUrl as string} alt={item.type} fill className={styles.articleImage} />
        </div>
      )}
      {item.type === 'button' && (
        <Link href={item.buttonLink as string}>
          <button className={styles.articleButton}>{item.buttonName}</button>
        </Link>
      )}
      {item.type === 'line' && <div className={styles.articleLine}></div>}
      {item.type === 'note' && <textarea value={item.description} readOnly className={styles.articleNotice} />}
    </>
  );
}
