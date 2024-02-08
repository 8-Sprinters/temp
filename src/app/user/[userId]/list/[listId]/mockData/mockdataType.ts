export interface ReplyType {
  id: number;
  userId: number;
  userNickName: string;
  userProfileImageUrl: string;
  createdDate: string;
  content: string;
}

export interface CommentType {
  id: number;
  userId: number;
  userNickname: string;
  userProfileImageUrl: string;
  createdDate: string;
  content: string;
  replies: ReplyType[] | null;
}

export interface CollaboratorType {
  id?: number;
  nickname: string;
  profileImageUrl: string | null;
}
