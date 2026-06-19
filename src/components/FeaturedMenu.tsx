"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, Utensils, Flame, Sparkles, Award, Gift, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  { id: "sadya", name: "Kerala Sadya" },
  { id: "biriyani", name: "Biriyani Selection" },
  { id: "seafood", name: "Seafood Delicacies" },
  { id: "specialties", name: "Malabar Specialties" },
  { id: "wedding", name: "Wedding Feasts" },
  { id: "desserts", name: "Desserts & Sweets" },
  { id: "beverages", name: "Beverages" },
];

const menuData: Record<string, {
  image: string;
  tag: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  items: { name: string; desc: string; signature?: boolean }[];
}> = {
  specialties: {
    image: "/hero_catering.png",
    tag: "TRADITIONAL FLAVORS • NATIVE SNACKS",
    icon: Gift,
    description: "Heritage recipes native to the Malabar region, crafted with authentic ingredients.",
    items: [
      { name: "Kozhi Pidi", desc: "Traditional steamed rice dumplings soaked in a rich, spiced chicken gravy. A home-style delicacy.", signature: true },
      { name: "Thalassery Muttamala", desc: "Fine egg yolk threads served alongside a luscious white egg-white custard pudding.", signature: true },
      { name: "Neypathiri & Mutton Roast", desc: "Crispy fried rice and fennel pathiris served with slow-cooked spicy mutton roast.", signature: true },
      { name: "Ari Pathiri & Chicken Stew", desc: "Silky, paper-thin rice flatbreads served with mild, coconut milk-based chicken stew." },
    ]
  },
  wedding: {
    image: "/corporate_catering.png",
    tag: "GRAND BANQUET • LUXURY SETUP",
    icon: Award,
    description: "Grand banquet items designed to satisfy thousands of guests with standard luxury presentation.",
    items: [
      { name: "Premium Ghee Rice", desc: "Fragrant Khaima rice cooked in pure cow ghee, garnished with toasted cashews and raisins.", signature: true },
      { name: "Malabar Beef Varattiyathu", desc: "Tender beef slow-roasted in a dry spicy mix, heavy on shallots, curry leaves, and coconut slices.", signature: true },
      { name: "Nadan Chicken Fry", desc: "Country-style chicken marinated in native spice paste and deep-fried with curry leaves.", signature: true },
      { name: "Mutton Cashew Kurma", desc: "Rich, creamy mutton gravy cooked with cashew paste, coconut milk, and aromatic spices." },
    ]
  },
  sadya: {
    image: "/sadya.png",
    tag: "TRADITIONAL FEAST • 24+ DISHES",
    icon: Utensils,
    description: "The ultimate traditional vegetarian feast served on clean banana leaves.",
    items: [
      { name: "Traditional Sadya Leaf", desc: "A magnificent collection of 24+ dishes including Avial, Thoran, Kalan, Olan, Pachadi, and Inji Curry.", signature: true },
      { name: "Ada Pradhaman", desc: "Rich, sweet dessert made of flat rice flakes cooked in jaggery syrup and thick fresh coconut milk.", signature: true },
      { name: "Classic Palada Payasam", desc: "Creamy pink milk pudding cooked with rice ada and sugar, slow-reduced over hours.", signature: true },
      { name: "Parippu Curry & Ghee", desc: "Mildly spiced moong dal curry served over piping hot Matta rice and drizzled with melted pure ghee." },
    ]
  },
  biriyani: {
    image: "/biryani.png",
    tag: "THE CROWN JEWEL • DUM COOKED",
    icon: Flame,
    description: "The crown jewel of Malabar catering. Made using short-grain Khaima rice, dum-cooked.",
    items: [
      { name: "Thalassery Chicken Biriyani", desc: "Aromatic short-grain rice layered with spiced chicken, fried onions, and pure ghee.", signature: true },
      { name: "Kozhikode Mutton Biriyani", desc: "Traditional spice-marinated melt-in-mouth mutton layered with premium rice and dum-baked.", signature: true },
      { name: "Malabar Fish Biriyani", desc: "Crispy-fried local Seer fish steaks layered with fragrant rice and signature biriyani masala.", signature: true },
      { name: "Egg Dum Biriyani", desc: "Perfect boiled eggs fried in spices, dum-cooked with aromatic ghee rice and caramelized onions." },
    ]
  },
  seafood: {
    image: "/seafood.png",
    tag: "FRESH CATCH • COASTAL STYLE",
    icon: Sparkles,
    description: "Freshly sourced catch from the Malabar coast, seasoned with stone-ground masalas.",
    items: [
      { name: "Karimeen Pollichathu", desc: "Pearl spot fish coated in rich onion-tomato masala, wrapped in banana leaf and tawa grilled.", signature: true },
      { name: "Malabar Chemmeen Roast", desc: "Fresh prawns tossed in a thick, spicy mixture of caramelized onions, garlic, and coconut bites.", signature: true },
      { name: "Kallummakkaya Fry", desc: "Spicy, crispy deep-fried mussels stuffed with rice paste and local red chili masalas.", signature: true },
      { name: "Kannur Claypot Fish Curry", desc: "Fiery red fish curry cooked in a traditional clay pot using local spices and sour kudampuli (cocum)." },
    ]
  },
  desserts: {
    image: "/custom_catering.png",
    tag: "SWEET ENDINGS • HANDCRAFTED",
    icon: Sparkles,
    description: "Sweet endings reflecting the culinary ingenuity of Malabar households, heavy on ghee and coconut.",
    items: [
      { name: "Unnakkaya", desc: "Steamed ripe banana mashed, rolled, stuffed with sweet coconut-dry fruit filling, and fried in ghee.", signature: true },
      { name: "Elaneer Pudding", desc: "Silky, refreshing melt-in-mouth dessert made with fresh tender coconut pulp and condensed milk.", signature: true },
      { name: "Pazham Nirachathu", desc: "Whole ripe banana stuffed with sweetened grated coconut, cashews, cardamom, and fried in pure ghee.", signature: true },
      { name: "Chattipathiri (Sweet)", desc: "Multi-layered sweet pancake pie alternating thin crepes with sweet egg-coconut stuffing." },
    ]
  },
  beverages: {
    image: "/live_counter.png",
    tag: "REFRESHING COOLDOWNS • SULAIMANI",
    icon: Flame,
    description: "Refreshing accompaniments and digestifs designed to cleanse the palate.",
    items: [
      { name: "Sulaimani Tea", desc: "Golden spiced black tea brewed with cardamom, cloves, and mint, finished with a fresh squeeze of lime.", signature: true },
      { name: "Kulukki Sarbath", desc: "Shaken sweet lemonade loaded with sweet basil seeds (sabja), crushed ginger, and green chilies.", signature: true },
      { name: "Elaneer Shake", desc: "Refreshing tender coconut water shake blended with soft coconut pulp and milk.", signature: true },
      { name: "Mint & Ginger Lime Cooler", desc: "Crisp and icy freshly squeezed lime juice blended with fresh mint leaves and ginger juice." },
    ]
  }
};

