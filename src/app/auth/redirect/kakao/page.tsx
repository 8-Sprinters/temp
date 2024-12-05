'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { AxiosError } from 'axios';

import axiosInstance from '@/lib/axios/axiosInstance';
import { useUser } from '@/store/useUser';
import { UserOnLoginType } from '@/lib/types/user';
import { setCookie } from '@/lib/utils/cookie';

import Loading from '@/components/loading/Loading';

export default function KakaoRedirectPage() {
  const router = useRouter();
  const { updateUser } = useUser();
  const searchParams = useSearchParams();
  const code = searchParams ? searchParams.get('code') : null;

  useEffect(() => {
    const controller = new AbortController();

    if (!code) {
      router.back();
      return;
    }

    // 브라우저 기본 동작으로 리다이렉트 페이지에 접근하지 못하도록 설정
    history.replaceState(null, '', '/');

    const loginKakao = async () => {
      try {
        const res = await axiosInstance.get<UserOnLoginType>(`/auth/redirect/kakao?code=${code}`, {
          signal: controller.signal,
        });

        const { id, accessToken, refreshToken } = res.data;
        updateUser({ id });
        setCookie('accessToken', accessToken, 'AT');
        setCookie('refreshToken', refreshToken, 'RT');

        if (res.data.isFirst) {
          router.push('/start-listy');
        } else {
          router.push('/');
        }
      } catch (error) {
        if (error instanceof AxiosError) {
          if (error.response?.status === 400) {
            // 탈퇴한 사용자(status 400)일 경우, 리다이렉트
            router.push('/withdrawn-account');
          } else if (!controller.signal.aborted) {
            console.error(error.message);
          } else {
            console.log('Request canceled:', error.message);
          }
        }
      }
    };

    loginKakao();

    return () => {
      controller.abort(); // 마운트 해제 및 axios 요청 취소
    };
  }, [code]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <Loading />
    </div>
  );
}
