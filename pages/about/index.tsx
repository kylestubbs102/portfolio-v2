import Image from "next/image";
import Divider from "../../components/Divider";
import ProfilePic from "../../public/ProfilePicAbout.jpg";
import styles from "../../styles/pages/About.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.blackRectangle}>
        <Image
          className={styles.profileImage}
          src={ProfilePic}
          alt="Profile pic"
          width={350}
          height={450}
        />
      </div>
      <div className={styles.diagonalBox} />
      <div className={styles.whiteRectangle}>
        <div className={styles.infoContainer}>
          <p className={styles.introText}>About me</p>
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
