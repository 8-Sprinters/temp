import axiosInstance from '@/lib/axios/axiosInstance';

const deleteNotice = async (noticeId: number) => {
  await axiosInstance.delete(`/admin/notices/${noticeId}`);
};

export default deleteNotice;
