import { IconType } from "react-icons";
import styles from "./InterestCard.module.css";
 interface Props {
  title: string;
  children: JSX.Element | JSX.Element[];
}
export default function InterestCard({ title, children }: Props) {
  return (
    <div className={styles.Container}>
      <div className={styles.Icon}>{children}</div>
      <div className={styles.Title}>{title}</div>
    </div>
  );
}
