import { useFormContext, useWatch } from 'react-hook-form';
import { ChangeEvent, useEffect, useState } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import { assignInlineVars } from '@vanilla-extract/dynamic';

import Camera from '/public/icons/camera.svg';
import ErrorIcon from '/public/icons/error_x.svg';
import CheckIcon from '/public/icons/check_blue.svg';

import checkNicknameDuplication from '@/app/_api/user/checkNicknameDuplication';
import getDefaultBackgroundImages from '@/app/_api/user/getDefaultBackgroundImages';
import getDefaultProfileImages from '@/app/_api/user/getDefaultProfileImages';

import useDebounce from '@/hooks/useDebounce';
import { profilePlaceholder } from '@/lib/constants/placeholder';
import {
  nicknameRules,
  profileDescriptionRules,
  nicknameDuplicateRules,
  nicknamePolicyRules,
} from '@/lib/constants/formInputValidationRules';
import { QUERY_KEYS } from '@/lib/constants/queryKeys';
import { DefaultImagesType, UserProfileEditType } from '@/lib/types/userProfileType';
import toastMessage from '@/lib/constants/toastMessage';
import toasting from '@/lib/utils/toasting';

import * as styles from './ProfileForm.css';
import { useLanguage } from '@/store/useLanguage';
import { accountLocale } from '@/app/account/locale';
import ProfileSkeleton from './ProfileSkeleton';
import checkNicknamePolicy from '@/app/_api/user/checkNicknamePolicy';
import axios from 'axios';

interface ProfileFormProps {
  userNickname: string;
  handleProfilePreviewChange: (arg: File | string) => void;
  handleBackgroundPreviewChange: (arg: File | string) => void;
}

