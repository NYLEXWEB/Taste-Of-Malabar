"use client";

import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function FloatingCTA() {
  const whatsappUrl = "https://wa.me/916238599197?text=Hi%20Taste%20of%20Malabar,%20I'd%20like%20to%20discuss%20catering%20services.";
  const instagramUrl = "https://www.instagram.com/taste_of_malabar_caterers/";
  const googleReviewUrl = "https://www.google.com/search?q=Taste+of+Malabar+Caterers+Manjapalam+Kannur&oq=Taste+of+Malabar+Caterers+Manjapalam+Kannur#lrd=0x3ba422c545f491c9:0x8e8eb49ea1826b52,3,1";

  return (
    <div className="fixed inset-0 pointer-events-none z-50 select-none">
      
      {/* Floating CTA Stack (Bottom Right) */}
      <div className="absolute bottom-6 right-6 pointer-events-auto flex flex-col items-center gap-3.5 z-50">
        
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
          {/* Official WhatsApp Icon from react-icons */}
          <FaWhatsapp className="w-7 h-7 text-white" />
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
          {/* Official Instagram Icon from react-icons */}
          <FaInstagram className="w-7 h-7 text-white" />
        </motion.a>

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
          {/* Official Google Icon from react-icons */}
          <FcGoogle className="w-7 h-7" />
        </motion.a>

      </div>

    </div>
  );
}
