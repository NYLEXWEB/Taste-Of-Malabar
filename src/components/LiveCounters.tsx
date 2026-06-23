"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { Flame, CheckCircle2, Award, Zap } from "lucide-react";
import { motion } from "framer-motion";

const highlights = [
  {
    icon: Flame,
    title: "Live Food Stations",
    desc: "Interactive hot stations cooking food fresh in front of guests.",
  },
  {
    icon: Zap,
    title: "Interactive Guest Experience",
    desc: "A sensory spectacle where guests can watch and customize their plates.",
  },
  {
    icon: CheckCircle2,
    title: "Freshly Prepared Dishes",
    desc: "No pre-cooked food. Served piping hot directly from pan to plate.",
  },
  {
    icon: Award,
    title: "Professional Chefs",
    desc: "Led by specialist chefs masterfully crafting live delicacies.",
  },
];

export default function LiveCounters() {
  const mobileScrollRef = useRef<HTMLDivElement>(null);
  const isInteracting = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    
    let animationFrameId: number;
    let lastTime = performance.now();
    const speed = 0.45; // pixels per frame at 60fps

    const scroll = (time: number) => {
      const el = mobileScrollRef.current;
      if (el && !isInteracting.current) {
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

  const handleInteractionStart = () => {
    isInteracting.current = true;
  };

  const handleInteractionEnd = () => {
    setTimeout(() => {
      isInteracting.current = false;
    }, 1500);
  };

  return (
    <section id="live-counters" className="py-10 lg:py-12 bg-charcoal text-white relative overflow-hidden">
      {/* Subtle background gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full filter blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full filter blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Dark & Gold Text Info */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-gold mb-3 block">
              LIVE SHOWCASE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
              Live Food Stations
            </h2>
            <div className="w-16 h-[2px] bg-gold mb-8" />

            {/* Highlights Grid - Desktop/Tablet */}
            <div className="hidden sm:grid grid-cols-2 gap-6">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex flex-col space-y-2 bg-charcoal-light/60 p-5 rounded-xl border border-white/5 hover:border-gold/20 transition-colors duration-300">
                  <div className="w-9 h-9 rounded-lg bg-gold/10 flex items-center justify-center text-gold">
                    <item.icon className="w-5 h-5 stroke-[1.5]" />
                  </div>
                  <h3 className="font-serif text-sm font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-normal">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Highlights Slider - Mobile (Auto-scrolling) */}
            <div className="block sm:hidden relative mt-6">
              <div
                ref={mobileScrollRef}
                onTouchStart={handleInteractionStart}
                onTouchEnd={handleInteractionEnd}
                onMouseDown={handleInteractionStart}
                onMouseUp={handleInteractionEnd}
                onMouseLeave={handleInteractionEnd}
                className="flex gap-4 overflow-x-auto no-scrollbar py-2"
                style={{ scrollBehavior: "auto" }}
              >
                {[...highlights, ...highlights].map((item, idx) => (
                  <div 
                    key={idx} 
                    className="w-[240px] shrink-0 flex flex-col space-y-2 bg-charcoal-light/60 p-5 rounded-xl border border-white/5 hover:border-gold/20 transition-colors duration-300"
                  >
                    <div className="w-9 h-9 rounded-lg bg-gold/10 flex items-center justify-center text-gold">
                      <item.icon className="w-5 h-5 stroke-[1.5]" />
                    </div>
                    <h3 className="font-serif text-sm font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-400 leading-normal">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Live Counter Photography */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 relative flex items-center justify-center"
          >
            {/* Glowing gold border */}
            <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-gold via-gold/50 to-gold-dark opacity-30 blur-sm -z-10" />
            
            {/* Image Container */}
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-charcoal bg-charcoal-light">
              <Image
                src="/live couter.jpg"
                alt="Taste of Malabar Live Chef Grill Station"
                fill
                sizes="(max-width: 1024px) 100vw, 640px"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent" />
            </div>

            {/* Overlapping small stats card */}
            <div className="absolute -bottom-6 right-8 bg-gold-gradient text-white px-5 py-4 rounded-xl shadow-xl border border-gold/30 flex flex-col z-20">
              <span className="font-serif text-xl font-bold">15+ Live</span>
              <span className="text-[9px] uppercase tracking-wider text-white/95 font-semibold">Counter Concepts</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
