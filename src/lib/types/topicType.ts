export interface TopicType {
  categoryEngName: string;
  categoryKorName: string;
  title: string;
  description: string;
  ownerId: number;
  ownerNickname: string;
  isAnonymous: boolean;
}

export interface TopicCreateType {
  categoryKorName: string;
  title: string;
  description: string;
  isAnonymous: boolean;
}
