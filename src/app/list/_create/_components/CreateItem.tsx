import { useFormContext } from 'react-hook-form';

import BlueButton from '@/components/BlueButton/BlueButton';
import Header from '@/components/Header/__Header';
import Items from './item/Items';
import * as styles from './CreateItem.css';
import { useLanguage } from '@/store/useLanguage';
import { itemLocale } from '@/app/list/create/locale';

interface CreateItemProps {
  onBackClick: () => void;
  onSubmitClick: () => void;
  isSubmitting: boolean;
  type: 'create' | 'edit';
}

export default function CreateItem({ onBackClick, onSubmitClick, isSubmitting, type }: CreateItemProps) {
  const { language } = useLanguage();
  const {
    formState: { isValid },
  } = useFormContext();

  return (
    <div>
      <Header
        title={type === 'create' ? itemLocale[language].createList : itemLocale[language].editList}
        left="back"
        leftClick={onBackClick}
        right={
          <BlueButton onClick={onSubmitClick} disabled={!isValid || isSubmitting}>
            {itemLocale[language].complete}
          </BlueButton>
        }
      />
      <div className={styles.article}>
        <h3 className={styles.label}>
          {itemLocale[language].addItem} <span className={styles.required}>*</span>
        </h3>
        <p className={styles.description}>
          {itemLocale[language].itemCreateMessage1} <br />
          {itemLocale[language].itemCreateMessage2}
        </p>
        <Items type={type} />
      </div>
    </div>
  );
}
