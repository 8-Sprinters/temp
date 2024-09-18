import { useState } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

import CloseButton from '/public/icons/close_button.svg';
import * as styles from './LabelInput.css';

interface LabelInputProps {
  name: string;
  placeholder: string;
  rules: {
    maxNumRule?: { num: number; errorMessage: string };
    maxLengthRule?: { length: number; errorMessage: string };
    uniqueRule?: { errorMessage: string };
  };
}

/**
 * LabelInput 컴포넌트:
 * 사용자의 엔터 입력을 통해 직접 라벨을 만들고
 * 만든 라벨들을 확인하고
 * 삭제할 수 있는 컴포넌트
 *
 * @param name 라벨의 리액트훅폼 프로퍼티명
 * @param placeholder 라벨입력 input의 placeholder
 * @param rules 라벨 개수, 길이, 고유성 규칙과 그 에러메시지
 */
function LabelInput({ name, placeholder, rules }: LabelInputProps) {
  const { setValue, setError, formState, control, clearErrors } = useFormContext();
  const { errors } = formState;
  const labels = useWatch({ control, name: name });

  const [labelInput, setLabelInput] = useState('');

  const handleEnterKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.nativeEvent.isComposing) {
      return;
    }
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (rules.maxLengthRule && labelInput.length >= rules.maxLengthRule.length) {
        setError(name, { message: rules.maxLengthRule.errorMessage });
        return;
      }
      if (labelInput.trim() === '') {
        return;
      }
      if (rules.uniqueRule && labels.includes(labelInput)) {
        setError(name, { message: rules.uniqueRule.errorMessage });

        return;
      }
      if (rules.maxNumRule && labels.length >= rules.maxNumRule.num) {
        setError(name, { message: rules.maxNumRule.errorMessage });

        return;
      }
      setValue(name, [...labels, labelInput]);
      setLabelInput('');
    }
  };

  return (
    <div>
      {/* 라벨 입력받는 input box */}
      <input
        className={styles.inputBox}
        type="text"
        value={labelInput}
        placeholder={placeholder}
        onKeyDown={handleEnterKeyDown}
        onChange={(e) => {
          clearErrors(name);
          setLabelInput(e.target.value);
        }}
      />

      {/* 에러메시지 */}
      {errors.labels && <div className={styles.error}>{errors.labels.message?.toString()}</div>}

      {/* 선택된 라벨들 표시 */}
      <div className={styles.labels}>
        {labels.map((label: string) => (
          <div key={label} className={styles.label}>
            {label}
            <CloseButton
              width={'10'}
              height={'10'}
              fill={'#8E8E93'}
              className={styles.deleteButton}
              onClick={() => {
                setValue(
                  name,
                  labels.filter((l: string) => l !== label)
                );
                clearErrors(name);
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default LabelInput;
