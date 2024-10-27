// GET "/topics?cursorId={}&size={}"

import axiosInstance from '@/lib/axios/axiosInstance';

interface GetTopicsType {
  cursorId?: number | null;
}

const getTopics = async ({ cursorId }: GetTopicsType) => {
  const params = new URLSearchParams({
    size: '10',
  });

  if (cursorId) {
    params.append('cursorId', cursorId.toString());
  }

  const response = await axiosInstance.get(`/topics?${params.toString()}`);

  return response.data;
};

export default getTopics;
