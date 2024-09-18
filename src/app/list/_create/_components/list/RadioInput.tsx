import { useEffect, useState } from 'react';
import * as styles from './RadioInput.css';
import { useLanguage } from '@/store/useLanguage';
import { listLocale } from '@/app/list/create/locale';

interface RadioInputProps {
  messages: {
    trueMessage: string;
    falseMessage: string;
  };
  value: boolean;
  onClick: (value: boolean) => void;
}

/**
 * RadioInput 컴포넌트:
 * 두 개의 radio input 중 하나를 선택할 수 있는 기능을 제공
 *
 * @param props.messages - radio input을 선택했을때 아래 표시될 메시지들
 * @param props.onClick - radio input을 클릭했을때 실행시킬 함수
 */

function RadioInput({ messages, value, onClick }: RadioInputProps) {
  const [check, setCheck] = useState<boolean>(value);
  const { language } = useLanguage();

  useEffect(() => {
    setCheck(value);
  }, [value]);

  return (
    <>
      <div className={styles.container}>
        <label className={styles.label}>
          <input
            type="radio"
            className={styles.radioInput}
            checked={check}
            readOnly
            onClick={() => {
              onClick(true);
              setCheck(true);
            }}
          />
          {listLocale[language].public}
        </label>

        <label className={styles.label}>
          <input
            type="radio"
            className={styles.radioInput}
            checked={!check}
            readOnly
            onClick={() => {
              onClick(false);
              setCheck(false);
            }}
          />
          {listLocale[language].private}
        </label>
      </div>
      <div className={styles.message}>{check ? messages.trueMessage : messages.falseMessage}</div>
    </>
  );
}

export default RadioInput;
