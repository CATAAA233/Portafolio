import { BsCodeSlash } from "react-icons/bs";
import styles from "../Services.module.css";
import { ServiceCardProps } from "../ServicesComponents/ServiceCard";
import ServiceList from "../ServicesComponents/ServiceList";
export default function FrontendServices() {
  const serviceData: ServiceCardProps[] = [
    {
      title: "Web Sites",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut",
      icon: <BsCodeSlash />,
    },
    {
      title: "Landing Pages",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut",
      icon: <BsCodeSlash />,
    },
    {
      title: "Responsive designs",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut",
      icon: <BsCodeSlash />,
    },
    {
      title: "Clean Code",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut",
      icon: <BsCodeSlash />,
    },
    {
      title: "DNS Configuration",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut",
      icon: <BsCodeSlash />,
    },
    {
      title: "Production Deploy",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut",
      icon: <BsCodeSlash />,
    },
  ];
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
        <ServiceList serviceData={serviceData} />
      </div>
    </section>
  );
}
