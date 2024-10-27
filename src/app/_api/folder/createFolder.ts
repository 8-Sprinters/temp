import axiosInstance from '@/lib/axios/axiosInstance';
import { FoldersType } from '@/lib/types/folderType';

const createCollectionFolder = async (value: { folderName: string }) => {
  const response = await axiosInstance.post<Pick<FoldersType, 'folderId'>>('/folders', value);
  return response.data;
};

export default createCollectionFolder;
