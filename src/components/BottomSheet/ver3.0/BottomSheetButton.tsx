import * as styles from './BottomSheet.css';

interface BottomSheetButtonProps {
  onClose: () => void;
  onClick: () => void;
  children: [string, string];
  isDelete?: boolean;
}

export default function BottomSheetButton({ onClose, onClick, children, isDelete = false }: BottomSheetButtonProps) {
  const [cancelText, actionText] = children;

  return (
    <div className={styles.optionButtons}>
      <button onClick={onClose} className={styles.variantButton.default}>
        {cancelText}
      </button>
      <button className={styles.variantButton[isDelete ? 'delete' : 'active']} onClick={onClick}>
        {actionText}
      </button>
    </div>
  );
}
