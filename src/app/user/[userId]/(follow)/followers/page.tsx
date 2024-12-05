'use client';
import { useParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';

import Header from '../_components/Header';
import UserList from '../_components/UserList';

import getFollowerList from '@/app/_api/follow/getFollowerList';
import { FollowerListType } from '@/lib/types/followType';
import { QUERY_KEYS } from '@/lib/constants/queryKeys';

import * as styles from '../follow.css';
import { userLocale } from '@/app/user/locale';
import { useLanguage } from '@/store/useLanguage';

function FollowersPage() {
  const { language } = useLanguage();
  const param = useParams<{ userId: string }>();

  const { data: followerList } = useQuery<FollowerListType>({
    queryKey: [QUERY_KEYS.getFollowerList, param?.userId],
    queryFn: () => getFollowerList(Number(param?.userId)),
  });

  return (
    <div>
      <Header title={userLocale[language].follower} />
      {followerList?.totalCount !== 0 && (
        <div
          className={styles.totalMessage}
        >{`${userLocale[language].total} ${followerList?.totalCount}${userLocale[language].people}`}</div>
      )}
      <UserList type="follower" list={followerList?.followers || []} />
    </div>
  );
}

export default FollowersPage;
