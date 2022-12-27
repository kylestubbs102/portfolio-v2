import { motion } from "framer-motion";
import styles from "../styles/components/Box.module.css";

export interface ExperienceBoxData {
  title: string;
  description: string;
}

const boxMotion = {
  rest: {
    backgroundColor: "#FFFFFF",
  },
  hover: {
    backgroundColor: "#FF0000",
    scale: 1.05,
    transition: { duration: 0.2, ease: "circOut" },
  },
};

const textMotion = {
  rest: {
    color: "#000000",
  },
  hover: {
    color: "#FFFFFF",
    transition: { duration: 0.1, ease: "circOut" },
  },
};

export default function ExperienceBox({
  title,
  description,
}: ExperienceBoxData) {
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
