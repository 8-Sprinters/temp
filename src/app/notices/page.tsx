import NoticeList from './NoticeList';

import * as styles from './noticePage.css';

function NoticePage() {
  return (
    <section className={styles.noticePageWrapper}>
      <NoticeList />
    </section>
  );
}

export default NoticePage;
