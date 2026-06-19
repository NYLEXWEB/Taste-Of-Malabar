"use client";

import { useState, useEffect } from "react";
import { X, Calendar, Users, MapPin, CheckCircle, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function QuoteModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    eventType: "",
    guestCount: "",
    eventDate: "",
    location: "",
    message: "",
  });

  // Listen for the custom event to open the modal
  useEffect(() => {
    const handleOpen = () => {
      setIsOpen(true);
      setIsSubmitted(false);
      // Reset form on open
      setFormData({
        name: "",
        phone: "",
        eventType: "",
        guestCount: "",
        eventDate: "",
        location: "",
        message: "",
      });
    };

    window.addEventListener("open-quote-modal", handleOpen);
    return () => window.removeEventListener("open-quote-modal", handleOpen);
  }, []);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Format WhatsApp message
    const whatsappNumber = "916238599197";
    const eventTypeLabel = {
      wedding: "Wedding Catering 💍",
      sadya: "Traditional Sadya 🍃",
      corporate: "Corporate Event 💼",
      birthday: "Birthday Party 🎉",
      housewarming: "House Warming 🏡",
      other: "Other Celebration ✨",
    }[formData.eventType] || formData.eventType;

    const messageText = 
`*New Catering Inquiry* 🍽️
*Taste of Malabar Caterers*
----------------------------------
👤 *Name:* ${formData.name}
📞 *Phone:* ${formData.phone}
🎉 *Event Type:* ${eventTypeLabel}
👥 *Guest Count:* ${formData.guestCount} Pax
📅 *Event Date:* ${formData.eventDate}
📍 *Location:* ${formData.location}
✉️ *Special Notes:* ${formData.message || "None"}
----------------------------------
_Submitted via website Quote Request_`;

    const encodedMessage = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Show success state
    setIsSubmitted(true);

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-charcoal/60 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-lg bg-white rounded-3xl border border-neutral-200/80 shadow-2xl overflow-hidden z-10 flex flex-col max-h-[90vh]"
          >
            {/* Header */}
            <div className="p-6 border-b border-neutral-100 flex items-center justify-between bg-cream-dark">
              <div>
                <h3 className="font-serif text-xl font-bold text-charcoal flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-gold" />
                  Get a Free Quote
                </h3>
                <p className="text-xs text-neutral-500 mt-1">
                  Send details via WhatsApp for an instant custom quote
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-neutral-500 hover:text-charcoal hover:shadow-sm transition-all duration-200 cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 overflow-y-auto no-scrollbar flex-grow">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div className="flex flex-col space-y-1">
                        <label htmlFor="modal-name" className="text-[10px] font-bold uppercase tracking-wider text-neutral-600">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="modal-name"
                          name="name"
                          required
                          placeholder="e.g. Rahul Kumar"
                          value={formData.name}
                          onChange={handleChange}
                          className="px-4 py-2.5 rounded-xl border border-neutral-200 focus:border-gold focus:outline-none bg-cream-dark text-charcoal text-sm transition-colors duration-200"
                        />
                      </div>

                      {/* Phone */}
                      <div className="flex flex-col space-y-1">
                        <label htmlFor="modal-phone" className="text-[10px] font-bold uppercase tracking-wider text-neutral-600">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="modal-phone"
                          name="phone"
                          required
                          placeholder="e.g. 9876543210"
                          value={formData.phone}
                          onChange={handleChange}
                          className="px-4 py-2.5 rounded-xl border border-neutral-200 focus:border-gold focus:outline-none bg-cream-dark text-charcoal text-sm transition-colors duration-200"
                        />
                      </div>

                      {/* Event Type */}
                      <div className="flex flex-col space-y-1">
                        <label htmlFor="modal-eventType" className="text-[10px] font-bold uppercase tracking-wider text-neutral-600">
                          Event Type *
                        </label>
                        <div className="relative">
                          <select
                            id="modal-eventType"
                            name="eventType"
                            required
                            value={formData.eventType}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 focus:border-gold focus:outline-none bg-cream-dark text-charcoal text-sm appearance-none transition-colors duration-200"
                          >
                            <option value="">Select Event</option>
                            <option value="wedding">Wedding Catering</option>
                            <option value="sadya">Traditional Sadya</option>
                            <option value="corporate">Corporate Event</option>
                            <option value="birthday">Birthday Party</option>
                            <option value="housewarming">House Warming</option>
                            <option value="other">Other Celebration</option>
                          </select>
                          <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-charcoal/40 text-[10px]">▼</span>
                        </div>
                      </div>

                      {/* Guest Count */}
                      <div className="flex flex-col space-y-1">
                        <label htmlFor="modal-guestCount" className="text-[10px] font-bold uppercase tracking-wider text-neutral-600">
                          Guest Count *
                        </label>
                        <div className="relative">
                          <input
                            type="number"
                            id="modal-guestCount"
                            name="guestCount"
                            required
                            min="10"
                            placeholder="Min. 10 guests"
                            value={formData.guestCount}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 focus:border-gold focus:outline-none bg-cream-dark text-charcoal text-sm transition-colors duration-200"
                          />
                          <Users className="absolute right-4 top-1/2 -translate-y-1/2 text-charcoal/40 w-4 h-4 pointer-events-none" />
                        </div>
                      </div>

                      {/* Event Date */}
                      <div className="flex flex-col space-y-1">
                        <label htmlFor="modal-eventDate" className="text-[10px] font-bold uppercase tracking-wider text-neutral-600">
                          Event Date *
                        </label>
                        <input
                          type="date"
                          id="modal-eventDate"
                          name="eventDate"
                          required
                          value={formData.eventDate}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 focus:border-gold focus:outline-none bg-cream-dark text-charcoal/80 text-sm transition-colors duration-200"
                        />
                      </div>

                      {/* Location */}
                      <div className="flex flex-col space-y-1">
                        <label htmlFor="modal-location" className="text-[10px] font-bold uppercase tracking-wider text-neutral-600">
                          Event Location *
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            id="modal-location"
                            name="location"
                            required
                            placeholder="e.g. Kannur"
                            value={formData.location}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 focus:border-gold focus:outline-none bg-cream-dark text-charcoal text-sm transition-colors duration-200"
                          />
                          <MapPin className="absolute right-4 top-1/2 -translate-y-1/2 text-charcoal/40 w-4 h-4 pointer-events-none" />
                        </div>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="flex flex-col space-y-1">
                      <label htmlFor="modal-message" className="text-[10px] font-bold uppercase tracking-wider text-neutral-600">
                        Special Requests / Notes
                      </label>
                      <textarea
                        id="modal-message"
                        name="message"
                        rows={3}
                        placeholder="Tell us about food preferences, menu items, or any specific requests..."
                        value={formData.message}
                        onChange={handleChange}
                        className="px-4 py-2.5 rounded-xl border border-neutral-200 focus:border-gold focus:outline-none bg-cream-dark text-charcoal text-sm transition-colors duration-200 resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full py-3.5 mt-2 rounded-xl text-xs font-bold uppercase tracking-widest text-white bg-gold-gradient hover:shadow-xl hover:shadow-gold/25 hover:scale-[1.01] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4" />
                      Submit & Open WhatsApp
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center text-center py-6 space-y-5"
                  >
                    <div className="w-14 h-14 rounded-full bg-gold/10 border border-gold flex items-center justify-center text-gold shadow-md">
                      <CheckCircle className="w-7 h-7 fill-current" />
                    </div>
                    <div>
                      <h4 className="font-serif text-lg font-bold text-charcoal">Details Prepared!</h4>
                      <p className="text-xs text-neutral-500 mt-2 max-w-xs mx-auto">
                        Your inquiry details have been formatted. We have attempted to open WhatsApp Web/App to send them directly.
                      </p>
                    </div>

                    <div className="w-full bg-cream-dark p-4 rounded-xl border border-neutral-200 text-left text-xs space-y-2.5">
                      <p className="text-neutral-700">
                        If the WhatsApp window didn&apos;t open automatically, please click the button below to manually send the message:
                      </p>
                      <button
                        onClick={() => {
                          const whatsappNumber = "916238599197";
                          const eventTypeLabel = {
                            wedding: "Wedding Catering 💍",
                            sadya: "Traditional Sadya 🍃",
                            corporate: "Corporate Event 💼",
                            birthday: "Birthday Party 🎉",
                            housewarming: "House Warming 🏡",
                            other: "Other Celebration ✨",
                          }[formData.eventType] || formData.eventType;
                          const messageText = 
`*New Catering Inquiry* 🍽️
*Taste of Malabar Caterers*
----------------------------------
👤 *Name:* ${formData.name}
📞 *Phone:* ${formData.phone}
🎉 *Event Type:* ${eventTypeLabel}
👥 *Guest Count:* ${formData.guestCount} Pax
📅 *Event Date:* ${formData.eventDate}
📍 *Location:* ${formData.location}
✉️ *Special Notes:* ${formData.message || "None"}
----------------------------------
_Submitted via website Quote Request_`;
                          const encodedMessage = encodeURIComponent(messageText);
                          window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank");
                        }}
                        className="w-full py-2.5 rounded-lg text-[10px] font-bold uppercase tracking-wider bg-[#25D366] text-white hover:bg-[#20ba5a] transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        Send on WhatsApp
                      </button>
                    </div>

                    <button
                      onClick={() => setIsOpen(false)}
                      className="px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest border border-gold text-gold hover:bg-gold hover:text-white transition-all duration-300 cursor-pointer"
                    >
                      Close Window
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
