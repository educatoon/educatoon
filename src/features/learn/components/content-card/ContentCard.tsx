import type { Content } from '../../types/learn.types'
import styles from './ContentCard.module.css'

interface ContentCardProps {
    content: Content
    onClick: (contentId: string) => void
    variant?: 'default' | 'compact' | 'featured'
    showProgress?: boolean
}

export function ContentCard({
    content,
    onClick,
    variant = 'default',
    showProgress = true
}: ContentCardProps) {
    const isCompleted = content.progress === 100
    const isInProgress = content.progress > 0 && content.progress < 100

    const handleClick = () => {
        if (!content.isLocked) {
            onClick(content.id)
        }
    }

    return (
        <div
            className={`${styles.card} ${styles[variant]} ${content.isLocked ? styles.locked : ''}`}
            onClick={handleClick}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === 'Enter' && !content.isLocked) {
                    onClick(content.id)
                }
            }}
        >
            <div className={styles.imageWrapper}>
                <img src={content.coverImage} alt={content.title} />

                {content.isLocked && (
                    <div className={styles.lockOverlay}>
                        <span className={styles.lockIcon}>🔒</span>
                    </div>
                )}

                {showProgress && isInProgress && (
                    <div className={styles.progressBar}>
                        <div
                            className={styles.progressFill}
                            style={{ width: `${content.progress}%` }}
                        />
                    </div>
                )}

                {variant === 'featured' && (
                    <div className={styles.featuredBadge}>
                        <span>Destaque</span>
                    </div>
                )}
            </div>

            <div className={styles.content}>
                <div className={styles.header}>
                    {content.icon && (
                        <span className={styles.icon}>{content.icon}</span>
                    )}
                    <h3 className={styles.title}>
                        {content.title}
                    </h3>
                </div>

                <p className={styles.description}>
                    {content.description}
                </p>

                <div className={styles.footer}>
                    <div className={styles.metadata}>
                        <span className={styles.comicCount}>
                            📚 {content.totalComics} HQs
                        </span>

                        {showProgress && isCompleted && (
                            <span className={styles.completedBadge}>✅ Concluído</span>
                        )}

                        {showProgress && isInProgress && (
                            <span className={styles.progressBadge}>
                                {content.progress}%
                            </span>
                        )}
                    </div>

                    <button
                        className={`${styles.accessButton} ${content.isLocked ? styles.lockedButton : ''}`}
                        disabled={content.isLocked}
                        onClick={(e) => {
                            e.stopPropagation()
                            onClick(content.id)
                        }}
                    >
                        {content.isLocked ? 'Bloqueado' : 'Acessar'}
                    </button>
                </div>
            </div>
        </div>
    )
}