import Image from "next/image";
import Divider from "../../components/Divider";
import ProfilePic from "../../public/ProfilePicNormal.jpg";
import styles from "../../styles/pages/About.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.blackRectangle}>
        <Image
          className={styles.profileImage}
          src={ProfilePic}
          alt="Profile pic"
          width={400}
          height={500}
        />
      </div>
      <div className={styles.diagonalBox} />
      <div className={styles.whiteRectangle}>
        <div className={styles.infoContainer}>
          <p className={styles.introText}>About me</p>
          <Divider />
          <p className={styles.descriptionText} style={{ marginTop: "37px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et dui,
            ullamcorper ut quis congue purus volutpat posuere lorem.
          </p>
          <p className={styles.descriptionText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et dui,
            ullamcorper ut quis congue purus volutpat posuere lorem.
          </p>
        </div>
      </div>
    </div>
  );
}
