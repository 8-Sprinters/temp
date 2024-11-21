import { useCallback, useState } from 'react';
import MDEditor from '@uiw/react-md-editor';
import { useFormContext } from 'react-hook-form';

import * as styles from './index.css';

interface BodyContentProps {
  order: number;
}

// TODO security
export default function BodyContent({ order }: BodyContentProps) {
  const { setValue } = useFormContext();
  const [text, setText] = useState('');

  const handleChange = useCallback((value?: string) => {
    setText(value as string);
  }, []);

  const addContentsBody = () => {
    setValue(`contents.${order}.description`, text);
    alert('본문을 저장했습니다.');
  };

  return (
    <>
      <MDEditor
        value={text}
        onChange={handleChange}
        textareaProps={{ placeholder: 'Please enter Markdown text' }}
        height={200}
      />
      <button onClick={addContentsBody} type="button" className={styles.contentButton}>
        등록
      </button>
      <span className={styles.comment}>* 본문을 작성하는 경우 반드시 등록 버튼을 눌러 내용을 저장해주세요.</span>
    </>
  );
}
