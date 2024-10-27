import axiosInstance from '@/lib/axios/axiosInstance';

interface GetCollectionType {
  cursorId: number | undefined | null;
  category: string;
}

async function getCollection({ category, cursorId }: GetCollectionType) {
  const params = new URLSearchParams({
    size: '6',
  });

  if (cursorId) {
    params.append('cursorId', cursorId.toString());
  }

  const response = await axiosInstance.get(`/lists/collect?category=${category}&${params.toString()}`);

  return response.data;
}

export default getCollection;
