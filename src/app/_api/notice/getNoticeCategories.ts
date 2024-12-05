import axiosInstance from '@/lib/axios/axiosInstance';
import { NoticeCategoryType } from '@/lib/types/noticeType';

const getNoticeCategories = async () => {
  const result = await axiosInstance.get<NoticeCategoryType[]>('/admin/notices/categories');

  return result.data;
};

export default getNoticeCategories;
