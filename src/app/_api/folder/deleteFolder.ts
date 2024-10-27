import axiosInstance from '@/lib/axios/axiosInstance';

const deleteFolder = async (folderId: string) => {
  await axiosInstance.delete(`/folders/${folderId}`);
};

export default deleteFolder;
