import Header from "@/components/header"
import Footer from "@/components/footer"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
          <div className="flex min-h-screen flex-col ">
            <Header />
            {children}
            <Footer />
          </div>
      </body>
    </html>
  )
}
