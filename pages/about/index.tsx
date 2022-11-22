import Image from "next/image";
import ProfilePic from "../../public/ProfilePicNormal.jpg";
import styles from "../../styles/About.module.css";

export default function About() {
  return (
    <>
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
            <div className={styles.dividerContainer}>
              <div
                className={styles.dividerItem}
                style={{ width: "57px", marginRight: "5px" }}
              ></div>
              <div
                className={styles.dividerItem}
                style={{ width: "8px", marginRight: "3px" }}
              ></div>
              <div
                className={styles.dividerItem}
                style={{ width: "4px" }}
              ></div>
            </div>
            <p className={styles.descriptionText}>
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
    </>
  );
}
