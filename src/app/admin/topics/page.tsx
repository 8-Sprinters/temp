// 임시 요청 주제 페이지
'use client';
import { useMemo, useRef } from 'react';

import AdminTopicBox from './_components/AdminTopicBox';
import { useRouter } from 'next/navigation';
import BottomSheet from './_components/BottomSheet';
import { useInfiniteQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '@/lib/constants/queryKeys';
import getAdminTopics from '@/app/_api/adminTopics/getAdminTopics';
import { RequestedTopicType } from '@/lib/types/requestedTopicType';
import { useUser } from '@/store/useUser';
import { requestedTopicData } from './_components/AdminTopicMock';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';

import * as styles from './page.css';

export default function AdminTopicsPage() {
  //페이지네이션 코드
  // const pages = useMemo(() => Array.from({ length: 5 }, (_, idx) => idx + 1), []);

  //요청 주제목록 무한스크롤 리액트 쿼리 함수
  const {
    data: topicsData,
    hasNextPage,
    fetchNextPage,
    isFetching,
  } = useInfiniteQuery({
    queryKey: [QUERY_KEYS.getAdminTopics],
    queryFn: ({ pageParam: cursorId }) => {
      return getAdminTopics({ cursorId: cursorId });
    },
    initialPageParam: null,
    getNextPageParam: (lastPage) => (lastPage.hasNext ? lastPage.cursorId : null),
  });

  //댓글 주요 정보 변수화
  const topics = useMemo(() => {
    const totalCount = topicsData ? topicsData.pages[topicsData.pages.length - 1].totalCount : 0;
    const topicsList = topicsData ? topicsData.pages.flatMap(({ topics }) => topics) : [];
    return { topicsList, totalCount };
  }, [topicsData]);

  //옵저버 훅 사용
  const ref = useIntersectionObserver(() => {
    if (hasNextPage) {
      fetchNextPage();
    }
  });

  console.log(topicsData);

  return (
    <section>
      <div className={styles.body}>
        <h1 className={styles.title}>요청 주제 관리</h1>
        {topics &&
          topics?.topicsList.map((topic: any, index: number) => {
            return <AdminTopicBox key={index} topic={topic} />;
          })}
        {/* 추후 페이지네이션으로 전환하기 위한 코드 */}
        {/* <ul className={styles.pagesList}>
          {pages.map((page) => (
            <li key={page}>
              <button className={styles.page}>{page}</button>
            </li>
          ))}
        </ul> */}
      </div>
      {/* {옵저버를 위한 요소} */}
      <div ref={ref}></div>
    </section>
  );
}
