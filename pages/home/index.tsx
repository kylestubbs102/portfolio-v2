import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import useWindowWidth from "../../hooks/useWindowWidth";
import ProfilePic from "../../public/ProfilePicHome.jpg";
import styles from "../../styles/pages/Home.module.css";

export default function Home() {
  const windowWidth = useWindowWidth();

  switch (true) {
    case windowWidth > 1024:
      return <DesktopHome />;
    case windowWidth > 768:
      return <LaptopHome />;
    default:
      return <MobileHome />;
  }
}

function DesktopHome() {
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
          />
        </div>
      </div>
      <div className={styles.diagonalBox} />
      <div className={styles.whiteRectangle}>
        <div className={styles.infoContainer}>
          <h2 className={styles.introText}>Hello I&apos;m</h2>
          <h1 className={styles.nameText}>Kyle Stubbs</h1>
          <h3 className={styles.occupationText}>Software Engineer</h3>
          <p className={styles.descriptionText}>
            I&apos;m an Android developer based in Seattle who enjoys working on
            all sorts of projects. Currently, I&apos;m working on the Android,
            FireTV, and Fire Tablet app for{" "}
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

function LaptopHome() {
  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <Image
          className={styles.profileImage}
          src={ProfilePic}
          alt="Profile pic"
        />
        <div className={styles.infoContainer}>
          <h2 className={styles.introText}>Hello I&apos;m</h2>
          <h1 className={styles.nameText}>Kyle Stubbs</h1>
          <h3 className={styles.occupationText}>Software Engineer</h3>
        </div>
      </div>
      <div className={styles.descriptionContainer}>
        <p className={styles.descriptionText}>
          I&apos;m an Android developer based in Seattle who enjoys working on
          all sorts of projects. Currently, I&apos;m working on the Android,
          FireTV, and Fire Tablet app for{" "}
          <a href="http://photos.amazon.com" target="_blank" rel="noreferrer">
            Amazon Photos
          </a>
          .
        </p>
        <Link href="/about">
          <button className={styles.hireBtn}>About me</button>
        </Link>
      </div>
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
  );
}

function MobileHome() {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          className={styles.profileImage}
          src={ProfilePic}
          alt="Profile pic"
          fill
        />
      </div>
      <h2 className={styles.introText}>Hello I&apos;m</h2>
      <h1 className={styles.nameText}>Kyle Stubbs</h1>
      <h3 className={styles.occupationText}>Software Engineer</h3>
      <p className={styles.descriptionText}>
        I&apos;m an Android developer based in Seattle who enjoys working on all
        sorts of projects. Currently, I&apos;m working on the Android, FireTV,
        and Fire Tablet apps for{" "}
        <a href="http://photos.amazon.com" target="_blank" rel="noreferrer">
          Amazon Photos
        </a>
        .
      </p>
      <Link href="/about">
        <button className={styles.hireBtn}>About me</button>
      </Link>
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
  );
}
