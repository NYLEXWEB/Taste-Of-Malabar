"use client";

import { 
  Heart, 
  Leaf, 
  Briefcase, 
  Gift, 
  UtensilsCrossed, 
  Layers, 
  Sparkles, 
  Settings,
  ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Heart,
    title: "Wedding Catering",
    description: "Grand, luxurious wedding feasts featuring gourmet spreads, premium table setups, and flawless hospitality that leaves your guests spellbound.",
    highlight: "Pre-wedding & Reception Spreads"
  },
  {
    icon: Leaf,
    title: "Kerala Sadya",
    description: "The ultimate traditional vegetarian feast served on banana leaves. Crafted strictly using authentic recipes and fresh, local ingredients.",
    highlight: "Up to 30 traditional side dishes"
  },
  {
    icon: Briefcase,
    title: "Corporate Catering",
    description: "Polished corporate lunches, annual day banquets, and high-tea spreads tailored to reflect your organization's premium brand status.",
    highlight: "On-time delivery & modular layouts"
  },
  {
    icon: Gift,
    title: "Birthday Catering",
    description: "Vibrant, customizable menus featuring live food counters, child-friendly snacks, mocktail bars, and delightful dessert stations.",
    highlight: "Interactive Live Stations"
  },
  {
    icon: Layers,
    title: "Buffet Catering",
    description: "Sleek, modern buffet arrangements with premium warming equipment, beautiful floral runners, and clearly labeled menu cards.",
    highlight: "Elegant Gold Chafing Setups"
  },
  {
    icon: UtensilsCrossed,
    title: "Table Service",
    description: "High-end sit-down silver service, plated dinners, and professional waitstaff executing synchronous fine-dining service.",
    highlight: "Trained hospitality stewards"
  },
  {
    icon: Sparkles,
    title: "Islamic Buffet",
    description: "Authentic, 100% Halal Malabar feasts. Signature Dum Biriyanis, rich slow-cooked meats, Sulaimani counters, and traditional desserts.",
    highlight: "Signature Kannur Dum Biriyani"
  },
  {
    icon: Settings,
    title: "Custom Catering",
    description: "Tailor-made menu planning, ingredient selection, and themed food presentations. Tell us your vision, and we will translate it onto the plate.",
    highlight: "Dietary & portion customization"
  },
];

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  } as const;

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  } as const;

  const scrollToContact = () => {
    const contact = document.querySelector("#contact");
    if (contact) {
      contact.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="text-xs font-bold uppercase tracking-widest text-gold mb-3 block">
            What We Do
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-charcoal mb-4">
            Our Premium Catering Services
          </h2>
          <div className="w-16 h-[2px] bg-gold mx-auto mb-6" />
          <p className="text-base text-charcoal/70 leading-relaxed">
            Delivering exquisite culinary presentations and premium hospitality services. We tailor every service to fit the grandeur, theme, and scale of your special celebration.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(200, 160, 77, 0.08)" }}
              className="bg-white p-6 rounded-2xl border border-gray-100 hover:border-gold/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Icon Container */}
                <div className="w-12 h-12 rounded-xl bg-gold-light border border-gold/15 flex items-center justify-center text-gold mb-5">
                  <service.icon className="w-6 h-6 stroke-[1.5]" />
                </div>
                
                {/* Title */}
                <h3 className="font-serif text-lg font-bold text-charcoal mb-3">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-sm text-charcoal/65 leading-relaxed mb-4">
                  {service.description}
                </p>
              </div>

              {/* Card Footer Info */}
              <div className="pt-4 border-t border-gray-50 mt-4">
                <span className="text-[10px] uppercase font-bold tracking-widest text-gold block">
                  Feature:
                </span>
                <span className="text-xs font-medium text-charcoal/80">
                  {service.highlight}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Small Notice focusing on Catering primary, event secondary */}
        <div className="mt-16 text-center max-w-xl mx-auto bg-gold-light/40 border border-gold/15 p-6 rounded-2xl">
          <p className="text-xs text-charcoal/75 leading-relaxed">
            <span className="font-bold text-gold uppercase tracking-wider block mb-1">Catering & Event Management Integration</span>
            While our heart beats for catering, we also provide professional <strong>Event Management solutions (20% of operations)</strong> including banquet design, decor coordination, floral layouts, and lighting to ensure a seamless experience.
          </p>
        </div>
      </div>
    </section>
  );
}
