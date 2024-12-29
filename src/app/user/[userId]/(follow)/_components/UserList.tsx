'use client';
import { ReactNode } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import deleteFollower from '@/app/_api/follow/deleteFollower';
import { userLocale } from '@/app/user/locale';
import { useUser } from '@/store/useUser';
import { useLanguage } from '@/store/useLanguage';
import { UserProfileType } from '@/lib/types/userProfileType';
import { QUERY_KEYS } from '@/lib/constants/queryKeys';
import useBooleanOutput from '@/hooks/useBooleanOutput';
import DeleteModal from '@/components/DeleteModal/DeleteModal';
import UserProfileImage from '@/components/UserProfileImage/UserProfileImage';
import NoDataComponent from '@/components/NoData/NoDataComponent';

import * as styles from './UserList.css';

function DeleteFollowerButton({ userId }: { userId: number }) {
  const { language } = useLanguage();
  const { user } = useUser();
  const queryClient = useQueryClient();
  const { handleSetOff, handleSetOn, isOn } = useBooleanOutput();

  const deleteUser = useMutation({
    mutationKey: [QUERY_KEYS.deleteFollower, userId],
    mutationFn: () => deleteFollower(userId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.getFollowerList, String(user.id)],
      });
    },
  });

  return (
    <>
      <button className={styles.button} onClick={handleSetOn}>
        {userLocale[language].delete}
      </button>
      {isOn && (
        <DeleteModal handleClose={handleSetOff} handleCancel={handleSetOff} handleDelete={() => deleteUser.mutate()} />
      )}
    </>
  );
}

interface UserProps {
  user: UserProfileType;
  button?: ReactNode;
  isOwner?: boolean;
}

function UserItem({ user, button, isOwner }: UserProps) {
  const router = useRouter();

  return (
    <div className={styles.item}>
      <div
        className={styles.profile}
        onClick={() => {
          router.push(`/user/${user.id}/mylist`);
        }}
      >
        <UserProfileImage src={user.profileImageUrl} size={40} />
        <span className={styles.nickname}>{user.nickname}</span>
      </div>
      {isOwner ? button : null}
    </div>
  );
}

interface UserListProps {
  type: 'follower' | 'following';
  list: UserProfileType[];
}

function UserList({ type, list }: UserListProps) {
  const { language } = useLanguage();
  const { user: me } = useUser();
  const params = useParams<{ userId: string }>();
  const isOwner = Number(params?.userId) === me.id;

  return (
    <div className={styles.container}>
      {list.length === 0 ? (
        <NoDataComponent message={userLocale[language].empty[type]} />
      ) : (
        <>
          {type === 'following' && list?.map((user: UserProfileType) => <UserItem key={user.id} user={user} />)}
          {type === 'follower' &&
            list?.map((user: UserProfileType) => (
              <UserItem
                key={user.id}
                user={user}
                button={<DeleteFollowerButton userId={user.id} />}
                isOwner={isOwner}
              />
            ))}
        </>
      )}
    </div>
  );
}

export default UserList;
