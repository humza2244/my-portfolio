'use client'
import React from 'react'
import { cn } from '../lib/utils'

export function ShootingStars({
  className,
  quantity = 10
}: {
  className?: string
  quantity?: number
}) {
  return (
    <div className={cn('absolute inset-0 -z-10 overflow-hidden', className)}>
      {Array.from({ length: quantity }).map((_, i) => (
        <div
          key={i}
          className="absolute h-0.5 w-0.5 animate-shooting-star rounded-full bg-white opacity-0"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`
          }}
        />
      ))}
    </div>
  )
}
