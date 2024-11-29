'use client';

import { useMutation, UseMutationOptions, UseMutationResult, useQueryClient } from '@tanstack/react-query';

import deleteNotice from '@/app/_api/notice/deleteNotice';
import sendNoticeAlarm from '@/app/_api/notice/sendNoticeAlarm';
import updateNoticePublic from '@/app/_api/notice/updateNoticePublic';

import { QUERY_KEYS } from '@/lib/constants/queryKeys';

const useNoticeMutation = <TData = unknown, TError = unknown, TVariables = unknown>(
  mutationFn: (variables: TVariables) => Promise<TData>,
  mutationOptions?: Omit<UseMutationOptions<TData, TError, TVariables>, 'mutationFn'>
) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.getAdminAllNotice] });
    },
    ...mutationOptions,
  });
};

// useNoticeMutation이 반환하는 타입은 UseMutationResult<TData, TError, TVariables, unknown> 타입으로,
// useNotice 훅이 반환하는 각 함수의 반환값(void), 에러, 변수 타입(number), context 타입을 정의해주었다.
type UseNoticeReturnType = {
  deletNoticeMutation: UseMutationResult<void, unknown, number, unknown>;
  sendNoticeAlarmMutation: UseMutationResult<void, unknown, number, unknown>;
  updateNoticePublicMutation: UseMutationResult<void, unknown, number, unknown>;
};

// React-query의 useMutation을 wrapping해주는 Notice 관련 custom hook
const useNotice = (): UseNoticeReturnType => {
  const deletNoticeMutation = useNoticeMutation(deleteNotice);
  const sendNoticeAlarmMutation = useNoticeMutation(sendNoticeAlarm);
  const updateNoticePublicMutation = useNoticeMutation(updateNoticePublic);

  return {
    deletNoticeMutation,
    sendNoticeAlarmMutation,
    updateNoticePublicMutation,
  };
};

export default useNotice;
