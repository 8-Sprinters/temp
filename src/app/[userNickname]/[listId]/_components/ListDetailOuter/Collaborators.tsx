import CollaboratorsPopOver from '@/app/[userNickname]/[listId]/_components/ListDetailOuter/CollaboratorsPopOver';
import * as styles from './Collaborators.css';
import DefaultProfile from '/public/icons/default_profile_temporary.svg';
import PlusIcon from '/public/icons/plus.svg';
import { CollaboratorType } from '../../mockData/mockdataType';

interface CollaboratorsProps {
  collaborators: CollaboratorType[] | null;
}

function Collaborators({ collaborators }: CollaboratorsProps) {
  const collaboratorsList = collaborators && collaborators?.length >= 3 ? collaborators?.slice(0, 3) : collaborators;

  return (
    <>
      {collaborators && (
        <div className={styles.collaboratorWrapper}>
          <div className={styles.collaboratorsPopOverWrapper}>
            <CollaboratorsPopOver collaborators={collaborators} />
          </div>
          <span className={styles.collaboratorTitle}>콜라보레이터</span>
          <div className={styles.wrapper}>
            <div className={`${styles.ProfileImg} ${styles.profilePlus}`}>
              <span className={styles.profileText}>{`${collaborators && collaborators?.length - 3}`}</span>
              <PlusIcon />
            </div>
            {collaboratorsList?.map((item: CollaboratorType) => {
              return (
                <div key={item.id}>
                  {item.profileImageUrl ? (
                    <img className={styles.ProfileImg} src={item.profileImageUrl}></img>
                  ) : (
                    <DefaultProfile className={`${styles.ProfileImg} ${styles.defaultProfile}`} />
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
