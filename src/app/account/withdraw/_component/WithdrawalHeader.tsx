'use client';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header/Header';
import { accountLocale } from '@/app/account/locale';
import { useLanguage } from '@/store/useLanguage';

export default function WithdrawalHeader() {
  const { language } = useLanguage();
  const router = useRouter();
  return (
    <Header
      title={accountLocale[language].withdrawal}
      left="back"
      leftClick={() => {
        router.back();
      }}
      right={<div />}
    />
  );
}
