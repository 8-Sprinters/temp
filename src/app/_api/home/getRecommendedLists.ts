// 리스트 조회 api
import axiosInstance from '@/lib/axios/axiosInstance';
//리스트 추천 상위 10개
interface GetRecommendedListsType {
  cursorUpdatedDate?: string | null;
}

const getRecommendedLists = async ({ cursorUpdatedDate }: GetRecommendedListsType) => {
  const params = new URLSearchParams({
    size: '10',
  });

  if (cursorUpdatedDate) {
    params.append('cursorUpdatedDate', cursorUpdatedDate);
  }

  const response = await axiosInstance.get(`/lists?${params.toString()}`);

  return response.data;
};

export default getRecommendedLists;
