interface Top3Type {
  id: number;
  rank: number;
  title: string;
}

export interface TrendingListType {
  id: number;
  ownerId: number;
  ownerNickname: string;
  ownerProfileImageUrl: string;
  title: string;
  category: string;
  description: string;
  backgroundColor: string;
  itemImageUrl: string;
  top3: Top3Type[];
}

export interface UsersRecommendationItemType {
  id: number;
  nickname: string;
  profileImageUrl: string;
}

export interface LabelType {
  id: number;
  name: string;
}

export interface ListItemType {
  id?: number;
  rank?: number;
  title?: string;
  imageUrl?: string;
}

export interface ListRecommendationType {
  id: number;
  category: string;
  backgroundColor: string;
  listUrl: string;
  ownerId: number;
  ownerNickname: string;
  ownerProfileImage: string;
  labels: LabelType[];
  title: string;
  description: string;
  items: ListItemType[];
  version: number;
}
