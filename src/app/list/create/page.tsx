'use client';

import Header from '@/components/Header/Header';
import { listLocale } from './locale';
import { useLanguage } from '@/store/useLanguage';
import router from 'next/router';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { ListCreateType } from '@/lib/types/listType';
import StepOne from './_components/StepOne';
import StepTwo from './_components/StepTwo';

//TODO: Yup 스키마 사용해보기

export default function CreatePage() {
  const { language } = useLanguage();
  const [step, setStep] = useState<1 | 2 | 3>(1);

  const methods = useForm<ListCreateType>({
    mode: 'onChange',
    defaultValues: {
      category: '',
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

  console.log(methods.getValues('description'));

  return (
    <FormProvider {...methods}>
      {step === 1 && (
        <StepOne
          onNextClick={() => {
            setStep(2);
          }}
          type="create"
        />
      )}
      {step === 2 && <StepTwo />}
    </FormProvider>
  );
}
