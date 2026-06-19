"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

export default function SuccessStory() {
  const [playVideo, setPlayVideo] = useState(false);

  return (
    <section id="success-story" className="py-16 lg:py-20 bg-charcoal text-white relative overflow-hidden">
      {/* Decorative Golden Ambient Glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gold/10 rounded-full filter blur-3xl -z-0" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gold/10 rounded-full filter blur-3xl -z-0" />
      
      {/* Delicate background traditional vector line grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#FAF7F203_1px,transparent_1px),linear-gradient(to_bottom,#FAF7F203_1px,transparent_1px)] bg-[size:5rem_5rem] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading with high-end editorial typography */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <span className="font-serif italic text-gold text-2xl sm:text-3xl font-normal block mb-3">
            Heritage & Trust
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight mb-4">
            Our Success Story
          </h2>
          <div className="w-20 h-[1.5px] bg-gold mx-auto mb-6" />
          <p className="text-sm sm:text-base text-white/70 max-w-xl mx-auto font-sans leading-relaxed">
            Witness our journey of bringing authentic Malabar catering excellence to weddings, corporate events, and grand gatherings across Kerala.
          </p>
        </div>

        {/* Dynamic Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Story description & values */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-gold mb-6 leading-snug">
              Crafting Feasts that Define Celebrations
            </h3>
            
            <div className="space-y-5 text-sm sm:text-base text-white/80 leading-relaxed font-sans">
              <p>
                From humble beginnings in Kannur to executing grand-scale luxury wedding banquets across Kerala and Karnataka, our vision has always been simple: **uncompromised quality, authentic taste, and impeccable hospitality**.
              </p>
              <p>
                This video takes you behind the scenes of our kitchen, demonstrating our preparation standards, traditional wood-fire cooking methods, and premium event layouts.
              </p>
            </div>

            {/* Micro Stats List */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-white/10">
              <div className="text-left">
                <span className="block font-serif text-2xl sm:text-3xl font-bold text-gold mb-1">20+</span>
                <span className="text-[10px] uppercase tracking-widest text-white/50 font-bold block">Years Legacy</span>
              </div>
              <div className="text-left">
                <span className="block font-serif text-2xl sm:text-3xl font-bold text-gold mb-1">500+</span>
                <span className="text-[10px] uppercase tracking-widest text-white/50 font-bold block">Grand Events</span>
              </div>
              <div className="text-left">
                <span className="block font-serif text-2xl sm:text-3xl font-bold text-gold mb-1">98%</span>
                <span className="text-[10px] uppercase tracking-widest text-white/50 font-bold block">Happy Clients</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Premium Video Frame Embed */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl shadow-gold/10 border-2 border-gold/30 bg-[#000]">
              
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
                    className="object-cover object-center opacity-75 group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Dark mask overlay */}
                  <div className="absolute inset-0 bg-black/45 group-hover:bg-black/25 transition-colors duration-300" />
                  
                  {/* Glowing Play Circle */}
                  <div className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gold hover:bg-gold-hover text-white flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110">
                    <span className="absolute -inset-2 rounded-full bg-gold/20 animate-ping group-hover:opacity-0 transition-opacity duration-300" />
                    <Play className="w-6 h-6 fill-current ml-1" />
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

            {/* Under-video decorative label */}
            <div className="flex items-center justify-center gap-2 mt-4 text-[10px] uppercase tracking-widest text-white/40">
              <Play className="w-3 h-3 text-gold fill-gold" />
              <span>Official Brand legacy video • watch our story</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
