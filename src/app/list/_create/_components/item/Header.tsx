import BackIcon from '/public/icons/back.svg';
import * as styles from './Header.css';
import { useLanguage } from '@/store/useLanguage';
import { itemLocale } from '@/app/list/create/locale';

interface HeaderProps {
  onBackClick: () => void;
  isSubmitActive: boolean;
  onSubmitClick: () => void;
}

function Header({ onBackClick, isSubmitActive, onSubmitClick }: HeaderProps) {
  const { language } = useLanguage();
  return (
    <div className={styles.header}>
      <button onClick={onBackClick}>
        <BackIcon width={'8'} height={'14'} alt={itemLocale[language].backIconAlt} />
      </button>
      <h1 className={styles.headerTitle}>{itemLocale[language].createList}</h1>
      <button
        className={isSubmitActive ? styles.headerNextButton.active : styles.headerNextButton.inactive}
        disabled={!isSubmitActive}
        onClick={onSubmitClick}
      >
        {itemLocale[language].complete}
      </button>
    </div>
  );
}
export default Header;
