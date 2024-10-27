/* @TODO
1. 유진님 파일 머지 받아서 타입 공통화 작업.
*/

export interface RequestedTopicType {
  categoryEngName: string;
  categoryKorName: string;
  title: string;
  description: string;
  createdDate: string;
  ownerId: number;
  ownerNickname: string;
  isAnonymous: boolean;
  isExposed: boolean;
}

export interface RequestedTopicsListType {
  data: RequestedTopicType[];
}

export interface editAdminTopicType {
  topicId: number;
  isExposed: boolean;
  categoryCode: string;
  title: string;
}
