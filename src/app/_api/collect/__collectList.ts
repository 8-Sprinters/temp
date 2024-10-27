import axiosInstance from '@/lib/axios/axiosInstance';

const collectList = async (listId: number) => {
  return await axiosInstance.post(`/lists/${listId}/collect`);
};

export default collectList;
