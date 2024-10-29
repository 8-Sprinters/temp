'use client';

import { usePathname } from 'next/navigation';

import * as styles from './FloatingContainer.css';

import ShareAltIcon from '/public/icons/ver3/share.svg';

import { useLanguage } from '@/store/useLanguage';
import copyUrl from '@/lib/utils/copyUrl';

import { commonLocale } from '@/components/locale';

function FloatingMenu() {
  const path = usePathname();

  const { language } = useLanguage();

  const handleSharePage = () => {
    // TODO 카카오 공유하기 기능으로 변경하기
    copyUrl(`https://listywave.com${path}`, language);
  };

  return (
    <>
      <div className={styles.menuButtons}>
        <div className={styles.basicButton} onClick={handleSharePage}>
          <ShareAltIcon alt={commonLocale[language].shareToLinkButton} className={styles.icon} />
        </div>
      </div>
    </>
  );
}

export default function PlusOptionFloatingButton() {
  return (
    <>
      <div>
        <FloatingMenu />
      </div>
    </>
  );
}
