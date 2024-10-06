'use client';

import TopicBox from './_components/TopicBox';
import GoBackIcon from '/public/icons/arrow_left.svg';
import * as styles from './page.css';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import BottomSheet from './_components/BottomSheet';
import { useInfiniteQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '@/lib/constants/queryKeys';
import getTopics from '../_api/topics/getTopics';
import { TopicType } from '@/lib/types/topicType';
import { useUser } from '@/store/useUser';
import LoginModal from '@/components/login/LoginModal';
import Modal from '@/components/Modal/Modal';
import useBooleanOutput from '@/hooks/useBooleanOutput';
import { topicsData } from './_components/topicMock';

export default function TopicPage() {
  const router = useRouter();
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const { isOn, handleSetOn, handleSetOff } = useBooleanOutput();

  const { user } = useUser();

  //요청 주제목록 무한스크롤 리액트 쿼리 함수
  // const {
  //   data: topicsData,
  //   hasNextPage,
  //   fetchNextPage,
  //   isFetching,
  // } = useInfiniteQuery({
  //   queryKey: [QUERY_KEYS.getTopics],
  //   queryFn: ({ pageParam: cursorId }) => {
  //     return getTopics({ cursorId: cursorId });
  //   },
  //   initialPageParam: null,
  //   getNextPageParam: (lastPage) => (lastPage.hasNext ? lastPage.cursorId : null),
  // });

  const handleTopicClick = (topic: TopicType) => {
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
        <GoBackIcon alt="뒤로가기" />
      </button>
      <div className={styles.title}>이 리스트 만들어 주세요!</div>
      <div className={styles.subtitle}>
        다른 리스터들이 궁금해하는 주제들이에요! <br />
        클릭하면 그 주제로 리스트를 만들 수 있어요.
      </div>
      {topicsData?.map((topic, index) => {
        return (
          <TopicBox
            key={index}
            topic={topic}
            onClick={() => {
              handleTopicClick(topic);
            }}
          />
        );
      })}

      <button
        className={styles.floatingBox}
        onClick={() => {
          if (!user.id) {
            handleSetOn();
          } else {
            setIsBottomSheetOpen(true);
          }
        }}
      >
        주제 요청하기
      </button>
      {isBottomSheetOpen && (
        <BottomSheet
          onClose={() => {
            setIsBottomSheetOpen(false);
          }}
        />
      )}
      <div className={styles.gradientOverlay} />

      {isOn && (
        <Modal handleModalClose={handleSetOff} size="large">
          <LoginModal id="redirectedLoginBtn" />
        </Modal>
      )}
    </div>
  );
}
