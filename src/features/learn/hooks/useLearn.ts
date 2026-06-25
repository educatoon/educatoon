import { useState, useEffect, useCallback } from 'react'
import { learnService } from '../services/learnService'
import type { Grade, Content, LearnState } from '../types/learn.types'

export function useLearn() {
    const [state, setState] = useState<LearnState>({
        grades: [],
        contents: [],
        selectedGradeId: null,
        isLoading: true,
        error: null,
    })

    useEffect(() => {
        const loadGrades = async () => {
            try {
                setState(prev => ({ ...prev, isLoading: true, error: null }))
                const grades = await learnService.getGrades()
                setState(prev => ({
                    ...prev,
                    grades,
                    selectedGradeId: grades.length > 0 ? grades[0].id : null,
                    isLoading: false,
                }))
            } catch (error) {
                setState(prev => ({
                    ...prev,
                    isLoading: false,
                    error: 'Erro ao carregar séries',
                }))
                console.error(error)
            }
        }

        loadGrades()
    }, [])

    useEffect(() => {
        if (!state.selectedGradeId) return

        const loadContents = async () => {
            try {
                setState(prev => ({ ...prev, isLoading: true, error: null }))
                const contents = await learnService.getContentsByGrade(state.selectedGradeId!)
                setState(prev => ({
                    ...prev,
                    contents,
                    isLoading: false,
                }))
            } catch (error) {
                setState(prev => ({
                    ...prev,
                    isLoading: false,
                    error: 'Erro ao carregar conteúdos',
                }))
                console.error(error)
            }
        }

        loadContents()
    }, [state.selectedGradeId])

    const selectGrade = useCallback((gradeId: string) => {
        setState(prev => ({ ...prev, selectedGradeId: gradeId }))
    }, [])

    const getContentById = useCallback((contentId: string) => {
        return state.contents.find(c => c.id === contentId)
    }, [state.contents])

    return {
        grades: state.grades,
        contents: state.contents,
        selectedGradeId: state.selectedGradeId,
        isLoading: state.isLoading,
        error: state.error,
        selectGrade,
        getContentById,
    }
}