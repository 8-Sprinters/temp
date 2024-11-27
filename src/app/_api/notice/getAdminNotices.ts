import axiosInstance from '@/lib/axios/axiosInstance';
import { AdminNoticeType } from '@/lib/types/noticeType';

const getAdminNotices = async () => {
  const result = await axiosInstance.get<AdminNoticeType[]>('/admin/notices');

  return result.data;
};

export default getAdminNotices;
