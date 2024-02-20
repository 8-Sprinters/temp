/**
 TODO 
 - [ ] 온보딩을 했던 사용자라면 해당 페이지 노출 x, 접근 x
 - [ ] 온보딩 중간 종료된 사용자는 온보딩 페이지 재노출 o
 */

import { useRouter } from 'next/navigation';
import { MouseEvent, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useQuery } from '@tanstack/react-query';

import getCategories from '@/app/_api/category/getCategories';
import createList from '@/app/_api/list/createList';

import { QUERY_KEYS } from '@/lib/constants/queryKeys';
import { CategoryType } from '@/lib/types/categoriesType';
import { ListCreateType } from '@/lib/types/listType';
import { itemTitleRules } from '@/lib/constants/formInputValidationRules';
import toastMessage from '@/lib/constants/toastMessage';
import toasting from '@/lib/utils/toasting';
import Category from './Category';
import ListTitleStep from './ListTitleStep';

export default function CreateListStep() {
  const router = useRouter();
  const methods = useForm();
  const [stepIndex, setStepIndex] = useState(0);
  const [title, setTitle] = useState('');
  const [selectedCategory, setSelectedCategory] = useState({
    nameValue: '',
    korNameValue: '',
  });

  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm<ListCreateType>({
    mode: 'onChange',
    defaultValues: {
      ownerId: 13, // userId 변경 예정
      category: '',
      labels: [],
      collaboratorIds: [],
      title: '',
      description: '',
      isPublic: true,
      backgroundColor: '#FFFFFF',
      items: [
        {
          rank: 1,
          title: '',
          comment: '',
          link: '',
          imageUrl: '',
        },
        {
          rank: 2,
          title: '',
          comment: '',
          link: '',
          imageUrl: '',
        },
        {
          rank: 3,
          title: '',
          comment: '',
          link: '',
          imageUrl: '',
        },
      ],
    },
  });

  console.log(selectedCategory); // 삭제 예정
  console.log(stepIndex); // 삭제 예정

  const handleChangeTitle = (e: any) => {
    console.log(e.target.value);
    setTitle(e.target.value);
  };

  const handleNextStep = () => {
    setStepIndex((prev) => prev + 1);
  };

  const handleChangeCategory = (category: Omit<CategoryType, 'codeValue'>) => {
    setSelectedCategory({
      nameValue: category.nameValue,
      korNameValue: category.korNameValue,
    });
  };

  console.log(selectedCategory);

  const onSubmit = async (data: ListCreateType) => {
    console.log('리스트 생성'); // 삭제 예정
    console.log(data); // 삭제 예정

    try {
      const result = await createList(data);

      if (result.listId) {
        router.push(`user/13/mylist`);
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
        toasting({ type: 'error', txt: toastMessage.ko.createListError });
      }
    }
  };

  const onError = () => {
    console.log('에러 발생');
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit, onError)} noValidate>
        {stepIndex === 0 && (
          <div>
            <p>닉네임님만의 리스트를 만들어 보아요.</p>
            <Category handleChangeCategory={handleChangeCategory} />
            <button type="button" onClick={handleNextStep}>
              다음으로
            </button>
          </div>
        )}
        {stepIndex === 1 && (
          <div>
            <ListTitleStep selectedCategory={selectedCategory} title={title} setTitle={setTitle} />
            <button type="button" onClick={handleNextStep}>
              다음으로
            </button>
          </div>
        )}

        <p>
          리스트에 넣을 1, 2, 3위 <br /> 아이템을 적어주세요.
        </p>
        <div>
          <span>{selectedCategory.korNameValue}</span>
          <p>{title}</p>
          <div>
            {new Array(3).fill(0).map((_, index) => (
              <div key={index}>
                <input
                  {...register(`items.${index}.title`, itemTitleRules)}
                  placeholder={`${index + 1}위 아이템을 입력해주세요.`}
                  autoComplete="off"
                />
                <p>{errors.items?.[index]?.title?.message}</p>
              </div>
            ))}
          </div>
        </div>
        <button type="submit">완료</button>
      </form>
    </FormProvider>
  );
}