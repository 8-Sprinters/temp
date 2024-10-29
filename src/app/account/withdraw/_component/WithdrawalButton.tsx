'use client';

import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';

import withdraw from '@/app/_api/user/withdraw';
import { accountLocale } from '@/app/account/locale';
import toasting from '@/lib/utils/toasting';
import { removeCookie } from '@/lib/utils/cookie';
import toastMessage from '@/lib/constants/toastMessage';
import useBooleanOutput from '@/hooks/useBooleanOutput';
import { useUser } from '@/store/useUser';
import { useLanguage } from '@/store/useLanguage';
import Modal from '@/components/Modal/Modal';
import * as styles from './AgreementConfirmation.css';

interface WithdrawalButtonProps {
  isDisabled: boolean;
}

export default function WithdrawalButton({ isDisabled }: WithdrawalButtonProps) {
  const { language } = useLanguage();
  const { isOn, handleSetOn, handleSetOff } = useBooleanOutput(false);
  const router = useRouter();
  const { logoutUser } = useUser();

  //회원탈퇴 진행
  const { mutate: withdrawMutate } = useMutation({
    mutationFn: withdraw,
    onSuccess: () => {
      //사용자 상태 초기화
      logoutUser();
      //쿠키 삭제
      removeCookie('accessToken');
      removeCookie('refreshToken');

      toasting({ type: 'success', txt: toastMessage[language].withdraw });
      router.replace('/');
    },
    onError: () => {
      toasting({ type: 'error', txt: toastMessage[language].withdrawError });
    },
  });

  return (
    <>
      <button className={styles.confirmButton} disabled={isDisabled} onClick={handleSetOn}>
        {accountLocale[language].withdraw}
      </button>
      {isOn && (
        <Modal handleModalClose={handleSetOff}>
          <Modal.Title>{accountLocale[language].withdrawModalMessage}</Modal.Title>
          <Modal.Button
            onCancel={handleSetOff}
            onClick={() => {
              withdrawMutate();
            }}
          >
            {accountLocale[language].confirm}
          </Modal.Button>
        </Modal>
      )}
    </>
  );
}
