"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { X, Eye } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FaInstagram, FaYoutube } from "react-icons/fa";

const galleryItems = [
  {
    id: 1,
    title: "Exquisite Guest Service - Wedding Catering in Kannur",
    category: "live",
    src: "/gallery/wedding-catering-services-kannur-kerala.jpg",
    size: "large",
  },
  {
    id: 2,
    title: "Live Buffet Stations - Top Catering Services Kannur",
    category: "live",
    src: "/gallery/best-wedding-caterers-kerala.jpg",
    size: "normal",
  },
  {
    id: 3,
    title: "Grand Banquet Hall Setup - Best Event Management Company in Kannur",
    category: "setup",
    src: "/gallery/luxury-wedding-stage-decoration-kannur.jpg",
    size: "large",
  },
  {
    id: 4,
    title: "Gourmet Salad & Appetizer Display - Malabar Catering Services",
    category: "food",
    src: "/gallery/traditional-malabar-food-catering.jpg",
    size: "normal",
  },
  {
    id: 5,
    title: "Premium Hot Buffet Presentation - Best Wedding Caterers Kerala",
    category: "setup",
    src: "/gallery/premium-buffet-catering-services-kerala.jpg",
    size: "normal",
  },
  {
    id: 6,
    title: "Interactive Chocolate Fountain - Kids Birthday Party Catering Kannur",
    category: "live",
    src: "/gallery/live-counter-chocolate-fountain-kannur.jpg",
    size: "large",
  },
  {
    id: 7,
    title: "Traditional Kerala Sadya Feast - Best Food Catering Service Near Me",
    category: "food",
    src: "/gallery/traditional-kerala-sadya-feast.jpg",
    size: "normal",
  },
  {
    id: 8,
    title: "Elegant Crystal & Gold Buffet - Luxury Wedding Catering Kerala",
    category: "setup",
    src: "/gallery/best-caterers-in-kannur-buffet.jpg",
    size: "large",
  },
  {
    id: 9,
    title: "Professional Buffet Catering - Wedding Event Management Kannur",
    category: "live",
    src: "/gallery/event-management-company-kannur.jpg",
    size: "normal",
  },
  {
    id: 10,
    title: "Royal Banquet Display - Wedding Stage Decoration Kerala",
    category: "setup",
    src: "/gallery/royal-banquet-catering-setup-kerala.jpg",
    size: "normal",
  },
  {
    id: 11,
    title: "Traditional Live Chaat Counter - Engagement Event Management Kannur",
    category: "live",
    src: "/gallery/live-pani-puri-chaat-counter-kannur.jpg",
    size: "large",
  },
  {
    id: 12,
    title: "Interactive Guest Dining - Affordable Catering Services Kannur",
    category: "live",
    src: "/gallery/interactive-wedding-buffet-dining.jpg",
    size: "normal",
  },
  {
    id: 13,
    title: "Grand Buffet Layout - Corporate Catering Services Kannur",
    category: "setup",
    src: "/gallery/corporate-catering-services-kannur.jpg",
    size: "normal",
  },
  {
    id: 14,
    title: "Professional Catering Crew - Taste of Malabar Caterers Kannur",
    category: "setup",
    src: "/gallery/taste-of-malabar-catering-team-kannur.jpg",
    size: "normal",
  },
  {
    id: 15,
    title: "Corporate Event Catering - Event Planners Kannur",
    category: "setup",
    src: "/gallery/corporate-event-management-kannur.jpg",
    size: "normal",
  },
  {
    id: 16,
    title: "VIP Guest Interactions - Wedding Organizers Kannur",
    category: "live",
    src: "/gallery/wedding-reception-catering-kerala.jpg",
    size: "normal",
  },
  {
    id: 17,
    title: "Outdoor Event Catering - Outdoor Catering Services Kerala",
    category: "live",
    src: "/gallery/outdoor-catering-services-kerala.jpg",
    size: "large",
  },
  {
    id: 18,
    title: "Special Suspended Biryani Counter - Biriyani Catering Kannur",
    category: "live",
    src: "/gallery/dum-biriyani-catering-kannur.jpg",
    size: "normal",
  },
  {
    id: 19,
    title: "Fresh Cold Cuts & Salads - Traditional Malabar Food Catering",
    category: "food",
    src: "/gallery/gourmet-salads-caterers-kannur.jpg",
    size: "normal",
  },
  {
    id: 20,
    title: "VIP Guest Tasting & Feedback - Taste of Malabar Caterers",
    category: "press",
    src: "/gallery/vip-guest-tasting-malabar-caterers.jpg",
    size: "normal",
  },
  {
    id: 21,
    title: "VIP Dining Experience - Premium Event Catering Kannur",
    category: "press",
    src: "/gallery/group-dining-wedding-catering-kannur.jpg",
    size: "normal",
  },
  {
    id: 22,
    title: "VIP Gathering & Event Success - Taste of Malabar",
    category: "press",
    src: "/gallery/vip-political-leader-catering-event-kerala.jpg",
    size: "normal",
  },
  {
    id: 23,
    title: "Press Feature: 'Ummerkka's Feast Banquet' - Malayalam News",
    category: "press",
    src: "/gallery/taste-of-malabar-caterers-newspaper-clipping-1.jpg",
    size: "large",
  },
  {
    id: 24,
    title: "Media Feature: 'Ummer & Team Bringing Malabar Culinary Fame' - Malayalam News",
    category: "press",
    src: "/gallery/taste-of-malabar-caterers-newspaper-clipping-2.jpg",
    size: "large",
  },
];


