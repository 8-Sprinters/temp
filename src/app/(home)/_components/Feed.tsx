'use client';

import { useTab } from '@/store/useTab';

import HomeTab from '@/app/(home)/_components/HomeTab';
import RecommendationFeed from '@/app/(home)/_components/RecommendationFeed';
import FollowingFeed from '@/app/(home)/_components/FollowingFeed';
import RecentFeed from '@/app/(home)/_components/RecentFeed';

function Feed() {
  const { currentTab } = useTab();

  return (
    <div>
      <HomeTab />
      {currentTab === 'recommendation' && <RecommendationFeed />}
      {currentTab === 'recent' && <RecentFeed />}
      {currentTab === 'following' && <FollowingFeed />}
    </div>
  );
}

export default Feed;
