"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import Image from "next/image";
// import { ThemeToggle } from "@/components/theme-toggle"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 ">
      <div className="container flex h-16 items-center justify-between  mx-auto">
        <div className="flex items-center space-x-6">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/layer.png"
              width={32}
              height={32}
              alt="cpal logo"
              sizes="100vw"
              className="h-8 w-auto object-contain"
            />
          </Link>
          <div className="hidden lg:flex lg:items-center lg:space-x-6">
            <Link
              href="#features"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Features
            </Link>
            <Link
              href="https://www.linkedin.com/company/clean-pigg-ai-lab/"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Our Company
            </Link>
            <Link
              href="/"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Developers
            </Link>
            <Link
              href="#pricing"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Pricing
            </Link>
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          className="block md:hidden"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex md:items-center md:space-x-6">
          <Link
            href="#contact"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            What&apos;s New
          </Link>
          <Button asChild>
            <Link href="mailto:cleanpigg@gmail.com?subject=Help%20Request%20from%20Website">
              Help
            </Link>
          </Button>
          <ThemeToggle />
        </nav>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-background border-b md:hidden px-4">
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
                href="#https://www.linkedin.com/company/clean-pigg-ai-lab/"
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
              <Button asChild>
                <Link href="mailto:cleanpig@email.com?subject=Help%20Request%20from%20Website">
                  Help
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
