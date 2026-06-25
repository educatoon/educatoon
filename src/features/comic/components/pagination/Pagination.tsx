import styles from './Pagination.module.css'

interface PaginationProps {
    currentPage: number
    totalPages: number
    onPageChange: (page: number) => void
}

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
    const handlePrevious = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1)
        }
    }

    const handleNext = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1)
        }
    }

    return (
        <nav className={styles.pagination} aria-label="Navegação de páginas">
            <ul className={styles.list}>
                <li className={styles.item}>
                    <button
                        className={styles.link}
                        onClick={handlePrevious}
                        disabled={currentPage === 1}
                        aria-label="Página anterior"
                    >
                        <span aria-hidden="true">&laquo;</span>
                    </button>
                </li>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <li key={page} className={styles.item}>
                        <button
                            className={`${styles.link} ${page === currentPage ? styles.active : ''}`}
                            onClick={() => onPageChange(page)}
                        >
                            {page}
                        </button>
                    </li>
                ))}
                <li className={styles.item}>
                    <button
                        className={styles.link}
                        onClick={handleNext}
                        disabled={currentPage === totalPages}
                        aria-label="Próxima página"
                    >
                        <span aria-hidden="true">&raquo;</span>
                    </button>
                </li>
            </ul>
        </nav>
    )
}