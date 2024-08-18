import Link from 'next/link';

import * as styles from './TopicsRecommendation.css';
/**목데이터 지우기 */
import { TopicsData } from '../mock/mockdata';

function TopicsRecommendation() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.sectionTitleWrapper}>
        <div className={styles.sectionTitle}>이 주제로 만들어 보세요</div>
        <Link href={'/'}>
          <span className={styles.showMoreButton}>더보기</span>
        </Link>
      </div>
      <ul className={styles.itemsWrapper}>
        {TopicsData.map((el, idx) => {
          return (
            <li key={idx}>
              <TopicItem title={el} />
            </li>
          );
        })}
        <button className={styles.topicButton}>주제 요청하기→</button>
      </ul>
    </section>
  );
}

export default TopicsRecommendation;

interface TopicItemProps {
  title: string;
}

function TopicItem({ title }: TopicItemProps) {
  return <div className={styles.topic}>{title}</div>;
}
