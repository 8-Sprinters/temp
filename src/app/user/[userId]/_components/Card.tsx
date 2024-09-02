import { assignInlineVars } from '@vanilla-extract/dynamic';

import * as styles from './Card.css';

import useMoveToPage from '@/hooks/useMoveToPage';
import { ListType } from '@/lib/types/listType';
import { BACKGROUND_COLOR_READ } from '@/styles/Color';

import OptionToggleButton from './OptionToggleButton';

interface CardProps {
  list: ListType;
  isOwner: boolean;
  userId: number;
}

/**
TODO
- [x] 팝오버 메뉴 토글 기능
- [x] 외부 클릭 시 팝오버 닫히는 기능
- [ ] 팝오버 메뉴에 삭제하기 추가
- [ ] 리스트 삭제하기 기능
 */

export default function Card({ list, isOwner }: CardProps) {
  const { onClickMoveToPage } = useMoveToPage();

  return (
    // MasonryGrid 라이브러리에서는 ul로 감싸줘야 하므로 Link태그 미사용
    <ul
      onClick={onClickMoveToPage(`/list/${list.id}`)}
      className={styles.container}
      style={assignInlineVars({
        [styles.listColor]: `${BACKGROUND_COLOR_READ[list.backgroundColor as keyof typeof BACKGROUND_COLOR_READ]}`,
      })}
    >
      {isOwner && (
        <div className={styles.label}>
          <div className={styles.labelText}>{list.isPublic ? '공개' : '비공개'}</div>
          <OptionToggleButton />
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
