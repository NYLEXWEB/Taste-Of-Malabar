"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCheck, FaChevronDown } from "react-icons/fa";

const reasons = [
  {
    index: "01",
    title: "Customized Menu",
    description: "Whether vegetarian, traditional Kerala Sadya, or modern fusion, we offer complete menu customization to tailor every dish to your event's style.",
    benefits: [
      "Tailored vegetarian & non-veg options",
      "Traditional & modern fusion combinations",
      "Adjustable spice levels to suit all guests",
      "Special dietary menu planning"
    ],
    icon: "utensils"
  },
  {
    index: "02",
    title: "Live Food Counters",
    description: "Hot, sizzling live counters including parottas, pathiris, claypot grills, and live mocktail stations, creating a lively guest experience.",
    benefits: [
      "Live Appam, Pathiri & Parotta counters",
      "Claypot charcoal grills & tandoor",
      "Interactive mocktail & dessert stations",
      "Fresh hot items served directly to plates"
    ],
    icon: "flame"
  },
  {
    index: "03",
    title: "Expert Chefs",
    description: "Led by an expert chef team with decades of experience in creating gourmet dining and managing large-scale catering logistics across Kerala.",
    benefits: [
      "Chefs with 20+ years of local feast expertise",
      "Specialists in Malabar, Sadya & Arabic cuisines",
      "Efficient large-scale crowd culinary management",
      "Signature spice blends prepared in-house"
    ],
    icon: "chef"
  },
  {
    index: "04",
    title: "Hygienic Preparation",
    description: "Prepared in state-of-the-art kitchens adhering to strict FSSAI food safety regulations and regular hygiene audits.",
    benefits: [
      "FSSAI certified commercial kitchens",
      "Daily deep-sanitization & hygiene checks",
      "Premium quality, hand-picked ingredients",
      "Trained staff wearing full safety gear"
    ],
    icon: "shield"
  },
  {
    index: "05",
    title: "Creative Presentation",
    description: "Elegant and creative presentation, featuring themed setups, bespoke plating, and artistic buffet layouts to impress your guests.",
    benefits: [
      "Themed buffet designs & flower setups",
      "Premium glass, ceramic & gold tableware",
      "Artistic food fruit-carving & displays",
      "Coordinated uniforms for service staff"
    ],
    icon: "sparkles"
  },
  {
    index: "06",
    title: "Variety of Menu",
    description: "Choose from a vast variety of menu options, from authentic regional delicacies to international multi-cuisine fusion spreads.",
    benefits: [
      "100+ authentic Malabar delicacies",
      "Traditional Kerala Sadya (Pure Veg)",
      "North Indian, Chinese & Arabic spreads",
      "Innovative dessert & beverage menus"
    ],
    icon: "menu"
  }
];

function getIcon(type: string, className: string) {
  switch (type) {
    case "utensils":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
          <path d="M7 2v20" />
          <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
        </svg>
      );
    case "flame":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
        </svg>
      );
    case "chef":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 18H4a2 2 0 0 1-2-2v-1a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v1a2 2 0 0 1-2 2h-2" />
          <path d="M18 10a6 6 0 0 0-12 0" />
          <path d="M12 2v2" />
          <path d="M9 3v1" />
          <path d="M15 3v1" />
          <path d="M9 14h6" />
          <path d="M9 18h6" />
        </svg>
      );
    case "shield":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
    case "sparkles":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
          <path d="m5 3 1 2.5L8.5 6 6 7 5 9.5 4 7 1.5 6 4 5 5 3Z" />
          <path d="m19 17 1 2.5 2.5.5-2.5 1-1 2.5-1-2.5-2.5-1 2.5-1 1-2.5Z" />
        </svg>
      );
    case "menu":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
        </svg>
      );
    default:
      return null;
  }
}

