import Image from 'next/image';

import { ListItemType } from '@/lib/types/exploreType';
import * as styles from './SimpleList.css';
import HeartIcon from '/public/icons/ver3/blue_heart.svg';
import { commonLocale } from '@/components/locale';
import { useLanguage } from '@/store/useLanguage';

interface SimpleListProps {
  items: ListItemType[];
}

function SimpleList({ items }: SimpleListProps) {
  return items?.map((item) => {
    return (
      <div key={item.id} className={styles.simpleItemWrapper}>
        <div className={styles.rankAndTitle}>
          <div className={styles.rankWrapper}>
            {item.rank === 1 && (
              <div className={styles.heart}>
                <HeartIcon />
              </div>
            )}
            <span className={item?.rank === 1 ? `${styles.rank1}` : `${styles.rankText}`}>{item.rank}</span>
          </div>
          <div className={item?.rank === 1 ? `${styles.titleRank1}` : `${styles.titleText}`}>{item.title}</div>
        </div>
      </div>
    );
  });
}

export default SimpleList;
