'use client';

/**
 TODO
 - [ ] api 연동
 - [ ] 무한스크롤 적용
 - [ ] 피드페이지 스켈레톤 ui 적용
 */

import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';
import { MasonryGrid } from '@egjs/react-grid';

import * as styles from './Content.css';

// import { ListType, UserType } from '../mockData/mockDataTypes'; // 삭제 예정
// import { LISTS_ME } from '../mockData/lists'; // 삭제 예정

import Card from './Card';
import Categories from './Categories';

import { getUserOne } from '@/app/_api/user/getUserOne';
import { QUERY_KEYS } from '@/lib/constants/queryKeys';
import { UserType } from '@/lib/types/userProfileType';
import { getAllList } from '@/app/_api/list/getAllList';
import { AllListType, ListType } from '@/lib/types/listType';

// 임시 유저 아이디(소현), 나중에 로그인 기능 완료 후 전역 상태에서 id 받아오는 로직 추가
const TEST_USER_ID = 4;

export default function Content({ type }: { type: string }) {
  const { data: userData } = useQuery<UserType>({
    queryKey: [QUERY_KEYS.userOne],
    queryFn: () => getUserOne(TEST_USER_ID),
  });

  const { data: listData } = useQuery<AllListType>({
    queryKey: [QUERY_KEYS.getAllList],
    queryFn: () => getAllList(TEST_USER_ID),
  });

  console.log(listData);

  const handleFetchListsOnCategory = (kind: string) => {
    // console.log(type, kind); // 삭제 예정
    // 2. userId, type, category로 피드 정보 가져오는 api 요청
  };

  return (
    <div className={styles.container}>
      <div className={styles.options}>
        <Link href={`/${userData?.nickname}/mylist`} className={styles.link}>
          <button className={`${styles.leftButton} ${type === 'my' ? styles.variant : ''}`}>마이 리스트</button>
        </Link>
        <Link href={`/${userData?.nickname}/collabolist`} className={styles.link}>
          <button className={`${styles.rightButton} ${type === 'collabo' ? styles.variant : ''}`}>콜라보 리스트</button>
        </Link>
      </div>
      <Categories onClick={handleFetchListsOnCategory} />
      <div className={styles.cards}>
        <MasonryGrid gap={16} defaultDirection={'end'} align={'start'}>
          {listData?.feedLists.map((list: ListType) => (
            <Card key={list.id} list={list} isOwner={!!userData?.isOwner} />
          ))}
        </MasonryGrid>
      </div>
    </div>
  );
}
