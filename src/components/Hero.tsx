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
    <section id="home" className="relative min-h-[92vh] flex flex-col justify-between bg-[#FAF8F5] pt-32 pb-14 sm:pt-36 lg:pt-36 lg:pb-12 overflow-hidden">
      {/* Background image on the right */}
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[58%] h-full pointer-events-none z-0">
        <div className="relative w-full h-full">
          <Image
            src="/hero_catering.png"
            alt="Taste of Malabar Premium Catering Buffet Setup"
            fill
            priority
            className="object-cover object-left lg:object-center opacity-65"
          />
          {/* Elegant horizontal gradient fade from cream to transparent (left-to-right) */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F5] via-[#FAF8F5]/95 to-transparent z-10 hidden lg:block" />
          {/* Smooth overlay for smaller screens: gradient lets image show at top, fades to clean readability background */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#FAF8F5]/70 via-[#FAF8F5]/92 to-[#FAF8F5] lg:hidden z-10" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 flex-grow flex items-center">
        <div className="w-full lg:w-[55%] text-left py-6 sm:py-12">
          {/* Badge Tagline */}
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] text-gold mb-5 block"
          >
            Serving Memories, One Plate At A Time
          </motion.span>

          {/* Main Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-[36px] sm:text-[58px] lg:text-[68px] font-bold text-neutral-800 leading-[1.08] mb-6"
          >
            Premium <span className="text-gold font-serif font-medium">Catering &</span> <br />
            Event Management <br />
            <span className="font-serif italic text-neutral-700 text-3xl sm:text-5xl lg:text-6xl font-normal tracking-wide normal-case block mt-2">
              for Every Celebration
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-xs sm:text-base text-neutral-600 max-w-xl leading-relaxed mb-10 font-medium"
          >
            From exquisite flavours to flawless execution - we make your special moments truly unforgettable.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10 lg:mb-16"
          >
            {/* Get Free Quote */}
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "#contact")}
              className="inline-flex items-center justify-center px-6 py-3 sm:px-7 sm:py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider text-white bg-gold hover:bg-gold-hover hover:scale-[1.02] active:scale-95 transition-all duration-300 shadow-md shadow-gold/15"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Get Free Quote
            </a>

            {/* Call Now */}
            <a
              href="tel:6238599197"
              className="inline-flex items-center justify-center px-6 py-3 sm:px-7 sm:py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider text-neutral-800 bg-white border border-neutral-200 hover:border-gold/50 hover:bg-neutral-50 hover:scale-[1.02] active:scale-95 transition-all duration-300 shadow-sm"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </a>

            {/* WhatsApp Us */}
            <a
              href="https://wa.me/916238599197?text=Hi%20Taste%20of%20Malabar,%20I%20would%20like%20to%20inquire%20about%20your%20catering%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 sm:px-7 sm:py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider text-[#128C7E] bg-white border border-neutral-200 hover:border-gold/50 hover:bg-neutral-50 hover:scale-[1.02] active:scale-95 transition-all duration-300 shadow-sm"
            >
              <svg className="w-4 h-4 mr-2 text-green-500 fill-green-500" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.449 5.4 0 9.794-4.392 9.797-9.793.002-2.618-1.01-5.08-2.85-6.92C16.374 2.05 13.914 1.037 11.9 1.037c-5.4 0-9.79 4.393-9.793 9.795-.001 1.942.5 3.829 1.45 5.484L2.56 21.43l5.088-1.336-.001-.001zm11.567-5.693c-.307-.154-1.82-.9-2.1-.1-.28.1-.48.48-.59.62-.11.14-.22.21-.52.06-.3-.15-1.29-.48-2.46-1.52-.91-.81-1.53-1.82-1.71-2.13-.18-.3-.02-.47.13-.62.14-.14.3-.35.46-.5.15-.15.2-.26.3-.44.1-.17.05-.33-.02-.48-.07-.15-.59-1.44-.82-1.97-.22-.53-.44-.45-.6-.46h-.51c-.17 0-.45.06-.69.32-.24.25-.92.9-1.02 1.77-.1.87.63 1.72.73 1.86.1.14 1.24 1.89 3.01 2.66.42.18.75.29 1.01.37.42.13.81.11 1.11.07.34-.05 1.02-.42 1.17-.82.15-.4.15-.75.1-.82-.04-.07-.16-.11-.47-.27z" />
              </svg>
              WhatsApp Us
            </a>
          </motion.div>
        </div>
      </div>

      {/* Floating Bottom Stats Card */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 pb-6 sm:pb-8">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="bg-white/80 backdrop-blur-md rounded-3xl border border-gold/15 shadow-[0_15px_40px_-15px_rgba(181,142,61,0.08)] p-5 sm:p-6 lg:p-8"
        >
          {/* Responsive 2x2 Grid on Mobile, 4-column layout on Desktop */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-4 divide-y-0 md:divide-y-0 md:divide-x divide-neutral-200/60">
            {/* Stat Item 1 */}
            <motion.div 
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex items-center space-x-3 sm:space-x-4 lg:pl-4"
            >
              <div className="text-gold flex-shrink-0">
                <svg className="w-8 h-8 sm:w-10 sm:h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 15c0-1.8 1.4-3.2 3.2-3.2 0-1.8 1.4-3.2 3.2-3.2s3.2 1.4 3.2 3.2c1.8 0 3.2 1.4 3.2 3.2 0 1.8-1.4 3.2-3.2 3.2H9.2C7.4 18.2 6 16.8 6 15Z" />
                  <path d="M8 18.2v1.8a1.5 1.5 0 0 0 1.5 1.5h5a1.5 1.5 0 0 0 1.5-1.5v-1.8" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-neutral-800 text-sm sm:text-base md:text-lg leading-tight">10+ Years</span>
                <span className="text-[10px] sm:text-xs text-neutral-500 leading-normal font-medium mt-0.5">of Experience</span>
              </div>
            </motion.div>

            {/* Stat Item 2 */}
            <motion.div 
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex items-center space-x-3 sm:space-x-4 md:pl-6 lg:pl-8"
            >
              <div className="text-gold flex-shrink-0">
                <svg className="w-8 h-8 sm:w-10 sm:h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                  <path d="M6 20a6 6 0 0 1 12 0" />
                  <path d="M5.5 9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                  <path d="M2 19a4.5 4.5 0 0 1 7-3.8" />
                  <path d="M18.5 9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                  <path d="M15 15.2a4.5 4.5 0 0 1 7 3.8" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-neutral-800 text-sm sm:text-base md:text-lg leading-tight">500+ Events</span>
                <span className="text-[10px] sm:text-xs text-neutral-500 leading-normal font-medium mt-0.5">Completed</span>
              </div>
            </motion.div>

            {/* Stat Item 3 */}
            <motion.div 
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex items-center space-x-3 sm:space-x-4 lg:pl-8"
            >
              <div className="text-gold flex-shrink-0">
                <svg className="w-8 h-8 sm:w-10 sm:h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="6" r="1.5" />
                  <path d="M4 16A8 8 0 0 1 20 16H4Z" />
                  <path d="M2 19h20" />
                  <path d="M4 19v-2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-neutral-800 text-sm sm:text-base md:text-lg leading-tight">50k+ Guests</span>
                <span className="text-[10px] sm:text-xs text-neutral-500 leading-normal font-medium mt-0.5">Served Happily</span>
              </div>
            </motion.div>

            {/* Stat Item 4 */}
            <motion.div 
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex items-center space-x-3 sm:space-x-4 md:pl-6 lg:pl-8"
            >
              <div className="text-gold flex-shrink-0">
                <svg className="w-8 h-8 sm:w-10 sm:h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-neutral-800 text-sm sm:text-base md:text-lg leading-tight">4.9/5 Stars</span>
                <span className="text-[10px] sm:text-xs text-neutral-500 leading-normal font-medium mt-0.5">Client Rating</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
