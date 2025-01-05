import { ChangeEventHandler, KeyboardEventHandler, MouseEventHandler, useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'next/navigation';

import * as styles from './KeywordArea.css';

import SearchIcon from '/public/icons/search.svg';
import { useLanguage } from '@/store/useLanguage';
import { searchPlaceholer } from '@/lib/constants/placeholder';

interface searchKeywordAreaProps {
  onKeyDown?: KeyboardEventHandler;
  onInput: ChangeEventHandler<HTMLInputElement>;
  onClick?: MouseEventHandler;
}

function KeywordArea({ onKeyDown, onInput, onClick }: searchKeywordAreaProps) {
  const { language } = useLanguage();
  const searchParams = useSearchParams();
  const defaultKeyword: string = searchParams?.get('keyword') ?? '';

  const inputRef = useRef<HTMLInputElement>(null);
  const [inputHasValue, setInputHasValue] = useState<boolean>(false);

  useEffect(() => {
    setInputHasValue(!!inputRef.current?.value);
  }, [inputRef.current?.value]);

  return (
    <div className={styles.keywordWrapper}>
      <input
        ref={inputRef}
        className={`${inputHasValue ? styles.typedKeywordInput : styles.basicKeywordInput}`}
        type="text"
        placeholder={searchPlaceholer[language].keyword}
        onKeyDown={onKeyDown}
        onInput={onInput}
        defaultValue={defaultKeyword}
      />
      <SearchIcon onClick={onClick} className={`${inputHasValue ? styles.typedSearchIcon : styles.basicSearchIcon}`} />
    </div>
  );
}

export default KeywordArea;
