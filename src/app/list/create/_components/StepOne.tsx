'use client';

import router from 'next/router';
import { useLanguage } from '@/store/useLanguage';
import { useUser } from '@/store/useUser';
import Header from '@/components/Header/Header';

import { listLocale } from '../locale';
import * as styles from './StepOne.css';
import { useFormContext } from 'react-hook-form';
import { useQuery } from '@tanstack/react-query';
import { CategoryType } from '@/lib/types/categoriesType';
import { QUERY_KEYS } from '@/lib/constants/queryKeys';
import getCategories from '@/app/_api/category/getCategories';
import { listTitleRules } from '@/lib/constants/formInputValidationRules';

interface StepOneProps {
  onNextClick: () => void;
}

export default function StepOne({ onNextClick }: StepOneProps) {
  const { language } = useLanguage();
  const { user: me } = useUser();

  const {
    register,
    setValue,
    getValues,
    control,
    formState: { errors },
  } = useFormContext();

  const { data: categories } = useQuery<CategoryType[]>({
    queryKey: [QUERY_KEYS.getCategories],
    queryFn: getCategories,
  });

  return (
    <>
      <Header
        title={'리스트 만들기'}
        left="cancel"
        leftClick={() => {
          router.back();
        }}
        right={
          <button className={styles.temp} onClick={onNextClick}>
            {listLocale[language].next}
          </button>
        }
      />
      <div className={styles.section}>
        <p className={styles.description}>
          기록하고 싶은 것들을 리스트로 남겨 봐요. <br />
          나만의 기준으로 순위를 매겨도 좋고, 하나의 주제의 정보를 정리해도 좋아요.
        </p>
        <div className={styles.field}>
          <label className={styles.label}>
            타이틀 <span className={styles.requiredIcon}>*</span>
          </label>
          <input
            className={styles.input}
            placeholder="리스트 제목을 적어주세요."
            autoComplete="off"
            maxLength={31}
            {...register('title', listTitleRules)}
          />
        </div>
        {/** end-타이틀field*/}
        <div className={styles.field}>
          <label className={styles.label}>소개</label>
          <input className={styles.input} placeholder="리스트에 대해 소개해주세요." />
        </div>
        {/** end-소개field*/}
        <div className={styles.field}>
          <label className={styles.label}>
            카테고리 <span className={styles.requiredIcon}>*</span>
          </label>
          <div className={styles.chipGroup}>
            {/**TODO: 선택된 chip 스타일 변경 */}
            {categories?.map((item) => (
              <button className={styles.chip} key={item.code}>
                {item.korName}
              </button>
            ))}
          </div>
        </div>
        {/** end-카테고리field*/}
      </div>
      {/** end-section*/}
    </>
  );
}
