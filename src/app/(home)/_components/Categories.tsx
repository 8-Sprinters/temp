'use client';

import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import { CategoryType } from '@/lib/types/categoriesType';
import { QUERY_KEYS } from '@/lib/constants/queryKeys';
import getCategories from '@/app/_api/category/getCategories';

import * as styles from './Categories.css';
import ChevronDown from '/public/icons/ver3/chevron_down.svg';

function Categories() {
  const [selectedCategoryCode, setSelectedCategoryCode] = useState('0');

  const { data, isFetching } = useQuery<CategoryType[]>({
    queryKey: [QUERY_KEYS.getCategories],
    queryFn: getCategories,
  });

  console.log(data);

  return (
    <div className={styles.gridContainer}>
      <ul className={styles.list}>
        {data?.map((el) => {
          return (
            <li key={el.code}>
              <button className={selectedCategoryCode === el.code ? `${styles.selectedItem}` : `${styles.item}`}>
                {el.korName}
              </button>
            </li>
          );
        })}
      </ul>
      <div className={styles.orderDropdown}>
        <span className={styles.order}>정렬</span>
        <ChevronDown />
      </div>
    </div>
  );
}

export default Categories;
