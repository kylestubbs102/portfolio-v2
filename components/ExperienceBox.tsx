import { motion } from "framer-motion";
import useWindowWidth from "../hooks/useWindowWidth";
import styles from "../styles/components/Box.module.css";

export interface ExperienceBoxData {
  title: string;
  description: string;
}

export default function ExperienceBox({
  title,
  description,
}: ExperienceBoxData) {
  const windowWidth = useWindowWidth();
  const isMobile = windowWidth <= 768;

  let boxMotion = {};
  let textMotion = {};

  if (!isMobile) {
    boxMotion = {
      rest: {
        backgroundColor: "#FFFFFF",
      },
      hover: {
        backgroundColor: "#FF0000",
        scale: 1.05,
        transition: { duration: 0.2, ease: "circOut" },
      },
    };

    textMotion = {
      rest: {
        color: "#000000",
      },
      hover: {
        color: "#FFFFFF",
        transition: { duration: 0.1, ease: "circOut" },
      },
    };
  }

  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      animate="rest"
      variants={boxMotion}
      className={styles.experienceBox}
    >
      <motion.p variants={textMotion} className={styles.title}>
        {title}
      </motion.p>
      <motion.p variants={textMotion} className={styles.description}>
        {description}
      </motion.p>
    </motion.div>
  );
}
