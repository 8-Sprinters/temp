import Image from 'next/image';

import { NoticeListItemType } from '@/lib/types/noticeType';
import { NOTICE_LIST_MOCKDATA } from './mockdata';

import * as styles from './NoticeList.css';
import Link from 'next/link';

function NoticeList() {
  return (
    <ul className={styles.noticeListWrapper}>
      {NOTICE_LIST_MOCKDATA?.map((item: NoticeListItemType) => (
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
    <Link href={`/notices/${item.id}`} className={styles.listItemWrapper}>
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
