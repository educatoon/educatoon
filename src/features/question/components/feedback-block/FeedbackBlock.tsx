import type { Feedback } from '../../types/question.types'
import styles from './FeedbackBlock.module.css'

interface FeedbackBlockProps {
    feedback: Feedback
    onContinue?: () => void
}

export function FeedbackBlock({ feedback, onContinue }: FeedbackBlockProps) {
    const isCorrect = feedback.isCorrect

    return (
        <div className={`${styles.container} ${isCorrect ? styles.correct : styles.incorrect}`}>
            <div className={styles.icon}>
                {isCorrect ? '✅' : '❌'}
            </div>
            <p className={styles.message}>
                {isCorrect ? 'Você acertou!' : 'Você errou!'}
            </p>
            {onContinue && (
                <button className={styles.continueButton} onClick={onContinue}>
                    Continuar
                </button>
            )}
        </div>
    )
}