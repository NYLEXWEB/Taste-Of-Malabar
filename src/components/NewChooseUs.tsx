"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";

const reasons = [
  {
    title: "Customized Menu",
    description: "Whether vegetarian, traditional Kerala Sadya, or modern fusion, we offer complete menu customization to tailor every dish to your event's style.",
    index: "01",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    )
  },
  {
    title: "Live Food Counters",
    description: "Hot, sizzling live counters including parottas, pathiris, claypot grills, and live mocktail stations, creating a lively guest experience.",
    index: "02",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-1.12-2.5-2.5-2.5S6 10.62 6 12a2.5 2.5 0 0 0 2.5 2.5z" />
        <path d="M15.5 14.5a2.5 2.5 0 0 0 2.5-2.5c0-1.38-1.12-2.5-2.5-2.5s-2.5 1.12-2.5 2.5 1.12 2.5 2.5 2.5z" />
        <path d="M12 2v4M4 12H2M22 12h-2M12 18v4" />
      </svg>
    )
  },
  {
    title: "Expert Chefs",
    description: "Led by an expert chef team with decades of experience in creating gourmet dining and managing large-scale catering logistics across Kerala.",
    index: "03",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M6 18V6a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v12" />
        <path d="M3 18h18a1 1 0 0 1 1 1v2H2v-2a1 1 0 0 1 1-1z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    )
  },
  {
    title: "Hygienic Preparation",
    description: "Prepared in state-of-the-art kitchens adhering to strict FSSAI food safety regulations and regular hygiene audits.",
    index: "04",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 11 2 2 4-4" />
      </svg>
    )
  },
  {
    title: "Creative Presentation",
    description: "Elegant and creative presentation, featuring themed setups, bespoke plating, and artistic buffet layouts to impress your guests.",
    index: "05",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z" />
        <path d="M12 6v6l4 2" />
      </svg>
    )
  },
  {
    title: "Variety of Menu",
    description: "Choose from a vast variety of menu options, from authentic regional delicacies to international multi-cuisine fusion spreads.",
    index: "06",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 3v18M3 12h18" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    )
  }
];

export default function NewChooseUs() {
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
        
        // Wrap scroll position seamlessly
        if (el.scrollLeft >= maxScroll) {
          el.scrollLeft -= maxScroll;
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

  return (
    <section id="why-choose-us" className="py-20 bg-cream relative overflow-hidden border-t border-gold/10">
      {/* Decorative botanical layout line elements */}
      <div className="absolute top-1/4 -left-40 w-[450px] h-[450px] bg-gold/5 rounded-full filter blur-3xl -z-10" />
      <div className="absolute bottom-1/4 -right-40 w-[450px] h-[450px] bg-gold/5 rounded-full filter blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Luxury Asymmetrical Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-end">
          <div className="lg:col-span-8">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold mb-3.5 block">
              Our Excellence
            </span>
            <h2 className="font-serif text-3.5xl sm:text-5xl font-extrabold tracking-tight text-charcoal leading-tight">
              Why Taste of Malabar <br className="hidden sm:inline" />
              Stands Out
            </h2>
          </div>
          <div className="lg:col-span-4 text-left lg:text-right">
            <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed font-sans max-w-sm ml-auto font-normal">
              Combining culinary legacy, strict hygiene, and customizable menu plans to create memorable dining moments.
            </p>
          </div>
        </div>

        {/* Asymmetrical Luxury Reasons Layout (Desktop) */}
        <div className="hidden lg:grid grid-cols-3 gap-8 relative z-10">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white border border-neutral-250/60 p-8 rounded-2xl flex flex-col justify-between relative group overflow-hidden shadow-sm hover:shadow-xl hover:border-gold/40 transition-all duration-500 cursor-pointer"
            >
              {/* Card top elements */}
              <div>
                <div className="flex items-center justify-between mb-8">
                  {/* Luxury minimalist icon container */}
                  <div className="w-12 h-12 rounded-xl bg-gold/5 text-gold flex items-center justify-center group-hover:bg-gold group-hover:text-white transition-all duration-500 ease-out border border-gold/15">
                    {reason.icon}
                  </div>
                  {/* Premium gold text badge index */}
                  <span className="font-serif text-xl font-extrabold text-neutral-300 tracking-tighter group-hover:text-gold/50 transition-colors duration-500">
                    {reason.index}
                  </span>
                </div>

                <h3 className="text-charcoal text-lg font-serif font-bold tracking-wide mb-3 group-hover:text-gold transition-colors duration-300">
                  {reason.title}
                </h3>
                <p className="text-xs text-neutral-500 leading-relaxed font-normal">
                  {reason.description}
                </p>
              </div>

              {/* Decorative accent golden line at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gold scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Swipeable Marquee Cards Layout (Mobile/Tablet) */}
        <div className="block lg:hidden mt-8">
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
                  className="w-[280px] shrink-0 bg-white border border-neutral-250/60 p-6 rounded-2xl flex flex-col justify-between relative group overflow-hidden shadow-sm"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-10 h-10 rounded-xl bg-gold/5 text-gold flex items-center justify-center border border-gold/15">
                        {reason.icon}
                      </div>
                      <span className="font-serif text-lg font-extrabold text-neutral-300">
                        {reason.index}
                      </span>
                    </div>

                    <h3 className="text-charcoal text-base font-serif font-bold tracking-wide mb-2">
                      {reason.title}
                    </h3>
                    <p className="text-xs text-neutral-500 leading-relaxed font-normal">
                      {reason.description}
                    </p>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gold" />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
