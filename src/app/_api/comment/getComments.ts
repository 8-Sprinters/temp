// 리스트 조회 api
import axiosInstance from '@/lib/axios/axiosInstance';

//리스트 상세 페이지 리스트 조회 api
export async function getComments(listId: string | undefined) {
  const response = await axiosInstance.get(`/lists/${listId}/comments`);
  return response.data;
}
