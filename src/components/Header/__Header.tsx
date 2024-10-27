'use client';
import { ReactNode } from 'react';

import CloseButton from '/public/icons/close_button.svg';
import BackIcon from '/public/icons/back.svg';

import * as styles from './__Header.css';
import { commonLocale } from '@/components/locale';
import { useLanguage } from '@/store/useLanguage';

interface HeaderProps {
  title: string;
  left?: 'close' | 'back';
  leftClick?: () => void;
  right?: ReactNode;
}

function Header({ title, left, leftClick, right }: HeaderProps) {
  const { language } = useLanguage();
  return (
    <div className={styles.header}>
      <button className={`${styles.flexChild} ${styles.leftChild}`} type="button" onClick={leftClick}>
        {left === 'close' && <CloseButton width={'24'} height={'24'} alt={commonLocale[language].closeButton} />}
        {left === 'back' && <BackIcon width={'8'} height={'14'} alt={commonLocale[language].goBack} />}
        {left === null && <></>}
      </button>

      <h1 className={`${styles.headerTitle} ${styles.flexChild}`}>{title}</h1>

      <div className={`${styles.flexChild} ${styles.rightChild}`}>{right}</div>
    </div>
  );
}

export default Header;
