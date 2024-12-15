import axiosInstance from '@/lib/axios/axiosInstance';
import { NoticeListItemType } from '@/lib/types/noticeType';

const getNotices = async () => {
  const result = await axiosInstance.get<NoticeListItemType[]>('/admin/notices');

  return result.data;
};

export default getNotices;
