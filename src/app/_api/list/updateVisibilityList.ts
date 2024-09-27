import axiosInstance from '@/lib/axios/axiosInstance';

const updateVisibilityList = async (listId: string) => {
  return await axiosInstance.patch(`/lists/${listId}/visibility`);
};

export default updateVisibilityList;
