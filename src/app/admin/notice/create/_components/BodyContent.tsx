import { useCallback, useState } from 'react';
import MDEditor from '@uiw/react-md-editor';

// TODO security
export default function BodyContent() {
  const [value, setValue] = useState('');

  const handleChange = useCallback((value?: string) => {
    setValue(value as string);
  }, []);

  return (
    <div>
      <MDEditor
        value={value}
        onChange={handleChange}
        textareaProps={{
          placeholder: 'Please enter Markdown text',
        }}
        height={200}
      />
    </div>
  );
}
