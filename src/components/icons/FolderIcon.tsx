import * as styles from './FolderIcon.css';

export default function FolderIcon() {
  return (
    <div className={styles.folderShape}>
      <div className={styles.topLeftShape}></div>
      <div className={styles.topShape}></div>
      <div className={styles.bottomShape}></div>
    </div>
  );
}
