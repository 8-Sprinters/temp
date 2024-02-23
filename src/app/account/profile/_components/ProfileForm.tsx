import { useFormContext, useWatch } from 'react-hook-form';
import { ChangeEvent, useState } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';

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
} from '@/lib/constants/formInputValidationRules';
import { QUERY_KEYS } from '@/lib/constants/queryKeys';
import { DefaultImagesType, UserProfileEditType } from '@/lib/types/userProfileType';
import toastMessage from '@/lib/constants/toastMessage';
import toasting from '@/lib/utils/toasting';

import * as styles from './ProfileForm.css';
import { assignInlineVars } from '@vanilla-extract/dynamic';

const MockBackground = ['기본배경B', '기본배경C', '기본배경D', '기본배경E', '기본배경F', '기본배경G'];
const MockProfile = ['B', 'C', 'D', 'E'];

interface ProfileFormProps {
  userNickname: string;
  onProfileChange: (arg: File | string) => void;
  onBackgroundChange: (arg: File | string) => void;
}

export default function ProfileForm({ userNickname, onProfileChange, onBackgroundChange }: ProfileFormProps) {
  const [isNicknameValidated, setIsNicknameValidated] = useState(false);
  const {
    register,
    control,
    setError,
    getValues,
    setValue,
    formState: { errors },
  } = useFormContext<UserProfileEditType>();

  //닉네임 중복 검사
  const nicknameRegister = register('nickname', nicknameRules);

  const { data: defaultBackgroundImages } = useQuery<DefaultImagesType>({
    queryKey: [QUERY_KEYS.getDefaultBackgroundImages],
    queryFn: getDefaultBackgroundImages,
  });

  const { data: defaultProfileImages } = useQuery<DefaultImagesType>({
    queryKey: [QUERY_KEYS.getDefaultProfileImages],
    queryFn: getDefaultProfileImages,
  });

  const { mutate: checkNickname } = useMutation({
    mutationFn: checkNicknameDuplication,
    onSuccess: (result) => {
      setIsNicknameValidated(!result);
      if (result) {
        setError('nickname', nicknameDuplicateRules);
      }
    },
  });

  const debouncedOnNicknameChange = useDebounce<typeof checkNickname>(checkNickname, 500);
  const handleNicknameChange = (e: ChangeEvent<HTMLInputElement>) => {
    nicknameRegister.onChange(e);
    setIsNicknameValidated(false);
    if (e.target.value && e.target.value !== userNickname) {
      debouncedOnNicknameChange(e.target.value);
    }
  };

  //글자수세기
  const watchDescription = useWatch({ control, name: 'description' });

  //이미지 미리보기
  const newBackgroundImageRegister = register('newBackgroundFileList');
  const newProfileImageRegister = register('newProfileFileList');

  const MAX_IMAGE_INPUT_SIZE_MB = 50 * 1024 * 1024; //50MB

  const handleBackgroundChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const targetFile = e.target.files[0];
      if (targetFile?.size > MAX_IMAGE_INPUT_SIZE_MB) {
        toasting({ type: 'error', txt: toastMessage.ko.imageSizeError });
      } else {
        newBackgroundImageRegister.onChange(e);
        onBackgroundChange(e.target.files[0]);
      }
    }
  };

  const handleProfileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const targetFile = e.target.files[0];
      if (targetFile?.size > MAX_IMAGE_INPUT_SIZE_MB) {
        toasting({ type: 'error', txt: toastMessage.ko.imageSizeError });
      } else {
        newProfileImageRegister.onChange(e);
        onProfileChange(e.target.files[0]);
      }
    }
  };

  const handleDefaultImageClick = (type: 'background' | 'profile', imageUrl: string) => {
    if (type === 'profile') {
      onProfileChange(imageUrl);
      setValue('profileImageUrl', imageUrl, { shouldDirty: true });
    } else {
      onBackgroundChange(imageUrl);
      setValue('backgroundImageUrl', imageUrl, { shouldDirty: true });
    }
  };

  return (
    <>
      <div className={styles.form}>
        {/* 닉네임 */}
        <div>
          <div className={styles.inputContainer}>
            <label className={styles.label}>닉네임</label>
            <input
              className={styles.inputText}
              placeholder={profilePlaceholder.nickname}
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
              <ErrorIcon alt="닉네임 중복 검사 결과 실패" />
              <span className={styles.errorText}>{errors?.nickname?.message}</span>
            </div>
          ) : (
            getValues('nickname') !== userNickname &&
            isNicknameValidated && (
              <div className={styles.validationMessage}>
                <CheckIcon alt="닉네임 중복 검사 결과 성공" />
                <span className={styles.successText}>사용 가능한 닉네임이에요.</span>
              </div>
            )
          )}
        </div>

        <div>
          <div className={styles.inputContainer}>
            <label className={styles.label}>소개</label>
            <textarea
              className={styles.textarea}
              placeholder={profilePlaceholder.description}
              autoComplete="off"
              {...register('description', profileDescriptionRules)}
            />
            <span className={styles.textLength}>{`${watchDescription?.length}/160`}</span>
          </div>
          {errors.description && (
            <div className={styles.validationMessage}>
              <ErrorIcon alt="소개 에러" />
              <span className={styles.errorText}>{errors?.description?.message}</span>
            </div>
          )}
        </div>

        <div className={styles.inputContainer}>
          <p className={styles.label}>배경이미지</p>
          <div className={styles.backgroundOptionContainer}>
            <label className={`${styles.backgroundOption} ${styles.inputFileLabel}`} htmlFor="backgroundImage">
              <Camera />
            </label>
            <input
              type="file"
              id="backgroundImage"
              className={styles.inputFile}
              accept=".jpg, .jpeg, .png"
              {...newBackgroundImageRegister}
              onChange={(e) => handleBackgroundChange(e)}
            />
            {defaultBackgroundImages?.map((image) => (
              <button
                key={image.name}
                type="button"
                className={styles.backgroundOption}
                style={assignInlineVars({
                  [styles.imageUrl]: `url(${image?.imageUrl})`,
                })}
                onClick={() => {
                  handleDefaultImageClick('background', image.imageUrl);
                }}
              />
            ))}
            {MockBackground.map((image, index) => (
              <button key={`defaultBackgroundImage${index}`} type="button" className={styles.backgroundOption}>
                {image}
              </button>
            ))}
          </div>
        </div>
        <div className={styles.inputContainer}>
          <p className={styles.label}>프로필이미지</p>
          <div className={styles.profileOptionContainer}>
            <label className={`${styles.profileOption} ${styles.inputFileLabel}`} htmlFor="profileImage">
              <Camera />
            </label>
            <input
              type="file"
              id="profileImage"
              className={styles.inputFile}
              accept=".jpg, .jpeg, .png"
              {...newProfileImageRegister}
              onChange={(e) => handleProfileChange(e)}
            />
            {defaultProfileImages?.map((image) => (
              <button
                key={image.name}
                type="button"
                className={styles.profileOption}
                style={assignInlineVars({
                  [styles.imageUrl]: `url(${image?.imageUrl})`,
                })}
                onClick={() => {
                  handleDefaultImageClick('profile', image.imageUrl);
                }}
              />
            ))}
            {MockProfile.map((image, index) => (
              <button key={`defaultProfileImage${index}`} type="button" className={styles.profileOption}>
                {image}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
