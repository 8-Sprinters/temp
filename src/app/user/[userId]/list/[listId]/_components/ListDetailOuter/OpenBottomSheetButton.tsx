'use client';
import { useRouter } from 'next/navigation';
import { deleteList } from '@/app/_api/list/deleteList';
import useBooleanOutput from '@/hooks/useBooleanOutput';
import BottomSheet from '@/app/user/[userId]/list/[listId]/_components/BottomSheet/BottomSheet';
import KebabButton from '/public/icons/vertical_kebab_button.svg';
import * as styles from './ModalButtonStyle.css';

interface OpenBottomSheetButtonProps {
  listId: string | undefined;
}

export default function OpenBottomSheetButton({ listId }: OpenBottomSheetButtonProps) {
  const router = useRouter();
  const { isOn, handleSetOff, handleSetOn } = useBooleanOutput(); //바텀시트 열림,닫힘 상태 관리
  const bottomSheetOptionList = [
    {
      key: 'editList',
      title: '리스트 수정하기',
      onClick: () => {
        handleEditClick();
      },
    },
    {
      key: 'deleteList',
      title: '리스트 삭제하기',
      onClick: () => {
        handleDeleteClick();
      },
    },
  ];

  /**
   * @todo 유저 정보 받아서 유저 ID로 바꿔줘야 함
   */
  const handleEditClick = () => {
    router.push(`/user/${1}/list/${listId}/edit`);
    handleSetOff(); //닫기
  };

  /**
   * @todo 삭제 시 어느 경로로 이동되는지 확인해야 함
   */
  const handleDeleteClick = () => {
    deleteList(listId);
    handleSetOff(); //닫기
    router.push('/');
  };

  return (
    <>
      <button className={styles.resetButtonStyle} onClick={handleSetOn}>
        <KebabButton className={styles.buttonCursor} alt="케밥 버튼" />
      </button>

      {isOn && <BottomSheet onClose={handleSetOff} optionList={bottomSheetOptionList} />}
    </>
  );
}
