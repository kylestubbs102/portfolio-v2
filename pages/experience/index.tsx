import Box from "../../components/Box";
import Divider from "../../components/Divider";
import styles from "../../styles/pages/Experience.module.css";
import { WORK_EXPERIENCE } from "./ExperienceData";

export default function Experience() {
  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <p className={styles.title}>Experience and Qualifications</p>
        <Divider />
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.timelineRope} />
        <div className={styles.experienceContainer}>
          {WORK_EXPERIENCE.map((experience, index) =>
            index % 2 == 0 ? (
              <>
                <Box key={index} {...experience} width={451} height={244} />
                <Circle key={index} index={index} />
                <div />
              </>
            ) : (
              <>
                <div />
                <Circle key={index} index={index} />
                <Box key={index} {...experience} width={451} height={244} />
              </>
            )
          )}
        </div>
      </div>
    </div>
  );
}

interface CircleProp {
  index: number;
}

function Circle({ index }: CircleProp) {
  return (
    <div className={styles.circle}>
      <p>{index + 1}</p>
    </div>
  );
}
