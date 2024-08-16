import * as styles from './NoData.css';
import NoDataImg from '/public/images/no_data_image.svg';
import { ReactNode } from 'react';
import { commonLocale } from '@/components/locale';
// import { useLanguage } from '@/store/useLanguage';

interface NoDataProps {
  message: string;
  button?: ReactNode;
  buttonMessage?: string;
}

function NoDataComponent({ message, button, buttonMessage }: NoDataProps) {
  // const { language } = useLanguage();
  return (
    <div className={styles.wrapper}>
      <div className={styles.message}>{message}</div>
      {buttonMessage && <button className={styles.button}>{buttonMessage}</button>}
      {button}
    </div>
  );
}

export default NoDataComponent;
