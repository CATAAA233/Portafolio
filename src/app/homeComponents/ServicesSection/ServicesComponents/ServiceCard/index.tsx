import styles from "./ServiceCard.module.css";
interface ServiceCardProps {
  title: string;
  description: string;
  children: JSX.Element | JSX.Element[];
}
export default function ServiceCard({
  title,
  description,
  children,
}: ServiceCardProps) {
  return (
    <div className={styles.Container}>
      <div className={styles.Body}>
        <div className={styles.Icon}>{children}</div>
        <div className={styles.Information}>
          <p className={styles.Title}>{title}</p>
          <p className={styles.Description}>{description}</p>
        </div>
      </div>
    </div>
  );
}
