import NOTICE_CATEGORY_NAME from '../constants/noticeCategoryName';

// 게시판(공지) 카테고리 조회
export interface NoticeCategoryType {
  code: number;
  viewName: (typeof NOTICE_CATEGORY_NAME)[keyof typeof NOTICE_CATEGORY_NAME];
}

export interface NoticeListItemType {
  id: number;
  createdDate: string;
  title: string;
  itemImageUrl: string | null;
  category: string;
  description: string;
}

export interface NoticeDetailType {
  id: number;
  category: string;
  title: string;
  description: string;
  content: NoticeContentType[];
  createdDate: string;
  prevNotice: {
    id: number;
    title: string;
    description: string;
  };
  nextNotice: {
    id: number;
    title: string;
    description: string;
  };
}

export interface NoticeContentType {
  type: string;
  description: string;
  imageUrl: string;
  buttonName: string;
  buttonLink: string;
}
