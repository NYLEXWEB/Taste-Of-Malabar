"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, MessageCircle } from "lucide-react";

const feedImages = [
  { src: "/hero_catering.png", likes: 245, comments: 18, title: "Premium Buffet Setup" },
  { src: "/about_catering.png", likes: 189, comments: 12, title: "Executive Culinary Crew" },
  { src: "/live_counter.png", likes: 312, comments: 27, title: "Live Dosa & Appam Station" },
  { src: "/biryani.png", likes: 420, comments: 34, title: "Authentic Dum Biriyani" },
  { src: "/sadya.png", likes: 298, comments: 19, title: "Traditional Kerala Sadya" },
  { src: "/seafood.png", likes: 356, comments: 22, title: "Seafood Claypot Grill" },
];

export default function InstagramFeed() {
  const profileUrl = "https://www.instagram.com/taste_of_malabar_caterers?igsh=anphOXpvbTdxcmhu";

  return (
    <section id="instagram-feed" className="py-24 lg:py-32 bg-[#0A0A0A] relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="font-serif italic text-gold text-2xl font-normal block mb-2">
            Social Showcase
          </span>
          <span className="text-xs font-bold uppercase tracking-widest text-white/40 mb-3 block">
            Follow Our Journey
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Taste of Malabar on Instagram
          </h2>
          <div className="w-16 h-[2px] bg-gold mx-auto mb-6" />
          
          <a
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gold hover:text-white transition-colors duration-300"
          >
            <span>@taste_of_malabar_caterers</span>
            <span>→</span>
          </a>
        </div>

        {/* 6-Column Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {feedImages.map((img, idx) => (
            <motion.a
              key={idx}
              href={profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-square w-full rounded-2xl overflow-hidden group border border-white/5 bg-[#121212]"
            >
              {/* Instagram Image */}
              <Image
                src={img.src}
                alt={img.title}
                fill
                className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
              />

              {/* Instagram Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6 z-10">
                <div className="flex items-center gap-1.5 text-white">
                  <Heart className="w-4 h-4 fill-white" />
                  <span className="text-xs font-bold font-sans">{img.likes}</span>
                </div>
                <div className="flex items-center gap-1.5 text-white">
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span className="text-xs font-bold font-sans">{img.comments}</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Follow Button */}
        <div className="mt-12 text-center">
          <a
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest text-white bg-gold hover:bg-gold-hover hover:scale-[1.02] active:scale-95 transition-all duration-300 shadow-md shadow-gold/15"
          >
            Follow on Instagram
          </a>
        </div>

      </div>
    </section>
  );
}
