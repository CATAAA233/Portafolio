import styles from "./ServiceCard.module.css";
export enum CardBackground {
  Foreground = "#191d28",
  Dark__Foreground = "#171922",
}
interface ServiceCardProps {
  title: string;
  description: string;
  backgroundColor?: CardBackground;
  children: JSX.Element | JSX.Element[];
}
export default function ServiceCard({
  title,
  description,
  backgroundColor = CardBackground.Dark__Foreground,
  children,
}: ServiceCardProps) {
  return (
    <div
      className={styles.Container}
      style={{
        backgroundColor: backgroundColor,
      }}
    >
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
