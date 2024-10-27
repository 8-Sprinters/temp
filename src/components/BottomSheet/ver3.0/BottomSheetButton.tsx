import * as styles from './BottomSheet.css';

interface BottomSheetButtonProps {
  onClose: () => void;
  onClick: () => void;
  children: string;
  isDelete?: boolean;
}

export default function BottomSheetButton({ onClose, onClick, children, isDelete = false }: BottomSheetButtonProps) {
  return (
    <div className={styles.optionButtons}>
      <button onClick={onClose} className={styles.variantButton.default}>
        취소
      </button>
      <button className={styles.variantButton[isDelete ? 'delete' : 'active']} onClick={onClick}>
        {children}
      </button>
    </div>
  );
}
