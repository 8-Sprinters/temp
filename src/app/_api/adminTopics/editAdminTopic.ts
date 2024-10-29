import { editAdminTopicType } from '@/lib/types/requestedTopicType';
//PUT "/admin/topics/{topicId}"

import axiosInstance from '@/lib/axios/axiosInstance';

const editAdminTopic = async ({ topicId, isExposed, categoryCode, title }: editAdminTopicType) => {
  await axiosInstance.put(`/admin/topics/${topicId}`, {
    isExposed,
    categoryCode,
    title,
  });
};

export default editAdminTopic;
