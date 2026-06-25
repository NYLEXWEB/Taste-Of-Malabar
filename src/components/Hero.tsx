"use client";

import Image from "next/image";
import { Calendar, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa6";

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
      
      {/* Desktop/Tablet Static Background Image on Right with Left White/Cream Fade */}
      <div className="absolute top-0 right-0 bottom-0 w-[55%] pointer-events-none z-0 hidden lg:block">
        <div className="relative w-full h-full">
          <Image
            src="/buffer.png"
            alt="Taste of Malabar Premium Catering Buffet Setup"
            fill
            priority
            sizes="55vw"
            className="object-cover object-center"
          />
          {/* Left-to-Right Cream Fade Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/65 to-transparent z-10" />
        </div>
      </div>

      {/* Mobile Background - Single Static Image */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 lg:hidden">
        <div className="relative w-full h-full">
          <Image
            src="/buffer.png"
            alt="Taste of Malabar Premium Catering Mobile"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 0vw"
            className="object-cover object-right"
          />
          {/* Mobile Bottom-to-Top Fade Overlay (Full Height) */}
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/85 to-white/20 z-10" />
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
            className="font-serif text-[28px] sm:text-[45px] lg:text-[50px] font-bold text-charcoal leading-[1.15] mb-4"
          >
            Make your Celebration <br className="hidden sm:inline" />
            Beautiful, Delicious <br className="hidden sm:inline" />
            Stress-Free <br className="hidden sm:inline" />
            <span className="text-[#E55928] font-serif font-bold">Based in Kannur & Thalassery, Kerala</span>
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
            Taste of Malabar Caterers & Event Management Group brings over 20 years of catering excellence to weddings, receptions, and corporate events. As the leading wedding caterers in Kannur & Thalassery, we proudly provide premium catering services all over Kerala.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-6 lg:mb-8"
          >
            {/* Get Free Quote */}
            <button
              onClick={() => window.dispatchEvent(new CustomEvent("open-quote-modal"))}
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider text-charcoal bg-white border border-neutral-300 hover:bg-neutral-50 hover:scale-[1.01] active:scale-95 transition-all duration-300 shadow-sm cursor-pointer w-full sm:w-auto"
            >
              <Calendar className="w-4 h-4 mr-2 text-gold" />
              Get Free Quote
            </button>

            {/* View Menu */}
            <a
              href="#menu"
              onClick={(e) => scrollToSection(e, "#menu")}
              className="relative inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-black uppercase tracking-wider text-white bg-gradient-to-r from-[#E55928] to-gold hover:scale-[1.03] active:scale-95 transition-all duration-300 shadow-lg shadow-[#E55928]/20 cursor-pointer overflow-hidden group w-full sm:w-auto"
            >
              {/* Pulsing ring */}
              <span className="absolute -inset-1 rounded-lg bg-[#E55928]/20 animate-ping opacity-60 pointer-events-none" />
              
              {/* Moving shine sheen */}
              <span className="absolute inset-0 overflow-hidden rounded-lg pointer-events-none">
                <span className="absolute top-0 -left-[100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-[-25deg] animate-shine" />
              </span>
              <BookOpen className="w-4 h-4 mr-2 text-white fill-white/10" />
              <span>View Menu</span>
            </a>

            {/* WhatsApp Us */}
            <a
              href="https://wa.me/916238599197?text=Hi%20Taste%20of%20Malabar,%20I%20would%20like%20to%20inquire%20about%20your%20catering%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider text-white bg-[#25D366] hover:bg-[#20ba5a] hover:scale-[1.01] active:scale-95 transition-all duration-300 shadow-md shadow-green-500/10 cursor-pointer w-full sm:w-auto"
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
            className="grid grid-cols-2 gap-y-5 gap-x-4 sm:flex sm:flex-wrap sm:items-center sm:gap-8 pt-8 border-t border-neutral-100 max-w-3xl"
          >
            {/* Feature 1 */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold flex-shrink-0">
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
              <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold flex-shrink-0">
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
              <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold flex-shrink-0">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
                  <line x1="7" y1="7" x2="7.01" y2="7" strokeLinecap="round" strokeWidth="2" stroke="currentColor" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-charcoal text-[11px] sm:text-xs tracking-wide uppercase leading-tight">Budget Friendly</span>
                <span className="text-[10px] text-neutral-500 font-medium">Packages</span>
              </div>
            </div>

            <div className="h-6 w-[1px] bg-neutral-200 hidden sm:block" />

            {/* Feature 4 */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold flex-shrink-0">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-charcoal text-[11px] sm:text-xs tracking-wide uppercase leading-tight">Kannur Based</span>
                <span className="text-[10px] text-neutral-500 font-medium">Serving All Over Kerala</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
