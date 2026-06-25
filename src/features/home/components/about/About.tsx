import { Button } from "@/shared/components/ui/button/Button";
import { Text } from "@/shared/components/ui/text/Text";
import personagensCaindo from "../../../../assets/illustrations/characters/group/home-personagens.svg";
import styles from "./About.module.css";

export function About() {
    return (
        <section id="about" className={`${styles.about} py-5`}>
            <div className="container">
                <div className="row align-items-center">

                    <div className="col-lg-6 col-md-12 order-1 order-lg-1">
                        <div className={styles.rightSide}>
                            <img src={personagensCaindo} alt="" className="img-fluid" />
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12 order-2 order-lg-2">
                        <div className={styles.leftSide}>
                            <div className={styles.textBlock}>
                                <Text as="h2" variant="sectionTitle" className={styles.title}>
                                    Matemática + Diversão <br /> = Educatoon
                                </Text>
                                <Text as="p" variant="body" className={styles.paragraph}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </Text>
                            </div>

                            <div className={styles.textBlock}>
                                <Text as="h2" variant="sectionTitle" className={styles.title}>
                                    Aventuras matemáticas <br /> com quadrinhos!
                                </Text>
                                <Text as="p" variant="body" className={styles.paragraph}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </Text>
                            </div>

                            <Button variant="secondary" className={styles.aboutButton}>
                                Veja mais
                            </Button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}