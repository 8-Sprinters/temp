import axiosInstance from '@/lib/axios/axiosInstance';

import { editAdminTopicType } from '@/lib/types/requestedTopicType';

const editAdminTopic = async ({ topicId, isExposed, categoryCode, title }: editAdminTopicType) => {
  await axiosInstance.put(`/admin/topics/${topicId}`, {
    isExposed,
    categoryCode,
    title,
  });
};

export default editAdminTopic;