export default function WhyChooseUs() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [openMobileIdx, setOpenMobileIdx] = useState(0);
  const autoPlayRef = useRef(true);

  // Auto cycle on desktop if not interacting
  useEffect(() => {
    const interval = setInterval(() => {
      if (autoPlayRef.current) {
        setActiveIdx((prev) => (prev + 1) % reasons.length);
      }
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const handleNodeSelect = (idx: number) => {
    setActiveIdx(idx);
    autoPlayRef.current = false;
  };

  return (
    <section id="why-choose-us" className="py-20 lg:py-24 bg-cream relative overflow-hidden border-t border-gold/10">
      {/* Artistic design background blobs */}
      <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] bg-gold/5 rounded-full filter blur-3xl -z-10" />
      <div className="absolute bottom-1/4 -right-40 w-[500px] h-[500px] bg-gold/5 rounded-full filter blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Centered Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="text-xs font-bold uppercase tracking-widest text-gold mb-3 block">
            Our Excellence
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-charcoal mb-4">
            Why Choose Us
          </h2>
          <div className="w-16 h-[2px] bg-gold/20 mx-auto relative overflow-hidden">
            <motion.div
              initial={{ left: "-100%" }}
              whileInView={{ left: "0%" }}
              viewport={{ once: true, margin: "200px 0px 100px 0px" }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="absolute inset-0 bg-gold"
            />
          </div>
        </div>

        {/* Desktop View: Interactive Compass Dial & Showcase Panel */}
        <div className="hidden lg:grid grid-cols-12 gap-12 items-center relative z-10">

          {/* Left Column (Radial Dial): 5 Columns */}
          <div className="col-span-5 flex justify-center">
            <div className="relative w-full aspect-square max-w-[420px] mx-auto select-none">

              {/* Dashed Orbital Track */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full border border-gold/25 border-dashed animate-[spin_160s_linear_infinite]" />

              {/* Connector Lines SVG */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 100 100">
                {reasons.map((_, idx) => {
                  const angleRad = (idx * 60 * Math.PI) / 180;
                  const x2 = 50 + 40 * Math.cos(angleRad);
                  const y2 = 50 + 40 * Math.sin(angleRad);
                  const isActive = activeIdx === idx;

                  return (
                    <motion.line
                      key={idx}
                      x1="50"
                      y1="50"
                      x2={x2}
                      y2={y2}
                      stroke={isActive ? "#E55928" : "#d4af37"}
                      strokeWidth={isActive ? "1" : "0.3"}
                      strokeOpacity={isActive ? "0.85" : "0.25"}
                      strokeDasharray={isActive ? "3,3" : "none"}
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.5 }}
                    />
                  );
                })}
              </svg>

              {/* Rotating Pointer Ring */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[240px] rounded-full pointer-events-none z-10"
                animate={{ rotate: activeIdx * 60 }}
                transition={{ type: "spring", stiffness: 70, damping: 14 }}
              >
                {/* Pointer Needle pointing right */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 -mr-1.5 bg-gradient-to-tr from-[#E55928] to-gold rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                  <svg className="w-4 h-4 text-white animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" />
                  </svg>
                </div>
              </motion.div>

              {/* Central Compass Uruli Face */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 rounded-full bg-white border-4 border-gold/25 flex flex-col items-center justify-center p-4 shadow-xl z-20 text-center">
                <div className="absolute inset-2 rounded-full border border-gold/15 border-dashed pointer-events-none" />
                <span className="text-[9px] font-bold tracking-widest text-[#E55928] uppercase">Taste Of</span>
                <span className="text-base font-serif font-black text-charcoal tracking-wide">MALABAR</span>
                <div className="w-10 h-[1.5px] bg-[#E55928]/35 my-1.5" />
                <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">Excellence</span>
              </div>

              {/* Orbital Feature Nodes */}
              {reasons.map((reason, idx) => {
                const angleRad = (idx * 60 * Math.PI) / 180;
                // Position calculations in percentages
                const x = 50 + 40 * Math.cos(angleRad);
                const y = 50 + 40 * Math.sin(angleRad);
                const isActive = activeIdx === idx;

                return (
                  <button
                    key={idx}
                    onClick={() => handleNodeSelect(idx)}
                    onMouseEnter={() => handleNodeSelect(idx)}
                    className="absolute w-16 h-16 -translate-x-1/2 -translate-y-1/2 z-30 cursor-pointer focus:outline-none group"
                    style={{ left: `${x}%`, top: `${y}%` }}
                  >
                    {/* Active Halo Indicator */}
                    {isActive && (
                      <span className="absolute -inset-2.5 rounded-full border-2 border-dashed border-[#E55928]/40 animate-[spin_12s_linear_infinite]" />
                    )}

                    {/* Outer circle */}
                    <div className={`w-full h-full rounded-full flex items-center justify-center transition-all duration-500 shadow-md ${isActive
                        ? "bg-gradient-to-tr from-[#E55928] to-gold text-white scale-110 shadow-lg shadow-[#E55928]/25"
                        : "bg-white border-2 border-gold/20 text-[#E55928] hover:border-[#E55928]/60 hover:scale-105"
                      }`}>
                      {getIcon(reason.icon, "w-6 h-6")}
                    </div>

                    {/* Little index number badge on node */}
                    <span className={`absolute -top-1 -right-1 w-5 h-5 rounded-full text-[9px] font-black font-serif flex items-center justify-center border shadow-sm transition-all duration-500 ${isActive
                        ? "bg-white text-charcoal border-[#E55928]"
                        : "bg-gold text-white border-white"
                      }`}>
                      {reason.index}
                    </span>

                    {/* Hover text label */}
                    <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 whitespace-nowrap bg-charcoal text-white text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-md z-40">
                      {reason.title}
                    </span>
                  </button>
                );
              })}

            </div>
          </div>

          {/* Right Column (Showcase Card): 7 Columns */}
          <div className="col-span-7 pl-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white rounded-[2.5rem] p-10 border-2 border-[#E55928]/15 shadow-2xl shadow-charcoal/5 relative overflow-hidden min-h-[380px] flex flex-col justify-between"
              >
                {/* Massive Decorative Index Number */}
                <div className="text-[#E55928]/[0.03] font-serif text-[180px] font-black absolute bottom-0 right-4 pointer-events-none leading-none">
                  {reasons[activeIdx].index}
                </div>

                {/* Subtle Radial Glow */}
                <div className="absolute top-0 right-0 w-72 h-72 bg-gold/5 rounded-full filter blur-3xl pointer-events-none" />

                {/* Main Card Content */}
                <div>
                  {/* Badge */}
                  <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gold/10 text-gold text-[10px] font-bold uppercase tracking-widest mb-6">
                    ✦ Service Quality Feature
                  </span>

                  <div>
                    <h3 className="font-serif text-3xl font-black text-charcoal mb-4 tracking-wide uppercase">
                      {reasons[activeIdx].title}
                    </h3>
                    <p className="text-sm text-neutral-600 mb-8 leading-relaxed font-normal max-w-2xl">
                      {reasons[activeIdx].description}
                    </p>

                    {/* Benefits Checklist in 2 columns */}
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl">
                      {reasons[activeIdx].benefits.map((benefit, bIdx) => (
                        <motion.li
                          key={bIdx}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: bIdx * 0.08 }}
                          className="flex items-center gap-3 text-xs md:text-sm text-neutral-700 font-semibold"
                        >
                          <span className="w-5.5 h-5.5 rounded-full bg-[#E55928]/10 flex items-center justify-center text-[#E55928] shrink-0">
                            <FaCheck className="w-2.5 h-2.5" />
                          </span>
                          <span>{benefit}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Footer action button */}
                <div className="mt-8 pt-6 border-t border-neutral-100 flex items-center justify-between relative z-10">
                  <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-widest">
                    Taste of Malabar Quality Standard
                  </span>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-charcoal text-white hover:bg-gold text-xs font-black uppercase tracking-widest transition-all duration-300"
                  >
                    Request Free Quote
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* Mobile View: Exclusive Vertical Interactive Accordion */}
        <div className="block lg:hidden mt-8 space-y-4">
          {reasons.map((reason, idx) => {
            const isOpen = openMobileIdx === idx;

            return (
              <div
                key={idx}
                className={`bg-white rounded-3xl border-2 transition-all duration-500 overflow-hidden ${isOpen ? "border-[#E55928]/60 shadow-xl shadow-[#E55928]/5" : "border-neutral-200/50 shadow-sm"
                  }`}
              >
                {/* Header panel */}
                <button
                  onClick={() => setOpenMobileIdx(isOpen ? -1 : idx)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left cursor-pointer focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    {/* Circle badge containing Index & Icon */}
                    <div className={`w-11 h-11 rounded-full flex items-center justify-center transition-all duration-500 shrink-0 ${isOpen ? "bg-gradient-to-tr from-[#E55928] to-gold text-white shadow-md shadow-[#E55928]/20" : "bg-neutral-100 text-charcoal"
                      }`}>
                      {isOpen ? getIcon(reason.icon, "w-5 h-5") : <span className="text-xs font-black font-serif">{reason.index}</span>}
                    </div>
                    <h3 className="font-serif text-sm font-black uppercase tracking-wider text-charcoal">
                      {reason.title}
                    </h3>
                  </div>

                  {/* Chevron rotates */}
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-gold pr-1"
                  >
                    <FaChevronDown className="w-4 h-4" />
                  </motion.div>
                </button>

                {/* Animated expandable content body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-4 pb-6 sm:px-5 pt-2 border-t border-neutral-100 space-y-4">
                        <p className="text-xs text-neutral-600 leading-relaxed font-normal">
                          {reason.description}
                        </p>

                        {/* Benefits checklist */}
                        <ul className="space-y-3">
                          {reason.benefits.map((benefit, bIdx) => (
                            <li key={bIdx} className="flex items-center gap-2.5 text-xs text-neutral-700 font-semibold">
                              <span className="w-5 h-5 rounded-full bg-[#E55928]/10 flex items-center justify-center text-[#E55928] shrink-0">
                                <FaCheck className="w-2.5 h-2.5" />
                              </span>
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
