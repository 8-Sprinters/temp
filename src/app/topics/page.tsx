'use client';

import TopicBox from './_components/TopicBox';
import GoBackIcon from '/public/icons/arrow_left.svg';
import * as styles from './page.css';
import { useRouter } from 'next/navigation';

export default function TopicPage() {
  const router = useRouter();

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
      <TopicBox />
      <TopicBox />
      <TopicBox />
      <TopicBox />
      <TopicBox />
      <TopicBox />
      <TopicBox />
      <TopicBox />
    </div>
  );
}
