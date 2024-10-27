import { useRouter } from 'next/navigation';

import * as styles from '@/app/search/_components/NoData.css';
import NoListImage from '/public/images/no_data_image.svg';
import { collectionLocale } from '@/app/collection/locale';
import { useLanguage } from '@/store/useLanguage';

function NoData() {
  const { language } = useLanguage();
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };

  return (
    <div className={styles.container}>
      <NoListImage width={158} height={158} />
      <div className={styles.messageText}>{collectionLocale[language].noCollection}</div>
      <div className={styles.actionText} onClick={handleBackClick}>
        {collectionLocale[language].backButtonText}
      </div>
    </div>
  );
}

export default NoData;
