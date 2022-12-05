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
            I&apos;m an Android developer based in Seattle who enjoys working on
            all sorts of projects. Currently, I&apos;m working on the Android
            app for{" "}
            <a href="http://photos.amazon.com" target="_blank" rel="noreferrer">
              Amazon Photos
            </a>
            .
          </p>
          <Link href="/about">
            <button className={styles.hireBtn}>About me</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
