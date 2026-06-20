"use client";

import { useState } from "react";
import { Star, CheckCircle, ExternalLink, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Martina Matts",
    location: "Kannur",
    event: "Wedding Ceremony",
    text: "Dear Taste of Malabar Team, Especially Ummer, Nazilla, and team, Thank you so much for being a part of our special day! The food was absolutely delicious, and everything was so well prepared and beautifully served. Everyone who attended the wedding absolutely loved the food and couldn't stop talking about it! Your staff was incredibly warm, attentive, and professional, and the service was seamless throughout. Everything was handled with such care and efficiency, which truly made a difference and allowed us to enjoy every moment without any worry. We truly appreciate all your hard work, effort, and care in making everything perfect. It meant so much to us. May God bless you all abundantly. Lots of love, Martina and Pradeep",
    rating: 5,
    avatarText: "M",
    avatarBg: "bg-red-500",
    time: "2 months ago",
    reviewsCount: 4,
  },
  {
    id: 2,
    name: "Naeemudeen",
    location: "Kannur",
    event: "Wedding Catering",
    text: "We had an amazing experience with Taste of Malabar for our wedding catering. The food taste was absolutely excellent, every dish was flavorful, authentic, and truly memorable. The service was equally outstanding, with the team being professional, attentive, and well-organized throughout the event. What really stood out was their communication during the booking process very smooth, responsive, and transparent. They also offer beautiful customizations for the menu, tailoring everything perfectly to our preferences. Unlike many others, they don't push unnecessary items just to increase the cost, which we really appreciated. Instead, they genuinely guide you and even suggest the best menu based on the location and whether it's a lunch or dinner event. A special mention to some of the dishes, their Thalassery mutton biryani was absolutely delicious, the paal kappa with fish curry was rich and satisfying, and even the pumpkin halwa was a pleasant surprise. The shawaya they suggested turned out to be one of the best items on the menu! Honestly, everything they served was top notch. Highly recommend Taste of Malabar for anyone looking for quality food and honest, thoughtful service",
    rating: 5,
    avatarText: "N",
    avatarBg: "bg-blue-600",
    time: "a month ago",
    reviewsCount: 1,
  },
  {
    id: 3,
    name: "Anushka J prakash",
    location: "Kannur",
    event: "Wedding & Reception",
    text: "We are beyond grateful to the wonderful catering team for making our wedding and reception so memorable. The food was truly exceptional—every dish was rich in flavor, beautifully presented, and prepared with so much care. Our guests absolutely loved the spread and couldn't stop praising the taste and quality. What really made a difference was the team's professionalism and dedication. Everything was managed so smoothly, from service to coordination, ensuring every guest was well taken care of. The attention to detail and commitment to excellence was clearly seen throughout both events. A special thanks to Ummerkka, his daughter, and the entire team for their incredible effort and support. You didn't just serve food—you created a delightful experience that we and our guests will always remember. We highly recommend your catering service to anyone looking to make their special occasions truly extraordinary.",
    rating: 5,
    avatarText: "A",
    avatarBg: "bg-violet-600",
    time: "2 months ago",
    reviewsCount: 6,
  },
  {
    id: 4,
    name: "Neebu Abraham",
    location: "Nilambur",
    event: "Wedding Reception",
    text: "I booked Taste of Malabar Caterers & Event Management Group for my brother-in-law's wedding reception in Nilambur after seeing their Instagram reels. They are a Kannur-based catering team, and even though bringing a team from Kannur to Nilambur felt like a big decision, it honestly turned out to be one of the best choices we made. They visited the venue 2-3 months in advance to understand everything properly. Later, the chef and team came again for planning, which gave us a lot of confidence. Along with the wedding reception catering, they also handled a Malabar-style breakfast and a traditional Kerala lunch, and everything went very smoothly. From the beginning till the end of the event, tea, welcome drinks, food counters, and salad counters were always open. There was no shortage at any point, quality was maintained, and the service was quick and well managed. The salad counter, with many varieties that we don't usually see, became a big attraction among guests. The food tasted amazing. Items like Ney Pathal, Coin Porotta, Chicken Green Pepper, Chicken Kondattam, Beef Fry, Thalassery Beef Dum Biriyani, and Veg Fried Rice were especially praised by everyone. The entire Kannur catering team was well prepared, professional, and organised, which made the whole event completely tension-free for us. Almost every relative and guest personally came and told us how good the food and service were. Highly recommended Kannur-based taste of Malabar catering team for weddings and receptions.",
    rating: 5,
    avatarText: "N",
    avatarBg: "bg-emerald-600",
    time: "5 months ago",
    reviewsCount: 2,
  }
];

export default function Testimonials() {
  const [expandedCards, setExpandedCards] = useState<Record<number, boolean>>({});
  const mapsUrl = "https://share.google/asyZyIG5oKfZx7wnf";

  const toggleCard = (id: number) => {
    setExpandedCards(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const visibleTestimonials = testimonials;

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
          <div className="w-16 h-[2px] bg-gold/20 mx-auto relative overflow-hidden">
            <motion.div
              initial={{ left: "-100%" }}
              whileInView={{ left: "0%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="absolute inset-0 bg-gold"
            />
          </div>
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
                      <div className="text-xs text-neutral-600 leading-relaxed italic mb-4 font-normal">
                        <span>
                          &ldquo;
                          {expandedCards[item.id] || item.text.length <= 150
                            ? item.text
                            : `${item.text.slice(0, 150)}...`}
                          &rdquo;
                        </span>
                        {item.text.length > 150 && (
                          <button
                            onClick={() => toggleCard(item.id)}
                            className="text-gold font-bold ml-1.5 hover:underline cursor-pointer transition-all duration-300 inline-block focus:outline-none"
                          >
                            {expandedCards[item.id] ? "Read Less" : "Read More"}
                          </button>
                        )}
                      </div>
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
          </div>

        </div>
      </div>
    </section>
  );
}
