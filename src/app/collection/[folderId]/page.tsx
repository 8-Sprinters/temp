'use client';

import { ChangeEvent, useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { isAxiosError } from 'axios';

import HeaderContainer from './_components/HeaderContainer';
import Collections from './_components/Collections';
import BottomSheet from '../_components/BottomSheet';

import * as styles from './page.css';

import useBooleanOutput from '@/hooks/useBooleanOutput';
import { useLanguage } from '@/store/useLanguage';
import toasting from '@/lib/utils/toasting';
import toastMessage from '@/lib/constants/toastMessage';
import { QUERY_KEYS } from '@/lib/constants/queryKeys';
import updateCollectionFolder from '@/app/_api/folder/updateFolder';

interface ParamType {
  params: { folderId: string };
}

// TODO API에 FolderName 필드 추가 요청 => input value에 보여주기 & 헤더 타이틀
export default function CollectionDetailPage({ params }: ParamType) {
  const folderId = params.folderId;
  const { isOn, handleSetOn, handleSetOff } = useBooleanOutput();
  const queryClient = useQueryClient();
  const { language } = useLanguage();

  const [value, setValue] = useState('');

  const editFolderMutation = useMutation({
    mutationFn: updateCollectionFolder,
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

  const handleEditFolder = () => {
    if (!value.trim()) {
      toasting({ type: 'warning', txt: toastMessage[language].emptyFolderName });
      return;
    }
    editFolderMutation.mutate({ folderId, folderName: value });
  };

  return (
    <section className={styles.container}>
      <HeaderContainer handleSetOnBottomSheet={handleSetOn} />
      <Collections folderId={folderId} />
      <BottomSheet isOn={isOn}>
        <BottomSheet.Title>폴더 이름 바꾸기</BottomSheet.Title>
        <input
          autoFocus
          placeholder="폴더명을 작성해 주세요"
          value={value}
          onChange={handleChangeInput}
          className={styles.contentInput}
        />
        <BottomSheet.Button onClose={handleSetOff} onClick={handleEditFolder} />
      </BottomSheet>
    </section>
  );
}
