"use client";

import { useState } from "react";
import { Truck } from "lucide-react";

const pins = [
  { name: "Kasaragod" },
  { name: "Kannur & Thalassery" },
  { name: "Kozhikode" },
  { name: "Wayanad" },
  { name: "Payyanur & Taliparamba" },
  { name: "Mattannur & Iritty" },
  { name: "Koothuparamba" },
];

export default function ServiceAreas() {
  const [activePin, setActivePin] = useState<number | null>(null);

  return (
    <section className="py-10 lg:py-12 bg-cream relative overflow-hidden">
      {/* Decorative background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#B07D4F05_1px,transparent_1px),linear-gradient(to_bottom,#B07D4F05_1px,transparent_1px)] bg-[size:4rem_4rem] -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full filter blur-3xl -z-10" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
        <span className="text-xs font-bold uppercase tracking-widest text-gold mb-3 block">
          Our Coverage
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-charcoal mb-6 leading-tight">
          Kannur & Thalassery Based <br />
          <span className="text-gold">Serving All Over Kerala</span>
        </h2>
        <div className="w-16 h-[2px] bg-gold mb-6" />
        <p className="text-sm sm:text-base text-neutral-600 leading-relaxed mb-8 max-w-2xl">
          Based in Kannur & Thalassery, distance is never a barrier to exceptional taste. Taste of Malabar Caterers travels directly to your venue across Kerala & Karnataka—including Taliparamba, Payyanur, Mattannur, Iritty, Koothuparamba, Kasaragod, Kozhikode, and Wayanad. We are fully equipped with state-of-the-art mobile kitchen systems, temperature-controlled transit logistics, and a professional event management team.
        </p>

        {/* Transport Logistics Info Card */}
        <div className="bg-white p-6 rounded-2xl border border-neutral-200/80 space-y-4 shadow-sm max-w-xl text-left">
          <h3 className="font-serif text-sm font-bold text-charcoal flex items-center gap-2">
            <Truck className="w-4 h-4 text-gold" />
            Mobile Kitchen & Cold-Chain Transit
          </h3>
          <p className="text-xs text-neutral-600 leading-relaxed">
            We transport all ingredients in modern, refrigerated food-grade containers. For long-distance events, our specialized mobile kitchen vans ensure all frying, baking, and live preparation are done right on-site for peak flavor and hygiene.
          </p>
        </div>

        {/* Interactive Core Hubs tags */}
        <div className="mt-8 w-full">
          <p className="text-xs font-bold uppercase tracking-wider text-charcoal/40 mb-3">Our Core Hubs</p>
          <div className="flex flex-wrap justify-center gap-2">
            {pins.map((pin, idx) => (
              <button
                key={idx}
                onMouseEnter={() => setActivePin(idx)}
                onMouseLeave={() => setActivePin(null)}
                className={`text-xs px-3.5 py-2 rounded-full border transition-all duration-300 ${
                  activePin === idx
                    ? "bg-gold border-gold text-white shadow-md shadow-gold/20"
                    : "bg-cream-dark border-neutral-200 text-charcoal/80 hover:border-gold/30 hover:bg-cream"
                }`}
              >
                {pin.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
