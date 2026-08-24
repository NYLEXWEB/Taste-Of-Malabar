"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Which locations do you serve in Kerala and Karnataka?",
    answer: "Although based in Kannur & Thalassery, we offer our professional catering and event management services across all major locations including Taliparamba, Payyanur, Mattannur, Iritty, Koothuparamba, Kasaragod, Kozhikode, and Wayanad. We utilize refrigerated logistics and mobile kitchen vans to ensure food freshness at any distance."
  },
  {
    question: "Do you specialize in community-specific wedding feasts in Kannur?",
    answer: "Yes, we are highly experienced in catering traditional Muslim weddings (featuring our legendary dum cooked biriyanis), Hindu weddings (complete traditional Poorna Sadya with 24+ items served on banana leaves), and Christian weddings (featuring premium stews, roasts, and bread pairings)."
  },
  {
    question: "Do you provide complete event management and wedding stage decoration in Kannur?",
    answer: "Yes, Taste of Malabar is a full-service event management company. Beyond food catering, we handle wedding planning, venue selection, stage decoration, photography coordination, light and sound systems, and total guest hosting services."
  },
  {
    question: "Do you provide live cooking counters for outdoor catering?",
    answer: "Absolutely! Live interactive counters are our specialty. We provide live counters for Thalassery breads (Appam, Parotta, Surka), tandoori grills, live fish/prawn frying, fresh mocktails, hot live samovar tea counters, and custom dessert stations like chocolate fountains."
  },
  {
    question: "What is your food safety policy and FSSAI licensing?",
    answer: "Taste of Malabar is a fully FSSAI-licensed catering service. We enforce strict hygiene and safety codes in all our centralized prep kitchens. Our staff wear protective gear, undergo regular safety audits, and we source all fresh ingredients only from certified quality vendors."
  },
  {
    question: "What is the minimum guest size and booking period?",
    answer: "Our minimum catering size starts at 50 guests for home functions (like housewarmings and birthdays), and we can seamlessly manage massive wedding banquets for up to 5,000+ guests. We recommend booking 3 to 6 months in advance during the peak wedding season in Kerala."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-10 lg:py-14 bg-cream-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-gold mb-3 block">
            Common Inquiries
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-charcoal mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-16 h-[2px] bg-gold/20 mx-auto mb-6 relative overflow-hidden">
            <motion.div
              initial={{ left: "-100%" }}
              whileInView={{ left: "0%" }}
              viewport={{ once: true, margin: "200px 0px 100px 0px" }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="absolute inset-0 bg-gold"
            />
          </div>
          <p className="text-base text-neutral-600">
            Have questions about planning your event&apos;s catering? Read our quick guide below or reach out to our team directly.
          </p>
        </div>

        {/* Accordion List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-neutral-200/80 shadow-sm hover:border-gold/30 transition-all duration-300 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-4 sm:p-6 text-left focus:outline-none"
                >
                  <span className="font-serif text-sm sm:text-base font-bold text-charcoal pr-4">
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
                      <div className="px-4 pb-4 sm:px-6 sm:pb-6 pt-0 border-t border-neutral-100">
                        <p className="text-xs sm:text-sm text-neutral-650 leading-relaxed mt-3">
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
