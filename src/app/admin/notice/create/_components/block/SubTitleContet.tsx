import { useFormContext } from 'react-hook-form';

import * as styles from './index.css';

interface SubTitleContentProps {
  order: number;
}

export default function SubTitleContent({ order }: SubTitleContentProps) {
  const { register } = useFormContext();

  return (
    <div>
      <input
        className={styles.input}
        placeholder="소제목에 들어갈 내용을 입력해주세요."
        {...register(`contents.${order}.description`)}
      />
    </div>
  );
}
