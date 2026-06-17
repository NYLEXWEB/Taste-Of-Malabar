"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Dr. Manoj Kumar",
    location: "Kozhikode",
    event: "Daughter's Wedding (1,500 Guests)",
    text: "Taste of Malabar did an incredible job catering for my daughter's wedding. The Thalassery Chicken Biriyani was legendary! The setup was exceptionally clean, and the stewards were polite, efficient, and well-groomed. Truly a luxury service.",
    rating: 5,
  },
  {
    id: 2,
    name: "Aiswarya Menon",
    location: "Kochi",
    event: "Premium Corporate Banquet (400 Guests)",
    text: "We hired them for our annual corporate meeting in Kochi. Excellent service, elegant buffet counters, and prompt execution. The live counter mocktails and fish pollichathu were absolute crowd favorites. They represent professional hospitality at its best.",
    rating: 5,
  },
  {
    id: 3,
    name: "Abdul Rasheed",
    location: "Kannur",
    event: "Family Nikah & Reception (2,000 Guests)",
    text: "Simply outstanding! Authentic Malabar flavors at their finest. The Muttamala and Neypathiri mutton roast tasted exactly like home-cooked heritage dishes. Their FSSAI certification and hygiene standards were highly visible in their neat setups.",
    rating: 5,
  },
  {
    id: 4,
    name: "Rajesh Gowda",
    location: "Mangalore",
    event: "Destination Wedding (800 Guests)",
    text: "They traveled from Kannur to Mangalore for our wedding. The mobile kitchen setup was incredibly impressive. The traditional Sadya served on banana leaves was impeccable. Every single guest praised the food quality and presentation.",
    rating: 5,
  },
  {
    id: 5,
    name: "Fathima Zahra",
    location: "Manjeri",
    event: "Birthday Celebration & Live Counters (250 Guests)",
    text: "Their live counters are a must-have! The live parotta and tandoori chicken stations kept our guests fully engaged and thoroughly satisfied. Extremely clean preparation, top-grade ingredients, and very friendly chefs.",
    rating: 5,
  },
  {
    id: 6,
    name: "Meera & Rahul",
    location: "Thrissur",
    event: "Wedding Reception (1,200 Guests)",
    text: "We wanted a custom menu mixing Malabar specialties and Central Kerala dishes. The menu planning they did was perfect. The desserts, especially the Elaneer pudding, were out of this world. Highly recommend their custom catering solutions.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-gold/5 rounded-full filter blur-3xl -z-10" />
      <div className="absolute bottom-1/3 right-10 w-80 h-80 bg-gold/5 rounded-full filter blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="text-xs font-bold uppercase tracking-widest text-gold mb-3 block">
            Client Reviews
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-charcoal mb-4">
            Words of Appreciation
          </h2>
          <div className="w-16 h-[2px] bg-gold mx-auto mb-6" />
          <p className="text-base text-charcoal/70">
            Read stories of exceptional dining experiences from our clients across Kerala and Karnataka.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="max-w-4xl mx-auto relative px-4 sm:px-12">
          
          {/* Quote mark decorator */}
          <div className="absolute -top-10 left-6 sm:left-12 text-gold/10 -z-10">
            <Quote className="w-32 h-32 transform -scale-x-100" />
          </div>

          {/* Testimonial card slider */}
          <div className="min-h-[350px] sm:min-h-[300px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-cream/20 p-8 sm:p-12 rounded-3xl border border-gold/15 shadow-sm text-center relative w-full"
              >
                {/* Stars */}
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-gold fill-gold" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="font-serif text-base sm:text-lg lg:text-xl italic text-charcoal/85 leading-relaxed mb-8">
                  "{testimonials[currentIndex].text}"
                </blockquote>

                {/* Author Info */}
                <div>
                  <h4 className="font-serif text-base font-bold text-charcoal">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-xs text-gold font-semibold uppercase tracking-wider mt-1">
                    {testimonials[currentIndex].location} — <span className="text-charcoal/60 lowercase italic">{testimonials[currentIndex].event}</span>
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full border border-gold/25 hover:border-gold hover:bg-gold hover:text-white flex items-center justify-center text-charcoal transition-all duration-300"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-xs font-semibold tracking-widest text-charcoal/60">
              {currentIndex + 1} / {testimonials.length}
            </span>
            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full border border-gold/25 hover:border-gold hover:bg-gold hover:text-white flex items-center justify-center text-charcoal transition-all duration-300"
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
