import { useState } from 'react'
import type { Content } from '../../types/learn.types'
import { PlanetCard } from '../planet-card/PlanetCard'
import styles from './PlanetCarousel.module.css'

interface PlanetCarouselProps {
  contents: Content[]
  onSelect: (contentId: string) => void
}

export function PlanetCarousel({ contents, onSelect }: PlanetCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(2)

  if (contents.length === 0) {
    return (
      <div className={styles.empty}>
        <p>Nenhum conteúdo disponível</p>
      </div>
    )
  }

  const displayContents = [...contents]

  while (displayContents.length < 5) {
    displayContents.push({
      id: `placeholder-${displayContents.length}`,
      title: 'Em breve',
      description: '',
      gradeId: '',
      coverImage: '',
      totalComics: 0,
      progress: 0,
      isLocked: true,
    })
  }

  const getVisiblePlanets = () => {
    const total = displayContents.length
    const result = []

    for (let i = -2; i <= 2; i++) {
      const index = (currentIndex + i + total) % total
      result.push(displayContents[index])
    }

    return result
  }

  const visiblePlanets = getVisiblePlanets()
  const positions = ['left-start', 'left', 'center', 'right', 'right-end'] as const

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + displayContents.length) % displayContents.length)
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % displayContents.length)
  }

  return (
    <div className={styles.carousel}>
      {visiblePlanets.map((content, index) => (
        <PlanetCard
          key={content.id}
          content={content}
          position={positions[index]}
          isVisible={true}
          onClick={onSelect}
        />
      ))}

      <div className={styles.navigationButtons}>
        <button
          className={styles.prevBtn}
          onClick={handlePrevious}
          aria-label="Anterior"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <button
          className={styles.nextBtn}
          onClick={handleNext}
          aria-label="Próximo"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  )
}