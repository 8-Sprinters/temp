'use client';

import CategoryArea from '@/app/search/_components/CategoryArea';
import SearchResult from '@/app/search/_components/SearchResult';
import * as styles from './Search.css';
import KeywordArea from '@/app/search/_components/KeywordArea';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState, KeyboardEvent, MouseEvent, ChangeEvent } from 'react';
import BackButton from '/public/icons/back.svg';
import FloatingContainer from '@/components/floatingButton/FloatingContainer';
import makeSearchUrl from '@/app/search/util/makeSearchUrl';
import { searchLocale } from '@/app/search/locale';
import { useLanguage } from '@/store/useLanguage';
import ArrowUpButton from '@/components/floatingButton/ArrowUpButton';
import ShareLinkButton from '@/components/floatingButton/ShareLinkButton';

export default function Search() {
  const { language } = useLanguage();
  const router = useRouter();
  const searchParams = useSearchParams();

  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('');
  const [sort, setSort] = useState('');

  // useEffect(() => {
  //   // 페이지 첫 로드시 검색어와 카테고리 설정
  //   setKeyword(searchParams?.get('keyword') ?? '');
  //   setCategory(searchParams?.get('category') ?? 'entire');
  //   setSort(searchParams?.get('sort') ?? 'new');
  // }, [searchParams]);

  const handleKeywordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      router.push(makeSearchUrl({ keyword, category, sort }));
    }
  };

  const handeSearchClick = () => {
    router.push(makeSearchUrl({ keyword, category, sort }));
  };

  const handelCategoryClick = (e: MouseEvent<HTMLDivElement>) => {
    const newCategory = e.currentTarget.dataset.value ?? '';
    setCategory(newCategory);
    router.push(makeSearchUrl({ keyword, category: newCategory, sort }));
  };

  const handleBackClick = () => {
    router.push('/');
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.searchArea}>
          <div className={styles.keywordWrapper}>
            <button className={styles.backButton} onClick={handleBackClick}>
              <BackButton width={'8'} height={'14'} alt={searchLocale[language].backButtonAlt} />
            </button>
            <KeywordArea onClick={handeSearchClick} onInput={handleKeywordChange} onKeyDown={handleKeyDown} />
          </div>

          <CategoryArea onClick={handelCategoryClick} />
        </div>
        <SearchResult />
        <FloatingContainer>
          <ArrowUpButton />
          <ShareLinkButton />
        </FloatingContainer>
      </div>
    </>
  );
}
