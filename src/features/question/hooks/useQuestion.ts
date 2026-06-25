import { useState, useCallback } from 'react'
import { questionService } from '../services/questionService'
import type { Question, Feedback, AnswerResult } from '../types/question.types'

export function useQuestion() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const submitAnswer = useCallback(async (
        questionId: string,
        answer: string
    ): Promise<AnswerResult> => {
        setIsSubmitting(true)
        setError(null)

        try {
            const result = await questionService.submitAnswer(questionId, answer)
            return result
        } catch (err) {
            setError('Erro ao enviar resposta')
            throw err
        } finally {
            setIsSubmitting(false)
        }
    }, [])

    return {
        isSubmitting,
        error,
        submitAnswer,
    }
}