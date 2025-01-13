'use client';

import MotionWrapper from './MotionWrapper';
import * as styles from './Section3.css';
import { introLocale } from '@/app/intro/locale';
import { useLanguage } from '@/store/useLanguage';

function Section3() {
  const { language } = useLanguage();
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
              <h3>{introLocale[language].section.message3}</h3>
              <h3>{introLocale[language].section.message4}</h3>
            </div>
            <div className={styles.subTitleWrapper}>
              <span>{introLocale[language].section.message5}</span>
              <span>{introLocale[language].section.message6}</span>
            </div>
            <div className={styles.imageWrapper}>
              <video src={'/videos/video_section3.mp4'} autoPlay loop muted playsInline className={styles.video} />
              <div className={styles.blurBox}></div>
            </div>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}

export default Section3;
