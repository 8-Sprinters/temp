import Categories from './Categories';
import ListRecommendation from '@/components/exploreComponents/ListsRecommendation';

import * as styles from './RecentFeed.css';

function RecentFeed() {
  return (
    <div className={styles.wrapper}>
      <Categories />
      <ListRecommendation />
      <div className={styles.listEndWrapper}>
        <div className={styles.listEndMessage}>최근 리스트를 모두 확인했어요!</div>
        <div className={styles.listPolicy}>30일 이내 수정 및 생성된 리스트</div>
      </div>
    </div>
  );
}

export default RecentFeed;
