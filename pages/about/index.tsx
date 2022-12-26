import Image from "next/image";
import Divider from "../../components/Divider";
import useWindowWidth from "../../hooks/useWindowWidth";
import ProfilePic from "../../public/ProfilePicAbout.jpg";
import styles from "../../styles/pages/About.module.css";

export default function About() {
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
        <Image
          className={styles.profileImage}
          src={ProfilePic}
          alt="Profile pic"
          width={380}
          height={480}
        />
      </div>
      <div className={styles.diagonalBox} />
      <div className={styles.whiteRectangle}>
        <div className={styles.infoContainer}>
          <h1 className={styles.introText}>About me</h1>
          <Divider />
          <p className={styles.descriptionText} style={{ marginTop: "37px" }}>
            Hello. My name is Kyle and I currently live in Seattle. I recently
            interned at Amazon, and I decided to move up for a full-time Android
            developer position. In addition to Android development, I am also
            very interested in web development.
          </p>
          <p className={styles.descriptionText}>
            When I&apos;m not at my computer, I like to hike, play video games,
            and solve Rubik&apos;s cubes. I&apos;m also a huge fan of Rocket
            League eSports and watch almost every game.
          </p>
        </div>
      </div>
    </div>
  );
}

function LaptopHome() {
  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.introText}>About me</h1>
        <Divider />
      </div>
      <div className={styles.mainContainer}>
        <div className={styles.imageContainer}>
          <Image
            className={styles.profileImage}
            src={ProfilePic}
            alt="Profile pic"
          />
        </div>
        <div className={styles.infoContainer}>
          <p className={styles.descriptionText}>
            Hello. My name is Kyle and I currently live in Seattle. I recently
            interned at Amazon, and I decided to move up for a full-time Android
            developer position. In addition to Android development, I am also
            very interested in web development.
          </p>
          <p className={styles.descriptionText}>
            When I&apos;m not at my computer, I like to hike, play video games,
            and solve Rubik&apos;s cubes. I&apos;m also a huge fan of Rocket
            League eSports and watch almost every game.
          </p>
        </div>
      </div>
    </div>
  );
}

function MobileHome() {
  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.introText}>About me</h1>
        <Divider />
      </div>
      <div className={styles.imageContainer}>
        <Image
          className={styles.profileImage}
          src={ProfilePic}
          alt="Profile pic"
        />
      </div>
      <div className={styles.infoContainer}>
        <p className={styles.descriptionText}>
          Hello. My name is Kyle and I currently live in Seattle. I recently
          interned at Amazon, and I decided to move up for a full-time Android
          developer position. In addition to Android development, I am also very
          interested in web development.
        </p>
        <p className={styles.descriptionText}>
          When I&apos;m not at my computer, I like to hike, play video games,
          and solve Rubik&apos;s cubes. I&apos;m also a huge fan of Rocket
          League eSports and watch almost every game.
        </p>
      </div>
    </div>
  );
}
