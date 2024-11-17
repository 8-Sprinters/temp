import Image from 'next/image';
import Link from 'next/link';

import { NOTICE_DETAIL_MOCKDATA } from '../mockdata';
import { NoticeContentType } from '@/lib/types/noticeType';

import * as styles from './NoticeDetail.css';

function NoticeDetailComponent() {
  const data = NOTICE_DETAIL_MOCKDATA;

  return (
    <>
      <section className={styles.titleSection}>
        <div>
          <span className={styles.category}>{data.category}</span>
        </div>
        <h3 className={styles.title}>{data.title}</h3>
        <div className={styles.titleSectionDescription}>{data.description}</div>
        <p className={styles.titleSectionCreatedDate}>{data.createdDate}</p>
      </section>
      <article className={styles.articleWrapper}>
        <ul>
          {data.content?.map((item: NoticeContentType, idx) => (
            <li key={idx.toString()}>
              <NoticeContent item={item} />
            </li>
          ))}
        </ul>
      </article>
      <section className={styles.signPostWrapper}>
        <div className={styles.listItemWrapper}>
          <div className={styles.sign}>다음글</div>
          <div className={styles.noticeTitle}>{data.prevNotice.title}</div>
          <p className={styles.noticeDescription}>{data.prevNotice.description}</p>
        </div>
        <div className={styles.listItemWrapper}>
          <div className={styles.sign}>이전글</div>
          <div className={styles.noticeTitle}>{data.nextNotice.title}</div>
          <p className={styles.noticeDescription}>{data.nextNotice.description}</p>
        </div>
        <Link href={'/notices'}>
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
