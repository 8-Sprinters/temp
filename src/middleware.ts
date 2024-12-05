// 쿠키에 저장된 정보를 확인하여 권한에 따른 분기처리 로직(서버에서 실행)

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const REQUIRED_TOKEN = ['/account', '/start-listy', '/list/create', '/collection', '/notification'];

export async function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('pathname', request.nextUrl.pathname);

  // 만약, 쿠키에 accessToken이 없다면 '/'페이지로 리다이렉트
  const accessToken = request.cookies.get('accessToken');

  // '/account'로 시작하는 하위 URL 포함 조건 추가
  const isAccountSubPath = request.nextUrl.pathname.startsWith('/account');

  if (!accessToken && (REQUIRED_TOKEN.includes(request.nextUrl.pathname) || isAccountSubPath)) {
    const url = new URL('/', request.url);
    url.searchParams.set('loginRequired', 'true'); // 쿼리 파라미터 추가
    return NextResponse.redirect(url);
  }

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}
