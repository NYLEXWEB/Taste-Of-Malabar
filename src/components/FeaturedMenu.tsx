"use client";

import { useState } from "react";
import Image from "next/image";
import { Check, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  { id: "specialties", name: "Malabar Specialties" },
  { id: "wedding", name: "Wedding Feasts" },
  { id: "sadya", name: "Kerala Sadya" },
  { id: "biriyani", name: "Biriyani Selection" },
  { id: "seafood", name: "Seafood Delicacies" },
  { id: "desserts", name: "Desserts & Sweets" },
  { id: "beverages", name: "Beverages" },
];

const menuData: Record<string, {
  image?: string;
  description: string;
  items: { name: string; desc: string; signature?: boolean }[];
}> = {
  specialties: {
    description: "Time-honored traditional snacks and main courses native to the Malabar region, crafted with precision and authentic heritage ingredients.",
    items: [
      { name: "Kozhi Pidi", desc: "Traditional steamed rice dumplings soaked in a rich, spiced chicken gravy. A home-style delicacy.", signature: true },
      { name: "Thalassery Muttamala", desc: "Fine egg yolk threads served alongside a luscious white egg-white custard pudding.", signature: true },
      { name: "Neypathiri with Mutton Roast", desc: "Crispy fried rice and fennel pathiris served with slow-cooked spicy mutton roast.", signature: true },
      { name: "Ari Pathiri & Chicken Stew", desc: "Silky, paper-thin rice flatbreads served with mild, coconut milk-based chicken stew." },
    ]
  },
  wedding: {
    description: "Grand banquet items designed to satisfy thousands of guests with standard luxury presentation and rich, aromatic flavors.",
    items: [
      { name: "Premium Ghee Rice (Neychoru)", desc: "Fragrant Khaima rice cooked in pure cow ghee, garnished with toasted cashews and raisins.", signature: true },
      { name: "Malabar Beef Varattiyathu", desc: "Tender beef slow-roasted in a dry spicy mix, heavy on shallots, curry leaves, and coconut slices.", signature: true },
      { name: "Nadan Chicken Fry", desc: "Country-style chicken marinated in native spice paste and deep-fried with curry leaves and green chilies." },
      { name: "Mutton Cashew Kurma", desc: "Rich, creamy mutton gravy cooked with cashew paste, coconut milk, and aromatic spices." },
    ]
  },
  sadya: {
    image: "/sadya.png",
    description: "The ultimate traditional vegetarian feast served on clean banana leaves. Prepared with absolute fidelity to centuries-old culinary rules.",
    items: [
      { name: "Traditional Sadya Leaf", desc: "A magnificent collection of 24+ dishes including Avial, Thoran, Kalan, Olan, Pachadi, and Inji Curry.", signature: true },
      { name: "Ada Pradhaman", desc: "Rich, sweet dessert made of flat rice flakes cooked in jaggery syrup and thick fresh coconut milk.", signature: true },
      { name: "Classic Palada Payasam", desc: "Creamy pink milk pudding cooked with rice ada and sugar, slow-reduced over hours." },
      { name: "Parippu Curry & Ghee", desc: "Mildly spiced moong dal curry served over piping hot Matta rice and drizzled with melted pure ghee." },
    ]
  },
  biriyani: {
    image: "/biryani.png",
    description: "The crown jewel of Malabar catering. Made using short-grain Khaima rice, dum-cooked to seal in the rich aroma.",
    items: [
      { name: "Thalassery Chicken Biriyani", desc: "Aromatic short-grain rice layered with spiced chicken, fried onions, and pure ghee.", signature: true },
      { name: "Kozhikode Mutton Biriyani", desc: "Traditional spice-marinated melt-in-mouth mutton layered with premium rice and dum-baked.", signature: true },
      { name: "Malabar Fish Biriyani", desc: "Crispy-fried local Seer fish steaks layered with fragrant rice and signature biriyani masala." },
      { name: "Egg Dum Biriyani", desc: "Perfect boiled eggs fried in spices, dum-cooked with aromatic ghee rice and caramelized onions." },
    ]
  },
  seafood: {
    image: "/seafood.png",
    description: "Freshly sourced catch from the Malabar coast, seasoned with stone-ground masalas and cooked to perfection.",
    items: [
      { name: "Karimeen Pollichathu", desc: "Pearl spot fish coated in rich onion-tomato masala, wrapped in banana leaf and tawa grilled.", signature: true },
      { name: "Malabar Chemmeen Roast", desc: "Fresh prawns tossed in a thick, spicy mixture of caramelized onions, garlic, and coconut bites.", signature: true },
      { name: "Kallummakkaya Fry", desc: "Spicy, crispy deep-fried mussels stuffed with rice paste and local red chili masalas." },
      { name: "Kannur Claypot Fish Curry", desc: "Fiery red fish curry cooked in a traditional clay pot using local spices and sour kudampuli (cocum)." },
    ]
  },
  desserts: {
    description: "Sweet endings reflecting the culinary ingenuity of Malabar households, heavy on ghee, bananas, and coconut.",
    items: [
      { name: "Unnakkaya", desc: "Steamed ripe banana mashed, rolled, stuffed with sweet coconut-dry fruit filling, and fried in ghee.", signature: true },
      { name: "Elaneer Pudding", desc: "Silky, refreshing melt-in-mouth dessert made with fresh tender coconut pulp and condensed milk.", signature: true },
      { name: "Pazham Nirachathu", desc: "Whole ripe banana stuffed with sweetened grated coconut, cashews, cardamom, and fried in pure ghee." },
      { name: "Chattipathiri (Sweet)", desc: "Multi-layered sweet pancake pie alternating thin crepes with sweet egg-coconut stuffing." },
    ]
  },
  beverages: {
    description: "Refreshing accompaniments and digestifs designed to cleanse the palate and complete the culinary experience.",
    items: [
      { name: "Sulaimani Tea", desc: "Golden spiced black tea brewed with cardamom, cloves, and mint, finished with a fresh squeeze of lime.", signature: true },
      { name: "Kulukki Sarbath", desc: "Shaken sweet lemonade loaded with sweet basil seeds (sabja), crushed ginger, and green chilies.", signature: true },
      { name: "Elaneer Shake", desc: "Refreshing tender coconut water shake blended with soft coconut pulp and milk." },
      { name: "Mint & Ginger Lime Cooler", desc: "Crisp and icy freshly squeezed lime juice blended with fresh mint leaves and ginger juice." },
    ]
  }
};

