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

import LoginModal from '@/components/login/LoginModal';
import Modal from '@/components/Modal/Modal';
import { commonLocale } from '@/components/locale';

function FloatingMenu() {
  const router = useRouter();
  const path = usePathname();

  const { user } = useUser();
  const { isOn, handleSetOn, handleSetOff } = useBooleanOutput();
  const { language } = useLanguage();

  const handleSharePage = () => {
    // TODO 카카오 공유하기 기능으로 변경하기
    copyUrl(`https://listywave.com${path}`, language);
  };

  const handleMoveToPage = () => {
    // TODO 토큰 유효성 검증 관련 인가 처리 로직 추가
    // 지금은 토큰이 있는 지 확인 후 이동만 간단하게 처리시켜 둠(추후 수정 예정)
    if (!user.id) {
      handleSetOn();
      return;
    }
    router.push('/list/create');
  };

  return (
    <>
      <div className={styles.menuButtons}>
        <div className={styles.basicButton} onClick={handleSharePage}>
          <ShareAltIcon alt={commonLocale[language].shareToLinkButton} className={styles.icon} />
        </div>
        <div className={styles.basicButton} onClick={handleMoveToPage}>
          <WriteIcon alt={commonLocale[language].createListButton} className={styles.icon} />
        </div>
      </div>
      {isOn && (
        <Modal handleModalClose={handleSetOff} size="large">
          <LoginModal id="floatingLoginBtn" />
        </Modal>
      )}
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
