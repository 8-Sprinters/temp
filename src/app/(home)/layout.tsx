'use client';

import { ReactNode } from 'react';

import Header from '@/app/(home)/_components/Header';

interface HomeLayoutProps {
  children: ReactNode;
}

function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

export default HomeLayout;
