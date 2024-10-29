// 리스트 조회 api
import axiosInstance from '@/lib/axios/axiosInstance';
//리스트 추천 상위 10개
interface GetFollowingListType {
  cursorUpdatedDate?: string | null;
}

const getFollowingLists = async ({ cursorUpdatedDate }: GetFollowingListType) => {
  const params = new URLSearchParams({
    size: '10',
  });

  if (cursorUpdatedDate) {
    params.append('cursorUpdatedDate', cursorUpdatedDate);
  }

  const response = await axiosInstance.get(`/lists/following?${params.toString()}`);

  return response.data;
};

export default getFollowingLists;
