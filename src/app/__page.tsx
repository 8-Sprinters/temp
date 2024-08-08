'use client';

import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, Suspense } from 'react';
import dynamic from 'next/dynamic';

import ListRecommendation from '@/components/exploreComponents/ListsRecommendation';
import TrendingList from '@/components/exploreComponents/TrendingLists';
import UsersRecommendation from '@/components/exploreComponents/UsersRecommendation';
import Header from '@/components/exploreComponents/Header';
import FloatingContainer from '@/components/floatingButton/FloatingContainer';
import PlusOptionFloatingButton from '@/components/floatingButton/PlusOptionFloatingButton';
import ArrowUpFloatingButton from '@/components/floatingButton/ArrowUpFloatingButton';
import SearchBar from '@/app/search/_components/SearchBar';
import Modal from '@/components/Modal/Modal';
import LoginModal from '@/components/login/LoginModal';
import Loading from '@/components/loading/Loading';

import * as styles from './page.css';

import useBooleanOutput from '@/hooks/useBooleanOutput';
import toasting from '@/lib/utils/toasting';
import toastMessage from '@/lib/constants/toastMessage';
import { useLanguage } from '@/store/useLanguage';

const PWAPrompt = dynamic(() => import('react-ios-pwa-prompt'), {
  ssr: false,
});

function LandingPage() {
  const { language } = useLanguage();
  // TODO 소현 - 나중에 getStaticPaths, getStaticProps로 쿼리 가져오기 (리팩토링)
  const router = useRouter();
  const searchParams = useSearchParams();
  const isLoginRequired = searchParams ? searchParams.get('loginRequired') : '';
  const { isOn, handleSetOn, handleSetOff } = useBooleanOutput();

  // TODO 소현 - hoc or hof로 분리하기
  useEffect(() => {
    if (!!isLoginRequired) {
      toasting({ type: 'error', txt: toastMessage[language].requiredLogin });
      handleSetOn();
      router.replace('/', { scroll: false }); // 쿼리스트링 초가화
    }
  }, [isLoginRequired, handleSetOn, router]);

  return (
    <>
      <div className={styles.wrapper}>
        <Header />
        <Suspense fallback={<Loading />}>
          <PWAPrompt
            copyTitle="리스티웨이브 앱 설치하기"
            copyBody="앱으로 더 편하게 리스티웨이브의 모든 기능을 이용해보세요"
            copyShareButtonLabel="1) Chrome 혹은 Safari에서 공유하기 아이콘 누른 후"
            copyAddHomeButtonLabel="2) 홈화면에 추가 누르면 완료"
            copyClosePrompt="닫기"
            timesToShow={100}
            permanentlyHideOnDismiss={false}
          />
          <SearchBar />
          <TrendingList />
          <UsersRecommendation />
          <ListRecommendation />
          <FloatingContainer>
            <PlusOptionFloatingButton />
            <ArrowUpFloatingButton />
          </FloatingContainer>
        </Suspense>
      </div>
      {isOn && (
        <Modal handleModalClose={handleSetOff} size="large">
          <LoginModal id="redirectedLoginBtn" />
        </Modal>
      )}
    </>
  );
}

export default LandingPage;
