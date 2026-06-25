import { useParams, useNavigate } from 'react-router-dom'
import { NavbarPrivate } from '../../../shared/components/navigation/navbar/private/Navbar'
import { Breadcrumb } from '../../../shared/components/navigation/breadcrumb/Breadcrumb'
import { ComicReader } from '../components/comic-reader/ComicReader'
import { useComicReader } from '../hooks/useComicReader'
import styles from './ComicReaderPage.module.css'

export function ComicReaderPage() {
    const { comicId } = useParams<{ comicId: string }>()
    const navigate = useNavigate()
    const { progress } = useComicReader(comicId || '')

    const handleComplete = () => {
        navigate('/learn')
    }

    const handleBack = () => {
        navigate(-1)
    }

    if (!comicId) {
        return (
            <div className={styles.error}>
                <p>HQ não encontrada</p>
                <button onClick={() => navigate('/learn')}>Voltar</button>
            </div>
        )
    }

    const breadcrumbItems = [
        { label: 'Conteúdos', path: '/learn' },
        { label: 'Adição', path: '/learn/comic/1' },
        { label: 'HQ', isCurrent: true },
    ]

    return (
        <div className={styles.page}>
            <NavbarPrivate
                centerContent={
                    <div className={styles.progressWrapper}>
                        <div className={styles.progressBar}>
                            <div className={styles.progressFill} style={{ width: `${progress}%` }} />
                        </div>
                        <span className={styles.progressLabel}>{progress}%</span>
                    </div>
                }
                background="rgba(113, 90, 255)"
            />
            <div className="container">
                <Breadcrumb items={breadcrumbItems} onBack={handleBack} />
            </div>
            <ComicReader comicId={comicId} onComplete={handleComplete} />
        </div>
    )
}