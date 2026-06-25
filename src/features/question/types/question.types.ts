export interface Question {
    id: string
    question: string
    options: string[]
    correctAnswer: string
    order: number
}

export interface Feedback {
    id: string
    questionId: string
    isCorrect: boolean
    order: number
}

export interface AnswerResult {
    isCorrect: boolean
}