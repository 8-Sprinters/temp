'use client';
import Image from 'next/image';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import DeleteModalButton from '@/app/list/[listId]/_components/ListDetailOuter/DeleteModalButton';
import deleteReply from '@/app/_api/comment/deleteReply';
import { useCommentIdStore, useReplyId, useCommentId } from '@/store/useComment';
import { QUERY_KEYS } from '@/lib/constants/queryKeys';
import timeDiff from '@/lib/utils/time-diff';
import { ReplyType } from '@/lib/types/commentType';
import { UserType } from '@/lib/types/userProfileType';

import * as styles from './Replies.css';
import { vars } from '@/styles/theme.css';
import Line from '/public/icons/horizontal_line.svg';
import EditPen from '/public/icons/edit_pen.svg';

interface RepliesProps {
  replies?: ReplyType[] | null;
  listId?: number;
  commentId?: number;
  currentUserInfo?: UserType;
  handleEdit: (comment: string) => void;
}

function Replies({ replies, listId, currentUserInfo, commentId, handleEdit }: RepliesProps) {
  const { commentIds, addCommentId } = useCommentIdStore();

  const handleShowReplies = (commentId: number) => () => {
    addCommentId(commentId);
  };

  const isOpenedReplies = commentIds.includes(commentId as number);

  return (
    <>
      {replies?.length !== 0 && !isOpenedReplies && (
        <div className={styles.showMoreRepliesWrapper} onClick={handleShowReplies(commentId as number)}>
          <Line alt="답글 구분선" />
          <div className={styles.showMoreReplies}>{`답글 ${replies?.length}개 더 보기`}</div>
        </div>
      )}
      {isOpenedReplies && (
        <ul className={styles.repliesWrapper}>
          {replies?.map((item: ReplyType) => {
            return (
              <li key={item.id} className={styles.repliesOuterWrapper}>
                <Reply
                  reply={item}
                  listId={listId}
                  currentUserInfo={currentUserInfo}
                  handleEdit={handleEdit}
                  commentId={commentId}
                />
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}

export default Replies;

interface ReplyProps {
  reply: ReplyType;
  listId?: number;
  currentUserInfo?: UserType;
  handleEdit: (comment: string) => void;
  commentId?: number;
}

function Reply({ reply, listId, currentUserInfo, handleEdit, commentId }: ReplyProps) {
  const queryClient = useQueryClient();
  const { setCommentId } = useCommentId();
  const { setReplyId } = useReplyId();
  const deleteReplyMutation = useMutation({
    mutationFn: () => deleteReply({ listId: listId, commentId: reply?.commentId, replyId: reply?.id }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.getComments] });
    },
  });

  const handleEditButtonClick = (content: string) => {
    handleEdit(content);
    setCommentId(commentId as number);
    setReplyId(reply?.id);
  };

  const handleDeleteButtonClick = () => {
    deleteReplyMutation.mutate();
  };
  return (
    <>
      <div className={styles.replyWrapper}>
        <Image
          src={reply.userProfileImageUrl}
          className={styles.profileImage}
          width={20}
          height={20}
          alt="사용자 프로필 이미지"
          style={{
            objectFit: 'cover',
          }}
        />
        <div className={styles.replyContainer}>
          <div className={styles.replyInformationWrapper}>
            <span className={styles.replyWriter}>{reply.userNickname}</span>
            <span className={styles.replyCreatedTime}>{timeDiff(reply.updatedDate)}</span>
          </div>
          <p className={styles.replyContent}>{reply.content}</p>
        </div>
      </div>
      {currentUserInfo?.id === reply.userId && (
        <div className={styles.actionButtonWrapper}>
          <button className={styles.editButton} onClick={() => handleEditButtonClick(reply.content)}>
            <EditPen width={17} height={17} fill={vars.color.gray7} />
          </button>
          <DeleteModalButton onDelete={handleDeleteButtonClick} />
        </div>
      )}
    </>
  );
}
