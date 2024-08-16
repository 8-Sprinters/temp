import UsersRecommendation from '@/components/exploreComponents/RecommendedUsers';
import TopicsRecommendation from '@/app/(home)/_components/TopicsRecommendation';
import TrendingList from '@/app/(home)/_components/TrendingLists';

function RecommendationFeed() {
  return (
    <>
      <TrendingList />
      <TopicsRecommendation />
      <UsersRecommendation />
    </>
  );
}

export default RecommendationFeed;
