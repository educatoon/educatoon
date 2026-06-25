import styles from "./Characters.module.css";
import { Text } from "@/shared/components/ui/text/Text";
import mattImg from "../../../../assets/illustrations/characters/matt/matt-img.svg";
import pamImg from "../../../../assets/illustrations/characters/pam/pam-img.svg";
import susieImg from "../../../../assets/illustrations/characters/susie/susie-img.svg";
import vanessinhaImg from "../../../../assets/illustrations/characters/vanessinha/vanessinha-img.svg";
import patrickImg from "../../../../assets/illustrations/characters/patrick/patrick-img.svg";
import matofobicoImg from "../../../../assets/illustrations/characters/matofobico/matofobico-img.svg";
import mattBg from "../../../../assets/illustrations/characters/matt/matt-bg.svg";
import pamBg from "../../../../assets/illustrations/characters/pam/pam-bg.svg";
import susieBg from "../../../../assets/illustrations/characters/susie/susie-bg.svg";
import vanessinhaBg from "../../../../assets/illustrations/characters/vanessinha/vanessinha-bg.svg";
import patrickBg from "../../../../assets/illustrations/characters/patrick/patrick-bg.svg";
import matofobicoBg from "../../../../assets/illustrations/characters/matofobico/matofobico-bg.svg";

interface CharacterCardProps {
    name: string;
    image: string;
    bgImage: string;
    buttonColor: string;
    buttonTextColor: string;
    buttonHoverColor?: string;
}

function CharacterCard({ name, image, bgImage, buttonColor, buttonTextColor, buttonHoverColor = 'var(--primary)' }: CharacterCardProps) {
    return (
        <div className={styles.card} style={{ backgroundImage: `url(${bgImage})` }}>
            <div className={styles.cardContent}>
                <div className={styles.image}>
                    <img src={image} alt={name} />
                </div>

                <div className={styles.info}>
                    <p className={styles.name}>{name}</p>
                    <button
                        className={styles.button}
                        style={{
                            backgroundColor: buttonColor,
                            color: buttonTextColor
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = buttonHoverColor;
                            e.currentTarget.style.color = 'var(--color-white)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = buttonColor;
                            e.currentTarget.style.color = buttonTextColor;
                        }}
                    >
                        Me conheça
                    </button>
                </div>
            </div>
        </div>
    );
}
export function Characters() {
    return (
        <section id="secao-personagens" className={`${styles.charactersSection} container py-5 `}>
            <Text as="h2" variant="sectionTitle" className={styles.sectionTitle}>
                Conheça Nossos Personagens
            </Text>
            <div className={styles.grid}>
                <CharacterCard
                    name="Matt"
                    image={mattImg}
                    bgImage={mattBg}
                    buttonColor="var(--secondary)"
                    buttonTextColor="var(--color-white)"
                    buttonHoverColor="var(--secondary-dark)"
                />
                <CharacterCard
                    name="Pam"
                    image={pamImg}
                    bgImage={pamBg}
                    buttonColor="var(--primary)"
                    buttonTextColor="var(--color-white)"
                    buttonHoverColor="var(--primary-hover)"
                />
                <CharacterCard
                    name="Susie"
                    image={susieImg}
                    bgImage={susieBg}
                    buttonColor="var(--color-light-purple-500)"
                    buttonTextColor="var(--color-white)"
                    buttonHoverColor="var(--color-light-purple-600)"
                />
                <CharacterCard
                    name="Vanessinha"
                    image={vanessinhaImg}
                    bgImage={vanessinhaBg}
                    buttonColor="var(--color-blue-purple-500)"
                    buttonTextColor="var(--color-white)"
                    buttonHoverColor="var(--color-blue-purple-600)"
                />
                <CharacterCard
                    name="Patrick"
                    image={patrickImg}
                    bgImage={patrickBg}
                    buttonColor="var(--color-coral-500)"
                    buttonTextColor="var(--color-white)"
                    buttonHoverColor="var(--color-coral-600)"
                />
                <CharacterCard
                    name="Matofóbico"
                    image={matofobicoImg}
                    bgImage={matofobicoBg}
                    buttonColor="var(--color-green-500)"
                    buttonTextColor="var(--color-white)"
                    buttonHoverColor="var(--color-green-600)"
                />
            </div>
        </section>
    );
}