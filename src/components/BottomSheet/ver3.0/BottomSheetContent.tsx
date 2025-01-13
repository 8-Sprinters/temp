import * as styles from './BottomSheet.css';

interface ContentsType {
  text?: string;
  subText?: string;
}

interface BottomSheetContentProps {
  contents: ContentsType;
}

export default function BottomSheetContent({ contents }: BottomSheetContentProps) {
  return (
    <div className={styles.content}>
      <p>{contents.text}</p>
      <p>{contents.subText}</p>
    </div>
  );
}
