import { Link } from 'react-router-dom'
import styles from './Breadcrumb.module.css'

export interface BreadcrumbItem {
    label: string
    path?: string
    isCurrent?: boolean
}

interface BreadcrumbProps {
    items: BreadcrumbItem[]
    onBack?: () => void
}

export function Breadcrumb({ items, onBack }: BreadcrumbProps) {
    return (
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <div className="container px-0 d-flex align-items-center">
                {onBack && (
                    <button className={`${styles.backButton} me-2`} onClick={onBack} aria-label="Voltar">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                )}

                <ol className={styles.list}>
                    {items.map((item, index) => {
                        const isLast = index === items.length - 1

                        return (
                            <li key={index} className={styles.item}>
                                {item.path && !isLast ? (
                                    <Link to={item.path} className={styles.link}>
                                        {item.label}
                                    </Link>
                                ) : (
                                    <span className={`${styles.label} ${isLast ? styles.current : ''}`}>
                                        {item.label}
                                    </span>
                                )}
                                {!isLast && (
                                    <span className={styles.separator}>›</span>
                                )}
                            </li>
                        )
                    })}
                </ol>
            </div>
        </nav>
    )
}