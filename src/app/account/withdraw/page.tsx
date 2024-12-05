import WithdrawalHeader from './_component/WithdrawalHeader';
import WithdrawalNotice from './_component/WithdrawalNotice';
import AgreementConfirmation from './_component/AgreementConfirmation';
import * as styles from './page.css';

export default function WithdrawPage() {
  return (
    <div>
      <WithdrawalHeader />
      <div className={styles.main}>
        <WithdrawalNotice />
        <AgreementConfirmation />
      </div>
    </div>
  );
}
