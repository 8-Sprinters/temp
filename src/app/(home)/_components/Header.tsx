/**
 * 홈, 검색 아이콘, 검색창, 로그인/로그아웃 버튼(비회원), 벨/유저 아이콘(회원)
 */

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useQuery } from '@tanstack/react-query';

import SearchBarArea from './SearchBarArea';
import Modal from '@/components/Modal/Modal';
import LoginModal from '@/components/login/LoginModal';

import useBooleanOutput from '@/hooks/useBooleanOutput';
import { getCookie } from '@/lib/utils/cookie';
import { UserType } from '@/lib/types/userProfileType';
import getUserOne from '@/app/_api/user/getUserOne';
import { useUser } from '@/store/useUser';
import { QUERY_KEYS } from '@/lib/constants/queryKeys';

import * as styles from './Header.css';
import SearchIcon from '/public/icons/ver3/search.svg';
import BellIcon from '/public/icons/ver3/bell.svg';
import Avatar from '/public/icons/ver3/Avatar.svg';

function Header() {
  const {
    isOn: isSearchBarOpened,
    handleSetOn: handleSearchBarOpened,
    handleSetOff: handleSearchBarClosed,
  } = useBooleanOutput();
  const { isOn, handleSetOn, handleSetOff } = useBooleanOutput();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 상태를 관리하는 useState 추가

  const { user } = useUser();

  const { data: userData } = useQuery<UserType>({
    queryKey: [QUERY_KEYS.userOne, user.id],
    queryFn: () => getUserOne(user.id as number),
    enabled: !!user.id,
  });

  const handleAuthButtonClick = () => {
    handleSetOn();
  };

  const handleInactivateSearchBar = () => {
    handleSearchBarClosed();
  };

  const handleSearchIconClick = () => {
    handleSearchBarOpened();
  };

  useEffect(() => {
    const accessToken = getCookie('accessToken');
    setIsLoggedIn(accessToken !== null && accessToken !== undefined);
  }, []);

  return (
    <header className={styles.headerWrapper}>
      {isSearchBarOpened && <SearchBarArea handleCancel={handleInactivateSearchBar} />}
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
                <Link href={'notification'}>
                  <BellIcon />
                </Link>
                <Link href={'account'}>
                  {userData && userData.profileImageUrl ? (
                    <div className={styles.profileImageWrapper}>
                      <Image
                        src={userData.profileImageUrl}
                        className={styles.profileImage}
                        alt="프로필 이미지"
                        fill
                        sizes="100vw 100vh"
                        style={{
                          objectFit: 'cover',
                        }}
                      />
                    </div>
                  ) : (
                    <Avatar />
                  )}
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
      {isOn && (
        <Modal handleModalClose={handleSetOff} size="large">
          <LoginModal id="bottomNavLoginBtn" />
        </Modal>
      )}
    </header>
  );
}

export default Header;
