'use client';

import { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import '@/styles/GlobalStyles.css';
import Script from 'next/script';
import { ToastContainer } from 'react-toastify';
import Header from '@/app/exploreComponents/Header';
import FloatingContainer from '@/components/floatingButton/FloatingContainer';
import PlusOptionFloatingButton from '@/components/floatingButton/PlusOptionFloatingButton';
import ArrowUpFloatingButton from '@/components/floatingButton/ArrowUpFloatingButton';
import * as styles from './layout.css';

const queryClient = new QueryClient();
declare global {
  interface Window {
    Kakao: any;
  }
}
export default function TempLayout({ children }: { children: ReactNode }) {
  function kakaoInit() {
    window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_API_KEY);
    window.Kakao.isInitialized();
  }

  return (
    <html lang="ko">
      <head>
        <title>ListyWave</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css" />
        <Script
          src="https://t1.kakaocdn.net/kakao_js_sdk/2.6.0/kakao.min.js"
          integrity="sha384-6MFdIr0zOira1CHQkedUqJVql0YtcZA1P0nbPrQYJXVJZUkTk/oX4U9GhUIs3/z8"
          crossOrigin="anonymous"
          onLoad={kakaoInit}
        ></Script>
      </head>
      <body>
        <QueryClientProvider client={queryClient}>
          <div id="modal-root" />
          <div className={styles.wrapper}>
            <Header />
            {children}
            <FloatingContainer>
              <PlusOptionFloatingButton />
              <ArrowUpFloatingButton />
            </FloatingContainer>
          </div>
        </QueryClientProvider>
      </body>
    </html>
  );
}
