import Box from "../../components/Box";
import Divider from "../../components/Divider";
import styles from "../../styles/pages/Projects.module.css";
import { PROJECTS } from "./ProjectData";

export default function Projects() {
  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <p className={styles.title}>Projects</p>
        <Divider />
      </div>
      <div className={styles.projectsContainer}>
        {PROJECTS.map((project, index) => (
          <Box key={index} {...project} />
        ))}
      </div>
    </div>
  );
}
