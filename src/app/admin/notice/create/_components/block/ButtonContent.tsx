import { useFormContext } from 'react-hook-form';

import * as styles from './index.css';

interface ButtonContentProps {
  order: number;
}

// TODO 버튼 링크 유효성 검사 추가
export default function ButtonContent({ order }: ButtonContentProps) {
  const { register } = useFormContext();

  return (
    <>
      <div>
        <span className={styles.buttonTitle}>버튼명</span>
        <input
          className={styles.input}
          placeholder="버튼명을 입력해주세요."
          {...register(`contents.${order}.buttonName`)}
        />
      </div>
      <div>
        <span className={styles.buttonTitle}>링크</span>
        <input
          className={styles.input}
          placeholder="버튼에 연결할 링크를 입력해주세요."
          {...register(`contents.${order}.buttonLink`)}
        />
        <p></p>
      </div>
    </>
  );
}
