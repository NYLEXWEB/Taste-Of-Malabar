"use client";

import Image from "next/image";
import { Calendar, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
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
      {/* Background image on the right */}
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[50%] h-full pointer-events-none z-0">
        <div className="relative w-full h-full">
          <Image
            src="/hero_catering.png"
            alt="Taste of Malabar Premium Catering Buffet Setup"
            fill
            priority
            className="object-cover object-left lg:object-center opacity-65 lg:opacity-100"
          />
          {/* Elegant horizontal gradient fade from deep cream to transparent (left-to-right) */}
          <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/30 to-transparent z-10 hidden lg:block" />
          {/* Smooth overlay for smaller screens: gradient lets image show at top, fades to clean cream readability background */}
          <div className="absolute inset-0 bg-gradient-to-b from-cream/5 via-cream/50 to-cream lg:hidden z-10" />
          {/* Vertical gradient overlay to blend image bottom into cream background on all screen sizes */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-cream/70 z-10" />
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
            <span className="mx-4 flex-shrink-0 text-gold flex items-center justify-center">
              <svg className="w-10 h-3 fill-current" viewBox="0 0 40 12">
                <path d="M20 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 1c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zm-4 4c0-1.7 1.3-3 3-3s3 1.3 3 3-1.3 3-3 3-3-1.3-3-3zm1 0c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2zm-7 2c0-.6.4-1 1-1h1v2h-1c-.6 0-1-.4-1-1zm1 1c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm18-2c0-.6.4-1 1-1h1v2h-1c-.6 0-1-.4-1-1zm1 1c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" />
                <path d="M0 6h17m6 0h17" stroke="currentColor" strokeWidth="0.5" />
              </svg>
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
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "#contact")}
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider text-white bg-charcoal hover:bg-charcoal-light hover:scale-[1.01] active:scale-95 transition-all duration-300 shadow-md shadow-charcoal/15"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Get Free Quote
            </a>

            {/* WhatsApp Us */}
            <a
              href="https://wa.me/916238599197?text=Hi%20Taste%20of%20Malabar,%20I%20would%20like%20to%20inquire%20about%20your%20catering%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider text-charcoal bg-transparent border border-charcoal/30 hover:bg-charcoal/5 hover:scale-[1.01] active:scale-95 transition-all duration-300 shadow-sm"
            >
              <svg className="w-4 h-4 mr-2 text-charcoal fill-charcoal" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.449 5.4 0 9.794-4.392 9.797-9.793.002-2.618-1.01-5.08-2.85-6.92C16.374 2.05 13.914 1.037 11.9 1.037c-5.4 0-9.79 4.393-9.793 9.795-.001 1.942.5 3.829 1.45 5.484L2.56 21.43l5.088-1.336-.001-.001zm11.567-5.693c-.307-.154-1.82-.9-2.1-.1-.28.1-.48.48-.59.62-.11.14-.22.21-.52.06-.3-.15-1.29-.48-2.46-1.52-.91-.81-1.53-1.82-1.71-2.13-.18-.3-.02-.47.13-.62.14-.14.3-.35.46-.5.15-.15.2-.26.3-.44.1-.17.05-.33-.02-.48-.07-.15-.59-1.44-.82-1.97-.22-.53-.44-.45-.6-.46h-.51c-.17 0-.45.06-.69.32-.24.25-.92.9-1.02 1.77-.1.87.63 1.72.73 1.86.1.14 1.24 1.89 3.01 2.66.42.18.75.29 1.01.37.42.13.81.11 1.11.07.34-.05 1.02-.42 1.17-.82.15-.4.15-.75.1-.82-.04-.07-.16-.11-.47-.27z" />
              </svg>
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
