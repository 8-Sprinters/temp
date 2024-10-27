import axiosInstance from '@/lib/axios/axiosInstance';
import { CollectionType } from '@/lib/types/listType';

interface GetCollectionType {
  folderId: string;
  cursorId?: number;
}

interface ResponseType {
  collectionLists: CollectionType[];
  cursorId: number;
  hasNext: boolean;
}

async function getCollection({ folderId, cursorId }: GetCollectionType) {
  const params = new URLSearchParams({
    size: '8',
  });

  if (cursorId) {
    params.append('cursorId', cursorId.toString());
  }

  const response = await axiosInstance.get<ResponseType>(`/folder/${folderId}/collections?${params.toString()}`);

  return response.data;
}

export default getCollection;
