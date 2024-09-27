import { ChangeEvent, Dispatch, useEffect, SetStateAction } from 'react';

import { useUser } from '@/store/useUser';
import { useIsEditing, useCommentStatus } from '@/store/useComment';
import { useLanguage } from '@/store/useLanguage';
import useResizeTextarea from '@/hooks/useResizeTextarea';
import { commentPlaceholder } from '@/lib/constants/placeholder';
import { commentLocale } from '@/app/list/[listId]/locale';
import Modal from '@/components/Modal/Modal';
import LoginModal from '@/components/login/LoginModal';
import useBooleanOutput from '@/hooks/useBooleanOutput';

import { vars } from '@/styles/__theme.css';
import * as styles from './Comments.css';
import CancelButton from '/public/icons/cancel_button.svg';
import Airplane from '/public/icons/airplane_send.svg';

interface CommentFormProps {
  comment?: string;
  activeNickname?: string | null;
  handleSubmit: (e: React.FormEvent<HTMLFormElement> | React.KeyboardEvent<HTMLTextAreaElement>) => void;
  handleUpdate?: () => void;
  handleChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  imageSrc?: string;
  isEditing?: boolean;
  isPending: boolean;
  handleCancel: () => void;
}

function CommentForm({
  comment,
  handleChange,
  activeNickname,
  isPending,
  handleSubmit,
  handleUpdate,
  handleCancel,
}: CommentFormProps) {
  const { status } = useCommentStatus();
  const { language } = useLanguage();
  const { isEditing } = useIsEditing();
  const { textareaRef, handleResizeHeight } = useResizeTextarea();
  const { isOn, handleSetOn, handleSetOff } = useBooleanOutput();

  const handleResetTextArea = () => {
    if (textareaRef.current !== null) {
      textareaRef.current.style.height = '20px';
    }
  };

  const handleTextareaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    handleChange(e);
    handleResizeHeight();
  };

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    handleSubmit(e);
    handleResetTextArea();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey && !isPending) {
      handleResetTextArea();
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const handleCancelForm = () => {
    handleCancel();
    handleResizeHeight();
  };

  const handleClickInactiveForm = () => {
    if (!userId) {
      handleSetOn();
    }
  };

  const textAreaHeight = () => {
    if (textareaRef.current === null) {
      return false;
    }
    if (textareaRef.current.scrollHeight >= 30) {
      return true;
    }
  };

  const { user } = useUser();
  const userId = user.id;

  useEffect(() => {
    const textarea = textareaRef.current;

    const handleBlur = () => {
      handleResizeHeight();
    };

    const handleFocus = () => {
      handleResizeHeight();
    };

    if (textarea) {
      textarea.addEventListener('blur', handleBlur);
      textarea.addEventListener('focus', handleFocus);
    }

    return () => {
      if (textarea) {
        textarea.removeEventListener('blur', handleBlur);
        textarea.removeEventListener('focus', handleFocus);
      }
    };
  }, [textareaRef, handleResizeHeight]);

  return (
    <>
      {isOn && (
        <Modal handleModalClose={handleSetOff} size="large">
          <LoginModal id="commentLoginBtn" />
        </Modal>
      )}
      <div className={styles.formWrapperOuter}>
        <div
          className={`${styles.formWrapperInner} ${!!activeNickname || isEditing || textAreaHeight() ? styles.activeFormWrapper : ''}`}
        >
          {status === 'createReply' && activeNickname && (
            <div className={styles.activeReplyWrapper}>
              <span className={styles.replyNickname}>
                {language === 'ko'
                  ? `@${activeNickname} ${commentLocale.ko.replyNickname}`
                  : `${commentLocale.en.replyNickname} @${activeNickname}`}
              </span>
              <CancelButton
                className={styles.clearButton}
                alt={commentLocale[language].cancelButtonAlt}
                onClick={handleUpdate}
                width={18}
                height={18}
                fill={vars.color.gray7}
              />
            </div>
          )}
          {status === 'edit' && isEditing && (
            <div className={styles.activeReplyWrapper}>
              <span className={styles.replyNickname}>{commentLocale[language].editing}</span>
              <CancelButton
                className={styles.clearButton}
                alt={commentLocale[language].cancelButtonAlt}
                onClick={handleCancelForm}
                width={18}
                height={18}
                fill={vars.color.gray7}
              />
            </div>
          )}
          <form className={styles.formContainer} onSubmit={handleSubmitForm}>
            <textarea
              rows={1}
              className={styles.formInput}
              value={comment}
              onChange={handleTextareaChange}
              readOnly={!userId}
              ref={textareaRef}
              placeholder={
                userId === null ? commentPlaceholder[language].requiredLogin : commentPlaceholder[language].comment
              }
              onKeyDown={handleKeyDown}
              onClick={handleClickInactiveForm}
            />
            {comment && (
              <button type="submit" disabled={isPending} className={styles.formButton}>
                <Airplane width={20} height={20} fill={vars.color.blue} />
              </button>
            )}
          </form>
        </div>
      </div>
    </>
  );
}

export default CommentForm;
