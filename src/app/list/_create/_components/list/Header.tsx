import CloseButton from '/public/icons/close_button.svg';
import * as styles from './Header.css';
import { useLanguage } from '@/store/useLanguage';
import { listLocale } from '@/app/list/create/locale';

interface HeaderProps {
  isNextActive: boolean;
  onClickNext: () => void;
}

/**TODO: 공용 헤더 컴포넌트 사용으로 이 컴포넌트는 삭제 필요 */

function Header({ isNextActive, onClickNext }: HeaderProps) {
  const { language } = useLanguage();
  return (
    <div className={styles.header}>
      <CloseButton width={'24'} height={'24'} alt={listLocale[language].closeButtonAlt} />
      <h1 className={styles.headerTitle}>{listLocale[language].createList}</h1>
      <button
        className={isNextActive ? styles.headerNextButtonActive : styles.headerNextButton}
        disabled={!isNextActive}
        onClick={onClickNext}
      >
        {listLocale[language].next}
      </button>
    </div>
  );
}

export default Header;
