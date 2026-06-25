import { Text } from "@/shared/components/ui/text/Text";
import graduationHat from "../../../../assets/icons/graduation-hat.svg";
import styles from "./Benefits.module.css";

export function Benefits() {
    return (
        <section id="secao-vantagens" className={`${styles.benefits} container py-5`}>
            <Text as="h2" variant="sectionTitle" className={styles.sectionTitle}>
                Por que nos escolher?
            </Text>

            <div className={styles.cards}>
                <div className={styles.card}>
                    <img src={graduationHat} alt="figura com personagens" className={styles.cardImage} />
                    <p className={styles.cardTitle}>Vantagem 01</p>
                    <p className={styles.cardText}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non semper urna. Integer consectetur tincidunt magna, at tristique.
                    </p>
                </div>

                <div className={styles.card}>
                    <img src={graduationHat} alt="figura com personagens" className={styles.cardImage} />
                    <p className={styles.cardTitle}>Vantagem 02</p>
                    <p className={styles.cardText}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non semper urna. Integer consectetur tincidunt magna, at tristique.
                    </p>
                </div>

                <div className={styles.card}>
                    <img src={graduationHat} alt="figura com personagens" className={styles.cardImage} />
                    <p className={styles.cardTitle}>Vantagem 03</p>
                    <p className={styles.cardText}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non semper urna. Integer consectetur tincidunt magna, at tristique.
                    </p>
                </div>
            </div>
        </section>
    );
}