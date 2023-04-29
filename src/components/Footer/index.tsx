import { FaGithub, FaLinkedin } from "react-icons/fa";

import styles from "@/styles/components/Footer/styles.module.scss";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <h2>Developed by</h2>
      <div className={styles.iconsContainer}>
        <Link href="https://github.com/rms-diego" target="_blank">
          <FaGithub size={40} />
        </Link>

        <Link href="https://www.linkedin.com/in/diego-rbrito/" target="_blank">
          <FaLinkedin size={40} />
        </Link>
      </div>
    </footer>
  );
}
