import styles from "../Services.module.css";
import { ServiceCard } from "../ServicesComponents";
import { BsCodeSlash } from "react-icons/bs";
import { CardBackground } from "../ServicesComponents/ServiceCard";
export default function BackendServices() {
  return (
    <section className={styles.Container + " " + styles.BackendColor}>
      <div className={styles.Body}>
        <div className={styles.Header}>
          <p className={styles.Title}>Backend Services</p>
          <p className={styles.Description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          </p>
        </div>
        <div className={styles.CardsContainer}>
          <ServiceCard
            title={"API REST"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut"
            }
            backgroundColor={CardBackground.Foreground}
          >
            <BsCodeSlash />
          </ServiceCard>

          <ServiceCard
            title={"Payment Gateways"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut"
            }
            backgroundColor={CardBackground.Foreground}
          >
            <BsCodeSlash />
          </ServiceCard>

          <ServiceCard
            title={"Integrations With Google APIS"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut"
            }
            backgroundColor={CardBackground.Foreground}
          >
            <BsCodeSlash />
          </ServiceCard>

          <ServiceCard
            title={"Clean Architecture"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut"
            }
            backgroundColor={CardBackground.Foreground}
          >
            <BsCodeSlash />
          </ServiceCard>

          <ServiceCard
            title={"Google Cloud Platform"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut"
            }
            backgroundColor={CardBackground.Foreground}
          >
            <BsCodeSlash />
          </ServiceCard>

          <ServiceCard
            title={"Database Administration"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut"
            }
            backgroundColor={CardBackground.Foreground}
          >
            <BsCodeSlash />
          </ServiceCard>
        </div>
      </div>
    </section>
  );
}
