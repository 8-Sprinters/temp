import { ReactNode } from 'react';
import ImageIcon from '/public/icons/attach_image.svg';
import * as styles from './ImageUploader.css';

interface ImageUploaderProps {
  index: number;
  children: ReactNode;
}

export default function ImageUploader({ index, children }: ImageUploaderProps) {
  return (
    <>
      <label className={styles.label} htmlFor={`${index}-image`}>
        <ImageIcon alt="이미지 업로드 아이콘" />
      </label>
      {children}
    </>
  );
}
