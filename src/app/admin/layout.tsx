import { ReactNode } from 'react';

import * as styles from './layout.css';
import NavLinks from './_components/NavLinks';

interface AdminNoticeLayoutProps {
  children: ReactNode;
}

export default function AdminNoticeLayout({ children }: AdminNoticeLayoutProps) {
  return (
    <section className={styles.container}>
      <div className={styles.nav}>
        <h1 className={styles.title}>🤍 리스티웨이브 관리</h1>
        <NavLinks
          links={[
            {
              label: '요청 주제',
              path: '/admin/topics',
            },
            {
              label: '게시물',
              path: '/admin/notice',
            },
          ]}
        />
      </div>
      <main className={styles.main}>{children}</main>
    </section>
  );
}
