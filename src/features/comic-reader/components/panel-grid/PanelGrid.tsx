import { Panel } from '../panel/Panel'
import type { Panel as PanelType } from '../../types/comicReader.types'
import styles from './PanelGrid.module.css'

interface PanelGridProps {
    panels: PanelType[]
}

export function PanelGrid({ panels }: PanelGridProps) {
    if (panels.length === 0) return null

    return (
        <div className={styles.grid}>
            {panels.map((panel) => (
                <Panel key={panel.id} panel={panel} />
            ))}
        </div>
    )
}