const categories = [
  { id: "all", name: "All Work" },
  { id: "food", name: "Culinary Highlights" },
  { id: "setup", name: "Buffet & Setup" },
  { id: "live", name: "Live Counters" },
  { id: "press", name: "Press & VIPs" },
];

export default function Gallery() {
  const [filter, setFilter] = useState("all");
  const [selectedItem, setSelectedItem] = useState<typeof galleryItems[0] | null>(null);

  const filteredItems = filter === "all"
    ? galleryItems
    : galleryItems.filter((item) => item.category === filter);

  const row1ScrollRef = useRef<HTMLDivElement>(null);
  const row2ScrollRef = useRef<HTMLDivElement>(null);
  const isInteracting = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let animationFrameId: number;
    let lastTime = performance.now();
    const speed = 0.45; // pixels per frame at 60fps

    const timer = setTimeout(() => {
      const el1 = row1ScrollRef.current;
      if (el1) {
        el1.scrollLeft = el1.scrollWidth / 2;
      }
    }, 100);

    const scroll = (time: number) => {
      const delta = time - lastTime;
      const step = speed * (delta / 16.67);

      // Row 1: scrolls to the right (contents move right -> scrollLeft decreases)
      const el1 = row1ScrollRef.current;
      if (el1 && !isInteracting.current) {
        el1.scrollLeft -= step;
        const maxScroll = el1.scrollWidth / 2;
        if (el1.scrollLeft <= 0) {
          el1.scrollLeft = maxScroll;
        }
      }

      // Row 2: scrolls to the left (contents move left -> scrollLeft increases)
      const el2 = row2ScrollRef.current;
      if (el2 && !isInteracting.current) {
        el2.scrollLeft += step;
        const maxScroll = el2.scrollWidth / 2;
        if (el2.scrollLeft >= maxScroll) {
          el2.scrollLeft = 0;
        }
      }

      lastTime = time;
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleInteractionStart = () => {
    isInteracting.current = true;
  };

  const handleInteractionEnd = () => {
    setTimeout(() => {
      isInteracting.current = false;
    }, 1500);
  };

  const row1Items = filteredItems.filter((_, idx) => idx % 2 === 0);
  const row2Items = filteredItems.filter((_, idx) => idx % 2 !== 0);

  const marqueeRow1 = [...row1Items, ...row1Items];
  const marqueeRow2 = [...row2Items, ...row2Items];

  return (
    <section id="gallery" className="py-16 lg:py-24 bg-cream-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-gold mb-3 block">
            Visual Portfolio
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-charcoal mb-4">
            Our Gallery of Excellence
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
          <p className="text-base text-neutral-600">
            A glimpse into the visual artistry and presentation standards we maintain. Explore our culinary masterpieces and event setups.
          </p>
        </div>


        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                filter === cat.id
                  ? "bg-gold text-white shadow-md shadow-gold/20"
                  : "bg-white text-charcoal/70 border border-neutral-200 hover:bg-cream hover:text-charcoal"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Dual Marquee Slider - All Screens */}
        <div className="w-full space-y-6 md:space-y-8 overflow-hidden py-2">
          {/* Row 1: Scrolling to the Right */}
          <div className="relative">
            <div
              ref={row1ScrollRef}
              onTouchStart={handleInteractionStart}
              onTouchEnd={handleInteractionEnd}
              onMouseDown={handleInteractionStart}
              onMouseUp={handleInteractionEnd}
              onMouseLeave={handleInteractionEnd}
              className="flex gap-4 sm:gap-6 overflow-x-auto no-scrollbar py-2"
              style={{ scrollBehavior: "auto" }}
            >
              {marqueeRow1.map((item, idx) => (
                <div
                  key={`row1-${item.id}-${idx}`}
                  onClick={() => setSelectedItem(item)}
                  className="relative w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] md:w-[260px] md:h-[260px] shrink-0 rounded-3xl overflow-hidden border border-neutral-200/80 shadow-md group cursor-pointer"
                >
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 180px, (max-width: 768px) 220px, 260px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  
                  {/* Charcoal/Gold Overlay */}
                  <div className="absolute inset-0 bg-charcoal/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 z-10" />
                  
                  {/* Floating Preview Eye Icon */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-gold-gradient text-white flex items-center justify-center scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 z-20 shadow-lg shadow-gold/30">
                    <Eye className="w-4.5 h-4.5" />
                  </div>

                  {/* Text Title */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 z-20 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 text-left">
                    <span className="text-[8px] sm:text-[9px] uppercase tracking-widest text-gold font-bold">
                      {categories.find((c) => c.id === item.category)?.name}
                    </span>
                    <h3 className="font-serif text-xs sm:text-sm font-bold text-white mt-0.5 truncate">
                      {item.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Scrolling to the Left */}
          <div className="relative">
            <div
              ref={row2ScrollRef}
              onTouchStart={handleInteractionStart}
              onTouchEnd={handleInteractionEnd}
              onMouseDown={handleInteractionStart}
              onMouseUp={handleInteractionEnd}
              onMouseLeave={handleInteractionEnd}
              className="flex gap-4 sm:gap-6 overflow-x-auto no-scrollbar py-2"
              style={{ scrollBehavior: "auto" }}
            >
              {marqueeRow2.map((item, idx) => (
                <div
                  key={`row2-${item.id}-${idx}`}
                  onClick={() => setSelectedItem(item)}
                  className="relative w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] md:w-[260px] md:h-[260px] shrink-0 rounded-3xl overflow-hidden border border-neutral-200/80 shadow-md group cursor-pointer"
                >
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 180px, (max-width: 768px) 220px, 260px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  
                  {/* Charcoal/Gold Overlay */}
                  <div className="absolute inset-0 bg-charcoal/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 z-10" />
                  
                  {/* Floating Preview Eye Icon */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-gold-gradient text-white flex items-center justify-center scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 z-20 shadow-lg shadow-gold/30">
                    <Eye className="w-4.5 h-4.5" />
                  </div>

                  {/* Text Title */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 z-20 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 text-left">
                    <span className="text-[8px] sm:text-[9px] uppercase tracking-widest text-gold font-bold">
                      {categories.find((c) => c.id === item.category)?.name}
                    </span>
                    <h3 className="font-serif text-xs sm:text-sm font-bold text-white mt-0.5 truncate">
                      {item.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Highlighted Watch Video Buttons */}
        <div className="bg-white/40 border border-gold/20 p-5 rounded-3xl max-w-2xl mx-auto mt-12 sm:mt-16 text-center shadow-lg backdrop-blur-sm">
          <span className="text-[10px] font-bold uppercase tracking-widest text-gold mb-2.5 block">
            🎥 Experience Our Culinary Journey
          </span>
          <p className="text-xs text-neutral-600 mb-4 max-w-md mx-auto">
            Watch our grand buffet setups, live catering counters, and guest smiles in action.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="https://www.instagram.com/taste_of_malabar_caterers/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-xs font-bold uppercase tracking-widest text-white bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] hover:scale-[1.02] active:scale-95 transition-all duration-300 shadow-md shadow-red-500/10 cursor-pointer"
            >
              <FaInstagram className="w-4 h-4" />
              <span>Watch Trending Reels on Instagram</span>
            </a>
            <a
              href="https://www.youtube.com/@TasteofMalabarCaterersKannur"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-xs font-bold uppercase tracking-widest text-white bg-gradient-to-r from-[#ff0000] to-[#cc0000] hover:scale-[1.02] active:scale-95 transition-all duration-300 shadow-md shadow-red-600/10 cursor-pointer"
            >
              <FaYoutube className="w-4 h-4" />
              <span>Watch Feast Vlogs on YouTube</span>
            </a>
          </div>
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/90 backdrop-blur-sm"
              onClick={() => setSelectedItem(null)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="relative max-w-4xl w-full aspect-[4/3] rounded-3xl overflow-hidden border border-gold/30 shadow-2xl bg-charcoal"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={selectedItem.src}
                  alt={selectedItem.title}
                  fill
                  className="object-cover object-center"
                />
                
                {/* Close Button */}
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-charcoal/80 text-white hover:bg-gold hover:text-white transition-colors duration-200"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Footer details */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-charcoal/90 via-charcoal/60 to-transparent">
                  <span className="text-xs uppercase tracking-widest text-gold font-semibold">
                    {categories.find((c) => c.id === selectedItem.category)?.name}
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-white mt-1">
                    {selectedItem.title}
                  </h3>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
