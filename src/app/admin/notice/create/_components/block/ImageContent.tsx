import { ChangeEvent, MouseEvent, useEffect, useRef, useState } from 'react';
import { useFormContext } from 'react-hook-form';

import * as styles from './index.css';
import ClearBlackIcon from '/public/icons/clear_x_black.svg';
import AttachedImageIcon from '/public/icons/attach_image.svg';

import fileToBase64 from '@/lib/utils/fileToBase64';

interface ImageContentProps {
  order: number;
}

export default function ImageContent({ order }: ImageContentProps) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [previewImage, setPreviewImage] = useState('');
  const { setValue, getValues } = useFormContext();

  const handleUploadFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      fileToBase64(e.target.files[0], setPreviewImage);
      setValue(`contents.${order}.imageUrl`, e.target.files[0]);
    }
    e.target.value = ''; // 기존 file value 초기화
  };

  const handleDeleteImage = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setValue(`contents.${order}.imageUrl`, '');
    setPreviewImage('');
  };

  useEffect(() => {
    const image = getValues(`contents.${order}.imageUrl`);
    if (image) {
      if (typeof image === 'string') {
        setPreviewImage(image);
        return;
      }
      fileToBase64(image, setPreviewImage);
    }
  }, [getValues, order]);

  return (
    <>
      {previewImage ? (
        <div className={styles.imageContainer}>
          <img src={previewImage} alt="게시물 이미지" height={400} className={styles.imageBox.full} />
          <button className={styles.deleteImageButton} type="button" onClick={handleDeleteImage}>
            <ClearBlackIcon />
          </button>
        </div>
      ) : (
        <div onClick={() => fileRef.current?.click()} className={styles.imageBox.empty}>
          <AttachedImageIcon />
        </div>
      )}
      <input type="file" ref={fileRef} onChange={handleUploadFile} className={styles.hidden} />
    </>
  );
}
