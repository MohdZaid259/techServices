import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import { FirebaseProvider } from '@/context/Firebase'
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Dubai Technical Services - Your One-Stop Technical Service Provider",
  description:
    "Professional civil contracting, heavy equipment, pest control, marble supply, and carpentry services in Dubai, UAE.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <FirebaseProvider>
          <div className="flex min-h-screen flex-col ">
            {children}
          </div>
          <Toaster />
          </FirebaseProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
