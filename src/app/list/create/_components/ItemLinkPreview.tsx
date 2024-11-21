import { useLanguage } from '@/store/useLanguage';
import { listLocale } from '@/app/list/create/locale';

import ClearBlackIcon from '/public/icons/clear_x_black.svg';
import LinkIcon from '/public/icons/link.svg';

import * as styles from './Preview.css';

const urlToDomain = (link: string) => {
  const domain = new URL(link).hostname.replace('www.', '');
  return domain;
};

type LinkPreviewProps = {
  handleClearButtonClick: () => void;
  url: string;
};

export default function ItemLinkPreview({ handleClearButtonClick, url }: LinkPreviewProps) {
  const { language } = useLanguage();

  const handleClearClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    handleClearButtonClick();
  };

  return (
    <div
      className={styles.previewBox}
      onClick={() => {
        window.open(url);
      }}
      role="button"
    >
      <LinkIcon />
      <p className={styles.domainText}>{urlToDomain(url)}</p>
      <button className={styles.clearButton} onClick={handleClearClick}>
        <ClearBlackIcon alt={listLocale[language].deleteLinkAlt} />
      </button>
    </div>
  );
}
