"use client";

import { 
  Utensils, 
  Flame, 
  Sparkles, 
  CheckCircle, 
  Clock, 
  ShieldCheck, 
  Users, 
  Award 
} from "lucide-react";
import { motion } from "framer-motion";

const reasons = [
  {
    icon: Sparkles,
    title: "Authentic Malabar Flavors",
    description: "Time-tested recipes handed down through generations. Savor authentic Thalassery, Kozhikode, and Kannur delights.",
  },
  {
    icon: CheckCircle,
    title: "Fresh Quality Ingredients",
    description: "We source premium meats, fresh seafood, local organic vegetables, and unadulterated spices to ensure maximum taste.",
  },
  {
    icon: Utensils,
    title: "Customized Menus",
    description: "Whether vegetarian, non-vegetarian, traditional, or fusion, we build bespoke menus tailored to your guests' preferences.",
  },
  {
    icon: Flame,
    title: "Live Food Counters",
    description: "Hot, sizzling live counters including parottas, pathiris, grills, and dosa stations, creating a lively guest experience.",
  },
  {
    icon: Users,
    title: "Professional Staff",
    description: "Highly trained, well-mannered uniform stewards, supervisors, and executive chefs executing standard service protocols.",
  },
  {
    icon: ShieldCheck,
    title: "Hygienic Food Preparation",
    description: "Prepared in state-of-the-art kitchens adhering to strict FSSAI food safety regulations and regular hygiene audits.",
  },
  {
    icon: Clock,
    title: "On-Time Service",
    description: "Punctuality is our core principle. Buffet setups, live stations, and dining services are executed precisely on schedule.",
  },
  {
    icon: Award,
    title: "20+ Years Expertise",
    description: "Over 20 years of experience managing complex logistics for large crowds, from 50 to 5,000+ guests without a hitch.",
  },
];

export default function WhyChooseUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    },
  } as const;

  return (
    <section className="py-24 lg:py-36 bg-cream-dark relative overflow-hidden">
      {/* Decorative vectors */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-gold/5 rounded-full filter blur-3xl -z-10" />
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-gold/5 rounded-full filter blur-3xl -z-10" />

      {/* Nilavilakku Brass Lamp SVG Silhouette (Kerala Themed) */}
      <svg 
        className="absolute left-4 top-1/2 -translate-y-1/2 w-[220px] h-[380px] opacity-[0.05] pointer-events-none text-gold select-none" 
        viewBox="0 0 100 200" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="0.5"
      >
        <ellipse cx="50" cy="180" rx="20" ry="10" />
        <path d="M 40 180 Q 50 170 60 180" />
        <path d="M 47 170 L 47 60" />
        <path d="M 53 170 L 53 60" />
        <ellipse cx="50" cy="140" rx="6" ry="3" />
        <ellipse cx="50" cy="100" rx="5" ry="2.5" />
        <ellipse cx="50" cy="60" rx="15" ry="5" />
        <path d="M 35 60 Q 50 48 65 60" />
        <path d="M 45 48 Q 50 35 55 48 Z" fill="currentColor" className="opacity-20" />
        <path d="M 48 35 Q 50 25 52 35 Z" />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <span className="font-serif italic text-gold text-2xl font-normal block mb-2">
            Standards of Excellence
          </span>
          <span className="text-xs font-bold uppercase tracking-widest text-gold/60 mb-3 block">
            Our Commitments
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-charcoal mb-4">
            Why Discerning Clients Choose Us
          </h2>
          <div className="w-16 h-[2px] bg-gold mx-auto mb-6" />
          <p className="text-base text-neutral-600">
            For more than 20 years, we have set the gold standard in premium catering, blending culinary artistry, strict hygiene, and prompt service.
          </p>
        </div>

        {/* Reasons Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-2xl border border-neutral-200/80 shadow-md hover:border-gold/30 transition-all duration-300 flex flex-col items-start"
            >
              {/* Icon */}
              <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/15 flex items-center justify-center text-gold mb-4">
                <reason.icon className="w-5 h-5 stroke-[1.5]" />
              </div>

              {/* Title */}
              <h3 className="text-base font-bold text-charcoal mb-2 font-serif">
                {reason.title}
              </h3>

              {/* Description */}
              <p className="text-xs text-neutral-500 leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
