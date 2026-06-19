"use client";

import { motion } from "framer-motion";

export default function FloatingCTA() {
  const whatsappUrl = "https://wa.me/916238599197?text=Hi%20Taste%20of%20Malabar,%20I'd%20like%20to%20discuss%20catering%20services.";
  const instagramUrl = "https://www.instagram.com/taste_of_malabar_caterers?igsh=anphOXpvbTdxcmhu";
  const googleReviewUrl = "https://www.google.com/search?q=Taste+of+Malabar+Caterers+Manjapalam+Kannur&oq=Taste+of+Malabar+Caterers+Manjapalam+Kannur#lrd=0x3ba422c545f491c9:0x8e8eb49ea1826b52,3,1";

  return (
    <div className="fixed inset-0 pointer-events-none z-50 select-none">
      
      {/* Floating CTA Stack (Bottom Right) */}
      <div className="absolute bottom-6 right-6 pointer-events-auto flex flex-col items-center gap-3.5 z-50">
        
        {/* Google Reviews Button */}
        <motion.a
          href={googleReviewUrl}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 rounded-full flex items-center justify-center shadow-xl bg-white border border-neutral-100 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 relative group"
          aria-label="Write a review on Google"
        >
          {/* Tooltip */}
          <span className="absolute right-16 scale-0 group-hover:scale-100 transition-all duration-200 bg-charcoal text-white text-[10px] font-bold uppercase tracking-wider py-1.5 px-3 rounded-lg whitespace-nowrap shadow-md pointer-events-none">
            Review Us on Google
          </span>
          {/* Google Icon SVG */}
          <svg className="w-6.5 h-6.5" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
            />
          </svg>
        </motion.a>

        {/* Instagram Button */}
        <motion.a
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 rounded-full flex items-center justify-center shadow-xl text-white bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] border border-white/10 hover:shadow-2xl hover:shadow-pink-500/20 transition-all duration-300 relative group"
          aria-label="Follow us on Instagram"
        >
          {/* Tooltip */}
          <span className="absolute right-16 scale-0 group-hover:scale-100 transition-all duration-200 bg-charcoal text-white text-[10px] font-bold uppercase tracking-wider py-1.5 px-3 rounded-lg whitespace-nowrap shadow-md pointer-events-none">
            Follow on Instagram
          </span>
          <svg className="w-6.5 h-6.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </svg>
        </motion.a>

        {/* WhatsApp Button */}
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="relative w-14 h-14 rounded-full flex items-center justify-center shadow-xl text-white bg-[#25D366] hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-300 border border-white/5 group"
          aria-label="Chat with us on WhatsApp"
        >
          {/* Tooltip */}
          <span className="absolute right-16 scale-0 group-hover:scale-100 transition-all duration-200 bg-charcoal text-white text-[10px] font-bold uppercase tracking-wider py-1.5 px-3 rounded-lg whitespace-nowrap shadow-md pointer-events-none">
            Chat on WhatsApp
          </span>
          {/* Pulsing glow ring */}
          <span className="absolute -inset-1 rounded-full bg-[#25D366]/20 animate-ping pointer-events-none" />
          
          <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.449 5.4 0 9.794-4.392 9.797-9.793.002-2.618-1.01-5.08-2.85-6.92C16.374 2.05 13.914 1.037 11.9 1.037c-5.4 0-9.79 4.393-9.793 9.795-.001 1.942.5 3.829 1.45 5.484L2.56 21.43l5.088-1.336-.001-.001zm11.567-5.693c-.307-.154-1.82-.9-2.1-.1-.28.1-.48.48-.59.62-.11.14-.22.21-.52.06-.3-.15-1.29-.48-2.46-1.52-.91-.81-1.53-1.82-1.71-2.13-.18-.3-.02-.47.13-.62.14-.14.3-.35.46-.5.15-.15.2-.26.3-.44.1-.17.05-.33-.02-.48-.07-.15-.59-1.44-.82-1.97-.22-.53-.44-.45-.6-.46h-.51c-.17 0-.45.06-.69.32-.24.25-.92.9-1.02 1.77-.1.87.63 1.72.73 1.86.1.14 1.24 1.89 3.01 2.66.42.18.75.29 1.01.37.42.13.81.11 1.11.07.34-.05 1.02-.42 1.17-.82.15-.4.15-.75.1-.82-.04-.07-.16-.11-.47-.27z" />
          </svg>
        </motion.a>

      </div>

    </div>
  );
}
