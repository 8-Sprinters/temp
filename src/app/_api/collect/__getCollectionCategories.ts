import axiosInstance from '@/lib/axios/axiosInstance';
import { CategoryType } from '@/lib/types/categoriesType';

const getCollectionCategories = async () => {
  const response = await axiosInstance.get<CategoryType[]>('/collection/categories');

  return response.data;
};

export default getCollectionCategories;
