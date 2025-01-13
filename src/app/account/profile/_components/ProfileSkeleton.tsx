import Skeleton from '@/components/Skeleton/Skeleton';
import * as styles from './ProfileForm.css';

const NUMBER_OF_BACKGROUND_OPTIONS = 8;

export default function ProfileSkeleton() {
  return (
    <div className={styles.form}>
      <div className={styles.inputContainer}>
        <Skeleton width={50} height={16} />
        <Skeleton height={20} />
      </div>

      <div className={styles.inputContainer}>
        <Skeleton width={50} height={16} />
        <Skeleton height={72} />
      </div>

      <div className={styles.inputContainer}>
        <Skeleton width={50} height={16} />
        <div className={styles.backgroundOptionContainer}>
          {Array.from({ length: NUMBER_OF_BACKGROUND_OPTIONS }).map((_, index) => (
            <Skeleton key={index} height={47} borderRadius="15px" />
          ))}
        </div>
      </div>

      <div className={styles.inputContainer}>
        <Skeleton width={50} height={16} />
        <div className={styles.profileOptionContainer}>
          <Skeleton height={50} />
        </div>
      </div>
    </div>
  );
}
