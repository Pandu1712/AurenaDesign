"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/reviews", label: "Reviews" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isLanding = pathname === "/";

  // KEY FIX: if menu open → force white header
  const isTransparent =
    isLanding && !isScrolled && !isMobileMenuOpen;

  const textColor = isTransparent ? "text-white" : "text-black";

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isTransparent
          ? "bg-transparent shadow-none"
          : "bg-white shadow-sm"
      )}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-24">
          
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div
              className={cn(
                "relative transition-all duration-300",
                // Large logo only on landing + not scrolled
                isTransparent
                  ? "h-14 w-44 lg:h-20 lg:w-64"
                  : "h-10 w-32 lg:h-14 lg:w-40"
              )}
            >
              <Image
                src="/logo1.png"
                alt="Aurenza Design Studio"
                fill
                priority
                className="object-contain"
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav
            className={cn(
              "hidden lg:flex items-center gap-10 text-sm font-medium uppercase transition-colors",
              textColor
            )}
          >
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  "hover:text-accent transition-colors",
                  pathname === l.href && "text-accent"
                )}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Phone (desktop) */}
          <div
            className={cn(
              "hidden lg:flex items-center gap-2 transition-colors",
              textColor
            )}
          >
            <Phone className="w-4 h-4" />
            <a href="tel:+918519807011" className="hover:text-accent">
              +91 85198 07011
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2"
          >
            {isMobileMenuOpen ? (
              <X className={textColor} />
            ) : (
              <Menu className={textColor} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden transition-all duration-300 overflow-hidden bg-white",
          isMobileMenuOpen ? "max-h-[500px] border-t" : "max-h-0"
        )}
      >
        <nav className="flex flex-col px-6 py-4 gap-4 text-sm uppercase text-black">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={cn(
                "py-2 border-b",
                pathname === l.href && "text-accent"
              )}
            >
              {l.label}
            </Link>
          ))}

          <div className="flex items-center gap-2 pt-4">
            <Phone className="w-4 h-4" />
            <a href="tel:+918519807011">+91 85198 07011</a>
          </div>
        </nav>
      </div>
    </header>
  );
}
