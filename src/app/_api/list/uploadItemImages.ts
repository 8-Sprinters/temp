import axios from 'axios';
import axiosInstance from '@/lib/axios/axiosInstance';
import { ItemImagesType, PresignedUrlListType } from '@/lib/types/listType';

interface UploadItemImagesProps {
  listId: number;
  imageData: ItemImagesType;
  imageFileList: File[];
}

const uploadItemImages = async ({ listId, imageData, imageFileList }: UploadItemImagesProps) => {
  imageData.listId = listId;

  //PresignedUrl 생성 요청
  const response = await axiosInstance.post<PresignedUrlListType>('/lists/upload-url', imageData);

  //PresignedUrl에 이미지 업로드
  for (let i = 0; i < response.data.length; i++) {
    const result = await axios.put(response.data[i].presignedUrl, imageFileList[i], {
      headers: {
        'Content-Type': imageFileList[i]?.type,
      },
    });
    if (result.status !== 200) return;
  }

  //서버에 성공 완료 알림
  if (imageFileList.length !== 0) {
    await axiosInstance.post('/lists/upload-complete', imageData);
  }
};

export default uploadItemImages;
