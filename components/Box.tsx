import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/components/Box.module.css";

export interface BoxData {
  title: string;
  description: string;
  style?: React.CSSProperties;
  icon?: IconProp;
}

interface BoxProps extends BoxData {
  width: number;
  height: number;
}

export default function Box({
  title,
  description,
  width,
  height,
  style,
  icon,
}: BoxProps) {
  return (
    <div
      className={styles.box}
      style={{ ...style, width: width, height: height }}
    >
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
