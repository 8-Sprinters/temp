'use client';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import checkAllNotification from '@/app/_api/notification/checkAllNotification';
import getNotificationAllChecked from '../_api/notification/getNotificationAllChecked';

import Header from '@/components/Header/Header';
import useMoveToPage from '@/hooks/useMoveToPage';
import { QUERY_KEYS } from '@/lib/constants/queryKeys';
import { notificationLocale } from '@/app/notification/locale';
import { useLanguage } from '@/store/useLanguage';

import NotificationList from './_components/NotificationList';
import * as styles from './_components/NotificationList.css';

export default function NotificationPage() {
  const { language } = useLanguage();
  const { onClickMoveToPage } = useMoveToPage();

  const { data: result, isPending } = useQuery({
    queryKey: [QUERY_KEYS.getNotificationAllChecked],
    queryFn: () => getNotificationAllChecked(),
  });

  const isNotificationAllChecked = result ? result?.isAllChecked : true;

  const queryClient = useQueryClient();

  const { mutate: checkAllNotificationMutate } = useMutation({
    mutationKey: [QUERY_KEYS.notifications, QUERY_KEYS.getNotificationAllChecked],
    mutationFn: checkAllNotification,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.notifications],
      });
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.getNotificationAllChecked],
      });
    },
  });

  return (
    <>
      <Header
        title={notificationLocale[language].notification}
        left="back"
        leftClick={onClickMoveToPage('/')}
        right={
          <button
            disabled={!!isNotificationAllChecked || isPending}
            className={styles.readAllButton}
            onClick={() => {
              checkAllNotificationMutate();
            }}
          >
            모두 읽음
          </button>
        }
      />
      <NotificationList />
    </>
  );
}
