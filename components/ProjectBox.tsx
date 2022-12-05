import styles from "../styles/components/Box.module.css";

export interface ProjectBoxData {
  title: string;
  description: string;
}

export default function ProjectBox({ title, description }: ProjectBoxData) {
  return (
    <div className={styles.projectBox}>
      <p className={styles.title}>{title}</p>
      <p className={styles.description}>{description}</p>
    </div>
  );
}
