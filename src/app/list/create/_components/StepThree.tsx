import { useEffect } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import { useLanguage } from '@/store/useLanguage';
import Header from '@/components/Header/Header';
import { listLocale } from '@/app/list/create/locale';

import * as styles from './Step.css';

interface StepThreeProps {
  onBeforeClick: () => void;
  onNextClick: () => void;
  type: 'create' | 'edit';
  isSubmitting: boolean;
}

export default function StepThree({ onBeforeClick, onNextClick, type, isSubmitting }: StepThreeProps) {
  const { language } = useLanguage();

  const {
    register,
    control,
    getValues,
    setValue,
    formState: { errors },
  } = useFormContext();

  const allValues = useWatch({ control });

  useEffect(() => {
    console.log('실시간 데이터:', allValues);
  }, [allValues]);

  return (
    <>
      <Header
        title={'리스트 만들기'}
        left="back"
        leftClick={onBeforeClick}
        right={
          <button className={styles.nextButton} onClick={onNextClick} disabled={false}>
            {listLocale[language].publish}
          </button>
        }
      />
      <label>태그</label>
      <input placeholder="태그 입력 후 Enter 또는 Space를 눌러주세요. (최대 3개)" />
      <label>배경색상</label>
      <label>공개여부</label>
    </>
  );
}
