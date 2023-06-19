import { BsCodeSlash } from "react-icons/bs";
import styles from "../Services.module.css";
import { ServiceCardProps } from "../ServicesComponents/ServiceCard";
import ServiceList from "../ServicesComponents/ServiceList";
export default function BackendServices() {
  const serviceData: ServiceCardProps[] = [
    {
      title: "API REST",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut",
      icon: <BsCodeSlash />,
    },
    {
      title: "Payment Gateways",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut",
      icon: <BsCodeSlash />,
    },
    {
      title: "Integrations With Google APIs",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut",
      icon: <BsCodeSlash />,
    },
    {
      title: "Clean Architecture",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut",
      icon: <BsCodeSlash />,
    },
    {
      title: "Google Cloud Platform",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut",
      icon: <BsCodeSlash />,
    },
    {
      title: "Database Administration",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut",
      icon: <BsCodeSlash />,
    },
  ];
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
        <ServiceList serviceData={serviceData} />
      </div>
    </section>
  );
}
