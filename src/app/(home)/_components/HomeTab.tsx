'use client';

import { useTab } from '@/store/useTab';

import * as styles from './HomeTab.css';

function HomeTab() {
  const { currentTab, setCurrentTab } = useTab();

  const getButtonStyle = (selectedTap: string) => {
    return currentTab === selectedTap ? styles.activeTab : styles.tabButton;
  };

  return (
    <nav className={styles.wrapper}>
      <div className={styles.buttonsWrapper}>
        <button onClick={() => setCurrentTab('recommendation')} className={getButtonStyle('recommendation')}>
          추천
        </button>
        <button onClick={() => setCurrentTab('recent')} className={getButtonStyle('recent')}>
          최신
        </button>
        <button onClick={() => setCurrentTab('following')} className={getButtonStyle('following')}>
          팔로잉
        </button>
      </div>
    </nav>
  );
}

export default HomeTab;
