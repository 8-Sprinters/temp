import * as styles from './Top3CardItem.css';
import { ListItemType } from '@/lib/types/listType';

interface CardItemProps {
  item: ListItemType;
  index: number;
}

export default function Top3CardItem({ item, index }: CardItemProps) {
  return (
    <li className={styles.container}>
      <span>{index + 1}.</span>
      <span className={styles.titleText}>{item.title}</span>
    </li>
  );
}
