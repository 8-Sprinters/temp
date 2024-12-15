import axiosInstance from '@/lib/axios/axiosInstance';
import { NoticeCreateType } from '@/lib/types/noticeType';

interface UpdateNoticeRequestType {
  noticeData: NoticeCreateType;
  noticeId: number;
}

const updateNotice = async ({ noticeData, noticeId }: UpdateNoticeRequestType) => {
  await axiosInstance.put<ResponseType>(`/admin/notices/${noticeId}`, noticeData);
};

export default updateNotice;
