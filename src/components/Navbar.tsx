"use client";

import { useState, useEffect } from "react";
import { 
  Utensils, 
  Flame, 
  Building2, 
  Award, 
  Heart, 
  Sparkles, 
  Users, 
  Gift, 
  Phone, 
  MessageSquare, 
  MapPin, 
  Menu, 
  X, 
  ArrowRight,
  ChevronDown
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface SubNavItem {
  name: string;
  href: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface NavItem {
  name: string;
  href: string;
  dropdown: boolean;
  items?: SubNavItem[];
}

const navItems: NavItem[] = [
  { name: "Home", href: "#home", dropdown: false },
  { name: "About Us", href: "#about", dropdown: false },
  { 
    name: "Catering", 
    href: "#services", 
    dropdown: true, 
    items: [
      { name: "Traditional Sadya", href: "#services", desc: "Authentic Kerala feast served on plantain leaves.", icon: Utensils },
      { name: "Premium Malabar Buffet", href: "#services", desc: "Rich biryanis, pathiris, and traditional dishes.", icon: Award },
      { name: "Live Counter Experience", href: "#live-counters", desc: "Dosa, appam, and interactive grill chef stations.", icon: Flame },
      { name: "Corporate Dining", href: "#services", desc: "Formal layouts, custom corporate multi-cuisine spreads.", icon: Building2 }
    ] 
  },
  { 
    name: "Events", 
    href: "#services", 
    dropdown: true, 
    items: [
      { name: "Wedding Receptions", href: "#services", desc: "Grand wedding banquets with luxury culinary setups.", icon: Heart },
      { name: "Engagement Ceremonies", href: "#services", desc: "Intimate family dinners and stage celebrations.", icon: Sparkles },
      { name: "Private & Social Gatherings", href: "#services", desc: "Birthdays, anniversaries, and custom home catering.", icon: Users },
      { name: "Corporate Celebrations", href: "#services", desc: "Annual galas, product launches, and conferences.", icon: Gift }
    ] 
  },
  { name: "Gallery", href: "#gallery", dropdown: false },
  { name: "Reviews", href: "#testimonials", dropdown: false },
  { name: "Contact Us", href: "#contact", dropdown: false },
];

const faqs = [
  {
    question: "Which locations do you serve in Kerala and Karnataka?",
    answer: "Although based in Kannur & Thalassery, we offer our professional catering and event management services across all major locations including Taliparamba, Payyanur, Mattannur, Iritty, Koothuparamba, Kasaragod, Kozhikode, and Wayanad. We utilize refrigerated logistics and mobile kitchen vans to ensure food freshness at any distance."
  },
  {
    question: "Do you specialize in community-specific wedding feasts in Kannur & Thalassery?",
    answer: "Yes, we are highly experienced in catering traditional Muslim weddings (featuring our legendary dum cooked biriyanis), Hindu weddings (complete traditional Poorna Sadya with 24+ items served on banana leaves), and Christian weddings (featuring premium stews, roasts, and bread pairings)."
  },
  {
    question: "Do you provide complete event management and wedding stage decoration in Kannur & Thalassery?",
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

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);

  // Monitor scroll height to trigger morph transition
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer for Active Section Tracking (Scrollspy)
  useEffect(() => {
    const sections = ["home", "about", "services", "live-counters", "gallery", "menu", "testimonials", "contact"];
    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        {
          rootMargin: "-45% 0px -45% 0px", // Focus on viewport center
        }
      );
      observer.observe(el);
      return { el, observer };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) obs.observer.unobserve(obs.el);
      });
    };
  }, []);

  const toggleAccordion = (name: string) => {
    setMobileAccordion(mobileAccordion === name ? null : name);
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    setMobileAccordion(null);

    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    
    if (element) {
      const offset = isScrolled ? 90 : 110; // offset depending on scrolled state
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

  // Helper dynamic link styles to adapt to premium light and dark scrolled backgrounds
  const getLinkColorClass = (isItemActive: boolean, isHovered: boolean) => {
    return isItemActive ? "text-gold" : isHovered ? "text-charcoal" : "text-charcoal/80";
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none flex justify-center">
      <header
        className={`pointer-events-auto transition-all duration-500 ease-in-out ${
          isScrolled
            ? "w-[calc(100%-2rem)] mt-4 mx-4 max-w-6xl rounded-2xl md:rounded-full border border-neutral-200/85 bg-white shadow-lg py-2.5 px-6"
            : "w-full py-5 bg-transparent border-b border-transparent px-4 sm:px-6 lg:px-8"
        }`}
      >
        <div className={`mx-auto transition-all duration-500 ${isScrolled ? "w-full" : "max-w-7xl"}`}>
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <Link 
              href="#home" 
              onClick={(e) => scrollToSection(e, "#home")}
              className="flex items-center space-x-3 group select-none"
            >
              <div className="relative w-14 h-14 lg:w-16 lg:h-16 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/logo.png"
                  alt="Taste of Malabar Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="relative h-7 w-[216px] sm:h-8 sm:w-[247px] md:h-9 md:w-[278px] lg:h-10 lg:w-[309px] transition-transform duration-300">
                <Image
                  src="/name logo.png"
                  alt="Taste of Malabar"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-2">
              {navItems.map((item) => {
                if (isScrolled && item.name === "Reviews") return null;
                const isItemActive = activeSection === item.href.replace("#", "") || 
                                     !!(item.dropdown && item.items?.some(sub => activeSection === sub.href.replace("#", "")));
                const isHovered = hoveredItem === item.name;

                if (item.dropdown) {
                  return (
                    <div 
                      key={item.name} 
                      className="relative group py-2"
                      onMouseEnter={() => {
                        setHoveredItem(item.name);
                        setActiveDropdown(item.name);
                      }}
                      onMouseLeave={() => {
                        setHoveredItem(null);
                        setActiveDropdown(null);
                      }}
                    >
                      <button
                        className={`flex items-center space-x-1 px-3.5 py-1.5 rounded-full text-[13px] font-semibold transition-colors duration-300 relative z-10 ${
                          getLinkColorClass(isItemActive, isHovered)
                        }`}
                      >
                        <span>{item.name}</span>
                        <ChevronDown className="w-3 h-3 transition-transform duration-300 group-hover:rotate-180" />
                      </button>
                      
                      {hoveredItem === item.name && (
                        <motion.span
                          layoutId="nav-hover-pill"
                          className="absolute inset-0 rounded-full -z-0 border bg-charcoal/[0.05] border-charcoal/5"
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        />
                      )}

                      {/* Mega Dropdown Panel (White/Black Premium Theme) */}
                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.98 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="absolute top-full left-1/2 -translate-x-1/2 pt-4 z-50"
                          >
                            <div className="w-[480px] backdrop-blur-xl shadow-2xl rounded-2xl p-5 grid grid-cols-2 gap-4 text-left border bg-cream/95 border-charcoal/10">
                              <div className="col-span-2 pb-2 flex justify-between items-center border-b border-charcoal/5">
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold">
                                  {item.name} Specialties
                                </span>
                                <span className="text-[8px] uppercase tracking-wider font-semibold text-charcoal/40">
                                  Taste of Malabar Group
                                </span>
                              </div>
                              {item.items?.map((subItem) => {
                                const SubIcon = subItem.icon;
                                return (
                                  <a
                                    key={subItem.name}
                                    href={subItem.href}
                                    onClick={(e) => scrollToSection(e, subItem.href)}
                                    className="group/item flex items-start space-x-3 p-2.5 rounded-xl transition-all duration-200 hover:bg-charcoal/5"
                                  >
                                    <div className="w-8 h-8 rounded-lg bg-gold/10 text-gold flex items-center justify-center flex-shrink-0 group-hover/item:bg-gold group-hover/item:text-white transition-colors duration-200">
                                      <SubIcon className="w-4.5 h-4.5" />
                                    </div>
                                    <div className="flex flex-col text-left">
                                      <span className="text-[12px] font-bold group-hover/item:text-gold transition-colors duration-200 text-charcoal">
                                        {subItem.name}
                                      </span>
                                      <span className="text-[10px] leading-normal mt-0.5 font-normal text-charcoal/60">
                                        {subItem.desc}
                                      </span>
                                    </div>
                                  </a>
                                );
                              })}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <div
                    key={item.name}
                    className="relative py-2"
                    onMouseEnter={() => setHoveredItem(item.name)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <a
                      href={item.href}
                      onClick={(e) => scrollToSection(e, item.href)}
                      className={`block px-3.5 py-1.5 rounded-full text-[13px] font-semibold transition-colors duration-300 relative z-10 ${
                        getLinkColorClass(isItemActive, isHovered)
                      }`}
                    >
                      {item.name}
                    </a>
                    
                    {hoveredItem === item.name && (
                      <motion.span
                        layoutId="nav-hover-pill"
                        className="absolute inset-0 rounded-full -z-0 border bg-charcoal/[0.05] border-charcoal/5"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Quote Action CTA */}
            <div className="hidden lg:flex items-center">
              <button
                onClick={() => window.dispatchEvent(new CustomEvent("open-quote-modal"))}
                className="inline-flex items-center justify-between pl-5 pr-1.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-white bg-charcoal hover:bg-charcoal-light hover:scale-[1.03] active:scale-95 transition-all duration-300 shadow-sm cursor-pointer"
              >
                <span className="mr-3 text-[10px]">Get Free Quote</span>
                <span className="w-6.5 h-6.5 rounded-full bg-white flex items-center justify-center text-charcoal shadow-sm">
                  <ArrowRight className="w-3.5 h-3.5 text-charcoal" strokeWidth={3} />
                </span>
              </button>
            </div>

            {/* Mobile Menu Action Toggle Button */}
            <div className="flex lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 transition-colors duration-200 hover:text-gold text-charcoal"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Fullscreen Panel Drawer (White Theme) */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className={`absolute left-0 right-0 mt-3 mx-4 bg-cream/98 backdrop-blur-xl border border-charcoal/10 rounded-2xl shadow-2xl p-5 overflow-y-auto max-h-[80vh] no-scrollbar z-40 lg:hidden`}
            >
              <div className="flex flex-col space-y-1">
                {navItems.map((item, idx) => {
                  const isItemActive = activeSection === item.href.replace("#", "") || 
                                       !!(item.dropdown && item.items?.some(sub => activeSection === sub.href.replace("#", "")));
                  
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.04 }}
                      className="border-b border-charcoal/5 last:border-b-0 py-2"
                    >
                      {item.dropdown ? (
                        <div>
                          <button
                            onClick={() => toggleAccordion(item.name)}
                            className={`flex items-center justify-between w-full py-1.5 text-xs font-bold uppercase tracking-wider ${
                              isItemActive ? "text-gold" : "text-charcoal"
                            }`}
                          >
                            <span>{item.name}</span>
                            <ChevronDown
                              className={`w-3.5 h-3.5 text-gold transition-transform duration-300 ${
                                mobileAccordion === item.name ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                          
                          <AnimatePresence>
                            {mobileAccordion === item.name && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.25 }}
                                className="pl-3 mt-1.5 space-y-2.5 overflow-hidden"
                              >
                                {item.items?.map((subItem) => {
                                  const SubIcon = subItem.icon;
                                  return (
                                    <a
                                      key={subItem.name}
                                      href={subItem.href}
                                      onClick={(e) => scrollToSection(e, subItem.href)}
                                      className="flex items-center space-x-3 py-1.5 text-charcoal/70 hover:text-gold"
                                    >
                                      <div className="w-7 h-7 rounded-lg bg-gold/10 text-gold flex items-center justify-center flex-shrink-0">
                                        <SubIcon className="w-3.5 h-3.5" />
                                      </div>
                                      <div className="flex flex-col text-left">
                                        <span className="text-[11px] font-bold text-charcoal">{subItem.name}</span>
                                        <span className="text-[9px] text-charcoal/40 leading-tight mt-0.5">{subItem.desc}</span>
                                      </div>
                                    </a>
                                  );
                                })}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <a
                          href={item.href}
                          onClick={(e) => scrollToSection(e, item.href)}
                          className={`block py-1.5 text-xs font-bold uppercase tracking-wider ${
                            isItemActive
                              ? "text-gold"
                              : "text-charcoal/80 hover:text-gold"
                          }`}
                        >
                          {item.name}
                        </a>
                      )}
                    </motion.div>
                  );
                })}

                {/* Mobile FAQ Link / Accordion */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.04 }}
                  className="border-b border-charcoal/5 last:border-b-0 py-2"
                >
                  <div>
                    <button
                      onClick={() => toggleAccordion("FAQ")}
                      className="flex items-center justify-between w-full py-1.5 text-xs font-bold uppercase tracking-wider text-charcoal hover:text-gold"
                    >
                      <span>FAQ</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 text-gold transition-transform duration-300 ${
                          mobileAccordion === "FAQ" ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    
                    <AnimatePresence>
                      {mobileAccordion === "FAQ" && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25 }}
                          className="pl-3 mt-2 space-y-3 overflow-hidden"
                        >
                          {faqs.map((faq, index) => (
                            <div key={index} className="text-left border-l-2 border-gold/30 pl-3.5 py-1">
                              <span className="text-[10px] font-bold text-charcoal block mb-1">
                                {faq.question}
                              </span>
                              <span className="text-[9px] text-charcoal/60 leading-normal block">
                                {faq.answer}
                              </span>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
                
                {/* Bottom Quick Contact Section */}
                <div className="pt-5 mt-3 border-t border-charcoal/10 space-y-3.5">
                  <div className="grid grid-cols-2 gap-3">
                    <a
                      href="tel:6238599197"
                      className="flex items-center justify-center gap-2 py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-wider text-charcoal bg-charcoal/5 border border-charcoal/10 hover:border-gold/35 transition-all duration-300"
                    >
                      <Phone className="w-3.5 h-3.5 text-gold" />
                      <span>Call Now</span>
                    </a>
                    <a
                      href="https://wa.me/916238599197"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-wider text-[#25D366] bg-[#25D366]/10 border border-[#25D366]/20 hover:bg-[#25D366]/20 transition-all duration-300"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                      <span>WhatsApp</span>
                    </a>
                  </div>

                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      window.dispatchEvent(new CustomEvent("open-quote-modal"));
                    }}
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest text-white bg-charcoal hover:bg-charcoal-light transition-all duration-300 shadow-md shadow-charcoal/15 cursor-pointer"
                  >
                    <span>Get Free Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center justify-center gap-2 text-[8px] text-charcoal/40 uppercase tracking-widest pt-1.5 font-bold">
                    <MapPin className="w-3 h-3 text-gold" />
                    <span>Kannur & Thalassery, Kerala • Serving South India</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
}
