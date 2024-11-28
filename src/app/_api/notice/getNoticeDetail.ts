import axiosInstance from '@/lib/axios/axiosInstance';
import { NoticeDetailType } from '@/lib/types/noticeType';

const getNoticeDetail = async (noticeId: number) => {
  const result = await axiosInstance.get<NoticeDetailType>(`/notices/${noticeId}`);

  return result.data;
};

export default getNoticeDetail;
