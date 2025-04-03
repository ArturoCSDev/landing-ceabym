import React, { useState, useEffect } from "react";
import ThemeToggle from "../theme/theme-toggle";
import Logo from "../logo";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Inicio", href: "#" },
  { label: "Análisis", href: "#analisis" },
  { label: "Historia", href: "#historia" },
  { label: "Ubicación", href: "#ubicacion" },
  { label: "Contacto", href: "#contacto" },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white dark:bg-secondary-1 shadow-md py-3" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-secondary-11 hover:text-ceabym-11 dark:text-secondary-11 dark:hover:text-ceabym-11 font-medium transition-colors"
              >
                {item.label}
              </a>
            ))}
            <ThemeToggle />
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center md:hidden gap-4">
            <ThemeToggle />
            <button
              type="button"
              className="text-secondary-11 hover:text-ceabym-11 dark:text-secondary-11 dark:hover:text-ceabym-11"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-secondary-1 shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-secondary-11 hover:text-ceabym-11 dark:text-secondary-11 dark:hover:text-ceabym-11 font-medium py-2 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
