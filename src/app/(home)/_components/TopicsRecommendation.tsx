'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '@/lib/constants/queryKeys';
import getRecommendedTopics from '@/app/_api/home/getRecommendedTopics';

import * as styles from './TopicsRecommendation.css';

/* @TODO 스켈레톤 구현 */
function TopicsRecommendation() {
  const { data: topicLists, isFetching } = useQuery({
    queryKey: [QUERY_KEYS.getRecommendedTopics],
    queryFn: () => getRecommendedTopics(),
  });

  return (
    <section className={styles.wrapper}>
      <div className={styles.sectionTitleWrapper}>
        <div className={styles.sectionTitle}>이 주제로 만들어 보세요</div>
        <Link href={'/topics'}>
          <span className={styles.showMoreButton}>더보기</span>
        </Link>
      </div>
      <ul className={styles.itemsWrapper}>
        {topicLists &&
          topicLists?.map((el, idx) => {
            return (
              <li key={idx}>
                <TopicItem title={el.title} />
              </li>
            );
          })}
        <Link href={'/topics'}>
          <button className={styles.topicButton}>주제 요청하기→</button>
        </Link>
      </ul>
    </section>
  );
}

export default TopicsRecommendation;

interface TopicItemProps {
  title: string;
}

function TopicItem({ title }: TopicItemProps) {
  const router = useRouter();

  const handleTopicClick = (title: string) => {
    const encodedTitle = encodeURIComponent(title);
    router.push(`/list/create?title=${encodedTitle}`);
  };

  return (
    <div className={styles.topic} onClick={() => handleTopicClick(title)}>
      {title}
    </div>
  );
}
