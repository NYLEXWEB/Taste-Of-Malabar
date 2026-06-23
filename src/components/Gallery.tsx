"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { X, Eye } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FaInstagram, FaYoutube, FaHeart, FaRegHeart, FaRegComment, FaRegPaperPlane, FaRegBookmark } from "react-icons/fa";

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

const instagramFeedItems = [
  {
    id: 1,
    src: "/instagram/1.jpg",
    likes: "1240",
    caption: "Deeply honored and humbled to receive this recognition from Team Thanal. At Taste of Malabar Catering Service, our core philosophy extends beyond serving great food—it's about supporting and uplifting our community. Knowing that our contributions have played a part in the growth and success of these incredible students means the world to us.",
    tags: "",
    location: "Thanal Vocational Rehabilitation",
    date: "4 days ago",
    rotation: "rotate-1 hover:rotate-0"
  },
  {
    id: 2,
    src: "/instagram/2.jpg",
    likes: "2830",
    caption: "പ്രതിപക്ഷ നേതാവ് വി.ഡി. സതീശൻ്റെ ഹൃദയം നിറഞ്ഞ അഭിനന്ദനങ്ങൾ. Taste of Malabarയുടെ ഫുഡ്‌ ആസ്വദിച്ച് അഭിനന്ദിച്ച നിമിഷം എന്നും ഹൃദയത്തിൽ ❤️",
    tags: "#kannurwedding #cateringservicekannur",
    location: "Kannur, Kerala",
    date: "19 May",
    rotation: "-rotate-2 hover:rotate-0"
  },
  {
    id: 3,
    src: "/instagram/3.jpg",
    likes: "1560",
    caption: "🥗 The Salad Counter – A Crowd Favourite...",
    tags: "#saladcounter #weddingfeast #malabarcatering",
    location: "Kannur, Kerala",
    date: "7 March",
    rotation: "rotate-2 hover:rotate-0"
  }
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

  const instagramScrollRef = useRef<HTMLDivElement>(null);
  const isInteractingInstagram = useRef(false);
  const [likedPosts, setLikedPosts] = useState<Record<number, boolean>>({});

  const toggleLike = (id: number) => {
    setLikedPosts(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  useEffect(() => {
    if (typeof window === "undefined") return;
    
    let animationFrameId: number;
    let lastTime = performance.now();
    const speed = 0.45; // pixels per frame at 60fps

    const scroll = (time: number) => {
      const el = instagramScrollRef.current;
      if (el && !isInteractingInstagram.current) {
        const delta = time - lastTime;
        const step = speed * (delta / 16.67);
        el.scrollLeft += step;

        const maxScroll = el.scrollWidth / 2;
        if (el.scrollLeft >= maxScroll) {
          el.scrollLeft = 0;
        }
      }
      lastTime = time;
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const handleInstagramInteractionStart = () => {
    isInteractingInstagram.current = true;
  };

  const handleInstagramInteractionEnd = () => {
    setTimeout(() => {
      isInteractingInstagram.current = false;
    }, 1500);
  };

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
    <section id="gallery" className="py-10 lg:py-14 bg-cream-dark relative">
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

        {/* Highlighted Watch Video Card */}
        <div className="max-w-2xl mx-auto mt-12 sm:mt-16 p-[1.5px] rounded-[2rem] bg-gradient-to-tr from-gold/20 via-gold/50 to-gold/20 shadow-xl shadow-gold/5 select-none">
          <div className="bg-charcoal p-6 sm:p-8 rounded-[1.9rem] text-center">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-6 tracking-wide">
              Watch Our Videos
            </h3>
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
        </div>

        {/* Instagram Posts (No Heading, integrated directly under Watch Our Videos) */}
        <div className="mt-16 sm:mt-20">
          
          {/* Desktop Grid Layout */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {instagramFeedItems.map((post) => {
              const isLiked = !!likedPosts[post.id];
              
              return (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className={`bg-white border border-neutral-200/50 p-3.5 rounded-3xl shadow-lg transition-all duration-500 ease-out transform ${post.rotation} hover:scale-[1.03] hover:shadow-2xl hover:z-10 flex flex-col justify-between`}
                >
                  <div>
                    {/* Post Header */}
                    <a
                      href="https://www.instagram.com/taste_of_malabar_caterers/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between mb-3 px-1 hover:opacity-85 transition-opacity duration-300"
                    >
                      <div className="flex items-center gap-2.5">
                        {/* Brand Logo Avatar */}
                        <div className="relative w-8 h-8 rounded-full overflow-hidden border border-gold/20 flex items-center justify-center bg-white">
                          <Image
                            src="/logo.png"
                            alt="Taste of Malabar logo"
                            width={24}
                            height={24}
                            className="object-contain"
                          />
                        </div>
                        
                        {/* Name & Place */}
                        <div className="text-left">
                          <h4 className="text-[11px] font-bold text-charcoal leading-none flex items-center gap-1">
                            <span>taste_of_malabar_caterers</span>
                            <svg className="w-3.5 h-3.5 text-blue-500 fill-current flex-shrink-0" viewBox="0 0 24 24">
                              <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                            </svg>
                          </h4>
                          <span className="text-[9px] text-neutral-400 font-medium">
                            {post.location}
                          </span>
                        </div>
                      </div>

                      {/* Instagram logo tag */}
                      <FaInstagram className="text-neutral-300 w-4 h-4" />
                    </a>

                    {/* Post Image Container */}
                    <a
                      href="https://www.instagram.com/taste_of_malabar_caterers/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block relative aspect-square w-full rounded-2xl overflow-hidden shadow-inner border border-neutral-100 bg-neutral-50 group cursor-pointer"
                    >
                      <Image
                        src={post.src}
                        alt={post.caption}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </a>

                    {/* Action Icons Panel */}
                    <div className="flex items-center justify-between mt-3 px-1">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => toggleLike(post.id)}
                          className={`transition-transform active:scale-125 duration-150 cursor-pointer ${
                            isLiked ? "text-red-500 scale-110" : "text-neutral-700 hover:text-red-500"
                          }`}
                        >
                          {isLiked ? <FaHeart className="w-5 h-5 fill-current" /> : <FaRegHeart className="w-5 h-5" />}
                        </button>
                        <a href="https://www.instagram.com/taste_of_malabar_caterers/" target="_blank" rel="noopener noreferrer" className="text-neutral-700 hover:text-gold transition-colors">
                          <FaRegComment className="w-5 h-5" />
                        </a>
                        <a href="https://www.instagram.com/taste_of_malabar_caterers/" target="_blank" rel="noopener noreferrer" className="text-neutral-700 hover:text-gold transition-colors">
                          <FaRegPaperPlane className="w-4.5 h-4.5" />
                        </a>
                      </div>
                      <button className="text-neutral-700 hover:text-gold transition-colors">
                        <FaRegBookmark className="w-4.5 h-4.5" />
                      </button>
                    </div>

                    {/* Likes Count */}
                    <div className="text-left mt-2.5 px-1">
                      <span className="text-xs font-bold text-charcoal">
                        {isLiked ? parseInt(post.likes) + 1 : post.likes} likes
                      </span>
                    </div>

                    {/* Caption & Tags */}
                    <a
                      href="https://www.instagram.com/taste_of_malabar_caterers/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-left mt-1.5 px-1 text-xs leading-relaxed font-normal hover:opacity-90 transition-opacity duration-300"
                    >
                      <p className="text-neutral-750">
                        <span className="font-bold text-charcoal mr-1.5 inline-flex items-center gap-0.5">
                          <span>taste_of_malabar_caterers</span>
                          <svg className="w-3.5 h-3.5 text-blue-500 fill-current" viewBox="0 0 24 24">
                            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                          </svg>
                        </span>
                        {post.caption}
                      </p>
                      {post.tags && (
                        <span className="text-gold font-medium block mt-1">
                          {post.tags}
                        </span>
                      )}
                    </a>
                  </div>

                  {/* Date stamp */}
                  <div className="text-left mt-3 pt-3 border-t border-neutral-100 px-1">
                    <span className="text-[9px] uppercase tracking-wider text-neutral-400 font-medium">
                      {post.date}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile Auto-Scrolling Marquee Slider */}
          <div className="block md:hidden relative mt-8">
            <div
              ref={instagramScrollRef}
              onTouchStart={handleInstagramInteractionStart}
              onTouchEnd={handleInstagramInteractionEnd}
              onMouseDown={handleInstagramInteractionStart}
              onMouseUp={handleInstagramInteractionEnd}
              onMouseLeave={handleInstagramInteractionEnd}
              className="flex gap-4 overflow-x-auto no-scrollbar py-2"
              style={{ scrollBehavior: "auto" }}
            >
              {[...instagramFeedItems, ...instagramFeedItems].map((post, idx) => {
                const isLiked = !!likedPosts[post.id];
                
                return (
                  <div
                    key={`${post.id}-marquee-${idx}`}
                    className="w-[280px] shrink-0 bg-white border border-neutral-200/50 p-3.5 rounded-3xl shadow-md flex flex-col justify-between"
                  >
                    <div>
                      {/* Post Header */}
                      <a
                        href="https://www.instagram.com/taste_of_malabar_caterers/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between mb-3 px-1 hover:opacity-85 transition-opacity duration-300"
                      >
                        <div className="flex items-center gap-2.5">
                          <div className="relative w-8 h-8 rounded-full overflow-hidden border border-gold/20 flex items-center justify-center bg-white">
                            <Image
                              src="/logo.png"
                              alt="Taste of Malabar logo"
                              width={24}
                              height={24}
                              className="object-contain"
                            />
                          </div>
                          <div className="text-left">
                            <h4 className="text-[11px] font-bold text-charcoal leading-none flex items-center gap-1">
                              <span>taste_of_malabar_caterers</span>
                            </h4>
                            <span className="text-[9px] text-neutral-400 font-medium">
                              {post.location}
                            </span>
                          </div>
                        </div>
                        <FaInstagram className="text-neutral-300 w-4 h-4" />
                      </a>

                      {/* Post Image Container */}
                      <a
                        href="https://www.instagram.com/taste_of_malabar_caterers/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block relative aspect-square w-full rounded-2xl overflow-hidden shadow-inner border border-neutral-100 bg-neutral-50 group cursor-pointer"
                      >
                        <Image
                          src={post.src}
                          alt={post.caption}
                          fill
                          sizes="280px"
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </a>

                      {/* Action Icons Panel */}
                      <div className="flex items-center justify-between mt-3 px-1">
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => toggleLike(post.id)}
                            className={`transition-transform active:scale-125 duration-150 cursor-pointer ${
                              isLiked ? "text-red-500 scale-110" : "text-neutral-700 hover:text-red-500"
                            }`}
                          >
                            {isLiked ? <FaHeart className="w-5 h-5 fill-current" /> : <FaRegHeart className="w-5 h-5" />}
                          </button>
                          <a href="https://www.instagram.com/taste_of_malabar_caterers/" target="_blank" rel="noopener noreferrer" className="text-neutral-700 hover:text-gold transition-colors">
                            <FaRegComment className="w-5 h-5" />
                          </a>
                          <a href="https://www.instagram.com/taste_of_malabar_caterers/" target="_blank" rel="noopener noreferrer" className="text-neutral-700 hover:text-gold transition-colors">
                            <FaRegPaperPlane className="w-4.5 h-4.5" />
                          </a>
                        </div>
                        <button className="text-neutral-700 hover:text-gold transition-colors">
                          <FaRegBookmark className="w-4.5 h-4.5" />
                        </button>
                      </div>

                      {/* Likes Count */}
                      <div className="text-left mt-2.5 px-1">
                        <span className="text-xs font-bold text-charcoal">
                          {isLiked ? parseInt(post.likes) + 1 : post.likes} likes
                        </span>
                      </div>

                      {/* Caption */}
                      <a
                        href="https://www.instagram.com/taste_of_malabar_caterers/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-left mt-1.5 px-1 text-xs leading-relaxed font-normal hover:opacity-90 transition-opacity duration-300"
                      >
                        <p className="text-neutral-750 line-clamp-3">
                          <span className="font-bold text-charcoal mr-1.5 inline-flex items-center gap-0.5">
                            <span>taste_of_malabar_caterers</span>
                          </span>
                          {post.caption}
                        </p>
                      </a>
                    </div>

                    {/* Date */}
                    <div className="text-left mt-3 pt-3 border-t border-neutral-100 px-1">
                      <span className="text-[9px] uppercase tracking-wider text-neutral-400 font-medium">
                        {post.date}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
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
