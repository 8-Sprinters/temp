'use client';
import { useRouter, useParams } from 'next/navigation';
import CommonHeader from '@/components/Header/Header';

interface HeaderProps {
  title: string;
}

function Header({ title }: HeaderProps) {
  const router = useRouter();
  const param = useParams<{ userId: string }>();

  const handleBackButtonClick = () => {
    router.push(`/user/${param?.userId}/mylist`);
  };

  return <CommonHeader left={'back'} leftClick={handleBackButtonClick} title={title} />;
}

export default Header;
