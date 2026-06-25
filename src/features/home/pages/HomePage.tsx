import { Hero } from "../components/hero/Hero";
import { About } from "../components/about/About";
import { Benefits } from "../components/benefits/Benefits";
import { Characters } from "../components/characters/Characters";
import { Plans } from "../components/plans/Plans";
import styles from "./HomePage.module.css";

export function HomePage() {
    return (
        <>
            <div className={styles.heroBackground}>
                <img
                    src="/src/assets/illustrations/backgrounds/home-bg.svg"
                    alt=""
                />
            </div>
            <Hero />
            <About />
            <Benefits />
            <Characters />
            <Plans />
            <div className={styles.footerBackground}></div>
        </>
    );
}