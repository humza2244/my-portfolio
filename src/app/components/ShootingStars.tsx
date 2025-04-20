'use client'
import React, { useEffect, useRef } from 'react'

const ShootingStars = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const createStar = () => {
      const star = document.createElement('div')
      star.className = 'shooting-star'

      // Random starting position
      const startX = Math.random() * window.innerWidth
      const startY = Math.random() * window.innerHeight

      // Random direction: angle between 0 and 360 degrees
      const angle = Math.random() * 360

      // Set initial position
      star.style.left = `${startX}px`
      star.style.top = `${startY}px`

      // Set transform to move in the chosen direction
      const distance = 1000 // Distance to move
      const radians = (angle * Math.PI) / 180
      const translateX = Math.cos(radians) * distance
      const translateY = Math.sin(radians) * distance
      star.style.transform = `translate(${translateX}px, ${translateY}px)`

      // Random animation duration between 1s and 3s
      const duration = 1 + Math.random() * 2
      star.style.animationDuration = `${duration}s`

      container.appendChild(star)

      // Remove the star after the animation completes
      setTimeout(() => {
        container.removeChild(star)
      }, duration * 1000)
    }

    // Create a new star every 500ms
    const interval = setInterval(createStar, 500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div
      ref={containerRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
    >
      <style jsx>{`
        .shooting-star {
          position: absolute;
          width: 2px;
          height: 2px;
          background: white;
          border-radius: 50%;
          box-shadow: 0 0 6px 2px rgba(255, 255, 255, 0.5);
          animation: shoot linear forwards;
        }

        @keyframes shoot {
          from {
            opacity: 1;
            transform: translate(0, 0);
          }
          to {
            opacity: 0;
            transform: translate(var(--translate-x), var(--translate-y));
          }
        }
      `}</style>
    </div>
  )
}

export default ShootingStars
