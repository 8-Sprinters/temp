'use client';

import { useEffect, useState } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';

import Header from '@/components/Header/__Header';
import Section from './list/Section';
import SimpleInput from './list/SimpleInput';
import ButtonSelector from './list/ButtonSelector';
import LabelInput from './list/LabelInput';
import MemberSelector from './list/MemberSelector';
import PaletteSelector from './list/PaletteSelector';
import ColorSelector from './list/ColorSelector';
import RadioInput from './list/RadioInput';

import { useUser } from '@/store/useUser';
import { QUERY_KEYS } from '@/lib/constants/queryKeys';
import getCategories from '@/app/_api/category/getCategories';
import getFollowingList from '@/app/_api/follow/getFollowingList';
import { CategoryType } from '@/lib/types/categoriesType';
import { FollowingListType } from '@/lib/types/followType';
import { BACKGROUND_COLOR_PALETTE_TYPE } from '@/styles/Color';
import { listPlaceholder } from '@/lib/constants/placeholder';
import { listDescriptionRules, listLabelRules, listTitleRules } from '@/lib/constants/formInputValidationRules';

import * as styles from './CreateList.css';
import { useLanguage } from '@/store/useLanguage';
import { listLocale } from '@/app/list/create/locale';

interface CreateListProps {
  onNextClick: () => void;
  type: 'create' | 'edit';
}

interface OptionsProps {
  value: string;
  label: string;
}

/**
 * CreateList 컴포넌트:
 * 리스트 생성 과정 중
 * 리스트에 대한 정보를 입력하는 페이지
 *
 * @param props.onNextClick - 헤더의 '다음'버튼을 클릭했을때 동작시킬 함수
 */
function CreateList({ onNextClick, type }: CreateListProps) {
  const { language } = useLanguage();
  const { user: me } = useUser();

  const {
    setValue,
    getValues,
    control,
    formState: { errors },
  } = useFormContext();
  const collaboIDs = useWatch({ control, name: 'collaboratorIds' });
  const title = useWatch({ control, name: 'title' });
  const category = useWatch({ control, name: 'category' });
  const palette = useWatch({ control, name: 'backgroundPalette' });
  const [selectedPalette, setSelectedPalette] = useState<BACKGROUND_COLOR_PALETTE_TYPE>(palette);

  const router = useRouter();
  const searchParams = useSearchParams();
  const isTemplateCreation = searchParams?.has('title') && searchParams?.has('category');

  const { data: followingList } = useQuery<FollowingListType>({
    queryKey: [QUERY_KEYS.getFollowingList, me.id],
    queryFn: () => getFollowingList(me.id),
  });

  const { data: categories } = useQuery<CategoryType[]>({
    queryKey: [QUERY_KEYS.getCategories],
    queryFn: getCategories,
  });

  useEffect(() => {
    const handleQueryParams = () => {
      if (isTemplateCreation) {
        setValue('title', searchParams?.get('title'));
        const c = categories?.find((c) => c.korName === searchParams?.get('category'))?.engName;
        setValue('category', c);
      }
    };
    handleQueryParams();
  }, [categories]);

  const isValid =
    title &&
    category &&
    !errors.title &&
    !errors.category &&
    !errors.labels &&
    !errors.collaboratorIds &&
    !errors.description;

  return (
    <div>
      {/* 헤더 */}
      <Header
        title={type === 'create' ? listLocale[language].createList : listLocale[language].editList}
        left="close"
        leftClick={() => {
          router.back();
        }}
        right={
          <button
            className={isValid ? styles.headerNextButtonActive : styles.headerNextButton}
            disabled={!isValid}
            onClick={onNextClick}
          >
            {listLocale[language].next}
          </button>
        }
      />

      <div className={styles.body}>
        {/* 리스트 제목 */}
        <Section title={listLocale[language].title} isRequired={true}>
          <SimpleInput
            type="short"
            name="title"
            placeholder={listPlaceholder[language].title}
            rules={listTitleRules}
            defaultValue={getValues('title')}
          />
        </Section>

        {/* 리스트 소개 */}
        <Section title={listLocale[language].description}>
          <SimpleInput
            type="long"
            name="description"
            placeholder={listPlaceholder[language].description}
            rules={listDescriptionRules}
            defaultValue={getValues('description')}
          ></SimpleInput>
        </Section>

        {/* 카테고리 */}
        <Section title={listLocale[language].category} isRequired={true}>
          <ButtonSelector
            list={categories?.filter((category: CategoryType) => category.code !== '0') || []}
            onClick={(item: CategoryType) => {
              setValue('category', item.engName);
            }}
            defaultValue={category}
          />
        </Section>

        {/* 라벨 */}
        <Section title={listLocale[language].label}>
          <LabelInput name="labels" placeholder={listPlaceholder[language].label} rules={listLabelRules} />
        </Section>

        {/* 콜라보레이터 */}
        <Section title={listLocale[language].addCollaborator}>
          <MemberSelector
            placeholder={listPlaceholder[language].collaborator}
            followingList={followingList?.followings || []}
            selectedIds={collaboIDs}
            onClickAdd={(userId: number) => {
              setValue('collaboratorIds', [...collaboIDs, userId]);
            }}
            onClickDelete={(userId: number) => {
              setValue(
                'collaboratorIds',
                collaboIDs.filter((collaboId: number) => collaboId !== userId)
              );
            }}
            rules={{
              maxNum: {
                value: 20,
                errorMessage: listLocale[language].addCollaboratorError,
              },
            }}
          />
        </Section>

        {/* 배경 색상 */}
        <Section title={listLocale[language].backgroundcolor} isRequired={true}>
          <PaletteSelector
            palette={palette}
            handleChangePalette={(target: OptionsProps) => {
              const value: BACKGROUND_COLOR_PALETTE_TYPE = target.value as BACKGROUND_COLOR_PALETTE_TYPE;
              setSelectedPalette(value);
            }}
          />
          <ColorSelector
            palette={selectedPalette}
            defaultColor={getValues('backgroundColor')}
            onClick={(color: string) => {
              setValue('backgroundColor', color);
              setValue('backgroundPalette', palette);
            }}
          />
        </Section>

        {/* 공개 설정 */}
        <Section title={listLocale[language].publicSetting} isRequired={true}>
          <RadioInput
            messages={{
              trueMessage: listLocale[language].publicMessage,
              falseMessage: listLocale[language].privateMessage,
            }}
            value={getValues('isPublic')}
            onClick={(b: boolean) => {
              setValue('isPublic', b);
            }}
          />
        </Section>
      </div>
    </div>
  );
}

export default CreateList;
