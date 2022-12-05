import Divider from "../../components/Divider";
import SkillBox from "../../components/SkillBox";
import { SKILLS } from "../../data/SkillData";
import styles from "../../styles/pages/Skills.module.css";

export default function Skills() {
  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <p className={styles.title}>Skills</p>
        <Divider />
      </div>
      <div className={styles.skillsContainer}>
        {SKILLS.map((skill, index) => (
          <SkillBox key={index} {...skill} />
        ))}
      </div>
    </div>
  );
}
