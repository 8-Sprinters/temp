import * as styles from './TopicBox.css';
import PlusIcon from '/public/images/plus_gray.svg';

function TopicBox() {
  return (
    <div className={styles.container}>
      <div className={styles.topicWrapper}>
        <div className={styles.category}>카테고리</div>
        <div className={styles.topic}>제목</div>
      </div>
      <div className={styles.contentWrapper}>
        <div>본문와랄랄라랸냔ㅁ냠냠냠유르릉쾅쾅짹짹삐약</div>
      </div>
      <div className={styles.bottomWrapper}>
        <div className={styles.author}>작성자</div>
      </div>
      {/* <button className={styles.addBtn}>
        <PlusIcon />
      </button> */}
    </div>
  );
}

export default TopicBox;
