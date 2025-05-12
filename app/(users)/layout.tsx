import dynamic from 'next/dynamic';
const Header = dynamic(() => import('@/components/header'));
const Footer = dynamic(() => import('@/components/footer'));

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
