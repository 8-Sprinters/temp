import { NOTICE_CATEGORY_NAME, NOTICE_CONTENT } from '../constants/notice';

// 게시판(공지) 카테고리 조회
export interface NoticeCategoryType {
  code: number;
  viewName: (typeof NOTICE_CATEGORY_NAME)[keyof typeof NOTICE_CATEGORY_NAME];
}

// Contents Type
export type NoticeContentsType = keyof typeof NOTICE_CONTENT;

// 게시물 생성 타입
export interface NoticeCreateType {
  categoryCode: number;
  title: string;
  description: string;
  contents: NoticeContentType[] & { order: number };
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
  [key: string]: string | NoticeContentsType | number;
  type: NoticeContentsType;
  description: string;
  imageUrl: string;
  buttonName: string;
  buttonLink: string;
}
