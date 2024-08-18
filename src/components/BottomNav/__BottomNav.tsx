'use client';

import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';

import ExploreIcon from '/public/icons/explore.svg';
import MyFeedIcon from '/public/icons/my_feed.svg';
import CollectionIcon from '/public/icons/collection.svg';

import useMoveToPage from '@/hooks/useMoveToPage';
import useBooleanOutput from '@/hooks/useBooleanOutput';

import { useUser } from '@/store/useUser';

import { vars } from '@/styles/theme.css';
import * as styles from './BottomNav.css';

import Modal from '../Modal/Modal';
import LoginModal from '../login/LoginModal';

export default function BottomNav() {
  const { user } = useUser();
  const router = useRouter();
  const userId = user.id;
  const pathname = usePathname() as string;
  const { onClickMoveToPage } = useMoveToPage();
  const { isOn, handleSetOff, handleSetOn } = useBooleanOutput();

  // 숨기고 싶은 경로 패턴 배열
  const hiddenPaths = [
    '/list',
    '/intro',
    '/start-listy',
    '/account',
    '/followings',
    '/followers',
    '/notification',
    '/withdrawn-account',
  ];
  const isHidden = hiddenPaths.some((path) => pathname.includes(path));

  if (isHidden) return;

  //파란색 선택 표시를 위한 분기처리
  const selectedItem = (() => {
    if (pathname === '/' || pathname.includes('/search')) {
      return 'explore';
    } else if (pathname === `/user/${userId}/mylist` || pathname === `/user/${userId}/collabolist`) {
      return 'my-feed';
    } else if (pathname.startsWith('/collection')) {
      return 'collection';
    } else {
      return null;
    }
  })();

  // 로그인한 사용자 검증
  const handleMoveToPageOnLogin = (path: string) => () => {
    if (!userId) {
      handleSetOn();
      return;
    }
    path === 'my-feed' ? router.push(`/user/${userId}/mylist`) : router.push('/collection');
  };

  return (
    <>
      <nav>
        <ul className={styles.navDiv}>
          <li className={styles.buttonDiv} onClick={onClickMoveToPage('/')}>
            <ExploreIcon fill={selectedItem === 'explore' ? vars.color.blue : vars.color.gray7} />
          </li>
          <li className={styles.buttonDiv} onClick={handleMoveToPageOnLogin('my-feed')}>
            <MyFeedIcon fill={selectedItem === 'my-feed' ? vars.color.blue : vars.color.gray7} />
          </li>
          <li className={styles.buttonDiv} onClick={handleMoveToPageOnLogin('collection')}>
            <CollectionIcon fill={selectedItem === 'collection' ? vars.color.blue : vars.color.gray7} />
          </li>
        </ul>
      </nav>
      {isOn && (
        <Modal handleModalClose={handleSetOff} size="large">
          <LoginModal id="bottomNavLoginBtn" />
        </Modal>
      )}
    </>
  );
}
