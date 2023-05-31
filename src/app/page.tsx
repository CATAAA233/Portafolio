import { Inter } from "next/font/google";
import styles from "./Home.module.css";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.CoverPage}>
        <div className={styles.BlackLayer} />
        <div className={styles.TextContainer}>
          <p className={styles.Presentation}>Hello, My Name is</p>
          <p className={styles.Name}>Daniel Catalan</p>
          <p className={styles.Job}>Full Stack Developer</p>
          <button className={styles.Button}>Know More</button>
        </div>
        <div className={styles.ImageContainer}>
          <Image
            fill={true}
            src={"/images/Home/Profile.jpeg"}
            alt={"Profile Image"}
          />
        </div>
      </section>
    </main>
  );
}
