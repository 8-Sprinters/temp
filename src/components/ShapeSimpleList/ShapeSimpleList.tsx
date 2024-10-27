import Link from 'next/link';
import { assignInlineVars } from '@vanilla-extract/dynamic';

import * as styles from './ShapeSimpleList.css';

import formatDate from '@/lib/utils/dateFormat';
import { CollectionListType } from '@/lib/types/listType';

interface ShapeSimpleListProps {
  list: CollectionListType;
  hasImage: boolean;
}

export default function ShapeSimpleList({ list, hasImage }: ShapeSimpleListProps) {
  return (
    <Link
      href={`/list/${list.id}`}
      className={styles.contentVariant[hasImage ? 'round' : 'square']}
      style={assignInlineVars({
        [styles.imageUrl]: `url(${hasImage ? list.representativeImageUrl : ''})`,
      })}
    >
      <div className={styles.category}>{list.category}</div>
      <div className={styles.info}>
        <h3 className={styles.title[hasImage ? 'white' : 'black']}>{list.title}</h3>
        <p className={styles.owner[hasImage ? 'white' : 'black']}>{list.ownerNickname}</p>
      </div>
      <ul className={styles.items}>
        {list.listItems.map((item) => (
          <li key={item.id} className={styles.itemVariant[hasImage ? 'blue' : 'white']}>
            <span>
              {item.rank}
              {`.`}
            </span>
            <span>{item.title}</span>
          </li>
        ))}
      </ul>
      <p className={styles.date[hasImage ? 'white' : 'black']}>{formatDate(list.updatedDate)}</p>
    </Link>
  );
}
