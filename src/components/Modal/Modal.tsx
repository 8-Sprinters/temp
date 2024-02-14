import { ReactNode } from 'react';
import ModalPortal from '@/components/ModalPortal';
import * as styles from './Modal.css';
import ModalTitle from './ModalTitle';
import ModalButton from './ModalButton';
import useOnClickOutside from '@/hooks/useOnClickOutside';

interface ModalMainProps {
  size?: string;
  children?: ReactNode;
  handleModalClose: () => void;
}

function ModalMain({ size = 'basic', children, handleModalClose }: ModalMainProps) {
  const { ref } = useOnClickOutside(() => {
    handleModalClose();
  });

  return (
    <ModalPortal>
      <div className={styles.background}>
        <div ref={ref} className={styles.sizeVariants[size]}>
          {children}
        </div>
      </div>
    </ModalPortal>
  );
}

const Modal = Object.assign(ModalMain, {
  Title: ModalTitle,
  Button: ModalButton,
});

export default Modal;
