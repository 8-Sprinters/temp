import axiosInstance from '@/lib/axios/axiosInstance';

const updateNoticePublic = async (noticeId: number) => {
  await axiosInstance.patch(`/admin/notices/${noticeId}`);
};

export default updateNoticePublic;
