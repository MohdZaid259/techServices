"use client"

import { useEffect, useRef, type ReactNode } from "react"

interface ScrollAnimationProps {
  children: ReactNode
  animation: "fade-in-up" | "fade-in-left" | "fade-in-right" | "scale-in"
  delay?: "delay-100" | "delay-200" | "delay-300" | "delay-400" | "delay-500"
  threshold?: number
  className?: string
}

export default function ScrollAnimation({
  children,
  animation,
  delay,
  threshold = 0.1,
  className = "",
}: ScrollAnimationProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold,
        rootMargin: "0px 0px -100px 0px",
      },
    )

    const currentRef = ref.current

    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold])

  const animationClasses = `${animation} ${delay || ""}`

  return (
    <div ref={ref} className={`${animationClasses} ${className}`}>
      {children}
    </div>
  )
}
