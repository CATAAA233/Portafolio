import Link from "next/link";
import styles from "./SocialNetworks.module.css";
import { RiGithubLine, RiLinkedinFill } from "react-icons/ri";

export default function SocialNetworks() {
  return (
    <div className={styles.Icons}>
      <Link
        href={"https://www.linkedin.com/in/Carlos-Catalan193/"}
        className={`${styles.Icon} ${styles.Icon__Linkedin}`}
      >
        <RiLinkedinFill />
      </Link>
      <Link
        href={"https://github.com/CATAAA233"}
        className={`${styles.Icon} ${styles.Icon__Github}`}
      >
        <RiGithubLine />
      </Link>
    </div>
  );
}
