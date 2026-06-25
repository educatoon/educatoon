import { useState } from 'react'
import type { Question } from '../../types/question.types'
import styles from './QuestionBlock.module.css'

interface QuestionBlockProps {
    question: Question
    onAnswer: (questionId: string, answer: string) => void
    isSubmitting?: boolean
}

export function QuestionBlock({ question, onAnswer, isSubmitting = false }: QuestionBlockProps) {
    const [selectedOption, setSelectedOption] = useState<string | null>(null)

    const handleSubmit = () => {
        if (selectedOption && !isSubmitting) {
            onAnswer(question.id, selectedOption)
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.questionHeader}>
                <span className={styles.badge}>❓ Pergunta</span>
                <span className={styles.order}>#{question.order + 1}</span>
            </div>

            <p className={styles.questionText}>{question.question}</p>

            <div className={styles.options}>
                {question.options.map((option, index) => (
                    <button
                        key={index}
                        className={`${styles.option} ${selectedOption === option ? styles.selected : ''}`}
                        onClick={() => setSelectedOption(option)}
                        disabled={isSubmitting}
                    >
                        <span className={styles.optionLetter}>
                            {String.fromCharCode(65 + index)}
                        </span>
                        <span className={styles.optionText}>{option}</span>
                    </button>
                ))}
            </div>

            <button
                className={styles.submitButton}
                onClick={handleSubmit}
                disabled={!selectedOption || isSubmitting}
            >
                {isSubmitting ? 'Verificando...' : 'Responder'}
            </button>
        </div>
    )
}