import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/components/Box.module.css";

export interface SkillBoxData {
  title: string;
  description: string;
  icon: IconProp;
}

export default function SkillBox({ title, description, icon }: SkillBoxData) {
  return (
    <div className={styles.skillBox}>
      <div className={styles.iconBox}>
        <FontAwesomeIcon icon={icon} className={styles.icon} />
      </div>
      <p className={styles.title}>{title}</p>
      <p className={styles.description}>{description}</p>
    </div>
  );
}
