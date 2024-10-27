'use client';

import { useQuery } from '@tanstack/react-query';

import * as styles from './Collections.css';

import ShapeSimpleList from '@/components/ShapeSimpleList/ShapeSimpleList';
import getCollection from '@/app/_api/collect/getCollection';
import { QUERY_KEYS } from '@/lib/constants/queryKeys';

interface CollectionsProps {
  folderId: string;
}

// TODO 무한스크롤

export default function Collections({ folderId }: CollectionsProps) {
  const { data } = useQuery({
    queryKey: [QUERY_KEYS.getCollection],
    queryFn: () => getCollection({ folderId }),
  });

  return (
    <ul className={styles.container}>
      {data?.collectionLists.map(({ list, id }) => {
        const hasImage = !!list.representativeImageUrl;
        return <ShapeSimpleList list={list} hasImage={hasImage} key={id} />;
      })}
    </ul>
  );
}
