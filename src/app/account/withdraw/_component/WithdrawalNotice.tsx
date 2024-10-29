'use client';

import LogoCircle from '/public/icons/logo_circle.svg';
import * as styles from './WithdrawalNotice.css';
import { accountLocale } from '@/app/account/locale';
import { useLanguage } from '@/store/useLanguage';

export default function WithdrawalNotice() {
  const { language } = useLanguage();
  return (
    <div className={styles.wrapper}>
      <LogoCircle />
      <h3 className={styles.title}>{accountLocale[language].withdrawCheck1}</h3>
      <span className={styles.warning}>{accountLocale[language].withdrawCheck2}</span>
      <div className={styles.detailBox}>
        <div className={styles.textLine}>
          <p>•</p>
          <p>{accountLocale[language].withdrawCheck3}</p>
        </div>
        <div className={styles.textLine}>
          <p>•</p>
          <p>{accountLocale[language].withdrawCheck4}</p>
        </div>
        <div className={styles.textLine}>
          <p>•</p>
          <p>{accountLocale[language].withdrawCheck5}</p>
        </div>
      </div>
    </div>
  );
}
