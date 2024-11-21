'use client';

import { useRouter } from 'next/navigation';
import { BaseSyntheticEvent } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import { FormProvider, useFieldArray, useForm } from 'react-hook-form';

import * as styles from './page.css';

import getNoticeCategories from '@/app/_api/notice/getNoticeCategories';
import createNotice from '@/app/_api/notice/createNotice';
import uploadNoticeImages from '@/app/_api/notice/uploadNoticeImages';

import { QUERY_KEYS } from '@/lib/constants/queryKeys';
import { NOTICE_CONTENT } from '@/lib/constants/notice';
import { ItemsType, NoticeContentsType, NoticeCreateType } from '@/lib/types/noticeType';

import ContentsContainer from './_components/ContentsContainer';

const noticeTitleRules = {
  required: '제목은 필수값입니다.',
  maxLength: { value: 30, message: '제목은 최대 30자까지 입력할 수 있어요.' },
};

const noticeDescriptionRules = {
  required: '소개는 필수값입니다.',
  maxLength: { value: 30, message: '소개는 최대 30자까지 입력할 수 있어요.' },
};

export default function CreateNotice() {
  const router = useRouter();
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

  // prettier-ignore
  const { register, handleSubmit, control, formState: { errors, isValid }} = methods;
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

  /** 공지 작성 데이터 포맷 */
  const formatNoticeData = (originData: NoticeCreateType) => {
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

  /** 이미지 업로드 데이터 포맷 */
  const formatImageData = (originData: NoticeCreateType) => {
    const imageExtensionData = originData.contents
      .map((item, index) => {
        return { ...item, order: index + 1 };
      })
      .filter((item) => item.type === 'image' && item.imageUrl !== '')
      .map(({ order, imageUrl }) => {
        return {
          order: order,
          extension: (imageUrl as File).type.split('/')[1],
        };
      });

    const imageFileData = originData.contents
      .filter((item) => item.type === 'image' && item.imageUrl !== '')
      .map((item) => {
        return item.imageUrl as File;
      });

    return { imageExtensionData, imageFileData };
  };

  const uploadImageMutation = useMutation({
    mutationFn: uploadNoticeImages,
    onError: () => alert('이미지 업로드를 다시 시도해주세요.'),
  });

  const createNoticeMutation = useMutation({
    mutationFn: createNotice,
    onSuccess: (data) => {
      const originData = methods.getValues();
      const { imageExtensionData, imageFileData } = formatImageData(originData);

      // 생성된 공지 ID에 이미지 업로드
      if (imageExtensionData.length !== 0) {
        uploadImageMutation.mutate({
          noticeId: data.id,
          imageExtensionData,
          imageFileData,
        });
      }
      router.push('/admin/notice');
    },
    onError: () => alert('게시물 생성을 다시 시도해주세요.'),
  });

  /** 게시물 생성 */
  const onSubmit = (data: NoticeCreateType, e?: BaseSyntheticEvent) => {
    e?.preventDefault();

    const noticeData = formatNoticeData(data);
    createNoticeMutation.mutate(noticeData);
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
          <div className={styles.field}>
            <input
              className={styles.rowInput}
              placeholder="제목 겸 알림 메시지 문구를 입력해 주세요. (최대 30자)"
              {...register('title', noticeTitleRules)}
            />
            <p className={styles.rowErrorMessage}>{errors.title && errors.title?.message}</p>
          </div>
        </div>
        <div className={styles.row}>
          <label className={styles.rowLabel}>소개 *</label>
          <div className={styles.field}>
            <input
              className={styles.rowInput}
              placeholder="글 소개하는 짧은 문구를 입력해 주세요. (최대 30자)"
              {...register('description', noticeDescriptionRules)}
            />
            <p className={styles.rowErrorMessage}>{errors.description && errors.description.message}</p>
          </div>
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
        <button
          type="button"
          onClick={handleSubmit(onSubmit)}
          disabled={!isValid}
          className={isValid ? styles.savedButton.active : styles.savedButton.default}
        >
          저장하기
        </button>
      </form>
    </FormProvider>
  );
}
