import { BoxData } from "../pages/projects/ProjectData";
import styles from "../styles/components/Box.module.css";

export default function Box({ title, description }: BoxData) {
  return (
    <div className={styles.projectBox}>
      <div className={styles.iconBox}>
        <div className={styles.icon} />
      </div>
      <p className={styles.projectTitle}>{title}</p>
      <p className={styles.projectDescription}>{description}</p>
    </div>
  );
}
