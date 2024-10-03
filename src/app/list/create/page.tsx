'use client';

import Header from '@/components/Header/Header';
import { listLocale } from './locale';
import { useLanguage } from '@/store/useLanguage';
import router from 'next/router';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { ListCreateType } from '@/lib/types/listType';
import StepOne from './_components/StepOne';

//TODO: Yup 스키마 사용해보기

export default function CreatePage() {
  const { language } = useLanguage();
  const [step, setStep] = useState<1 | 2 | 3>(1);

  const methods = useForm<ListCreateType>({
    mode: 'onChange',
    defaultValues: {
      category: 'culture',
      labels: [],
      collaboratorIds: [],
      title: '',
      description: '',
      isPublic: true,
      backgroundPalette: 'PASTEL',
      backgroundColor: 'PASTEL_PINK',
      items: [
        {
          rank: 0,
          title: '',
          comment: '',
          link: '',
          imageUrl: '',
        },
        {
          rank: 0,
          title: '',
          comment: '',
          link: '',
          imageUrl: '',
        },
        {
          rank: 0,
          title: '',
          comment: '',
          link: '',
          imageUrl: '',
        },
      ],
    },
  });

  return (
    <FormProvider {...methods}>
      {step === 1 && (
        <StepOne
          onNextClick={() => {
            console.log('next');
          }}
        />
      )}
    </FormProvider>
  );
}
