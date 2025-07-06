"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
import Image from "next/image"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4">
      <div className="container flex h-16 items-center navbar-content">
        {/* Logo section - with specific class for CSS targeting */}
        <div className="flex items-center space-x-6 flex-shrink-0 navbar-logo-section">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/Vector.png" width={10} height={10} alt="cpal logo" className="h-8 w-8" />
          </Link>
          {/* Desktop navigation links */}
          <div className="hidden lg:flex lg:items-center lg:space-x-6">
            <Link href="#features" className="text-sm font-medium transition-colors hover:text-primary">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium transition-colors hover:text-primary">
              Our Company
            </Link>
            <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
              Developers
            </Link>
            <Link href="#pricing" className="text-sm font-medium transition-colors hover:text-primary">
              Pricing
            </Link>
          </div>
        </div>

        {/* Right side content - with specific class for CSS targeting */}
        <div className="flex items-center space-x-4 navbar-right-section">
          {/* Desktop navigation */}
          <nav className="hidden lg:flex lg:items-center lg:space-x-6">
            <Link href="#contact" className="text-sm font-medium transition-colors hover:text-primary">
              What&apos;s New
            </Link>
            <Button>Help</Button>
            <ThemeToggle />
          </nav>

          {/* Mobile menu button */}
          <button 
            className="lg:hidden flex items-center justify-center p-2 mobile-menu-btn" 
            onClick={toggleMenu} 
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile navigation dropdown */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-background border-b lg:hidden px-4">
            <div className="container py-4 space-y-4">
              <Link
                href="/"
                className="block text-sm font-medium transition-colors hover:text-primary"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                href="#features"
                className="block text-sm font-medium transition-colors hover:text-primary"
                onClick={toggleMenu}
              >
                Features
              </Link>
              <Link
                href="#how-it-works"
                className="block text-sm font-medium transition-colors hover:text-primary"
                onClick={toggleMenu}
              >
                Our Company
              </Link>
              <Link
                href="#"
                className="block text-sm font-medium transition-colors hover:text-primary"
                onClick={toggleMenu}
              >
                Developers
              </Link>
              <Link
                href="#pricing"
                className="block text-sm font-medium transition-colors hover:text-primary"
                onClick={toggleMenu}
              >
                Pricing
              </Link>
              <Link
                href="#contact"
                className="block text-sm font-medium transition-colors hover:text-primary"
                onClick={toggleMenu}
              >
                What&apos;s New
              </Link>
              <div className="flex justify-start py-2">
                <ThemeToggle />
              </div>
              <Button size="sm" className="w-full">Help</Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}