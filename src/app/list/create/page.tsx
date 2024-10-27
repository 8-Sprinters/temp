'use client';

import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { useLanguage } from '@/store/useLanguage';
import { ListCreateType } from '@/lib/types/listType';

import StepOne from './_components/StepOne';
import StepTwo from './_components/StepTwo';

//TODO: Yup 스키마 사용해보기

export default function CreatePage() {
  const { language } = useLanguage();
  const [step, setStep] = useState(1);

  /** step 관리 */
  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => prev - 1);

  /** React Hook Form */
  //--- 초기세팅
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

  return (
    <FormProvider {...methods}>
      {step === 1 && <StepOne onNextClick={handleNext} type="create" />}
      {step === 2 && <StepTwo onBeforeClick={handleBack} onNextClick={handleNext} type="create" />}
    </FormProvider>
  );
}
