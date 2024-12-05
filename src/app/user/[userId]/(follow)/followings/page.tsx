'use client';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';

import Header from '../_components/Header';
import UserList from '../_components/UserList';

import getFollowingList from '@/app/_api/follow/getFollowingList';
import { FollowingListType } from '@/lib/types/followType';
import { QUERY_KEYS } from '@/lib/constants/queryKeys';

import * as styles from '../follow.css';
import { userLocale } from '@/app/user/locale';
import { useLanguage } from '@/store/useLanguage';

function FollowingPage() {
  const { language } = useLanguage();
  const param = useParams<{ userId: string }>();

  const { data: followingList } = useQuery<FollowingListType>({
    queryKey: [QUERY_KEYS.getFollowingList],
    queryFn: () => getFollowingList(Number(param?.userId)),
  });

  return (
    <div>
      <Header title={userLocale[language].following} />
      {followingList?.followings.length !== 0 && (
        <div
          className={styles.totalMessage}
        >{`${userLocale[language].total} ${followingList?.followings.length}${userLocale[language].people}`}</div>
      )}
      <UserList type="following" list={followingList?.followings || []} />
    </div>
  );
}

export default FollowingPage;
