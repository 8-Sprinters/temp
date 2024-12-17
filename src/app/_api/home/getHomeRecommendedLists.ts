// 리스트 조회 api
import axiosInstance from '@/lib/axios/axiosInstance';
import { HomeRecommendedListType } from '@/lib/types/homeType';
//리스트 추천 상위 10개
const getHomeRecommendedLists = async () => {
  const response = await axiosInstance.get<HomeRecommendedListType[]>(`/lists/recommend`);
  return response.data;
};

export default getHomeRecommendedLists;
