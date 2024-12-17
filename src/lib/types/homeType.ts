interface Top3Type {
  id: number;
  rank: number;
  title: string;
}

export interface HomeRecommendedListType {
  id: number;
  ownerId: number;
  ownerNickname: string;
  title: string;
  itemImageUrl: string;
  category: string;
  backgroundColor: string;
  items: Top3Type[];
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

export interface RecommendedTopicType {
  id: number;
  title: string;
}
