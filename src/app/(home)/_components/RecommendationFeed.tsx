import UsersRecommendation from '@/app/(home)/_components/RecommendedUsers';
import TopicsRecommendation from '@/app/(home)/_components/TopicsRecommendation';
import HomeRecommendedLists from '@/app/(home)/_components/HomeRecommendedLists';

function RecommendationFeed() {
  return (
    <>
      <HomeRecommendedLists />
      <TopicsRecommendation />
      <UsersRecommendation />
    </>
  );
}

export default RecommendationFeed;
