import { cn } from "@/lib/utils"
import { ReactNode } from "react"

interface MockupProps {
  children: ReactNode
  type?: "browser" | "responsive" | "mobile"
  className?: string
}

export function Mockup({ children, type = "browser", className }: MockupProps) {
  return (
    <div className={cn("relative overflow-hidden rounded-lg", className)}>
      {type === "browser" && (
        <div className="absolute top-0 left-0 right-0 h-8 bg-gray-100 dark:bg-gray-800 rounded-t-lg flex items-center px-4 gap-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
      )}
      {children}
    </div>
  )
}

interface MockupFrameProps {
  children: ReactNode
  size?: "small" | "medium" | "large"
  className?: string
}

export function MockupFrame({ children, size = "medium", className }: MockupFrameProps) {
  const sizeClasses = {
    small: "max-w-2xl",
    medium: "max-w-4xl",
    large: "max-w-6xl"
  }

  return (
    <div className={cn("mx-auto", sizeClasses[size], className)}>
      {children}
    </div>
  )
}