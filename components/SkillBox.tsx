import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import useWindowWidth from "../hooks/useWindowWidth";
import styles from "../styles/components/Box.module.css";

export interface SkillBoxData {
  title: string;
  description: string;
  icon: IconProp;
}

export default function SkillBox({ title, description, icon }: SkillBoxData) {
  const windowWidth = useWindowWidth();
  const isMobile = windowWidth <= 768;

  let boxMotion = {};
  let iconMotion = {};
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

    iconMotion = {
      rest: {
        backgroundColor: "#000000",
      },
      hover: {
        backgroundColor: "#FFFFFF",
        transition: { duration: 0.1, ease: "circOut" },
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
      className={styles.skillBox}
    >
      <motion.div variants={iconMotion} className={styles.iconBox}>
        <FontAwesomeIcon icon={icon} className={styles.icon} />
      </motion.div>
      <motion.p variants={textMotion} className={styles.title}>
        {title}
      </motion.p>
      <motion.p variants={textMotion} className={styles.description}>
        {description}
      </motion.p>
    </motion.div>
  );
}
