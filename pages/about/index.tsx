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
            Hello, I&apos;m Kyle, currently residing in the vibrant city of
            Seattle. I bring a diverse background in software development to the
            table. My journey began with an internship at Amazon, where I honed
            my skills and decided to pursue a full-time career as an Android
            developer. Alongside my Android expertise, I&apos;ve developed a
            strong passion for web development.
          </p>
          <p className={styles.descriptionText}>
            When I&apos;m not coding away on my computer, you&apos;ll often find
            me taking a break with the diverse trails this city has to offer,
            ranging from hikes, runs and bike rides. I love playing video gamess
            on my PC, as well as speed-solving Rubik&apos;s cubes. Even when
            I&apos;m not coding I still enjoy practicing my problem-solving
            skills.
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
            Hello, I&apos;m Kyle, currently residing in the vibrant city of
            Seattle. I bring a diverse background in software development to the
            table. My journey began with an internship at Amazon, where I honed
            my skills and decided to pursue a full-time career as an Android
            developer. Alongside my Android expertise, I&apos;ve developed a
            strong passion for web development.
          </p>
          <p className={styles.descriptionText}>
            When I&apos;m not coding away on my computer, you&apos;ll often find
            me taking a break with the diverse trails this city has to offer,
            ranging from hikes, runs and bike rides. I love playing video gamess
            on my PC, as well as speed-solving Rubik&apos;s cubes. Even when
            I&apos;m not coding I still enjoy practicing my problem-solving
            skills.
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
          Hello, I&apos;m Kyle, currently residing in the vibrant city of
          Seattle. I bring a diverse background in software development to the
          table. My journey began with an internship at Amazon, where I honed my
          skills and decided to pursue a full-time career as an Android
          developer. Alongside my Android expertise, I&apos;ve developed a
          strong passion for web development.
        </p>
        <p className={styles.descriptionText}>
          When I&apos;m not coding away on my computer, you&apos;ll often find
          me taking a break with the diverse trails this city has to offer,
          ranging from hikes, runs and bike rides. I love playing video gamess
          on my PC, as well as speed-solving Rubik&apos;s cubes. Even when
          I&apos;m not coding I still enjoy practicing my problem-solving
          skills.
        </p>
      </div>
    </div>
  );
}
