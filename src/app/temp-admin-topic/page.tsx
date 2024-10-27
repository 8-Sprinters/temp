'use client';
import { useMemo } from 'react';

import AdminTopicBox from './_components/AdminTopicBox';
import * as styles from './page.css';
import { useRouter } from 'next/navigation';
import BottomSheet from './_components/BottomSheet';
import { useInfiniteQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '@/lib/constants/queryKeys';
import getAdminTopics from '../_api/adminTopics/getAdminTopics';
import { RequestedTopicType } from '@/lib/types/requestedTopicType';
import { useUser } from '@/store/useUser';
import LoginModal from '@/components/login/LoginModal';
import Modal from '@/components/Modal/Modal';
import { requestedTopicData } from './_components/AdminTopicMock';

export default function TopicPage() {
  const router = useRouter();

  const { user } = useUser();

  const pages = useMemo(() => Array.from({ length: 5 }, (_, idx) => idx + 1), []);

  //요청 주제목록 무한스크롤 리액트 쿼리 함수
  // const {
  //   data: topicsData,
  //   hasNextPage,
  //   fetchNextPage,
  //   isFetching,
  // } = useInfiniteQuery({
  //   queryKey: [QUERY_KEYS.getAdminTopics],
  //   queryFn: ({ pageParam: cursorId }) => {
  //     return getTopics({ cursorId: cursorId });
  //   },
  //   initialPageParam: null,
  //   getNextPageParam: (lastPage) => (lastPage.hasNext ? lastPage.cursorId : null),
  // });

  const handleTopicClick = (topic: RequestedTopicType) => {
    router.push(`/list/create?title=${topic.title}&category=${topic.categoryKorName}`);
  };

  return (
    <div className={styles.body}>
      <button
        className={styles.goBackButton}
        onClick={() => {
          router.back();
        }}
      >
        뒤로가기
      </button>
      <div className={styles.title}>요청 주제 관리</div>
      {requestedTopicData?.map((topic, index: number) => {
        return (
          <AdminTopicBox
            key={index}
            topic={topic}
            onClick={() => {
              handleTopicClick(topic);
            }}
          />
        );
      })}
      <ul className={styles.pagesList}>
        {pages.map((page) => (
          <li key={page}>
            <button className={styles.page}>{page}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
