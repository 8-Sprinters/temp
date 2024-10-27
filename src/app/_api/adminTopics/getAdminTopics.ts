// GET "/admin/topics?cursorId={}&size={}"

import axiosInstance from '@/lib/axios/axiosInstance';

interface GetTopicsType {
  cursorId?: number | null;
}

const getAdminTopics = async ({ cursorId }: GetTopicsType) => {
  const params = new URLSearchParams({
    size: '5',
  });

  if (cursorId) {
    params.append('cursorId', cursorId.toString());
  }

  const response = await axiosInstance.get(`/admin/topics?${params.toString()}`);

  return response.data;
};

export default getAdminTopics;
