import Divider from "../../components/Divider";
import ProjectBox from "../../components/ProjectBox";
import { PROJECTS } from "../../data/ProjectData";
import styles from "../../styles/pages/Projects.module.css";

export default function Projects() {
  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <p className={styles.title}>Projects</p>
        <Divider />
      </div>
      <div className={styles.projectsContainer}>
        {PROJECTS.map((project, index) => (
          <ProjectBox key={index} {...project} />
        ))}
      </div>
    </div>
  );
}
