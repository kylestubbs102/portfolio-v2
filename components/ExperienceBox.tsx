import styles from "../styles/components/Box.module.css";

export interface ExperienceBoxData {
  title: string;
  description: string;
}

export default function ExperienceBox({
  title,
  description,
}: ExperienceBoxData) {
  return (
    <div className={styles.experienceBox}>
      <p className={styles.title}>{title}</p>
      <p className={styles.description}>{description}</p>
    </div>
  );
}
