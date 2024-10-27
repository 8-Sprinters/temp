'use client';

import TopicBox from './_components/TopicBox';
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
import useIntersectionObserver from '@/hooks/useIntersectionObserver';

export default function TopicPage() {
  const router = useRouter();
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const { isOn, handleSetOn, handleSetOff } = useBooleanOutput();
  const { user } = useUser();

  const {
    data: topicsData,
    hasNextPage,
    fetchNextPage,
    isFetching,
    refetch,
  } = useInfiniteQuery({
    queryKey: [QUERY_KEYS.getTopics],
    queryFn: ({ pageParam: cursorId = null }) => getTopics({ cursorId }),
    initialPageParam: null,
    getNextPageParam: (lastPage) => (lastPage.hasNext ? lastPage.cursorId : null),
  });

  const ref = useIntersectionObserver(() => {
    if (hasNextPage) {
      fetchNextPage();
    }
  });

  const handleTopicClick = (topic: TopicType) => {
    router.push(`/list/create?title=${topic.title}&category=${topic.categoryKorName}`);
  };

  const handleBottomSheetClose = () => {
    setIsBottomSheetOpen(false);
    refetch();
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
      <div className={styles.title}>이 리스트 만들어 주세요!</div>
      <div className={styles.subtitle}>
        다른 리스터들이 궁금해하는 주제들이에요! <br />
        클릭하면 그 주제로 리스트를 만들 수 있어요.
      </div>
      <>
        {isFetching || topicsData?.pages[0].topics.length === 0 ? (
          <></>
        ) : (
          topicsData?.pages[0].topics.map((topic: TopicType, index: number) => {
            return (
              <TopicBox
                key={index}
                topic={topic}
                onClick={() => {
                  handleTopicClick(topic);
                }}
              />
            );
          })
        )}
        {hasNextPage && <div ref={ref}></div>}
      </>

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

      {isBottomSheetOpen && <BottomSheet onClose={handleBottomSheetClose} />}

      <div className={styles.gradientOverlay} />

      {isOn && (
        <Modal handleModalClose={handleSetOff} size="large">
          <LoginModal id="redirectedLoginBtn" />
        </Modal>
      )}
    </div>
  );
}
