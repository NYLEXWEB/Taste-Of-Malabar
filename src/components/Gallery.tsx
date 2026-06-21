"use client";

import { useState } from "react";
import Image from "next/image";
import { X, Eye } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
                className={`relative group rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl border border-neutral-200/80 bg-white ${
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
