import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";
import styles from "../styles/components/Navbar.module.css"

export default function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <Link href="/home" className={styles.navLogo}>
          Kyle Stubbs
        </Link>

        <ul className={click ? `${styles.navMenu} ${styles.active}` : styles.navMenu}>
          <li className={styles.navItem}>
            <Link href="/home" className={styles.navLinks}>Home</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/about" className={styles.navLinks}>About</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/projects" className={styles.navLinks}>Projects</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/skills" className={styles.navLinks}>Skills</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/experience" className={styles.navLinks}>Experience</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/contact" className={styles.navLinks}>Contact</Link>
          </li>
        </ul>
        <div className={styles.navIcon} onClick={handleClick}>
            <FontAwesomeIcon icon={click ? faTimes : faBars} className={styles.icon}/>
          {/* <i className={click ? "fa fa-times" : "fas fa-bars"}></i> */}
        </div>
      </div>
    </nav>
  );
}
