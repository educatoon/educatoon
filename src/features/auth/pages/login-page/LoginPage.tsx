import { LoginForm } from '../../components/login-form/LoginForm'
import personagens from '../../../../assets/illustrations/characters/group/login-personagens.png'
import styles from './LoginPage.module.css'

export function LoginPage() {
    return (
        <div className={`${styles.container} container`}>
            <div className={styles.leftSide}>
                <LoginForm />
            </div>
            <div className={styles.rightSide}>
                <img src={personagens} alt="Personagens" className={styles.characterImage} />
            </div>
        </div>
    )
}