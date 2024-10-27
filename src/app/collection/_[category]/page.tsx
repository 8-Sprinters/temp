'use client';

import { useRouter, useParams } from 'next/navigation';

import Header from '@/components/Header/Header';
import * as styles from './page.css';
import { useInfiniteQuery, useQueryClient } from '@tanstack/react-query';
import { QUERY_KEYS } from '@/lib/constants/queryKeys';
import { useEffect, useMemo } from 'react';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import getCollection from '@/app/_api/collect/__getCollection';
import Top3CardSkeleton from '@/app/collection/_[category]/_components/Top3CardSkeleton';
import NoData from '@/app/collection/_[category]/_components/NoData';
import { CollectionType } from '@/lib/types/listType';
import Top3Card from '@/app/collection/_[category]/_components/Top3Card';
import { categoriesLocale } from '@/app/collection/locale';
import { useLanguage } from '@/store/useLanguage';

type categoryNameType =
  | 'entire'
  | 'culture'
  | 'life'
  | 'place'
  | 'music'
  | 'movie_drama'
  | 'book'
  | 'animal_plant'
  | 'etc'
  | 'food';

function CollectionByCategory() {
  const { language } = useLanguage();
  const queryClient = useQueryClient();
  const router = useRouter();
  const params = useParams<{ category: string }>();
  const category = params?.category ?? 'entire';

  // 콜렉션 조회
  const {
    data: collectionData,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    isFetching,
  } = useInfiniteQuery({
    queryKey: [QUERY_KEYS.getCollection],
    queryFn: ({ pageParam: cursorId }) => {
      return getCollection({ category, cursorId });
    },
    initialPageParam: null,
    getNextPageParam: (lastPage) => (lastPage.hasNext ? lastPage.cursorId : null),
  });

  // 검색결과 변수
  const result = useMemo(() => {
    const resultList = collectionData ? collectionData.pages.flatMap(({ collectionLists }) => collectionLists) : [];
    return { resultList };
  }, [collectionData]);

  // 옵저버
  const ref = useIntersectionObserver(() => {
    if (hasNextPage) {
      fetchNextPage();
    }
  });

  // 쿼리 리셋
  useEffect(() => {
    return () => {
      queryClient.removeQueries({
        queryKey: [QUERY_KEYS.getCollection],
        exact: true,
      });
    };
  }, [queryClient, category]);

  const Result = () => {
    return (
      <div className={styles.container}>
        <div className={styles.cardsWrapper}>
          <div className={styles.cards}>
            {result?.resultList?.map((collectionList: CollectionType) => (
              <Top3Card key={collectionList.id} collectionList={collectionList} />
            ))}
            {isFetchingNextPage && result?.resultList?.map((_, index) => <Top3CardSkeleton key={index} />)}
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <Header
        title={categoriesLocale[language][category as categoryNameType]}
        left="back"
        leftClick={() => {
          router.back();
        }}
        right={<div></div>}
      />
      <>
        {!collectionData && isFetching ? ( // 최초 검색결과 받기 전
          <div className={styles.cardsWrapper}>
            <div className={styles.cards}>
              {Array.from({ length: 6 }).map((_, index) => (
                <Top3CardSkeleton key={index} />
              ))}
            </div>
          </div>
        ) : result.resultList?.length > 0 ? ( // 데이터가 있는 경우
          <Result />
        ) : (
          <NoData />
        )}
        {hasNextPage && <div ref={ref}></div>}
      </>
    </>
  );
}

export default CollectionByCategory;
