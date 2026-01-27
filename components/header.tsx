"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/reviews", label: "Reviews" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

interface HeaderProps {
  variant?: "light" | "dark" | "transparent";
}

export default function Header({ variant = "transparent" }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isLandingPage = pathname === "/";
  
  const getHeaderStyles = () => {
    if (isLandingPage && variant === "transparent") {
      return isScrolled 
        ? "bg-background/95 backdrop-blur-md shadow-lg" 
        : "bg-transparent";
    }
    return "bg-background shadow-sm";
  };

  const getTextColor = () => {
    if (isLandingPage && variant === "transparent" && !isScrolled) {
      return "text-white";
    }
    return "text-foreground";
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        getHeaderStyles()
      )}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className={cn(
              "w-10 h-10 flex items-center justify-center border-2 transition-colors duration-300",
              isLandingPage && !isScrolled 
                ? "border-white group-hover:border-accent" 
                : "border-foreground group-hover:border-accent"
            )}>
              <span className={cn(
                "font-serif text-lg font-bold transition-colors duration-300",
                isLandingPage && !isScrolled 
                  ? "text-white group-hover:text-accent" 
                  : "text-foreground group-hover:text-accent"
              )}>
                A
              </span>
            </div>
            <div className={cn(
              "hidden sm:block transition-colors duration-300",
              getTextColor()
            )}>
              <div className="text-sm font-medium tracking-wider uppercase">Aurenza</div>
              <div className="text-xs tracking-widest uppercase opacity-80">Design Studio</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium tracking-wide uppercase transition-all duration-300 relative",
                  getTextColor(),
                  "hover:text-accent",
                  pathname === link.href && "text-accent",
                  "after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-accent after:transition-all after:duration-300",
                  "hover:after:w-full",
                  pathname === link.href && "after:w-full"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Phone Number */}
          <div className="hidden lg:flex items-center gap-2">
            <Phone className={cn("w-4 h-4", getTextColor())} />
            <a 
              href="tel:+918341012026" 
              className={cn(
                "text-sm font-medium tracking-wide transition-colors duration-300 hover:text-accent",
                getTextColor()
              )}
            >
              +91 83410 12026
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              "lg:hidden p-2 transition-colors duration-300 hover:text-accent",
              getTextColor()
            )}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-lg shadow-lg transition-all duration-500 overflow-hidden",
          isMobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={cn(
                "text-lg font-medium tracking-wide uppercase py-3 border-b border-border/50 transition-all duration-300",
                "hover:text-accent hover:pl-4",
                pathname === link.href && "text-accent",
                "animate-fade-in-up opacity-0"
              )}
              style={{ animationDelay: `${index * 0.05}s`, animationFillMode: 'forwards' }}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex items-center gap-2 pt-4 text-muted-foreground">
            <Phone className="w-4 h-4" />
            <a href="tel:+918341012026" className="text-sm font-medium hover:text-accent transition-colors">
              +91 83410 12026
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