export default function FeaturedMenu() {
  const [activeTab, setActiveTab] = useState("specialties");

  return (
    <section id="menu" className="py-24 lg:py-36 bg-[#0A0A0A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <span className="font-serif italic text-gold text-2xl font-normal block mb-2">
            Exquisite Offerings
          </span>
          <span className="text-xs font-bold uppercase tracking-widest text-gold/60 mb-3 block">
            Our Menu Curation
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Our Featured Menus
          </h2>
          <div className="w-16 h-[2px] bg-gold mx-auto mb-6" />
          <p className="text-base text-white/70">
            A curation of our finest recipes. Choose from our standard selections or customize a menu matching your specific event theme.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 border-b border-gray-100 pb-6 max-w-5xl mx-auto">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-5 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                activeTab === category.id
                  ? "bg-gold text-white shadow-md shadow-gold/20"
                  : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Tab Content Panel */}
        <div className="max-w-6xl mx-auto bg-[#121212] rounded-3xl border border-white/10 p-8 lg:p-12 shadow-sm">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
            >
              {/* Category description & Image */}
              <div className={`lg:col-span-6 ${menuData[activeTab].image ? "" : "lg:col-span-12"}`}>
                <h3 className="font-serif text-2xl lg:text-3xl font-bold text-white mb-4">
                  {categories.find((c) => c.id === activeTab)?.name}
                </h3>
                <p className="text-sm sm:text-base text-white/70 leading-relaxed mb-8">
                  {menuData[activeTab].description}
                </p>

                {/* Items List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {menuData[activeTab].items.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-[#1A1A1A] p-5 rounded-2xl border border-white/5 hover:border-gold/30 hover:shadow-sm transition-all duration-300"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-serif text-sm font-bold text-white flex items-center gap-1.5">
                          {item.name}
                          {item.signature && (
                            <span className="inline-flex items-center justify-center p-0.5 rounded-full bg-gold/10 text-gold" title="Signature Dish">
                              <Star className="w-3 h-3 fill-gold" />
                            </span>
                          )}
                        </h4>
                      </div>
                      <p className="text-xs text-white/60 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Optional Category Image */}
              {menuData[activeTab].image && (
                <div className="lg:col-span-6 relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-lg border-4 border-[#1A1A1A] bg-[#121212]">
                  <Image
                    src={menuData[activeTab].image!}
                    alt={categories.find((c) => c.id === activeTab)?.name || "Menu category"}
                    fill
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent" />
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Custom Pricing Highlight Box */}
        <div className="mt-16 text-center max-w-2xl mx-auto bg-[#161616] border border-white/10 p-8 rounded-3xl shadow-sm">
          <span className="text-[10px] uppercase font-bold tracking-widest text-gold bg-gold/10 px-3 py-1 rounded-full border border-gold/20">Bespoke Pricing & Custom Menus</span>
          <h3 className="font-serif text-lg sm:text-xl font-bold text-white mt-4 mb-2">Tailored Exactly to Your Occasion</h3>
          <p className="text-xs sm:text-sm text-white/70 leading-relaxed mb-6">
            We do not believe in rigid Silver, Gold, or Premium packages. Every celebration is unique. We design custom menus and pricing models calculated around your guest count (minimum 50, no upper limit), event location, live counter choices, and specific culinary preferences.
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              const contact = document.querySelector("#contact");
              if (contact) {
                const offset = 85;
                const bodyRect = document.body.getBoundingClientRect().top;
                const elementRect = contact.getBoundingClientRect().top;
                const elementPosition = elementRect - bodyRect;
                const offsetPosition = elementPosition - offset;
                window.scrollTo({
                  top: offsetPosition,
                  behavior: "smooth"
                });
              }
            }}
            className="inline-flex items-center justify-center px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest text-white bg-gold hover:bg-gold-hover transition-all duration-300 shadow-sm"
          >
            Request Custom Proposal
          </a>
        </div>
      </div>
    </section>
  );
}
