import { NoticeCreateType } from '@/lib/types/noticeType';

/** 어드민 게시물 생성 데이터 포맷 함수 */
const formatNoticeData = (originData: NoticeCreateType) => {
  // 콘텐츠 블록 order 정리 및 이미지 url 초기화
  const updatedContents = originData.contents.map((item, index) => {
    const newContents = { ...item, order: index + 1 };
    if (newContents.type === 'image') {
      if (typeof newContents.imageUrl !== 'string') {
        newContents.imageUrl = '';
      }
    }
    return newContents;
  });

  // 새로운 데이터 객체 반환
  const noticeData: NoticeCreateType = {
    ...originData,
    contents: updatedContents,
  };
  return noticeData;
};

/** 이미지 업로드 데이터 포맷 함수 */
const formatImageData = (originData: NoticeCreateType) => {
  const imageExtensionData = originData.contents
    .map((item, index) => {
      return { ...item, order: index + 1 };
    })
    .filter((item) => item.type === 'image' && typeof item.imageUrl !== 'string')
    .map(({ order, imageUrl }) => {
      return {
        order: order,
        extension: (imageUrl as File).type.split('/')[1],
      };
    });

  const imageFileData = originData.contents
    .filter((item) => item.type === 'image' && typeof item.imageUrl !== 'string')
    .map((item) => {
      return item.imageUrl as File;
    });

  return { imageExtensionData, imageFileData };
};

export { formatNoticeData, formatImageData };
