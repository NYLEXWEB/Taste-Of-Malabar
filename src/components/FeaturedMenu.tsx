"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, Utensils, Flame, Sparkles, Award, Gift, ArrowRight, Search, X, ChevronDown, ChevronUp, BookOpen } from "lucide-react";
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

const fullMenuData = [
  {
    category: "1. Welcome Drinks",
    items: [
      "Live Fresh Juice (Seasonal Fruits)",
      "Tender Coconut Juice",
      "Kannur Cocktail",
      "Fruit Punch",
      "Mojito",
      "Passion Fruit Juice",
      "Mint Pineapple Juice",
      "Green Mango Juice",
      "Rooh Afza Sarbat",
      "Cool Badam Milk",
      "Hot Badam Milk"
    ]
  },
  {
    category: "2. Starters",
    items: [
      "Chicken Lollipop",
      "Chicken Nuggets",
      "Veg Nuggets",
      "Potato Smileys",
      "French Fries",
      "Baby Samosa",
      "Chicken Spring Roll"
    ]
  },
  {
    category: "3. Live Samovar Tea Counter",
    items: [
      "Tea",
      "Coffee",
      "Horlicks",
      "Boost",
      "Unnakaya",
      "Chicken Roll",
      "Meat Roll",
      "Veg Roll",
      "Chicken Cutlet",
      "Meat Cutlet",
      "Veg Cutlet",
      "Chicken Samosa",
      "Meat Samosa",
      "Veg Samosa",
      "Chatti Pathiri (Sweet)",
      "Chatti Pathiri (Spicy)",
      "Pakoda (Onion)",
      "Pakoda (Mixed Veg)",
      "Banana Pola",
      "Irachi Pathal",
      "Irani Pola"
    ]
  },
  {
    category: "4. Salads",
    items: [
      "Uppilittathu (Pickled Items)",
      "Raw Mango Salad",
      "Green Salad",
      "Curd Salad",
      "Mixed Vegetable Salad",
      "Russian Salad",
      "Caesar Salad",
      "Arabic Salad",
      "Assorted Green Salad",
      "Coleslaw",
      "Carrot Salad",
      "Chickpeas Salad",
      "Horse Gram Salad",
      "Channa Chaat",
      "Beetroot Salad",
      "Pasta Salad",
      "Sprouts Salad (Moong/Green Gram)",
      "Pineapple & Corn Salad",
      "Sweet Corn & Capsicum Salad"
    ]
  },
  {
    category: "5. Signature Biryani & Rice Dishes",
    items: [
      "Broiler Chicken Dum Biryani",
      "Lagoon Chicken Dum Biryani",
      "Kuttan/Beef Dum Biryani",
      "Chicken Fried Biryani",
      "Thalassery Mutton Biryani",
      "Prawns Biryani",
      "King Fish Biryani",
      "Hyderabadi Dum Biryani",
      "Vegetable Biryani",
      "Kashmiri Pulao",
      "Jeera Rice",
      "Ghee Rice"
    ]
  },
  {
    category: "6. Arabic Rice Varieties",
    items: [
      "Mandi",
      "Zurbian",
      "Kabiri",
      "Kabsa Rice"
    ]
  },
  {
    category: "7. Kerala Sadya Packages",
    items: [
      "Poorna Sadya (14 Items)",
      "Paripoorna Sadya (19 Items)",
      "Samboorna Sadya (20 Items)"
    ]
  },
  {
    category: "8. Bread Items",
    items: [
      "Kerala Porotta",
      "Coin Porotta",
      "Nool Porotta",
      "Bun Porotta",
      "Mutta Surka",
      "Ney Pathal",
      "Batura",
      "Folding Chapathi",
      "Nice Pathiri",
      "Ari Pathal",
      "Ana Pathiri",
      "Vellappam",
      "Roomali Roti",
      "Butter Naan",
      "Tandoori Roti",
      "Arabic Khuboos"
    ]
  },
  {
    category: "9. Chinese Dishes",
    items: [
      "Hakka Noodles",
      "Schezwan Noodles",
      "Veg Noodles",
      "Chicken Noodles",
      "Beef Noodles",
      "Fried Rice (Veg)",
      "Fried Rice (Chicken)",
      "Fried Rice (Egg)",
      "Fried Rice (Beef)",
      "Schezwan Fried Rice"
    ]
  },
  {
    category: "10. Live Grill Station",
    items: [
      "Alfaham",
      "Kebab",
      "Tikka",
      "Tandoori",
      "Full Goat",
      "Vegetables"
    ]
  },
  {
    category: "11. Signature Mutton Curries",
    items: [
      "Mutton Chettinad",
      "Mutton Stew",
      "Mutton Green Pepper",
      "Mutton Kuruma",
      "Mutton Nadan Curry",
      "Mutton Varutharachathu",
      "Mutton Mappas",
      "Mutton Mulakittathu",
      "Mutton Masala",
      "Mutton Sukka",
      "Mutton Ghee Roast",
      "Mutton Raan"
    ]
  },
  {
    category: "12. Chicken Specialities",
    items: [
      "Chicken 65",
      "Chicken Fry",
      "Chicken Chettinad",
      "Chicken Stew",
      "Chicken Green Pepper",
      "Chicken Nadan Curry",
      "Chicken Kuruma",
      "Chicken Mulakittathu",
      "Chicken Varutharachathu",
      "Payyoli Chicken",
      "Butter Chicken",
      "Chicken Rogan Josh",
      "Chicken Afghani",
      "Chicken Mappas",
      "Chicken Ghee Roast",
      "Chicken Kondattam",
      "Dragon Chicken",
      "Chilli Chicken",
      "Chicken Sukka"
    ]
  },
  {
    category: "13. Beef Classics",
    items: [
      "Beef Varutharacha Curry",
      "Beef Mappas",
      "Beef Stew",
      "Beef Kuruma",
      "Beef Green Pepper",
      "Beef Varattiyathu",
      "Beef Ularthiyathu",
      "Beef Coconut Fry",
      "Beef Kondattam",
      "BDF (Beef Dry Fry)",
      "Beef Palli Curry",
      "Beef Pepper"
    ]
  },
  {
    category: "14. Duck Items",
    items: [
      "Duck Green Pepper",
      "Duck Varutharachathu",
      "Duck Roast",
      "Duck Pepper Fry",
      "Duck Kuruma",
      "Duck Mappas"
    ]
  },
  {
    category: "15. Sea Food / Fish Specialties",
    items: [
      "Fish",
      "Fish Molee",
      "Fish Mulakittathu",
      "Fish Kuttanadan Style",
      "Fish Vattichathu",
      "Fish Kottayam Style",
      "Fish Pollichathu",
      "Meen Peera",
      "Fish Tawa",
      "Prawns",
      "Prawns Dry Fry",
      "Prawns Kondattam",
      "Prawns Tempura Fry",
      "Chilli Prawns",
      "Prawns / Fish Mango Curry",
      "Prawns Stew",
      "Prawns Masala",
      "Prawns Tawa Fry",
      "Crab",
      "Crab Curry (Kerala Style)",
      "Crab Masala",
      "Crab Roast",
      "Squid",
      "Squid Masala",
      "Squid Pepper Fry",
      "Squid Roast"
    ]
  },
  {
    category: "16. Pure Veg Specials",
    items: [
      "Veg Kuruma",
      "Veg Stew",
      "Veg Kolhapuri",
      "Veg Shahi Kuruma",
      "Navratan Kuruma",
      "Paneer Butter Masala",
      "Palak Paneer",
      "Bhindi Masala",
      "Rajma Masala",
      "Aloo Gobi",
      "Dal Curry",
      "Dal Tadka",
      "Dal Fry"
    ]
  },
  {
    category: "17. Desserts",
    items: [
      "Hot Jalebi (Live)",
      "Mysore Pak (Live)",
      "Kunafa",
      "Luqaimat",
      "Chocolate Fountain",
      "Baklava",
      "Variety of Puddings",
      "Carrot Halwa",
      "Pumpkin Halwa",
      "Gulab Jamun",
      "Rasgulla",
      "Kozhikodan Halwa",
      "Fruit Salad",
      "Variety of Pastries",
      "Mutta Maala (Egg Dessert)",
      "Beetroot Halwa",
      "Payasam (Ada, Semiya, Rice)"
    ]
  }
];

