import styles from "../Services.module.css";
import { ServiceCard } from "../ServicesComponents";
import { BsCodeSlash } from "react-icons/bs";
export default function FrontendServices() {
  return (
    <section className={styles.Container}>
      <div className={styles.Body}>
        <div className={styles.Header}>
          <p className={styles.Title}>Frontend Services</p>
          <p className={styles.Description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          </p>
        </div>
        <div className={styles.CardsContainer}>
          <ServiceCard
            title={"Web sites"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut"
            }
          >
            <BsCodeSlash />
          </ServiceCard>

          <ServiceCard
            title={"Landing Pages"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut"
            }
          >
            <BsCodeSlash />
          </ServiceCard>

          <ServiceCard
            title={"Responsive designs"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut"
            }
          >
            <BsCodeSlash />
          </ServiceCard>

          <ServiceCard
            title={"Clean Code"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut"
            }
          >
            <BsCodeSlash />
          </ServiceCard>

          <ServiceCard
            title={"DNS Configuration"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut"
            }
          >
            <BsCodeSlash />
          </ServiceCard>
  
          <ServiceCard
            title={"Production Deploy"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut"
            }
          >
            <BsCodeSlash />
          </ServiceCard>
        </div>
      </div>
    </section>
  );
}
