import type { FilterType } from '../../types/comic.types'
import styles from './FilterTags.module.css'

interface FilterTagsProps {
    filters: FilterType[]
    selectedFilter: string
    onFilterSelect: (filterValue: string) => void
}

export function FilterTags({ filters, selectedFilter, onFilterSelect }: FilterTagsProps) {
    return (
        <div className={styles.filters}>
            {filters.map((filter) => (
                <button
                    key={filter.id}
                    className={`${styles.filterTag} ${selectedFilter === filter.value ? styles.active : ''}`}
                    onClick={() => onFilterSelect(filter.value)}
                >
                    {filter.label}
                </button>
            ))}
        </div>
    )
}