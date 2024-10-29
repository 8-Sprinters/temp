'use client';

import { useState, useEffect } from 'react';

import FeedLists from '@/app/(home)/_components/FeedLists';
import NoDataComponent from '@/components/NoData/NoDataComponent';
import NoDataButton from '@/components/NoData/NoDataButton';
import Modal from '@/components/Modal/Modal';
import LoginModal from '@/components/login/LoginModal';

import useBooleanOutput from '@/hooks/useBooleanOutput';
import { getCookie } from '@/lib/utils/cookie';

function FollowingFeed() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { isOn, handleSetOn, handleSetOff } = useBooleanOutput();

  const handleClickNoDataButton = () => {
    handleSetOn();
  };

  useEffect(() => {
    const accessToken = getCookie('accessToken');
    setIsLoggedIn(accessToken !== null && accessToken !== undefined);
  }, []);

  return (
    <>
      {!isLoggedIn ? (
        <NoDataComponent
          message="로그인하여 좋아하는 리스터를 팔로우하세요 🩵"
          button={<NoDataButton onClick={handleClickNoDataButton}>로그인 하러가기</NoDataButton>}
        />
      ) : (
        <FeedLists tab="following" />
      )}
      {isOn && (
        <Modal handleModalClose={handleSetOff} size="large">
          <LoginModal id="bottomNavLoginBtn" />
        </Modal>
      )}
    </>
  );
}

export default FollowingFeed;
