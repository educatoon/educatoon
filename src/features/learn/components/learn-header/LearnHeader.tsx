import { Link } from 'react-router-dom'
import styles from './LearnHeader.module.css'

interface LearnHeaderProps {
    onNavigate: () => void
}

export function LearnHeader({ onNavigate }: LearnHeaderProps) {
    return (
        <>
            <div className={styles.topText}>
                <p className={styles.title}>
                    <span style={{ color: '#F3B700' }}>Escolha</span> sua jornada
                </p>
            </div>

            <div className={styles.bottomButton} onClick={onNavigate}>
                <Link to="/selecthq" className={styles.link}>
                    <p className={styles.buttonText}>Iniciar</p>
                </Link>
            </div>
        </>
    )
}