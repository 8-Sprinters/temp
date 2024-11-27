'use client';

import { useMutation, UseMutationOptions, useQueryClient } from '@tanstack/react-query';

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

// React-query의 useMutation을 wrapping해주는 Notice 관련 custom hook
const useNotice = () => {
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
