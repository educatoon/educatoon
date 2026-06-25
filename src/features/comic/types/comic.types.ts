export interface Comic {
    id: string
    title: string
    coverImage: string
    difficulty: 'facil' | 'desafiador' | 'engracado' | 'tematico' | 'turminha'
    isCompleted?: boolean
    isLocked?: boolean
}

export interface ComicModule {
    id: string
    title: string
    description: string
    grade: string
    comics: Comic[]
    totalComics: number
    completedComics: number
    progress: number
}

export interface FilterType {
    id: string
    label: string
    value: string
}