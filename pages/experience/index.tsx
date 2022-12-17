import Divider from "../../components/Divider";
import ExperienceBox from "../../components/ExperienceBox";
import { WORK_EXPERIENCE } from "../../data/ExperienceData";
import useIsMobile from "../../hooks/useIsMobile";
import styles from "../../styles/pages/Experience.module.css";

export default function Experience() {
  const isMobile = useIsMobile();

  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <p className={styles.title}>Experience and Qualifications</p>
        <Divider />
      </div>
      <div className={styles.infoContainer}>
        {isMobile ? <MobileLadder /> : <DesktopLadder />}
      </div>
    </div>
  );
}

function MobileLadder() {
  return (
    <>
      <div className={styles.timelineRope} />
      <div className={styles.experienceContainer}>
        {WORK_EXPERIENCE.map((experience, index) => (
          <>
            <Circle key={index} index={index} />
            <ExperienceBox key={index} {...experience} />
          </>
        ))}
      </div>
    </>
  );
}

function DesktopLadder() {
  return (
    <>
      <div className={styles.timelineRope} />
      <div className={styles.experienceContainer}>
        {WORK_EXPERIENCE.map((experience, index) =>
          index % 2 == 0 ? (
            <>
              <ExperienceBox key={index} {...experience} />
              <Circle key={index} index={index} />
              <div />
            </>
          ) : (
            <>
              <div />
              <Circle key={index} index={index} />
              <ExperienceBox key={index} {...experience} />
            </>
          )
        )}
      </div>
    </>
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
