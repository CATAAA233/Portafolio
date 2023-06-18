import styles from "./Home.module.css";
import { AboutSection, BackendServices, CoverPage, FrontendServices } from "./homeComponents";
export default function Home() {
  return (
    <main className={styles.main}>
        <CoverPage/>
        <AboutSection/>
        <FrontendServices/>
        <BackendServices/>
    </main>
  );
}
