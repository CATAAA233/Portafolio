import ServiceCard, { CardBackground, ServiceCardProps } from "../ServiceCard";
import styles from "./ServiceList.module.css";
import { BsCodeSlash } from "react-icons/bs";


interface Props{
  serviceData: ServiceCardProps[]
}
export default function ServicesList({serviceData}:Props) {
  return (
    <div className={styles.Container}>
      {serviceData.map((service, key) => {
        return (
          <ServiceCard
            key={key}
            title={service.title}
            description={service.description}
            backgroundColor={CardBackground.Foreground}
            icon={service.icon}
          />
        );
      })}
    </div>
  );
}
