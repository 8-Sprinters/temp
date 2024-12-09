'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

import * as styles from './NavLinks.css';

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <Link
        href="/admin/topics"
        className={
          pathname && pathname.startsWith('/admin/topics') ? styles.variantLink.selected : styles.variantLink.default
        }
      >
        요청 주제
      </Link>
      <Link
        href="/admin/notice"
        className={
          pathname && pathname.startsWith('/admin/notice') ? styles.variantLink.selected : styles.variantLink.default
        }
      >
        게시물
      </Link>
    </nav>
  );
}
