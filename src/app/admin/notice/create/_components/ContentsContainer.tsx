import { FieldArrayWithId } from 'react-hook-form';

import * as styles from './Contents.css';

import { NOTICE_CONTENT } from '@/lib/constants/notice';
import { NoticeContentsType, NoticeCreateType } from '@/lib/types/noticeType';

import BodyContent from './BodyContent';
import SubTitleContent from './SubTitleContet';
import ButtonContent from './ButtonContent';
import ImageContent from './ImageContent';
import LineContent from './LintContent';
import NoteContent from './NoteContent';

interface FormAboutContentProps {
  type: NoticeContentsType;
  order: number;
}

const formAboutContent = ({ type, order }: FormAboutContentProps) => {
  switch (type) {
    case 'body':
      return <BodyContent order={order} />;
    case 'subtitle':
      return <SubTitleContent />;
    case 'button':
      return <ButtonContent />;
    case 'image':
      return <ImageContent />;
    case 'line':
      return <LineContent />;
    case 'note':
      return <NoteContent />;
    default:
      return null;
  }
};

interface ContainerProps {
  content: FieldArrayWithId<NoticeCreateType, 'contents', 'id'>;
  handleDeleteBlock: (order: number) => void;
  order: number;
}

export default function ContentsContainer({ content, handleDeleteBlock, order }: ContainerProps) {
  const { type } = content;

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h3 className={styles.title}>{NOTICE_CONTENT[type]}</h3>
        <button type="button" onClick={() => handleDeleteBlock(order)} className={styles.deleteButton}>
          삭제
        </button>
      </div>
      <div className={styles.content}>{formAboutContent({ type, order })}</div>
    </div>
  );
}
