import { Inter } from "next/font/google";
import styles from "./Home.module.css";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.Body}>
        <section className={styles.CoverPage}>
          <div className={styles.TextContainer}>
            <p className={styles.Presentation}>Hello</p>
            <p className={styles.Name}>Im Carlos Catalan</p>
            <p className={styles.Job}>Full Stack Developer</p>
            <button className={styles.Button}>Download CV</button>
          </div>
          <div className={styles.ImageContainer}>
            <Image
              fill={true}
              src={"/images/Home/Profile.png"}
              alt={"Profile Image"}
            />
          </div>
        </section>
        <section className={styles.About}>
          <div className={styles.Profile__Image}></div>
          <div className={styles.Description__Container}>
            <p className={styles.Title__Description}>-- About Me</p>
            <p className={styles.Description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
              <br />
              <br />
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
            <div className={styles.SignContainer}></div>
            <div className={styles.ButtonsContainer}>
              <button className={styles.Button}>HIRE ME</button>
            </div>
          </div>
          <div className={styles.Skills__Container}>
            <div className={styles.Skill}>
              <div className={styles.Skill__Info}>
                <p className={styles.Title}></p>
                <p className={styles.Percent}></p>
              </div>
              <div className={styles.SkillBar}></div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
