"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Play } from "lucide-react";

const timelineData = [
  {
    year: "2004",
    era: "The Genesis",
    title: "Humble Beginnings in Kannur & Thalassery",
    description: "Taste of Malabar began as a small, passionate group of chefs in Kannur & Thalassery, serving local wedding feasts. Our foundation was built on wood-fire cooked authentic Malabar dishes and absolute family hospitality.",
    stat: "100%",
    statLabel: "Wood-Fire Authenticity"
  },
  {
    year: "2012",
    era: "Expanding Horizons",
    title: "Earning Regional Trust",
    description: "As the word spread, we expanded our services to corporate banquets and grand wedding events, acquiring FSSAI certification and setting up state-of-the-art hygienic kitchens.",
    stat: "150+",
    statLabel: "Major Banquets Delivered"
  },
  {
    year: "2020",
    era: "The Grand Scale",
    title: "Destination Weddings & Beyond",
    description: "We scaled our operations to service major events across Kerala and Karnataka, introducing multi-cuisine catering, modern buffet setups, and live food counters.",
    stat: "1000+",
    statLabel: "Grand Events Serviced"
  },
  {
    year: "Today",
    era: "A Legacy of Taste",
    title: "Kerala's Trusted Catering Name",
    description: "Today, with over 20 years of experience, we stand proud as a symbol of trust, hygiene, and authentic flavors, crafting culinary masterpieces for your life's most precious occasions.",
    stat: "98%",
    statLabel: "Customer Satisfaction"
  }
];

