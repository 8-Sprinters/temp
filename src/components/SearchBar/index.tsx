'use client';

import { ChangeEvent, useState, KeyboardEvent, MouseEvent } from 'react';
import { useRouter } from 'next/navigation';
import KeywordArea from './KeywordArea';

import * as styles from '@/app/search/_components/SearchBar.css';

function SearchBar() {
  const router = useRouter();
  const [keyword, setKeyword] = useState('');

  const handleSearchClick = (e: MouseEvent) => {
    router.push(`/search?keyword=${keyword}`);
  };

  const handleEnterKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      // keyword가 없는 경우, 초기 category값을 '전체' 로 설정
      router.push(`/search?keyword=${keyword}&category=entire`);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const handelCategoryClick = (e: MouseEvent<HTMLDivElement>) => {
    router.push(`/search?category=${e.currentTarget?.dataset?.value}`);
  };

  return (
    <div className={styles.searchWrapper}>
      <KeywordArea onClick={handleSearchClick} onKeyDown={handleEnterKeyDown} onInput={handleInputChange} />
    </div>
  );
}

export default SearchBar;

// import * as styles from './SearchBar.css';
// import SearchIcon from '/public/icons/ver3/search.svg';

// interface SearchBarProps {
//   handleCancel?: () => void;
// }

// function SearchBarComponent({ handleCancel }: SearchBarProps) {
//   return (
//     <div className={styles.wrapper}>
//       <div className={styles.inputWrapper}>
//         <SearchIcon />
//         <input placeholder="리스트 또는 리스터를 검색해 보세요" className={styles.input} />
//       </div>
//       <button className={styles.cancelButton} onClick={handleCancel}>
//         취소
//       </button>
//     </div>
//   );
// }

// export default SearchBarComponent;
