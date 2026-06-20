"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaInstagram, FaHeart, FaRegHeart, FaRegComment, FaRegPaperPlane, FaRegBookmark } from "react-icons/fa";

const feedImages = [
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

export default function InstagramFeed() {
  const profileUrl = "https://www.instagram.com/taste_of_malabar_caterers/";
  
  const [likedPosts, setLikedPosts] = useState<Record<number, boolean>>({});

  const toggleLike = (id: number) => {
    setLikedPosts(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const visiblePosts = feedImages;

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
                  <a
                    href={profileUrl}
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
                    href={profileUrl}
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
                  <a
                    href={profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-left mt-1.5 px-1 text-xs leading-relaxed font-normal hover:opacity-90 transition-opacity duration-300"
                  >
                    <p className="text-neutral-700">
                      <span className="font-bold text-charcoal mr-1.5 inline-flex items-center gap-0.5">
                        <span>taste_of_malabar_caterers</span>
                        <svg className="w-3 h-3 text-blue-500 fill-current" viewBox="0 0 24 24">
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

        {/* Profile CTA panel */}
        <div className="mt-12 flex justify-center">
          <a
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest text-white bg-gold-gradient hover:scale-[1.02] active:scale-95 transition-all duration-300 shadow-md shadow-gold/15 cursor-pointer"
          >
            <span>Visit Instagram Profile</span>
            <FaInstagram className="w-4.5 h-4.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
