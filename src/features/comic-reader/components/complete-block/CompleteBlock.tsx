import type { Complete } from '../../types/comicReader.types'
import styles from './CompleteBlock.module.css'

interface CompleteBlockProps {
    block: Complete
    onComplete?: () => void
}

export function CompleteBlock({ block, onComplete }: CompleteBlockProps) {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.icon}>emoji</div>
                <p className={styles.message}>{block.message}</p>
                {onComplete && (
                    <button className={styles.finishButton} onClick={onComplete}>
                        Voltar para o módulo
                    </button>
                )}
            </div>
        </div>
    )
}