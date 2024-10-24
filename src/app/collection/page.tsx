'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { isAxiosError } from 'axios';

import * as styles from './page.css';

import Header from '@/components/Header/Header';
import BottomSheet from './_components/BottomSheet';
import Modal from '@/components/Modal/Modal';
import LoginModal from '@/components/login/LoginModal';

import useBooleanOutput from '@/hooks/useBooleanOutput';
import { useLanguage } from '@/store/useLanguage';

import createCollectionFolder from '../_api/folder/createFolder';
import getFolders, { FoldersResponseType } from '../_api/folder/getFolders';

import toasting from '@/lib/utils/toasting';
import toastMessage from '@/lib/constants/toastMessage';
import { QUERY_KEYS } from '@/lib/constants/queryKeys';

export default function CollectionPage() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { language } = useLanguage();
  const { data } = useQuery<FoldersResponseType>({
    queryKey: [QUERY_KEYS.getFolders],
    queryFn: getFolders,
    staleTime: 1000 * 60 * 5, // 5분 설정
  });

  const { isOn, handleSetOn, handleSetOff } = useBooleanOutput(false);
  const { isOn: isLoginModalOn, handleSetOn: loginModalOn, handleSetOff: loginModalOff } = useBooleanOutput();
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
          loginModalOn();
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
    <section>
      <Header title="콜렉션" left="back" leftClick={() => router.back()} />
      <div className={styles.container}>
        <div className={styles.folders}>
          {data?.folders.map((folder) => (
            <Link href={`/collection/${folder.folderId}`} key={folder.folderId} className={styles.folder}>
              <div className={styles.folderShape}>
                <div className={styles.topLeftShape}></div>
                <div className={styles.topShape}></div>
                <div className={styles.bottomShape}></div>
              </div>
              <p className={styles.title}>
                <span className={styles.folderName}>{folder.folderName}</span>
                <span>{`(${folder.listCount})`}</span>
              </p>
            </Link>
          ))}
        </div>
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
        <BottomSheet.Button onClose={handleSetOff} onClick={handleCreateFolder} />
      </BottomSheet>

      {isLoginModalOn && (
        <Modal handleModalClose={loginModalOff} size="large">
          <LoginModal id="followLoginBtn" />
        </Modal>
      )}
    </section>
  );
}
