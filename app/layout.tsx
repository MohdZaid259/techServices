import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"
const inter = Inter({ subsets: ["latin"] })
import PageWrapper from "@/components/Wrapper"

export const metadata: Metadata = {
  title: "Al-Haya Techincal Services",
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
    <html lang="en" className="scroll-smooth light" style={{colorScheme: "light"}}>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <PageWrapper>{children}</PageWrapper>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
