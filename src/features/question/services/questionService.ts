import type { Question, Feedback, AnswerResult } from '../types/question.types'

const MOCK_QUESTIONS: Question[] = [
    {
        id: 'q1',
        question: 'Qual é o resultado de 2 + 2?',
        options: ['2', '3', '4', '5'],
        correctAnswer: '4',
        order: 0,
    },
    {
        id: 'q2',
        question: 'O que aconteceu com o herói?',
        options: ['Ele venceu', 'Ele perdeu', 'Ele fugiu', 'Ele desistiu'],
        correctAnswer: 'Ele venceu',
        order: 1,
    },
]

export const questionService = {
    getQuestions: async (): Promise<Question[]> => {
        return new Promise((resolve) => {
            setTimeout(() => resolve(MOCK_QUESTIONS), 200)
        })
    },

    submitAnswer: async (questionId: string, answer: string): Promise<AnswerResult> => {
        return new Promise((resolve) => {
            const question = MOCK_QUESTIONS.find(q => q.id === questionId)
            const isCorrect = question ? question.correctAnswer === answer : false
            setTimeout(() => resolve({ isCorrect }), 300)
        })
    },
}