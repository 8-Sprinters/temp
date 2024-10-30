'use client';

import { usePathname } from 'next/navigation';

import * as styles from './FloatingContainer.css';

import ShareIcon from '/public/icons/new/share.svg';
import { useLanguage } from '@/store/useLanguage';
import copyUrl from '@/lib/utils/copyUrl';

import { commonLocale } from '@/components/locale';

// TODO 마이피드는 링크 공유, 홈/검색은 카카오톡 공유
export default function ShareLinkButton() {
  const path = usePathname();
  const { language } = useLanguage();

  const handleCopyLink = () => {
    // TODO 카카오 공유하기 기능으로 변경하기
    copyUrl(`https://listywave.com${path}`, language);
  };

  return (
    <>
      <div className={styles.variant.plusButton} onClick={handleCopyLink}>
        <ShareIcon alt={commonLocale[language].shareToLinkButton} />
      </div>
    </>
  );
}
