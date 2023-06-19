import styles from "./ServiceCard.module.css";
export enum CardBackground {
  Foreground = "#191d28",
  Dark__Foreground = "#171922",
}
export interface ServiceCardProps {
  title: string;
  description: string;
  backgroundColor?: CardBackground;
  icon: JSX.Element;
}
export default function ServiceCard({
  title,
  description,
  backgroundColor = CardBackground.Dark__Foreground,
  icon
}: ServiceCardProps) {
  return (
    <div
      className={styles.Container}
      style={{
        backgroundColor: backgroundColor,
      }}
    >
      <div className={styles.Body}>
        <div className={styles.Icon}>{icon}</div>
        <div className={styles.Information}>
          <p className={styles.Title}>{title}</p>
          <p className={styles.Description}>{description}</p>
        </div>
      </div>
    </div>
  );
}
