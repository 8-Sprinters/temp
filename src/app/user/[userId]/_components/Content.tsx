'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { MasonryGrid } from '@egjs/react-grid';
import { Skeleton } from '@mui/material';

import * as styles from './Content.css';
import { vars } from '@/styles/theme.css';
import BookmarkIcon from '/public/icons/new/bookmark.svg';

import Card from './Card';
import Categories from './Categories';
import NoDataComponent from '@/components/NoData/NoDataComponent';

import getUserOne from '@/app/_api/user/getUserOne';
import getAllList from '@/app/_api/list/getAllList';

import { QUERY_KEYS } from '@/lib/constants/queryKeys';
import { UserType } from '@/lib/types/userProfileType';
import { AllListType } from '@/lib/types/listType';

import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { userLocale } from '@/app/user/locale';
import { useLanguage } from '@/store/useLanguage';

interface ContentProps {
  userId: number;
  type: string;
}

const DEFAULT_CATEGORY = 'entire';

export default function Content({ userId, type }: ContentProps) {
  const [visibleTopGradient, setVisibleTopGradient] = useState(false);
  const [visibleBottomGradient, setVisibleBottomGradient] = useState(true);

  const { language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState(DEFAULT_CATEGORY);

  const { data: userData } = useQuery<UserType>({
    queryKey: [QUERY_KEYS.userOne, userId],
    queryFn: () => getUserOne(userId),
  });

  const {
    data: listsData,
    hasNextPage,
    fetchNextPage,
    isLoading,
  } = useInfiniteQuery<AllListType>({
    queryKey: [QUERY_KEYS.getAllList, userId, type, selectedCategory],
    queryFn: ({ pageParam: cursorUpdatedDate }) => {
      return getAllList(userId, type, selectedCategory, cursorUpdatedDate as string);
    },
    initialPageParam: null,
    getNextPageParam: (lastPage) => (lastPage.hasNext ? lastPage.cursorUpdatedDate : null),
    staleTime: 1000 * 60 * 5, // 5분 설정
  });

  const lists = useMemo(() => {
    return listsData
      ? listsData.pages.flatMap(({ feedLists }) =>
          userData && userData.isOwner ? feedLists : feedLists.filter((list) => list.isPublic)
        )
      : [];
  }, [listsData, userData]);

  const ref = useIntersectionObserver(() => {
    if (hasNextPage) {
      fetchNextPage();
    }
  });

  /** 콘텐츠 상단 영역(sticky)이 붙어있음을 감지하여 그라데이션 스타일 적용 */
  const stickyContainer = useIntersectionObserver(
    (entry) => {
      if (entry.intersectionRatio < 1) {
        // 메뉴가 상단에 sticky 되었을 떄
        setVisibleTopGradient(true);
      } else if (entry.intersectionRatio === 1) {
        // sticky가 해제되었을 뗴
        setVisibleTopGradient(false);
      }
    },
    [0, 1]
  );

  /** 스크롤이 끝났음을 감지하여 하단 영역 그라데이션 스타일 적용 */
  const scrollBottomTarget = useIntersectionObserver(
    (entry) => {
      if (entry.intersectionRatio < 1) {
        setVisibleBottomGradient(true);
      } else {
        setVisibleBottomGradient(false);
      }
    },
    [0, 1]
  );

  const handleFetchListsOnCategory = (category: string) => {
    setSelectedCategory(category);
  };

  // TODO 사용자 정보 로딩중일때 스켈레톤 UI
  if (!userData) {
    return <></>;
  }

  return (
    <div className={styles.container}>
      <div ref={stickyContainer} className={styles.stickyContainer}>
        <div className={styles.contentInfo}>
          <h2 className={styles.infoTitle}>{`${userData?.nickname}님의 리스트`}</h2>
          <Link href="/collection" className={styles.collectionButton}>
            <BookmarkIcon fill={vars.color.blue} />
            <span>콜렉션</span>
          </Link>
        </div>
        <Categories handleFetchListsOnCategory={handleFetchListsOnCategory} selectedCategory={selectedCategory} />
        <div className={`${styles.scrollDivTop} ${visibleTopGradient ? styles.visibleScrollDivTop : ''}`}></div>
      </div>

      {!isLoading && !lists.length && (
        <div className={styles.nodataContainer}>
          <NoDataComponent message={userLocale[language].noListMessage} />
        </div>
      )}
      <div className={styles.cards}>
        {isLoading ? (
          <div className={styles.gridSkeletonContainer}>
            {new Array(4).fill(0).map((_, index) => (
              <Skeleton key={index} variant="rounded" height={200} animation="wave" />
            ))}
          </div>
        ) : (
          <MasonryGrid className="container" gap={16} defaultDirection={'end'} align={'start'} column={2}>
            {lists.map((list) => (
              <Card key={list.id} list={list} isOwner={!!userData?.isOwner} userId={userId} />
            ))}
          </MasonryGrid>
        )}
        <div className={styles.target} ref={ref}></div>
      </div>
      <div ref={scrollBottomTarget} className={styles.scrollBottomTarget}></div>
      <div className={`${styles.scrollDivBottom} ${visibleBottomGradient ? styles.visibleScrollDiv : ''}`}></div>
    </div>
  );
}
