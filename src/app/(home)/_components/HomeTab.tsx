'use client';

import { useTab } from '@/store/useTab';

import * as styles from './HomeTab.css';

function HomeTab() {
  const { currentTab, setCurrentTab } = useTab();

  return (
    <nav className={styles.wrapper}>
      <div className={styles.buttonsWrapper}>
        <button
          onClick={() => setCurrentTab('recommendation')}
          className={currentTab === 'recommendation' ? `${styles.activeTab}` : `${styles.tabButton}`}
        >
          추천
        </button>
        <button
          onClick={() => setCurrentTab('recent')}
          className={currentTab === 'recent' ? `${styles.activeTab}` : `${styles.tabButton}`}
        >
          최신
        </button>
        <button
          onClick={() => setCurrentTab('following')}
          className={currentTab === 'following' ? `${styles.activeTab}` : `${styles.tabButton}`}
        >
          팔로잉
        </button>
      </div>
    </nav>
  );
}

export default HomeTab;
