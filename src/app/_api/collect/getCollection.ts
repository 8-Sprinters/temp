import axiosInstance from '@/lib/axios/axiosInstance';
import { CollectionType } from '@/lib/types/listType';

export interface CollectionListResponseType {
  collectionLists: CollectionType[];
  cursorId: string;
  hasNext: boolean;
  folderName: string;
}

const getCollection = async (folderId: string, cursorId?: string) => {
  const params = new URLSearchParams({
    size: '10',
  });

  if (cursorId) {
    params.append('cursorId', cursorId.toString());
  }

  const response = await axiosInstance.get<CollectionListResponseType>(
    `/folder/${folderId}/collections?${params.toString()}`
  );
  return response.data;
};

export default getCollection;
