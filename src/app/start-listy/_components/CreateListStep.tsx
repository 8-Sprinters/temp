import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import * as styles from './CreateNicknameStep.css';
import BackIcon from '/public/icons/back.svg';
import createList from '@/app/_api/list/createList';

import { CategoryType } from '@/lib/types/categoriesType';
import { ListCreateType } from '@/lib/types/listType';
import toastMessage from '@/lib/constants/toastMessage';
import toasting from '@/lib/utils/toasting';

import ChoiceCategory from './ChoiceCategory';
import RegisterListTitle from './RegisterListTitle';
import RegisterItems from './RegisterItems';
import SkipOnboardingButton from './SkipButton';
import Spinners from '@/components/loading/Spinners';

import { BACKGROUND_COLOR_READ } from '@/styles/Color';
import { useLanguage } from '@/store/useLanguage';
import { startListyLocale } from '@/app/start-listy/locale';

interface CreateListStepProps {
  nickname: string;
}

export default function CreateListStep({ nickname }: CreateListStepProps) {
  const { language } = useLanguage();
  const router = useRouter();
  const [stepIndex, setStepIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState({
    engName: '',
    korName: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const methods = useForm<ListCreateType>({
    mode: 'onChange',
    defaultValues: {
      category: '',
      labels: [],
      collaboratorIds: [],
      title: '',
      description: '',
      isPublic: false,
      backgroundColor: BACKGROUND_COLOR_READ.NEON_BLUE,
      items: Array.from({ length: 3 }, (_, index) => ({
        rank: index + 1,
        title: '',
        comment: '',
        link: '',
        imageUrl: '',
      })),
    },
  });

  const {
    handleSubmit,
    getValues,
    formState: { errors, isValid },
  } = methods;

  const handleMoveToStep = (step: 'prev' | 'next') => () => {
    if (step === 'prev') {
      setStepIndex((prev) => prev - 1);
    } else {
      setStepIndex((prev) => prev + 1);
    }
  };

  const handleChangeCategory = (category: Omit<CategoryType, 'code'>) => {
    setSelectedCategory({
      engName: category.engName,
      korName: category.korName,
    });
  };

  // 마지막 단계에서 form 유효성 검사
  const isValidForm = isValid && getValues('items').every((el) => el.title);

  const onSubmit = async (data: ListCreateType) => {
    if (!isValid) return;
    setIsLoading(true);

    try {
      const result = await createList(data);

      setTimeout(() => {
        if (result.listId) {
          router.push('intro');
          setIsLoading(false);
        }
      }, 1000);
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
        toasting({ type: 'error', txt: toastMessage[language].createListError });
        setIsLoading(false);
      }
    }
  };

  return (
    <FormProvider {...methods}>
      <div className={styles.background}>
        {stepIndex === 0 && (
          <>
            <div className={styles.stepContainer}>
              <SkipOnboardingButton />
            </div>
            <div className={styles.step}>
              <div className={styles.barContainer}>
                <span className={styles.bar.default}></span>
                <span className={selectedCategory.engName ? styles.statusBar.divide : styles.statusBar.zero}></span>
              </div>
              <p className={styles.stepText}>step2</p>
            </div>
            <p className={styles.subTitle}>
              {language === 'ko' ? (
                <>
                  <span>{`"${nickname}"`}님만의</span>
                  <span>리스트를 만들어 보아요.</span>
                </>
              ) : (
                <>
                  <span>Let&apos;s make</span>
                  <span>{`&quot;${nickname}&quot;`}&apos;s own list</span>
                </>
              )}
            </p>
            <div className={styles.container}>
              <ChoiceCategory handleChangeCategory={handleChangeCategory} />
              <button
                type="button"
                onClick={handleMoveToStep('next')}
                className={selectedCategory.engName ? styles.variant.active : styles.variant.default}
                disabled={!selectedCategory.engName}
              >
                {startListyLocale[language].next}
              </button>
            </div>
          </>
        )}
        {stepIndex === 1 && (
          <>
            <div className={styles.header}>
              <button className={styles.headerButton} onClick={handleMoveToStep('prev')}>
                <BackIcon alt={startListyLocale[language].backButtonAlt} width={7.7} height={13.4} />
              </button>
              <SkipOnboardingButton />
            </div>
            <div className={styles.step}>
              <div className={styles.barContainer}>
                <span className={styles.bar.default}></span>
                <span
                  className={!getValues('title') || errors.title ? styles.statusBar.divide : styles.statusBar.sixty}
                ></span>
              </div>
              <p className={styles.stepText}>step2</p>
            </div>
            <div className={styles.container}>
              <RegisterListTitle selectedCategory={selectedCategory} />
              <button
                type="button"
                onClick={handleMoveToStep('next')}
                className={!getValues('title') || errors.title ? styles.variant.default : styles.variant.active}
                disabled={!getValues('title') || !!errors.title}
              >
                {startListyLocale[language].next}
              </button>
            </div>
          </>
        )}
        {stepIndex === 2 && (
          <>
            {isLoading && <Spinners />}
            <div className={styles.header}>
              <button className={styles.headerButton} onClick={handleMoveToStep('prev')}>
                <BackIcon alt={startListyLocale[language].backButtonAlt} width={7.7} height={13.4} />
              </button>
              <SkipOnboardingButton />
            </div>
            <div className={styles.step}>
              <div className={styles.barContainer}>
                <span className={styles.bar.default}></span>
                <span className={isValidForm ? styles.statusBar.full : styles.statusBar.sixty}></span>
              </div>
              <p className={styles.stepText}>step2</p>
            </div>
            <div className={styles.container}>
              <RegisterItems selectedCategory={selectedCategory} />
              <button
                type="button"
                onClick={handleSubmit(onSubmit)}
                className={isValidForm ? styles.variant.active : styles.variant.default}
                disabled={!isValidForm || isLoading}
              >
                {startListyLocale[language].complete}
              </button>
            </div>
          </>
        )}
      </div>
    </FormProvider>
  );
}
