import type { Content } from '../../types/learn.types'
import styles from './PlanetCard.module.css'

type PlanetPosition = 'left-start' | 'left' | 'center' | 'right' | 'right-end'

interface PlanetCardProps {
    content: Content
    position: PlanetPosition
    isVisible: boolean
    onClick?: (contentId: string) => void
}

export function PlanetCard({
    content,
    position,
    isVisible,
    onClick
}: PlanetCardProps) {
    if (!isVisible) return null

    const handleClick = () => {
        if (!content.isLocked && onClick) {
            onClick(content.id)
        }
    }

    const bgImage = content.coverImage ? `url(${content.coverImage})` : 'none'
    const bgColor = content.color || '#715AFF'

    return (
        <div
            className={`${styles.planetWrapper} ${styles[position]}`}
            onClick={handleClick}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === 'Enter' && !content.isLocked && onClick) {
                    onClick(content.id)
                }
            }}
        >
            <div
                className={styles.planet}
                style={{
                    backgroundImage: bgImage,
                    backgroundColor: bgImage === 'none' ? bgColor : 'transparent',
                    opacity: content.isLocked ? 0.6 : 1,
                    cursor: content.isLocked ? 'not-allowed' : 'pointer',
                }}
            >
                {/* {content.isLocked && (
                    <div className={styles.lockOverlay}>
                        <span className={styles.lockIcon}>🔒</span>
                    </div>
                )} */}

                {/* {content.progress > 0 && !content.isLocked && (
                    <div className={styles.progressBadge}>
                        <span>{content.progress}%</span>
                    </div>
                )}

                {content.totalComics >= 5 && !content.isLocked && (
                    <div className={styles.featuredBadge}>
                        <span>FAV-ICONE</span>
                    </div>
                )} */}
            </div>

            <div className={styles.planetName}>
                <span>{content.title}</span>
            </div>
        </div>
    )
}