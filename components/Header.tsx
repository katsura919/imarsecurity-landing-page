"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About Us" },
    { href: "#services", label: "Services" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "glass py-3 border-b border-[rgba(26,26,46,0.1)]"
        : "bg-white/80 backdrop-blur-sm py-5"
        }`}
    >
      <div className="container-custom flex items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Image
            src="/logo.png"
            alt="I.M.A.R Security Patrol"
            width={140}
            height={40}
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop Navigation - Left aligned after logo */}
        <nav className="hidden md:flex items-center gap-8 ml-12">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[var(--steel-gray)] hover:text-[var(--accent-yellow)] transition-colors duration-300 text-sm font-medium"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Spacer to push CTA to the right */}
        <div className="flex-1" />

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:+1234567890"
            className="btn-primary flex items-center gap-2 text-sm"
          >
            <Phone className="w-4 h-4" />
            Call Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-[var(--steel-navy)] p-2"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 glass border-b border-[rgba(26,26,46,0.1)] transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? "max-h-80 py-4" : "max-h-0 py-0"
          }`}
      >
        <nav className="container-custom flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-[var(--steel-gray)] hover:text-[var(--accent-yellow)] transition-colors duration-300 text-base font-medium py-2"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:+1234567890"
            className="btn-primary flex items-center justify-center gap-2 text-sm mt-2"
          >
            <Phone className="w-4 h-4" />
            Call Now
          </a>
        </nav>
      </div>
    </header>
  );
}
