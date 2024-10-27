import axiosInstance from '@/lib/axios/axiosInstance';

interface CollectionFolderProps {
  folderId: string;
  folderName: string;
}

const updateCollectionFolder = async ({ folderId, folderName }: CollectionFolderProps) => {
  await axiosInstance.put(`/folders/${folderId}`, { folderName });
};

export default updateCollectionFolder;
