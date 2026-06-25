import type { Grade, Content } from '../types/learn.types'

const MOCK_GRADES: Grade[] = [
    { id: '1', label: '1º Ano - Ensino Fundamental', value: 1 },
    { id: '2', label: '2º Ano', value: 2 },
    { id: '3', label: '3º Ano', value: 3 },
    { id: '4', label: '4º Ano', value: 4 },
    { id: '5', label: '5º Ano', value: 5 },
    { id: '6', label: '6º Ano', value: 6 },
    { id: '7', label: '7º Ano', value: 7 },
    { id: '8', label: '8º Ano', value: 8 },
    { id: '9', label: '9º Ano', value: 9 },
]

const MOCK_CONTENTS: Content[] = [
    {
        id: '1',
        title: 'Adição',
        description: 'Aprenda a somar números de forma divertida',
        gradeId: '1',
        coverImage: '/src/assets/illustrations/characters/patrick/patrick-planeta.png',
        totalComics: 5,
        progress: 60,
        isLocked: false,
        icon: '➕',
        color: '#FF6B6B'
    },
    {
        id: '2',
        title: 'Subtração',
        description: 'Descubra o mundo da subtração',
        gradeId: '1',
        coverImage: '/src/assets/illustrations/characters/susie/susie-planeta.png',
        totalComics: 4,
        progress: 25,
        isLocked: false,
        icon: '➖',
        color: '#4ECDC4'
    },
    {
        id: '3',
        title: 'Multiplicação',
        description: 'Multiplique números com aventuras',
        gradeId: '1',
        coverImage: '/src/assets/illustrations/characters/matt/matt-planeta.png',
        totalComics: 6,
        progress: 0,
        isLocked: false,
        icon: '✖️',
        color: '#45B7D1'
    },
    {
        id: '4',
        title: 'Divisão',
        description: 'Divida números como um herói',
        gradeId: '1',
        coverImage: '/src/assets/illustrations/characters/pam/pam-planeta.png',
        totalComics: 3,
        progress: 0,
        isLocked: false,
        icon: '➗',
        color: '#96CEB4'
    },
    {
        id: '5',
        title: 'Frações',
        description: 'Explore o mundo das frações',
        gradeId: '1',
        coverImage: '/src/assets/illustrations/characters/matofobico/matofobico-planeta.png',
        totalComics: 7,
        progress: 0,
        isLocked: false,
        icon: '🧮',
        color: '#FFEAA7'
    },
]

export const learnService = {
    getGrades: async (): Promise<Grade[]> => {
        return new Promise((resolve) => {
            setTimeout(() => resolve(MOCK_GRADES), 100)
        })
    },

    getContentsByGrade: async (gradeId: string): Promise<Content[]> => {
        return new Promise((resolve) => {
            const filtered = MOCK_CONTENTS.filter(c => c.gradeId === gradeId)
            setTimeout(() => resolve(filtered), 100)
        })
    },

    getContentById: async (contentId: string): Promise<Content> => {
        return new Promise((resolve, reject) => {
            const content = MOCK_CONTENTS.find(c => c.id === contentId)
            if (content) {
                setTimeout(() => resolve(content), 100)
            } else {
                reject(new Error('Conteúdo não encontrado'))
            }
        })
    },
}