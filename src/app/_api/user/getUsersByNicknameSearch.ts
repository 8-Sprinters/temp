import axiosInstance from '@/lib/axios/axiosInstance';
import { UserSearchType } from '@/lib/types/user';

const getUsersByNicknameSearch = async (search: string) => {
  const response = await axiosInstance.get<UserSearchType>(`/users?search=${search}`);

  return response.data;
};

export default getUsersByNicknameSearch;
