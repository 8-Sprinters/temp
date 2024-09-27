'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import DeleteModalButton from '@/app/list/[listId]/_components/ListDetailOuter/DeleteModalButton';
import deleteReply from '@/app/_api/comment/deleteReply';
import { useCommentIdStore, useReplyId, useCommentId, useCommentStatus } from '@/store/useComment';
import { QUERY_KEYS } from '@/lib/constants/queryKeys';
import timeDiff from '@/lib/utils/time-diff';
import { ReplyType } from '@/lib/types/commentType';
import { UserType } from '@/lib/types/userProfileType';
import { replyLocale } from '@/app/list/[listId]/locale';

import * as styles from './Replies.css';
import { vars } from '@/styles/__theme.css';
import Line from '/public/icons/horizontal_line.svg';
import EditPen from '/public/icons/edit_pen.svg';
import { useLanguage } from '@/store/useLanguage';
import fallbackProfile from '/public/images/fallback_profileImage.webp';

interface RepliesProps {
  replies?: ReplyType[] | null;
  listId?: number;
  commentId?: number;
  currentUserInfo?: UserType;
  handleEdit: (comment: string) => void;
}

function Replies({ replies, listId, currentUserInfo, commentId, handleEdit }: RepliesProps) {
  const { language } = useLanguage();
  const { commentIds, addCommentId } = useCommentIdStore();

  const handleShowReplies = (commentId: number) => () => {
    addCommentId(commentId);
  };

  const isOpenedReplies = commentIds.includes(commentId as number);

  return (
    <>
      {replies?.length !== 0 && !isOpenedReplies && (
        <div className={styles.showMoreRepliesWrapper} onClick={handleShowReplies(commentId as number)}>
          <Line alt={replyLocale[language].lineAlt} />
          <div className={styles.showMoreReplies}>{`${replies?.length} ${replyLocale[language].moreReply}`}</div>
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
  const { language } = useLanguage();
  const queryClient = useQueryClient();
  const { setStatusEdit } = useCommentStatus();
  const { setCommentId } = useCommentId();
  const { setReplyId } = useReplyId();

  const deleteReplyMutation = useMutation({
    mutationFn: () => deleteReply({ listId: listId, commentId: reply?.commentId, replyId: reply?.id }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.getComments] });
    },
  });

  const handleEditButtonClick = (content: string) => {
    setStatusEdit();
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
        <Link href={`/user/${reply?.userId}/mylist`}>
          {reply.userProfileImageUrl ? (
            <Image
              src={reply.userProfileImageUrl}
              className={styles.profileImage}
              width={20}
              height={20}
              alt={replyLocale[language].profileImageAlt}
              style={{
                objectFit: 'cover',
              }}
            />
          ) : (
            <Image
              src={fallbackProfile}
              className={styles.profileImage}
              width={20}
              height={20}
              alt={replyLocale[language].profileImageAlt}
              style={{
                objectFit: 'cover',
              }}
            />
          )}
        </Link>
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
