'use client'

import Image from "next/image"
import { useTheme } from "@/components/theme-provider"
import { useEffect, useState } from "react"

export function SocialLinks() {
  const { theme } = useTheme()
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const checkDarkMode = () => {
      const isDarkMode = document.documentElement.classList.contains('dark')
      setIsDark(isDarkMode)
    }

    checkDarkMode()

    // Watch for theme changes
    const observer = new MutationObserver(checkDarkMode)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    })

    return () => observer.disconnect()
  }, [theme])

  return (
    <div className="flex gap-6 items-center">
      <a
        href="https://medium.com/@jsteinb"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-70 transition-opacity"
        aria-label="Medium"
      >
        <Image
          src={isDark ? "/Medium-Light.png" : "/Medium-Dark.png"}
          alt="Medium"
          width={32}
          height={32}
          className="w-8 h-8 object-contain"
        />
      </a>
      <a
        href="https://jordansteinberg.substack.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-70 transition-opacity"
        aria-label="Substack"
      >
        <Image
          src="/Substack.png"
          alt="Substack"
          width={32}
          height={32}
          className="w-8 h-8 object-contain"
        />
      </a>
      <a
        href="https://github.com/jordanskizash"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-70 transition-opacity"
        aria-label="GitHub"
      >
        <Image
          src={isDark ? "/GitHub-Light.png" : "/GitHub-Dark.png"}
          alt="GitHub"
          width={32}
          height={32}
          className="w-8 h-8 object-contain"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/jordan-steinberg/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-70 transition-opacity"
        aria-label="LinkedIn"
      >
        <Image
          src="/LinkedIn.png"
          alt="LinkedIn"
          width={32}
          height={32}
          className="w-8 h-8 object-contain"
        />
      </a>
    </div>
  )
}
