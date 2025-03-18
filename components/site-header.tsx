"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Phone, X } from "lucide-react"
import { 
  CLINIC_NAME as clinicName,
  CLINIC_PHONE as clinicPhone
} from "@/lib/constants"


export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Blogs", href: "/blog" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="container flex items-center justify-between h-16 px-4 mx-auto">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary">{clinicName?.split(' ')[0]}</span>
            <span className="ml-1 text-2xl font-light">{clinicName?.split(' ')[1]}</span>
          </Link>
        </div>

        <nav className="hidden md:flex md:items-center md:space-x-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-gray-700 transition-colors hover:text-primary"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <div className="hidden md:flex md:items-center">
            <Phone className="w-4 h-4 mr-2 text-primary" />
            <span className="text-sm font-medium">{clinicPhone}</span>
          </div>

          <Button asChild className="hidden md:inline-flex">
            <Link href="/contact">Book Appointment</Link>
          </Button>

          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="w-6 h-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[350px]">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between pb-4 border-b">
                  <Link href="/" className="flex items-center" onClick={() => setIsMenuOpen(false)}>
                    <span className="text-xl font-bold text-primary">clinicName?.split(' ')[0]</span>
                    <span className="ml-1 text-xl font-light">clinicName?.split(' ')[0]</span>
                  </Link>
                </div>

                <nav className="flex flex-col py-6 space-y-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-base font-medium text-gray-700 transition-colors hover:text-primary"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>

                <div className="flex flex-col mt-auto space-y-4 pt-6 border-t">
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 mr-2 text-primary" />
                    <span className="text-sm font-medium">{clinicPhone}</span>
                  </div>

                  <Button asChild className="w-full">
                    <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                      Book Appointment
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

