"use client";

import Image from "next/image";
import { Award, Shield, Users, Star } from "lucide-react";
import { motion } from "framer-motion";
import FloatingStats from "./FloatingStats";

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
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  } as const;

  return (
    <section id="about" className="pt-0 pb-24 lg:pb-36 bg-cream relative">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold/5 rounded-full filter blur-3xl -z-10" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-gold/5 rounded-full filter blur-3xl -z-10" />

      {/* Minimalist Palm Leaf Vector Silhouette (Kerala Themed) */}
      <svg 
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[350px] h-[350px] opacity-[0.05] pointer-events-none text-gold select-none" 
        viewBox="0 0 100 100" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="0.5"
      >
        <path d="M 10 90 C 20 80 40 75 90 70" />
        <path d="M 30 78 C 30 70 32 60 35 55" />
        <path d="M 40 76 C 42 66 45 56 50 50" />
        <path d="M 50 74 C 54 64 58 54 65 48" />
        <path d="M 60 73 C 65 63 70 53 78 48" />
        <path d="M 70 72 C 76 62 82 52 90 48" />
        <path d="M 80 71 C 86 61 92 51 98 48" />
      </svg>

      {/* Stats Card */}
      <FloatingStats />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 lg:pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Column: Premium Images Collage */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-6 relative"
          >
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border-8 border-cream-dark">
              <Image
                src="/about_catering.png"
                alt="Taste of Malabar Luxury Culinary Team"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/10 via-transparent to-transparent" />
            </div>

            {/* Accent gold line box */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-gold -z-10 rounded-tl-xl" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-gold -z-10 rounded-br-xl" />

            {/* Overlapping badge */}
            <div className="absolute -bottom-6 left-8 bg-white text-charcoal p-5 rounded-2xl shadow-xl flex items-center space-x-4 border border-neutral-200/80 max-w-xs">
              <span className="font-serif text-4xl font-bold text-gold">20+</span>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-gold font-bold">Years of Trust</span>
                <span className="text-xs text-neutral-600 font-medium">Delivering Culinary Masterpieces</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Narrative */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Subsection header */}
            <span className="font-serif italic text-gold text-2xl font-normal block mb-2">
              Heritage of Taste
            </span>
            <span className="text-xs font-bold uppercase tracking-widest text-gold/60 mb-3 block">
              Our Legacy
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-charcoal mb-6 leading-tight">
              A Legacy of Taste, <br />
              Hospitality & Excellence
            </h2>

            <div className="space-y-4 text-neutral-600 text-sm sm:text-base leading-relaxed mb-10">
              <p>
                <strong>Taste of Malabar Caterers & Event Management Group</strong> is a trusted catering company based in Kannur, Kerala, dedicated to delivering authentic flavors, exceptional hospitality, and memorable dining experiences for every occasion. With over 20 years of experience in the catering and hospitality industry, we have proudly served countless weddings, receptions, corporate events, family gatherings, and special celebrations.
              </p>
              <p>
                As an FSSAI-licensed catering service, we maintain high standards of food safety, hygiene, and quality in every aspect of our operations. From sourcing fresh ingredients to food preparation and service, our commitment to excellence ensures that every dish meets the highest standards.
              </p>
              <p>
                Our philosophy goes beyond serving food. We believe that great catering is about creating experiences, bringing people together, and making celebrations truly memorable. Combining traditional Malabar flavors with professional event execution, we offer customized menus and personalized service tailored to the unique needs of each client.
              </p>
              <p>
                Over the years, our dedication to quality, reliability, and customer satisfaction has earned the trust of families, businesses, and event organizers across Kerala. Every event we undertake is managed with care, attention to detail, and a passion for exceeding expectations.
              </p>
              <p>
                Whether it is an intimate family gathering or a grand wedding celebration, Taste of Malabar is committed to making every occasion special through outstanding cuisine, professional service, and genuine hospitality.
              </p>
              <p className="text-xs font-bold text-gold pt-2 uppercase tracking-wide border-t border-neutral-200">
                20+ Years of Experience • FSSAI Licensed • Authentic Malabar Flavors • Professional Catering Excellence
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
                  className="bg-white p-5 rounded-xl border border-neutral-200/80 hover:border-gold/30 hover:shadow-md transition-all duration-300 flex flex-col"
                >
                  <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center mb-3 text-gold">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-sm font-semibold text-charcoal mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-500 leading-normal">
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
