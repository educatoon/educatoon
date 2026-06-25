import { useNavigate } from 'react-router-dom'
import { NavbarPrivate } from '../../../shared/components/navigation/navbar/private/Navbar'
import { GradeSelector } from '../components/grade-selector/GradeSelector'
import { PlanetCarousel } from '../components/planet-carousel/PlanetCarousel'
import { LearnBackground } from '../components/learn-background/LearnBackground'
import { useLearn } from '../hooks/useLearn'
import styles from './LearnPage.module.css'

export function LearnPage() {
    const navigate = useNavigate()
    const {
        grades,
        contents,
        selectedGradeId,
        isLoading,
        error,
        selectGrade
    } = useLearn()

    const handleContentSelect = (contentId: string) => {
        navigate(`/learn/comic/${contentId}`)
    }

    const handleStart = () => {
        if (contents.length > 0 && !contents[0].isLocked) {
            navigate(`/learn/comic/${contents[0].id}`)
        }
    }

    if (isLoading) {
        return (
            <div className={styles.loading}>
                <p>Carregando...</p>
            </div>
        )
    }

    if (error) {
        return (
            <div className={styles.error}>
                <p>{error}</p>
                <button onClick={() => window.location.reload()}>Tentar novamente</button>
            </div>
        )
    }

    return (
        <div className={styles.learnPage}>
            <LearnBackground />

            <div className="container">
                <NavbarPrivate
                    centerContent={
                        <GradeSelector
                            grades={grades}
                            selectedId={selectedGradeId}
                            onSelect={selectGrade}
                            variant="navbar"
                            label=""
                        />
                    }
                // background="rgba(113, 90, 255, 0.3)"
                />
            </div>

            <PlanetCarousel
                contents={contents}
                onSelect={handleContentSelect}
            />

            <button
                className={styles.startButton}
                onClick={handleStart}
            >
                Iniciar
            </button>
        </div>
    )
}