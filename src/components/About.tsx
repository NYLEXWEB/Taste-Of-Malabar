"use client";

import Image from "next/image";
import { Award, Shield, Users, Star, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const highlights = [
  {
    icon: Award,
    title: "20+ Years Experience",
    desc: "Over two decades of crafting unforgettable feasts.",
  },
  {
    icon: Shield,
    title: "FSSAI Certified",
    desc: "100% adherence to strict food safety & hygiene standards.",
  },
  {
    icon: Users,
    title: "Professional Team",
    desc: "Trained hospitality experts, managers, & top-tier chefs.",
  },
  {
    icon: Star,
    title: "Premium Service",
    desc: "Exquisite presentation, clean setups, and warm hospitality.",
  },
];

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  } as const;

  return (
    <section id="about" className="py-20 lg:py-28 bg-cream/20 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold/5 rounded-full filter blur-3xl -z-10" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-gold/5 rounded-full filter blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Column: Premium Images Collage */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-6 relative"
          >
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border-8 border-white">
              <Image
                src="/about_catering.png"
                alt="Taste of Malabar Luxury Culinary Team"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 via-transparent to-transparent" />
            </div>

            {/* Accent gold line box */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-gold -z-10 rounded-tl-xl" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-gold -z-10 rounded-br-xl" />

            {/* Overlapping badge */}
            <div className="absolute -bottom-6 left-8 bg-charcoal text-white p-5 rounded-2xl shadow-xl flex items-center space-x-4 border border-gold/20 max-w-xs">
              <span className="font-serif text-4xl font-bold text-gold">20+</span>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-gold font-bold">Years of Trust</span>
                <span className="text-xs text-white/70 font-medium">Delivering Culinary Masterpieces</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Narrative */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Subsection header */}
            <span className="text-xs font-bold uppercase tracking-widest text-gold mb-3 block">
              Our Legacy
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-charcoal mb-6 leading-tight">
              A Legacy of Taste, <br />
              Hospitality & Excellence
            </h2>

            <div className="space-y-4 text-charcoal/80 text-base leading-relaxed mb-10">
              <p>
                <strong>Taste of Malabar Caterers & Event Management Group</strong> has been delivering exceptional catering experiences for over two decades. We started with a simple passion: to honor the rich, storied culinary tradition of the Malabar region while providing immaculate service.
              </p>
              <p>
                We specialize in authentic Malabar cuisine, grand wedding catering, corporate events, traditional Kerala Sadya, buffet services, and customized event dining solutions. From standard banquets to custom fine-dining setups, we bring the best of taste and presentation to your table.
              </p>
              <p>
                Every single event is crafted with absolute attention to detail, utilizing fresh, locally sourced ingredients, prepared under strict hygienic standards by our professional chefs, and served by a hospitality team committed to exceeding your expectations.
              </p>
            </div>

            {/* Highlights Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {highlights.map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="bg-white p-5 rounded-xl border border-gray-100 hover:border-gold/30 hover:shadow-md transition-all duration-300 flex flex-col"
                >
                  <div className="w-10 h-10 rounded-full bg-gold-light border border-gold/20 flex items-center justify-center mb-3 text-gold">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-sm font-semibold text-charcoal mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-charcoal/60 leading-normal">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
