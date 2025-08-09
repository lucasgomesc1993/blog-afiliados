import Image from "next/image"
import { cn } from "@/lib/utils"

interface ScreenshotProps {
  srcLight: string
  srcDark: string
  alt: string
  width: number
  height: number
  className?: string
}

export function Screenshot({ srcLight, srcDark, alt, width, height, className }: ScreenshotProps) {
  return (
    <div className={cn("relative", className)}>
      <Image
        src={srcLight}
        alt={alt}
        width={width}
        height={height}
        className="block dark:hidden"
      />
      <Image
        src={srcDark}
        alt={alt}
        width={width}
        height={height}
        className="hidden dark:block"
      />
    </div>
  )
}