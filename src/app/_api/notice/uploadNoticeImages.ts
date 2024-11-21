import axios from 'axios';
import axiosInstance from '@/lib/axios/axiosInstance';

interface UploadImageType {
  order: number;
  extension: string;
}

interface UploadNoticeImagesProps {
  noticeId: number;
  imageExtensionData: UploadImageType[];
  imageFileData: File[];
}

interface PresignedResponseType {
  order: number;
  presignedUrl: string;
}

const uploadNoticeImages = async ({ noticeId, imageFileData, imageExtensionData }: UploadNoticeImagesProps) => {
  // 1. Presigned url 발급 요청
  const presignedResponse = await axiosInstance.post<PresignedResponseType[]>(
    `/admin/notices/${noticeId}/presigned-url`,
    imageExtensionData
  );

  // 2. 발급 받은 Presigned url로 이미지 업로드
  presignedResponse.data.forEach(async (value, index) => {
    await axios.put(value.presignedUrl, imageFileData[index], {
      headers: {
        'Content-Type': imageFileData[index].type,
      },
    });
  });

  // 3. 이미지 업로드 완료 서버에 알림
  await axiosInstance.post(`/admin/notices/${noticeId}/upload-complete`, imageExtensionData);
};

export default uploadNoticeImages;
