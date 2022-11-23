import Box from "../../components/Box";
import Divider from "../../components/Divider";
import styles from "../../styles/pages/Skills.module.css";
import { SKILLS } from "./SkillData";

export default function Skills() {
  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <p className={styles.title}>Skills</p>
        <Divider />
      </div>
      <div className={styles.projectsContainer}>
        {SKILLS.map((project, index) => (
          <Box key={index} {...project} />
        ))}
      </div>
    </div>
  );
}