export default function ProfileForm({
  userNickname,
  handleProfilePreviewChange,
  handleBackgroundPreviewChange,
}: ProfileFormProps) {
  const { language } = useLanguage();
  const [isNicknameValidated, setIsNicknameValidated] = useState(false);
  const [selectedBackground, setSelectedBackground] = useState('');
  const [selectedProfile, setSelectedProfile] = useState('');

  const {
    register,
    control,
    setError,
    getValues,
    setValue,
    formState: { errors },
  } = useFormContext<UserProfileEditType>();

  //기본 이미지 조회
  const { data: defaultBackgroundImages } = useQuery<DefaultImagesType>({
    queryKey: [QUERY_KEYS.getDefaultBackgroundImages],
    queryFn: getDefaultBackgroundImages,
  });

  const { data: defaultProfileImages } = useQuery<DefaultImagesType>({
    queryKey: [QUERY_KEYS.getDefaultProfileImages],
    queryFn: getDefaultProfileImages,
  });

  //--- 닉네임 검사
  const nicknameRegister = register('nickname', nicknameRules);

  //중복검사
  const { mutate: checkNickname } = useMutation({
    mutationFn: checkNicknameDuplication,
    onSuccess: (result) => {
      setIsNicknameValidated(!result);
      if (result) {
        setError('nickname', nicknameDuplicateRules);
      }
    },
  });

  //유효성 검사(정책에 어긋나는지)
  const { mutate: checkNicknameAllowed } = useMutation({
    mutationFn: checkNicknamePolicy,
    onSuccess: (result) => {
      setIsNicknameValidated(result);
    },
    onError: (error) => {
      // error 객체가 axios 에러인지 확인
      if (axios.isAxiosError(error) && error.response?.status === 400) {
        setError('nickname', nicknamePolicyRules);
      }
    },
  });

  const debouncedOnNicknameChange = useDebounce<(value: string) => void>((value) => {
    checkNicknameAllowed(value); // 정책 검사
    checkNickname(value); // 중복 검사
  }, 500);

  const handleNicknameChange = (e: ChangeEvent<HTMLInputElement>) => {
    nicknameRegister.onChange(e);
    setIsNicknameValidated(false);
    if (e.target.value && e.target.value !== userNickname) {
      debouncedOnNicknameChange(e.target.value);
    }
  };

  //글자수세기
  const watchDescription = useWatch({ control, name: 'description' });

  //이미지 업로드
  const newBackgroundImageRegister = register('newBackgroundFileList');
  const newProfileImageRegister = register('newProfileFileList');

  const MAX_IMAGE_INPUT_SIZE_MB = 50 * 1024 * 1024; //50MB

  const handleBackgroundFileInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const targetFile = e.target.files[0];
      if (targetFile?.size > MAX_IMAGE_INPUT_SIZE_MB) {
        toasting({ type: 'error', txt: toastMessage[language].imageSizeError });
      } else {
        newBackgroundImageRegister.onChange(e);
        handleBackgroundPreviewChange(e.target.files[0]);
        setValue('backgroundImageUrl', '');
        setSelectedBackground('file');
      }
    }
  };

  const handleProfileFileInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const targetFile = e.target.files[0];
      if (targetFile?.size > MAX_IMAGE_INPUT_SIZE_MB) {
        toasting({ type: 'error', txt: toastMessage[language].imageSizeError });
      } else {
        newProfileImageRegister.onChange(e);
        handleProfilePreviewChange(e.target.files[0]);
        setValue('profileImageUrl', '');
        setSelectedProfile('file');
      }
    }
  };

  //기본 이미지 선택
  const handleDefaultImageClick = (type: 'background' | 'profile', imageUrl: string) => {
    if (type === 'profile') {
      handleProfilePreviewChange(imageUrl);
      setValue('profileImageUrl', imageUrl, { shouldDirty: true });
      setValue('newProfileFileList', null);
      setSelectedProfile(imageUrl);
    } else {
      handleBackgroundPreviewChange(imageUrl);
      setValue('backgroundImageUrl', imageUrl, { shouldDirty: true });
      setValue('newBackgroundFileList', null);
      setSelectedBackground(imageUrl);
    }
  };

  //선택 이미지 표시
  useEffect(() => {
    setSelectedBackground(getValues('backgroundImageUrl') as string);
    setSelectedProfile(getValues('profileImageUrl') as string);
  }, []);

  return (
    <>
      {!defaultProfileImages ? (
        <ProfileSkeleton />
      ) : (
        <div className={styles.form}>
          {/* 닉네임 */}
          <div className={styles.field}>
            <label className={styles.label}>{accountLocale[language].nickname}</label>
            <div className={styles.inputContainer}>
              <input
                className={styles.inputText}
                placeholder={profilePlaceholder[language].nickname}
                maxLength={10}
                autoComplete="off"
                {...nicknameRegister}
                onChange={(e) => {
                  handleNicknameChange(e);
                }}
              />
            </div>
            {errors.nickname ? (
              <div className={styles.validationMessage}>
                <ErrorIcon alt={accountLocale[language].nicknameDuplicateFail} />
                <span className={styles.errorText}>{errors?.nickname?.message}</span>
              </div>
            ) : (
              getValues('nickname') !== userNickname &&
              isNicknameValidated && (
                <div className={styles.validationMessage}>
                  <CheckIcon alt={accountLocale[language].nicknameDuplicateSuccess} />
                  <span className={styles.successText}>{accountLocale[language].nicknameDuplicateSuccessMessage}</span>
                </div>
              )
            )}
          </div>

          <div className={styles.field}>
            <label className={styles.label}>{accountLocale[language].introduce}</label>
            <div className={styles.inputContainer}>
              <textarea
                className={styles.textarea}
                placeholder={profilePlaceholder[language].description}
                autoComplete="off"
                {...register('description', profileDescriptionRules)}
              />
              <span className={styles.textLength}>{`${watchDescription?.length}/160`}</span>
            </div>
            {errors.description && (
              <div className={styles.validationMessage}>
                <ErrorIcon alt={accountLocale[language].introduceError} />
                <span className={styles.errorText}>{errors?.description?.message}</span>
              </div>
            )}
          </div>

          <div className={styles.field}>
            <span className={styles.label}>{accountLocale[language].backgroundImage}</span>
            <div className={styles.inputContainer}>
              <div className={styles.backgroundOptionContainer}>
                <label className={styles.backgroundOption} htmlFor="backgroundImage">
                  <Camera />
                </label>
                <input
                  type="file"
                  id="backgroundImage"
                  className={styles.inputFile}
                  accept=".jpg, .jpeg, .png"
                  {...newBackgroundImageRegister}
                  onChange={(e) => handleBackgroundFileInput(e)}
                />
                {defaultBackgroundImages?.map((image) => (
                  <button
                    key={image.name}
                    type="button"
                    className={`${styles.backgroundOption} ${selectedBackground === image.imageUrl ? styles.selectedOption : ''}`}
                    style={assignInlineVars({
                      [styles.imageUrl]: `url(${image?.imageUrl})`,
                    })}
                    onClick={() => {
                      handleDefaultImageClick('background', image.imageUrl);
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className={styles.field}>
            <span className={styles.label}>{accountLocale[language].profileImageAlt}</span>
            <div className={styles.inputContainer}>
              <div className={styles.profileOptionContainer}>
                <label className={styles.profileOption} htmlFor="profileImage">
                  <Camera />
                </label>
                <input
                  type="file"
                  id="profileImage"
                  className={styles.inputFile}
                  accept=".jpg, .jpeg, .png"
                  {...newProfileImageRegister}
                  onChange={(e) => handleProfileFileInput(e)}
                />
                {defaultProfileImages?.map((image) => (
                  <button
                    key={image.name}
                    type="button"
                    className={`${styles.profileOption} ${selectedProfile === image.imageUrl ? styles.selectedOption : ''}`}
                    style={assignInlineVars({
                      [styles.imageUrl]: `url(${image?.imageUrl})`,
                    })}
                    onClick={() => {
                      handleDefaultImageClick('profile', image.imageUrl);
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
