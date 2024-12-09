'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

import * as styles from './NavLinks.css';

interface NavLinksProps {
  links: Array<Record<string, string>>;
}

export default function NavLinks({ links }: NavLinksProps) {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      {links.map((link) => {
        const isActive = pathname && pathname.startsWith(link.path);
        return (
          <Link href={link.path} className={isActive ? styles.variantLink.selected : styles.variantLink.default}>
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
