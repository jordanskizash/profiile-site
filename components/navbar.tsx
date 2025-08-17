"use client"

import { Sun, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <nav className="flex justify-between items-center mb-16">
      <h1 className="text-2xl font-semibold">Jordan Steinberg</h1>
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
          <Sun className="h-5 w-5" />
          <span className="sr-only">Toggle theme</span>
        </Button>
        <Button variant="ghost" className="text-gray-400 hover:text-white">
          About
        </Button>
        <Button variant="ghost" className="text-gray-400 hover:text-white flex items-center gap-2">
          <Twitter className="h-4 w-4" />
          Follow me
        </Button>
      </div>
    </nav>
  )
}