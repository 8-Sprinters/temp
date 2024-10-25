'use client';

import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';
import { assignInlineVars } from '@vanilla-extract/dynamic';

import * as styles from './Collections.css';

import getCollection from '@/app/_api/collect/getCollection';
import { QUERY_KEYS } from '@/lib/constants/queryKeys';
import formatDate from '@/lib/utils/dateFormat';

interface CollectionsProps {
  folderId: string;
}

// TODO 무한스크롤

export default function Collections({ folderId }: CollectionsProps) {
  const { data } = useQuery({
    queryKey: [QUERY_KEYS.getCollection],
    queryFn: () => getCollection({ folderId }),
  });

  console.log(data);

  return (
    <ul className={styles.container}>
      {data?.collectionLists.map(({ list, id }) => {
        const hasImage = !!list.representativeImageUrl;
        return (
          <Link
            key={id}
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
      })}
    </ul>
  );
}
