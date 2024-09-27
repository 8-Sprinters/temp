'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import Replies from '@/app/list/[listId]/_components/ListDetailOuter/Replies';
import deleteComment from '@/app/_api/comment/deleteComment';
import DeleteModalButton from '@/app/list/[listId]/_components/ListDetailOuter/DeleteModalButton';

import timeDiff from '@/lib/utils/time-diff';
import { QUERY_KEYS } from '@/lib/constants/queryKeys';
import { CommentType } from '@/lib/types/commentType';
import { UserType } from '@/lib/types/userProfileType';
import { useCommentId, useCommentStatus } from '@/store/useComment';
import { commentLocale } from '@/app/list/[listId]/locale';

import * as styles from './Comment.css';
import { vars } from '@/styles/__theme.css';
import fallbackProfile from '/public/images/fallback_profileImage.webp';
import EditPen from '/public/icons/edit_pen.svg';
import { useLanguage } from '@/store/useLanguage';

/**
 * @todo 타입 정리 필요
 */
interface CommentProps {
  comment?: CommentType;
  setActiveNickname: (userName?: string) => void;
  activeNickname?: string | null;
  handleSetCommentId: (id: number | undefined) => void;
  handleSetComment: (comment: string) => void;
  listId?: number;
  commentId?: number;
  currentUserInfo?: UserType;
  handleEdit: (comment: string) => void;
}

function Comment({
  comment,
  setActiveNickname: onUpdate,
  handleSetCommentId,
  handleSetComment,
  listId,
  commentId,
  currentUserInfo,
  handleEdit,
}: CommentProps) {
  const { language } = useLanguage();
  const queryClient = useQueryClient();
  const { setCommentId } = useCommentId();
  const { setStatusCreateReply, setStatusEdit } = useCommentStatus();

  //현재 작성중인 답글의 원댓글 정보를 업데이트 하는 로직
  const handleActiveNicknameAndIdUpdate = () => {
    const currentUserName = comment?.userNickname;
    const currentCommentId = comment?.id;
    if (!currentUserName && !currentCommentId) {
      return null;
    }
    handleSetComment('');
    setStatusCreateReply();
    onUpdate(currentUserName);
    handleSetCommentId(currentCommentId);
  };

  //수정하기 버튼을 누르면 실행되는 함수
  const handleEditButtonClick = (comment: string) => {
    setStatusEdit();
    handleEdit(comment);
    setCommentId(commentId as number);
  };

  //댓글 삭제 리액트 쿼리 함수
  const deleteCommentMutation = useMutation({
    mutationFn: () => deleteComment({ listId: Number(listId), commentId: comment?.id }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.getComments] });
    },
  });

  //댓글 삭제 실행 함수
  const handleClickDeleteButton = () => {
    deleteCommentMutation.mutate();
  };

  return (
    <>
      <div className={styles.commentOuterWrapper}>
        <div className={styles.commentWrapper}>
          {comment && !comment.isDeleted && (
            <Link href={`/user/${comment?.userId}/mylist`}>
              <div className={styles.profileImageParent}>
                {comment.userProfileImageUrl ? (
                  <Image
                    alt={commentLocale[language].profileImageAlt}
                    src={comment.userProfileImageUrl}
                    className={styles.profileImage}
                    fill
                    style={{
                      objectFit: 'cover',
                    }}
                    sizes="100vw 100vh"
                  />
                ) : (
                  <Image
                    alt={commentLocale[language].profileImageAlt}
                    src={fallbackProfile}
                    className={styles.profileImage}
                    fill
                    style={{
                      objectFit: 'cover',
                    }}
                    sizes="100vw 100vh"
                  />
                )}
              </div>
            </Link>
          )}
          {comment?.isDeleted && (
            <div className={styles.profileImageParent}>
              <Image
                alt={commentLocale[language].profileImageAlt}
                src={fallbackProfile}
                className={styles.profileImage}
                fill
                style={{
                  objectFit: 'cover',
                }}
              />
            </div>
          )}
          <div className={styles.commentContainer}>
            <div className={styles.commentInformationWrapper}>
              <Link href={`/user/${comment?.userId}/mylist`}>
                <span className={styles.commentWriter}>
                  {comment?.isDeleted ? commentLocale[language].unknown : comment?.userNickname}
                </span>
              </Link>
              <span className={styles.commentCreatedTime}>{comment && timeDiff(comment?.updatedDate)}</span>
            </div>
            {!comment?.isDeleted ? (
              <div className={styles.commentContent}>{comment?.content}</div>
            ) : (
              <span className={styles.deletedComment}>{commentLocale[language].deletedMessage}</span>
            )}
          </div>
        </div>
        {!comment?.isDeleted && currentUserInfo?.id === comment?.userId && (
          <div className={styles.actionButtonWrapper}>
            <button className={styles.editButton} onClick={() => comment && handleEditButtonClick(comment?.content)}>
              <EditPen width={17} height={17} fill={vars.color.gray7} />
            </button>
            <DeleteModalButton onDelete={handleClickDeleteButton} />
          </div>
        )}
      </div>
      <button className={styles.createReplyButton} onClick={handleActiveNicknameAndIdUpdate}>
        <span>{commentLocale[language].reply}</span>
      </button>
      <Replies
        replies={comment?.replies}
        listId={listId}
        commentId={commentId}
        currentUserInfo={currentUserInfo}
        handleEdit={handleEdit}
      />
    </>
  );
}

export default Comment;
