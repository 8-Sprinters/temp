import { useForm, useWatch, useFormContext } from 'react-hook-form';

import LinkIcon from '/public/icons/link.svg';

import Modal from '@/components/Modal/Modal';
import useBooleanOutput from '@/hooks/useBooleanOutput';
import { vars } from '@/styles/__theme.css';
import { useLanguage } from '@/store/useLanguage';
import { itemLocale } from '@/app/list/create/locale';
import { itemPlaceholder } from '@/lib/constants/placeholder';
import { itemLinkRules } from '@/lib/constants/formInputValidationRules';

import * as styles from './LinkModal.css';
interface LinkModalProps {
  index: number;
}

interface LinkInputFormType {
  newLink: string;
}

// http:// 없을경우 추가
const ensureHttp = (link: string) => {
  if (!link.startsWith('http://') && !link.startsWith('https://')) {
    return 'http://' + link;
  }
  return link;
};

export default function LinkModal({ index }: LinkModalProps) {
  const {
    register,
    control,
    setValue: setCurrentLink,
    formState: { errors: linkError, isValid },
  } = useForm<LinkInputFormType>({
    mode: 'onChange',
    defaultValues: {
      newLink: '',
    },
  });

  const { getValues, setValue } = useFormContext();
  const { language } = useLanguage();
  const { isOn, handleSetOff, handleSetOn } = useBooleanOutput();
  const watchLink = useWatch({ control, name: 'newLink' });
  //버튼 클릭 이벤트
  const handleOpenClick = () => {
    setCurrentLink('newLink', getValues().items[index]?.link, { shouldValidate: true });
    handleSetOn();
  };

  const handleConfirmButtonClick = () => {
    if (watchLink) {
      setValue(`items.${index}.link`, ensureHttp(watchLink));
    }
    handleSetOff();
  };

  return (
    <>
      <button className={styles.button} onClick={handleOpenClick}>
        <LinkIcon fill={vars.color.gray9} />
      </button>
      {isOn && (
        <Modal size="basic" handleModalClose={handleSetOff}>
          <Modal.Title>{itemLocale[language].addLink}</Modal.Title>
          <div className={styles.linkModalChildren}>
            <input
              className={styles.linkInput}
              type="url"
              placeholder={itemPlaceholder[language].link}
              autoComplete="off"
              {...register('newLink', itemLinkRules)}
            />
            {watchLink.length !== 0 && linkError && <p className={styles.error}>{linkError.newLink?.message}</p>}
          </div>
          <Modal.Button isDisabled={!isValid} onCancel={handleSetOff} onClick={handleConfirmButtonClick}>
            {itemLocale[language].confirm}
          </Modal.Button>
        </Modal>
      )}
    </>
  );
}
