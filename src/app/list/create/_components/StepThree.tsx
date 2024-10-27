import { useEffect } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

interface StepThreeProps {
  onBeforeClick: () => void;
  onNextClick: () => void;
  type: 'create' | 'edit';
  isSubmitting: boolean;
}

export default function StepThree({ onBeforeClick, onNextClick, type, isSubmitting }: StepThreeProps) {
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
      <label>태그</label>
      <input placeholder="태그 입력 후 Enter 또는 Space를 눌러주세요. (최대 3개)" />
      <label>배경색상</label>
      <label>공개여부</label>
    </>
  );
}
