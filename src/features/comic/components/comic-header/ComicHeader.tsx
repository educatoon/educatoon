import { useNavigate } from 'react-router-dom'
import arrow from '../../../../assets/Icons/arrow.svg'
import styles from './ComicHeader.module.css'

interface ComicHeaderProps {
    title: string
    grade: string
}

export function ComicHeader({ title, grade }: ComicHeaderProps) {
    const navigate = useNavigate()

    const handleBack = () => {
        navigate('/learn')
    }

    return (
        <div className={styles.header}>
            <div className={styles.leftSection}>
                <button className={styles.backButton} onClick={handleBack}>
                    <img src={arrow} alt="Voltar" />
                </button>
                <h2 className={styles.title}>Educatoon</h2>
            </div>
            <div className={styles.rightSection}>
                <span className={styles.moduleInfo}>
                    {title} - {grade}
                </span>
            </div>
        </div>
    )
}