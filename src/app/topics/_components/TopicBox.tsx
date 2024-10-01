import { TopicType } from '@/lib/types/topicType';
import * as styles from './TopicBox.css';
import PlusIcon from '/public/images/plus_gray.svg';

interface TopicBoxProps {
  topic: TopicType;
}

function TopicBox({ topic }: TopicBoxProps) {
  return (
    <div className={styles.container}>
      <div className={styles.topicWrapper}>
        <div className={styles.category}>{topic.categoryKorName}</div>
        <div className={styles.topic}>{topic.title}</div>
      </div>
      <div className={styles.contentWrapper}>
        <div>{topic.description}</div>
      </div>
      <div className={styles.bottomWrapper}>
        <div className={styles.author}>{topic.ownerNickname}</div>
      </div>
      {/* <button className={styles.addBtn}>
        <PlusIcon />
      </button> */}
    </div>
  );
}

export default TopicBox;
