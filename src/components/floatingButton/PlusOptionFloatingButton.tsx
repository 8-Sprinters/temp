'use client';

import { usePathname, useRouter } from 'next/navigation';

import * as styles from './FloatingContainer.css';

import PlusIcon from '/public/icons/plus.svg';
import ShareAltIcon from '/public/icons/share_alt.svg';
import WriteIcon from '/public/icons/write.svg';

import useBooleanOutput from '@/hooks/useBooleanOutput';
import { useUser } from '@/store/useUser';
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
  const { language } = useLanguage();
  const { isOn, toggle } = useBooleanOutput();

  return (
    <>
      {isOn && <FloatingMenu />}
      <div className={isOn ? styles.variant.active : styles.basicButton} onClick={() => toggle()}>
        <PlusIcon alt={commonLocale[language].viewOptionButton} className={styles.icon} />
      </div>
    </>
  );
}
