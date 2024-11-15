import { NOTICE_CONTENT } from '@/lib/constants/notice';
import { NoticeContentsType } from '@/lib/types/noticeType';

import * as styles from './Contents.css';

import BodyContent from './BodyContent';
import SubTitleContent from './SubTitleContet';
import ButtonContent from './ButtonContent';
import ImageContent from './ImageContent';
import LineContent from './LintContent';
import NoteContent from './NoteContent';

interface ContainerProps {
  content: NoticeContentsType;
  order: number;
}

interface FormAboutContentProps {
  content: NoticeContentsType;
  order: number;
}

const formAboutContent = ({ content, order }: FormAboutContentProps) => {
  switch (content) {
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

export default function ContentsContainer({ content, order }: ContainerProps) {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{NOTICE_CONTENT[content]}</h3>
      <div className={styles.content}>{formAboutContent({ content, order })}</div>
    </div>
  );
}
