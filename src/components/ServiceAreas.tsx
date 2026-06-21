"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Truck } from "lucide-react";

const pins = [
  { name: "Kasaragod", label: "Kasaragod", top: 12, left: 18, align: "left-below", desc: "Specialty Muslim wedding catering, local Malabar biriyani, and outdoor setups." },
  { name: "Kannur & Thalassery", label: "Kannur & Thalassery", top: 30, left: 28, align: "left-below", desc: "Primary base. Complete wedding catering, stage decoration, and event planning." },
  { name: "Kozhikode", label: "Kozhikode", top: 52, left: 38, align: "left", desc: "Premium corporate catering, grand buffet layouts, and luxury wedding feasts." },
  { name: "Wayanad", label: "Wayanad", top: 46, left: 62, align: "right", desc: "Destination wedding planning, resort banquets, and traditional food service." },
  { name: "Payyanur & Taliparamba", label: "Payyanur & Taliparamba", top: 22, left: 22, align: "left", desc: "Traditional Kerala Sadya catering, live food counters, and birthday parties." },
  { name: "Mattannur & Iritty", label: "Mattannur & Iritty", top: 32, left: 45, align: "right", desc: "Hygienic housewarming catering and custom wedding reception food services." },
  { name: "Koothuparamba", label: "Koothuparamba", top: 38, left: 34, align: "left-below", desc: "Wedding stage decorations, lighting setups, and affordable catering packages." },
];

