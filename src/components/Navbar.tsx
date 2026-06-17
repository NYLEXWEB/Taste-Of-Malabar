"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Featured Menu", href: "#menu" },
  { name: "Live Stations", href: "#live-counters" },
  { name: "Gallery", href: "#gallery" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // height of sticky navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "glass-navbar py-3 shadow-sm"
            : "bg-white/95 py-5 border-b border-gray-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="#home" className="flex items-center space-x-3 group">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-full border border-gold/30 bg-gold-light group-hover:border-gold transition-colors duration-300">
                {/* SVG Luxury Chef Hat / Dome Logo */}
                <svg
                  className="w-5 h-5 text-gold"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.905 0-5.64-.78-8-2.14"
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-charcoal group-hover:text-gold transition-colors duration-300">
                  TASTE OF MALABAR
                </span>
                <span className="text-[9px] uppercase tracking-widest text-gold font-medium -mt-1">
                  Caterers & Event Management
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-7">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="text-[14px] font-medium text-charcoal/80 hover:text-gold transition-colors duration-200 relative group py-2"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gold transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden sm:flex items-center space-x-4">
              <a
                href="tel:6238599197"
                className="flex items-center space-x-2 text-charcoal/80 hover:text-gold text-sm font-medium transition-colors duration-200"
              >
                <Phone className="w-4 h-4 text-gold" />
                <span>+91 6238 599 197</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-gold-gradient hover:shadow-lg hover:shadow-gold/20 hover:scale-105 active:scale-95 transition-all duration-300"
              >
                Get Free Quote
                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-charcoal hover:text-gold p-2 transition-colors duration-200"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-gray-100 bg-white"
            >
              <div className="px-4 pt-3 pb-6 space-y-3">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className="block px-3 py-2.5 rounded-md text-base font-medium text-charcoal/80 hover:text-gold hover:bg-gold-light/40 transition-all duration-200"
                  >
                    {item.name}
                  </a>
                ))}
                <div className="pt-4 border-t border-gray-100 flex flex-col space-y-3 px-3">
                  <a
                    href="tel:6238599197"
                    className="flex items-center space-x-2 text-charcoal/80 text-base font-medium py-1"
                  >
                    <Phone className="w-4 h-4 text-gold" />
                    <span>+91 6238 599 197</span>
                  </a>
                  <a
                    href="#contact"
                    onClick={(e) => {
                      setMobileMenuOpen(false);
                      const contact = document.querySelector("#contact");
                      if (contact) {
                        contact.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="flex items-center justify-center w-full py-3 rounded-full text-sm font-semibold uppercase tracking-wider text-white bg-gold-gradient text-center"
                  >
                    Get Free Quote
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
