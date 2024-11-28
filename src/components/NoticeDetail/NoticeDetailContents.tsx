import Link from 'next/link';
import Image from 'next/image';
import MDEditor from '@uiw/react-md-editor';

import * as styles from './NoticeDetailContents.css';

import { NoticeContentType } from '@/lib/types/noticeType';

function BodyContent({ description }: Pick<NoticeContentType, 'description'>) {
  return <MDEditor.Markdown source={description} />;
}

function SubTitleContent({ description }: Pick<NoticeContentType, 'description'>) {
  return <h4 className={styles.subtitle}>{description}</h4>;
}

function ImageContent({ imageUrl }: Pick<NoticeContentType, 'imageUrl'>) {
  return (
    <div className={styles.imgaeBox}>
      <Image src={imageUrl as string} fill className={styles.image} alt="이미지" />
    </div>
  );
}

function ButtonContent({ buttonLink, buttonName }: Pick<NoticeContentType, 'buttonName' | 'buttonLink'>) {
  return (
    <Link href={buttonLink as string} target="_blank">
      <button className={styles.button}>{buttonName}</button>
    </Link>
  );
}

function LineContent() {
  return <div className={styles.line}></div>;
}

function NoteContent({ description }: Pick<NoticeContentType, 'description'>) {
  return <textarea value={description} readOnly className={styles.notice} />;
}

interface NoticeDetailContentsProps {
  contents: NoticeContentType;
}

function NoticeDetailContents({ contents }: NoticeDetailContentsProps) {
  const { type, description, buttonLink, buttonName, imageUrl } = contents;

  return (
    <>
      {type === 'subtitle' && <SubTitleContent description={description} />}
      {type === 'body' && <BodyContent description={description} />}
      {type === 'image' && <ImageContent imageUrl={imageUrl} />}
      {type === 'button' && <ButtonContent buttonLink={buttonLink} buttonName={buttonName} />}
      {type === 'line' && <LineContent />}
      {type === 'note' && <NoteContent description={description} />}
    </>
  );
}

export default NoticeDetailContents;
