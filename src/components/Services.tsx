"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    title: "Wedding Catering",
    image: "/hero_catering.png",
    tagline: "Royal Wedding Feasts"
  },
  {
    title: "Kerala Sadya",
    image: "/sadya.png",
    tagline: "24+ Traditional Curries"
  },
  {
    title: "Corporate Events",
    image: "/about_catering.png",
    tagline: "Executive Dining & Buffets"
  },
  {
    title: "Live Counters",
    image: "/live_counter.png",
    tagline: "Fresh Appam & Dosa Stations"
  },
  {
    title: "Signature Biriyani",
    image: "/biryani.png",
    tagline: "Authentic Dum cooked classics"
  },
  {
    title: "Seafood Delicacies",
    image: "/seafood.png",
    tagline: "Fresh Coastline Special Grills"
  },
  {
    title: "Buffet Catering",
    image: "/hero_catering.png",
    tagline: "Multi-cuisine Premium setups"
  },
  {
    title: "Custom Menus",
    image: "/about_catering.png",
    tagline: "Tailored to your preferences"
  }
];

export default function Services() {
  return (
    <section id="services" className="relative w-full overflow-hidden bg-cream border-t border-gold/10">
      {/* Section Header */}
      <div className="bg-cream pt-16 pb-6 text-charcoal relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-gold mb-3 block">
              What We Do
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-charcoal mb-6">
              Our Premium Catering Services
            </h2>
            <div className="w-16 h-[2px] bg-gold/20 mx-auto mb-6 relative overflow-hidden">
              <motion.div
                initial={{ left: "-100%" }}
                whileInView={{ left: "0%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="absolute inset-0 bg-gold"
              />
            </div>
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-2xl mx-auto font-sans font-normal">
              Delivering exquisite culinary presentations and premium hospitality services. We tailor every service to fit the grandeur, theme, and scale of your special celebration.
            </p>
          </div>
        </div>
      </div>

      {/* Marquee Carousel Container */}
      <div className="bg-cream-dark py-10 pb-14 text-charcoal relative">
        {/* Blended background pattern decoration */}
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
            {/* Smooth luxury blur/fade overlays on sides */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-cream-dark via-cream-dark/50 to-transparent z-20 pointer-events-none hidden md:block" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-cream-dark via-cream-dark/50 to-transparent z-20 pointer-events-none hidden md:block" />

            {/* Continuous scrolling row */}
            <div className="flex gap-16 sm:gap-24 animate-marquee hover:[animation-play-state:paused] w-max select-none cursor-grab active:cursor-grabbing">
              
              {/* First Track Set */}
              <div className="flex gap-16 sm:gap-24 px-8">
                {services.map((service, idx) => (
                  <div
                    key={`track1-${idx}`}
                    className="w-44 sm:w-52 flex-shrink-0 flex flex-col items-center text-center group"
                  >
                    {/* Realistic circular food/service image badge */}
                    <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1 border-2 border-gold/25 bg-white shadow-lg group-hover:border-gold group-hover:scale-105 transition-all duration-500 ease-out flex items-center justify-center overflow-hidden">
                      <div className="relative w-full h-full rounded-full overflow-hidden">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                        />
                      </div>
                      
                      {/* Interactive golden hover ring overlay */}
                      <div className="absolute inset-0 rounded-full border border-gold/0 group-hover:border-gold/40 group-hover:scale-[0.96] transition-all duration-500 pointer-events-none" />
                    </div>

                    {/* Service Name */}
                    <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-charcoal group-hover:text-gold transition-colors duration-300 mt-4 leading-tight">
                      {service.title}
                    </span>

                    {/* Tagline */}
                    <span className="text-[10px] text-neutral-500 font-medium mt-1 group-hover:text-neutral-700 transition-colors duration-300">
                      {service.tagline}
                    </span>
                  </div>
                ))}
              </div>

              {/* Second Track Set (Duplicate for seamless loop) */}
              <div className="flex gap-16 sm:gap-24 px-8" aria-hidden="true">
                {services.map((service, idx) => (
                  <div
                    key={`track2-${idx}`}
                    className="w-44 sm:w-52 flex-shrink-0 flex flex-col items-center text-center group"
                  >
                    {/* Realistic circular food/service image badge */}
                    <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1 border-2 border-gold/25 bg-white shadow-lg group-hover:border-gold group-hover:scale-105 transition-all duration-500 ease-out flex items-center justify-center overflow-hidden">
                      <div className="relative w-full h-full rounded-full overflow-hidden">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                        />
                      </div>
                      
                      {/* Interactive golden hover ring overlay */}
                      <div className="absolute inset-0 rounded-full border border-gold/0 group-hover:border-gold/40 group-hover:scale-[0.96] transition-all duration-500 pointer-events-none" />
                    </div>

                    {/* Service Name */}
                    <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-charcoal group-hover:text-gold transition-colors duration-300 mt-4 leading-tight">
                      {service.title}
                    </span>

                    {/* Tagline */}
                    <span className="text-[10px] text-neutral-500 font-medium mt-1 group-hover:text-neutral-700 transition-colors duration-300">
                      {service.tagline}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          </motion.div>

          {/* Small Notice focusing on Catering primary, event secondary */}
          <div className="mt-12 text-center max-w-xl mx-auto bg-white border border-neutral-200/80 p-6 rounded-2xl shadow-md">
            <p className="text-xs text-neutral-600 leading-relaxed font-sans font-normal">
              <span className="font-bold text-gold uppercase tracking-wider block mb-1">Catering & Event Management Integration</span>
              We manage everything from recipe curation, live hot counters, FSSAI-certified food preparation to premium buffet layout execution, ensuring a flawless dining hospitality experience.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
