'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { isAxiosError } from 'axios';

import * as styles from './page.css';

import Header from '@/components/Header/Header';
import BottomSheet from '@/components/BottomSheet/ver3.0/BottomSheet';
import FolderList from './_components/FolderList';

import useBooleanOutput from '@/hooks/useBooleanOutput';
import { useLanguage } from '@/store/useLanguage';
import { useUser } from '@/store/useUser';

import createCollectionFolder from '../_api/folder/createFolder';

import toasting from '@/lib/utils/toasting';
import toastMessage from '@/lib/constants/toastMessage';
import { QUERY_KEYS } from '@/lib/constants/queryKeys';

export default function CollectionPage() {
  const router = useRouter();
  const { user: userMe } = useUser();
  const queryClient = useQueryClient();
  const { language } = useLanguage();

  const { isOn, handleSetOn, handleSetOff } = useBooleanOutput(false);
  const [value, setValue] = useState('');

  const createFolderMutation = useMutation({
    mutationFn: createCollectionFolder,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.getFolders] });
      setValue('');
      handleSetOff();
    },
    onError: (error) => {
      if (isAxiosError(error)) {
        const errorData = error.response?.data;
        if (errorData.error === 'UNAUTHORIZED') {
          toasting({ type: 'error', txt: toastMessage[language].requiredLogin });
          return;
        }
        if (errorData.code.split('_')[0] === 'DUPLICATE') {
          toasting({ type: 'error', txt: toastMessage[language].duplicatedFolderName });
          return;
        }
      }
      toasting({ type: 'error', txt: toastMessage[language].failedFolder });
    },
  });

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleCreateFolder = () => {
    if (!value.trim()) {
      toasting({ type: 'warning', txt: toastMessage[language].emptyFolderName });
      return;
    }
    createFolderMutation.mutate({
      folderName: value,
    });
  };

  return (
    <section className={styles.wrapper}>
      <Header title="콜렉션" left="back" leftClick={() => router.push(`/user/${userMe.id}/mylist`)} />
      <div className={styles.container}>
        <FolderList />
        <div className={styles.addFolderButtonContainer}>
          <button className={styles.addFolderButton} onClick={handleSetOn}>
            <Image src={'/icons/new/add.svg'} width={16} height={16} alt="폴더 추가하기" />
            <span>폴더 추가하기</span>
          </button>
        </div>
      </div>
      <BottomSheet isOn={isOn}>
        <BottomSheet.Title>새로운 폴더</BottomSheet.Title>
        <input
          autoFocus
          placeholder="폴더명을 작성해 주세요"
          value={value}
          onChange={handleChangeInput}
          className={styles.contentInput}
        />
        <BottomSheet.Button onClose={handleSetOff} onClick={handleCreateFolder}>
          {['취소', '만들기']}
        </BottomSheet.Button>
      </BottomSheet>
    </section>
  );
}
