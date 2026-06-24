"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const includedServices = [
  { 
    title: "Menu Planning", 
    desc: "Collaborating with you to create the perfect customized menu for your specific event and guest count." 
  },
  { 
    title: "Ingredient Sourcing & Cooking", 
    desc: "Selecting fresh premium ingredients and authentic spices cooked under strict FSSAI hygiene standards." 
  },
  { 
    title: "Setup and Serving (Buffet or Table Service)", 
    desc: "Providing elegant buffet table setups or high-end table service with professional uniform stewards." 
  },
  { 
    title: "Provision of Cutlery, Plates, Glasses & Water", 
    desc: "Providing high-grade table settings, clean glassware, plates, and fresh drinking water." 
  },
  { 
    title: "Waste Disposal and Post-Event Cleanup", 
    desc: "Ensuring peace of mind with thorough venue cleaning and waste management after the event." 
  }
];

const services = [
  {
    title: "Wedding Catering",
    image: "/wedding catering.png",
    tagline: "Royal Wedding Feasts"
  },
  {
    title: "Kerala Sadya",
    image: "/sadya.png",
    tagline: "24+ Traditional Curries"
  },
  {
    title: "Corporate Events",
    image: "/corporate_catering.png",
    tagline: "Executive Dining & Buffets"
  },
  {
    title: "Live Counters",
    image: "/live couter.jpg",
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
    image: "/buffer.png",
    tagline: "Multi-cuisine Premium setups"
  },
  {
    title: "Custom Menus",
    image: "/custom menu.png",
    tagline: "Tailored to your preferences"
  },
  {
    title: "Desserts & Sweets",
    image: "/Desserts & Sweets.png",
    tagline: "Handcrafted Sweet Endings"
  },
  {
    title: "Table Service",
    image: "/table_service.png",
    tagline: "Elegant Sit-down Dining"
  }
];

export default function Services() {
  const mobileScrollRef = useRef<HTMLDivElement>(null);
  const isInteracting = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    
    let animationFrameId: number;
    let lastTime = performance.now();
    const speed = 0.45; // pixels per frame at 60fps

    const scroll = (time: number) => {
      const el = mobileScrollRef.current;
      if (el && !isInteracting.current) {
        const delta = time - lastTime;
        const step = speed * (delta / 16.67);
        el.scrollLeft += step;

        const maxScroll = el.scrollWidth / 2;
        if (el.scrollLeft >= maxScroll) {
          el.scrollLeft = 0;
        }
      }
      lastTime = time;
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const handleInteractionStart = () => {
    isInteracting.current = true;
  };

  const handleInteractionEnd = () => {
    setTimeout(() => {
      isInteracting.current = false;
    }, 1500);
  };

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
              As the premier catering service and event management group in Kannur and Thalassery, Taste of Malabar delivers exceptional culinary experiences for every milestone. Specializing in premium wedding catering in Kerala, we offer traditional Malabar food catering, traditional Kerala dishes, Indian and Arabic cuisines, interactive live food counters, and elegant buffet setups.
              <br /><br />
              We also provide top-tier outdoor catering services across Kannur, Thalassery, Kozhikode, and Wayanad, ensuring strict FSSAI hygiene standards and memorable dining experiences.
            </p>
          </div>
        </div>
      </div>

      {/* Marquee Carousel Container */}
      <div className="bg-cream-dark py-10 pb-0 lg:pb-4 text-charcoal relative">
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
                          sizes="(max-width: 640px) 112px, 128px"
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
                          sizes="(max-width: 640px) 112px, 128px"
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

          {/* Included Services Cards */}
          <div className="mt-12 pt-12 border-t border-gold/15">
            {/* Desktop Layout */}
            <div className="hidden lg:grid grid-cols-5 gap-4">
              {includedServices.map((item, idx) => (
                <div 
                  key={idx} 
                  className="bg-white p-4 sm:p-5 rounded-2xl border border-neutral-200/60 shadow-sm flex flex-col items-center text-center hover:border-gold/30 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-9 h-9 rounded-full bg-gold/10 flex items-center justify-center text-gold mb-4 font-serif font-bold text-xs">
                    0{idx + 1}
                  </div>
                  <h4 className="text-xs font-bold text-charcoal mb-2.5 uppercase tracking-wide leading-tight min-h-[42px] sm:min-h-[32px] flex items-center justify-center">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-neutral-555 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Mobile Auto-Scrolling Marquee Slider */}
            <div className="block lg:hidden relative">
              <div
                ref={mobileScrollRef}
                onTouchStart={handleInteractionStart}
                onTouchEnd={handleInteractionEnd}
                onMouseDown={handleInteractionStart}
                onMouseUp={handleInteractionEnd}
                onMouseLeave={handleInteractionEnd}
                className="flex gap-4 overflow-x-auto no-scrollbar py-2"
                style={{ scrollBehavior: "auto" }}
              >
                {[...includedServices, ...includedServices].map((item, idx) => (
                  <div
                    key={`marquee-${idx}`}
                    className="w-[280px] shrink-0 bg-white p-5 rounded-2xl border border-neutral-200/60 shadow-sm flex flex-col items-center text-center hover:border-gold/30 transition-all duration-300"
                  >
                    <div className="w-9 h-9 rounded-full bg-gold/10 flex items-center justify-center text-gold mb-4 font-serif font-bold text-xs">
                      0{(idx % includedServices.length) + 1}
                    </div>
                    <h4 className="text-xs font-bold text-charcoal mb-2.5 uppercase tracking-wide leading-tight min-h-[42px] sm:min-h-[32px] flex items-center justify-center">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-neutral-555 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
