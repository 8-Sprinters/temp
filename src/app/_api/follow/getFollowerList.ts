import axiosInstance from '@/lib/axios/axiosInstance';
import { FollowerListType } from '@/lib/types/followType';

const getFollowerList = async (userId: number) => {
  const response = await axiosInstance.get<FollowerListType>(`/users/${userId}/followers`);

  return response.data;
};

export default getFollowerList;
