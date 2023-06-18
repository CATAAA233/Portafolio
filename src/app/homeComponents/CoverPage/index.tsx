import { ProfilePhoto, SocialNetworks } from "@/components";
import styles from "./CoverPage.module.css";
import CustomButton from "@/components/CustomButton";
export default function CoverPage() {
  return (
    <section className={styles.CoverPage}>
      <div className={styles.ImageContainer}>
        <ProfilePhoto size="15rem" src={"/images/Home/profile2.png"} />
      </div>
      <div className={styles.TextContainer}>
        <div className={styles.Name}>
          <p>
            Carlos <span>Catalán</span>
          </p>
          <SocialNetworks />
        </div>
        <p className={styles.Job}>
          This is carlos Daniel, full stack developer with 2 years experience in
          web development located in Baja California, Mexico looking for new
          challenges
        </p>
        <CustomButton title={"DOWNLOAD CV"} />
      </div>
    </section>
  );
}