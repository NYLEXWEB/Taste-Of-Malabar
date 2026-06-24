"use client";

import { useRef, useEffect } from "react";
import { 
  UtensilsCrossed, 
  Flame, 
  ChefHat, 
  ShieldCheck, 
  Sparkles, 
  BookOpen 
} from "lucide-react";
import { motion } from "framer-motion";

const reasons = [
  {
    icon: UtensilsCrossed,
    title: "Customized Menu",
    description: "Whether vegetarian, traditional Kerala Sadya, or modern fusion, we offer complete menu customization to tailor every dish to your event's style.",
    index: "01"
  },
  {
    icon: Flame,
    title: "Live Food Counters",
    description: "Hot, sizzling live counters including parottas, pathiris, claypot grills, and live mocktail stations, creating a lively guest experience.",
    index: "02"
  },
  {
    icon: ChefHat,
    title: "Expert Chefs",
    description: "Led by an expert chef team with decades of experience in creating gourmet dining and managing large-scale catering logistics across Kerala.",
    index: "03"
  },
  {
    icon: ShieldCheck,
    title: "Hygienic Preparation",
    description: "Prepared in state-of-the-art kitchens adhering to strict FSSAI food safety regulations and regular hygiene audits.",
    index: "04"
  },
  {
    icon: Sparkles,
    title: "Creative Presentation",
    description: "Elegant and creative presentation, featuring themed setups, bespoke plating, and artistic buffet layouts to impress your guests.",
    index: "05"
  },
  {
    icon: BookOpen,
    title: "Variety of Menu",
    description: "Choose from a vast variety of menu options, from authentic regional delicacies to international multi-cuisine fusion spreads.",
    index: "06"
  },
];

export default function WhyChooseUs() {
  const mobileScrollRef = useRef<HTMLDivElement>(null);
  const isInteracting = useRef(false);
  const touchStartX = useRef(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    
    let animationFrameId: number;

    const scroll = () => {
      const el = mobileScrollRef.current;
      if (el && !isInteracting.current) {
        el.scrollLeft += 0.6; // constant scroll speed

        const maxScroll = el.scrollWidth / 2;
        if (el.scrollLeft >= maxScroll) {
          el.scrollLeft = 0;
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

  return (
    <section id="why-choose-us" className="py-20 bg-cream relative overflow-hidden border-t border-gold/10">
      {/* Soft artistic background gradients */}
      <div className="absolute top-1/4 -left-40 w-[450px] h-[450px] bg-gold/5 rounded-full filter blur-3xl -z-10" />
      <div className="absolute bottom-1/4 -right-40 w-[450px] h-[450px] bg-gold/5 rounded-full filter blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-gold mb-3 block">
            Our Excellence
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-charcoal mb-4">
            Why Taste of Malabar stands out
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

        {/* Reasons Grid (Desktop view) */}
        <div className="hidden lg:grid grid-cols-3 gap-6 relative z-10">
          {reasons.map((reason, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[2rem_0.5rem_2rem_0.5rem] p-6 border border-gold/20 shadow-lg shadow-gold/5 flex flex-col items-start relative overflow-hidden transition-all duration-500 hover:border-gold/55 hover:shadow-2xl hover:shadow-gold/10 hover:-translate-y-1.5 group cursor-pointer"
            >
              {/* Large watermark step number */}
              <span className="absolute top-6 right-6 font-serif text-3xl font-black text-gold/10 group-hover:text-gold/25 transition-colors duration-500 select-none">
                {reason.index}
              </span>

              {/* Double-ringed Gold Icon badge */}
              <div className="w-12 h-12 rounded-full bg-gold/[0.04] border border-gold/25 flex items-center justify-center text-gold mb-5 relative group-hover:scale-110 group-hover:bg-gold group-hover:text-white transition-all duration-500 ease-out">
                <span className="absolute -inset-1 rounded-full border border-gold/10 group-hover:border-gold/35 scale-100 group-hover:scale-95 transition-all duration-500" />
                <reason.icon className="w-5 h-5 stroke-[1.25]" />
              </div>

              {/* Title */}
              <h3 className="text-charcoal text-base font-serif font-bold uppercase tracking-wider mb-2 group-hover:text-gold transition-colors duration-300">
                {reason.title}
              </h3>

              {/* Description */}
              <p className="text-[11px] text-neutral-600 leading-relaxed font-normal">
                {reason.description}
              </p>

              {/* Glowing subtle highlight in bottom corner */}
              <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-gold/5 rounded-full filter blur-xl group-hover:bg-gold/10 transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* Mobile View: Combined Layout + Auto-Scrolling Marquee Slider */}
        <div className="block lg:hidden mt-8">
          
          {/* Mobile Auto-Scrolling Marquee Slider */}
          <div className="relative overflow-hidden py-4 w-full">
            <div
              ref={mobileScrollRef}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              className="flex gap-4 overflow-x-auto no-scrollbar py-2"
              style={{ scrollBehavior: "auto" }}
            >
              {[...reasons, ...reasons].map((reason, idx) => (
                <div
                  key={`marquee-${idx}`}
                  className="w-[280px] shrink-0 bg-white rounded-[2rem_0.5rem_2rem_0.5rem] p-6 border border-gold/20 shadow-lg shadow-gold/5 flex flex-col items-start relative overflow-hidden transition-all duration-500 group"
                >
                  {/* Large watermark step number */}
                  <span className="absolute top-6 right-6 font-serif text-3xl font-black text-gold/10 select-none">
                    {reason.index}
                  </span>

                  {/* Double-ringed Gold Icon badge */}
                  <div className="w-12 h-12 rounded-full bg-gold/[0.04] border border-gold/25 flex items-center justify-center text-gold mb-5 relative">
                    <span className="absolute -inset-1 rounded-full border border-gold/10 scale-100" />
                    <reason.icon className="w-5 h-5 stroke-[1.25]" />
                  </div>

                  {/* Title */}
                  <h3 className="text-charcoal text-base font-serif font-bold uppercase tracking-wider mb-2">
                    {reason.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[11px] text-neutral-600 leading-relaxed font-normal">
                    {reason.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
