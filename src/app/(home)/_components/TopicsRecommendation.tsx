'use client';
import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '@/lib/constants/queryKeys';
import getRecommendedTopics from '@/app/_api/home/getRecommendedTopics';

import * as styles from './TopicsRecommendation.css';

function TopicsRecommendation() {
  const { data: topicLists, isFetching } = useQuery({
    queryKey: [QUERY_KEYS.getHomeRecommendedLists],
    queryFn: () => getRecommendedTopics(),
  });

  console.log(topicLists);

  return (
    <section className={styles.wrapper}>
      <div className={styles.sectionTitleWrapper}>
        <div className={styles.sectionTitle}>이 주제로 만들어 보세요</div>
        <Link href={'/'}>
          <span className={styles.showMoreButton}>더보기</span>
        </Link>
      </div>
      <ul className={styles.itemsWrapper}>
        {topicLists &&
          topicLists?.map((el, idx) => {
            return (
              <li key={idx}>
                <TopicItem topic={el.topic} />
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
  topic: string;
}

function TopicItem({ topic }: TopicItemProps) {
  return <div className={styles.topic}>{topic}</div>;
}
