import styles from "./Home.module.css";
import { AboutSection, CoverPage, ServicesSection } from "./homeComponents";
export default function Home() {
  return (
    <main className={styles.main}>
        <CoverPage/>
        <AboutSection/>
        <ServicesSection/>
    </main>
  );
}
