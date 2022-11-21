import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.blackRectangle}>
        <div className={styles.linkOuterContainer}>
          <div className={styles.linkInnerContainer}>
            <a
              href="https://www.linkedin.com/in/kylestubbs102/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
            </a>
            <a
              href="https://github.com/kylestubbs102/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} className={styles.icon} />
            </a>
            <a
              href="mailto:kylestubbs102@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.diagonalBox} />
      <div className={styles.whiteRectangle}>
        <div className={styles.infoContainer}>
          <p className={styles.introText}>Hello I&apos;m</p>
          <p className={styles.nameText}>Kyle Stubbs</p>
          <p className={styles.occupationText}>Software Engineer</p>
          <p className={styles.descriptionText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et dui,
            ullamcorper ut quis congue purus volutpat posuere lorem.
          </p>
          <button className={styles.hireBtn}>About me</button>
        </div>
      </div>
    </div>
  );
}
