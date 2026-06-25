export interface Grade {
    id: string
    label: string
    value: number
}

export interface Content {
    id: string
    title: string
    description: string
    gradeId: string
    coverImage: string
    totalComics: number
    progress: number
    isLocked: boolean
    icon?: string
    color?: string
}

export interface LearnState {
    grades: Grade[]
    contents: Content[]
    selectedGradeId: string | null
    isLoading: boolean
    error: string | null
}