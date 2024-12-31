'use client';
import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';

import { QUERY_KEYS } from '@/lib/constants/queryKeys';
import getRecommendedUsers from '@/app/_api/home/getRecommendedUsers';
import { useUser } from '@/store/useUser';
import FollowButton from './FollowButton';
import { UserProfileType } from '@/lib/types/userProfileType';

import fallbackProfile from '/public/images/fallback_profileImage.webp';
import * as styles from './RecommendedUsers.css';
import { UserListsSkeleton } from './Skeleton';
import { commonLocale } from '@/components/locale';
import { useLanguage } from '@/store/useLanguage';

function UsersRecommendation() {
  //zustand로 관리하는 user정보 불러오기
  const { user: userMe } = useUser();
  const myId = userMe.id;

  const wrapperRef = useRef<HTMLUListElement>(null);
  const { data: usersList, isFetching } = useQuery<UserProfileType[]>({
    queryKey: [QUERY_KEYS.getRecommendedUsers],
    queryFn: () => getRecommendedUsers(),
    retry: 1,
  });

  const handleScrollToRight = () => {
    if (wrapperRef.current) {
      wrapperRef.current.scrollTo({
        left: wrapperRef.current.scrollLeft + 166,
        behavior: 'smooth',
      });
    }
  };

  // if (!userMe) {
  //   return null;
  // }

  return (
    <section>
      {isFetching ? (
        <UserListsSkeleton />
      ) : (
        <>
          {usersList && usersList?.length !== 0 && (
            <div className={styles.wrapper}>
              <div className={styles.titleWrapper}>
                <h2 className={styles.sectionTitle}>추천 리스터</h2>
              </div>
              <ul className={styles.recommendUsersListWrapper} ref={wrapperRef}>
                {usersList?.map((item: UserProfileType) => {
                  return (
                    <li key={item.id}>
                      <UserRecommendListItem
                        data={item}
                        handleScrollToRight={handleScrollToRight}
                        userId={userMe?.id as number}
                      />
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </>
      )}
    </section>
  );
}

export default UsersRecommendation;

interface UserRecommendListItemProps {
  data: UserProfileType;
  handleScrollToRight: () => void;
  userId: number;
}

function UserRecommendListItem({ data, handleScrollToRight, userId }: UserRecommendListItemProps) {
  const { language } = useLanguage();
  const [isFollowing, setIsFollowing] = useState(false);

  //boolean 값을 바꾸기 위한 함수
  const handleFollowingState = () => {
    setIsFollowing((prev) => !prev);
  };

  const handleFollowButtonClick = () => {
    if (userId) {
      handleFollowingState();
      handleScrollToRight();
    }
  };

  return (
    <>
      <div className={styles.recommendUserWrapper}>
        <Link href={`/user/${data.id}/mylist`}>
          <div className={styles.imageWrapper}>
            {data?.profileImageUrl ? (
              <Image
                src={data?.profileImageUrl}
                alt={commonLocale[language].recommendUserProfileImage}
                fill
                sizes="100vw 100vh"
                className={styles.recommendUserProfileImage}
                style={{
                  objectFit: 'cover',
                }}
              />
            ) : (
              <Image
                src={fallbackProfile}
                alt={commonLocale[language].recommendUserProfileImage}
                fill
                sizes="100vw 100vh"
                className={styles.recommendUserProfileImage}
                style={{
                  objectFit: 'cover',
                }}
              />
            )}
          </div>
        </Link>
        <h6 className={styles.recommendUserNickname}>{data.nickname}</h6>
        <FollowButton isFollowing={isFollowing} onClick={handleFollowButtonClick} userId={userId} targetId={data.id} />
      </div>
    </>
  );
}