export default function ServiceAreas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activePin, setActivePin] = useState<number | null>(null);

  // Setup scroll listener for truck animations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Scroll transforms for the trucks along the road paths (clamped to range)
  const truck1X = useTransform(scrollYProgress, [0.15, 0.45], [18, 28], { clamp: true });
  const truck1Y = useTransform(scrollYProgress, [0.15, 0.45], [15, 30], { clamp: true });

  const truck2X = useTransform(scrollYProgress, [0.25, 0.55], [28, 62], { clamp: true });
  const truck2Y = useTransform(scrollYProgress, [0.25, 0.55], [30, 46], { clamp: true });

  const truck3X = useTransform(scrollYProgress, [0.35, 0.65], [62, 82], { clamp: true });
  const truck3Y = useTransform(scrollYProgress, [0.35, 0.65], [46, 35], { clamp: true });

  const truck4X = useTransform(scrollYProgress, [0.45, 0.75], [45, 48], { clamp: true });
  const truck4Y = useTransform(scrollYProgress, [0.45, 0.75], [72, 88], { clamp: true });

  // Convert coordinate numbers to CSS percent strings
  const truck1Left = useTransform(truck1X, (v) => `${v}%`);
  const truck1Top = useTransform(truck1Y, (v) => `${v}%`);

  const truck2Left = useTransform(truck2X, (v) => `${v}%`);
  const truck2Top = useTransform(truck2Y, (v) => `${v}%`);

  const truck3Left = useTransform(truck3X, (v) => `${v}%`);
  const truck3Top = useTransform(truck3Y, (v) => `${v}%`);

  const truck4Left = useTransform(truck4X, (v) => `${v}%`);
  const truck4Top = useTransform(truck4Y, (v) => `${v}%`);

  return (
    <section ref={containerRef} className="py-16 lg:py-20 bg-cream relative overflow-hidden">
      {/* Decorative background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#B07D4F05_1px,transparent_1px),linear-gradient(to_bottom,#B07D4F05_1px,transparent_1px)] bg-[size:4rem_4rem] -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full filter blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Map Details & Transport Info */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-gold mb-3 block">
              Our Coverage
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-charcoal mb-6 leading-tight">
              Kannur & Thalassery Based <br />
              <span className="text-gold">Serving All Over Kerala</span>
            </h2>
            <div className="w-16 h-[2px] bg-gold mb-6" />
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed mb-8">
              Based in Kannur & Thalassery, distance is never a barrier to exceptional taste. Taste of Malabar Caterers travels directly to your venue across Kerala & Karnataka—including Taliparamba, Payyanur, Mattannur, Iritty, Koothuparamba, Kasaragod, Kozhikode, and Wayanad. We are fully equipped with state-of-the-art mobile kitchen systems, temperature-controlled transit logistics, and a professional event management team.
            </p>

            {/* Transport Logistics Info Card */}
            <div className="bg-white p-6 rounded-2xl border border-neutral-200/80 space-y-4 shadow-sm">
              <h3 className="font-serif text-sm font-bold text-charcoal flex items-center gap-2">
                <Truck className="w-4 h-4 text-gold" />
                Mobile Kitchen & Cold-Chain Transit
              </h3>
              <p className="text-xs text-neutral-650 leading-relaxed">
                We transport all ingredients in modern, refrigerated food-grade containers. For long-distance events, our specialized mobile kitchen vans ensure all frying, baking, and live preparation are done right on-site for peak flavor and hygiene.
              </p>
            </div>

            {/* Interactive Core Hubs tags */}
            <div className="mt-8">
              <p className="text-xs font-bold uppercase tracking-wider text-charcoal/40 mb-3">Our Core Hubs</p>
              <div className="flex flex-wrap gap-2">
                {pins.map((pin, idx) => (
                  <button
                    key={idx}
                    onMouseEnter={() => setActivePin(idx)}
                    onMouseLeave={() => setActivePin(null)}
                    className={`text-xs px-3.5 py-2 rounded-full border transition-all duration-300 ${
                      activePin === idx
                        ? "bg-gold border-gold text-white shadow-md shadow-gold/20"
                        : "bg-cream-dark border-neutral-200 text-charcoal/80 hover:border-gold/30 hover:bg-cream"
                    }`}
                  >
                    {pin.name}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Vector Map Canvas */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="hidden lg:block lg:col-span-7"
          >
            <div className="aspect-[4/3] w-full relative bg-cream-dark rounded-3xl border border-neutral-200/80 p-4 sm:p-6 overflow-hidden select-none shadow-xl">
              
              {/* Responsive SVG Map Background (Coastline and road lines) */}
              <svg 
                viewBox="0 0 100 100" 
                className="absolute inset-0 w-full h-full pointer-events-none"
                preserveAspectRatio="none"
              >
                {/* Landmass area (colored a warmer tone than the sea background) */}
                <path
                  d="M 10,-5 C 13,5 15,10 18,15 C 22,22 25,26 28,30 C 32,36 35,42 38,48 C 41,56 43,64 45,72 C 47,80 47,84 48,88 C 49,92 50,96 52,105 L 105,105 L 105,-5 Z"
                  fill="#FFFFFF"
                  stroke="#E5E5E5"
                  strokeWidth="1"
                />

                {/* Coastline highlight outline */}
                <path
                  d="M 10,-5 C 13,5 15,10 18,15 C 22,22 25,26 28,30 C 32,36 35,42 38,48 C 41,56 43,64 45,72 C 47,80 47,84 48,88 C 49,92 50,96 52,105"
                  fill="none"
                  stroke="#B07D4F"
                  strokeWidth="1.5"
                  className="opacity-80"
                />

                {/* Roads / Service Routes (Dashed Lines) */}
                {/* Route 1: Kasaragod -> Kannur -> Kozhikode -> Keraia -> Malappurum */}
                <path 
                  d="M 18,15 L 28,30 L 38,48 L 45,72 L 48,88" 
                  fill="none" 
                  stroke="#B07D4F" 
                  strokeWidth="0.8" 
                  strokeDasharray="2,2" 
                  className="opacity-60"
                />
                
                {/* Route 2: Kannur -> Wayanad */}
                <path 
                  d="M 28,30 L 62,46" 
                  fill="none" 
                  stroke="#B07D4F" 
                  strokeWidth="0.8" 
                  strokeDasharray="2,2" 
                  className="opacity-60"
                />

                {/* Route 3: Kozhikode -> Wayanad */}
                <path 
                  d="M 38,48 L 62,46" 
                  fill="none" 
                  stroke="#B07D4F" 
                  strokeWidth="0.8" 
                  strokeDasharray="2,2" 
                  className="opacity-60"
                />

                {/* Route 4: Wayanad -> Palakkad */}
                <path 
                  d="M 62,46 L 82,35" 
                  fill="none" 
                  stroke="#B07D4F" 
                  strokeWidth="0.8" 
                  strokeDasharray="2,2" 
                  className="opacity-60"
                />

                {/* Route 5: Palakkad -> Malappurum */}
                <path 
                  d="M 82,35 L 48,88" 
                  fill="none" 
                  stroke="#B07D4F" 
                  strokeWidth="0.8" 
                  strokeDasharray="2,2" 
                  className="opacity-60"
                />

                {/* Decorative highway extensions */}
                <path d="M 18,15 L 42,8" fill="none" stroke="#B07D4F" strokeWidth="0.8" strokeDasharray="2,2" className="opacity-40" />
                <path d="M 82,35 L 98,38" fill="none" stroke="#B07D4F" strokeWidth="0.8" strokeDasharray="2,2" className="opacity-40" />
              </svg>

              {/* Scroll-Linked Animating Trucks */}
              {/* Truck 1: Kasaragod -> Kannur */}
              <motion.div
                style={{ left: truck1Left, top: truck1Top, rotate: 56 }}
                className="absolute -translate-x-1/2 -translate-y-1/2 z-20 bg-gold text-white p-1 rounded-full shadow-md border border-white flex items-center justify-center pointer-events-none"
              >
                <Truck className="w-2.5 h-2.5" />
              </motion.div>

              {/* Truck 2: Kannur -> Wayanad */}
              <motion.div
                style={{ left: truck2Left, top: truck2Top, rotate: 25 }}
                className="absolute -translate-x-1/2 -translate-y-1/2 z-20 bg-gold text-white p-1 rounded-full shadow-md border border-white flex items-center justify-center pointer-events-none"
              >
                <Truck className="w-2.5 h-2.5" />
              </motion.div>

              {/* Truck 3: Wayanad -> Palakkad */}
              <motion.div
                style={{ left: truck3Left, top: truck3Top, rotate: -29 }}
                className="absolute -translate-x-1/2 -translate-y-1/2 z-20 bg-gold text-white p-1 rounded-full shadow-md border border-white flex items-center justify-center pointer-events-none"
              >
                <Truck className="w-2.5 h-2.5" />
              </motion.div>

              {/* Truck 4: Keraia -> Malappurum */}
              <motion.div
                style={{ left: truck4Left, top: truck4Top, rotate: 79 }}
                className="absolute -translate-x-1/2 -translate-y-1/2 z-20 bg-gold text-white p-1 rounded-full shadow-md border border-white flex items-center justify-center pointer-events-none"
              >
                <Truck className="w-2.5 h-2.5" />
              </motion.div>

              {/* Interactive Location Pins */}
              {pins.map((pin, idx) => {
                const isActive = activePin === idx;
                return (
                  <div
                    key={idx}
                    style={{ left: `${pin.left}%`, top: `${pin.top}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 z-20 group cursor-pointer"
                    onMouseEnter={() => setActivePin(idx)}
                    onMouseLeave={() => setActivePin(null)}
                  >
                    {/* Pulsing ring halo */}
                    <div 
                      className={`absolute -inset-3 rounded-full bg-gold/30 transition-all duration-300 ${
                        isActive 
                          ? 'scale-150 opacity-100 animate-ping' 
                          : 'scale-100 opacity-0 group-hover:opacity-100 group-hover:scale-125'
                      }`} 
                    />

                    {/* Pin droplet */}
                    <div 
                      className={`relative w-4 h-4 rounded-full flex items-center justify-center border shadow-sm transition-all duration-300 ${
                        isActive 
                          ? 'bg-gold text-white scale-110 border-white' 
                          : 'bg-white text-gold border-gold/40'
                      }`}
                    >
                      {/* Inner core */}
                      <div className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-white' : 'bg-gold'}`} />
                    </div>

                    {/* Floating Info Tooltip */}
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 8 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        className="absolute z-30 bg-[#222222] text-white text-xs p-3 rounded-xl shadow-xl border border-gold/20 w-44 -translate-x-1/2 left-1/2 bottom-6 pointer-events-none"
                      >
                        <p className="font-serif font-bold text-gold mb-0.5">{pin.name}</p>
                        <p className="text-[10px] text-white/80 leading-snug">{pin.desc}</p>
                        <div className="absolute w-1.5 h-1.5 bg-[#222222] border-r border-b border-gold/20 rotate-45 left-1/2 -translate-x-1/2 -bottom-1" />
                      </motion.div>
                    )}

                    {/* Location Name Label */}
                    <span 
                      className={`absolute whitespace-nowrap text-[10px] sm:text-[11px] font-bold text-charcoal/90 transition-all duration-300 pointer-events-none ${
                        pin.align === 'left' ? 'right-5 top-1/2 -translate-y-1/2 text-right' :
                        pin.align === 'left-below' ? 'right-3 top-3.5 text-right' :
                        pin.align === 'right' ? 'left-5 top-1/2 -translate-y-1/2 text-left' :
                        'left-5 top-1/2 -translate-y-1/2 text-left'
                      } ${isActive ? 'text-gold scale-105 font-extrabold' : ''}`}
                    >
                      {pin.label}
                    </span>
                  </div>
                );
              })}

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