export default function FeaturedMenu() {
  const [activeTab, setActiveTab] = useState("sadya");
  const [showFullMenu, setShowFullMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});

  const toggleCategory = (cat: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [cat]: !prev[cat]
    }));
  };

  const expandAll = () => {
    const allExpanded = fullMenuData.reduce((acc, cat) => {
      acc[cat.category] = true;
      return acc;
    }, {} as Record<string, boolean>);
    setExpandedCategories(allExpanded);
  };

  const collapseAll = () => {
    setExpandedCategories({});
  };

  const filteredMenu = fullMenuData.map(cat => {
    const filteredItems = cat.items.filter(item => 
      item.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return {
      ...cat,
      items: filteredItems
    };
  }).filter(cat => cat.items.length > 0);
  const CategoryIcon = menuData[activeTab]?.icon || Utensils;
  const activeIndex = categories.findIndex((c) => c.id === activeTab);
  const isImageLeft = activeIndex % 2 === 0;

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.05
      }
    }
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 8 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  } as const;

  return (
    <section id="menu" className="py-12 lg:py-16 bg-[#FAF7F2] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Compact Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="font-serif italic text-chocolate text-lg font-normal block mb-1">
            Exquisite Offerings
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-chocolate mb-2">
            Our Featured Menus
          </h2>
          <div className="w-12 h-[2px] bg-gold/20 mx-auto relative overflow-hidden">
            <motion.div
              initial={{ left: "-100%" }}
              whileInView={{ left: "0%" }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="absolute inset-0 bg-gold"
            />
          </div>
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
        <div 
          className="max-w-5xl mx-auto border border-neutral-200/50 p-6 sm:p-8 rounded-3xl shadow-lg"
          style={{ 
            backgroundImage: "url('/menu_card_bg.png')", 
            backgroundSize: "cover", 
            backgroundPosition: "center" 
          }}
        >
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
                  <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    className="grid grid-cols-1 sm:grid-cols-2 gap-2"
                  >
                    {menuData[activeTab]?.items.map((item, idx) => (
                      <motion.div
                        key={idx}
                        variants={itemVariants}
                        className="flex items-center gap-2 bg-cream-dark/50 px-3 py-1.5 rounded-xl border border-neutral-200/20"
                      >
                        <Star className="w-3 h-3 text-gold fill-gold flex-shrink-0" />
                        <span className="text-xs font-bold text-charcoal tracking-wide">{item.name}</span>
                      </motion.div>
                    ))}
                  </motion.div>
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

        {/* Actions Row */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => setShowFullMenu(!showFullMenu)}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest text-white bg-charcoal hover:bg-neutral-800 hover:scale-[1.02] transition-all duration-300 shadow-md cursor-pointer w-full sm:w-auto justify-center"
          >
            <BookOpen className="w-4 h-4 text-gold fill-gold" />
            {showFullMenu ? "Hide Full Menu Explorer" : "Explore Our Full Menu (17 Categories)"}
          </button>

          <a
            href="/Menu/menu.pdf"
            download="Taste_of_Malabar_Catering_Menu.pdf"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest text-charcoal bg-white border border-neutral-300 hover:bg-cream-dark hover:scale-[1.02] transition-all duration-300 shadow-sm cursor-pointer w-full sm:w-auto justify-center"
          >
            <svg className="w-4 h-4 text-gold fill-current" viewBox="0 0 24 24">
              <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z" />
            </svg>
            Download Menu PDF
          </a>
        </div>

        {/* Full Menu Panel */}
        <AnimatePresence>
          {showFullMenu && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden mt-10"
            >
              <div 
                className="border border-neutral-200/60 p-6 sm:p-10 rounded-3xl shadow-xl space-y-8 text-left"
                style={{ 
                  backgroundImage: "url('/menu_card_bg.png')", 
                  backgroundSize: "cover", 
                  backgroundPosition: "center" 
                }}
              >
                {/* Header within the Panel */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-neutral-100 pb-6">
                  <div className="text-left w-full md:w-auto">
                    <h3 className="font-serif text-2xl font-bold text-charcoal">
                      Taste of Malabar Full Menu
                    </h3>
                    <p className="text-xs text-neutral-500 mt-1">
                      Browse all 17 categories and hundreds of delicious items we prepare.
                    </p>
                  </div>

                  {/* Search Bar & Controls */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto md:max-w-md">
                    <div className="relative flex-grow">
                      <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                      <input
                        type="text"
                        placeholder="Search for any dish (e.g. Biryani)..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-neutral-200 focus:outline-none focus:border-gold text-xs transition-colors text-charcoal bg-white"
                      />
                      {searchQuery && (
                        <button
                          onClick={() => setSearchQuery("")}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                    
                    {/* Expand/Collapse All (only if not searching) */}
                    {!searchQuery && (
                      <div className="flex items-center gap-1.5 shrink-0 justify-center">
                        <button
                          onClick={expandAll}
                          className="px-3 py-2 rounded-lg bg-cream-dark text-neutral-600 text-[10px] font-bold uppercase tracking-wider hover:bg-gold/15 transition-colors cursor-pointer"
                        >
                          Expand All
                        </button>
                        <button
                          onClick={collapseAll}
                          className="px-3 py-2 rounded-lg bg-cream-dark text-neutral-600 text-[10px] font-bold uppercase tracking-wider hover:bg-gold/15 transition-colors cursor-pointer"
                        >
                          Collapse All
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {/* Categories Accordion List */}
                <div className="space-y-4">
                  {filteredMenu.length === 0 ? (
                    <div className="text-center py-12">
                      <p className="text-sm text-neutral-500">No dishes match your search query. Try another keyword!</p>
                    </div>
                  ) : (
                    filteredMenu.map((cat) => {
                      const isExpanded = !!(searchQuery || expandedCategories[cat.category]);
                      return (
                        <div
                          key={cat.category}
                          className="border border-neutral-200/60 rounded-2xl overflow-hidden bg-cream/20 transition-all duration-300"
                        >
                          {/* Accordion Trigger Header */}
                          <button
                            onClick={() => !searchQuery && toggleCategory(cat.category)}
                            disabled={!!searchQuery}
                            className={`w-full flex items-center justify-between p-4 sm:px-6 text-left transition-colors ${
                              isExpanded ? "bg-cream-dark/40" : "bg-white hover:bg-cream-dark/10"
                            } ${searchQuery ? "cursor-default" : "cursor-pointer"}`}
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                                <Utensils className="w-4 h-4" />
                              </div>
                              <div>
                                <span className="font-serif text-sm sm:text-base font-bold text-charcoal">
                                  {cat.category}
                                </span>
                                <span className="text-[10px] text-neutral-400 ml-2 font-sans font-medium">
                                  ({cat.items.length} {cat.items.length === 1 ? 'item' : 'items'})
                                </span>
                              </div>
                            </div>
                            {!searchQuery && (
                              <div>
                                {isExpanded ? (
                                  <ChevronUp className="w-4 h-4 text-neutral-500" />
                                ) : (
                                  <ChevronDown className="w-4 h-4 text-neutral-500" />
                                )}
                              </div>
                            )}
                          </button>

                          {/* Accordion Content Block */}
                          <AnimatePresence initial={false}>
                            {isExpanded && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.25, ease: "easeInOut" }}
                                className="overflow-hidden"
                              >
                                <div className="p-4 sm:p-6 bg-white border-t border-neutral-100">
                                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                                    {cat.items.map((item, idx) => {
                                      // If searching, highlight search text
                                      const highlightMatch = (text: string) => {
                                        if (!searchQuery) return <span>{text}</span>;
                                        const index = text.toLowerCase().indexOf(searchQuery.toLowerCase());
                                        if (index === -1) return <span>{text}</span>;
                                        const before = text.substring(0, index);
                                        const match = text.substring(index, index + searchQuery.length);
                                        const after = text.substring(index + searchQuery.length);
                                        return (
                                          <span>
                                            {before}
                                            <mark className="bg-gold/20 text-charcoal font-bold rounded px-0.5">{match}</mark>
                                            {after}
                                          </span>
                                        );
                                      };

                                      return (
                                        <div
                                          key={idx}
                                          className="flex items-center gap-2 px-4 py-3 rounded-xl bg-cream/30 border border-neutral-200/40 hover:border-gold/30 hover:bg-cream-dark/20 transition-all duration-200"
                                        >
                                          <div className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                                          <span className="text-xs font-semibold text-charcoal tracking-wide">
                                            {highlightMatch(item)}
                                          </span>
                                        </div>
                                      );
                                    })}
                                  </div>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })
                  )}
                </div>

                {/* Footer in the Panel */}
                <div className="pt-6 border-t border-neutral-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-xs text-neutral-500">
                    * Minimum order quantity is 50 guests. We travel all over Kerala with our mobile kitchen.
                  </p>
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
                    <a
                      href="/Menu/menu.pdf"
                      download="Taste_of_Malabar_Catering_Menu.pdf"
                      className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-charcoal bg-white border border-neutral-300 hover:bg-neutral-55 transition-all duration-300 cursor-pointer"
                    >
                      <svg className="w-3.5 h-3.5 text-gold fill-current" viewBox="0 0 24 24">
                        <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z" />
                      </svg>
                      <span>Download Menu PDF</span>
                    </a>
                    <button
                      onClick={() => {
                        setShowFullMenu(false);
                        const element = document.querySelector("#contact");
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                      className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-white bg-gold-gradient hover:scale-[1.01] transition-all duration-300 shadow-sm shrink-0 cursor-pointer"
                    >
                      <span>Contact Us to Book Catering</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
