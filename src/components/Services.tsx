"use client";

import { 
  Heart, 
  Leaf, 
  Briefcase, 
  Gift, 
  UtensilsCrossed, 
  Layers, 
  Sparkles, 
  Settings
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    icon: Heart,
    title: "Wedding Catering"
  },
  {
    icon: Leaf,
    title: "Kerala Sadya"
  },
  {
    icon: Briefcase,
    title: "Corporate Catering"
  },
  {
    icon: Gift,
    title: "Birthday Catering"
  },
  {
    icon: Layers,
    title: "Buffet Catering"
  },
  {
    icon: UtensilsCrossed,
    title: "Table Service"
  },
  {
    icon: Sparkles,
    title: "Islamic Buffet"
  },
  {
    icon: Settings,
    title: "Custom Catering"
  },
];

export default function Services() {
  return (
    <section id="services" className="relative w-full overflow-hidden bg-cream">
      {/* Top Half: Cream Background with Headers */}
      <div className="bg-cream pt-24 pb-12 text-charcoal relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-4xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-gold mb-3 block">
              What We Do
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-charcoal mb-6">
              Our Premium Catering Services
            </h2>
            <div className="w-16 h-[2px] bg-gold mx-auto mb-6" />
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-2xl mx-auto font-sans font-normal">
              Delivering exquisite culinary presentations and premium hospitality services. We tailor every service to fit the grandeur, theme, and scale of your special celebration.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Half: Cream-Dark Background with Marquee */}
      <div className="bg-cream-dark py-12 pb-20 text-charcoal relative">
        {/* Blended background image */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-[0.03]">
          <Image
            src="/about_catering.png"
            alt="Catering Background Blend"
            fill
            className="object-cover object-center grayscale contrast-125"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-cream-dark via-transparent to-cream-dark" />
        </div>

        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold/5 rounded-full filter blur-[120px] -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
          {/* Infinite Horizontal Scroll Track Container */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-screen left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] overflow-hidden py-4"
          >
            {/* Luxury smooth fade overlays on sides */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-cream-dark via-cream-dark/50 to-transparent z-20 pointer-events-none hidden md:block" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-cream-dark via-cream-dark/50 to-transparent z-20 pointer-events-none hidden md:block" />

            {/* Continuous scrolling row */}
            <div className="flex gap-12 sm:gap-20 animate-marquee hover:[animation-play-state:paused] w-max select-none cursor-grab active:cursor-grabbing">
              
              {/* First Track Set */}
              <div className="flex gap-12 sm:gap-20 px-6">
                {services.map((service, idx) => (
                  <div
                    key={`track1-${idx}`}
                    className="w-36 sm:w-44 flex-shrink-0 flex flex-col items-center group"
                  >
                    {/* Category Icon */}
                    <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center text-charcoal transition-transform duration-300 group-hover:scale-110 group-hover:text-gold">
                      <service.icon className="w-full h-full stroke-[1.2]" />
                    </div>
                    {/* Name below it */}
                    <span className="text-sm sm:text-base font-bold tracking-wide text-charcoal/90 group-hover:text-gold transition-colors duration-300 mt-4 text-center font-sans leading-tight">
                      {service.title}
                    </span>
                  </div>
                ))}
              </div>

              {/* Second Track Set (Duplicate for seamless loop) */}
              <div className="flex gap-12 sm:gap-20 px-6" aria-hidden="true">
                {services.map((service, idx) => (
                  <div
                    key={`track2-${idx}`}
                    className="w-36 sm:w-44 flex-shrink-0 flex flex-col items-center group"
                  >
                    {/* Category Icon */}
                    <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center text-charcoal transition-transform duration-300 group-hover:scale-110 group-hover:text-gold">
                      <service.icon className="w-full h-full stroke-[1.2]" />
                    </div>
                    {/* Name below it */}
                    <span className="text-sm sm:text-base font-bold tracking-wide text-charcoal/90 group-hover:text-gold transition-colors duration-300 mt-4 text-center font-sans leading-tight">
                      {service.title}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          </motion.div>

          {/* Small Notice focusing on Catering primary, event secondary */}
          <div className="mt-12 text-center max-w-xl mx-auto bg-cream border border-neutral-200/80 p-6 rounded-2xl shadow-md">
            <p className="text-xs text-neutral-600 leading-relaxed font-sans font-normal">
              <span className="font-bold text-gold uppercase tracking-wider block mb-1">Catering & Event Management Integration</span>
              While our heart beats for catering, we also provide professional <strong>Event Management solutions (20% of operations)</strong> including banquet design, decor coordination, floral layouts, and lighting to ensure a seamless experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
