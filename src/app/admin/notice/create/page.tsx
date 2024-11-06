'use client';

import { useQuery } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';

import * as styles from './page.css';

import getNoticeCategories from '@/app/_api/notice/getNoticeCategories';
import { QUERY_KEYS } from '@/lib/constants/queryKeys';

export default function CreateNotice() {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      categoryCode: 1,
      title: '',
      description: '',
      contents: [],
    },
  });

  /** 게시물 카테고리 조회 */
  const { data: categories } = useQuery({
    queryKey: [QUERY_KEYS.getNoticeCategories],
    queryFn: getNoticeCategories,
    staleTime: Infinity,
  });

  /** 게시물 생성 */
  const onSubmit = () => {
    // 게시물 생성하기
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.container}>
      <h1>게시물 생성</h1>
      <div>
        <select {...register('categoryCode')} className={styles.dropdown}>
          {categories?.map((category) => (
            <option key={category.code} value={category.code}>
              {category.viewName}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.row}>
        <label className={styles.rowLabel}>제목 *</label>
        <input
          className={styles.rowInput}
          placeholder="제목 겸 알림 메시지 문구를 입력해 주세요. (최대 30자)"
          maxLength={30}
          {...register('title')}
        />
      </div>
      <div className={styles.row}>
        <label className={styles.rowLabel}>소개</label>
        <input
          className={styles.rowInput}
          placeholder="글 소개하는 짧은 문구를 입력해 주세요. (최대 30자)"
          maxLength={30}
          {...register('description')}
        />
      </div>
      <section>게시물 블록</section>
    </form>
  );
}
