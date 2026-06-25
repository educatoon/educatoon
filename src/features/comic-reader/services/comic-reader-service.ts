import type { ReaderBlock } from '../types/comicReader.types'

const MOCK_BLOCKS: ReaderBlock[] = [
    {
        id: 'p1',
        type: 'panel',
        size: 'square',
        image: '/src/assets/panels/panel1.svg',
        text: 'Era uma vez um herói corajoso...',
        order: 0,
    },
    {
        id: 'p2',
        type: 'panel',
        size: 'square',
        image: '/src/assets/panels/panel2.svg',
        text: 'Ele enfrentou um grande desafio...',
        order: 1,
    },
    {
        id: 'p3',
        type: 'panel',
        size: 'square',
        image: '/src/assets/panels/panel3.svg',
        text: 'Mas não sabia como resolver...',
        order: 2,
    },
    {
        id: 'q1',
        type: 'question',
        question: 'Qual era o principal problema do herói?',
        options: ['Falta de coragem', 'Falta de amigos', 'Um monstro gigante', 'Uma tempestade'],
        correctAnswer: 'Um monstro gigante',
        order: 3,
    },
    {
        id: 'f1',
        type: 'feedback',
        questionId: 'q1',
        isCorrect: false,
        order: 4,
    },
    {
        id: 'p4',
        type: 'panel',
        size: 'rect-2',
        image: '/src/assets/panels/panel4.svg',
        text: 'Então ele decidiu enfrentar o monstro...',
        order: 5,
    },
    {
        id: 'p5',
        type: 'panel',
        size: 'square',
        image: '/src/assets/panels/panel5.svg',
        text: 'Com sua inteligência, ele venceu!',
        order: 6,
    },
    {
        id: 'q2',
        type: 'question',
        question: 'Como o herói derrotou o monstro?',
        options: ['Com uma espada', 'Com inteligência', 'Com magia', 'Com ajuda dos amigos'],
        correctAnswer: 'Com inteligência',
        order: 7,
    },
    {
        id: 'f2',
        type: 'feedback',
        questionId: 'q2',
        isCorrect: true,
        order: 8,
    },
    {
        id: 'p6',
        type: 'panel',
        size: 'rect-3',
        image: '/src/assets/panels/panel6.svg',
        text: 'E todos viveram felizes para sempre.',
        order: 9,
    },
    {
        type: 'complete',
        message: '🎉 Parabéns! Você completou a HQ!',
    },
]

export const comicReaderService = {
    getComicBlocks: async (comicId: string): Promise<ReaderBlock[]> => {
        return new Promise((resolve) => {
            setTimeout(() => resolve(MOCK_BLOCKS), 400)
        })
    },

    getComicProgress: async (comicId: string): Promise<number> => {
        return new Promise((resolve) => {
            setTimeout(() => resolve(0), 200)
        })
    },
}