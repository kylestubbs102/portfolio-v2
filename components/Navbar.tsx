import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Logo from "../public/LogoKS.png";
import styles from "../styles/components/Navbar.module.css";

export default function Navbar() {
  const router = useRouter();

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <Link href="/home" className={styles.navLogo} onClick={handleClick}>
          <Image src={Logo} alt="Logo" width={60} height={60} />
        </Link>

        <ul
          className={
            click ? `${styles.navMenu} ${styles.active}` : styles.navMenu
          }
        >
          <Link
            href="/home"
            className={
              router.pathname == "/home"
                ? `${styles.navLinks} ${styles.active}`
                : styles.navLinks
            }
            onClick={handleClick}
          >
            <li className={styles.navItem}>Home</li>
          </Link>
          <Link
            href="/about"
            className={
              router.pathname == "/about"
                ? `${styles.navLinks} ${styles.active}`
                : styles.navLinks
            }
            onClick={handleClick}
          >
            <li className={styles.navItem}>About</li>
          </Link>
          <Link
            href="/projects"
            className={
              router.pathname == "/projects"
                ? `${styles.navLinks} ${styles.active}`
                : styles.navLinks
            }
            onClick={handleClick}
          >
            <li className={styles.navItem}>Projects</li>
          </Link>
          <Link
            href="/skills"
            className={
              router.pathname == "/skills"
                ? `${styles.navLinks} ${styles.active}`
                : styles.navLinks
            }
            onClick={handleClick}
          >
            <li className={styles.navItem}>Skills</li>
          </Link>
          <Link
            href="/experience"
            className={
              router.pathname == "/experience"
                ? `${styles.navLinks} ${styles.active}`
                : styles.navLinks
            }
            onClick={handleClick}
          >
            <li className={styles.navItem}>Experience</li>
          </Link>
          <Link
            href="/contact"
            className={
              router.pathname == "/contact"
                ? `${styles.navLinks} ${styles.active}`
                : styles.navLinks
            }
            onClick={handleClick}
          >
            <li className={styles.navItem}>Contact</li>
          </Link>
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
