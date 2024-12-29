import useBooleanOutput from '@/hooks/useBooleanOutput';
import * as styles from './ModalButtonStyle.css';
import DeleteButton from '/public/icons/trash_can.svg';
import { modalLocale } from '@/app/list/[listId]/locale';
import { useLanguage } from '@/store/useLanguage';
import DeleteModal from '@/components/DeleteModal/DeleteModal';

interface DeleteModalButtonProps {
  onDelete: () => void;
}

export default function DeleteModalButton({ onDelete }: DeleteModalButtonProps) {
  const { language } = useLanguage();
  const { isOn, handleSetOff, handleSetOn } = useBooleanOutput(); //모달 열림,닫힘 상태 관리
  const handleConfirmButtonClick = () => {
    onDelete();
    handleSetOff(); //닫기
  };

  return (
    <>
      {/*👆 누르면 모달이 열리는 트리거 버튼*/}
      <button onClick={handleSetOn} className={styles.resetButtonStyle}>
        <DeleteButton alt={modalLocale[language].deleteButtonAlt} fill="#AFB1B6" />
      </button>

      {/*✨ 조합한 모달 */}
      {isOn && (
        <DeleteModal handleClose={handleSetOff} handleDelete={handleConfirmButtonClick} handleCancel={handleSetOff} />
      )}
    </>
  );
}
