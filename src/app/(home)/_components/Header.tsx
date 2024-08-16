/**
 * 홈, 검색 아이콘, 검색창, 로그인/로그아웃 버튼(비회원), 벨/유저 아이콘(회원)
 */

import { useState } from 'react';

import SearchBarComponent from '@/components/SearchBar';

import * as styles from './Header.css';
import SearchIcon from '/public/icons/ver3/search.svg';
import BellIcon from '/public/icons/ver3/bell.svg';
import Avatar from '/public/icons/ver3/avatar.svg';

function Header() {
  const [isSearchBarOpened, setIsSearchBarOpened] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleAuthButtonClick = () => {
    setIsLoggedIn(true);
  };

  const handleInactivateSearchBar = () => {
    setIsSearchBarOpened(false);
  };

  const handleSearchIconClick = () => {
    setIsSearchBarOpened(true);
  };

  return (
    <header className={styles.headerWrapper}>
      {isSearchBarOpened && <SearchBarComponent handleCancel={handleInactivateSearchBar} />}
      {!isSearchBarOpened && (
        <div className={styles.entireWrapper}>
          <div className={styles.homeTitleContainer}>
            <h1 className={styles.homeTitle}>홈</h1>
            {!isLoggedIn && (
              <button className={styles.authButton} onClick={handleAuthButtonClick}>
                로그인 / 로그아웃
              </button>
            )}
          </div>
          <div className={styles.iconWrapper}>
            <button onClick={handleSearchIconClick}>
              <SearchIcon />
            </button>
            {isLoggedIn && (
              <div className={styles.iconWrapperForMember}>
                <button>
                  <BellIcon />
                </button>
                <button>
                  <Avatar />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
