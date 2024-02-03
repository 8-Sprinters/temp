'use client';

/**
 TODO
 - [x] 카카오 로그인 기능 테스트 완료(백엔드)
 - [ ] 로그인 성공시 쿠키에 저장된 accessToken 저장
 - [ ] 로그인 성공시 사용자 리다이렉트
 - [ ] 리퀘스트 보낼 때 토큰 같이 전달 되도록 axios 설정
 - [ ] 로그인 만료 확인, refreshToken(추후)
 - [ ] 로그인 페이지 UI
 */

import Link from 'next/link';

const oauthType = {
  kakao: 'kakao',
  naver: 'naver',
  google: 'google',
};

export default function Login() {
  return (
    <div>
      로그인페이지
      <Link href={`https://dev.api.listywave.com/auth/${oauthType.kakao}`}>카카오 로그인</Link>
      {/* <Link href="/auth/redirect/kakaoTest?code=1234">카카오 로그인 테스트</Link> */}
    </div>
  );
}
