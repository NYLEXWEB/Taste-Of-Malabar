"use client";

import { useState } from "react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  CheckCircle,
  Calendar,
  Users,
  MapPin as MapIcon,
  Tag,
  Clock
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [loadMap, setLoadMap] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    eventType: "",
    guestCount: "",
    eventDate: "",
    location: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API Submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        phone: "",
        eventType: "",
        guestCount: "",
        eventDate: "",
        location: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 lg:py-36 bg-[#0A0A0A] relative overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold/5 rounded-full filter blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full filter blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-10"
          >
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-gold mb-3 block">
                Get In Touch
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
                Plan Your Feast
              </h2>
              <div className="w-16 h-[2px] bg-gold mb-6" />
              <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                Connect with our planning consultants. Let us help you craft a premium menu that perfectly complements the scale and sentiment of your celebration.
              </p>
            </div>

            {/* Info Cards */}
            <div className="space-y-6">
              {/* Phone */}
              <a
                href="tel:6238599197"
                className="flex items-start gap-4 p-5 rounded-2xl bg-[#121212] border border-white/5 hover:border-gold/30 hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-all duration-300">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-serif text-xs font-bold text-white/60 uppercase tracking-wider mb-1">Call Booking Team</h4>
                  <p className="text-base font-bold text-white tracking-wide">+91 6238 599 197</p>
                  <p className="text-[10px] text-white/50 mt-0.5">Available daily: 9:00 AM - 9:00 PM</p>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/916238599197?text=Hi%20Taste%20of%20Malabar,%20I'd%20like%20to%20discuss%20catering%20packages."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-5 rounded-2xl bg-[#121212] border border-white/5 hover:border-gold/30 hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-full bg-green-50/10 border border-green-500/20 flex items-center justify-center text-green-500 group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                  <MessageCircle className="w-4 h-4 fill-current" />
                </div>
                <div>
                  <h4 className="font-serif text-xs font-bold text-white/60 uppercase tracking-wider mb-1">WhatsApp Chat</h4>
                  <p className="text-base font-bold text-white tracking-wide">+91 6238 599 197</p>
                  <p className="text-[10px] text-green-500 font-semibold mt-0.5">Instant Consultation Available</p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:tasteofmalabarkannur@gmail.com"
                className="flex items-start gap-4 p-5 rounded-2xl bg-[#121212] border border-white/5 hover:border-gold/30 hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-all duration-300">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-serif text-xs font-bold text-white/60 uppercase tracking-wider mb-1">Email Inquiries</h4>
                  <p className="text-sm font-bold text-white">tasteofmalabarkannur@gmail.com</p>
                  <p className="text-[10px] text-white/50 mt-0.5">Get proposal within 24 hours</p>
                </div>
              </a>

              {/* Address */}
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#121212] border border-white/5">
                <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center text-gold">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-serif text-xs font-bold text-white/60 uppercase tracking-wider mb-1">Office Address</h4>
                  <p className="text-sm font-bold text-white">Manjapalam, Kannur, Kerala - 670001</p>
                  <p className="text-[10px] text-white/50 mt-0.5">Corporate & Booking Office</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Inquiry Form */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 bg-[#121212] rounded-3xl border border-white/10 p-8 sm:p-10 shadow-2xl"
          >
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  <div className="text-center sm:text-left mb-6">
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-white">Request a Free Proposal</h3>
                    <p className="text-xs text-white/60 mt-1">Fill out the details below and we will contact you shortly.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div className="flex flex-col space-y-1.5">
                      <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-white/70">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        className="px-4 py-3 rounded-xl border border-white/10 focus:border-gold focus:outline-none bg-[#1A1A1A] text-white text-sm transition-colors duration-200"
                      />
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col space-y-1.5">
                      <label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-white/70">Phone Number *</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        placeholder="6238 599 197"
                        value={formData.phone}
                        onChange={handleChange}
                        className="px-4 py-3 rounded-xl border border-white/10 focus:border-gold focus:outline-none bg-[#1A1A1A] text-white text-sm transition-colors duration-200"
                      />
                    </div>

                    {/* Event Type */}
                    <div className="flex flex-col space-y-1.5">
                      <label htmlFor="eventType" className="text-xs font-bold uppercase tracking-wider text-white/70">Event Type *</label>
                      <div className="relative">
                        <select
                          id="eventType"
                          name="eventType"
                          required
                          value={formData.eventType}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-white/10 focus:border-gold focus:outline-none bg-[#1A1A1A] text-white text-sm appearance-none transition-colors duration-200"
                        >
                          <option value="">Select Event</option>
                          <option value="wedding">Wedding Catering</option>
                          <option value="sadya">Traditional Sadya</option>
                          <option value="corporate">Corporate Event</option>
                          <option value="birthday">Birthday Party</option>
                          <option value="other">Other Celebration</option>
                        </select>
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/40 text-xs">▼</span>
                      </div>
                    </div>

                    {/* Guest Count */}
                    <div className="flex flex-col space-y-1.5">
                      <label htmlFor="guestCount" className="text-xs font-bold uppercase tracking-wider text-white/70">Guest Count *</label>
                      <div className="relative">
                        <input
                          type="number"
                          id="guestCount"
                          name="guestCount"
                          required
                          min="10"
                          placeholder="e.g. 250"
                          value={formData.guestCount}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-white/10 focus:border-gold focus:outline-none bg-[#1A1A1A] text-white text-sm transition-colors duration-200"
                        />
                        <Users className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 w-4 h-4 pointer-events-none" />
                      </div>
                    </div>

                    {/* Event Date */}
                    <div className="flex flex-col space-y-1.5">
                      <label htmlFor="eventDate" className="text-xs font-bold uppercase tracking-wider text-white/70">Event Date *</label>
                      <div className="relative">
                        <input
                          type="date"
                          id="eventDate"
                          name="eventDate"
                          required
                          value={formData.eventDate}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-white/10 focus:border-gold focus:outline-none bg-[#1A1A1A] text-white/80 text-sm transition-colors duration-200"
                        />
                      </div>
                    </div>

                    {/* Location */}
                    <div className="flex flex-col space-y-1.5">
                      <label htmlFor="location" className="text-xs font-bold uppercase tracking-wider text-white/70">Event Location *</label>
                      <div className="relative">
                        <input
                          type="text"
                          id="location"
                          name="location"
                          required
                          placeholder="e.g. Kozhikode"
                          value={formData.location}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-white/10 focus:border-gold focus:outline-none bg-[#1A1A1A] text-white text-sm transition-colors duration-200"
                        />
                        <MapIcon className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 w-4 h-4 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col space-y-1.5">
                    <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-white/70">Message & Special Requests</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Share details about menu choices, live counter requests, or layout preferences..."
                      value={formData.message}
                      onChange={handleChange}
                      className="px-4 py-3 rounded-xl border border-white/10 focus:border-gold focus:outline-none bg-[#1A1A1A] text-white text-sm transition-colors duration-200 resize-none"
                    />
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-full text-xs font-semibold uppercase tracking-widest text-white bg-gold-gradient hover:shadow-xl hover:shadow-gold/25 hover:scale-[1.01] active:scale-95 transition-all duration-300 disabled:opacity-75 disabled:pointer-events-none"
                  >
                    {isSubmitting ? "Processing Inquiry..." : "Request Quote"}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-12 space-y-6"
                >
                  <div className="w-16 h-16 rounded-full bg-gold/10 border border-gold flex items-center justify-center text-gold shadow-md">
                    <CheckCircle className="w-8 h-8 fill-current" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-white">Proposal Request Sent</h3>
                    <p className="text-sm text-white/65 mt-2 max-w-sm mx-auto">
                      Thank you for choosing Taste of Malabar. Your catering inquiry has been successfully registered in our system.
                    </p>
                  </div>
                  <div className="w-full max-w-sm bg-[#1A1A1A] p-5 rounded-2xl border border-white/5 text-left text-xs space-y-3">
                    <p className="text-white/80 flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-gold" />
                      Our consultant will contact you within <strong>2 hours</strong>.
                    </p>
                    <p className="text-white/80">
                      We will prepare a customized preliminary menu proposal based on your guest count and event location.
                    </p>
                  </div>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest border border-gold text-gold hover:bg-gold hover:text-white transition-all duration-300"
                  >
                    Submit Another Inquiry
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Full-width Responsive Google Map Embed */}
        {!loadMap ? (
          /* Map Facade (Placeholder Layout) */
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => setLoadMap(true)}
            className="mt-20 w-full aspect-[21/9] min-h-[300px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative bg-[#121212] cursor-pointer group flex flex-col items-center justify-center select-none"
          >
            {/* Background pattern grid */}
            <div className="absolute inset-0 bg-[#161616]/40 opacity-40 group-hover:opacity-60 transition-opacity duration-300 bg-[linear-gradient(to_right,#C8A04D05_1px,transparent_1px),linear-gradient(to_bottom,#C8A04D05_1px,transparent_1px)] bg-[size:3rem_3rem]" />
            
            <div className="relative z-10 flex flex-col items-center text-center p-6 space-y-4">
              <div className="w-14 h-14 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center text-gold shadow-lg shadow-gold/5 group-hover:scale-105 transition-transform duration-300">
                <MapIcon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-white">Interactive Location Map</h3>
                <p className="text-xs text-white/50 mt-1 max-w-xs">Click to load the interactive Google Map for our Kannur office.</p>
              </div>
              <button className="px-5 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest bg-gold text-white hover:bg-gold-hover transition-colors duration-200">
                Load Interactive Map
              </button>
            </div>
          </motion.div>
        ) : (
          /* Real Google Map iframe */
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-20 w-full aspect-[21/9] min-h-[300px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative bg-[#121212]"
          >
            <iframe
              src="https://maps.google.com/maps?q=Taste%20of%20Malabar%20Caterers,%20Manjapalam,%20Kannur,%20Kerala&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full grayscale invert-[0.9] opacity-70 contrast-125 hover:opacity-95 transition-all duration-300"
            ></iframe>
          </motion.div>
        )}
      </div>
    </section>
  );
}
