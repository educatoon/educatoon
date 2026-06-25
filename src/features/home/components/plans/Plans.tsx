import { Text } from "@/shared/components/ui/text/Text";
import styles from "./Plans.module.css";

export function Plans() {
    return (
        <section className={`${styles.plans} container py-5`}>
            <Text as="h2" variant="sectionTitle" className={styles.sectionTitle}>
                Nossos Planos
            </Text>

            <div className={styles.cardsContainer}>
                <div className={`${styles.card} ${styles.descer}`}>
                    <div className={styles.cardHeader}>
                        <div className={styles.price}>
                            <p className={styles.priceValue}>
                                R$<span className={styles.priceHighlight}>00</span>,00
                            </p>
                            <p className={styles.pricePeriod}>/Por mês</p>
                        </div>
                        <p className={styles.planName}>Plano Escola Prata</p>
                    </div>
                    <div className={styles.description}>
                        <p>Lorem Ipsum dolor</p>
                        <p>Lorem Ipsum dolor</p>
                        <p>Lorem Ipsum dolor</p>
                        <p>Lorem Ipsum dolor</p>
                        <p>Lorem Ipsum dolor</p>
                    </div>
                    <div className={styles.buttonWrapper}>
                        <button className={styles.subscribeButton}>Assinar Plano</button>
                    </div>
                </div>

                <div className={`${styles.card} ${styles.middleCard}`}>
                    <div className={styles.cardHeader}>
                        <div className={styles.price}>
                            <p className={styles.priceValue}>
                                R$<span className={styles.priceHighlight}>00</span>,00
                            </p>
                            <p className={styles.pricePeriod}>/Por mês</p>
                        </div>
                        <p className={styles.planName}>Plano Escola Ouro</p>
                    </div>
                    <div className={styles.description}>
                        <p>Lorem Ipsum dolor</p>
                        <p>Lorem Ipsum dolor</p>
                        <p>Lorem Ipsum dolor</p>
                        <p>Lorem Ipsum dolor</p>
                        <p>Lorem Ipsum dolor</p>
                    </div>
                    <div className={styles.buttonWrapper}>
                        <button className={styles.subscribeButton}>Assinar Plano</button>
                    </div>
                </div>

                <div className={`${styles.card} ${styles.descer}`}>
                    <div className={styles.cardHeader}>
                        <div className={styles.price}>
                            <p className={styles.priceValue}>
                                R$<span className={styles.priceHighlight}>00</span>,00
                            </p>
                            <p className={styles.pricePeriod}>/Por mês</p>
                        </div>
                        <p className={styles.planName}>Plano Escola Aluno</p>
                    </div>
                    <div className={styles.description}>
                        <p>Lorem Ipsum dolor</p>
                        <p>Lorem Ipsum dolor</p>
                        <p>Lorem Ipsum dolor</p>
                        <p>Lorem Ipsum dolor</p>
                        <p>Lorem Ipsum dolor</p>
                    </div>
                    <div className={styles.buttonWrapper}>
                        <button className={styles.subscribeButton}>Assinar Plano</button>
                    </div>
                </div>
            </div>
        </section>
    );
}