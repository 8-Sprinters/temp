'use client';

import Link from 'next/link';
import Image from 'next/image';

import * as styles from './LoginModal.css';

import KakaoLoginIcon from '/public/icons/kakao_login_narrow.svg';
import { commonLocale } from '@/components/locale';
import { useLanguage } from '@/store/useLanguage';

import axiosInstance from '@/lib/axios/axiosInstance';
import { UserOnLoginType } from '@/lib/types/user';
import { useUser } from '@/store/useUser';
import { setCookie } from '@/lib/utils/cookie';

const oauthType = {
  kakao: 'kakao',
};

interface LoginModalProps {
  id: string;
}

/** FE 개발을 위한 로컬용 로그인 컴포넌트 입니다. */
function LoginButtonForLocal() {
  const { updateUser } = useUser();

  const handleLoginLocal = async () => {
    try {
      const res = await axiosInstance.post<UserOnLoginType>('/login/local', {
        account: process.env.NEXT_PUBLIC_LOCAL_LOGIN_ID,
        password: process.env.NEXT_PUBLIC_LOCAL_LOGIN_PASSWARD,
      });

      const { id, accessToken, refreshToken } = res.data;
      updateUser({ id });
      setCookie('accessToken', accessToken, 'AT');
      setCookie('refreshToken', refreshToken, 'RT');

      location.reload();
    } catch (error) {
      alert(error);
      console.log('Request canceled:', error);
    }
  };

  return (
    <button onClick={handleLoginLocal} className={styles.buttonForLocal}>
      FE 개발용 로그인
    </button>
  );
}

export default function LoginModal({ id }: LoginModalProps) {
  const { language } = useLanguage();

  return (
    <section className={styles.container}>
      <div className={styles.logoContainer}>
        <Image
          src={`/icons/large_logo.svg`}
          width={207}
          height={35}
          alt={commonLocale[language].listyWaveLogo}
          priority
        />
        <div className={styles.textContainer}>
          <p className={styles.text}>
            {commonLocale[language].own} <span className={styles.variantText}>{commonLocale[language].list}</span>
            {commonLocale[language].make}
          </p>
          <h1 className={styles.title}>{commonLocale[language].start}</h1>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <Link id={id} href={`${process.env.NEXT_PUBLIC_SERVER_DOMAIN}/auth/${oauthType.kakao}`}>
          <KakaoLoginIcon />
        </Link>
        {process.env.NODE_ENV === 'development' && <LoginButtonForLocal />}
      </div>
    </section>
  );
}
