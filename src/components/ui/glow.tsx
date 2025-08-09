import { cn } from "@/lib/utils"
import { ReactNode } from "react"

interface GlowProps {
  variant?: "top" | "bottom" | "left" | "right"
  className?: string
}

export function Glow({ variant = "top", className }: GlowProps) {
  return (
    <div 
      className={cn(
        "absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-transparent blur-3xl",
        variant === "top" && "top-0 h-64",
        variant === "bottom" && "bottom-0 h-64",
        variant === "left" && "left-0 w-64",
        variant === "right" && "right-0 w-64",
        className
      )}
    />
  )
}