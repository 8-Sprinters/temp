import axiosInstance from '@/lib/axios/axiosInstance';
import { TopicCreateType } from '@/lib/types/topicType';

const createTopic = async (data: TopicCreateType) => {
  const response = await axiosInstance.post('/topics', data);

  return response.data;
};

export default createTopic;
