'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useMemo } from 'react';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import { useRouter } from 'next/navigation';

import SimpleList from '@/components/SimpleList/SimpleList';
import getRecentLists from '@/app/_api/home/getRecentLists';
import getFollowingLists from '@/app/_api/home/getFollowingLists';
import { QUERY_KEYS } from '@/lib/constants/queryKeys';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import * as styles from './FeedLists.css';
import { exploreBackgroundColors } from '@/lib/constants/exploreListBackgroundColor';
import fallbackProfile from '/public/images/fallback_profileImage.webp';
import NoDataComponent from '@/components/NoData/NoDataComponent';
import NoDataButton from '@/components/NoData/NoDataButton';

import { commonLocale } from '@/components/locale';
import { useLanguage } from '@/store/useLanguage';
import { useTab } from '@/store/useTab';
import useMoveToPage from '@/hooks/useMoveToPage';

interface FeedListsType {
  category?: string;
  tab?: 'recent' | 'following';
}

function FeedLists({ category, tab = 'recent' }: FeedListsType) {
  const current_QueryKey = tab === 'recent' ? [QUERY_KEYS.getRecentLists, category] : [QUERY_KEYS.getFollowingLists];
  const { setCurrentTab } = useTab();
  const { onClickMoveToPage } = useMoveToPage();

  //리스트 무한스크롤 리액트 쿼리 함수
  const {
    data: result,
    hasNextPage,
    fetchNextPage,
    isFetching,
  } = useInfiniteQuery({
    queryKey: current_QueryKey,
    queryFn: ({ pageParam: cursorUpdatedDate }) => {
      if (tab === 'recent') {
        return getRecentLists({ cursorUpdatedDate, category });
      } else {
        return getFollowingLists({ cursorUpdatedDate });
      }
    },
    initialPageParam: null,
    getNextPageParam: (lastPage) => (lastPage.hasNext ? lastPage.cursorUpdatedDate : null),
  });

  const ref = useIntersectionObserver(() => {
    if (hasNextPage) {
      fetchNextPage();
    }
  });

  //리스트 변수화
  const feedLists = useMemo(() => {
    const list = result ? result.pages.flatMap(({ lists }) => lists) : [];
    return list;
  }, [result]);

  const handleClickNoDataButton = () => {
    setCurrentTab('recommendation');
  };

  // if (!result) {
  //   return (
  //     <section className={styles.wrapperOuter}>
  //       <ListsSkeleton />
  //     </section>
  //   );
  // }

  return (
    <section className={styles.wrapperOuter}>
      {isFetching ? (
        <div>불러오는 중입니다..</div>
      ) : (
        <ul>
          {feedLists && feedLists?.length !== 0 ? (
            feedLists?.map((item, index) => {
              return (
                <li key={item.id} onClick={onClickMoveToPage(`/list/${item.id}`)} className={styles.listItemWrapper}>
                  <FeedListItem item={item} index={index} />
                </li>
              );
            })
          ) : (
            <div>
              {tab === 'following' && (
                <NoDataComponent
                  message="팔로우 중인 리스터가 없어요 💦"
                  button={<NoDataButton onClick={handleClickNoDataButton}>추천 리스터 보러가기</NoDataButton>}
                />
              )}
            </div>
          )}
          <div ref={ref}></div>
        </ul>
      )}
    </section>
  );
}

export default FeedLists;

/**@Todo 아이템 타입 정리 */
interface FeedListItemType {
  index: number;
  item: any;
}

function FeedListItem({ item, index }: FeedListItemType) {
  const { language } = useLanguage();
  const { onClickMoveToPage } = useMoveToPage();

  const COLOR_INDEX = (num: number) => num % 5;

  return (
    <div
      className={styles.listWrapper}
      style={assignInlineVars({ [styles.listBackground]: exploreBackgroundColors[COLOR_INDEX(index)] })}
    >
      <div className={styles.listTopWrapper}>
        <div className={styles.ownerInformationWrapper} onClick={onClickMoveToPage(`/user/${item.ownerId}/mylist`)}>
          <div className={styles.profileImageWrapper}>
            {item?.ownerProfileImage ? (
              <Image
                src={item.ownerProfileImage}
                alt={commonLocale[language].listOwnerImage}
                fill
                className={styles.ownerProfileImage}
                style={{
                  objectFit: 'cover',
                }}
                sizes="100vw 100vh"
              />
            ) : (
              <Image
                src={fallbackProfile}
                alt={commonLocale[language].listOwnerImage}
                fill
                className={styles.ownerProfileImage}
                style={{
                  objectFit: 'cover',
                }}
                sizes="100vw 100vh"
              />
            )}
          </div>
          <div className={styles.ownerNicknameText}>{item.ownerNickname}</div>
        </div>
        <div className={styles.version}>{`업데이트 ${item.updateCount}회째`}</div>
      </div>
      <div className={styles.listInformationWrapper}>
        <div className={styles.listTitle}>{item.title}</div>
        <div className={styles.listDescription}>{item.description}</div>
      </div>
      <div className={styles.simpleListWrapper}>
        <SimpleList items={item?.items} />
      </div>
    </div>
  );
}
