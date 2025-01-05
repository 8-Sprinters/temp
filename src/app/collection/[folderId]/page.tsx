'use client';

import { useRouter } from 'next/navigation';
import { ChangeEvent, useEffect, useMemo, useState } from 'react';
import { useInfiniteQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { isAxiosError } from 'axios';

import Collections from './_components/Collections';
import BottomSheet from '@/components/BottomSheet/ver3.0/BottomSheet';

import * as styles from './page.css';

import useBooleanOutput from '@/hooks/useBooleanOutput';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { useLanguage } from '@/store/useLanguage';
import toasting from '@/lib/utils/toasting';
import toastMessage from '@/lib/constants/toastMessage';
import { QUERY_KEYS } from '@/lib/constants/queryKeys';
import updateCollectionFolder from '@/app/_api/folder/updateFolder';
import deleteFolder from '@/app/_api/folder/deleteFolder';
import getCollection, { CollectionListResponseType } from '@/app/_api/collect/getCollection';

interface ParamType {
  params: { folderId: string };
}

export default function CollectionDetailPage({ params }: ParamType) {
  const folderId = params.folderId;
  const { isOn, handleSetOn, handleSetOff } = useBooleanOutput();
  const {
    isOn: isDeleteOption,
    handleSetOn: handleSetOnDeleteOption,
    handleSetOff: handleSetOffDeleteOption,
  } = useBooleanOutput();
  const queryClient = useQueryClient();
  const { language } = useLanguage();
  const router = useRouter();

  const [value, setValue] = useState('');

  // 폴더 상세(콜렉션) 조회
  const {
    data: listData,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteQuery<CollectionListResponseType>({
    queryKey: [QUERY_KEYS.getCollection, folderId],
    queryFn: ({ pageParam: cursorId }) => getCollection(folderId, cursorId as string),
    initialPageParam: null,
    getNextPageParam: (lastPage) => (lastPage.hasNext ? lastPage.cursorId : null),
    enabled: !!folderId,
  });

  const lists = useMemo(() => {
    return listData ? listData.pages.flatMap(({ collectionLists }) => collectionLists) : [];
  }, [listData]);

  const ref = useIntersectionObserver(() => {
    if (hasNextPage) {
      fetchNextPage();
    }
  });

  // 폴더 수정하기 mutation
  const editFolderMutation = useMutation({
    mutationFn: updateCollectionFolder,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.getFolders] });
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.getCollection] });
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

  // 폴더 삭제하기 mutation
  const deleteFolderMutation = useMutation({
    mutationFn: deleteFolder,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.getFolders] });
      handleSetOffDeleteOption();
      router.push('/collection');
    },
    onError: (error) => {
      if (isAxiosError(error)) {
        const errorData = error.response?.data;
        if (errorData.error === 'UNAUTHORIZED') {
          toasting({ type: 'error', txt: toastMessage[language].requiredLogin });
          return;
        }
      }
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

  const handleDeleteFolder = () => {
    deleteFolderMutation.mutate(folderId);
  };

  useEffect(() => {
    if (listData) {
      setValue(listData.pages[0].folderName);
    }
  }, [listData]);

  return (
    <section>
      <Collections
        collectionList={lists}
        folderName={listData?.pages[0].folderName ?? ''}
        isHideOption={folderId === '0'}
        handleSetOn={handleSetOn}
        handleSetOnDeleteOption={handleSetOnDeleteOption}
      />
      <BottomSheet isOn={isOn}>
        <BottomSheet.Title>폴더 이름 바꾸기</BottomSheet.Title>
        <input
          autoFocus
          placeholder="폴더명을 작성해 주세요"
          defaultValue={value}
          onChange={handleChangeInput}
          className={styles.contentInput}
        />
        <BottomSheet.Button onClose={handleSetOff} onClick={handleEditFolder}>
          {['취소', '만들기']}
        </BottomSheet.Button>
      </BottomSheet>
      <BottomSheet isOn={isDeleteOption}>
        <BottomSheet.Content
          contents={{
            text: '정말 삭제하시나요?',
            subText: '폴더와 안에 있었던 리스트가 모두 삭제돼요',
          }}
        />
        <BottomSheet.Button onClose={handleSetOffDeleteOption} isDelete={true} onClick={handleDeleteFolder}>
          {['취소', '삭제']}
        </BottomSheet.Button>
      </BottomSheet>
      <div className={styles.target} ref={ref}></div>
    </section>
  );
}
