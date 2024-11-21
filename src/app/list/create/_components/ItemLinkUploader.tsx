import { useForm, useFormContext, useWatch } from 'react-hook-form';

import { itemLinkRules } from '@/lib/constants/formInputValidationRules';
import useBooleanOutput from '@/hooks/useBooleanOutput';
import { useLanguage } from '@/store/useLanguage';
import Modal from '@/components/Modal/Modal';
import { listLocale } from '@/app/list/create/locale';

import LinkIcon from '/public/icons/link.svg';
import * as styles from './ItemLinkUploader.css';

interface ItemLinkUploader {
  index: number;
}

export default function ItemLinkUploader({ index }: ItemLinkUploader) {
  const { language } = useLanguage();
  const { isOn, handleSetOff, handleSetOn } = useBooleanOutput();

  /** React-Hook-Form */
  //--- 상위Form(기존 생성 Form)
  const { getValues, setValue } = useFormContext();

  //--- LinkInput(새로운 Form)
  const {
    register,
    control,
    setValue: setCurrentLink,
    formState: { errors: linkError, isValid },
  } = useForm<{ newLink: string }>({
    mode: 'onChange',
    defaultValues: {
      newLink: '',
    },
  });

  const watchLink = useWatch({ control, name: 'newLink' });

  /** Modal */
  //--placeholder
  const linkExample = 'https://listywave.com';

  //--- 링크 아이콘 클릭(open)
  const handleOpenClick = () => {
    setCurrentLink('newLink', getValues().items[index]?.link, { shouldValidate: true });
    handleSetOn(); //열기
  };

  //--- 확인 버튼 클릭
  // http:// 없을경우 추가
  const ensureHttp = (link: string) => {
    if (!link.startsWith('http://') && !link.startsWith('https://')) {
      return 'http://' + link;
    }
    return link;
  };

  const handleConfirmButtonClick = () => {
    if (watchLink) {
      setValue(`items.${index}.link`, ensureHttp(watchLink));
    }
    handleSetOff(); //닫기
  };

  return (
    <>
      <LinkIcon className={styles.linkIcon} width={17} height={17} onClick={handleOpenClick} />
      {isOn && (
        <Modal size="basic" handleModalClose={handleSetOff}>
          <Modal.Title>{listLocale[language].addLink}</Modal.Title>
          <div className={styles.linkModalChildren}>
            <input
              className={styles.linkInput}
              type="url"
              placeholder={linkExample}
              autoComplete="off"
              {...register('newLink', itemLinkRules)}
            />
            {watchLink.length !== 0 && linkError && <p className={styles.error}>{linkError.newLink?.message}</p>}
          </div>
          <Modal.Button isDisabled={!isValid} onCancel={handleSetOff} onClick={handleConfirmButtonClick}>
            {listLocale[language].done}
          </Modal.Button>
        </Modal>
      )}
    </>
  );
}
