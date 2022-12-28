import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import Image from "next/image";
import useWindowWidth from "../hooks/useWindowWidth";
import pic from "../public/ProfilePicAbout.jpg";
import styles from "../styles/components/Box.module.css";

export interface ProjectBoxData {
  title: string;
  description: string;
}

// TODO : fix styling, add links and images
export default function ProjectBox({ title, description }: ProjectBoxData) {
  const windowWidth = useWindowWidth();
  const isMobile = windowWidth <= 768;

  let infoMotion = {};
  let imageMotion = {};

  if (!isMobile) {
    infoMotion = {
      rest: {
        opacity: 0,
      },
      hover: {
        opacity: 1,
        transition: { duration: 0.2, ease: "easeOut" },
      },
    };

    imageMotion = {
      rest: {
        opacity: 1,
      },
      hover: {
        opacity: 0,
        transition: { duration: 0.2, ease: "easeOut" },
      },
    };
  } else {
    // need these so that when the user makes the screen smaller, the hover is removed so the image is shown
    infoMotion = {
      rest: {
        opacity: 0,
      },
    };

    imageMotion = {
      rest: {
        opacity: 1,
      },
    };
  }

  return (
    <motion.a
      initial="rest"
      whileHover="hover"
      animate="rest"
      className={styles.wrapper}
      href="google.com"
      target="_blank"
    >
      <motion.div variants={imageMotion}>
        <Image src={pic} alt={title} fill />
        <p className={`${styles.title} ${styles.coverTitle}`}>{title}</p>
        {isMobile && (
          <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
            className={styles.coverIcon}
          />
        )}
      </motion.div>
      <motion.div variants={infoMotion} className={styles.projectBox}>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{description}</p>
      </motion.div>
    </motion.a>
  );
}
