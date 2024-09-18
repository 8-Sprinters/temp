'use client';

import { useState } from 'react';
import { FieldErrors, FormProvider, useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import CreateItem from '@/app/list/create/_components/CreateItem';
import CreateList from '@/app/list/create/_components/CreateList';
import { ItemImagesType, ListCreateType } from '@/lib/types/listType';
import toasting from '@/lib/utils/toasting';
import toastMessage from '@/lib/constants/toastMessage';
import { QUERY_KEYS } from '@/lib/constants/queryKeys';
import createList from '@/app/_api/list/createList';
import uploadItemImages from '@/app/_api/list/uploadItemImages';
import { useLanguage } from '@/store/useLanguage';
import { useUser } from '@/store/useUser';

export type FormErrors = FieldErrors<ListCreateType>;

export default function CreatePage() {
  const { language } = useLanguage();
  const { user: userMeData } = useUser();
  const queryClient = useQueryClient();
  const [step, setStep] = useState<'list' | 'item'>('list');
  const router = useRouter();

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

  const handleStepChange = (step: 'list' | 'item') => {
    setStep(step);
  };

  //request용 데이터 만드는 함수.
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

  const { mutate: uploadImageMutate, isPending: isUploadingImage } = useMutation({
    mutationFn: uploadItemImages,
    retry: 3,
    retryDelay: 1000,
    onError: () => {
      toasting({ type: 'error', txt: toastMessage[language].uploadImageError });
    },
  });

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

  //아이템 중복 확인
  const getIsAllUnique = () => {
    const allTitles = methods.getValues().items.map((item, itemIndex) => {
      return item.title === '' ? itemIndex : item.title;
    });
    const isAllUnique = new Set(allTitles).size === allTitles.length;
    return isAllUnique;
  };

  const handleSubmit = () => {
    if (getIsAllUnique()) {
      const { listData } = formatData();
      createListMutate(listData);
    } else {
      toasting({ type: 'error', txt: toastMessage[language].duplicatedItemError });
    }
  };

  return (
    <>
      <FormProvider {...methods}>
        {step === 'list' ? (
          <CreateList
            onNextClick={() => {
              handleStepChange('item');
            }}
            type="create"
          />
        ) : (
          <CreateItem
            onBackClick={() => {
              handleStepChange('list');
            }}
            onSubmitClick={handleSubmit}
            isSubmitting={isUploadingImage || isCreatingList || isSuccess}
            type="create"
          />
        )}
      </FormProvider>
    </>
  );
}
