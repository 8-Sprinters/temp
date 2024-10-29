// 리스트 조회 api
import axiosInstance from '@/lib/axios/axiosInstance';
//리스트 추천 상위 10개
interface GetRecentListsType {
  cursorUpdatedDate?: string | null;
  category?: string;
}

const getRecentLists = async ({ cursorUpdatedDate, category = 'entire' }: GetRecentListsType) => {
  const params = new URLSearchParams({
    size: '10',
  });

  if (cursorUpdatedDate) {
    params.append('cursorUpdatedDate', cursorUpdatedDate);
  }

  if (category) {
    params.append('category', category);
  }

  const response = await axiosInstance.get(`/lists?${params.toString()}`);

  return response.data;
};

export default getRecentLists;
