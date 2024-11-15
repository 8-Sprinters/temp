'use client';

import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { FormProvider, useForm } from 'react-hook-form';

import * as styles from './page.css';

import getNoticeCategories from '@/app/_api/notice/getNoticeCategories';

import { QUERY_KEYS } from '@/lib/constants/queryKeys';
import { NOTICE_CONTENT } from '@/lib/constants/notice';
import { NoticeContentsType, NoticeCreateType } from '@/lib/types/noticeType';

import ContentsContainer from './_components/ContentsContainer';

export default function CreateNotice() {
  const [contentsType, setContentsType] = useState<NoticeContentsType[]>([]);
  const methods = useForm<NoticeCreateType>({
    defaultValues: {
      categoryCode: 1,
      title: '',
      description: '',
      contents: [],
    },
  });
  const { register, handleSubmit } = methods;

  /** 게시물 카테고리 조회 */
  const { data: categories } = useQuery({
    queryKey: [QUERY_KEYS.getNoticeCategories],
    queryFn: getNoticeCategories,
    staleTime: Infinity,
  });

  /** Contents를 추가할때마다 배열에 Type을 저장하는 함수 */
  const handleAddContents = (key: NoticeContentsType) => () => {
    setContentsType([...contentsType, key]);
  };

  /** 게시물 생성 */
  const onSubmit = (data: NoticeCreateType, e: any) => {
    e.preventDefault();

    // 게시물 생성하기
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form className={styles.container}>
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
        <section>
          {contentsType.map((content, index) => (
            <ContentsContainer key={index} content={content} order={index} />
          ))}
        </section>
        <section className={styles.contents}>
          {Object.entries(NOTICE_CONTENT).map(([key, value], index) => (
            <button
              key={index}
              className={styles.block}
              onClick={handleAddContents(key as NoticeContentsType)}
              type="button"
            >{`+ ${value} 추가`}</button>
          ))}
        </section>
        <button type="button" onClick={handleSubmit(onSubmit)}>
          저장하기
        </button>
      </form>
    </FormProvider>
  );
}
