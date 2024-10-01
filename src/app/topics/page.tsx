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

// TODO: 그라데이션 적용
export default function TopicPage() {
  const router = useRouter();
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

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

  const topicsData: TopicType[] = [
    {
      categoryEngName: 'Technology',
      categoryKorName: '기술',
      title: 'AI와 머신러닝의 미래',
      description: 'AI와 머신러닝이 앞으로 어떻게 발전할지에 대한 토론',
      ownerId: 101,
      ownerNickname: 'TechGuru',
      isAnonymous: false,
    },
    {
      categoryEngName: 'Health',
      categoryKorName: '건강',
      title: '헬스케어의 혁신',
      description: '첨단 기술을 활용한 헬스케어 서비스의 혁신과 미래',
      ownerId: 102,
      ownerNickname: 'HealthExpert',
      isAnonymous: true,
    },
    {
      categoryEngName: 'Business',
      categoryKorName: '비즈니스',
      title: '비즈니스 전략 세우기',
      description: '효과적인 비즈니스 전략을 세우는 방법에 대해 논의합니다.',
      ownerId: 103,
      ownerNickname: 'BusinessMind',
      isAnonymous: false,
    },
    {
      categoryEngName: 'Education',
      categoryKorName: '교육',
      title: '온라인 교육의 장점',
      description: '온라인 교육 플랫폼의 장점과 한계에 대해 토론',
      ownerId: 104,
      ownerNickname: 'EduMaster',
      isAnonymous: true,
    },
    {
      categoryEngName: 'Entertainment',
      categoryKorName: '엔터테인먼트',
      title: '미래의 게임 기술',
      description: '가상 현실과 증강 현실을 활용한 차세대 게임 기술',
      ownerId: 105,
      ownerNickname: 'GameChanger',
      isAnonymous: false,
    },
    {
      categoryEngName: 'Science',
      categoryKorName: '과학',
      title: '우주 탐사 기술의 발전',
      description: '최근 우주 탐사 기술의 혁신과 가능성에 대해 논의',
      ownerId: 106,
      ownerNickname: 'SpaceExplorer',
      isAnonymous: true,
    },
    {
      categoryEngName: 'Sports',
      categoryKorName: '스포츠',
      title: '스포츠와 데이터 분석',
      description: '데이터 분석을 통해 스포츠 경기의 결과를 예측하는 방법',
      ownerId: 107,
      ownerNickname: 'DataSports',
      isAnonymous: false,
    },
    {
      categoryEngName: 'Politics',
      categoryKorName: '정치',
      title: '정치와 소셜 미디어',
      description: '소셜 미디어가 현대 정치에 미치는 영향에 대해 토론',
      ownerId: 108,
      ownerNickname: 'PoliticalVoice',
      isAnonymous: true,
    },
    {
      categoryEngName: 'Politics',
      categoryKorName: '정치',
      title: '정치와 소셜 미디어',
      description: '소셜 미디어가 현대 정치에 미치는 영향에 대해 토론',
      ownerId: 108,
      ownerNickname: 'PoliticalVoice',
      isAnonymous: true,
    },
    {
      categoryEngName: 'Politics',
      categoryKorName: '정치',
      title: '정치와 소셜 미디어',
      description: '소셜 미디어가 현대 정치에 미치는 영향에 대해 토론',
      ownerId: 108,
      ownerNickname: 'PoliticalVoice',
      isAnonymous: true,
    },
    {
      categoryEngName: 'Politics',
      categoryKorName: '정치',
      title: '정치와 소셜 미디어',
      description: '소셜 미디어가 현대 정치에 미치는 영향에 대해 토론',
      ownerId: 108,
      ownerNickname: 'PoliticalVoice',
      isAnonymous: true,
    },
    {
      categoryEngName: 'Politics',
      categoryKorName: '정치',
      title: '정치와 소셜 미디어',
      description: '소셜 미디어가 현대 정치에 미치는 영향에 대해 토론',
      ownerId: 108,
      ownerNickname: 'PoliticalVoice',
      isAnonymous: true,
    },
    {
      categoryEngName: 'Politics',
      categoryKorName: '정치',
      title: '정치와 소셜 미디어',
      description: '소셜 미디어가 현대 정치에 미치는 영향에 대해 토론',
      ownerId: 108,
      ownerNickname: 'PoliticalVoice',
      isAnonymous: true,
    },
    {
      categoryEngName: 'Politics',
      categoryKorName: '정치',
      title: '정치와 소셜 미디어',
      description: '소셜 미디어가 현대 정치에 미치는 영향에 대해 토론',
      ownerId: 108,
      ownerNickname: 'PoliticalVoice',
      isAnonymous: true,
    },
  ];

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
        return <TopicBox key={index} topic={topic} />;
      })}

      <button
        className={styles.floatingBox}
        onClick={() => {
          setIsBottomSheetOpen(true);
          console.log('open');
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
    </div>
  );
}
