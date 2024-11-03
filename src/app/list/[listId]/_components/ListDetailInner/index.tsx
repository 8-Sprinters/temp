'use client';

import { useState } from 'react';

import * as styles from './index.css';

import { ListDetailType } from '@/lib/types/listType';
import Header from '@/app/list/[listId]/_components/ListDetailInner/Header';
import RankList from '@/app/list/[listId]/_components/ListDetailInner/RankList';
import Footer from '@/app/list/[listId]/_components/ListDetailInner/Footer';
import { BACKGROUND_COLOR_READ } from '@/styles/Color';

interface OptionsProps {
  value: string;
  label: string;
}

interface ListDetailInnerProps {
  data: ListDetailType;
  listId: number;
}

function ListDetailInner({ data, listId }: ListDetailInnerProps) {
  const listData = data?.items;
  const [listType, setListType] = useState('detail');

  const handleChangeListType = (target: OptionsProps) => {
    const value: string = target.value;
    setListType(value);
  };

  const footerData = {
    listId: listId,
    ownerId: data?.ownerId,
    items: listData,
    category: data?.categoryKorName,
    title: data?.title,
    description: data?.description,
    collaborators: data?.collaborators,
    ownerNickname: data?.ownerNickname,
    collectCount: data?.collectCount,
    viewCount: data?.viewCount,
    isCollected: data?.isCollected,
    isPublic: data?.isPublic,
  };

  return (
    <div className={styles.container}>
      <Header handleChangeListType={handleChangeListType} />
      <div className={styles.listAndFooter}>
        <RankList
          backgroundColor={BACKGROUND_COLOR_READ[data?.backgroundColor as keyof typeof BACKGROUND_COLOR_READ]}
          listData={listData}
          type={listType}
        />
        <Footer data={footerData} />
      </div>
    </div>
  );
}

export default ListDetailInner;
