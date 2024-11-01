import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import Modal from '@/components/Modal/Modal';
import BottomSheet from '@/components/BottomSheet/BottomSheet';
import NoDataComponent from '@/components/NoData/NoDataComponent';

import EyeIcon from '/public/icons/new/eye.svg';
import EyeSlashIcon from '/public/icons/new/eye_slash.svg';
import DeleteIcon from '/public/icons/new/delete.svg';
import ArrowDown from '/public/icons/chevron_down_sm.svg';

import { useUser } from '@/store/useUser';
import useBooleanOutput from '@/hooks/useBooleanOutput';
import toggleHistoryPublic from '@/app/_api/history/toggleHistoryPulblic';
import deleteHistory from '@/app/_api/history/deleteHistory';
import timeDiff from '@/lib/utils/time-diff';
import { HistoryType } from '@/lib/types/historyType';
import { QUERY_KEYS } from '@/lib/constants/queryKeys';

import * as styles from './HistoryVersions.css';
import { useLanguage } from '@/store/useLanguage';
import { modalLocale, listLocale } from '@/app/list/[listId]/locale';

interface VersionHistoryProps {
  histories: HistoryType[];
  listId: string | undefined;
  listOwnerId: number | undefined;
}

function HistoryVersions({ histories, listId, listOwnerId }: VersionHistoryProps) {
  const { user } = useUser();
  const { language } = useLanguage();
  const queryClient = useQueryClient();

  const [selectedHistory, setSelectedHistory] = useState<HistoryType>(histories[histories.length - 1] || {});
  const [selectedHistoryIdx, setSelectedHistoryIdx] = useState<number>(histories.length - 1);

  const {
    isOn: isHistorySelectionOpen,
    handleSetOff: closeHistorySelection,
    handleSetOn: openHistorySelection,
  } = useBooleanOutput();
  const { isOn: isDeleteModalOn, handleSetOff: closeDeleteModal, handleSetOn: openDeleteModal } = useBooleanOutput();
  const { isOn: isPublicModalOn, handleSetOff: closePublicModal, handleSetOn: openPublicModal } = useBooleanOutput();

  const { mutate: togglePublicMutation } = useMutation({
    mutationFn: toggleHistoryPublic,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.getHistories, listId],
      });
    },
  });

  const { mutate: deleteMutation } = useMutation({
    mutationFn: deleteHistory,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.deleteHistory, listId],
      });
      setSelectedHistory(histories[0]);
      setSelectedHistoryIdx(0);
      // TODO: 삭제 토스트 띄우기
    },
  });

  const historySelectOption = histories
    .filter((history) => {
      return user.id === listOwnerId || history.isPublic;
    })
    .map((history, idx) => {
      return {
        key: String(history.id),
        title: `${idx + 1}번째 히스토리: ${timeDiff(String(history.createdDate))}`,
        onClick: () => {
          setSelectedHistory(history);
          setSelectedHistoryIdx(idx);
        },
      };
    });

  const handleTogglePublic = () => {
    openPublicModal();

    setSelectedHistory((prevHistory) => ({
      ...prevHistory,
      isPublic: !prevHistory.isPublic,
    }));

    togglePublicMutation(
      { historyId: selectedHistory.id },
      {
        onError: () => {
          setSelectedHistory((prevHistory) => ({
            ...prevHistory,
            isPublic: !prevHistory.isPublic,
          }));
        },
      }
    );
  };

  const handleDeleteHistory = () => {
    deleteMutation({ historyId: selectedHistory.id });
    closeDeleteModal();
  };

  return (
    <>
      {user.id === listOwnerId ? (
        <div className={styles.container}>
          {histories.length !== 0 && (
            <>
              <button className={styles.dateDropdown} onClick={openHistorySelection}>
                {timeDiff(String(selectedHistory.createdDate))}
                <ArrowDown alt={listLocale[language].arrowDownAlt} />
              </button>
              <div className={styles.iconWrapper}>
                <button className={styles.iconButton} onClick={handleTogglePublic}>
                  {selectedHistory.isPublic ? (
                    <EyeIcon className={styles.eyeIcon} />
                  ) : (
                    <EyeSlashIcon className={styles.eyeIcon} />
                  )}
                </button>
                <button className={styles.iconButton} onClick={openDeleteModal}>
                  <DeleteIcon className={styles.deleteIcon} />
                </button>
              </div>
            </>
          )}
        </div>
      ) : (
        <div className={styles.container}>
          {histories.length !== 0 && (
            <>
              <button className={styles.dateDropdown} onClick={openHistorySelection}>
                {timeDiff(String(selectedHistory.createdDate))}
                <ArrowDown alt={listLocale[language].arrowDownAlt} />
              </button>
            </>
          )}
        </div>
      )}

      {histories.length === 0 ? (
        <div className={styles.noDataImage}>
          <NoDataComponent message={listLocale[language].noHistory} />
        </div>
      ) : (
        <>
          <div className={styles.title}>{selectedHistoryIdx + 1}번째 히스토리</div>
          <div className={styles.date}>{timeDiff(String(selectedHistory?.createdDate))}</div>
          <div className={styles.itemsContainer}>
            {selectedHistory?.items
              .sort((a, b) => a.rank - b.rank)
              .map((item) => <Item key={item.id} rank={item.rank} title={item.title} />)}
          </div>
        </>
      )}

      {isHistorySelectionOpen && (
        <BottomSheet
          onClose={closeHistorySelection}
          optionList={historySelectOption}
          isActive={isHistorySelectionOpen}
        />
      )}

      {isPublicModalOn && (
        <Modal handleModalClose={closePublicModal}>
          <Modal.Title>
            {selectedHistory.isPublic ? modalLocale[language].setPublic : modalLocale[language].setPrivate}
          </Modal.Title>
          <Modal.SingleButton onClick={closePublicModal}>{modalLocale[language].confirm}</Modal.SingleButton>
        </Modal>
      )}
      {isDeleteModalOn && (
        <Modal handleModalClose={closeDeleteModal}>
          <Modal.Title>
            {modalLocale[language].deleteHistory1}
            <br />
            {modalLocale[language].deleteHistory2}
          </Modal.Title>
          <Modal.Button onCancel={closeDeleteModal} onClick={handleDeleteHistory}>
            {modalLocale[language].confirm}
          </Modal.Button>
        </Modal>
      )}
    </>
  );
}

interface ItemProp {
  rank: number;
  title: string;
}
function Item({ rank, title }: ItemProp) {
  return (
    <div className={styles.itemContainer}>
      <div className={styles.itemRank}>{rank}</div>
      <div className={styles.itemTitle}>{title}</div>
    </div>
  );
}

export { HistoryVersions as Version };
