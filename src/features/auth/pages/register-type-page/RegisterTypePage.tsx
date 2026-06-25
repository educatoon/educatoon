import { RegisterType } from '../../components/register-type/RegisterType'
import styles from './RegisterTypePage.module.css'

export function RegisterTypePage() {
    return (
        <div className={styles.page}>
            <RegisterType />
        </div>
    )
}