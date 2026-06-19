"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaInstagram, FaHeart, FaRegHeart, FaRegComment, FaRegPaperPlane, FaRegBookmark } from "react-icons/fa";

const feedImages = [
  {
    id: 1,
    src: "/hero_catering.png",
    likes: "245",
    caption: "Setting up for a grand evening wedding reception. Elegant decor meets authentic Malabar cuisine. 🍽️✨",
    tags: "#tasteofmalabar #luxurycatering #kannur",
    location: "Kannur, Kerala",
    date: "1 day ago",
    rotation: "rotate-1 hover:rotate-0"
  },
  {
    id: 2,
    src: "/about_catering.png",
    likes: "189",
    caption: "The hands behind the magic. Our master chefs and professional stewards ready to deliver exceptional service. 👨‍🍳🔥",
    tags: "#teamwork #hospitality #culinaryexcellence",
    location: "Kochi, Kerala",
    date: "2 days ago",
    rotation: "-rotate-2 hover:rotate-0"
  },
  {
    id: 3,
    src: "/live_counter.png",
    likes: "312",
    caption: "Nothing beats the aroma of fresh appams and hot pathiris straight off the tawa! 🥞❤️",
    tags: "#livecounters #malabarspecialties #weddingfeast",
    location: "Calicut, Kerala",
    date: "3 days ago",
    rotation: "rotate-2 hover:rotate-0"
  },
  {
    id: 4,
    src: "/biryani.png",
    likes: "420",
    caption: "The legendary Thalassery Dum Biriyani. Cooked with premium Khaima rice, pure ghee, and rich native spices. 🍚✨",
    tags: "#dumbiriyani #malabarclassic #authentic",
    location: "Thalassery, Kerala",
    date: "4 days ago",
    rotation: "-rotate-1 hover:rotate-0"
  },
  {
    id: 5,
    src: "/sadya.png",
    likes: "298",
    caption: "A celebration of tradition. 24+ dishes served on fresh banana leaves with double payasam. 🍃 Classic Sadya at its finest.",
    tags: "#keralasadya #traditionalfeast",
    location: "Thrissur, Kerala",
    date: "5 days ago",
    rotation: "rotate-1 hover:rotate-0"
  },
  {
    id: 6,
    src: "/seafood.png",
    likes: "356",
    caption: "Fresh catch from the Malabar coast marinated in stone-ground masalas and grilled to perfection. 🐟🔥",
    tags: "#seafoodlove #coastalflavors",
    location: "Kannur, Kerala",
    date: "1 week ago",
    rotation: "-rotate-2 hover:rotate-0"
  }
];

export default function InstagramFeed() {
  const profileUrl = "https://www.instagram.com/taste_of_malabar_caterers?igsh=anphOXpvbTdxcmhu";
  
  // Track liked status locally for playful interaction
  const [likedPosts, setLikedPosts] = useState<Record<number, boolean>>({});
  const [showAll, setShowAll] = useState(false);

  const toggleLike = (id: number) => {
    setLikedPosts(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const visiblePosts = showAll ? feedImages : feedImages.slice(0, 3);

  return (
    <section id="instagram-feed" className="py-16 lg:py-20 bg-cream relative overflow-hidden border-t border-gold/15">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full filter blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="font-serif italic text-gold text-2xl font-normal">Social Showcase</span>
          </div>
          <span className="text-xs font-bold uppercase tracking-widest text-charcoal/40 mb-3 block">
            Follow Our Journey
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-charcoal mb-4">
            Taste of Malabar on Instagram
          </h2>
          <div className="w-16 h-[2px] bg-gold/20 mx-auto mb-4 relative overflow-hidden">
            <motion.div
              initial={{ left: "-100%" }}
              whileInView={{ left: "0%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="absolute inset-0 bg-gold"
            />
          </div>
          
          <a
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gold hover:text-charcoal transition-all duration-300"
          >
            <span>@taste_of_malabar_caterers</span>
            <span>→</span>
          </a>
        </div>

        {/* Dynamic Polaroids Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {visiblePosts.map((post) => {
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
                  <div className="flex items-center justify-between mb-3 px-1">
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
                        <h4 className="text-[11px] font-bold text-charcoal leading-none">
                          taste_of_malabar_caterers
                        </h4>
                        <span className="text-[9px] text-neutral-400 font-medium">
                          {post.location}
                        </span>
                      </div>
                    </div>

                    {/* Instagram logo tag */}
                    <FaInstagram className="text-neutral-300 w-4 h-4" />
                  </div>

                  {/* Post Image Container */}
                  <div className="relative aspect-square w-full rounded-2xl overflow-hidden shadow-inner border border-neutral-100 bg-neutral-50 group">
                    <Image
                      src={post.src}
                      alt={post.caption}
                      fill
                      className="object-cover"
                    />
                    
                    {/* Double Tap Playful animation layer overlay */}
                    <div 
                      onClick={() => toggleLike(post.id)}
                      className="absolute inset-0 bg-transparent cursor-pointer z-10"
                    />
                  </div>

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
                      <a href={profileUrl} target="_blank" rel="noopener noreferrer" className="text-neutral-700 hover:text-gold transition-colors">
                        <FaRegComment className="w-5 h-5" />
                      </a>
                      <a href={profileUrl} target="_blank" rel="noopener noreferrer" className="text-neutral-700 hover:text-gold transition-colors">
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
                  <div className="text-left mt-1.5 px-1 text-xs leading-relaxed font-normal">
                    <p className="text-neutral-700">
                      <span className="font-bold text-charcoal mr-1.5">taste_of_malabar_caterers</span>
                      {post.caption}
                    </p>
                    <span className="text-gold font-medium block mt-1">
                      {post.tags}
                    </span>
                  </div>
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

        {/* Toggle & Profile CTA panel */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-charcoal border border-neutral-350 hover:border-gold hover:text-gold transition-all duration-300 cursor-pointer shadow-sm bg-white"
          >
            {showAll ? "Show Less Posts" : "View More Posts"}
          </button>
          <a
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-white bg-gold-gradient hover:scale-[1.02] active:scale-95 transition-all duration-300 shadow-md shadow-gold/15 cursor-pointer"
          >
            <span>Visit Instagram Profile</span>
            <FaInstagram className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
