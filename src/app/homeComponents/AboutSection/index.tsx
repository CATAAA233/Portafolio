import styles from "./AboutSection.module.css";
import { InfoItem, InterestCard } from "./AboutComponents";
// import { FaGamepad, FaReact, FaNodeJs } from "react-icons/Fa";
// import { GiPingPongBat } from "react-icons/Gi";
// import { BsMusicNoteBeamed, BsAirplane } from "react-icons/Bs";
// import { BiCameraMovie } from "react-icons/Bi";
// import { CgGym } from "react-icons/Cg";
export default function AboutSection() {
  const personalData = [
    {
      title: "Birthdate",
      description: "23-04-2001",
    },
    {
      title: "Phone",
      description: "664 55 64 186",
    },
    {
      title: "Email",
      description: "carlosdanielcatalan1o@gmail.com",
    },
    {
      title: "Location",
      description: "Baja California, Mexico",
    },
    {
      title: "Job Status",
      description: "Full Stack developer in Odigos Studio",
    },
  ];

  return (
    <section className={styles.About}>
      <div className={styles.AboutBody}>
        <div className={styles.Description__Container}>
          <p className={styles.Title__Description}>About Me</p>
          <p className={styles.Description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            <br />
            <br />
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          </p>
        </div>

        <div className={styles.Info}>
          <div className={styles.Personal__Information}>
            <div className={styles.PersonalTitle}>
              <p>Personal Details</p>
            </div>
            <div className={styles.Information__Container}>
              {personalData.map((item, key) => {
                return (
                  <InfoItem
                    key={key}
                    title={item.title}
                    description={item.description}
                  />
                );
              })}
            </div>
          </div>

          <div className={styles.Interests}>
            <p className={styles.Intest__Title}>My Interests</p>
            <div className={styles.InterestsContainer}>
              {/* <InterestCard title={"GAMES"}>
                <FaGamepad />
              </InterestCard>

              <InterestCard title={"PING PONG"}>
                <GiPingPongBat />
              </InterestCard>

              <InterestCard title={"MUSIC"}>
                <BsMusicNoteBeamed />
              </InterestCard>

              <InterestCard title={"CINEMA"}>
                <BiCameraMovie />
              </InterestCard>

              <InterestCard title={"GYM"}>
                <CgGym />
              </InterestCard>

              <InterestCard title={"TRAVEL"}>
                <BsAirplane />
              </InterestCard>

              <InterestCard title={"REACT JS"}>
                <FaReact />
              </InterestCard>

              <InterestCard title={"NODE JS"}>
                <FaNodeJs />
              </InterestCard> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
