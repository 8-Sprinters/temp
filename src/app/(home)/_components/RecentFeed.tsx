'use client';

import { useState } from 'react';

import FeedLists from '@/app/(home)/_components/FeedLists';

import * as styles from './RecentFeed.css';
import Categories from './Categories';

function RecentFeed() {
  const [selectedCategory, setSelectedCategory] = useState('entire');

  const handleClickCategory = (name: string) => {
    setSelectedCategory(name);
  };

  return (
    <div className={styles.wrapper}>
      <Categories onClick={handleClickCategory} />
      <FeedLists tab="recent" category={selectedCategory} />
      <div className={styles.listEndWrapper}>
        <div className={styles.listEndMessage}>최근 리스트를 모두 확인했어요!</div>
        <div className={styles.listPolicy}>30일 이내 수정 및 생성된 리스트</div>
      </div>
    </div>
  );
}

export default RecentFeed;
