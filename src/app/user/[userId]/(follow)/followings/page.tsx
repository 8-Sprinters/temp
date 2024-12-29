'use client';
import { useQuery } from '@tanstack/react-query';
import { useParams, useRouter } from 'next/navigation';

import Header from '@/components/Header/Header';
import UserList from '../_components/UserList';

import getFollowingList from '@/app/_api/follow/getFollowingList';
import { FollowingListType } from '@/lib/types/followType';
import { QUERY_KEYS } from '@/lib/constants/queryKeys';

import * as styles from '../follow.css';
import { userLocale } from '@/app/user/locale';
import { useLanguage } from '@/store/useLanguage';

function FollowingPage() {
  const { language } = useLanguage();
  const router = useRouter();
  const param = useParams<{ userId: string }>();

  const handleBackButtonClick = () => {
    router.push(`/user/${param?.userId}/mylist`);
  };

  const { data: followingList } = useQuery<FollowingListType>({
    queryKey: [QUERY_KEYS.getFollowingList],
    queryFn: () => getFollowingList(Number(param?.userId)),
  });

  return (
    <div>
      <Header left={'back'} leftClick={handleBackButtonClick} title={userLocale[language].following} />
      {/* {followingList?.followings.length !== 0 && (
        <div
          className={styles.totalMessage}
        >{`${userLocale[language].total} ${followingList?.followings.length}${userLocale[language].people}`}</div>
      )} */}
      <UserList type="following" list={followingList?.followings || []} />
    </div>
  );
}

export default FollowingPage;
