import axiosInstance from '@/lib/axios/axiosInstance';

const checkNicknamePolicy = async (nickname: string) => {
  const result = await axiosInstance.get<boolean>(`/users/nickname-validate?nickname=${nickname}`);

  return result.data; //true:사용가능 false:사용불가
};

export default checkNicknamePolicy;
