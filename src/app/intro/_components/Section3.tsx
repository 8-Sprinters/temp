'use client';
import MotionWrapper from './MotionWrapper';
import * as styles from './Section3.css';
import HeroImage from '/public/images/section3_hero.svg';

function Section3() {
  return (
    <section className={styles.background}>
      <div className={styles.wrapper}>
        <div className={styles.recordWrapper}>
          <div className={styles.record}></div>
          <span className={styles.recText}>REC</span>
        </div>
        <MotionWrapper variantsType="vertical">
          <div className={styles.contentsWrapper}>
            <div className={styles.titleWrapper}>
              <h3>마음 속 순위로</h3>
              <h3>기록하는 나</h3>
            </div>
            <div className={styles.subTitleWrapper}>
              <span>트렌드는 잠시 잊고,</span>
              <span>지극히 개인적인 취향으로 순위를 매겨요.</span>
            </div>
            <div className={styles.imageWrapper}>
              <HeroImage />
              <div className={styles.blurBox}></div>
            </div>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}

export default Section3;
