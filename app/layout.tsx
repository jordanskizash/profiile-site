import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Dash0Provider } from "@/components/dash0-provider"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Jordan Steinberg",
  description: "Personal website and blog",
  icons: {
    icon: '/JLogo.png',
    shortcut: '/JLogo.png',
    apple: '/JLogo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} font-mono antialiased`}>
        <Dash0Provider>
          <ThemeProvider
            defaultTheme="dark"
          >
            {children}
          </ThemeProvider>
        </Dash0Provider>
      </body>
    </html>
  )
}
