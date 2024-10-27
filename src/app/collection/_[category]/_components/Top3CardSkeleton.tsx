import Skeleton from '@mui/material/Skeleton';
import * as styles from './Top3Card.css';

function Top3CardSkeleton() {
  return (
    <div className={styles.card}>
      <div className={styles.skeletonListWrapper}>
        <ul>
          <ol className={styles.list}>
            {Array.from({ length: 3 }).map((_, index) => (
              <Skeleton variant="text" width="100%" height="2.5rem" animation="wave" key={index} />
            ))}
          </ol>
        </ul>

        <div className={styles.userProfiles}>
          <div className={styles.userImageWrapper}>
            <Skeleton variant="circular" width="30px" height="30px" animation="wave" />
          </div>
          <div className={styles.userTextWrapper}>
            <Skeleton variant="text" width="100%" height="1.4rem" animation="wave" />
            <Skeleton variant="text" width="100%" height="1.4rem" animation="wave" />
          </div>
        </div>
      </div>
      <Skeleton variant="text" width="100%" height="3rem" animation="wave" />
    </div>
  );
}

export default Top3CardSkeleton;
