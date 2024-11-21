'use client';

import { useRouter } from 'next/navigation';
import { BaseSyntheticEvent } from 'react';
import { useMutation } from '@tanstack/react-query';
import { FormProvider, useForm } from 'react-hook-form';

import * as styles from './page.css';

import createNotice from '@/app/_api/notice/createNotice';
import uploadNoticeImages from '@/app/_api/notice/uploadNoticeImages';

import { NoticeCreateType } from '@/lib/types/noticeType';
import { noticeDescriptionRules, noticeTitleRules } from '@/lib/constants/formInputValidationRules';

import CategoryDropdown from './_components/CategoryDropdown';
import ContentsBody from './_components/ContentsBody';

/** 공지 작성 데이터 포맷 유틸 함수 */
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

/** 이미지 업로드 데이터 포맷 유틸 함수 */
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
  const { register, handleSubmit, formState: { errors, isValid }} = methods;

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
        <CategoryDropdown />
        <div className={styles.row}>
          <label className={styles.rowLabel}>제목 *</label>
          <div className={styles.field}>
            <input
              className={styles.rowInput}
              placeholder="제목 또는 알림 메시지 문구를 입력해 주세요. (최대 30자)"
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
        <ContentsBody />
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
