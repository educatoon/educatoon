import type { Comic } from '../../types/comic.types'
import styles from './ComicCard.module.css'

interface ComicCardProps {
    comic: Comic
    onClick: (comicId: string) => void
}

export function ComicCard({ comic, onClick }: ComicCardProps) {
    const handleClick = () => {
        if (!comic.isLocked) {
            onClick(comic.id)
        }
    }

    return (
        <div
            className={`${styles.card} ${comic.isLocked ? styles.locked : ''}`}
            onClick={handleClick}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === 'Enter' && !comic.isLocked) {
                    onClick(comic.id)
                }
            }}
        >
            <div className={styles.imageWrapper}>
                <img src={comic.coverImage} alt={comic.title} />
                {comic.isLocked && (
                    <div className={styles.lockOverlay}>emoji</div>
                )}
                {comic.isCompleted && (
                    <div className={styles.completedBadge}>emoji</div>
                )}
            </div>
            {/* <div className={styles.content}>
                <span className={styles.title}>{comic.title}</span>
                <span className={styles.difficulty}>{comic.difficulty}</span>
            </div> */}
        </div>
    )
}