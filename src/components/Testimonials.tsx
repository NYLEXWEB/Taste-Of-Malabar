"use client";

import { useState } from "react";
import { Star, CheckCircle, ExternalLink, MessageCircle } from "lucide-react";
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
    avatarBg: "bg-rose-500",
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
    avatarBg: "bg-emerald-600",
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
    avatarBg: "bg-violet-600",
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
    avatarBg: "bg-amber-600",
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
  const [showAll, setShowAll] = useState(false);
  const mapsUrl = "https://share.google/asyZyIG5oKfZx7wnf";

  // Slice testimonials depending on expansion state
  const visibleTestimonials = showAll ? testimonials : testimonials.slice(0, 3);

  // Ratings distribution
  const ratingStats = [
    { stars: 5, percentage: 96 },
    { stars: 4, percentage: 4 },
    { stars: 3, percentage: 0 },
    { stars: 2, percentage: 0 },
    { stars: 1, percentage: 0 },
  ];

  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-cream relative overflow-hidden border-t border-gold/15">
      {/* Decorative background glows */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-gold/5 rounded-full filter blur-3xl -z-10" />
      <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-gold/5 rounded-full filter blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="font-serif italic text-gold text-2xl font-normal block mb-2">
            Social Proof
          </span>
          <span className="text-xs font-bold uppercase tracking-widest text-charcoal/40 mb-3 block">
            Google Reviews
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-charcoal mb-4">
            Words of Appreciation
          </h2>
          <div className="w-16 h-[2px] bg-gold mx-auto" />
        </div>

        {/* 2-Column Luxury Dashboard Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Premium Sticky Google Rating Scorecard Widget */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
            <div className="bg-white border border-neutral-200/60 p-6 rounded-3xl shadow-xl flex flex-col select-none relative overflow-hidden">
              {/* Google Brand Top Strip */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 via-red-500 to-yellow-500" />
              
              {/* Google Brand Header */}
              <div className="flex items-center justify-between mb-6 pt-2">
                <div className="flex items-center gap-1">
                  <span className="font-serif font-extrabold text-xl text-charcoal flex items-center tracking-tight">
                    <span className="text-blue-500">G</span>
                    <span className="text-red-500">o</span>
                    <span className="text-yellow-500">o</span>
                    <span className="text-blue-500">g</span>
                    <span className="text-green-500">l</span>
                    <span className="text-red-500">e</span>
                  </span>
                  <span className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider ml-1">Reviews</span>
                </div>
                <div className="flex items-center gap-1 bg-green-50 text-green-700 px-2.5 py-1 rounded-full text-[9px] font-bold border border-green-200/50">
                  <CheckCircle className="w-2.5 h-2.5 fill-current text-green-600" />
                  <span>Verified Business</span>
                </div>
              </div>

              {/* Big Score Block */}
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-5xl font-extrabold text-charcoal tracking-tighter">4.9</span>
                <span className="text-sm font-bold text-neutral-400">/ 5.0</span>
              </div>

              {/* Gold Star Bar */}
              <div className="flex items-center gap-1.5 mb-2">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                  ))}
                </div>
                <span className="text-xs text-neutral-500 font-semibold">(350+ reviews)</span>
              </div>

              {/* Divider */}
              <div className="h-[1px] bg-neutral-100 my-4" />

              {/* Star Rating Distribution Bars */}
              <div className="space-y-2 mb-6">
                {ratingStats.map((stat, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-xs">
                    <span className="w-3 text-right font-semibold text-neutral-500">{stat.stars}</span>
                    <Star className="w-3.5 h-3.5 text-gold fill-gold flex-shrink-0" />
                    {/* Progress Bar Track */}
                    <div className="flex-1 h-2 bg-neutral-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gold rounded-full transition-all duration-1000"
                        style={{ width: `${stat.percentage}%` }}
                      />
                    </div>
                    <span className="w-8 text-right font-medium text-neutral-400">{stat.percentage}%</span>
                  </div>
                ))}
              </div>

              {/* Call-to-action Button */}
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl text-[10px] font-bold uppercase tracking-widest text-white bg-gold-gradient hover:scale-[1.02] active:scale-95 transition-all duration-300 shadow-md shadow-gold/15 cursor-pointer"
              >
                <span>Write a Review on Google</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Quick trust metrics badge stack */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white/60 border border-neutral-200/50 p-4 rounded-2xl text-center">
                <span className="block text-lg font-bold text-gold">100%</span>
                <span className="text-[9px] uppercase tracking-wider font-semibold text-neutral-400">Genuine Guests</span>
              </div>
              <div className="bg-white/60 border border-neutral-200/50 p-4 rounded-2xl text-center">
                <span className="block text-lg font-bold text-gold">4.9 ★</span>
                <span className="text-[9px] uppercase tracking-wider font-semibold text-neutral-400">Average Rating</span>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Review Grid (alternating backgrounds & layout animations) */}
          <div className="lg:col-span-8 space-y-4">
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <AnimatePresence>
                {visibleTestimonials.map((item, idx) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.35, delay: idx * 0.05 }}
                    className="bg-white border border-neutral-200/60 p-5 rounded-3xl shadow-sm hover:shadow-md hover:border-gold/30 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      {/* Review Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          {/* Avatar Circle */}
                          <div className={`w-9 h-9 rounded-full ${item.avatarBg} text-white flex items-center justify-center font-bold text-sm shadow-sm select-none`}>
                            {item.avatarText}
                          </div>
                          {/* User info */}
                          <div>
                            <h4 className="text-xs font-bold text-charcoal tracking-wide leading-tight">{item.name}</h4>
                            <p className="text-[9px] text-neutral-400 mt-0.5">Local Guide • {item.reviewsCount} reviews</p>
                          </div>
                        </div>

                        {/* Google Review Badge */}
                        <div className="flex flex-col items-end leading-none">
                          <span className="font-serif font-extrabold text-[10px] text-charcoal/50 flex items-center select-none">
                            <span className="text-blue-500">G</span>
                            <span className="text-red-500">o</span>
                            <span className="text-yellow-500">o</span>
                            <span className="text-blue-500">g</span>
                            <span className="text-green-500">l</span>
                            <span className="text-red-500">e</span>
                          </span>
                        </div>
                      </div>

                      {/* Ratings stars */}
                      <div className="flex items-center gap-1.5 mb-3">
                        <div className="flex gap-0.5">
                          {[...Array(item.rating)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 text-gold fill-gold" />
                          ))}
                        </div>
                        <span className="text-[9px] text-neutral-450">{item.time}</span>
                      </div>

                      {/* Review Paragraph */}
                      <p className="text-xs text-neutral-600 leading-relaxed italic mb-4 font-normal">
                        &ldquo;{item.text}&rdquo;
                      </p>
                    </div>

                    {/* Verified Label */}
                    <div className="border-t border-neutral-100 pt-3 flex items-center justify-between">
                      <span className="text-[9px] uppercase tracking-wider text-gold font-bold">
                        {item.event}
                      </span>
                      <span className="text-[9px] font-semibold text-neutral-450">
                        {item.location}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* Read More button */}
            <div className="text-center pt-4">
              <button
                onClick={() => setShowAll(!showAll)}
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-charcoal border border-neutral-300 hover:border-gold hover:text-gold transition-all duration-300 cursor-pointer"
              >
                {showAll ? "Show Less Reviews" : "Read More Google Reviews"}
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
