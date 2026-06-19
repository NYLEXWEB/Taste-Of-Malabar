"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa6";

const heroImages = [
  {
    src: "/hero_catering.png",
    alt: "Taste of Malabar Premium Catering Buffet Setup"
  },
  {
    src: "/hero_buffet.png",
    alt: "Luxury Wedding Buffet Dining Table Setup"
  },
  {
    src: "/hero_live_feast.png",
    alt: "Premium Live Cooking Station & Claypot Grills"
  }
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5500); // switch every 5.5 seconds
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 85;
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
    <section id="home" className="relative min-h-[85vh] lg:min-h-[88vh] flex flex-col justify-between bg-cream pt-24 pb-4 sm:pt-28 lg:pt-28 lg:pb-4 overflow-hidden">
      
      {/* Dynamic Background Slideshow on the right */}
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[50%] h-full pointer-events-none z-0">
        <div className="relative w-full h-full">
          <AnimatePresence initial={false}>
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src={heroImages[currentIndex].src}
                alt={heroImages[currentIndex].alt}
                fill
                priority
                className="object-cover object-left lg:object-center opacity-40 lg:opacity-100"
              />
            </motion.div>
          </AnimatePresence>

          {/* Elegant horizontal gradient fade from deep cream to transparent (left-to-right) */}
          <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/30 to-transparent z-10 hidden lg:block" />
          {/* Smooth overlay for smaller screens: gradient lets image show at top, fades to clean cream readability background */}
          <div className="absolute inset-0 bg-gradient-to-b from-cream/30 via-cream/85 to-cream lg:hidden z-10" />
          {/* Vertical gradient overlay to blend image bottom into cream background on all screen sizes */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-cream/70 z-10" />

          {/* Slide dots indicators */}
          <div className="absolute bottom-6 right-6 z-20 flex gap-2 pointer-events-auto">
            {heroImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === idx 
                    ? "bg-gold w-5" 
                    : "bg-charcoal/30 hover:bg-charcoal/50 lg:bg-white/40 lg:hover:bg-white/60"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 flex-grow flex items-center">
        <div className="w-full lg:w-[55%] text-left pt-6 pb-2 sm:pt-12 sm:pb-4">
          {/* Tagline Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-2 mb-3.5"
          >
            {/* Elegant botanical ornament icon */}
            <svg className="w-5 h-5 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 2c0 0-4 4-4 8 0 2.2 1.8 4 4 4s4-1.8 4-4c0-4-4-8-4-8z" />
              <path d="M8 14c-1.5 0-3-1-3-2.5 0-2 2.5-3.5 2.5-3.5" />
              <path d="M16 14c1.5 0 3-1 3-2.5 0-2-2.5-3.5-2.5-3.5" />
              <path d="M12 10v12" />
            </svg>
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-gold">
              20+ Years of Catering Excellence
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-[34px] sm:text-[45px] lg:text-[50px] font-bold text-charcoal leading-[1.15] mb-4"
          >
            Authentic Malabar <br />
            Catering for <br />
            <span className="text-gold font-serif font-bold">Every Celebration</span>
          </motion.h1>

          {/* Elegant Divider with Central Flourish */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative flex items-center max-w-xl my-4"
          >
            <div className="flex-grow border-t border-gold/30"></div>
            <span className="mx-3.5 flex-shrink-0 text-gold flex items-center justify-center gap-1.5 text-xs font-serif font-semibold select-none">
              <span className="w-1 h-1 rounded-full bg-gold/75" />
              <span>⚜</span>
              <span className="w-1 h-1 rounded-full bg-gold/75" />
            </span>
            <div className="flex-grow border-t border-gold/30"></div>
          </motion.div>

          {/* Subheading Description */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-xs sm:text-sm text-neutral-600 max-w-xl leading-relaxed mb-6 font-normal"
          >
            From intimate family gatherings to grand wedding feasts, we deliver unforgettable culinary experiences with authentic flavors, professional service and exceptional hospitality.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-3 sm:gap-4 mb-6 lg:mb-8"
          >
            {/* Get Free Quote */}
            <button
              onClick={() => window.dispatchEvent(new CustomEvent("open-quote-modal"))}
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider text-white bg-charcoal hover:bg-charcoal-light hover:scale-[1.01] active:scale-95 transition-all duration-300 shadow-md shadow-charcoal/15 cursor-pointer"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Get Free Quote
            </button>

            {/* WhatsApp Us */}
            <a
              href="https://wa.me/916238599197?text=Hi%20Taste%20of%20Malabar,%20I%20would%20like%20to%20inquire%20about%20your%20catering%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider text-white bg-[#25D366] hover:bg-[#20ba5a] hover:scale-[1.01] active:scale-95 transition-all duration-300 shadow-md shadow-green-500/10 cursor-pointer"
            >
              <FaWhatsapp className="w-[18px] h-[18px] mr-2 text-white" />
              WhatsApp Us
            </a>
          </motion.div>

          {/* Bottom Features Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-wrap items-center gap-6 sm:gap-8 pt-8 border-t border-neutral-100 max-w-3xl"
          >
            {/* Feature 1 */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="m9 11 2 2 4-4" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-charcoal text-[11px] sm:text-xs tracking-wide uppercase leading-tight">FSSAI</span>
                <span className="text-[10px] text-neutral-500 font-medium">Licensed</span>
              </div>
            </div>

            <div className="h-6 w-[1px] bg-neutral-200 hidden sm:block" />

            {/* Feature 2 */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 4V2M3 14c0-4.4 3.6-8 8-8h2c4.4 0 8 3.6 8 8v1H3v-1zm18 3H3a1 1 0 0 1-1-1v-1h20v1a1 1 0 0 1-1 1z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-charcoal text-[11px] sm:text-xs tracking-wide uppercase leading-tight">Custom Menus</span>
                <span className="text-[10px] text-neutral-500 font-medium">Available</span>
              </div>
            </div>

            <div className="h-6 w-[1px] bg-neutral-200 hidden sm:block" />

            {/* Feature 3 */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M6 18V9a6 6 0 0 1 12 0v9M5 18h14a1 1 0 0 1 1 1v1H4v-1a1 1 0 0 1 1-1zm7-13a3 3 0 0 1 3-3h-6a3 3 0 0 1 3 3z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-charcoal text-[11px] sm:text-xs tracking-wide uppercase leading-tight">Live Food</span>
                <span className="text-[10px] text-neutral-500 font-medium">Counters</span>
              </div>
            </div>

            <div className="h-6 w-[1px] bg-neutral-200 hidden sm:block" />

            {/* Feature 4 */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-charcoal text-[11px] sm:text-xs tracking-wide uppercase leading-tight">Serving Kerala</span>
                <span className="text-[10px] text-neutral-500 font-medium">& Karnataka</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
