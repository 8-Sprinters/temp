import { memo, MouseEvent } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import * as styles from './OptionToggleButton.css';

import OptionMenuIcon from '/public/icons/popup_menu.svg';
import useOnClickOutside from '@/hooks/useOnClickOutside';
import useBooleanOutput from '@/hooks/useBooleanOutput';

import deleteList from '@/app/_api/list/deleteList';
import updateVisibilityList from '@/app/_api/list/updateVisibilityList';
import { modalLocale } from '@/app/list/[listId]/locale';

import { QUERY_KEYS } from '@/lib/constants/queryKeys';
import toasting from '@/lib/utils/toasting';
import toastMessage from '@/lib/constants/toastMessage';
import { useLanguage } from '@/store/useLanguage';

import Modal from '@/components/Modal/Modal';

interface OptionToggleButtonType {
  listId: string;
  userId: number;
  isPublicCurrent: boolean;
}

type SelectOptionType = 'visibility' | 'delete';

function OptionToggleButton({ listId, userId, isPublicCurrent }: OptionToggleButtonType) {
  const queryClient = useQueryClient();
  const { language } = useLanguage();
  const { isOn: isPopupOpen, toggle: popupToggle, handleSetOff: handlePopupOff } = useBooleanOutput();
  const { isOn: isModalOpen, handleSetOn: handleModalOn, handleSetOff: handleModalOff } = useBooleanOutput();
  const { ref: popupRef } = useOnClickOutside(handlePopupOff);

  const publicAction = isPublicCurrent ? '비공개하기' : '공개하기';

  const deleteListMutation = useMutation({
    mutationFn: () => deleteList(listId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.getAllList, userId] });
      toasting({ type: 'success', txt: toastMessage[language].deleteListSuccess });
    },
    onError: () => {
      toasting({ type: 'error', txt: toastMessage[language].deleteListError });
    },
  });

  const updateVisibilityMutation = useMutation({
    mutationFn: () => updateVisibilityList(listId),
    onSuccess: () => {
      handlePopupOff();
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.getAllList, userId] });
      toasting({ type: 'success', txt: toastMessage[language].visibilityListSuccess });
    },
    onError: () => {
      toasting({ type: 'error', txt: toastMessage[language].visibilityListError });
    },
  });

  const handleOpenMenu = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    popupToggle();
  };

  const handleClickOption = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    const selectOption = (e.target as HTMLButtonElement).id as SelectOptionType;

    if (selectOption === 'delete') {
      handleModalOn();
      handlePopupOff();
    } else if (selectOption === 'visibility') {
      updateVisibilityMutation.mutate();
    }
  };

  return (
    <>
      <div ref={popupRef} className={styles.labelOption} onClick={handleOpenMenu}>
        <OptionMenuIcon alt="리스트 공개, 비공개 옵션" />

        {isPopupOpen && (
          <div className={styles.optionMenu} onClick={handleClickOption}>
            <button id="visibility" className={styles.optionTop}>
              {publicAction}
            </button>
            <button id="delete" className={styles.optionBottom}>
              삭제하기
            </button>
          </div>
        )}
      </div>

      {isModalOpen && (
        <Modal handleModalClose={handleModalOff}>
          <Modal.Title>{modalLocale[language].deleteMessage}</Modal.Title>
          <Modal.Button
            onCancel={(e) => {
              e.stopPropagation();
              handleModalOff();
            }}
            onClick={(e) => {
              e.stopPropagation();
              deleteListMutation.mutate();
            }}
          >
            {modalLocale[language].confirm}
          </Modal.Button>
        </Modal>
      )}
    </>
  );
}

export default memo(OptionToggleButton);
