'use client';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import createFollowUser from '@/app/_api/follow/createFollowUser';
import deleteFollowUser from '@/app/_api/follow/deleteFollowUser';
import getUserOne from '@/app/_api/user/getUserOne';

import { QUERY_KEYS } from '@/lib/constants/queryKeys';
import { UserType } from '@/lib/types/userProfileType';
import toasting from '@/lib/utils/toasting';
import toastMessage, { MAX_FOLLOWING } from '@/lib/constants/toastMessage';
import * as styles from './RecommendedUsers.css';

import useBooleanOutput from '@/hooks/useBooleanOutput';
import Modal from '@/components/Modal/Modal';
import LoginModal from '@/components/login/LoginModal';
import { useLanguage } from '@/store/useLanguage';
import { commonLocale } from '@/components/locale';

interface FollowButtonProps {
  isFollowing: boolean;
  onClick: () => void;
  userId: number;
  targetId: number;
}

function FollowButton({ isFollowing, onClick, userId, targetId }: FollowButtonProps) {
  const { language } = useLanguage();
  const queryClient = useQueryClient();
  const { isOn, handleSetOff, handleSetOn } = useBooleanOutput();

  const { data: userMeData } = useQuery<UserType>({
    queryKey: [QUERY_KEYS.userOne, userId],
    queryFn: () => getUserOne(userId),
    enabled: !!userId,
    retry: 1,
  });

  const followUserMutation = useMutation({
    mutationKey: [isFollowing ? QUERY_KEYS.deleteFollow : QUERY_KEYS.follow, targetId],
    mutationFn: isFollowing ? () => deleteFollowUser(targetId) : () => createFollowUser(targetId),
    onMutate: async () => {
      await queryClient.cancelQueries({ queryKey: [QUERY_KEYS.userOne, userId] });
      const previousFollower: UserType | undefined = queryClient.getQueryData([QUERY_KEYS.userOne, userId]);

      if (!previousFollower) return;

      const nextData = {
        ...previousFollower,
        isFollowed: !isFollowing,
        followerCount: isFollowing ? previousFollower.followerCount - 1 : previousFollower.followerCount + 1,
      };

      queryClient.setQueryData([QUERY_KEYS.userOne, userId], nextData);

      return { previousFollower };
    },
    onError: (error: AxiosError, userId: number, context) => {
      if (error.response?.status === 401) {
        handleSetOn();
      }
      queryClient.setQueryData([QUERY_KEYS.userOne, userId], context?.previousFollower);
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.userOne, userId],
      });
    },
  });

  const handleFollowUser = (isFollowing: boolean) => () => {
    if (!isFollowing) {
      if (userMeData && userMeData?.followingCount >= MAX_FOLLOWING) {
        toasting({ type: 'warning', txt: toastMessage[language].limitFollow });
        return;
      }
    }
    followUserMutation.mutate(userId);
    onClick();
  };

  return (
    <>
      <button
        className={`${styles.followButtonDefault} ${isFollowing === true ? styles.followButtonFollowing : ''}`}
        onClick={handleFollowUser(isFollowing)}
      >
        <span>{isFollowing ? commonLocale[language].following : commonLocale[language].follow}</span>
      </button>
      {isOn && (
        <Modal handleModalClose={handleSetOff} size="large">
          <LoginModal id="exploreFollowLoginBtn" />
        </Modal>
      )}
    </>
  );
}

export default FollowButton;
