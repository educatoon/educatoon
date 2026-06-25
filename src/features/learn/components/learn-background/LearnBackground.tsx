import cloud from '../../../../assets/illustrations/decorative/cloud.png'
import groundGrass from '../../../../assets/illustrations/decorative/ground-grass.svg'
import wave from '../../../../assets/illustrations/decorative/wave.svg'
import styles from './LearnBackground.module.css'

export function LearnBackground() {
    return (
        <div className={styles.background}>
            <div className={styles.gradientBg} />
            <div className={styles.lightPoint} />
            <img className={styles.cloudLeft} src={cloud} alt="cloud" />
            <img className={styles.cloudRight} src={cloud} alt="cloud" />
            <img className={styles.waveBg} src={wave} alt="wave background" />
            <img className={styles.groundGrass} src={groundGrass} alt="grass" />
        </div>
    )
}