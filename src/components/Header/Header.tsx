'use client';
import { ReactNode } from 'react';

import * as styles from './Header.css';
import { commonLocale } from '@/components/locale';
import { useLanguage } from '@/store/useLanguage';

//TODO: left의 close 없애야함.
interface HeaderProps {
  title: string;
  left?: 'cancel' | 'back' | 'close';
  leftClick?: () => void;
  right?: ReactNode;
}

function Header({ title, left, leftClick, right }: HeaderProps) {
  const { language } = useLanguage();
  return (
    <div className={styles.header}>
      <button className={`${styles.flexChild} ${styles.leftChild}`} type="button" onClick={leftClick}>
        {left === 'cancel' && <p>{commonLocale[language].cancel}</p>}
        {left === 'back' && <p>{commonLocale[language].back}</p>}
        {left === 'close' && <p>{commonLocale[language].close}</p>}
        {left === null && <></>}
      </button>

      <h1 className={`${styles.headerTitle} ${styles.flexChild}`}>{title}</h1>

      {right === null ? <></> : <div className={`${styles.flexChild} ${styles.rightChild}`}>{right}</div>}
    </div>
  );
}

export default Header;
