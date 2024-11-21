'use client';

import { ReactNode } from 'react';

import Header from '@/app/(home)/_components/Header';
import * as styles from './layout.css';

interface HomeLayoutProps {
  children: ReactNode;
}

function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <div className={styles.wrapper}>
      <Header />
      {children}
    </div>
  );
}

export default HomeLayout;
