'use client';

import { ReactNode } from 'react';
import { useRouter } from 'next/navigation';

import Header from '@/components/Header/Header';

interface NoticeLayoutType {
  children: ReactNode;
}

function NoticeLayout({ children }: NoticeLayoutType) {
  const router = useRouter();

  return (
    <div>
      <Header
        title={'게시판'}
        left="back"
        leftClick={() => {
          router.back();
        }}
      />
      {children}
    </div>
  );
}

export default NoticeLayout;
