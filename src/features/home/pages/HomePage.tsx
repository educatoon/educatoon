import { Hero } from "../components/hero/Hero";
import { About } from "../components/about/About";
import { Benefits } from "../components/benefits/Benefits";
import { Characters } from "../components/characters/Characters";
import { Plans } from "../components/plans/Plans";
import styles from "./HomePage.module.css";
import heroBg from "../../../assets/illustrations/backgrounds/home-bg.svg";

export function HomePage() {
    return (
        <>
            <div className={styles.heroBackground}>
                <img
                    src={heroBg}
                    alt="imagem de fundo apresentando uma ilustrção espacial com três personagens"
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