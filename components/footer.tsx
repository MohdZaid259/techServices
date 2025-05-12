import Link from "next/link"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-navy-blue text-white">
      <div className="container mx-auto px-4 py-0 pb-12 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center">
          <span className="text-xl mb-8 font-bold text-white">Rukn AL <p className="text-gold inline">HAYA</p> Technical Services LLC</span>
        </Link>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="mt-4 text-sm text-white/80">
              Your one-stop technical service provider in Dubai, delivering excellence in civil contracting, heavy
              equipment, pest control, marble supply, and carpentry services.
            </p>
            <div className="mt-6 flex space-x-4">
              <Link href="#" className="text-white/80 hover:text-gold">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-white/80 hover:text-gold">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-white/80 hover:text-gold">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-white/80 hover:text-gold">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Our Services</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <Link href="#" className="hover:text-gold">
                  Civil Contracting Services
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gold">
                  Heavy Equipment Lifting & Transportation
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gold">
                  Birds & Pest Control Services
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gold">
                  Marble Supply & Installation
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gold">
                  Civil & Carpentry Work
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <Link href="/" className="hover:text-gold">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gold">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#projects" className="hover:text-gold">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-gold">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Information</h3>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" />
                <span>Office no. 101 B6, Naseer Ahmad Saeed Tower, Al Garhoud, Dubai, UAE</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 flex-shrink-0 text-gold" />
                <span>+971 52 709 3747</span>
                <span>+971 55 440 7515</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 flex-shrink-0 text-gold" />
                <span>info@alhaya.tech</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-white/60">
          <p>&copy; {new Date().getFullYear()} AL<Link href="/login" className="text-gold">HAYA</Link> Dubai Technical Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
