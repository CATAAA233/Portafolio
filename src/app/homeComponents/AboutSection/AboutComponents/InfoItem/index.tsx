import styles from "./InfoItem.module.css";
interface Props {
  title: string;
  description: string;
}

export default function InfoItem({ title, description }: Props) {
  return (
    <div className={styles.Container}>
      <p className={styles.Title}>{title}</p>
      <p className={styles.ItemDescription}>{description}</p>
    </div>
  );
}
