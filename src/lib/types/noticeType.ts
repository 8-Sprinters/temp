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
