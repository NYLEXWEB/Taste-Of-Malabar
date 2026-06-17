"use client";

import Image from "next/image";
import { Check, MessageCircle, FileText, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const trustIndicators = [
  "FSSAI Licensed",
  "Custom Menus Available",
  "Interactive Live Counters",
  "Serving Kerala & Karnataka",
];

const stats = [
  { value: "20+", label: "Years Experience" },
  { value: "500+", label: "Events Completed" },
  { value: "50k+", label: "Guests Served" },
  { value: "100%", label: "Client Satisfaction" },
];

export default function Hero() {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contact = document.querySelector("#contact");
    if (contact) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = contact.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="home" className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 bg-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-cream/30 -z-10 rounded-l-[100px] hidden lg:block" />
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-gold/5 rounded-full filter blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left z-10"
          >
            {/* Small Badge */}
            <div className="inline-flex items-center justify-center lg:justify-start space-x-2 mb-6">
              <span className="px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-gold bg-gold-light border border-gold/20">
                20+ Years of Catering Excellence
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-charcoal leading-[1.15] mb-6">
              Authentic Malabar Catering <br />
              <span className="text-gold">for Every Celebration</span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-charcoal/75 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8">
              From intimate family gatherings to grand wedding feasts, we deliver unforgettable culinary experiences with authentic flavors, professional service, and exceptional hospitality.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8 w-full sm:w-auto">
              <a
                href="#contact"
                onClick={scrollToContact}
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full text-sm font-semibold uppercase tracking-wider text-white bg-gold-gradient hover:shadow-xl hover:shadow-gold/25 hover:scale-[1.03] active:scale-95 transition-all duration-300"
              >
                Get Free Quote
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
              <a
                href="https://wa.me/916238599197?text=Hi%20Taste%20of%20Malabar,%20I%20would%20like%20to%20inquire%20about%20your%20catering%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full text-sm font-semibold uppercase tracking-wider text-charcoal bg-white border border-gray-200 hover:border-gold hover:text-gold hover:scale-[1.03] active:scale-95 transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4 mr-2 text-green-500 fill-green-500" />
                WhatsApp Us
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 gap-y-3 gap-x-4 max-w-md mx-auto lg:mx-0 border-t border-gray-100 pt-6">
              {trustIndicators.map((text, idx) => (
                <div key={idx} className="flex items-center space-x-2">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gold-light border border-gold/20 flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 text-gold" />
                  </div>
                  <span className="text-xs font-semibold tracking-wide text-charcoal/85 uppercase">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Hero Image & Stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 relative flex flex-col items-center justify-center"
          >
            {/* Image Container */}
            <div className="relative w-full aspect-[4/3] sm:aspect-[4/3] md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="/hero_catering.png"
                alt="Taste of Malabar Premium Catering Setup"
                fill
                priority
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent" />
            </div>

            {/* Floating FSSAI Badge */}
            <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-gold/30 shadow-md flex items-center space-x-1.5 z-20">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-charcoal">FSSAI Licensed</span>
            </div>
          </motion.div>
        </div>

        {/* Bottom Floating Stats Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-16 bg-white rounded-2xl shadow-xl border border-gray-100 p-8 sm:p-10"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-100">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className={`flex flex-col items-center text-center ${
                  idx > 1 ? "pt-6 md:pt-0" : idx > 0 ? "pt-0" : ""
                } ${idx === 1 ? "pt-6 sm:pt-0" : ""}`}
              >
                <span className="font-serif text-3xl sm:text-4xl font-extrabold text-gold tracking-tight mb-1">
                  {stat.value}
                </span>
                <span className="text-xs font-semibold uppercase tracking-widest text-charcoal/60">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
