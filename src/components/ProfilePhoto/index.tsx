import Image from "next/image";
import styles from "./ProfilePhoto.module.css";
interface Props {
  src: string;
  size?: string;
}
export default function ProfilePhoto({ src, size }: Props) {
  return (
    <div className={styles.Container} style={{ width: size, height: size }}>
        <div className={styles.Background}/>
      <div className={styles.Image}>
        <Image fill={true} src={src} alt={"Profile Photo"} />
      </div>
    </div>
  );
}
