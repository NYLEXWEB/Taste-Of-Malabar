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
    description: "Time-honored traditional snacks and main courses native to the Malabar region, crafted with precision and authentic heritage ingredients.",
    items: [
      { name: "Kozhi Pidi", desc: "Traditional steamed rice dumplings soaked in a rich, spiced chicken gravy. A home-style delicacy.", signature: true },
      { name: "Thalassery Muttamala", desc: "Fine egg yolk threads served alongside a luscious white egg-white custard pudding.", signature: true },
      { name: "Neypathiri with Mutton Roast", desc: "Crispy fried rice and fennel pathiris served with slow-cooked spicy mutton roast.", signature: true },
      { name: "Ari Pathiri & Chicken Stew", desc: "Silky, paper-thin rice flatbreads served with mild, coconut milk-based chicken stew." },
    ]
  },
  wedding: {
    image: "/corporate_catering.png",
    tag: "GRAND BANQUET • LUXURY SETUP",
    icon: Award,
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
    tag: "TRADITIONAL FEAST • 24+ DISHES",
    icon: Utensils,
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
    tag: "THE CROWN JEWEL • DUM COOKED",
    icon: Flame,
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
    tag: "FRESH CATCH • COASTAL STYLE",
    icon: Sparkles,
    description: "Freshly sourced catch from the Malabar coast, seasoned with stone-ground masalas and cooked to perfection.",
    items: [
      { name: "Karimeen Pollichathu", desc: "Pearl spot fish coated in rich onion-tomato masala, wrapped in banana leaf and tawa grilled.", signature: true },
      { name: "Malabar Chemmeen Roast", desc: "Fresh prawns tossed in a thick, spicy mixture of caramelized onions, garlic, and coconut bites.", signature: true },
      { name: "Kallummakkaya Fry", desc: "Spicy, crispy deep-fried mussels stuffed with rice paste and local red chili masalas." },
      { name: "Kannur Claypot Fish Curry", desc: "Fiery red fish curry cooked in a traditional clay pot using local spices and sour kudampuli (cocum)." },
    ]
  },
  desserts: {
    image: "/custom_catering.png",
    tag: "SWEET ENDINGS • HANDCRAFTED",
    icon: Sparkles,
    description: "Sweet endings reflecting the culinary ingenuity of Malabar households, heavy on ghee, bananas, and coconut.",
    items: [
      { name: "Unnakkaya", desc: "Steamed ripe banana mashed, rolled, stuffed with sweet coconut-dry fruit filling, and fried in ghee.", signature: true },
      { name: "Elaneer Pudding", desc: "Silky, refreshing melt-in-mouth dessert made with fresh tender coconut pulp and condensed milk.", signature: true },
      { name: "Pazham Nirachathu", desc: "Whole ripe banana stuffed with sweetened grated coconut, cashews, cardamom, and fried in pure ghee." },
      { name: "Chattipathiri (Sweet)", desc: "Multi-layered sweet pancake pie alternating thin crepes with sweet egg-coconut stuffing." },
    ]
  },
  beverages: {
    image: "/live_counter.png",
    tag: "REFRESHING COOLDOWNS • SULAIMANI",
    icon: Flame,
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
  const [activeTab, setActiveTab] = useState("sadya");
  const CategoryIcon = menuData[activeTab]?.icon || Utensils;
  const activeIndex = categories.findIndex((c) => c.id === activeTab);
  const isImageLeft = activeIndex % 2 === 0;

  return (
    <section id="menu" className="py-24 lg:py-36 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="font-serif italic text-gold text-2xl font-normal block mb-2">
            Exquisite Offerings
          </span>
          <span className="text-xs font-bold uppercase tracking-widest text-gold/60 mb-3 block">
            Our Menu Curation
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-charcoal mb-4">
            Our Featured Menus
          </h2>
          <div className="w-16 h-[2px] bg-gold mx-auto mb-6" />
          <p className="text-base text-neutral-600">
            A curation of our finest recipes. Choose from our standard selections or customize a menu matching your specific event theme.
          </p>
        </div>

        {/* Tab Navigation (Previous style filter option) */}
        <div className="flex flex-wrap justify-center gap-2 mb-16 border-b border-neutral-100 pb-6 max-w-5xl mx-auto">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-5 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer ${
                activeTab === category.id
                  ? "bg-gold text-white shadow-md shadow-gold/20"
                  : "bg-cream-dark text-charcoal/70 hover:bg-gold/15 hover:text-charcoal"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Selected Category Content (styled like the reference image) */}
        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
            >
              {/* Circular Image (Left on Desktop, Top on Mobile) */}
              <div className={`lg:col-span-5 flex justify-center ${isImageLeft ? "lg:order-1" : "lg:order-2"}`}>
                <div className="relative w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] lg:w-[380px] lg:h-[380px] rounded-full overflow-hidden shadow-2xl border-4 border-white">
                  <Image
                    src={menuData[activeTab]?.image || "/custom_catering.png"}
                    alt={categories.find(c => c.id === activeTab)?.name || "Menu Category"}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Text & Dishes List (Right on Desktop) */}
              <div className={`lg:col-span-7 space-y-6 text-left ${isImageLeft ? "lg:order-2" : "lg:order-1"}`}>
                {/* Gold Tag */}
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                    <CategoryIcon className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gold">
                    {menuData[activeTab]?.tag}
                  </span>
                </div>

                {/* Heading */}
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal leading-tight">
                  {categories.find(c => c.id === activeTab)?.name}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                  {menuData[activeTab]?.description}
                </p>

                {/* Grid of Dishes (Previous style items) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {menuData[activeTab]?.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-white p-4.5 rounded-2xl border border-neutral-200/60 hover:border-gold/30 hover:shadow-sm transition-all duration-300"
                    >
                      <h4 className="font-serif text-xs sm:text-sm font-bold text-charcoal flex items-center gap-1.5 mb-1.5">
                        {item.name}
                        {item.signature && (
                          <span className="inline-flex items-center justify-center p-0.5 rounded-full bg-gold/10 text-gold" title="Signature Dish">
                            <Star className="w-2.5 h-2.5 fill-gold" />
                          </span>
                        )}
                      </h4>
                      <p className="text-[11px] text-neutral-500 leading-relaxed font-normal">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Action button */}
                <div className="pt-2">
                  <button
                    onClick={() => window.dispatchEvent(new CustomEvent("open-quote-modal"))}
                    className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest text-white bg-gold-gradient hover:scale-[1.02] hover:shadow-lg hover:shadow-gold/25 transition-all duration-300 cursor-pointer shadow-sm"
                  >
                    <span>Request Proposal for This Menu</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Custom Pricing Highlight Box */}
        <div className="mt-24 text-center max-w-2xl mx-auto bg-white border border-neutral-200/80 p-8 rounded-3xl shadow-md">
          <span className="text-[10px] uppercase font-bold tracking-widest text-gold bg-gold/10 px-3 py-1 rounded-full border border-gold/20">Bespoke Pricing & Custom Menus</span>
          <h3 className="font-serif text-lg sm:text-xl font-bold text-charcoal mt-4 mb-2">Tailored Exactly to Your Occasion</h3>
          <p className="text-xs sm:text-sm text-neutral-650 leading-relaxed mb-6">
            We do not believe in rigid Silver, Gold, or Premium packages. Every celebration is unique. We design custom menus and pricing models calculated around your guest count (minimum 50, no upper limit), event location, live counter choices, and specific culinary preferences.
          </p>
          <button
            onClick={() => window.dispatchEvent(new CustomEvent("open-quote-modal"))}
            className="inline-flex items-center justify-center px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest text-white bg-gold hover:bg-gold-hover transition-all duration-300 shadow-sm cursor-pointer"
          >
            Request Custom Proposal
          </button>
        </div>
      </div>
    </section>
  );
}
