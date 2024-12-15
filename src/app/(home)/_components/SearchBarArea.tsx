import * as styles from './SearchBarArea.css';
import SearchBar from '@/components/SearchBar';

interface SearchBarProps {
  handleCancel?: () => void;
}

function SearchBarArea({ handleCancel }: SearchBarProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inputWrapper}>
        <SearchBar />
      </div>
      <button className={styles.cancelButton} onClick={handleCancel}>
        취소
      </button>
    </div>
  );
}

export default SearchBarArea;
