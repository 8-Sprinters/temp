'use client';

import useBooleanOutput from '@/hooks/useBooleanOutput';

import UncheckedBox from '/public/icons/unchecked_box.svg';
import CheckedBox from '/public/icons/checked_box.svg';
import WithdrawalButton from './WithdrawalButton';
import * as styles from './AgreementConfirmation.css';
import { accountLocale } from '@/app/account/locale';
import { useLanguage } from '@/store/useLanguage';

export default function AgreementConfirmationButton() {
  const { language } = useLanguage();
  const { isOn, toggle } = useBooleanOutput(false);
  return (
    <section className={styles.wrapper}>
      <div className={styles.agreement}>
        <div onClick={toggle}>{!isOn ? <UncheckedBox /> : <CheckedBox />}</div>
        <p>{accountLocale[language].withdrawMessage}</p>
      </div>
      <WithdrawalButton isDisabled={!isOn} />
    </section>
  );
}
