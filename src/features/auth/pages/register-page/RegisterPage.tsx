import { RegisterForm } from '../../components/register-form/RegisterForm'
import styles from './RegisterPage.module.css'

export function RegisterPage() {
    return (
        <div className={`${styles.container} `}>
            <div className={styles.leftSide} />
            <div className={styles.rightSide}>
                <RegisterForm />
            </div>
        </div>
    )
}