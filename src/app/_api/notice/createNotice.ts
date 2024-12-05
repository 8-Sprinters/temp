import axiosInstance from '@/lib/axios/axiosInstance';
import { NoticeCreateType } from '@/lib/types/noticeType';

interface ResponseType {
  id: number;
}

const createNotice = async (data: NoticeCreateType) => {
  const response = await axiosInstance.post<ResponseType>('/admin/notices', data);

  return response.data;
};

export default createNotice;