export default function FeaturedMenu() {
  const [activeTab, setActiveTab] = useState("sadya");
  const CategoryIcon = menuData[activeTab]?.icon || Utensils;
  const activeIndex = categories.findIndex((c) => c.id === activeTab);
  const isImageLeft = activeIndex % 2 === 0;

  return (
    <section id="menu" className="py-12 lg:py-16 bg-[#FAF7F2] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Compact Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="font-serif italic text-gold text-lg font-normal block mb-1">
            Exquisite Offerings
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-charcoal mb-2">
            Our Featured Menus
          </h2>
          <div className="w-12 h-[2px] bg-gold mx-auto" />
        </div>

        {/* Compact Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-1.5 mb-8 border-b border-neutral-100 pb-4 max-w-4xl mx-auto">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                activeTab === category.id
                  ? "bg-gold text-white shadow-md shadow-gold/25"
                  : "bg-cream-dark text-charcoal/70 hover:bg-gold/10"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Selected Category Content (Designed to fit on a single screen) */}
        <div className="max-w-5xl mx-auto bg-white border border-neutral-200/50 p-6 sm:p-8 rounded-3xl shadow-lg">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              {/* Smaller Circular Image */}
              <div className={`lg:col-span-5 flex justify-center ${isImageLeft ? "lg:order-1" : "lg:order-2"}`}>
                <div className="relative w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] lg:w-[240px] lg:h-[240px] rounded-full overflow-hidden shadow-xl border-4 border-neutral-100">
                  <Image
                    src={menuData[activeTab]?.image || "/custom_catering.png"}
                    alt={categories.find(c => c.id === activeTab)?.name || "Menu Category"}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Compact Text & Signature Dishes List */}
              <div className={`lg:col-span-7 space-y-4 text-left ${isImageLeft ? "lg:order-2" : "lg:order-1"}`}>
                {/* Gold Tag */}
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                    <CategoryIcon className="w-3 h-3" />
                  </div>
                  <span className="text-[9px] font-bold uppercase tracking-wider text-gold">
                    {menuData[activeTab]?.tag}
                  </span>
                </div>

                {/* Heading */}
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-charcoal leading-tight">
                  {categories.find(c => c.id === activeTab)?.name}
                </h3>

                {/* Shortened Description */}
                <p className="text-xs text-neutral-500 leading-relaxed font-normal">
                  {menuData[activeTab]?.description}
                </p>

                {/* Extremely Compact Dishes List (Fits on a single screen) */}
                <div className="pt-2">
                  <span className="text-[9px] font-bold uppercase tracking-wider text-neutral-400 block mb-2">Signature Offerings</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {menuData[activeTab]?.items.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 bg-cream-dark/50 px-3 py-1.5 rounded-xl border border-neutral-200/20"
                      >
                        <Star className="w-3 h-3 text-gold fill-gold flex-shrink-0" />
                        <span className="text-xs font-bold text-charcoal tracking-wide">{item.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action button */}
                <div className="pt-3">
                  <button
                    onClick={() => window.dispatchEvent(new CustomEvent("open-quote-modal"))}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-white bg-gold-gradient hover:scale-[1.02] hover:shadow-lg hover:shadow-gold/25 transition-all duration-300 cursor-pointer shadow-sm"
                  >
                    <span>Request Proposal for This Menu</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Ultra-compact Bespoke Box */}
        <div className="mt-8 text-center max-w-xl mx-auto bg-white/60 border border-neutral-200/40 p-5 rounded-2xl shadow-sm">
          <p className="text-[11px] text-neutral-500 leading-relaxed">
            <strong className="text-gold font-bold uppercase tracking-wider block mb-1">Tailored Custom Menus</strong>
            We design custom pricing calculated around your guest count (minimum 50), location, and specific preferences.
          </p>
        </div>

      </div>
    </section>
  );
}
