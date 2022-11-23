import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/components/Box.module.css";

export interface BoxData {
  title: string;
  description: string;
  icon?: IconProp;
}

export default function Box({ title, description, icon }: BoxData) {
  return (
    <div className={styles.projectBox}>
      {icon != null && (
        <div className={styles.iconBox}>
          <FontAwesomeIcon icon={icon} className={styles.icon} />
        </div>
      )}
      <p className={styles.projectTitle}>{title}</p>
      <p className={styles.projectDescription}>{description}</p>
    </div>
  );
}
