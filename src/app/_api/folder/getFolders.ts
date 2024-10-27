import axiosInstance from '@/lib/axios/axiosInstance';
import { FoldersType } from '@/lib/types/folderType';

export interface FoldersResponseType {
  folders: FoldersType[];
}

const getFolders = async () => {
  const response = await axiosInstance.get<FoldersResponseType>('/folders');
  return response.data;
};

export default getFolders;
