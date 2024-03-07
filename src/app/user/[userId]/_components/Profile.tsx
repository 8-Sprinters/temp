'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import { AxiosError } from 'axios';
import { Skeleton } from '@mui/material';

import * as styles from './Profile.css';
import * as modalStyles from '@/components/Modal/ModalButton.css';

import FollowButton from './FollowButton';
import SettingIcon from '/public/icons/setting.svg';

import useMoveToPage from '@/hooks/useMoveToPage';
import getUserOne from '@/app/_api/user/getUserOne';

import { QUERY_KEYS } from '@/lib/constants/queryKeys';
import { UserType } from '@/lib/types/userProfileType';
import numberFormatter from '@/lib/utils/numberFormatter';

import Modal from '@/components/Modal/Modal';
import { userLocale } from '@/app/user/locale';
import { useLanguage } from '@/store/useLanguage';

export default function Profile({ userId }: { userId: number }) {
  const { language } = useLanguage();
  const [hasError, setHasError] = useState(false);
  const { onClickMoveToPage } = useMoveToPage();

  const fallbackProfileImageSrc = '/images/fallback_profileImage.webp';
  const fallbackBackgroundImageSrc = '/images/fallback_backgroundImage.webp';

  const { data, error, isError, isLoading } = useQuery<UserType>({
    queryKey: [QUERY_KEYS.userOne, userId],
    queryFn: () => getUserOne(userId),
    retry: 1,
  });

  // 탈퇴한 회원이거나(400), 잘못된 id거나(400), 없는 회원(404)인 경우 에러처리
  if (isError && error instanceof AxiosError) {
    return (
      <Modal size="basic" handleModalClose={onClickMoveToPage('/')}>
        <Modal.Title>{error.response?.data.detail}</Modal.Title>
        <div className={modalStyles.buttonContainer}>
          <button type="button" className={modalStyles.button.primary} onClick={onClickMoveToPage('/')}>
            {userLocale[language].confirm}
          </button>
        </div>
      </Modal>
    );
  }

  const handleImageError = () => {
    // TODO onError일때 적용할 이미지 공통 로직 만들기
    setHasError(true);
  };

  return (
    <div
      className={styles.container}
      style={assignInlineVars({
        [styles.imageUrl]: `url(${data ? data?.backgroundImageUrl : fallbackBackgroundImageSrc})`,
      })}
    >
      <div className={styles.header}>
        {data?.isOwner && (
          <SettingIcon
            alt={userLocale[language].goToMypage}
            className={styles.icon}
            onClick={onClickMoveToPage('/account')}
          />
        )}
      </div>
      <div className={styles.profileContainer}>
        {isLoading ? (
          <div className={styles.skeletonProfileContainer}>
            <Skeleton variant="circular" width={50} height={50} />
            <div className={styles.skeletonTextContainer}>
              <Skeleton variant="text" width={200} sx={{ fontSize: '2rem' }} />
              <Skeleton variant="text" width={150} sx={{ fontSize: '2rem' }} />
            </div>
          </div>
        ) : (
          <>
            <div className={styles.profile}>
              <div className={styles.profileImageWrapper}>
                {data?.profileImageUrl ? (
                  <Image
                    className={styles.profileImage}
                    src={`${hasError ? fallbackProfileImageSrc : data?.profileImageUrl}`}
                    alt={userLocale[language].profileImageAlt}
                    width={50}
                    height={50}
                    priority
                    onError={handleImageError}
                    style={{ objectFit: 'cover' }}
                  />
                ) : (
                  <div className={styles.profileImage}></div>
                )}
              </div>
              <div className={styles.info}>
                <div className={styles.user}>
                  <span className={styles.nickName}>{data?.nickname}</span>
                  {!data?.isOwner && <FollowButton userId={userId} isFollowed={!!data?.isFollowed} />}
                </div>
                <div className={styles.follow}>
                  <div className={styles.text} onClick={onClickMoveToPage(`/user/${userId}/followings`)}>
                    <span className={styles.count}>
                      {data?.followingCount !== undefined && numberFormatter(data.followingCount, 'ko')}
                    </span>
                    <span className={styles.captionText}>{userLocale[language].following}</span>
                  </div>
                  <div className={styles.text} onClick={onClickMoveToPage(`/user/${userId}/followers`)}>
                    <span className={styles.count}>
                      {data?.followerCount !== undefined && numberFormatter(data.followerCount, 'ko')}
                    </span>
                    <span className={styles.captionText}>{userLocale[language].follow}</span>
                  </div>
                </div>
              </div>
            </div>
            <p className={styles.description}>{data?.description ? `" ${data.description} "` : ''}</p>
          </>
        )}
      </div>
    </div>
  );
}
