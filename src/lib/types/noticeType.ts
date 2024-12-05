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

// 어드민 게시물 조회
export type AdminNoticeType = Omit<NoticeListItemType, 'itemImageUrl'> & {
  isExposed: boolean;
  didSendAlarm: boolean;
};

// 게시물 타입
interface NoticeType {
  id: number;
  category: (typeof NOTICE_CATEGORY_NAME)[keyof typeof NOTICE_CATEGORY_NAME];
  title: string;
  description: string;
  createdDate: string;
}

// 게시물 리스트 조회
export type NoticeListItemType = NoticeType & {
  itemImageUrl: string | null;
};

// 게시물 상세 조회
export type NoticeDetailType = NoticeType & {
  contents: NoticeContentType[];
  prevNotice: Partial<NoticeType>;
  nextNotice: Partial<NoticeType>;
};

// 게시물 내용(콘텐츠)
export interface NoticeContentType {
  [key: string]: unknown;
  type: NoticeContentsType;
  description?: string;
  imageUrl?: unknown; // FileList 타입일수도, String 타입일수도, undefined일수도 있으므로 사용처에서 타입 지정
  buttonName?: string;
  buttonLink?: string;
}
