import { Metadata, ResolvingMetadata } from 'next';

import Profile from '../_components/Profile';
import Content from '../_components/Content';
import FloatingContainer from '@/components/floatingButton/FloatingContainer';
import PlusOptionFloatingButton from '@/components/floatingButton/PlusOptionFloatingButton';
import ArrowUpFloatingButton from '@/components/floatingButton/ArrowUpFloatingButton';

import * as styles from './MylistPage.css';

import axiosInstance from '@/lib/axios/axiosInstance';
import { UserType } from '@/lib/types/userProfileType';
import METADATA from '@/lib/constants/metadata';

interface MyListPageProps {
  params: { userId: number };
}

export async function generateMetadata({ params }: MyListPageProps, parent: ResolvingMetadata): Promise<Metadata> {
  const userId = params.userId;
  const { data } = await axiosInstance.get<UserType>(`/users/${userId}`);

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: {
      absolute: `${data.nickname}'s Mylist`,
    },
    authors: [{ name: `${data.nickname}` }],
    description: METADATA.description.mylist,
    openGraph: {
      description: `${data.description || METADATA.description.mylist}`,
      url: `${METADATA.url}/user/${userId}/mylist`,
      images: [`${data.profileImageUrl}`, ...previousImages],
    },
  };
}

export default function MyListPage({ params }: MyListPageProps) {
  return (
    <section className={styles.container}>
      <Profile userId={params.userId} />
      <Content userId={params.userId} type="my" />
      <FloatingContainer>
        <PlusOptionFloatingButton />
        <ArrowUpFloatingButton />
      </FloatingContainer>
    </section>
  );
}
