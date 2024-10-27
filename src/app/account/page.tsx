'use client';
import { useRouter } from 'next/navigation';
import useBooleanOutput from '@/hooks/useBooleanOutput';
import Header from '@/components/Header/Header';
import useMoveToPage from '@/hooks/useMoveToPage';

import UserIcon from '/public/icons/user.svg';
import GlobeIcon from '/public/icons/globe.svg';
import HelpIcon from '/public/icons/help_circle.svg';
import MessageIcon from '/public/icons/message_square.svg';
import LogoutIcon from '/public/icons/logout.svg';
import WithdrawIcon from '/public/icons/withdraw_x.svg';

import LogoutModal from './_components/LogoutModal';
import LanguageDropdown from './_components/LanguageDropdown';
import * as styles from './page.css';
import { accountLocale } from '@/app/account/locale';
import { useLanguage } from '@/store/useLanguage';

export default function AccountPage() {
  const { language } = useLanguage();
  const { onClickMoveToPage } = useMoveToPage();
  const router = useRouter();
  const { isOn, handleSetOn, handleSetOff } = useBooleanOutput();

  const handleDivLinkClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <>
      <Header
        left="back"
        leftClick={() => {
          router.back();
        }}
        title={accountLocale[language].settings}
      />
      <section className={styles.container}>
        <div className={styles.buttonDiv} onClick={onClickMoveToPage('account/profile')} role="button">
          <div className={styles.titleDiv}>
            <UserIcon width={24} height={24} alt={accountLocale[language].profileSetting} />
            {accountLocale[language].profileSetting}
          </div>
        </div>
        <div className={styles.baseDiv}>
          <div className={styles.titleDiv}>
            <GlobeIcon width={24} height={24} alt={accountLocale[language].changeLanguage} />
            {accountLocale[language].language}
          </div>
          <LanguageDropdown />
        </div>
        <div
          className={styles.buttonDiv}
          onClick={() => {
            handleDivLinkClick('https://open.kakao.com/o/saz6DObg');
          }}
        >
          <div className={styles.titleDiv}>
            <HelpIcon width={24} height={24} alt={accountLocale[language].contact} />
            {accountLocale[language].contact}
          </div>
        </div>
        <div
          className={styles.buttonDiv}
          onClick={() => {
            handleDivLinkClick('https://tally.so/r/w51Dpv');
          }}
        >
          <div className={styles.titleDiv}>
            <MessageIcon width={24} height={24} alt={accountLocale[language].sendFeedback} />
            {accountLocale[language].sendFeedback}
          </div>
        </div>
        <div className={styles.buttonDiv} onClick={handleSetOn} role="button">
          <div className={styles.titleDiv}>
            <LogoutIcon width={24} height={24} alt={accountLocale[language].logout} />
            {accountLocale[language].logout}
          </div>
        </div>
        {isOn && <LogoutModal handleSetOff={handleSetOff} />}
        <div className={styles.buttonDiv} onClick={onClickMoveToPage('account/withdraw')} role="button">
          <div className={styles.titleDiv}>
            <WithdrawIcon width={24} height={24} alt={accountLocale[language].withdrawal} />
            {accountLocale[language].withdrawal}
          </div>
        </div>
      </section>
    </>
  );
}
