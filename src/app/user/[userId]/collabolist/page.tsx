import { Metadata, ResolvingMetadata } from 'next';

import Profile from '../_components/Profile';
import Content from '../_components/Content';
import FloatingContainer from '@/components/floatingButton/FloatingContainer';
import ArrowUpButton from '@/components/floatingButton/ArrowUpButton';
import ShareLinkButton from '@/components/floatingButton/ShareLinkButton';

import axiosInstance from '@/lib/axios/axiosInstance';
import { UserType } from '@/lib/types/userProfileType';
import METADATA from '@/lib/constants/metadata';

interface CollaboListPageProps {
  params: { userId: number };
}

export async function generateMetadata({ params }: CollaboListPageProps, parent: ResolvingMetadata): Promise<Metadata> {
  const userId = params.userId;
  const { data } = await axiosInstance.get<UserType>(`/users/${userId}`);

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: {
      absolute: `${data.nickname}'s Collabo-list`,
    },
    authors: [{ name: `${data.nickname}` }],
    description: METADATA.description.collabolist,
    openGraph: {
      description: `${data.description || METADATA.description.collabolist}`,
      url: `${METADATA.url}/user/${userId}/collabolist`,
      images: [`${data.profileImageUrl}`, ...previousImages],
    },
  };
}

export default function CollaboListPage({ params }: CollaboListPageProps) {
  return (
    <section>
      <Profile userId={params.userId} />
      <Content userId={params.userId} type="collabo" />
      <FloatingContainer>
        <ArrowUpButton />
        <ShareLinkButton />
      </FloatingContainer>
    </section>
  );
}
