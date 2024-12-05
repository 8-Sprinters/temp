import { useFormContext } from 'react-hook-form';

import * as styles from './index.css';

interface SubTitleContentProps {
  order: number;
}

export default function NoteContent({ order }: SubTitleContentProps) {
  const { register } = useFormContext();

  return (
    <div>
      <textarea
        className={styles.textArea}
        placeholder={`유의사항에 들어갈 내용을 입력해주세요.\n줄바꿈이 적용됩니다.`}
        {...register(`contents.${order}.description`)}
      />
    </div>
  );
}
