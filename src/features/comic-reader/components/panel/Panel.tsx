import type { Panel as PanelType } from '../../types/comicReader.types'
import styles from './Panel.module.css'

interface PanelProps {
    panel: PanelType
}

export function Panel({ panel }: PanelProps) {
    return (
        <div className={`${styles.panel} ${styles[panel.size]}`}>
            <div className={styles.imageWrapper}>
                <div className={styles.placeholder}>
                    <span>Panel {panel.order + 1}</span>
                    <span className={styles.sizeLabel}>{panel.size}</span>
                </div>
            </div>
            <div className={styles.bubble}>
                <p className={styles.text}>{panel.text}</p>
            </div>
        </div>
    )
}