"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const serviceImages = [
  "/step/step-menu-planning-catering-kannur.png",
  "/step/step-hygienic-ingredient-sourcing-kerala.png",
  "/step/step-elegant-buffet-setup-serving.png",
  "/step/step-premium-cutlery-glassware-tableware.png",
  "/step/step-waste-management-venue-cleanup.png"
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15
    }
  }
};

const includedServices = [
  {
    num: "I",
    title: "Menu Planning",
    desc: "Collaborating with you to create the perfect customized menu for your specific event and guest count."
  },
  {
    num: "II",
    title: "Ingredient Sourcing & Cooking",
    desc: "Selecting fresh premium ingredients and authentic spices cooked under strict FSSAI hygiene standards."
  },
  {
    num: "III",
    title: "Setup and Serving (Buffet or Table Service)",
    desc: "Providing elegant buffet table setups or high-end table service with professional uniform stewards."
  },
  {
    num: "IV",
    title: "Provision of Cutlery, Plates, Glasses & Water",
    desc: "Providing high-grade table settings, clean glassware, plates, and fresh drinking water."
  },
  {
    num: "V",
    title: "Waste Disposal and Post-Event Cleanup",
    desc: "Ensuring peace of mind with thorough venue cleaning and waste management after the event."
  }
];

const services = [
  {
    title: "Wedding Catering",
    image: "/kannur-wedding-catering-services.png",
    tagline: "Royal Wedding Feasts"
  },
  {
    title: "Kerala Sadya",
    image: "/traditional-kerala-sadya-feast-catering.png",
    tagline: "24+ Traditional Curries"
  },
  {
    title: "Corporate Events",
    image: "/corporate-event-buffet-catering-services.png",
    tagline: "Executive Dining & Buffets"
  },
  {
    title: "Live Counters",
    image: "/live-cooking-counter-stations-kannur.jpg",
    tagline: "Fresh Appam & Dosa Stations"
  },
  {
    title: "Signature Biriyani",
    image: "/thalassery-dum-biryani-wedding-catering.png",
    tagline: "Authentic Dum cooked classics"
  },
  {
    title: "Seafood Delicacies",
    image: "/malabar-seafood-delicacies-catering.png",
    tagline: "Fresh Coastline Special Grills"
  },
  {
    title: "Buffet Catering",
    image: "/premium-buffet-setup-taste-of-malabar.png",
    tagline: "Multi-cuisine Premium setups"
  },
  {
    title: "Custom Menus",
    image: "/customized-event-menu-planning-caterers.png",
    tagline: "Tailored to your preferences"
  },
  {
    title: "Desserts & Sweets",
    image: "/traditional-malabar-desserts-sweet-catering.png",
    tagline: "Handcrafted Sweet Endings"
  },
  {
    title: "Table Service",
    image: "/sit-down-table-service-stewards-kerala.png",
    tagline: "Elegant Sit-down Dining"
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
              Our Catering Services
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
              As a trusted Catering Service in Kannur and Thalassery, Taste of Malabar Caterers & Event Management Group delivers exceptional food experiences for every occasion. Specializing in Wedding Catering Kerala, we provide authentic Malabar cuisine, traditional Kerala dishes, Indian and Arabic cuisines, live counters, and elegant buffet arrangements.
              We also provide reliable Outdoor Catering in Kannur and any where in Kerala, ensuring quality, hygiene, and memorable dining experiences
            </p>
          </div>
        </div>
      </div>

      {/* Marquee Carousel Container */}
      <div className="bg-cream-dark py-10 pb-0 lg:pb-4 text-charcoal relative">
        {/* Blended background pattern decoration */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-[0.03]">
          <Image
            src="/about-taste-of-malabar-catering-heritage.png"
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

          {/* Included Services Unique Leaf-Shape Dark Cards */}
          <div className="mt-16 pt-16 border-t border-gold/15 relative">

            {/* Responsive grid displaying cards stacked vertically on mobile and side-by-side on desktop */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
              {includedServices.map((item, idx) => {
                const imageSrc = serviceImages[idx];
                return (
                  <div
                    key={idx}
                    className="bg-[#222222] rounded-[3rem_1rem_3rem_1rem] p-6 sm:p-7 border border-gold/30 shadow-2xl flex flex-col items-center text-center relative overflow-hidden transition-all duration-500 hover:border-gold hover:shadow-gold/25 hover:-translate-y-2 group cursor-pointer"
                  >
                    {/* Top Roman Numeral Step */}
                    <span className="font-serif text-gold text-[11px] sm:text-xs tracking-[0.25em] font-bold uppercase mb-4 block group-hover:text-gold/90 transition-colors duration-300">
                      Step {item.num}
                    </span>

                    {/* Double-ringed Gold Image Badge */}
                    <div className="relative w-14 h-14 rounded-full p-0.5 border border-gold/25 bg-[#222222] mb-5 overflow-hidden group-hover:scale-110 transition-transform duration-500 ease-out flex items-center justify-center">
                      <div className="relative w-full h-full rounded-full overflow-hidden">
                        <Image
                          src={imageSrc}
                          alt={item.title}
                          fill
                          sizes="56px"
                          className="object-cover object-center"
                        />
                      </div>
                    </div>

                    {/* Title */}
                    <h4 className="text-white text-xs font-serif font-bold uppercase tracking-wider mb-3 leading-snug min-h-[40px] flex items-center justify-center">
                      {item.title}
                    </h4>

                    {/* Description */}
                    <p className="text-[11px] text-neutral-300 leading-relaxed font-normal">
                      {item.desc}
                    </p>

                    {/* Glowing highlight in bottom corner */}
                    <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-gold/5 rounded-full filter blur-xl group-hover:bg-gold/15 transition-all duration-500" />
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
