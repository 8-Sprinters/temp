import AddIcon from '/public/icons/add.svg';
import * as styles from './AddItemButton.css';
import { useLanguage } from '@/store/useLanguage';
import { itemLocale } from '@/app/list/create/locale';

interface AddItemButton {
  handleAddButtonClick: () => void;
}

export default function AddItemButton({ handleAddButtonClick }: AddItemButton) {
  const { language } = useLanguage();
  return (
    <button className={styles.addButton} type="button" onClick={handleAddButtonClick}>
      <AddIcon /> {itemLocale[language].addItem}
    </button>
  );
}
