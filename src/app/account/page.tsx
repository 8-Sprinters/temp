'use client';
import { useRouter } from 'next/navigation';
import useBooleanOutput from '@/hooks/useBooleanOutput';
import Header from '@/components/Header/__Header';
import useMoveToPage from '@/hooks/useMoveToPage';

import NavigateIcon from '/public/icons/chevron_right.svg';
import UserIcon from '/public/icons/user.svg';
import GlobeIcon from '/public/icons/globe.svg';
import HelpIcon from '/public/icons/help_circle.svg';
import MessageIcon from '/public/icons/message_square.svg';
import { useLanguage } from '@/store/useLanguage';
import { accountLocale } from '@/app/account/locale';
import LogoutModal from './_components/LogoutModal';
import LanguageDropdown from './_components/LanguageDropdown';
import * as styles from './page.css';
import SegmentedControl from '@/components/SegmentedControl/SegmentedControl';

export default function AccountPage() {
  const { language, setLanguage } = useLanguage();
  const { onClickMoveToPage } = useMoveToPage();
  const router = useRouter();
  const { isOn, handleSetOn, handleSetOff } = useBooleanOutput();

  const handleDivLinkClick = (url: string) => {
    window.open(url, '_blank');
  };

  const handleSelectLanguage = (option: string) => {
    if (option === 'Korean' || option === '한국어') setLanguage('ko');
    if (option === 'English' || option === '영어') setLanguage('en');
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
      <div className={styles.container}>
        <section className={styles.section}>
          <div className={styles.buttonDiv} onClick={onClickMoveToPage('account/profile')} role="button">
            <div className={styles.titleDiv}>
              <UserIcon width={24} height={24} alt={accountLocale[language].profileSetting} />
              {accountLocale[language].profileSetting}
            </div>
            <NavigateIcon width={16} height={16} />
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.baseDiv}>
            <div className={styles.titleDiv}>
              <GlobeIcon width={24} height={24} alt={accountLocale[language].changeLanguage} />
              {accountLocale[language].language}
            </div>
            {/** TODO: <LanguageDropdown /> 제거하기 */}
            <SegmentedControl
              options={[accountLocale[language].korean, accountLocale[language].english]}
              selected={language === 'ko' ? accountLocale[language].korean : accountLocale[language].english}
              handleSelect={handleSelectLanguage}
            />
          </div>
        </section>
        <section className={styles.section}>
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
            <NavigateIcon width={16} height={16} />
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
            <NavigateIcon width={16} height={16} />
          </div>
        </section>
      </div>
      <div className={styles.accountFooter}>
        <button className={styles.textButton} onClick={handleSetOn}>
          {accountLocale[language].logout}
        </button>
        <span>|</span>
        <button className={styles.textButton} onClick={onClickMoveToPage('account/withdraw')}>
          {accountLocale[language].withdrawal}
        </button>
        {isOn && <LogoutModal handleSetOff={handleSetOff} />}
      </div>
    </>
  );
}
