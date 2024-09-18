'use client';

import TopicBox from './_components/TopicBox';
import GoBackIcon from '/public/icons/arrow_left.svg';
import * as styles from './page.css';

export default function TopicPage() {
  return (
    <div className={styles.body}>
      <GoBackIcon width={24} height={24} alt="뒤로가기" />
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
      <div
        style={{
          position: 'absolute',
          bottom: '0',
          left: '0',
          width: '100%',
          height: '100px',
          background: 'linear-gradient(to top, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))',
        }}
      />
    </div>
  );
}
