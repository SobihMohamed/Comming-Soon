"use client"

import { useEffect, useState } from "react"

interface VideoBackgroundProps {
  videoUrl: string
  duration?: number
  onComplete?: () => void
}

export default function VideoBackground({ videoUrl, duration = 4000, onComplete }: VideoBackgroundProps) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      onComplete?.()
    }, duration)

    return () => clearTimeout(timer)
  }, [duration, onComplete])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 bg-background">
      <video
        autoPlay
        muted
        className="w-full h-full object-cover"
        onEnded={() => {
          setIsVisible(false)
          onComplete?.()
        }}
      >
        <source src={videoUrl} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="text-white text-2xl font-bold">EOS</div>
      </div>
    </div>
  )
}
