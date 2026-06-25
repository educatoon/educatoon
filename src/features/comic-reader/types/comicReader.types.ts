import type { Question, Feedback } from '../../question/types/question.types'

export type PanelSize = 'square' | 'rect-2' | 'rect-3'

export interface Panel {
    id: string
    type: 'panel'
    size: PanelSize
    image: string
    text: string
    order: number
}

export interface Complete {
    type: 'complete'
    message: string
}

export type ReaderBlock = Panel | (Question & { type: 'question' }) | (Feedback & { type: 'feedback' }) | Complete

export interface ComicReaderData {
    id: string
    title: string
    description: string
    moduleId: string
    blocks: ReaderBlock[]
    progress: number
}