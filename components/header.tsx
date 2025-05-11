"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import call from '@/public/icons/call.png'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const navigation = [
    { name: "Home", href: "/" },
    {
      name: "Services",
      href: "#services",
      dropdown: true,
      items: [
        { name: "Civil Contracting", href: "#civil-contracting" },
        { name: "Heavy Equipment", href: "#heavy-equipment" },
        { name: "Birds & Pest Control", href: "#pest-control" },
        { name: "Marble Supply", href: "#marble-supply" },
        { name: "Civil & Carpentry", href: "#carpentry" },
      ],
    },
    { name: "About", href: "/about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-0 ${
        scrolled ? "bg-white" : "bg-white"
      }`}>
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold text-navy-blue">AL</span>
            <span className="text-xl font-bold text-gold">HAYA</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center md:space-x-8">
          {navigation.map((item) => (
            <div key={item.name} className="relative group">
              <Link
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-navy-blue after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.name}
              </Link>
              {item.dropdown && (
                <div className="absolute left-0 mt-2 w-56 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-1">
                    {item.items?.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-4 py-2 text-sm text-muted-foreground hover:bg-slate-50 hover:text-navy-blue"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden items-center space-x-4 md:flex">
          <div className="flex items-center gap-2">
            <img loading="lazy" className="w-5" src={call.src} alt="" />
            <span className="text-sm font-medium">+971 52 709 3747</span>
          </div>
          <Button onClick={() => window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=info@alhaya.tech`)} className="bg-gold hover:bg-gold/90 text-white font-semibold">Order Now</Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="h-9 w-9 p-0">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex flex-col space-y-6 pt-6">
              <nav className="flex flex-col space-y-4">
                {navigation.map((item) => (
                  <div key={item.name} className="space-y-2">
                    <Link
                      href={item.href}
                      className="text-base font-medium text-muted-foreground transition-colors hover:text-navy-blue"
                      onClick={() => !item.dropdown && setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.dropdown && (
                      <div className="ml-4 space-y-2 border-l border-slate-200 pl-4">
                        {item.items?.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block text-sm text-muted-foreground hover:text-navy-blue"
                            onClick={() => setIsOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
              <div className="flex flex-col space-y-4">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-gold" />
                  <span className="text-sm font-medium">+971 50 123 4567</span>
                </div>
                <Button className="bg-gold hover:bg-gold/90 text-navy-blue">Get a Quote</Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
