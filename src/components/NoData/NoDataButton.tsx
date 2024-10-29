import { ReactNode } from 'react';

import * as styles from './NoDataButton.css';

interface NoDataButtonType {
  children: ReactNode;
  onClick: () => void;
}

export default function NoDataButton({ children, onClick }: NoDataButtonType) {
  return (
    <button onClick={onClick} className={styles.buttonWrapper}>
      {children}
    </button>
  );
}
