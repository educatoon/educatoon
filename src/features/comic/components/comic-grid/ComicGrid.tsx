import type { Comic } from '../../types/comic.types'
import { ComicCard } from '../comic-card/ComicCard'
import styles from './ComicGrid.module.css'

interface ComicGridProps {
    comics: Comic[]
    onComicClick: (comicId: string) => void
}

export function ComicGrid({ comics, onComicClick }: ComicGridProps) {
    if (comics.length === 0) {
        return (
            <div className={styles.empty}>
                <p>Nenhuma HQ encontrada</p>
            </div>
        )
    }

    const rows = []
    for (let i = 0; i < comics.length; i += 4) {
        rows.push(comics.slice(i, i + 4))
    }

    return (
        <div className={styles.grid}>
            {rows.map((row, rowIndex) => (
                <div key={rowIndex} className={styles.row}>
                    {row.map((comic) => (
                        <div key={comic.id} className={styles.col}>
                            <ComicCard comic={comic} onClick={onComicClick} />
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}