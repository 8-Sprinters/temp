import Image from 'next/image';
import Link from 'next/link';

import { NOTICE_DETAIL_MOCKDATA } from '../mockdata';
import { NoticeContentType } from '@/lib/types/noticeType';

function NoticeDetailComponent() {
  const data = NOTICE_DETAIL_MOCKDATA;

  return (
    <div>
      <section>
        <ul>
          {data.category.map((el, idx) => (
            <li key={idx.toString()}>
              <div>{el}</div>
            </li>
          ))}
        </ul>
        <h3>{data.title}</h3>
        <div>{data.description}</div>
        <p>{data.createdDate}</p>
      </section>
      <article>
        <ul>
          {data.content?.map((item: NoticeContentType, idx) => (
            <li key={idx.toString()}>
              <NoticeContent item={item} />
            </li>
          ))}
        </ul>
      </article>
      <section>
        <div>
          <div>다음글</div>
          <div>{data.prevNotice.title}</div>
          <div>{data.prevNotice.description}</div>
        </div>
        <div>
          <div>이전글</div>
          <div>{data.nextNotice.title}</div>
          <div>{data.nextNotice.description}</div>
        </div>
      </section>
      <div>
        <button>목록보기</button>
      </div>
    </div>
  );
}

export default NoticeDetailComponent;

interface NoticeContentProps {
  item: NoticeContentType;
}

function NoticeContent({ item }: NoticeContentProps) {
  return (
    <div>
      {item.type === 'subtitle' && <h4>{item.description}</h4>}
      {item.type === 'body' && <p>{item.description}</p>}
      {item.type === 'image' && <Image src={item.imageUrl} alt={item.type} width={100} height={100} />}
      {item.type === 'button' && (
        <Link href={item.buttonLink}>
          <button>{item.buttonName}</button>
        </Link>
      )}
      {item.type === 'line' && <div></div>}
      {item.type === 'notice' && <p></p>}
    </div>
  );
}
