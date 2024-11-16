import { useCallback, useState } from 'react';
import MDEditor from '@uiw/react-md-editor';
import { useFormContext } from 'react-hook-form';

import * as styles from './Contents.css';

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
    </>
  );
}
