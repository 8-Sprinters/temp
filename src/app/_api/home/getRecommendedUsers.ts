// 리스트 조회 api
import axiosInstance from '@/lib/axios/axiosInstance';
import { UserProfileType } from '@/lib/types/userProfileType';

const getRecommendedUsers = async () => {
  const response = await axiosInstance.get<UserProfileType[]>(`/users/recommend`);
  return response.data;
};

export default getRecommendedUsers;
