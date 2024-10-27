// Ver1.0 콜렉션 페이지 입니다.

'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useQuery } from '@tanstack/react-query';

import { CategoryType } from '@/lib/types/categoriesType';
import { QUERY_KEYS } from '@/lib/constants/queryKeys';
import { collectionLocale } from '@/app/collection/locale';
import { useLanguage } from '@/store/useLanguage';
import { categoriesLocale } from '@/app/collection/locale';

import EntireFolder from '/public/icons/folder_entire.svg';
import CultureFolder from '/public/icons/folder_culture.svg';
import LifeFolder from '/public/icons/folder_life.svg';
import PlaceFolder from '/public/icons/folder_place.svg';
import MusicFolder from '/public/icons/folder_music.svg';
import MovieDramaFolder from '/public/icons/folder_movie_drama.svg';
import AnimalPlantFolder from '/public/icons/folder_animal_plant.svg';
import EtcFolder from '/public/icons/folder_etc.svg';
import BookFolder from '/public/icons/folder_book.svg';
import FoodFolder from '/public/icons/folder_food.svg';

import getCollectionCategories from '../_api/collect/__getCollectionCategories';

import * as styles from './__page.css';

const codeToFolderIcon = (code: string, language: string) => {
  switch (code) {
    case '0':
      return <EntireFolder fill alt={categoriesLocale[language].entire} />;
    case '1':
      return <CultureFolder fill alt={categoriesLocale[language].culture} />;
    case '2':
      return <LifeFolder fill alt={categoriesLocale[language].life} />;
    case '3':
      return <PlaceFolder fill alt={categoriesLocale[language].place} />;
    case '4':
      return <MusicFolder fill alt={categoriesLocale[language].music} />;
    case '5':
      return <MovieDramaFolder fill alt={categoriesLocale[language].movie_drama} />;
    case '6':
      return <BookFolder fill alt={categoriesLocale[language].book} />;
    case '7':
      return <AnimalPlantFolder fill alt={categoriesLocale[language].animal_plant} />;
    case '8':
      return <EtcFolder fill alt={categoriesLocale[language].etc} />;
    case '9':
      return <FoodFolder fill alt={categoriesLocale[language].food} />;
  }
};

export default function CollectionPage() {
  const { language } = useLanguage();
  const router = useRouter();

  const { data } = useQuery<CategoryType[]>({
    queryKey: [QUERY_KEYS.getCollectionCategories],
    queryFn: getCollectionCategories,
  });

  const handleCategoryClick = (category: string) => {
    router.push(`/collection/${category}`);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>{collectionLocale[language].collection}</div>
      <div className={styles.categoryFolders}>
        {data &&
          data.map((category) => (
            <div key={category.code} className={styles.categoryContainer}>
              <div
                className={styles.categoryFolder}
                onClick={() => {
                  handleCategoryClick(category.engName);
                }}
              >
                <Image
                  className={styles.categoryIcon}
                  src={category?.categoryImageUrl ?? ''}
                  width={50}
                  height={50}
                  alt={`${category.korName} ${categoriesLocale[language].folder}`}
                />
                <div className={styles.folderIcon}>{codeToFolderIcon(category.code, language)}</div>
              </div>
              <p className={styles.categoryLabel}>{language === 'ko' ? category.korName : category.engName}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
