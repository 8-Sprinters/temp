'use client';

import { useQuery } from '@tanstack/react-query';

import getAdminNotices from '@/app/_api/notice/getAdminNotices';
import { QUERY_KEYS } from '@/lib/constants/queryKeys';
import { AdminNoticeType } from '@/lib/types/noticeType';

export default function AdminNoticesPage() {
  const { data: notices } = useQuery<AdminNoticeType[]>({
    queryKey: [QUERY_KEYS.getAdminAllNotice],
    queryFn: getAdminNotices,
  });

  console.log(notices); // 삭제

  return <div>공지</div>;
}
