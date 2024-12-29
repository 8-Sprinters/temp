import { MouseEventHandler, ReactNode } from 'react';
import { useLanguage } from '@/store/useLanguage';
import { modalLocale } from '@/app/list/[listId]/locale';
import Modal from '@/components/Modal/Modal';

interface DeleteModalProps {
  children?: ReactNode;
  handleClose: () => void;
  handleDelete: MouseEventHandler<HTMLButtonElement>;
  handleCancel: MouseEventHandler<HTMLButtonElement>;
}

export default function DeleteModal({ children, handleClose, handleDelete, handleCancel }: DeleteModalProps) {
  const { language } = useLanguage();

  return (
    <Modal handleModalClose={handleClose}>
      <Modal.Title>{modalLocale[language].deleteMessage}</Modal.Title>
      {children}
      <Modal.Button onCancel={handleCancel} onClick={handleDelete}>
        {modalLocale[language].confirm}
      </Modal.Button>
    </Modal>
  );
}
