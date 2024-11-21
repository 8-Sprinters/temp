import { FieldArrayWithId } from 'react-hook-form';

import * as styles from './BlockContainer.css';

import { NOTICE_CONTENT } from '@/lib/constants/notice';
import { NoticeContentsType, NoticeCreateType } from '@/lib/types/noticeType';
import { BodyContent, ButtonContent, ImageContent, LineContent, NoteContent, SubTitleContent } from './block/index';

interface FormAboutContentProps {
  type: NoticeContentsType;
  order: number;
}

const formAboutContent = ({ type, order }: FormAboutContentProps) => {
  switch (type) {
    case 'body':
      return <BodyContent order={order} />;
    case 'subtitle':
      return <SubTitleContent order={order} />;
    case 'button':
      return <ButtonContent order={order} />;
    case 'image':
      return <ImageContent order={order} />;
    case 'line':
      return <LineContent />;
    case 'note':
      return <NoteContent order={order} />;
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
