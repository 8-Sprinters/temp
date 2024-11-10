'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { FieldErrors, FormProvider, useForm } from 'react-hook-form';

import { useLanguage } from '@/store/useLanguage';
import { useUser } from '@/store/useUser';
import { ItemImagesType, ListCreateType } from '@/lib/types/listType';
import toastMessage from '@/lib/constants/toastMessage';
import toasting from '@/lib/utils/toasting';
import { QUERY_KEYS } from '@/lib/constants/queryKeys';

import uploadItemImages from '@/app/_api/list/uploadItemImages';
import createList from '@/app/_api/list/createList';

import StepOne from './_components/StepOne';
import StepTwo from './_components/StepTwo';
import StepThree from './_components/StepThree';

/**
 * TODO: 리
 * 1. 리스트 생성 제대로 되는지 확인하기
 * 2. 리스트 '수정'하기 기능 추가하기
 * 3. 헤더 왼쪽 글자에 따라 중앙위치 달라지는 것 조정하기(새로운P로)
 */

//ReactHookForm 에러타입
export type FormErrors = FieldErrors<ListCreateType>;

export default function CreatePage() {
  const { language } = useLanguage();
  const { user: userMeData } = useUser();
  const [step, setStep] = useState(1);
  const queryClient = useQueryClient();
  const router = useRouter();

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

  //--- request용 데이터 만드는 함수.
  const formatData = () => {
    const originData = methods.getValues();

    //rank 정리
    originData.items.forEach((item, index) => {
      item.rank = index + 1;
    });

    //데이터 쪼개기
    const listData: ListCreateType = {
      ...originData,
      items: originData.items.map(({ imageUrl, ...rest }) => {
        return {
          ...rest,
          imageUrl: '',
        };
      }),
    };

    //이미지rank,extension & 이미지파일 배열
    const imageData: ItemImagesType = {
      listId: 0, //temp
      extensionRanks: originData.items
        .filter(({ imageUrl }) => imageUrl !== '')
        .map(({ rank, imageUrl }) => {
          return {
            rank: rank,
            extension:
              typeof imageUrl === 'object' ? (imageUrl?.[0]?.type.split('/')[1] as 'jpg' | 'jpeg' | 'png') : '',
          };
        }),
    };

    const imageFileList: File[] = originData.items
      .filter(({ imageUrl }) => imageUrl !== '')
      .map(({ imageUrl }) => imageUrl?.[0] as File);

    return { listData, imageData, imageFileList };
  };

  //--- 이미지 업로드
  const { mutate: uploadImageMutate, isPending: isUploadingImage } = useMutation({
    mutationFn: uploadItemImages,
    retry: 3,
    retryDelay: 1000,
    onError: () => {
      toasting({ type: 'error', txt: toastMessage[language].uploadImageError });
    },
  });

  //--아이템 중복 확인
  const getIsAllUnique = () => {
    const allTitles = methods.getValues().items.map((item, itemIndex) => {
      return item.title === '' ? itemIndex : item.title;
    }); //TODO: 필요한 코드인지 다시 확인하기
    const isAllUnique = new Set(allTitles).size === allTitles.length;
    return isAllUnique;
  };

  //--- 리스트생성
  const {
    mutate: createListMutate,
    isPending: isCreatingList,
    isSuccess,
  } = useMutation({
    mutationFn: createList,
    onSuccess: (data) => {
      if (formatData().imageData.extensionRanks.length !== 0) {
        uploadImageMutate({
          listId: data.listId,
          imageData: formatData().imageData,
          imageFileList: formatData().imageFileList,
        });
      }
      queryClient.invalidateQueries({
        queryKey: [
          QUERY_KEYS.getAllList,
          userMeData.id + '',
          formatData().listData.collaboratorIds.length === 0 ? 'my' : 'collabo',
        ],
      });
      router.replace(`/list/${data.listId}`);
    },
    onError: () => {
      toasting({ type: 'error', txt: toastMessage[language].createListError });
    },
  });

  //--- 제출
  const handleSubmit = () => {
    if (getIsAllUnique()) {
      const { listData } = formatData();
      createListMutate(listData);
    } else {
      toasting({ type: 'error', txt: toastMessage[language].duplicatedItemError });
    }
  };

  return (
    <FormProvider {...methods}>
      {step === 1 && <StepOne onNextClick={handleNext} type="create" />}
      {step === 2 && <StepTwo onBeforeClick={handleBack} onNextClick={handleNext} type="create" />}
      {step === 3 && (
        <StepThree
          onBeforeClick={handleBack}
          onNextClick={handleSubmit}
          isSubmitting={isUploadingImage || isCreatingList || isSuccess}
          type="create"
        />
      )}
    </FormProvider>
  );
}
