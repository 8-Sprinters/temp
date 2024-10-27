import { ReactNode } from 'react';

import * as styles from './BottomSheet.css';

import BottomSheetTitle from './BottomSheetTitle';
import BottomSheetButton from './BottomSheetButton';

interface BottomSheetProps {
  isOn: boolean;
  children: ReactNode;
}

function FolderBottomSheet({ isOn, children }: BottomSheetProps) {
  return (
    <div className={isOn ? styles.container.open : styles.container.close}>
      <div className={styles.contents}>{children}</div>
    </div>
  );
}

const BottomSheet = Object.assign(FolderBottomSheet, {
  Title: BottomSheetTitle,
  Button: BottomSheetButton,
});

export default BottomSheet;
