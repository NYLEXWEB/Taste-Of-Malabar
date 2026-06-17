"use client";

import { motion } from "framer-motion";

export default function FloatingCTA() {
  const whatsappUrl = "https://wa.me/916238599197?text=Hi%20Taste%20of%20Malabar,%20I'd%20like%20to%20discuss%20catering%20services.";
  const instagramUrl = "https://www.instagram.com/taste_of_malabar_caterers?igsh=anphOXpvbTdxcmhu";

  return (
    <div className="fixed inset-0 pointer-events-none z-50 select-none">
      
      {/* Floating Instagram (Bottom Left) */}
      <motion.a
        href={instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="absolute bottom-6 left-6 pointer-events-auto w-14 h-14 rounded-full flex items-center justify-center shadow-xl text-white bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] border border-white/10 hover:shadow-2xl hover:shadow-pink-500/20 transition-all duration-300"
        aria-label="Contact us on Instagram"
      >
        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      </motion.a>

      {/* Floating WhatsApp (Bottom Right) */}
      <div className="absolute bottom-6 right-6 pointer-events-auto">
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="relative w-14 h-14 rounded-full flex items-center justify-center shadow-xl text-white bg-[#25D366] hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-300 border border-white/5"
          aria-label="Chat with us on WhatsApp"
        >
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
