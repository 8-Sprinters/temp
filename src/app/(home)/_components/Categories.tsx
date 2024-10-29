'use client';

import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import { CategoryType } from '@/lib/types/categoriesType';
import { QUERY_KEYS } from '@/lib/constants/queryKeys';
import getCategories from '@/app/_api/category/getCategories';

import * as styles from './Categories.css';
import ChevronDown from '/public/icons/ver3/chevron_down.svg';

interface CategoriesType {
  onClick: (name: string) => void;
}

function Categories({ onClick }: CategoriesType) {
  const [selectedCategoryCode, setSelectedCategoryCode] = useState('0');

  const { data, isFetching } = useQuery<CategoryType[]>({
    queryKey: [QUERY_KEYS.getCategories],
    queryFn: getCategories,
  });

  const handleClickCategory = (codeNum: string, name: string) => {
    setSelectedCategoryCode(codeNum);
    onClick(name);
  };

  return (
    <div className={styles.gridContainer}>
      <ul className={styles.list}>
        {data?.map((el) => {
          return (
            <li key={el.code}>
              <button
                className={selectedCategoryCode === el.code ? `${styles.selectedItem}` : `${styles.item}`}
                onClick={() => handleClickCategory(el.code, el.engName)}
              >
                {el.korName}
              </button>
            </li>
          );
        })}
      </ul>
      {/* <div className={styles.orderDropdown}>
        <span className={styles.order}>정렬</span>
        <ChevronDown />
      </div> */}
    </div>
  );
}

export default Categories;
