import { ReactNode, SyntheticEvent, useState } from 'react';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import ExpandMoreIcon from '/public/icons/chevron_down_sm.svg';

import DndIcon from '/public/icons/dnd.svg';
import DeleteIcon from '/public/icons/trash_bin.svg';
import Label from '@/components/Label/Label';
import { vars } from '@/styles/__theme.css';
import ImageUploader from './ImageUploader';
import * as styles from './ItemLayout.css';
import { useLanguage } from '@/store/useLanguage';
import { itemLocale } from '@/app/list/create/locale';

const MIN_ITEM_COUNT = 3;

interface ItemLayoutProps {
  index: number;
  handleDeleteItem: () => void;
  itemLength: number;
  titleInput: ReactNode;
  titleErrorMessage?: string;
  commentTextArea: ReactNode;
  commentLength: ReactNode;
  linkModal: ReactNode;
  linkPreview: ReactNode;
  imageInput: ReactNode;
  imagePreview: ReactNode;
}

export default function ItemLayout({
  index,
  handleDeleteItem,
  itemLength,
  titleInput,
  titleErrorMessage,
  commentTextArea,
  commentLength,
  linkModal,
  linkPreview,
  imageInput,
  imagePreview,
}: ItemLayoutProps) {
  const [expanded, setExpanded] = useState(false);
  const { language } = useLanguage();

  const handleOnChange = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      {titleErrorMessage && <p className={styles.titleError}> {titleErrorMessage}</p>}
      <Accordion expanded={expanded}>
        <AccordionSummary expandIcon={<ExpandMoreIcon onClick={handleOnChange} />}>
          <div className={styles.itemHeader}>
            <DndIcon width="18" height="18" alt={itemLocale[language].dragAndDrop} className={styles.headerIcon} />
            <div className={styles.rankAndTitle}>
              <Label colorType={index === 0 ? 'blue' : 'skyblue'}>
                {language === 'ko' ? `${index + 1}${itemLocale.ko.rank}` : `${itemLocale.en.rank}${index + 1}`}
              </Label>
              {titleInput}
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails className={styles.details}>
          <div className={styles.moreInfo}>
            {commentTextArea}
            <div className={styles.countLength}>{commentLength}</div>
            <div className={styles.toolbar}>
              <div className={styles.fileButtons}>
                {linkModal}
                <ImageUploader index={index}>{imageInput}</ImageUploader>
              </div>
              {itemLength > MIN_ITEM_COUNT && (
                <button onClick={handleDeleteItem}>
                  <DeleteIcon fill={vars.color.gray9} alt={itemLocale[language].deleteItem} />
                </button>
              )}
            </div>

            <div className={styles.previewContainer}>
              {linkPreview}
              {imagePreview}
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
