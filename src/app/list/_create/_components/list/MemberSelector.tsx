'use client';
import { useEffect, useRef, useState } from 'react';
import { useParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';

import UserProfileImage from '@/components/UserProfileImage/UserProfileImage';
import SearchIcon from '/public/icons/search.svg';
import EraseButton from '/public/icons/x_circle_fill.svg';

import getListDetail from '@/app/_api/list/getListDetail';
import getUsersByNicknameSearch from '@/app/_api/user/getUsersByNicknameSearch';
import { QUERY_KEYS } from '@/lib/constants/queryKeys';
import { UserSearchType } from '@/lib/types/user';
import { UserProfileType, UserType } from '@/lib/types/userProfileType';
import { ListDetailType } from '@/lib/types/listType';

import * as styles from './MemberSelector.css';
import { useLanguage } from '@/store/useLanguage';
import { listLocale } from '@/app/list/create/locale';
import { useUser } from '@/store/useUser';
import getUserOne from '@/app/_api/user/getUserOne';

interface MemberSelectorProps {
  placeholder: string;
  followingList: UserProfileType[];
  selectedIds: number[];
  onClickAdd: (userId: number) => void;
  onClickDelete: (userId: number) => void;
  rules?: {
    required?: {
      errorMessage: string;
    };
    maxNum?: {
      value: number;
      errorMessage: string;
    };
  };
}

/**
 * MemberSelector 컴포넌트:
 * 사용자의 프로필 목록을 보여주고, 검색을 통해 사용자를 선택하는 기능 제공
 *
 * @param placeholder - 검색 입력란에 보여질 placeholder
 * @param followingList - 처음 드롭다운에 보여질 팔로우한 사용자 목록
 * @param onClickAdd - 선택한 멤버를 추가하는 함수
 * @param onClickDelete - 사용자를 선택 취소하는 함수
 */
function MemberSelector({
  placeholder,
  followingList,
  selectedIds,
  onClickAdd,
  onClickDelete,
  rules,
}: MemberSelectorProps) {
  const { language } = useLanguage();
  const { user } = useUser();
  const [input, setInput] = useState('');
  // const [selectedList, setSelectedList] = useState<UserProfileType[]>([]);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const { data: searchResult } = useQuery<UserSearchType>({
    queryKey: [QUERY_KEYS.getUsersByNicknameSearch, input],
    queryFn: () => getUsersByNicknameSearch(input),
  });

  const param = useParams<{ listId: string }>();

  const { data: listDataBeforeEdit } = useQuery<ListDetailType>({
    queryKey: [QUERY_KEYS.getListDetail, param?.listId],
    queryFn: () => getListDetail(Number(param?.listId)),
    enabled: !!param?.listId,
  });

  useEffect(() => {
    const closeDropdown = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        inputRef.current &&
        listRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !inputRef.current.contains(event.target as Node) &&
        !listRef.current.contains(event.target as Node)
      ) {
        setIsDropDownOpen(false);
      }
    };
    document.addEventListener('click', closeDropdown);

    return () => {
      document.removeEventListener('click', closeDropdown);
    };
  }, []);

  return (
    <div className={styles.container}>
      {/* 멤버 검색 인풋박스 */}
      <input
        ref={inputRef}
        className={styles.inputBox}
        type={'text'}
        placeholder={placeholder}
        onClick={() => {
          setIsDropDownOpen(true);
        }}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <SearchIcon className={styles.searchIcon} />

      {/* 멤버 검색 드롭다운 */}
      {isDropDownOpen && (
        <div className={styles.dropdown} ref={dropdownRef} style={{ height: isDropDownOpen ? '152px' : '0' }}>
          {input !== '' ? (
            searchResult?.users.length === 0 ? (
              <>
                {searchResult?.users.filter((user) =>
                  user.nickname.toLocaleLowerCase().includes(input.toLocaleLowerCase())
                ).length === 0 && <div className={styles.noResultMessage}>{listLocale[language].noData}</div>}
              </>
            ) : (
              <>
                {searchResult?.users.map((user) => (
                  <div
                    key={user.id}
                    className={styles.profileContainer}
                    onClick={() => {
                      if (rules?.maxNum && selectedIds.length >= rules.maxNum.value) {
                        return;
                      }
                      if (!selectedIds.find((id: number) => id === user.id)) {
                        onClickAdd(user.id);
                      }
                    }}
                  >
                    <UserProfileImage src={user.profileImageUrl} size={30} />
                    {user.nickname}
                    {selectedIds.find((id: number) => id === user.id) && <span className={styles.checkedIcon}>✓</span>}
                  </div>
                ))}
              </>
            )
          ) : followingList.length === 0 ? (
            <>
              {searchResult?.users.filter((user) =>
                user.nickname.toLocaleLowerCase().includes(input.toLocaleLowerCase())
              ).length === 0 && <div className={styles.noResultMessage}>{listLocale[language].noData}</div>}
            </>
          ) : (
            <>
              {followingList.map((user) => (
                <div
                  key={user.id}
                  className={styles.profileContainer}
                  onClick={() => {
                    if (rules?.maxNum && selectedIds.length >= rules.maxNum.value) {
                      return;
                    }
                    if (!selectedIds.find((id: number) => id === user.id)) {
                      onClickAdd(user.id);
                    }
                  }}
                >
                  <UserProfileImage src={user.profileImageUrl} size={30} />
                  {user.nickname}
                  {selectedIds.find((id: number) => id === user.id) && <span className={styles.checkedIcon}>✓</span>}
                </div>
              ))}
            </>
          )}
        </div>
      )}
      {rules?.maxNum && selectedIds.length >= rules.maxNum.value && (
        <div className={styles.error}>{rules?.maxNum?.errorMessage}</div>
      )}

      {/* 선택한 멤버 리스트 */}
      <div ref={listRef} className={styles.list}>
        {selectedIds.map((id) => (
          <SelectedProfile key={id} id={id} onClickDelete={onClickDelete} />
        ))}
      </div>
    </div>
  );
}

interface SelectedProfileProps {
  id: number;
  onClickDelete: (userId: number) => void;
}

function SelectedProfile({ id, onClickDelete }: SelectedProfileProps) {
  const { data: userData } = useQuery<UserType>({
    queryKey: [QUERY_KEYS.userOne, id],
    queryFn: () => getUserOne(id),
    enabled: !!id,
  });

  useEffect(() => {
    //
  }, [userData]);

  return (
    <div key={id} className={styles.item}>
      <div className={styles.profileContainer}>
        <UserProfileImage src={userData?.profileImageUrl || ''} size={30} />
        {userData?.nickname}
      </div>
      <EraseButton
        onClick={() => {
          onClickDelete(id);
        }}
      />
    </div>
  );
}

export default MemberSelector;
