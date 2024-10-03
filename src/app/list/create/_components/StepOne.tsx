'use client';

import router from 'next/router';
import { useLanguage } from '@/store/useLanguage';
import Header from '@/components/Header/Header';
import { listLocale } from '../locale';

export default function StepOne() {
  const { language } = useLanguage();

  return (
    <>
      <Header
        title={'리스트 만들기'}
        left="cancel"
        leftClick={() => {
          router.back();
        }}
        right={listLocale[language].next}
      />
    </>
  );
}
