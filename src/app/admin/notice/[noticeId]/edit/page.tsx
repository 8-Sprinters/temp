'use client';

import { useRouter } from 'next/navigation';
import { BaseSyntheticEvent, useEffect } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { FormProvider, useForm } from 'react-hook-form';

import * as styles from '../../create/page.css';

import updateNotice from '@/app/_api/notice/updateNotice';
import uploadNoticeImages from '@/app/_api/notice/uploadNoticeImages';

import { NoticeCreateType, NoticeDetailType } from '@/lib/types/noticeType';
import { noticeDescriptionRules, noticeTitleRules } from '@/lib/constants/formInputValidationRules';

import CategoryDropdown from '../../create/_components/CategoryDropdown';
import ContentsBody from '../../create/_components/ContentsBody';
import getNoticeDetail from '@/app/_api/notice/getNoticeDetail';
import { QUERY_KEYS } from '@/lib/constants/queryKeys';
import { NOTICE_CATEGORY_NAME } from '@/lib/constants/notice';

/** 공지 작성 데이터 포맷 유틸 함수 */
const formatNoticeData = (originData: NoticeCreateType) => {
  // order 정리 및 이미지 url 초기화
  const updatedContents = originData.contents.map((item, index) => {
    const newContents = { ...item, order: index + 1 };
    if (newContents.type === 'image') {
      if (typeof newContents.imageUrl !== 'string') {
        newContents.imageUrl = '';
      }
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
    .filter((item) => item.type === 'image' && typeof item.imageUrl !== 'string')
    .map(({ order, imageUrl }) => {
      return {
        order: order,
        extension: (imageUrl as File).type.split('/')[1],
      };
    });

  const imageFileData = originData.contents
    .filter((item) => item.type === 'image' && typeof item.imageUrl !== 'string')
    .map((item) => {
      return item.imageUrl as File;
    });

  return { imageExtensionData, imageFileData };
};

type NoticeCategoryNameType = (typeof NOTICE_CATEGORY_NAME)[keyof typeof NOTICE_CATEGORY_NAME];

/** 카테고리 값에 해당하는 카테고리 코드 반환 */
function getCodeByObject(value: NoticeCategoryNameType) {
  return Object.values(NOTICE_CATEGORY_NAME).findIndex((field) => field === value) + 1;
}

export default function EditNotice({ params }: { params: { noticeId: number } }) {
  const noticeId = params.noticeId;

  const { data: notice } = useQuery<NoticeDetailType>({
    queryKey: [QUERY_KEYS.getNoticeDetail],
    queryFn: () => getNoticeDetail(params.noticeId),
    enabled: !!params.noticeId,
  });

  const router = useRouter();
  const queryClient = useQueryClient();
  const methods = useForm<NoticeCreateType>({
    mode: 'onChange',
    defaultValues: {
      categoryCode: 1,
      title: notice?.title,
      description: notice?.description,
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
  const { register, handleSubmit, formState: { errors, isValid }, reset } = methods;

  const uploadImageMutation = useMutation({
    mutationFn: uploadNoticeImages,
    onError: () => alert('이미지 업로드를 다시 시도해주세요.'),
  });

  const editNoticeMutation = useMutation({
    mutationFn: updateNotice,
    onSuccess: () => {
      const originData = methods.getValues();
      const { imageExtensionData, imageFileData } = formatImageData(originData);

      // 생성된 공지 ID에 이미지 업로드
      if (imageExtensionData.length !== 0) {
        uploadImageMutation.mutate({
          noticeId,
          imageExtensionData,
          imageFileData,
        });
      }
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.getAdminAllNotice] });
      router.push('/admin/notice');
    },
    onError: () => alert('게시물 수정을 다시 시도해주세요.'),
  });

  /** 게시물 수정 */
  const onSubmit = (data: NoticeCreateType, e?: BaseSyntheticEvent) => {
    e?.preventDefault();

    const noticeData = formatNoticeData(data);
    editNoticeMutation.mutate({ noticeData, noticeId });
  };

  useEffect(() => {
    if (notice) {
      reset({
        title: notice.title,
        categoryCode: getCodeByObject(notice.category),
        description: notice.description,
        contents: notice.contents.map((obj) =>
          Object.fromEntries(Object.entries(obj).filter(([_, value]) => value !== null))
        ),
      });
    }
  }, [notice, reset]);

  return (
    <FormProvider {...methods}>
      <form className={styles.container}>
        <h1>게시물 수정</h1>
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
          수정하기
        </button>
      </form>
    </FormProvider>
  );
}
