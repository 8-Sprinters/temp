'use client';

import Image from 'next/image';
import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '@/lib/constants/queryKeys';
import getNotices from '../_api/notice/getNotices';

import { NoticeListItemType } from '@/lib/types/noticeType';

import * as styles from './NoticeList.css';
import Link from 'next/link';

function NoticeList() {
  const { data: notices } = useQuery<NoticeListItemType[]>({
    queryKey: [QUERY_KEYS.getAllNotices],
    queryFn: getNotices,
    staleTime: 1000 * 60 * 30,
  });

  return (
    <ul className={styles.noticeListWrapper}>
      {notices?.map((item: NoticeListItemType) => (
        <li key={item.id}>
          <NoticeListItem item={item} />
        </li>
      ))}
    </ul>
  );
}

export default NoticeList;

interface NoticeListItemProps {
  item: NoticeListItemType;
}

function NoticeListItem({ item }: NoticeListItemProps) {
  return (
    <Link href={`/notice/${item.id}`} className={styles.listItemWrapper}>
      <div>
        <h3 className={styles.noticeTitle}>{item.title}</h3>
        <p className={styles.noticeDescription}>{item.description}</p>
        <div className={styles.noticeInformationContainer}>
          <p className={styles.timeStamp}>{item.createdDate}</p>
          <p className={styles.category}>{item.category}</p>
        </div>
      </div>
      {item && item.itemImageUrl && (
        <div className={styles.imageWrapper}>
          <Image
            src={item.itemImageUrl}
            alt={item.title}
            fill
            className={styles.image}
            style={{
              objectFit: 'cover',
            }}
            sizes="100vw 100vh"
          />
        </div>
      )}
    </Link>
  );
}
