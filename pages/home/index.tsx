import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import ProfilePic from "../../public/ProfilePicHome.jpg";
import styles from "../../styles/pages/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.blackRectangle}>
        <div className={styles.contactAndImageContainer}>
          <div className={styles.linkContainer}>
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
          <Image
            className={styles.profileImage}
            src={ProfilePic}
            alt="Profile pic"
            width={380}
            height={480}
          />
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
          <Link href="/about">
            <button className={styles.hireBtn}>About me</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
