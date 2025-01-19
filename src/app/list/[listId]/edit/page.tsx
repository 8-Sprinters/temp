'use client';

import { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useParams, useRouter } from 'next/navigation';

import { ItemImagesType, ListCreateType, ListDetailType, ListEditType } from '@/lib/types/listType';
import { CategoryType } from '@/lib/types/categoriesType';
import { QUERY_KEYS } from '@/lib/constants/queryKeys';
import toasting from '@/lib/utils/toasting';
import toastMessage from '@/lib/constants/toastMessage';
import { useLanguage } from '@/store/useLanguage';
import { useUser } from '@/store/useUser';

import getListDetail from '@/app/_api/list/getListDetail';
import getCategories from '@/app/_api/category/getCategories';
import updateList from '@/app/_api/list/updateList';

import StepOne from '@/app/list/create/_components/StepOne';
import StepThree from '@/app/list/create/_components/StepThree';
import StepTwo from '@/app/list/create/_components/StepTwo';

export default function EditPage() {
  const router = useRouter();
  const { user } = useUser();
  const { language } = useLanguage();
  const queryClient = useQueryClient();
  const param = useParams<{ listId: string }>();

  /** step 관리 */
  const [step, setStep] = useState(1);

  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => prev - 1);

  //--- 기존 데이터 불러오기
  // 카테고리 목록
  const { data: categories } = useQuery<CategoryType[]>({
    queryKey: [QUERY_KEYS.getCategories],
    queryFn: () => getCategories(),
  });

  //기존 리스트 데이터
  const { data: listDetailData } = useQuery<ListDetailType>({
    queryKey: [QUERY_KEYS.getListDetail, param?.listId],
    queryFn: () => getListDetail(Number(param?.listId)),
  });

  /** 초기 세팅 */
  //-- React-Hook-Form
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
      items: [],
    },
  });

  //기존 데이터로 채우기
  const initializeFormValues = () => {
    if (listDetailData) {
      methods.reset({
        category: categories?.find((category) => category.korName === listDetailData.categoryKorName)?.engName,
        labels: listDetailData.labels.map((obj) => obj.name),
        collaboratorIds: listDetailData.collaborators.filter((c) => c.id !== user.id).map((c) => c.id),
        title: listDetailData.title,
        description: listDetailData.description,
        isPublic: listDetailData.isPublic,
        backgroundPalette: listDetailData.backgroundPalette,
        backgroundColor: listDetailData.backgroundColor,
        items: listDetailData.items.map(({ id, rank, title, comment, link, imageUrl }) => ({
          rank,
          id,
          title,
          comment: comment || '',
          link: link || '',
          imageUrl: typeof imageUrl === 'string' ? imageUrl : '',
        })),
      });
    }
  };

  //데이터 채워넣기
  useEffect(() => {
    initializeFormValues();
  }, [listDetailData, categories, user.id]);

  /** Request 보내기 */
  //--- 포맷 맞추기
  const formatData = () => {
    const originData = methods.getValues();

    //rank 정리
    originData.items.forEach((item, index) => {
      item.rank = index + 1;
    });

    //데이터 쪼개기
    const listData: ListEditType = {
      ...originData,
      collaboratorIds: originData.collaboratorIds,
      items: originData.items.map(({ imageUrl, ...rest }) => {
        if (typeof imageUrl === 'string') {
          return {
            ...rest,
            imageUrl,
          };
        } else {
          return {
            ...rest,
            imageUrl: '',
          };
        }
      }),
    };

    //이미지rank,extension & 이미지파일 배열
    const imageData: ItemImagesType = {
      listId: Number(param?.listId),
      extensionRanks: originData.items
        .filter(({ imageUrl }) => typeof imageUrl !== 'string')
        .map(({ rank, imageUrl }) => {
          return {
            rank: rank,
            extension:
              typeof imageUrl === 'object' ? (imageUrl?.[0]?.type.split('/')[1] as 'jpg' | 'jpeg' | 'png') : '',
          };
        }),
    };

    const imageFileList: File[] = originData.items
      .filter(({ imageUrl }) => typeof imageUrl !== 'string')
      .map(({ imageUrl }) => imageUrl?.[0] as File);

    return { listData, imageData, imageFileList };
  };

  //--아이템 중복 확인
  const getIsAllUnique = () => {
    const allTitles = methods.getValues().items.map((item, itemIndex) => {
      return item.title === '' ? itemIndex : item.title;
    }); //TODO: 필요한 코드인지 다시 확인하기
    const isAllUnique = new Set(allTitles).size === allTitles.length;
    return isAllUnique;
  };

  //--- 리스트 수정하기
  const {
    mutate: updateListMutation,
    isPending: isUpdatingList,
    isSuccess,
  } = useMutation({
    mutationFn: updateList,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.getAllList, user.id + ''],
      });
      router.replace(`/list/${param?.listId}`);
    },
    onError: () => {
      toasting({ type: 'error', txt: toastMessage[language].updateListError });
    },
  });

  //--- 제출
  const handleSubmit = () => {
    const { listData, imageData, imageFileList } = formatData();
    const updateData = {
      listId: Number(param?.listId) || 0,
      listData: listData,
      imageData: imageData,
      imageFileList: imageFileList,
    };
    updateListMutation(updateData);
  };

  return (
    <FormProvider {...methods}>
      {step === 1 && <StepOne onNextClick={handleNext} type="edit" />}
      {step === 2 && <StepTwo onBeforeClick={handleBack} onNextClick={handleNext} type="edit" />}
      {step === 3 && (
        <StepThree
          onBeforeClick={handleBack}
          onNextClick={handleSubmit}
          isSubmitting={isUpdatingList || isSuccess}
          type="edit"
        />
      )}
    </FormProvider>
  );
}
