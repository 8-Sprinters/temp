'use client';

import { BaseSyntheticEvent } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import { FormProvider, useFieldArray, useForm } from 'react-hook-form';

import * as styles from './page.css';

import getNoticeCategories from '@/app/_api/notice/getNoticeCategories';
import createNotice from '@/app/_api/notice/createNotice';

import { QUERY_KEYS } from '@/lib/constants/queryKeys';
import { NOTICE_CONTENT } from '@/lib/constants/notice';
import { ItemsType, NoticeContentsType, NoticeCreateType } from '@/lib/types/noticeType';

import ContentsContainer from './_components/ContentsContainer';

export default function CreateNotice() {
  const methods = useForm<NoticeCreateType>({
    mode: 'onChange',
    defaultValues: {
      categoryCode: 1,
      title: '',
      description: '',
      contents: [
        {
          order: 0,
          type: 'subtitle',
          description: '',
        },
      ],
    },
  });
  const { register, handleSubmit, control } = methods;
  const { fields, append, remove } = useFieldArray({
    name: 'contents',
    control,
  });

  /** 게시물 카테고리 조회 */
  const { data: categories } = useQuery({
    queryKey: [QUERY_KEYS.getNoticeCategories],
    queryFn: getNoticeCategories,
    staleTime: Infinity,
  });

  /** 타입에 따른 Contents 블럭 포멧 지정 함수 */
  const itemDataFormatByType = (type: NoticeContentsType) => {
    const data: ItemsType = {
      order: 0,
      type,
    };

    switch (type) {
      case 'body':
      case 'subtitle':
      case 'note':
        data.description = '';
        break;
      case 'button':
        data.buttonName = '';
        data.buttonLink = '';
        break;
      case 'image':
        data.imageUrl = '';
      default:
        data;
    }
    return data;
  };

  /** Contents 블럭 추가 함수 */
  const handleAddContents = (type: NoticeContentsType) => () => {
    append(itemDataFormatByType(type));
  };

  /** Contents 블럭 삭제 함수 */
  const handleDeleteBlock = (order: number) => {
    remove(order);
  };

  const createNoticeMutation = useMutation({
    mutationFn: createNotice,
    onSuccess: (data) => {
      console.log(data); // 5
      // TODO 생성된 리스트 아이디로 이미지 업로드
    },
  });

  const formatOnData = (originData: NoticeCreateType) => {
    // order 정리 및 이미지 url 초기화
    const updatedContents = originData.contents.map((item, index) => {
      const newContents = { ...item, order: index + 1 };
      if (newContents.type === 'image') {
        newContents.imageUrl = '';
      }
      return newContents;
    });

    // 새로운 데이터 객체 반환
    const noticeData: NoticeCreateType = {
      ...originData,
      contents: updatedContents,
    };
    return noticeData;
  };

  /** 게시물 생성 */
  const onSubmit = (data: NoticeCreateType, e?: BaseSyntheticEvent) => {
    e?.preventDefault();

    const newData = formatOnData(data);
    createNoticeMutation.mutate(newData);
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
          <label className={styles.rowLabel}>소개 *</label>
          <input
            className={styles.rowInput}
            placeholder="글 소개하는 짧은 문구를 입력해 주세요. (최대 30자)"
            maxLength={30}
            {...register('description')}
          />
        </div>
        <section>
          {fields.map((field, index) => (
            <ContentsContainer key={field.id} content={field} order={index} handleDeleteBlock={handleDeleteBlock} />
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
