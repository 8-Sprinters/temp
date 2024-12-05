import { ReactNode } from 'react';
import type { Metadata, Viewport } from 'next';
import { headers } from 'next/headers';
import { ReferrerEnum } from 'next/dist/lib/metadata/types/metadata-types';
import { OpenGraphType } from 'next/dist/lib/metadata/types/opengraph-types';
import { ToastContainer } from 'react-toastify';
import { GoogleTagManager } from '@next/third-parties/google';

import BottomNav from '@/components/BottomNav/BottomNav';

import '@/styles/GlobalStyles.css';
import * as styles from './layout.css';

import CommonProvider from './_context/CommonProvider';
import METADATA from '@/lib/constants/metadata';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
};

export const metadata: Metadata = {
  title: {
    template: METADATA.title.template,
    default: METADATA.title.default,
  },
  description: METADATA.description.default,
  authors: [{ name: METADATA.authors.name, url: METADATA.authors.url }],
  generator: METADATA.generator,
  applicationName: METADATA.applicationName,
  referrer: METADATA.referrer as ReferrerEnum,
  keywords: METADATA.keywords,
  metadataBase: new URL(METADATA.url),
  openGraph: {
    title: METADATA.title.openGraph,
    description: METADATA.description.default,
    url: METADATA.url,
    type: METADATA.type as OpenGraphType,
    siteName: METADATA.siteName,
    locale: METADATA.locale,
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  const pathname = headers().get('pathname') || '';
  const isAdminStyle = pathname.startsWith('/admin');

  return (
    <html lang="ko">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" href="https://image.listywave.com/favicon/favicon.png" />
        <link rel="apple-touch-icon" href="https://image.listywave.com/favicon/favicon.png" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={isAdminStyle ? styles.adminBodyStyle : styles.basicBodyStyle}>
        <CommonProvider>
          <div id="modal-root" />
          <div>
            {children}
            <BottomNav />
          </div>
          <ToastContainer className={styles.toastContainer} />
        </CommonProvider>
      </body>
      <GoogleTagManager gtmId="GTM-5XF9QJN8" />
    </html>
  );
}
