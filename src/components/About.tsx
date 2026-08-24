"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Play } from "lucide-react";
import FloatingStats from "./FloatingStats";

export default function About() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [playVideo, setPlayVideo] = useState(false);

  return (
    <section id="about" className="pt-0 pb-8 lg:pb-12 bg-cream relative">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold/5 rounded-full filter blur-3xl -z-10" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-gold/5 rounded-full filter blur-3xl -z-10" />

      {/* Minimalist Palm Leaf Vector Silhouette (Kerala Themed) */}
      <svg 
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[350px] h-[350px] opacity-[0.05] pointer-events-none text-gold select-none" 
        viewBox="0 0 100 100" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="0.5"
      >
        <path d="M 10 90 C 20 80 40 75 90 70" />
        <path d="M 30 78 C 30 70 32 60 35 55" />
        <path d="M 40 76 C 42 66 45 56 50 50" />
        <path d="M 50 74 C 54 64 58 54 65 48" />
        <path d="M 60 73 C 65 63 70 53 78 48" />
        <path d="M 70 72 C 76 62 82 52 90 48" />
        <path d="M 80 71 C 86 61 92 51 98 48" />
      </svg>

      {/* Stats Card */}
      <FloatingStats />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 lg:pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Success Story Video Player */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "200px 0px 100px 0px", amount: 0.01 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-6 w-full text-center"
          >
            <div className="mb-4 text-left">
              <span className="font-serif italic text-gold text-2xl font-normal block mb-1">
                Success Story
              </span>
              <span className="text-xs font-bold uppercase tracking-widest text-gold/60 block mb-3">
                Watch Our Documentary
              </span>
            </div>

            <div className="p-[1.5px] rounded-[2rem] bg-gradient-to-tr from-gold/20 via-gold/50 to-gold/20 shadow-xl relative overflow-hidden w-full">
              <div className="relative w-full aspect-video rounded-[1.9rem] overflow-hidden bg-black">
                {!playVideo ? (
                  <div 
                    onClick={() => setPlayVideo(true)}
                    className="absolute inset-0 w-full h-full cursor-pointer group flex items-center justify-center select-none"
                  >
                    <Image
                      src="https://img.youtube.com/vi/s0rYbyqPZf0/maxresdefault.jpg"
                      alt="Taste of Malabar Video Thumbnail"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-center opacity-75 group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
                    <div className="relative z-10 w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-gold hover:bg-gold-hover text-white flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-105">
                      <span className="absolute -inset-2 rounded-lg bg-gold/20 animate-ping group-hover:opacity-0 transition-opacity duration-300" />
                      <Play className="w-5 h-5 fill-current ml-1" />
                    </div>
                  </div>
                ) : (
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
            </div>

            <div className="mt-4 text-left">
              <a 
                href="https://www.youtube.com/@TasteofMalabarCaterersKannur"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gold hover:text-gold-hover transition-colors duration-300"
              >
                <span>Watch more on YouTube</span>
                <span className="text-[10px]">→</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Narrative */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Subsection header */}
            <span className="font-serif italic text-gold text-2xl font-normal block mb-2">
              Heritage of Taste
            </span>
            <span className="text-xs font-bold uppercase tracking-widest text-gold/60 mb-3 block">
              Our Legacy
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-charcoal mb-6 leading-tight">
              A Legacy of Taste, <br />
              Hospitality & Excellence
            </h2>

            <div className="space-y-4 text-neutral-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
              <p>
                <strong>Taste of Malabar Caterers & Event Management Group</strong> is a trusted catering and event management company based in Kannur and Thalassery, proudly serving clients across Kerala. With over 20 years of expertise as premier wedding caterers in Kannur, we specialize in wedding catering, receptions, engagements, corporate events, housewarming ceremonies, and special celebrations of every scale.
              </p>
              
              <div className="border-l-4 border-gold bg-gold/5 p-4 rounded-r-2xl my-4">
                <p className="text-sm font-sans text-charcoal font-bold">
                  📍 Ours is one of the biggest central kitchens in the North Malabar region.
                </p>
              </div>
              <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="space-y-4 overflow-hidden"
                  >
                    <p className="pt-2">
                      Our culinary expertise spans a wide range of cuisines, including authentic traditional Kerala Sadya, traditional Malabar food catering, Indian, Arabic, Continental, and customized international menus. We are recognized as the top wedding event planners in Kannur & Thalassery, with extensive experience catering for Hindu, Muslim, and Christian weddings, understanding the unique traditions, tastes, and hospitality expectations of each celebration.
                    </p>
                    <p>
                      From elegant wedding feasts and grand buffet setups to intimate family gatherings and corporate functions, our team combines exceptional food, professional hospitality, and meticulous planning to create memorable experiences. Backed by FSSAI certification and a strong commitment to quality, hygiene, and customer satisfaction, we deliver premium outdoor catering services in Kannur, Thalassery, Kozhikode, Wayanad, and across Kerala, tailored to your preferences, style, and budget.
                    </p>
                    <p className="text-xs font-bold text-gold pt-2 uppercase tracking-wide border-t border-neutral-200">
                      Based in Kannur & Thalassery • Serving All Over Kerala • 20+ Years of Trusted Catering Excellence
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-xs font-bold uppercase tracking-widest text-gold hover:text-charcoal transition-colors duration-300 mt-2 inline-flex items-center gap-1 cursor-pointer"
              >
                {isExpanded ? "Read Less" : "Read More"}
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
