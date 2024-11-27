import axiosInstance from '@/lib/axios/axiosInstance';

const sendNoticeAlarm = async (noticeId: number) => {
  await axiosInstance.post(`/admin/notices/${noticeId}/alarm`);
};

export default sendNoticeAlarm;
