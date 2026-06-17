"use client";

import { useState } from "react";
import { ChevronDown, Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Do you provide customized menus?",
    answer: "Absolutely. We pride ourselves on creating bespoke menus tailored to your event theme, guest preferences, dietary requirements, and budget. Our executive chefs work closely with you to design the perfect culinary flow."
  },
  {
    question: "What is the minimum guest requirement?",
    answer: "Our premium catering services are designed for events of various scales. Typically, our minimum guest requirement is 50 guests for small home events, and we regularly manage grand wedding feasts for up to 5,000+ guests with the same level of excellence."
  },
  {
    question: "Do you provide live counters?",
    answer: "Yes, live interactive counters are one of our core specialties. We offer live stations for Malabar breads (Parotta, Pathiri), tandoori grills, live fish/seafood frying, dosa counters, fresh mocktails, and interactive dessert bars."
  },
  {
    question: "Do you serve outside Kannur?",
    answer: "Yes, we serve clients across all districts of Kerala (including Kozhikode, Kochi, Kasaragod, Wayanad, Thrissur, etc.) and major regions of Karnataka. We operate specialized refrigerated transport vehicles and mobile kitchen vans to keep ingredients fresh on long-distance transits."
  },
  {
    question: "Are you FSSAI licensed?",
    answer: "Yes, Taste of Malabar is fully FSSAI Licensed. We maintain strict safety and hygiene standards. Our staff undergo regular safety training, and all ingredients are sourced from certified premium vendors to ensure maximum quality and hygiene."
  },
  {
    question: "How early should we book?",
    answer: "To ensure date availability and detailed menu planning, we recommend booking our services 3 to 6 months in advance, especially during the wedding and festive seasons in Kerala and Karnataka."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 lg:py-36 bg-[#121212] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-gold mb-3 block">
            Common Inquiries
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-16 h-[2px] bg-gold mx-auto mb-6" />
          <p className="text-base text-white/70">
            Have questions about planning your event's catering? Read our quick guide below or reach out to our team directly.
          </p>
        </div>

        {/* Accordion List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-[#1A1A1A] rounded-2xl border border-white/5 shadow-sm hover:border-gold/30 transition-all duration-300 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className="font-serif text-sm sm:text-base font-bold text-white pr-4">
                    {faq.question}
                  </span>
                  <span className={`flex-shrink-0 w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center text-gold transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-0 border-t border-white/5">
                        <p className="text-xs sm:text-sm text-white/70 leading-relaxed mt-4">
                          {faq.answer}
                        </p>
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
