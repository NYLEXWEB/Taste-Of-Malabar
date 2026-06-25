"use client";

import { motion } from "framer-motion";

const directoryGroups = [
  {
    title: "Catering Specialties",
    tags: [
      { name: "Wedding catering Kannur", href: "#contact" },
      { name: "Birthday party catering Kannur", href: "#contact" },
      { name: "Corporate catering Kannur", href: "#contact" },
      { name: "Reception catering Kannur", href: "#contact" },
      { name: "Engagement function catering Kannur", href: "#contact" },
      { name: "Sadya catering Kannur", href: "#contact" },
      { name: "Onam sadya catering Kannur", href: "#contact" },
      { name: "Muslim wedding catering Kannur", href: "#contact" },
      { name: "Hindu wedding catering Kannur", href: "#contact" },
      { name: "Veg catering Kannur", href: "#contact" },
      { name: "Non-veg catering Kannur", href: "#contact" },
      { name: "Kerala style catering Kannur", href: "#contact" }
    ]
  },
  {
    title: "Service Areas & Locations",
    tags: [
      { name: "Catering services in Kannur", href: "#why-choose-us" },
      { name: "Catering company Kannur", href: "#why-choose-us" },
      { name: "Best catering in Kannur", href: "#why-choose-us" },
      { name: "Catering Kannur Kerala", href: "#why-choose-us" },
      { name: "Catering services in Thalassery", href: "#why-choose-us" },
      { name: "Catering in Payyanur", href: "#why-choose-us" },
      { name: "Catering Taliparamba", href: "#why-choose-us" },
      { name: "Catering Iritty", href: "#why-choose-us" },
      { name: "Catering Mattannur", href: "#why-choose-us" },
      { name: "Catering Kuthuparamba", href: "#why-choose-us" },
      { name: "Catering Payyambalam", href: "#why-choose-us" },
      { name: "Catering Sreekandapuram", href: "#why-choose-us" },
      { name: "North Kerala catering services", href: "#why-choose-us" }
    ]
  },
  {
    title: "Packages & Intent Searches",
    tags: [
      { name: "Cheap catering services in Kannur", href: "#contact" },
      { name: "Affordable catering Kannur", href: "#contact" },
      { name: "Low cost catering Kannur", href: "#contact" },
      { name: "Budget catering Kannur", href: "#contact" },
      { name: "Catering at low price Kannur", href: "#contact" },
      { name: "Economical catering services Kannur", href: "#contact" },
      { name: "Best price catering Kannur", href: "#contact" },
      { name: "Catering within budget Kannur", href: "#contact" },
      { name: "Low budget wedding catering Kannur", href: "#contact" },
      { name: "Reasonable catering Kannur", href: "#contact" },
      { name: "Home catering Kannur", href: "#contact" },
      { name: "Bulk food catering Kannur", href: "#contact" },
      { name: "Catering with serving staff Kannur", href: "#contact" },
      { name: "Online catering booking Kannur", href: "#contact" }
    ]
  },
  {
    title: "Popular Cooking Queries",
    tags: [
      { name: "Best catering service near Kannur", href: "#faq" },
      { name: "Catering for 500 people in Kannur", href: "#faq" },
      { name: "Cheap wedding catering in Kannur", href: "#faq" },
      { name: "Catering services near me Kannur", href: "#faq" },
      { name: "Traditional Kerala catering Kannur", href: "#faq" }
    ]
  }
];

export default function SeoDirectory() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="bg-charcoal text-white py-12 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="mb-8">
          <span className="text-[10px] font-bold uppercase tracking-widest text-gold mb-2 block">
            Catering Index
          </span>
          <h4 className="font-serif text-lg font-bold text-white uppercase tracking-wider">
            Popular Catering Searches & Locations
          </h4>
          <div className="w-12 h-[1px] bg-gold/30 mt-2" />
        </div>

        {/* Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {directoryGroups.map((group, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="space-y-3"
            >
              <h5 className="text-[11px] uppercase tracking-wider font-extrabold text-gold">
                {group.title}
              </h5>
              <div className="flex flex-wrap gap-x-2 gap-y-1 text-xs text-gray-400 leading-relaxed">
                {group.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="inline-flex items-center">
                    <a
                      href={tag.href}
                      onClick={(e) => scrollToSection(e, tag.href)}
                      className="hover:text-gold transition-colors duration-250 font-medium"
                    >
                      {tag.name}
                    </a>
                    {tIdx < group.tags.length - 1 && (
                      <span className="text-gray-600 ml-2 select-none">•</span>
                    )}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
