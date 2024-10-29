import * as styles from './SearchBar.css';
import SearchIcon from '/public/icons/ver3/search.svg';

interface SearchBarProps {
  handleCancel?: () => void;
}

function SearchBarComponent({ handleCancel }: SearchBarProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inputWrapper}>
        <SearchIcon />
        <input placeholder="리스트 또는 리스터를 검색해 보세요" className={styles.input} />
      </div>
      <button className={styles.cancelButton} onClick={handleCancel}>
        취소
      </button>
    </div>
  );
}

export default SearchBarComponent;
