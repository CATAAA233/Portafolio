import { ProfilePhoto } from "@/components";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.Body}>
        <section className={styles.CoverPage}>
          <div className={styles.ImageContainer}>
            <ProfilePhoto size="15rem" src={"/images/Home/profile2.png"} />
          </div>
          <div className={styles.TextContainer}>
            <p className={styles.Presentation}></p>
            <p className={styles.Name}>
              <span>Carlos</span> Catalán
            </p>
            <p className={styles.Job}>
              This is carlos Daniel, full stack developer with 2 years
              experience in web development located in Baja California, Mexico
              looking for new challenges
            </p>
            <button className={styles.Button}>DOWNLOAD CV</button>
          </div>
        </section>
        <section className={styles.About}>
          <div className={styles.AboutBody}>
            <div className={styles.Profile__Image}>
              <ProfilePhoto size={"13rem"} src={"/images/Home/profile2.png"} />
            </div>
            <div className={styles.Description__Container}>
              <p className={styles.Title__Description}>
                <div className={styles.hrStyle} /> About Me
              </p>
              <p className={styles.Description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                <br />
                <br />
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              </p>
              <div className={styles.ButtonsContainer}>
                <button className={styles.Button}>HIRE ME</button>
              </div>
            </div>
            <div className={styles.Skills__Container}>
              hola
              <div className={styles.Skill}>
                <div className={styles.Skill__Info}>
                  <p className={styles.Title}></p>
                  <p className={styles.Percent}></p>
                </div>
                <div className={styles.SkillBar}></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
