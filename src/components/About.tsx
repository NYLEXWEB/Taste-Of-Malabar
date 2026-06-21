"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import FloatingStats from "./FloatingStats";

export default function About() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="about" className="pt-0 pb-16 lg:pb-24 bg-cream relative">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 lg:pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Column: Premium Images Collage */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-6 relative"
          >
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border-8 border-cream-dark">
              <Image
                src="/about.JPG"
                alt="Taste of Malabar Professional Catering Crew in Kannur"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/10 via-transparent to-transparent" />
            </div>

            {/* Accent gold line box */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-gold -z-10 rounded-tl-xl" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-gold -z-10 rounded-br-xl" />

            {/* Overlapping badge */}
            <div className="absolute -bottom-6 left-8 bg-white text-charcoal p-5 rounded-2xl shadow-xl flex items-center space-x-4 border border-neutral-200/80 max-w-xs">
              <span className="font-serif text-4xl font-bold text-gold">20+</span>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-gold font-bold">Years of Trust</span>
                <span className="text-xs text-neutral-600 font-medium">Delivering Culinary Masterpieces</span>
              </div>
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

            <div className="space-y-4 text-neutral-600 text-sm sm:text-base leading-relaxed mb-6">
              <p>
                <strong>Taste of Malabar Caterers & Event Management Group</strong> is a top-rated wedding catering services provider and professional event management company based in Kannur & Thalassery. For over 20 years, we have crafted premium traditional Malabar food catering, luxury buffet layouts, and custom wedding feasts across Kannur, Kozhikode, Kasaragod, Wayanad, and Malappuram. Our commitment to authentic flavors, creative food presentation, and warm hospitality has made us one of the best wedding caterers in Kerala.
              </p>
              <p>
                As a fully FSSAI-licensed catering service in Kerala, we maintain strict standards of food safety, hygiene, and ingredient quality. From intimate engagement functions and housewarmings to grand wedding receptions and corporate events, our expert chefs ensure that every menu is custom-tailored and perfectly executed.
              </p>

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
                      Our philosophy goes beyond serving food. We believe that great catering is about creating experiences, bringing people together, and making celebrations truly memorable. Combining traditional Malabar flavors with professional event execution, we offer customized menus and personalized service tailored to the unique needs of each client.
                    </p>
                    <p>
                      Over the years, our dedication to quality, reliability, and customer satisfaction has earned the trust of families, businesses, and event organizers across Kerala. Every event we undertake is managed with care, attention to detail, and a passion for exceeding expectations.
                    </p>
                    <p>
                      Whether it is an intimate family gathering or a grand wedding celebration, Taste of Malabar is committed to making every occasion special through outstanding cuisine, professional service, and genuine hospitality.
                    </p>
                    <p className="text-xs font-bold text-gold pt-2 uppercase tracking-wide border-t border-neutral-200">
                      20+ Years of Experience • FSSAI Licensed • Authentic Malabar Flavors • Professional Catering Excellence
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
