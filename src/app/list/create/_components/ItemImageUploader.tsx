import { ReactNode } from 'react';
import ImageIcon from '/public/icons/image.svg';
import * as styles from './ItemImageUploader.css';

interface ImageUploaderProps {
  index: number;
  children: ReactNode;
}

export default function ItemImageUploader({ index, children }: ImageUploaderProps) {
  return (
    <>
      <label className={styles.label} htmlFor={`${index}-image`}>
        <ImageIcon className={styles.label} width={17} height={17} alt="이미지 업로드 아이콘" />
      </label>
      {children}
    </>
  );
}
