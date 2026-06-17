"use client";

import { useState } from "react";
import Image from "next/image";
import { X, Eye } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const galleryItems = [
  {
    id: 1,
    title: "Wedding Catering Setup",
    category: "setup",
    src: "/hero_catering.png",
    size: "large",
  },
  {
    id: 2,
    title: "Food Presentation",
    category: "food",
    src: "/about_catering.png",
    size: "normal",
  },
  {
    id: 3,
    title: "Interactive Live Counters",
    category: "live",
    src: "/live_counter.png",
    size: "normal",
  },
  {
    id: 4,
    title: "Signature Malabar Biryani",
    category: "food",
    src: "/biryani.png",
    size: "large",
  },
  {
    id: 5,
    title: "Traditional Kerala Sadya",
    category: "food",
    src: "/sadya.png",
    size: "normal",
  },
  {
    id: 6,
    title: "Gourmet Seafood Platter",
    category: "food",
    src: "/seafood.png",
    size: "normal",
  },
];

const categories = [
  { id: "all", name: "All Work" },
  { id: "food", name: "Culinary Highlights" },
  { id: "setup", name: "Buffet & Setup" },
  { id: "live", name: "Live Counters" },
];

export default function Gallery() {
  const [filter, setFilter] = useState("all");
  const [selectedItem, setSelectedItem] = useState<typeof galleryItems[0] | null>(null);

  const filteredItems = filter === "all"
    ? galleryItems
    : galleryItems.filter((item) => item.category === filter);

  return (
    <section id="gallery" className="py-24 lg:py-36 bg-[#0F0F0F] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-gold mb-3 block">
            Visual Portfolio
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Our Gallery of Excellence
          </h2>
          <div className="w-16 h-[2px] bg-gold mx-auto mb-6" />
          <p className="text-base text-white/70">
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
                  : "bg-white/5 text-white/70 border border-white/10 hover:bg-white/10 hover:text-white"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[280px]"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className={`relative group rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl border border-white/5 bg-[#121212] ${
                  item.size === "large" ? "md:row-span-2 md:col-span-1" : ""
                }`}
                onClick={() => setSelectedItem(item)}
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                
                {/* Gold Overlay */}
                <div className="absolute inset-0 bg-charcoal/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 z-10" />
                
                {/* Floating Preview Eye Icon */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gold-gradient text-white flex items-center justify-center scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 z-20 shadow-lg shadow-gold/30">
                  <Eye className="w-5 h-5" />
                </div>

                {/* Text Title */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-[9px] uppercase tracking-widest text-gold font-bold">
                    {categories.find((c) => c.id === item.category)?.name}
                  </span>
                  <h3 className="font-serif text-base font-bold text-white mt-1">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

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
