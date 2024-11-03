import { useState } from 'react';
import { useFieldArray, useFormContext, useWatch } from 'react-hook-form';
import { useLanguage } from '@/store/useLanguage';
import { vars } from '@/styles/theme.css';
import { BACKGROUND_COLOR_CREATE, BACKGROUND_COLOR_PALETTE_TYPE } from '@/styles/Color';
import { listPlaceholder } from '@/lib/constants/placeholder';
import Header from '@/components/Header/Header';
import { listLocale } from '@/app/list/create/locale';

import DeleteIcon from '/public/icons/close_button.svg';
import SelectIcon from '/public/icons/check_white.svg';
import * as styles from './Step.css';

interface StepThreeProps {
  onBeforeClick: () => void;
  onNextClick: () => void;
  type: 'create' | 'edit';
  isSubmitting: boolean;
}

export default function StepThree({ onBeforeClick, onNextClick, type, isSubmitting }: StepThreeProps) {
  const { language } = useLanguage();

  /** react-hook-form */
  const {
    register,
    control,
    getValues,
    setValue,
    setError,
    clearErrors,
    formState: { errors },
  } = useFormContext();

  const { fields, append, remove } = useFieldArray({ control, name: 'labels' });

  const watchLabels = useWatch({ control, name: 'labels' });

  /** 태그(라벨) */
  const isValidLabel = (label: string): boolean => {
    const reg = /^[a-zA-Z0-9가-힣]{1,10}$/;
    return reg.test(label);
  };

  const isOverLength = (label: string): boolean => {
    return label.length > 10;
  };

  const isDuplicatedLabel = (label: string): boolean => {
    return watchLabels.some((existingLabel: string) => existingLabel.toLowerCase() === label.toLowerCase());
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    //자음모음 결합 중일 경우 return
    if (e.nativeEvent.isComposing) {
      return;
    }
    //Enter, Space 시 등록
    const label = e.currentTarget.value;

    if ((e.key === 'Enter' || e.key === ' ') && label) {
      e.preventDefault();

      //영어,숫자,한글만 가능하게 처리
      if (!isValidLabel(label)) {
        setError('labels', { type: 'pattern', message: '유효한 한글, 영어, 숫자만 입력해 주세요.' });
        return;
      }

      //3개 초과 에러처리
      if (fields.length === 3) {
        setError('labels', { type: 'maxLength', message: '태그는 3개까지 등록할 수 있어요.' });
        return;
      }
      console.log(fields);

      //중복라벨 에러처리
      if (isDuplicatedLabel(label)) {
        setError('labels', { type: 'unique', message: '이미 등록한 태그예요.' });
        return;
      }

      //최종 라벨 등록
      append(label); //라벨추가
      e.currentTarget.value = ''; //입력필드 비우기
    }
  };

  const handleDeleteLabel = (key: string) => {
    setValue(
      'labels',
      watchLabels.filter((label: string) => label !== key)
    );
    clearErrors('labels');
  };

  /** 배경색상*/
  const [selectedPalette, setSelectedPalette] = useState<BACKGROUND_COLOR_PALETTE_TYPE>(getValues('backgroundPalette'));
  const [selectedColorID, setSelectedColorID] = useState(getValues('backgroundColor'));

  const handleClickPalette = (palette: string) => {
    setSelectedPalette(palette as BACKGROUND_COLOR_PALETTE_TYPE);
  };

  const handleClickColor = (colorID: string) => {
    setSelectedColorID(colorID);
    setValue('backgroundColor', colorID);
    setValue('backgroundPalette', selectedPalette);
  };

  /** 공개여부 */
  const [isPublic, setIsPublic] = useState<boolean>(getValues('isPublic'));

  return (
    <>
      <Header
        title={'리스트 만들기'}
        left="back"
        leftClick={onBeforeClick}
        right={
          <button className={styles.nextButton} onClick={onNextClick} disabled={false}>
            {listLocale[language].publish}
          </button>
        }
      />
      <div className={styles.section}>
        {/* 태그(라벨) */}
        <div className={styles.field}>
          <label className={styles.label}>태그</label>
          <div className={styles.inputDiv}>
            <input
              className={styles.input}
              {...register('labels')}
              type="text"
              placeholder={listPlaceholder[language].label}
              autoComplete="off"
              onKeyDown={handleKeyDown}
              onChange={(e) => {
                clearErrors('labels');
                if (isOverLength(e.target.value)) {
                  setError('labels', { type: 'maxLength', message: '최대 10글자까지 입력할 수 있어요.' });
                }
              }}
            />
          </div>
          {/** end-inputDiv */}
          {errors.labels && <div className={styles.errorMessage}>{errors.labels?.message?.toString()}</div>}
          <div className={styles.labelList}>
            {watchLabels.map((label: string) => {
              return (
                <div key={label} className={styles.labelChip}>
                  {label}
                  <DeleteIcon
                    width={12}
                    height={12}
                    fill={vars.color.blue}
                    onClick={() => {
                      handleDeleteLabel(label);
                    }}
                  />
                </div>
              );
            })}
          </div>
          {/** end- 라벨 리스트 */}
        </div>
        {/** end-field(라벨) */}
        {/* 배경색상 */}
        <div className={styles.field}>
          <label className={styles.label}>
            배경 색상 <span className={styles.requiredIcon}>*</span>
          </label>
          <div className={styles.tapContainer}>
            {Object.keys(BACKGROUND_COLOR_CREATE).map((palette) => (
              <div
                key={palette}
                className={palette === selectedPalette ? styles.selectedTapButton : styles.tapButton}
                onClick={() => {
                  handleClickPalette(palette);
                }}
              >
                {palette}
              </div>
            ))}
          </div>
          {/** end-tapContainer(팔레트) */}
          <div className={styles.colorChipContainer}>
            {Object.values(BACKGROUND_COLOR_CREATE[selectedPalette].colors).map(({ colorID, hex }) => (
              <div
                key={colorID}
                className={styles.colorChip}
                style={{ backgroundColor: hex }}
                onClick={() => {
                  handleClickColor(colorID);
                }}
              >
                {selectedColorID === colorID && <SelectIcon width={27} height={19} stroke={vars.color.deepblue10} />}
              </div>
            ))}
          </div>
          {/**end-colorChipContainer(색) */}
        </div>
        {/** end-field(배경색상) */}
        {/* 공개여부 */}
        <div className={styles.field}>
          <label className={styles.label}>
            공개 여부 <span className={styles.requiredIcon}>*</span>
          </label>

          <div className={styles.radioContainer}>
            <div className={styles.radioOptionsWrapper}>
              <label className={styles.radioOption}>
                <input
                  className={styles.radioInput}
                  type="radio"
                  checked={isPublic}
                  onChange={(e) => {
                    setIsPublic(true);
                    setValue('isPublic', true);
                  }}
                />
                <span className={styles.radioLabel}>{listLocale[language].public}</span>
              </label>

              <label className={styles.radioOption}>
                <input
                  className={styles.radioInput}
                  type="radio"
                  checked={!isPublic}
                  onChange={(e) => {
                    setIsPublic(false);
                    setValue('isPublic', false);
                  }}
                />
                <span className={styles.radioLabel}>{listLocale[language].private}</span>
              </label>
            </div>
            {/** end-radioContainer */}

            <p className={styles.radioMessage}>
              {isPublic ? listLocale[language].publicMessage : listLocale[language].privateMessage}
            </p>
          </div>
        </div>
        {/** end-field(공개여부) */}
      </div>
      {/** end-section */}
    </>
  );
}
