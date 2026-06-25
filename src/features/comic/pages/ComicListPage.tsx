import { useParams, useNavigate } from 'react-router-dom'
import { NavbarPrivate } from '../../../shared/components/navigation/navbar/private/Navbar'
import { Breadcrumb } from '../../../shared/components/navigation/breadcrumb/Breadcrumb'
import { ComicGrid } from '../components/comic-grid/ComicGrid'
import { FilterTags } from '../components/filter-tags/FilterTags'
import { Pagination } from '../components/pagination/Pagination'
import { useComicList } from '../hooks/useComicList'
import styles from './ComicListPage.module.css'

export function ComicListPage() {
    const { moduleId } = useParams<{ moduleId: string }>()
    const navigate = useNavigate()
    const {
        module,
        filters,
        selectedFilter,
        filteredComics,
        isLoading,
        error,
        applyFilter
    } = useComicList(moduleId || '')

    const handleComicClick = (comicId: string) => {
        navigate(`/comic/${comicId}`)
    }

    const handleBack = () => {
        navigate('/learn')
    }

    if (isLoading) {
        return (
            <div className={styles.loading}>
                <p>Carregando...</p>
            </div>
        )
    }

    if (error || !module) {
        return (
            <div className={styles.error}>
                <p>{error || 'Módulo não encontrado'}</p>
                <button onClick={() => navigate('/learn')}>Voltar</button>
            </div>
        )
    }

    const breadcrumbItems = [
        { label: 'Conteúdos', path: '/learn' },
        { label: module.title, isCurrent: true },
    ]
    return (
        <div className={styles.comicPage}>
            <NavbarPrivate
                // textColor="var(--primary)"
                // logoColor="var(--primary)"
                // iconColor="var(--primary)"
                // iconBackground="rgba(243, 183, 0, 0.3)"
                background="rgba(113, 90, 255)"

            />

            <div className="container">
                <Breadcrumb items={breadcrumbItems} onBack={handleBack} />
            </div>

            <div className="container text-center d-flex flex-column align-items-center">
                <p className={styles.pageTitle}>Explore os quadrinhos</p>

                <FilterTags
                    filters={filters}
                    selectedFilter={selectedFilter}
                    onFilterSelect={applyFilter}
                />

                <ComicGrid
                    comics={filteredComics}
                    onComicClick={handleComicClick}
                />

                <Pagination
                    currentPage={1}
                    totalPages={3}
                    onPageChange={() => { }}
                />
            </div>
        </div>
    )
}