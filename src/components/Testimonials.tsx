"use client";

import { useState, useRef, useEffect } from "react";
import { Star, CheckCircle, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "SANDEEP M",
    location: "Kannur",
    event: "Wedding Catering",
    text: "We are truly grateful to the entire catering team for making our wedding day even more special and memorable. From the taste to the presentation, everything was simply outstanding. Every dish was prepared with such perfection and love that our guests are still talking about the food even after the wedding!\n\nWhat impressed us the most was not just the delicious food, but the dedication and professionalism of the whole team. They handled everything so smoothly, ensured every guest was served well, and maintained the highest standards throughout the event.\n\nFood is one of the important parts of any celebration, and you made sure it became one of the most talked-about highlights of our wedding. Seeing our friends and family enjoying the food so much truly made us happy.\n\nThank you for your hard work, attention to detail, and for going above and beyond to make our big day perfect. We highly recommend your team to anyone looking for exceptional catering for their special occasions. You didn't just serve food, you created a beautiful experience for all of us.\n\nThe man behind the scenes - Ummerkka 💖 He is a Gem 💎 💖",
    rating: 5,
    avatarText: "S",
    avatarBg: "bg-red-500",
    time: "3 months ago",
    reviewsCount: 2,
  },
  {
    id: 2,
    name: "adhil gaffaf kolakkadan",
    location: "Kannur",
    event: "Iftar Gathering",
    text: "I recently hosted an Iftar gathering at my home, and I chose Taste of Malabar Catering and Event Management for the food and service—and I couldn't be happier with my decision.\n\nFrom start to finish, everything was handled with great professionalism and care. The food was absolutely outstanding. Each dish was rich in authentic flavor, perfectly cooked, and beautifully presented. The variety they offered for Iftar was impressive—from delicious starters and snacks to fulfilling main courses and refreshing drinks. Every item tasted fresh and had that true homemade touch, which all my guests really appreciated. Thank you for making our Iftar so memorable.\n\nSpecial thanks to Chef Mahamud who led the team and make it perfect 🥰❤️",
    rating: 5,
    avatarText: "A",
    avatarBg: "bg-green-600",
    time: "3 months ago",
    reviewsCount: 5,
  },
  {
    id: 3,
    name: "sheethal krishna",
    location: "Kannur",
    event: "Wedding Reception",
    text: "We chose Taste of Malabar for our wedding reception on 26th January at Kanaka Beach House, and they did an excellent job. The food was delicious with authentic Malabar flavors, well prepared, and loved by all our guests. Everything was served fresh and on time.\n\nThe service was equally impressive—professional, well-organized, and very attentive throughout the event. The team handled everything smoothly, which made our day completely stress-free.\n\nThank you, Taste of Malabar, for contributing so much to our celebration. We received so many compliments about the food and service, and we wouldn't hesitate to recommend you for weddings or any special occasion.",
    rating: 5,
    avatarText: "S",
    avatarBg: "bg-pink-600",
    time: "4 months ago",
    reviewsCount: 5,
  },
  {
    id: 4,
    name: "Janardhanan M",
    location: "Kannur",
    event: "Wedding Reception",
    text: "Absolutely outstanding! Best decision we made.\nWe chose Taste of Malabar Caterers for my son's wedding reception, and they completely exceeded our expectations. When it comes to flavor, authenticity, and quality, they are truly unmatched. The presentation was neat, and the staff was polite and efficient.",
    rating: 5,
    avatarText: "J",
    avatarBg: "bg-blue-600",
    time: "a month ago",
    reviewsCount: 1,
  },
  {
    id: 5,
    name: "byjith vijayan",
    location: "Kannur",
    event: "Event Catering",
    text: "We are pleased with the catering service provided on 8th Feb 2026 at Exora Convention centre, Kannur. The food was fresh, hygienic, and well prepared. The team maintained high standards of cleanliness and timely service. Their professionalism and coordination were commendable. We appreciate their effort and look forward to continuing the service.",
    rating: 5,
    avatarText: "B",
    avatarBg: "bg-teal-600",
    time: "4 months ago",
    reviewsCount: 5,
  },
  {
    id: 6,
    name: "Akhila Mathew",
    location: "Kannur",
    event: "Private Function",
    text: "I recently experienced the food and service from Taste of Malabar Catering Service, and I must say it was excellent. The dishes were rich with authentic Malabar flavours, freshly prepared, and served hot. The menu had a nice variety—from traditional items to special signature dishes—which made it perfect for our function. The service team was polite, clean, and very well-organised. They managed everything smoothly without any delay. Guests especially appreciated the taste and presentation of the food. Overall, Taste of Malabar Catering Service is a great choice if you want tasty food, a good menu, and reliable service. Highly recommended! 👍✨",
    rating: 5,
    avatarText: "A",
    avatarBg: "bg-amber-600",
    time: "4 months ago",
    reviewsCount: 11,
  },
  {
    id: 7,
    name: "Kavya Santhosh",
    location: "Kannur",
    event: "Engagement Ceremony",
    text: "We chose Taste of Malabar for our engagement, and it turned out to be the best decision! The menu had a wide variety of options, and every single dish was exceptionally delicious. The team was extremely responsive and more than happy to accommodate all our requests. They truly went above and beyond to ensure we were stress-free on the day of the event. The service was excellent, and a special mention to Mr. Ummer, who personally took care of everything and ensured it all ran smoothly. All our guests absolutely loved the food and even enquired about the team behind it. Keep up the great work, Team Taste of Malabar!",
    rating: 5,
    avatarText: "K",
    avatarBg: "bg-purple-600",
    time: "4 months ago",
    reviewsCount: 18,
  },
  {
    id: 8,
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
    id: 9,
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
    id: 10,
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
    id: 11,
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
  const [showAllReviews, setShowAllReviews] = useState(false);
  const [selectedMobileReview, setSelectedMobileReview] = useState<typeof testimonials[0] | null>(null);
  const mapsUrl = "https://share.google/asyZyIG5oKfZx7wnf";

  const toggleCard = (id: number) => {
    setExpandedCards(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const visibleTestimonials = showAllReviews ? testimonials : testimonials.slice(0, 4);
  const testimonialsMarquee = [...testimonials, ...testimonials];

  const mobileScrollRef = useRef<HTMLDivElement>(null);
  const isInteracting = useRef(false);
  const touchStartX = useRef(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    
    let animationFrameId: number;

    const scroll = () => {
      const el = mobileScrollRef.current;
      if (el) {
        const maxScroll = el.scrollWidth / 2;
        const maxScrollable = el.scrollWidth - el.clientWidth;
        
        // Wrap scroll position seamlessly
        if (el.scrollLeft >= maxScroll) {
          el.scrollLeft -= maxScroll;
        } else if (el.scrollLeft >= maxScrollable - 1) {
          el.scrollLeft = 0;
        } else if (el.scrollLeft < 0) {
          el.scrollLeft += maxScroll;
        }

        // Apply auto-scroll if user is not actively dragging
        if (!isInteracting.current) {
          el.scrollLeft += 0.6;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const deltaX = Math.abs(e.touches[0].clientX - touchStartX.current);
    if (deltaX > 8) {
      isInteracting.current = true;
    }
  };

  const handleTouchEnd = () => {
    setTimeout(() => {
      isInteracting.current = false;
    }, 1500);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    touchStartX.current = e.clientX;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (e.buttons === 1) {
      const deltaX = Math.abs(e.clientX - touchStartX.current);
      if (deltaX > 8) {
        isInteracting.current = true;
      }
    }
  };

  const handleMouseUp = () => {
    setTimeout(() => {
      isInteracting.current = false;
    }, 1500);
  };

  // Ratings distribution
  const ratingStats = [
    { stars: 5, percentage: 98 },
    { stars: 4, percentage: 2 },
    { stars: 3, percentage: 0 },
    { stars: 2, percentage: 0 },
    { stars: 1, percentage: 0 },
  ];

  return (
    <section id="testimonials" className="py-10 lg:py-14 bg-cream relative overflow-hidden border-t border-gold/15">
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
                <span className="text-xs text-neutral-500 font-semibold">(380+ reviews)</span>
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

          {/* Right Column: Premium Review Grid */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Desktop Grid Layout */}
            <div className="hidden md:block space-y-6">
              <motion.div layout className="grid grid-cols-2 gap-4">
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
                              <p className="text-[9px] text-neutral-450 mt-0.5">Local Guide • {item.reviewsCount} reviews</p>
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
                        <div className="text-xs text-neutral-600 leading-relaxed italic mb-4 font-normal whitespace-pre-line">
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
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>

              {/* View More / View Less Button */}
              {testimonials.length > 4 && (
                <div className="flex justify-center pt-2">
                  <button
                    onClick={() => setShowAllReviews(!showAllReviews)}
                    className="flex items-center gap-2 px-6 py-3 rounded-full border border-gold/30 hover:border-gold bg-white text-gold font-bold text-xs uppercase tracking-widest transition-all duration-300 hover:bg-gold/5 cursor-pointer shadow-sm hover:shadow-md"
                  >
                    <span>{showAllReviews ? "View Less Reviews" : "View More Reviews"}</span>
                    {showAllReviews ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                </div>
              )}
            </div>

            {/* Mobile Auto-Scrolling Marquee Slider (Shows all reviews looping) */}
            <div className="block md:hidden relative">
              <div
                ref={mobileScrollRef}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                onTouchCancel={handleTouchEnd}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                className="flex gap-4 overflow-x-auto no-scrollbar py-2"
                style={{ scrollBehavior: "auto" }}
              >
                {testimonialsMarquee.map((item, idx) => (
                  <div
                    key={`${item.id}-marquee-${idx}`}
                    onClick={() => setSelectedMobileReview(item)}
                    className="w-[280px] shrink-0 bg-white border border-neutral-200/60 p-5 rounded-3xl shadow-sm flex flex-col justify-between cursor-pointer active:scale-95 transition-all duration-300"
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
                            <p className="text-[9px] text-neutral-450 mt-0.5">Local Guide • {item.reviewsCount} reviews</p>
                          </div>
                        </div>
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
                      <div className="text-xs text-neutral-600 leading-relaxed italic mb-2 font-normal whitespace-pre-line">
                        <span>
                          &ldquo;
                          {item.text.length <= 130
                            ? item.text
                            : `${item.text.slice(0, 130)}...`}
                          &rdquo;
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Mobile Detailed Review Modal */}
      <AnimatePresence>
        {selectedMobileReview && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:hidden">
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMobileReview(null)}
              className="absolute inset-0 bg-charcoal/60 backdrop-blur-sm"
            />
            
            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl p-6 border border-gold/20 overflow-hidden max-h-[80vh] flex flex-col z-10"
            >
              {/* Google Brand Top Strip */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 via-red-500 to-yellow-500" />
              
              {/* Close Button in top right */}
              <button
                onClick={() => setSelectedMobileReview(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-500 hover:text-charcoal hover:bg-neutral-200 transition-colors cursor-pointer"
              >
                ✕
              </button>

              {/* Reviewer Details */}
              <div className="flex items-center gap-3 mb-4 mt-2">
                <div className={`w-10 h-10 rounded-full ${selectedMobileReview.avatarBg} text-white flex items-center justify-center font-bold text-base shadow-sm select-none`}>
                  {selectedMobileReview.avatarText}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-charcoal leading-tight">{selectedMobileReview.name}</h4>
                  <p className="text-[10px] text-neutral-400 mt-0.5">Local Guide • {selectedMobileReview.reviewsCount} reviews</p>
                </div>
              </div>

              {/* Stars & Time */}
              <div className="flex items-center gap-1.5 mb-4 border-b border-neutral-100 pb-3">
                <div className="flex gap-0.5">
                  {[...Array(selectedMobileReview.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-gold fill-gold" />
                  ))}
                </div>
                <span className="text-[10px] text-neutral-500">{selectedMobileReview.time}</span>
                <span className="text-[10px] text-neutral-300">•</span>
                <span className="text-[10px] text-gold font-semibold uppercase tracking-wider">{selectedMobileReview.event}</span>
              </div>

              {/* Scrollable Full Text */}
              <div className="flex-1 overflow-y-auto pr-1 text-xs text-neutral-700 leading-relaxed italic whitespace-pre-line font-normal">
                &ldquo;{selectedMobileReview.text}&rdquo;
              </div>

              {/* Google Brand Footer */}
              <div className="flex items-center justify-between mt-6 pt-4 border-t border-neutral-100 text-[10px] text-neutral-400 font-semibold select-none">
                <span>Verified Google Review</span>
                <span className="font-serif font-extrabold text-[12px] text-charcoal/50 flex items-center">
                  <span className="text-blue-500">G</span>
                  <span className="text-red-500">o</span>
                  <span className="text-yellow-500">o</span>
                  <span className="text-blue-500">g</span>
                  <span className="text-green-500">l</span>
                  <span className="text-red-500">e</span>
                </span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
