import * as styles from './NoticeDetailInfo.css';

import { NoticeDetailType } from '@/lib/types/noticeType';
import formatDate from '@/lib/utils/dateFormat';
import NoticeDetailContents from './NoticeDetailContents';

interface NoticeDetailInfoProps {
  noticeData: NoticeDetailType;
}

export default function NoticeDetailInfo({ noticeData }: NoticeDetailInfoProps) {
  const { category, title, description, contents, createdDate } = noticeData;

  return (
    <>
      <header className={styles.info}>
        <span className={styles.category}>{category}</span>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <span className={styles.created}>{formatDate(createdDate)}</span>
      </header>
      <main className={styles.contents}>
        {contents.map((item, index) => (
          <NoticeDetailContents key={index} contents={item} />
        ))}
      </main>
    </>
  );
}
