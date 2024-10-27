'use client';

import Header from '@/components/Header/Header';
import { listError, listLocale } from '@/app/list/create/locale';
import { useLanguage } from '@/store/useLanguage';
import * as styles from './StepOne.css';
import { useEffect } from 'react';

//TODO: 브라우저 뒤로가기 눌렀을 경우 내용 사라짐 경고

interface StepTwoProps {
  onBeforeClick: () => void;
  onNextClick: () => void;
  type: 'create' | 'edit';
}

/**
 * StepTwo 컴포넌트:
 * 리스트 생성/수정 과정 2단계
 *
 * @param props.onNextClick - 헤더의 '다음'버튼을 클릭했을때 동작시킬 함수
 * @param props.type - 생성과 수정 중 택1
 */
export default function StepOne({ onBeforeClick, onNextClick, type }: StepTwoProps) {
  const { language } = useLanguage();
  const isValid = true;

  return (
    <>
      <Header
        title={'리스트 생성하기'}
        left="back"
        leftClick={onBeforeClick}
        right={
          <button className={styles.nextButton} onClick={onNextClick} disabled={!isValid}>
            {listLocale[language].next}
          </button>
        }
      />
    </>
  );
}
