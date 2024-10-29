'use client';

import { useState } from 'react';

import * as styles from './FloatingContainer.css';
import ArrowUpIcon from '/public/icons/arrow_up.svg';

import useThrottle from '@/hooks/useThrottle';
import { useLanguage } from '@/store/useLanguage';

import { commonLocale } from '@/components/locale';

export default function ArrowUpFloatingButton() {
  const [isVisible, setIsVisible] = useState(false);
  const { language } = useLanguage();

  const visibleButton = () => {
    if (window.scrollY < 700) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  useThrottle(visibleButton, 200);

  const handleScrollToTop = () => {
    if (!isVisible) return;

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <div className={styles.variant.arrowUp} onClick={handleScrollToTop}>
          <ArrowUpIcon alt={commonLocale[language].arrowUpButton} className={styles.icon} fill="#637587" />
        </div>
      )}
    </>
  );
}
