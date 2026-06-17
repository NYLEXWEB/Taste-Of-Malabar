"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Dr. Manoj Kumar",
    location: "Kozhikode",
    event: "Daughter's Wedding",
    text: "Taste of Malabar did an incredible job catering for my daughter's wedding. The Thalassery Chicken Biriyani was legendary! The setup was exceptionally clean, and the stewards were polite, efficient, and well-groomed. Truly a luxury service.",
    rating: 5,
    avatarText: "M",
    avatarBg: "bg-blue-600",
    time: "a week ago",
    reviewsCount: 15,
  },
  {
    id: 2,
    name: "Aiswarya Menon",
    location: "Kochi",
    event: "Premium Corporate Banquet",
    text: "We hired them for our annual corporate meeting in Kochi. Excellent service, elegant buffet counters, and prompt execution. The live counter mocktails and fish pollichathu were absolute crowd favorites. They represent professional hospitality at its best.",
    rating: 5,
    avatarText: "A",
    avatarBg: "bg-red-500",
    time: "2 weeks ago",
    reviewsCount: 8,
  },
  {
    id: 3,
    name: "Abdul Rasheed",
    location: "Kannur",
    event: "Family Nikah & Reception",
    text: "Simply outstanding! Authentic Malabar flavors at their finest. The Muttamala and Neypathiri mutton roast tasted exactly like home-cooked heritage dishes. Their FSSAI certification and hygiene standards were highly visible in their neat setups.",
    rating: 5,
    avatarText: "R",
    avatarBg: "bg-green-600",
    time: "a month ago",
    reviewsCount: 24,
  },
  {
    id: 4,
    name: "Rajesh Gowda",
    location: "Mangalore",
    event: "Destination Wedding",
    text: "They traveled from Kannur to Mangalore for our wedding. The mobile kitchen setup was incredibly impressive. The traditional Sadya served on banana leaves was impeccable. Every single guest praised the food quality and presentation.",
    rating: 5,
    avatarText: "G",
    avatarBg: "bg-purple-600",
    time: "2 months ago",
    reviewsCount: 12,
  },
  {
    id: 5,
    name: "Fathima Zahra",
    location: "Manjeri",
    event: "Birthday Celebration",
    text: "Their live counters are a must-have! The live parotta and tandoori chicken stations kept our guests fully engaged and thoroughly satisfied. Extremely clean preparation, top-grade ingredients, and very friendly chefs.",
    rating: 5,
    avatarText: "Z",
    avatarBg: "bg-yellow-600",
    time: "3 weeks ago",
    reviewsCount: 4,
  },
  {
    id: 6,
    name: "Meera & Rahul",
    location: "Thrissur",
    event: "Wedding Reception",
    text: "We wanted a custom menu mixing Malabar specialties and Central Kerala dishes. The menu planning they did was perfect. The desserts, especially the Elaneer pudding, were out of this world. Highly recommend their custom catering solutions.",
    rating: 5,
    avatarText: "M",
    avatarBg: "bg-teal-600",
    time: "a month ago",
    reviewsCount: 6,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const mapsUrl = "https://share.google/asyZyIG5oKfZx7wnf";

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 lg:py-36 bg-[#0A0A0A] relative overflow-hidden border-t border-white/5">
      {/* Decorative gradients */}
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-gold/5 rounded-full filter blur-3xl -z-10" />
      <div className="absolute bottom-1/3 right-10 w-80 h-80 bg-gold/5 rounded-full filter blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header & Google Review Stats */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20 flex flex-col items-center">
          <span className="font-serif italic text-gold text-2xl font-normal block mb-2">
            Social Proof
          </span>
          <span className="text-xs font-bold uppercase tracking-widest text-white/40 mb-3 block">
            Google Reviews
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
            Words of Appreciation
          </h2>
          <div className="w-16 h-[2px] bg-gold mb-8" />
          
          {/* Google Ratings Showcase Box */}
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#121212] border border-white/10 hover:border-gold/30 hover:scale-[1.02] transition-all duration-300 p-5 rounded-3xl flex flex-col sm:flex-row items-center gap-6 shadow-xl mb-6 select-none"
          >
            {/* Google Logo with Rating */}
            <div className="flex items-center gap-2">
              <span className="font-serif font-extrabold text-xl text-white flex items-center">
                <span className="text-blue-500">G</span>
                <span className="text-red-500">o</span>
                <span className="text-yellow-500">o</span>
                <span className="text-blue-500">g</span>
                <span className="text-green-500">l</span>
                <span className="text-red-500">e</span>
              </span>
              <span className="text-white/60 text-xs font-bold uppercase tracking-wider ml-1">Rating</span>
            </div>

            {/* Stars & Score */}
            <div className="flex flex-col items-center sm:items-start border-t sm:border-t-0 sm:border-l border-white/10 pt-4 sm:pt-0 sm:pl-6">
              <div className="flex items-center gap-1">
                <span className="text-white font-extrabold text-lg sm:text-xl font-sans">4.9</span>
                <div className="flex items-center gap-0.5 ml-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                  ))}
                </div>
              </div>
              <p className="text-[10px] text-white/50 font-bold uppercase tracking-wider mt-0.5">Based on 350+ verified reviews</p>
            </div>
          </a>
        </div>

        {/* Carousel Container */}
        <div className="max-w-3xl mx-auto relative px-4 sm:px-12">
          
          {/* Testimonial card slider */}
          <div className="min-h-[350px] sm:min-h-[280px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-[#121212] p-6 sm:p-10 rounded-3xl border border-white/10 shadow-2xl text-left relative w-full flex flex-col justify-between"
              >
                <div>
                  {/* Google Reviewer Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-3">
                      {/* Avatar */}
                      <div className={`w-11 h-11 rounded-full ${testimonials[currentIndex].avatarBg} text-white flex items-center justify-center font-bold text-lg`}>
                        {testimonials[currentIndex].avatarText}
                      </div>
                      
                      {/* Reviewer Details */}
                      <div>
                        <h4 className="font-sans text-sm font-bold text-white leading-tight">
                          {testimonials[currentIndex].name}
                        </h4>
                        <p className="text-[10px] text-white/50 mt-0.5 font-sans">
                          Local Guide • {testimonials[currentIndex].reviewsCount} reviews
                        </p>
                      </div>
                    </div>

                    {/* Google Verification Badge */}
                    <div className="flex flex-col items-end">
                      <span className="font-serif font-extrabold text-xs text-white/60 flex items-center select-none">
                        <span className="text-blue-500">G</span>
                        <span className="text-red-500">o</span>
                        <span className="text-yellow-500">o</span>
                        <span className="text-blue-500">g</span>
                        <span className="text-green-500">l</span>
                        <span className="text-red-500">e</span>
                      </span>
                      <span className="text-[8px] text-green-500 uppercase tracking-widest font-bold mt-0.5">Verified Review</span>
                    </div>
                  </div>

                  {/* Stars & Event */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex gap-0.5">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 text-gold fill-gold" />
                      ))}
                    </div>
                    <span className="text-white/40 text-[10px] font-sans">•</span>
                    <span className="text-white/50 text-[10px] font-sans">{testimonials[currentIndex].time}</span>
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-sm sm:text-base text-white/80 leading-relaxed font-sans mb-6">
                    &ldquo;{testimonials[currentIndex].text}&rdquo;
                  </blockquote>
                </div>

                {/* Footer Event Details */}
                <div className="border-t border-white/5 pt-4">
                  <p className="text-[10px] uppercase tracking-wider text-gold font-bold">
                    Catering Service for: <span className="text-white/60 normal-case font-medium">{testimonials[currentIndex].event} in {testimonials[currentIndex].location}</span>
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full border border-white/10 hover:border-gold hover:bg-gold hover:text-white flex items-center justify-center text-white transition-all duration-300"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-xs font-semibold tracking-widest text-white/60">
              {currentIndex + 1} / {testimonials.length}
            </span>
            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full border border-white/10 hover:border-gold hover:bg-gold hover:text-white flex items-center justify-center text-white transition-all duration-300"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
