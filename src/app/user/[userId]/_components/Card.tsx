import { memo } from 'react';

import * as styles from './Card.css';
import { vars } from '@/styles/theme.css';
import LockIcon from '/public/icons/new/lock.svg';

import useMoveToPage from '@/hooks/useMoveToPage';
import { ListType } from '@/lib/types/listType';

import OptionToggleButton from './OptionToggleButton';

interface CardProps {
  list: ListType;
  isOwner: boolean;
  userId: number;
}

function Card({ list, isOwner, userId }: CardProps) {
  const { onClickMoveToPage } = useMoveToPage();

  return (
    // MasonryGrid 라이브러리에서는 ul로 감싸줘야 하므로 Link태그 미사용
    <ul onClick={onClickMoveToPage(`/list/${list.id}`)} className={styles.container}>
      {isOwner && (
        <div className={styles.label}>
          <div className={styles.visibilityLabel}>
            {!list.isPublic && <LockIcon fill={vars.color.blue} />}
            <span>{list.isPublic ? '공개' : '비공개'}</span>
          </div>
          <OptionToggleButton listId={String(list.id)} userId={userId} isPublicCurrent={list.isPublic} />
        </div>
      )}
      <h2 className={styles.title}>{list.title}</h2>
      <ul className={styles.list}>
        {list.listItems.map((item) => (
          <li key={item.id} className={styles.item}>
            <span className={styles.rank}>
              {item.rank}
              {'.'}
            </span>
            <span className={styles.itemTitle}>{item.title}</span>
          </li>
        ))}
      </ul>
    </ul>
  );
}

export default memo(Card);
