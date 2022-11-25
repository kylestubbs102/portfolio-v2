import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "../styles/components/Navbar.module.css";

export default function Navbar() {
  const router = useRouter();

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <Link href="/home" className={styles.navLogo} onClick={handleClick}>
          KS
        </Link>

        <ul
          className={
            click ? `${styles.navMenu} ${styles.active}` : styles.navMenu
          }
        >
          <li className={styles.navItem}>
            <Link
              href="/home"
              className={
                router.pathname == "/home"
                  ? `${styles.navLinks} ${styles.active}`
                  : styles.navLinks
              }
              onClick={handleClick}
            >
              Home
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              href="/about"
              className={
                router.pathname == "/about"
                  ? `${styles.navLinks} ${styles.active}`
                  : styles.navLinks
              }
              onClick={handleClick}
            >
              About
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              href="/projects"
              className={
                router.pathname == "/projects"
                  ? `${styles.navLinks} ${styles.active}`
                  : styles.navLinks
              }
              onClick={handleClick}
            >
              Projects
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              href="/skills"
              className={
                router.pathname == "/skills"
                  ? `${styles.navLinks} ${styles.active}`
                  : styles.navLinks
              }
              onClick={handleClick}
            >
              Skills
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              href="/experience"
              className={
                router.pathname == "/experience"
                  ? `${styles.navLinks} ${styles.active}`
                  : styles.navLinks
              }
              onClick={handleClick}
            >
              Experience
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              href="/contact"
              className={
                router.pathname == "/contact"
                  ? `${styles.navLinks} ${styles.active}`
                  : styles.navLinks
              }
              onClick={handleClick}
            >
              Contact
            </Link>
          </li>
        </ul>
        <div className={styles.navIcon} onClick={handleClick}>
          <FontAwesomeIcon
            icon={click ? faTimes : faBars}
            className={styles.icon}
          />
        </div>
      </div>
    </nav>
  );
}
