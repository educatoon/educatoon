import type { Grade } from '../../types/learn.types'
import styles from './GradeSelector.module.css'

interface GradeSelectorProps {
    grades: Grade[]
    selectedId: string | null
    onSelect: (gradeId: string) => void
    label?: string
    variant?: 'default' | 'compact' | 'navbar'
    disabled?: boolean
}

export function GradeSelector({
    grades,
    selectedId,
    onSelect,
    label = 'Série:',
    variant = 'default',
    disabled = false
}: GradeSelectorProps) {
    if (grades.length === 0) {
        return null
    }

    return (
        <div className={`${styles.selector} ${styles[variant]}`}>
            {label && (
                <label className={styles.label}>
                    {label}
                </label>
            )}

            <div className={styles.selectWrapper}>
                <select
                    className={styles.select}
                    value={selectedId || grades[0]?.id || ''}
                    onChange={(e) => onSelect(e.target.value)}
                    disabled={disabled}
                >
                    {grades.map((grade) => (
                        <option key={grade.id} value={grade.id}>
                            {grade.label}
                        </option>
                    ))}
                </select>
                <svg className={styles.arrowIcon} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff">
                    <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
                </svg>
            </div>
        </div>
    )
}