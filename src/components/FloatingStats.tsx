"use client";

import { motion } from "framer-motion";

export default function FloatingStats() {
  const stats = [
    {
      value: "20+",
      label: "Years Experience",
      icon: (
        <svg className="w-11 h-11 text-gold flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
          {/* Leaves left */}
          <path d="M4.5 14c-1-1.5-1.5-3.5-.8-5.5.5-1.5 1.5-2.5 3-3" />
          <path d="M3 11c-.5-1-.5-2.5 0-3.5" />
          {/* Leaves right */}
          <path d="M19.5 14c1-1.5 1.5-3.5.8-5.5-.5-1.5-1.5-2.5-3-3" />
          <path d="M21 11c.5-1.5.5-2.5 0-3.5" />
          {/* Center award badge */}
          <circle cx="12" cy="11" r="3.5" />
          <path d="M12 9v4M10 11h4" />
          {/* Base ribbon / support */}
          <path d="M8 18c2 2 6 2 8 0" />
        </svg>
      )
    },
    {
      value: "500+",
      label: "Events Completed",
      icon: (
        <svg className="w-11 h-11 text-gold flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )
    },
    {
      value: "50,000+",
      label: "Guests Served",
      icon: (
        <svg className="w-11 h-11 text-gold flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
          <path d="M12 4V2M3 14c0-4.4 3.6-8 8-8h2c4.4 0 8 3.6 8 8v1H3v-1zm18 3H3a1 1 0 0 1-1-1v-1h20v1a1 1 0 0 1-1 1z" />
        </svg>
      )
    },
    {
      value: "100%",
      label: "Client Satisfaction",
      icon: (
        <svg className="w-11 h-11 text-gold flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      )
    }
  ];

  return (
    <div className="relative z-20 -mt-12 sm:-mt-16 lg:-mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-charcoal border border-gold/15 shadow-2xl rounded-2xl p-6 sm:p-8 lg:py-8 lg:px-12"
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0">
          {stats.map((stat, idx) => (
            <div 
              key={idx} 
              className={`flex items-center space-x-4 justify-start lg:justify-center px-2 sm:px-4 ${
                idx !== stats.length - 1 ? "lg:border-r lg:border-gold/10" : ""
              }`}
            >
              {stat.icon}
              <div className="flex flex-col">
                <span className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight leading-none">
                  {stat.value}
                </span>
                <span className="text-[10px] sm:text-xs text-white/60 font-medium tracking-wide leading-normal mt-1 sm:mt-1.5">
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
