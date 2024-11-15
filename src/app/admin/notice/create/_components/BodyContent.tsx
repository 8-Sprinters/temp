import { useCallback, useState } from 'react';
import MDEditor from '@uiw/react-md-editor';
import { useFormContext } from 'react-hook-form';

import * as styles from './Contents.css';

import { NoticeContentType } from '@/lib/types/noticeType';

interface BodyContentProps {
  order: number;
}

// TODO security
export default function BodyContent({ order }: BodyContentProps) {
  const { setValue, getValues } = useFormContext();
  const [text, setText] = useState('');

  const handleChange = useCallback((value?: string) => {
    setText(value as string);
  }, []);

  const updateContents = (contents: NoticeContentType[], newData: Partial<NoticeContentType>) => {
    // order에 해당하는 콘텐츠가 있는지 확인
    const isOrderPresent = contents.some((item) => item.order === order);

    // order가 있으면 교체, 없으면 배열에 추가
    return isOrderPresent
      ? contents.map((item) => {
          return item.order === order ? newData : item;
        })
      : [...contents, newData];
  };

  const addContentsBody = () => {
    const contents: NoticeContentType[] = getValues('contents');

    // 새로운 데이터 객체 생성
    const newData = {
      order,
      type: 'body',
      description: text,
    };

    if (contents.length === 0) {
      setValue('contents', [newData]);
      return;
    }

    setValue('contents', updateContents(contents, newData));
  };

  return (
    <>
      <MDEditor
        value={text}
        onChange={handleChange}
        textareaProps={{
          placeholder: 'Please enter Markdown text',
        }}
        height={200}
      />
      <button onClick={addContentsBody} type="button" className={styles.contentButton}>
        등록
      </button>
    </>
  );
}
