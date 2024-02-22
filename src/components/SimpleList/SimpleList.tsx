import Image from 'next/image';

import { ListItemType } from '@/lib/types/exploreType';
import * as styles from './SimpleList.css';
import CrownIcon from '/public/icons/crown_new.svg';

interface SimpleListProps {
  items: ListItemType[];
}

function SimpleList({ items }: SimpleListProps) {
  return items?.map((item) => {
    return (
      <div key={item.id} className={styles.simpleItemWrapper}>
        <div className={styles.rankAndTitle}>
          <div className={styles.rankWrapper}>
            <div className={styles.rankText}>{item.rank === 1 ? <CrownIcon /> : item.rank}</div>
          </div>
          <div className={styles.titleText}>{item.title}</div>
        </div>
        <div className={styles.simpleImageWrapper}>
          {item.imageUrl && (
            <Image className={styles.simpleImage} src={item.imageUrl} alt="img설명" width={70} height={70} />
          )}
        </div>
      </div>
    );
  });
}

export default SimpleList;