export default function SuccessStory() {
  const [playVideo, setPlayVideo] = useState(false);
  const [activeTab, setActiveTab] = useState(3); // default to "Today"

  return (
    <section id="success-story" className="py-20 lg:py-24 bg-charcoal text-white relative overflow-hidden border-t border-white/5">
      {/* Decorative Golden Ambient Glows */}
      <div className="absolute top-1/4 right-0 w-[450px] h-[450px] bg-gold/5 rounded-full filter blur-[150px] -z-0" />
      <div className="absolute bottom-1/4 left-0 w-[450px] h-[450px] bg-gold/5 rounded-full filter blur-[150px] -z-0" />
      
      {/* Delicate background traditional vector line grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#FAF7F202_1px,transparent_1px),linear-gradient(to_bottom,#FAF7F202_1px,transparent_1px)] bg-[size:6rem_6rem] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading with high-end editorial typography */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="font-serif italic text-gold text-xl sm:text-2xl font-normal block mb-2">
            Heritage & Trust
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight mb-4">
            Our Success Story
          </h2>
          <div className="w-16 h-[1.5px] bg-gold/20 mx-auto mb-5 relative overflow-hidden">
            <motion.div
              initial={{ left: "-100%" }}
              whileInView={{ left: "0%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="absolute inset-0 bg-gold"
            />
          </div>
          <p className="text-xs sm:text-sm text-white/70 max-w-xl mx-auto font-sans leading-relaxed">
            Witness our journey of bringing authentic Malabar catering excellence to weddings, corporate events, and grand gatherings across South India.
          </p>
        </div>

        {/* Dynamic Timeline and Video Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Interactive Chronicle */}
          <div className="hidden lg:flex lg:col-span-5 flex-col justify-center">
            
            {/* Horizontal Timeline Tracker */}
            <div className="relative flex justify-between items-center mb-8 pb-4 max-w-md mx-auto lg:mx-0 w-full">
              <div className="absolute left-0 right-0 h-[1.5px] bg-white/10 top-1/2 -translate-y-1/2 -z-10" />
              {timelineData.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className="flex flex-col items-center focus:outline-none group cursor-pointer relative"
                >
                  <span className={`font-serif text-xs sm:text-sm font-bold transition-all duration-300 ${activeTab === idx ? "text-gold scale-110" : "text-white/40 group-hover:text-white/70"}`}>
                    {item.year}
                  </span>
                  <div className={`w-3.5 h-3.5 rounded-full border-2 transition-all duration-300 mt-2 flex items-center justify-center ${activeTab === idx ? "border-gold bg-gold shadow-[0_0_10px_#C5A880]" : "border-white/20 bg-charcoal group-hover:border-white/40"}`}>
                    {activeTab === idx && <div className="w-1 h-1 rounded-full bg-charcoal" />}
                  </div>
                </button>
              ))}
            </div>

            {/* Interactive Timeline Card Panel */}
            <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-6 sm:p-8 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 rounded-bl-full filter blur-xl" />
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="min-h-[220px] flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[9px] uppercase tracking-[0.25em] text-gold font-bold mb-2.5 block">
                      {timelineData[activeTab].era}
                    </span>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-white mb-4 leading-tight">
                      {timelineData[activeTab].title}
                    </h3>
                    <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-sans font-normal">
                      {timelineData[activeTab].description}
                    </p>
                  </div>
                  
                  {/* Era Specific Stat Badge */}
                  <div className="mt-8 flex items-center gap-4 bg-white/[0.03] border border-white/5 p-4 rounded-2xl max-w-xs">
                    <span className="font-serif text-2xl sm:text-3xl font-bold text-gold shrink-0 leading-none">
                      {timelineData[activeTab].stat}
                    </span>
                    <div className="w-[1px] h-8 bg-white/10" />
                    <span className="text-[9px] uppercase tracking-widest text-white/60 font-bold leading-tight">
                      {timelineData[activeTab].statLabel}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>

          {/* Right Column: Premium Video Frame Embed */}
          <div className="lg:col-span-7 flex flex-col">
            
            {/* Gold-gradient wrapped video frame container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="p-[1.5px] rounded-[2rem] bg-gradient-to-tr from-gold/20 via-gold/50 to-gold/20 shadow-[0_20px_50px_rgba(197,168,128,0.15)] relative overflow-hidden"
            >
              <div className="relative w-full aspect-video rounded-[1.9rem] overflow-hidden bg-black">
                
                {!playVideo ? (
                  /* Video Play Facade (Placeholder Layout) */
                  <div 
                    onClick={() => setPlayVideo(true)}
                    className="absolute inset-0 w-full h-full cursor-pointer group flex items-center justify-center select-none"
                  >
                    {/* YouTube Thumbnail Image */}
                    <Image
                      src="https://img.youtube.com/vi/s0rYbyqPZf0/maxresdefault.jpg"
                      alt="Taste of Malabar Video Thumbnail"
                      fill
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover object-center opacity-70 group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                    />
                    {/* Dark mask overlay */}
                    <div className="absolute inset-0 bg-black/45 group-hover:bg-black/25 transition-colors duration-300" />
                    
                    {/* Glowing Play Circle */}
                    <div className="relative z-10 w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-gold hover:bg-gold-light text-white flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-105">
                      <span className="absolute -inset-2 rounded-full bg-gold/20 animate-ping group-hover:opacity-0 transition-opacity duration-300" />
                      <Play className="w-5 h-5 fill-current ml-1" />
                    </div>
                  </div>
                ) : (
                  /* Dynamic iframe mount on user click */
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/s0rYbyqPZf0?autoplay=1&si=K-p0TDF0azhaVaa9" 
                    title="Taste of Malabar Success Story Video Player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  ></iframe>
                )}

              </div>
            </motion.div>

            {/* YouTube Channel Link */}
            <div className="mt-4 text-center">
              <a 
                href="https://www.youtube.com/@TasteofMalabarCaterersKannur"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gold hover:text-white transition-colors duration-300"
              >
                <span>Watch more on our YouTube Channel</span>
                <span className="text-[10px]">→</span>
              </a>
            </div>

            {/* Static Overall Milestone Badges */}
            <div className="grid grid-cols-3 gap-2 mt-8 pt-4 border-t border-white/5 text-center">
              <div>
                <span className="block font-serif text-2xl sm:text-3xl font-bold text-gold leading-none">20+</span>
                <span className="text-[9px] uppercase tracking-widest text-white/50 font-bold block mt-2">Years Legacy</span>
              </div>
              <div className="border-x border-white/10">
                <span className="block font-serif text-2xl sm:text-3xl font-bold text-gold leading-none">1000+</span>
                <span className="text-[9px] uppercase tracking-widest text-white/50 font-bold block mt-2">Grand Events</span>
              </div>
              <div>
                <span className="block font-serif text-2xl sm:text-3xl font-bold text-gold leading-none">98%</span>
                <span className="text-[9px] uppercase tracking-widest text-white/50 font-bold block mt-2">Happy Clients</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
