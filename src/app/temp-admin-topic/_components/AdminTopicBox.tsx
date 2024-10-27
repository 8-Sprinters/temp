import { RequestedTopicType } from '@/lib/types/requestedTopicType';
import * as styles from './AdminTopicBox.css';

interface TopicBoxProps {
  topic: RequestedTopicType;
  onClick: () => void;
}

function TopicBox({ topic, onClick }: TopicBoxProps) {
  return (
    <div className={styles.container} onClick={onClick}>
      <div className={styles.topicWrapper}>
        <div className={styles.category}>{topic.categoryKorName}</div>
        <div className={styles.topic}>{topic.title}</div>
      </div>
      <div className={styles.contentWrapper}>
        <div>{topic.description}</div>
      </div>
      <div className={styles.bottomWrapper}>
        <div className={styles.author}>{topic.isAnonymous ? '익명' : topic.ownerNickname}</div>
      </div>
      {/* <button className={styles.addBtn}>
        <PlusIcon />
      </button> */}
    </div>
  );
}

export default TopicBox;
