import { useEffect, useState } from 'react';
import { useFieldArray, useFormContext, useWatch } from 'react-hook-form';
import { useLanguage } from '@/store/useLanguage';
import { listPlaceholder } from '@/lib/constants/placeholder';
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

  /** react-hook-form */
  const {
    register,
    control,
    getValues,
    setValue,
    setError,
    clearErrors,
    formState: { errors },
  } = useFormContext();

  const { fields, append, remove } = useFieldArray({ control, name: 'labels' });

  const allValues = useWatch({ control });
  const watchLabels = useWatch({ control, name: 'labels' });

  /** 태그(라벨) */

  const addTag = (label: string) => {
    append(label);
  };

  const isValidLabel = (label: string): boolean => {
    const reg = /^[a-zA-Z0-9가-힣]{1,10}$/;
    return reg.test(label);
  };

  const isOverLength = (label: string): boolean => {
    return label.length > 10;
  };

  const isDuplicatedLabel = (label: string): boolean => {
    return watchLabels.some((existingLabel: string) => existingLabel.toLowerCase() === label.toLowerCase());
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    //자음모음 결합 중일 경우 return
    if (e.nativeEvent.isComposing) {
      return;
    }
    //Enter, Space 시 등록
    const label = e.currentTarget.value;

    if ((e.key === 'Enter' || e.key === ' ') && label) {
      e.preventDefault();

      //영어,숫자,한글만 가능하게 처리
      if (!isValidLabel(label)) {
        setError('labels', { type: 'pattern', message: '유효한 한글, 영어, 숫자만 입력해 주세요.' });
        return;
      }

      //3개 초과 에러처리
      if (fields.length === 3) {
        setError('labels', { type: 'maxLength', message: '태그는 3개까지 등록할 수 있어요.' });
        return;
      }
      console.log(fields);

      //중복라벨 에러처리
      if (isDuplicatedLabel(label)) {
        setError('labels', { type: 'unique', message: '이미 등록한 태그예요.' });
        return;
      }
      //라벨등록
      append(label);
      e.currentTarget.value = ''; //입력필드 비우기
    }
  };

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
      <div className={styles.section}>
        <div className={styles.field}>
          <label className={styles.label}>태그</label>
          <div className={styles.inputDiv}>
            <input
              className={styles.input}
              {...register('labels')}
              type="text"
              placeholder={listPlaceholder[language].label}
              onKeyDown={handleKeyDown}
              onChange={(e) => {
                clearErrors('labels');
                if (isOverLength(e.target.value)) {
                  setError('labels', { type: 'maxLength', message: '최대 10글자까지 입력할 수 있어요.' });
                }
              }}
            />
          </div>
          {/** end-inputDiv */}
          {errors.labels && <div>{errors.labels?.message?.toString()}</div>}
          <div>
            {watchLabels.map((label: string) => {
              return <div key={label}>{label}</div>;
            })}
          </div>
        </div>
        {/** end-field */}
        <label>배경색상</label>
        <label>공개여부</label>
      </div>
      {/** end-section */}
    </>
  );
}
