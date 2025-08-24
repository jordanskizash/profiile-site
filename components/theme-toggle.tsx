"use client"

import { Switch } from "@/components/ui/switch"
import { useTheme } from "@/components/theme-provider"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const isDark = theme === "dark" || (theme === "system" && typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches)

  return (
    <Switch
      checked={isDark}
      onCheckedChange={(checked) => {
        setTheme(checked ? "dark" : "light")
      }}
      className="data-[state=checked]:bg-primary data-[state=unchecked]:bg-input"
    />
  )
}