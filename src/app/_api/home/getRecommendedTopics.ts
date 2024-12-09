// 이 주제로 만들어주세요 조회 api
import axiosInstance from '@/lib/axios/axiosInstance';
import { recommendedTopicType } from '@/lib/types/homeType';

const getRecommendedTopics = async () => {
  const response = await axiosInstance.get<recommendedTopicType[]>(`/lists/recommendedTopics`);
  return response.data;
};

export default getRecommendedTopics;
