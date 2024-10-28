'use client';

import { useQuery } from '@tanstack/react-query';

import * as styles from './Collections.css';

import HeaderContainer from './CollectionsHeader';
import ShapeSimpleList from '@/components/ShapeSimpleList/ShapeSimpleList';

import getCollection from '@/app/_api/collect/getCollection';
import { QUERY_KEYS } from '@/lib/constants/queryKeys';

interface CollectionsProps {
  folderId: string;
  handleSetOn: () => void;
  handleSetOnDeleteOption: () => void;
}

// TODO 무한스크롤
export default function Collections({ folderId, handleSetOn, handleSetOnDeleteOption }: CollectionsProps) {
  const { data, isFetching } = useQuery({
    queryKey: [QUERY_KEYS.getCollection],
    queryFn: () => getCollection({ folderId }),
    enabled: !!folderId,
  });

  if (isFetching) {
    return <div>로딩중</div>; // TODO 로딩 UI
  }

  if (!data?.collectionLists) {
    return <div>데이터 없음</div>; // TODO NoData UI
  }

  return (
    <>
      <HeaderContainer
        handleSetOnBottomSheet={handleSetOn}
        handleSetOnDeleteOption={handleSetOnDeleteOption}
        isHideOption={folderId === '0'}
        headerTitle={data?.folderName ?? ''}
      />

      <ul className={styles.container}>
        {data?.collectionLists.map(({ list, id }) => {
          const hasImage = !!list.representativeImageUrl;
          return <ShapeSimpleList list={list} hasImage={hasImage} key={id} />;
        })}
      </ul>
    </>
  );
}
