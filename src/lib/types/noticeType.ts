import { NOTICE_CATEGORY_NAME, NOTICE_CONTENT } from '../constants/notice';

// 게시판(공지) 카테고리 조회
export interface NoticeCategoryType {
  code: number;
  viewName: (typeof NOTICE_CATEGORY_NAME)[keyof typeof NOTICE_CATEGORY_NAME];
}

// Contents Type
export type NoticeContentsType = keyof typeof NOTICE_CONTENT;

// item 타입
export type ItemsType = NoticeContentType & { order: number };

// 게시물 생성 타입
export interface NoticeCreateType {
  categoryCode: number;
  title: string;
  description: string;
  contents: ItemsType[];
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
  [key: string]: unknown;
  type: NoticeContentsType;
  description?: string;
  imageUrl?: unknown; // FileList 타입일수도, String 타입일수도, undefined일수도 있으므로 사용처에서 타입 지정
  buttonName?: string;
  buttonLink?: string;
}
