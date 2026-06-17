"use client";

import { MapPin, Plane, Truck, Compass } from "lucide-react";
import { motion } from "framer-motion";

const regions = [
  { name: "Kannur", desc: "Our Head Office. Full operations including banquets and live counters.", status: "Primary Base" },
  { name: "Kozhikode", desc: "Frequent wedding banquets, buffet events, and premium corporate lunches.", status: "Active Area" },
  { name: "Kasaragod", desc: "Specialty Malabar buffet setups and wedding catering services.", status: "Active Area" },
  { name: "Wayanad", desc: "Destination wedding catering and luxury resort events.", status: "Active Area" },
  { name: "Malappuram", desc: "Grand Islamic weddings, traditional dum biriyani banquets.", status: "Active Area" },
  { name: "Palakkad", desc: "Premium Kerala Sadya banquets and corporate events.", status: "Active Area" },
  { name: "Thrissur", desc: "Traditional wedding banquets and grand multi-tier buffet service.", status: "Active Area" },
  { name: "Kochi", desc: "High-end luxury corporate gatherings and metropolitan receptions.", status: "Active Area" },
  { name: "Karnataka", desc: "Serving key border regions, Mangalore, and Bangalore events.", status: "Interstate Service" },
];

export default function ServiceAreas() {
  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Decorative background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#C8A04D05_1px,transparent_1px),linear-gradient(to_bottom,#C8A04D05_1px,transparent_1px)] bg-[size:4rem_4rem] -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full filter blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Map Details & Transport Info */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-gold mb-3 block">
              Our Coverage
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-charcoal mb-6 leading-tight">
              Serving Kerala <br />
              <span className="text-gold">& Karnataka</span>
            </h2>
            <div className="w-16 h-[2px] bg-gold mb-6" />
            <p className="text-sm sm:text-base text-charcoal/70 leading-relaxed mb-8">
              Distance is never a barrier to exceptional taste. Taste of Malabar Caterers travels to your venue equipped with state-of-the-art mobile kitchen systems, temperature-controlled logistics, and a fully prepared operations team.
            </p>

            {/* Transport Logistics Info Card */}
            <div className="bg-cream/40 p-6 rounded-2xl border border-gold/15 space-y-4">
              <h3 className="font-serif text-sm font-bold text-charcoal flex items-center gap-2">
                <Truck className="w-4 h-4 text-gold" />
                Mobile Kitchen & Cold-Chain Transit
              </h3>
              <p className="text-xs text-charcoal/65 leading-relaxed">
                We transport all ingredients in modern, refrigerated food-grade containers. For long-distance events, our specialized mobile kitchen vans ensure all frying, baking, and live preparation are done right on-site for peak flavor and hygiene.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Stylized Pin Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {regions.map((region, idx) => (
              <div
                key={idx}
                className="bg-white p-5 rounded-2xl border border-gray-100 hover:border-gold/30 hover:shadow-md hover:shadow-gold/5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-flex items-center justify-center p-2 rounded-lg bg-gold-light text-gold">
                      <MapPin className="w-4 h-4" />
                    </span>
                    <span className="text-[9px] uppercase tracking-widest font-bold text-gold bg-gold-light/40 px-2 py-0.5 rounded-full border border-gold/10">
                      {region.status}
                    </span>
                  </div>
                  <h4 className="font-serif text-base font-bold text-charcoal mb-1">
                    {region.name}
                  </h4>
                  <p className="text-xs text-charcoal/60 leading-relaxed">
                    {region.desc}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
