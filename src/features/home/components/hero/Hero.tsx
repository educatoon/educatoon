import { Button } from "@/shared/components/ui/button/Button";
import { Text } from "@/shared/components/ui/text/Text";
import styles from "./Hero.module.css";

export function Hero() {
    return (
        <section className={styles.hero}>
            <div className="container py-5 py-md-5">
                <div className="row justify-content-center justify-content-lg-start text-center text-lg-start">
                    <div className="col-lg-5 col-md-7 col-sm-12">
                        <div className={styles.content}>
                            <Text as="h1" variant="pageTitle" className={styles.title}>
                                Junte-se a <br />aventura!
                            </Text>

                            <Text variant="body" className={styles.subtitle}>
                                Transforme a <b>aprendizagem</b> <br /> em <b>diversão</b> com o Educatoon!
                            </Text>

                            <Button className={`${styles.heroButton} mx-auto mx-lg-0`}>
                                Começar agora
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}