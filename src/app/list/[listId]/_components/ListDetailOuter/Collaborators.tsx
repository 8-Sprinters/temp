import Image from 'next/image';
import * as styles from './Collaborators.css';
import PlusIcon from '/public/icons/collaborators_plus.svg';
import { UserProfileType } from '@/lib/types/userProfileType';
import FallbackProfile from '/public/icons/fallback_profile.svg';
import { useLanguage } from '@/store/useLanguage';
import { listLocale } from '@/app/list/[listId]/locale';

interface CollaboratorsProps {
  collaborators?: UserProfileType[];
}

function Collaborators({ collaborators }: CollaboratorsProps) {
  const { language } = useLanguage();
  //콜라보레이터 목록이 3명 이상일 경우, 3명의 프로필 이미지만 보이고 그 이외에는 +로 처리하기 위한 로직
  const MAX_NUMBER = 3;
  const collaboratorsList =
    collaborators && collaborators?.length >= MAX_NUMBER ? collaborators?.slice(0, MAX_NUMBER) : collaborators;

  return (
    <>
      {collaborators && (
        <div className={styles.collaboratorWrapper}>
          <div className={styles.wrapper}>
            {collaborators.length > MAX_NUMBER && (
              <div className={`${styles.profileImage} ${styles.profilePlus}`}>
                <span className={styles.profileText}>{`${collaborators && collaborators?.length - 3}`}</span>
                <PlusIcon alt={listLocale[language].plusButtonAlt} />
              </div>
            )}
            {collaboratorsList?.map((item: UserProfileType) => {
              return (
                <div key={item.id} className={styles.profileImageParent}>
                  {item.profileImageUrl ? (
                    <Image
                      className={styles.profileImage}
                      src={item.profileImageUrl}
                      alt={listLocale[language].profileImageAlt}
                      fill
                      style={{
                        objectFit: 'cover',
                      }}
                    />
                  ) : (
                    <FallbackProfile width={35} height={35} alt="존재하지 않는 사용자 프로필 이미지" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default Collaborators;
