// 리스트 삭제 api
import axiosInstance from '@/lib/axios/axiosInstance';

const deleteList = async (listId: string | undefined) => {
  await axiosInstance.delete(`/lists/${listId}`);
};

export default deleteList;
