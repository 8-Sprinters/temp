import { ReactNode } from 'react';

import * as styles from './layout.css';
import Link from 'next/link';

interface AdminNoticeLayoutProps {
  children: ReactNode;
}

export default function AdminNoticeLayout({ children }: AdminNoticeLayoutProps) {
  return (
    <section className={styles.container}>
      <nav className={styles.nav}>
        <h1 className={styles.title}>🤍 리스티웨이브 관리</h1>
        <ul className={styles.menu}>
          <Link href="/admin/topics">요청 주제</Link>
          <Link href="/admin/notice">게시물</Link>
        </ul>
      </nav>
      <main className={styles.main}>{children}</main>
    </section>
  );
}
