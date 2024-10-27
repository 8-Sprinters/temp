import { ReactNode } from 'react';
import * as styles from './BottomSheet.css';

interface BottomSheetTitleProps {
  children: ReactNode;
}

export default function BottomSheetTitle({ children }: BottomSheetTitleProps) {
  return <h2 className={styles.contentTitle}>{children}</h2>;
}
