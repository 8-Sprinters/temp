'use client';

import { useTab } from '@/store/useTab';

import HomeTab from '@/app/(home)/_components/HomeTab';
import RecommendationFeed from '@/app/(home)/_components/RecommendationFeed';
import FollowingFeed from '@/app/(home)/_components/FollowingFeed';
import RecentFeed from '@/app/(home)/_components/RecentFeed';

import FloatingContainer from '@/components/floatingButton/FloatingContainer';
import ArrowUpButton from '@/components/floatingButton/ArrowUpButton';
import ShareLinkButton from '@/components/floatingButton/ShareLinkButton';

function Feed() {
  const { currentTab } = useTab();

  return (
    <div>
      <HomeTab />
      {currentTab === 'recommendation' && <RecommendationFeed />}
      {currentTab === 'recent' && <RecentFeed />}
      {currentTab === 'following' && <FollowingFeed />}
      <FloatingContainer>
        <ArrowUpButton />
        <ShareLinkButton />
      </FloatingContainer>
    </div>
  );
}

export default Feed;
