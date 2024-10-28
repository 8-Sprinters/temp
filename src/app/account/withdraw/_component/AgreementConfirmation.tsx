'use client';

import useBooleanOutput from '@/hooks/useBooleanOutput';

import { accountLocale } from '@/app/account/locale';
import { useLanguage } from '@/store/useLanguage';
import WithdrawalButton from './WithdrawalButton';

import UncheckedBox from '/public/icons/unchecked_box.svg';
import CheckedBox from '/public/icons/checked_box.svg';
import * as styles from './AgreementConfirmation.css';

export default function AgreementConfirmationButton() {
  const { language } = useLanguage();
  const { isOn, toggle } = useBooleanOutput(false);
  return (
    <section className={styles.wrapper}>
      <div className={styles.agreement}>
        <div onClick={toggle}>{!isOn ? <UncheckedBox /> : <CheckedBox fill="#3D95FF" />}</div>
        <p>{accountLocale[language].withdrawMessage}</p>
      </div>
      <WithdrawalButton isDisabled={!isOn} />
    </section>
  );
}
