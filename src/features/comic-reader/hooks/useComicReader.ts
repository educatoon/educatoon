import { useState, useEffect, useCallback } from 'react'
import { comicReaderService } from '../services/comic-reader-service'
import type { ReaderBlock } from '../types/comicReader.types'


export function useComicReader(comicId: string) {
    const [blocks, setBlocks] = useState<ReaderBlock[]>([])
    const [currentBlockIndex, setCurrentBlockIndex] = useState(0)
    const [progress, setProgress] = useState(0)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const [isComplete, setIsComplete] = useState(false)

    useEffect(() => {
        const loadComic = async () => {
            try {
                setIsLoading(true)
                const data = await comicReaderService.getComicBlocks(comicId)
                setBlocks(data)
                setError(null)
            } catch (err) {
                setError('Erro ao carregar HQ')
            } finally {
                setIsLoading(false)
            }
        }

        loadComic()
    }, [comicId])

    const advanceToNextBlock = useCallback(() => {
        if (currentBlockIndex < blocks.length - 1) {
            setCurrentBlockIndex(prev => prev + 1)
        } else {
            setIsComplete(true)
        }
    }, [currentBlockIndex, blocks.length])

    const updateProgress = useCallback((answeredQuestions: number, totalQuestions: number) => {
        const newProgress = totalQuestions > 0
            ? Math.round((answeredQuestions / totalQuestions) * 100)
            : 0
        setProgress(newProgress)
    }, [])

    const currentBlock = blocks[currentBlockIndex] || null
    const totalBlocks = blocks.length
    const isLastBlock = currentBlockIndex === totalBlocks - 1

    return {
        blocks,
        currentBlock,
        currentBlockIndex,
        totalBlocks,
        isLastBlock,
        isComplete,
        progress,
        isLoading,
        error,
        advanceToNextBlock,
        updateProgress,
    }
}