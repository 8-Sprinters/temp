import { useEffect, useState } from 'react';
import Image from 'next/image';

import ClearBlackIcon from '/public/icons/clear_x_black.svg';
import * as styles from './Preview.css';
import fileToBase64 from '@/lib/utils/fileToBase64';
import { useLanguage } from '@/store/useLanguage';
import { itemLocale } from '@/app/list/create/locale';

type ImagePreviewProps = {
  handleClearButtonClick: () => void;
  image: FileList | string;
};

export default function ImagePreview({ handleClearButtonClick, image }: ImagePreviewProps) {
  const { language } = useLanguage();
  const [preview, setPreview] = useState<string | null>(null);

  const handleClearClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    handleClearButtonClick();
  };

  useEffect(() => {
    if (image) {
      if (typeof image === 'string') {
        // URL인 경우
        setPreview(image);
      } else {
        //FileList인 경우
        fileToBase64(image[0], setPreview);
      }
    }
  }, [image]);

  return (
    <div className={styles.previewBox}>
      {preview !== null && (
        <Image
          className={styles.previewImage}
          src={preview || '/icons/attach_image.svg'}
          alt={itemLocale[language].imageAlt}
          fill
        />
      )}
      <button className={styles.clearButton} onClick={handleClearClick}>
        <ClearBlackIcon alt={itemLocale[language].deleteLinkAlt} />
      </button>
    </div>
  );
}
