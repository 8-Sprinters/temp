import { useQuery } from '@tanstack/react-query';
import { useFormContext } from 'react-hook-form';

import * as styles from './CategoryDropdown.css';

import getNoticeCategories from '@/app/_api/notice/getNoticeCategories';
import { QUERY_KEYS } from '@/lib/constants/queryKeys';
import { NoticeCategoryType } from '@/lib/types/noticeType';

export default function CategoryDropdown() {
  const { register } = useFormContext();

  /** 게시물 카테고리 조회 */
  const { data: categories } = useQuery<NoticeCategoryType[]>({
    queryKey: [QUERY_KEYS.getNoticeCategories],
    queryFn: getNoticeCategories,
    staleTime: Infinity,
  });

  return (
    <div>
      <select {...register('categoryCode')} className={styles.dropdown}>
        {categories?.map((category) => (
          <option key={category.code} value={category.code}>
            {category.viewName}
          </option>
        ))}
      </select>
    </div>
  );
}
