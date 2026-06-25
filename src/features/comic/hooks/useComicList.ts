import { useState, useEffect, useCallback } from 'react'
import { comicService } from '../services/comicService'
import type { ComicModule, Comic, FilterType } from '../types/comic.types'

export function useComicList(moduleId: string) {
    const [module, setModule] = useState<ComicModule | null>(null)
    const [filters, setFilters] = useState<FilterType[]>([])
    const [selectedFilter, setSelectedFilter] = useState<string>('todos')
    const [filteredComics, setFilteredComics] = useState<Comic[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const loadData = async () => {
            try {
                setIsLoading(true)
                const [moduleData, filtersData] = await Promise.all([
                    comicService.getModuleById(moduleId),
                    comicService.getFilters(),
                ])
                setModule(moduleData)
                setFilters(filtersData)
                setFilteredComics(moduleData.comics)
                setError(null)
            } catch (err) {
                setError('Erro ao carregar módulo')
                console.error(err)
            } finally {
                setIsLoading(false)
            }
        }

        loadData()
    }, [moduleId])

    const applyFilter = useCallback(async (filterValue: string) => {
        setSelectedFilter(filterValue)
        try {
            const comics = await comicService.getComicsByFilter(moduleId, filterValue)
            setFilteredComics(comics)
        } catch (err) {
            console.error('Erro ao aplicar filtro:', err)
        }
    }, [moduleId])

    return {
        module,
        filters,
        selectedFilter,
        filteredComics,
        isLoading,
        error,
        applyFilter,
    }
}