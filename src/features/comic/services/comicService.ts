import type { ComicModule, Comic, FilterType } from '../types/comic.types'

const MOCK_FILTERS: FilterType[] = [
    { id: '1', label: 'Todos', value: 'todos' },
    { id: '2', label: 'Fáceis', value: 'facil' },
    { id: '3', label: 'Desafiadores', value: 'desafiador' },
    { id: '4', label: 'Engraçados', value: 'engracado' },
    { id: '5', label: 'Temáticos', value: 'tematico' },
    { id: '6', label: 'Turminha', value: 'turminha' },
]

const MOCK_COMICS: Comic[] = [
    { id: '1', title: 'Matemática Espacial', coverImage: '/src/assets/images/comics/matematica-espacial/cover/cover-espacial.svg', difficulty: 'facil' },
    { id: '2', title: 'O Mistério do Número', coverImage: '/src/assets/images/comics/comic-placeholders/cover/tirinha-ph2.svg', difficulty: 'desafiador' },
    { id: '3', title: 'A Turma da Matemática', coverImage: '/src/assets/images/comics/comic-placeholders/cover/tirinha-ph3.svg', difficulty: 'turminha' },
    { id: '4', title: 'O Planeta dos Símbolos', coverImage: '/src/assets/images/comics/comic-placeholders/cover/tirinha-ph4.svg', difficulty: 'tematico' },
    { id: '5', title: 'A Grande Soma', coverImage: '/src/assets/images/comics/comic-placeholders/cover/tirinha-ph6.svg', difficulty: 'facil' },
    { id: '6', title: 'Desafio dos Números', coverImage: '/src/assets/images/comics/comic-placeholders/cover/tirinha-ph7.svg', difficulty: 'desafiador' },
    { id: '7', title: 'A Turma do Patrick', coverImage: '/src/assets/images/comics/comic-placeholders/cover/tirnha-ph8.svg', difficulty: 'turminha' },
    { id: '8', title: 'O Enigma Matemático', coverImage: '/src/assets/images/comics/comic-placeholders/cover/tirinha-ph.svg', difficulty: 'tematico' },
]

const MOCK_MODULE: ComicModule = {
    id: '1',
    title: 'Adição',
    description: 'Aprenda a somar números de forma divertida com nossos quadrinhos',
    grade: '5º Ano',
    comics: MOCK_COMICS,
    totalComics: 8,
    completedComics: 2,
    progress: 25,
}

export const comicService = {
    getModuleById: async (moduleId: string): Promise<ComicModule> => {
        return new Promise((resolve) => {
            setTimeout(() => resolve(MOCK_MODULE), 300)
        })
    },

    getFilters: async (): Promise<FilterType[]> => {
        return new Promise((resolve) => {
            setTimeout(() => resolve(MOCK_FILTERS), 200)
        })
    },

    getComicsByFilter: async (moduleId: string, filter: string): Promise<Comic[]> => {
        return new Promise((resolve) => {
            let filtered = MOCK_COMICS
            if (filter !== 'todos') {
                filtered = MOCK_COMICS.filter(c => c.difficulty === filter)
            }
            setTimeout(() => resolve(filtered), 200)
        })
    },
}