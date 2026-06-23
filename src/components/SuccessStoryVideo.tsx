"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

export default function SuccessStoryVideo() {
  const [playVideo, setPlayVideo] = useState(false);

  return (
    <section className="py-16 lg:py-20 bg-cream relative overflow-hidden border-t border-gold/10">
      {/* Decorative Golden Ambient Glows */}
      <div className="absolute top-1/4 right-0 w-[300px] h-[300px] bg-gold/5 rounded-full filter blur-[120px] -z-0" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Section Heading */}
        <div className="mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-gold mb-3 block">
            Our Journey
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-charcoal mb-4">
            Success Story
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
        </div>

        {/* Video Player */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="p-[1.5px] rounded-[2rem] bg-gradient-to-tr from-gold/20 via-gold/50 to-gold/20 shadow-xl relative overflow-hidden max-w-3xl mx-auto"
        >
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
                  sizes="(max-width: 1024px) 100vw, 60vw"
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
        </motion.div>

        {/* YouTube Channel Link */}
        <div className="mt-5">
          <a 
            href="https://www.youtube.com/@TasteofMalabarCaterersKannur"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gold hover:text-gold-hover transition-colors duration-300"
          >
            <span>Watch more on our YouTube Channel</span>
            <span className="text-[10px]">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
