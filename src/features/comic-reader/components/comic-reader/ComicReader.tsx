import { useState, useCallback } from 'react'
import { QuestionBlock, FeedbackBlock } from '../../../question'
import { PanelGrid } from '../panel-grid/PanelGrid'
import { CompleteBlock } from '../complete-block/CompleteBlock'
import { useComicReader } from '../../hooks/useComicReader'
import type { Panel } from '../../types/comicReader.types'
import styles from './ComicReader.module.css'

interface ComicReaderProps {
    comicId: string
    onComplete?: () => void
}

export function ComicReader({ comicId, onComplete }: ComicReaderProps) {
    const {
        blocks,
        currentBlock,
        currentBlockIndex,
        isLoading,
        error,
        isComplete,
        progress,
        advanceToNextBlock,
        updateProgress,
    } = useComicReader(comicId)

    const [answeredQuestions, setAnsweredQuestions] = useState(0)
    const [totalQuestions, setTotalQuestions] = useState(0)

    const handleQuestionAnswer = useCallback((questionId: string, isCorrect: boolean) => {
        setAnsweredQuestions(prev => prev + 1)
        updateProgress(answeredQuestions + 1, totalQuestions)
        advanceToNextBlock()
    }, [answeredQuestions, totalQuestions, updateProgress, advanceToNextBlock])

    const handleFeedbackContinue = useCallback(() => {
        advanceToNextBlock()
    }, [advanceToNextBlock])

    const handleComplete = useCallback(() => {
        if (onComplete) {
            onComplete()
        }
    }, [onComplete])

    if (isLoading) {
        return (
            <div className={styles.loading}>
                <p>Carregando HQ...</p>
            </div>
        )
    }

    if (error) {
        return (
            <div className={styles.error}>
                <p>{error}</p>
            </div>
        )
    }

    if (isComplete || !currentBlock) {
        return (
            <CompleteBlock
                block={{ type: 'complete', message: 'Parabéns! Você completou a HQ!' }}
                onComplete={handleComplete}
            />
        )
    }

    const renderBlock = () => {
        switch (currentBlock.type) {
            case 'panel':
                const panelBlocks: Panel[] = []
                let index = currentBlockIndex
                while (index < blocks.length && blocks[index].type === 'panel') {
                    panelBlocks.push(blocks[index] as Panel)
                    index++
                }
                return <PanelGrid key={currentBlock.id} panels={panelBlocks} />

            case 'question':
                return (
                    <QuestionBlock
                        key={currentBlock.id}
                        question={currentBlock}
                        onAnswer={(questionId, answer) => {
                            const isCorrect = Math.random() > 0.5
                            handleQuestionAnswer(questionId, isCorrect)
                        }}
                    />
                )

            case 'feedback':
                return (
                    <FeedbackBlock
                        key={currentBlock.id}
                        feedback={currentBlock}
                        onContinue={handleFeedbackContinue}
                    />
                )

            default:
                return null
        }
    }

    return (
        <div className={styles.reader}>
            {/* <div className={styles.progressBar}>
                <div className={styles.progressFill} style={{ width: `${progress}%` }} />
            </div> */}
            <div className={styles.content}>
                {renderBlock()}
            </div>
        </div>
    )
}