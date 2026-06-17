"use client";

import Link from "next/link";
import { 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck,
  ArrowRight
} from "lucide-react";


const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Featured Menu", href: "#menu" },
  { name: "Live Stations", href: "#live-counters" },
];

const services = [
  { name: "Wedding Catering", href: "#services" },
  { name: "Traditional Kerala Sadya", href: "#services" },
  { name: "Corporate Banquets", href: "#services" },
  { name: "Live Food Stations", href: "#live-counters" },
  { name: "Islamic Buffet feasts", href: "#services" },
];

export default function Footer() {
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
    <footer className="bg-charcoal text-white pt-20 pb-8 border-t border-white/5 relative overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold/5 rounded-full filter blur-[150px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/5">
          
          {/* Column 1: Logo & description */}
          <div className="lg:col-span-4 flex flex-col space-y-6">
            <Link href="#home" className="flex items-center space-x-3 group">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-full border border-gold/30 bg-white/5">
                <svg
                  className="w-5 h-5 text-gold"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.905 0-5.64-.78-8-2.14"
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-white group-hover:text-gold transition-colors duration-300">
                  TASTE OF MALABAR
                </span>
                <span className="text-[9px] uppercase tracking-widest text-gold font-medium -mt-1">
                  Caterers & Event Management
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-sm">
              Authentic Malabar flavors and premium catering hospitality services. Crafted with attention to detail and served with absolute culinary passion.
            </p>

            {/* License indicators */}
            <div className="flex items-center space-x-2 text-gold">
              <ShieldCheck className="w-5 h-5 text-gold stroke-[1.5]" />
              <span className="text-xs uppercase tracking-widest font-bold">FSSAI Licensed Caterers</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 flex flex-col space-y-5">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider border-l-2 border-gold pl-3">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-xs sm:text-sm text-gray-400 hover:text-gold transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-3 h-3 text-gold/0 group-hover:text-gold group-hover:translate-x-1 transition-all duration-200" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="lg:col-span-3 flex flex-col space-y-5">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider border-l-2 border-gold pl-3">
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    onClick={(e) => scrollToSection(e, service.href)}
                    className="text-xs sm:text-sm text-gray-400 hover:text-gold transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-3 h-3 text-gold/0 group-hover:text-gold group-hover:translate-x-1 transition-all duration-200" />
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact details */}
          <div className="lg:col-span-3 flex flex-col space-y-5">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider border-l-2 border-gold pl-3">
              Contact Details
            </h4>
            <ul className="space-y-4 text-xs sm:text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <span>Manjapalam, Kannur, Kerala - 670001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                <a href="tel:6238599197" className="hover:text-gold transition-colors duration-200">+91 6238 599 197</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                <a href="mailto:tasteofmalabarkannur@gmail.com" className="hover:text-gold transition-colors duration-200">tasteofmalabarkannur@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 space-y-4 sm:space-y-0">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Taste of Malabar Caterers & Event Management Group. All rights reserved.
          </p>
          
          {/* Social icons */}
          <div className="flex items-center space-x-5">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/5 border border-white/10 hover:border-gold hover:text-gold flex items-center justify-center text-gray-400 transition-colors duration-200"
              aria-label="Facebook"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/5 border border-white/10 hover:border-gold hover:text-gold flex items-center justify-center text-gray-400 transition-colors duration-200"
              aria-label="Instagram"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/5 border border-white/10 hover:border-gold hover:text-gold flex items-center justify-center text-gray-400 transition-colors duration-200"
              aria-label="YouTube"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.516 0-9.387.507a3.003 3.003 0 00-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 002.11 2.11c1.871.507 9.387.507 9.387.507s7.517 0 9.387-.507a3.003 3.003 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
