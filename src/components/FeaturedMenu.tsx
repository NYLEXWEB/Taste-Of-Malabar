"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { 
  Star, Utensils, Flame, Sparkles, ArrowRight, Search, X, ChevronRight, BookOpen, 
  GlassWater, Coffee, Leaf, Award, Soup, ChefHat, Fish, IceCream, FileDown 
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";


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
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(4); // Default to Biryani
  const [searchQuery, setSearchQuery] = useState("");

  const mobileNavRef = useRef<HTMLDivElement>(null);
  const isMobileInteracting = useRef(false);

  useEffect(() => {
    const el = mobileNavRef.current;
    if (!el) return;

    let direction = 1; // 1 = right, -1 = left
    let animationFrameId: number;
    let timer: NodeJS.Timeout;
    let lastTime = performance.now();

    const scroll = (time: number) => {
      if (!isMobileInteracting.current && el) {
        const deltaTime = time - lastTime;
        const speed = 0.025; // scroll speed (pixels per ms)
        el.scrollLeft += direction * speed * deltaTime;

        // Bounce back if hit boundaries
        if (el.scrollLeft >= el.scrollWidth - el.clientWidth - 1) {
          direction = -1;
        } else if (el.scrollLeft <= 0) {
          direction = 1;
        }
      }
      lastTime = time;
      animationFrameId = requestAnimationFrame(scroll);
    };

    timer = setTimeout(() => {
      animationFrameId = requestAnimationFrame(scroll);
    }, 2000);

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleMobileInteractionStart = () => {
    isMobileInteracting.current = true;
  };

  const handleMobileInteractionEnd = () => {
    setTimeout(() => {
      isMobileInteracting.current = false;
    }, 2500);
  };

  const activeCategory = fullMenuData[activeCategoryIndex];

  const categoryIcons = [
    GlassWater, // 1. Welcome Drinks
    Sparkles,   // 2. Starters
    Coffee,     // 3. Live Samovar Tea Counter
    Leaf,       // 4. Salads
    Flame,      // 5. Signature Biryani & Rice Dishes
    Flame,      // 6. Arabic Rice Varieties
    Award,      // 7. Kerala Sadya Packages
    Utensils,   // 8. Bread Items
    Soup,       // 9. Chinese Dishes
    Flame,      // 10. Live Grill Station
    ChefHat,    // 11. Signature Mutton Curries
    ChefHat,    // 12. Chicken Specialities
    ChefHat,    // 13. Beef Classics
    ChefHat,    // 14. Duck Items
    Fish,       // 15. Sea Food / Fish Specialties
    Leaf,       // 16. Pure Veg Specialties
    IceCream,   // 17. Desserts
  ];



  const getCategoryImageUrl = (categoryIndex: number): string => {
    const cat = fullMenuData[categoryIndex];
    if (!cat) return "";
    
    const cleanName = cat.category
      .replace(/^\d+\.\s*/, "")
      .toLowerCase()
      .replace(/[\s\/\-\&]+/g, "_")
      .replace(/_+/g, "_")
      .replace(/^_+|_+$/g, "");
      
    return `/menu/${cleanName}.png`;
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

  return (
    <section id="menu" className="py-10 lg:py-14 bg-[#FAF7F2] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="font-serif italic text-chocolate text-lg font-normal block mb-1">
            Our Culinary Offerings
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-chocolate mb-3">
            Explore Our Catering Menu
          </h2>
          <p className="text-xs sm:text-sm text-neutral-500 max-w-md mx-auto">
            Browse our complete selection of 17 culinary categories and over 200+ delicacies prepared by our master chefs.
          </p>
          <div className="w-12 h-[2px] bg-gold/25 mx-auto mt-4 relative overflow-hidden">
            <motion.div
              initial={{ left: "-100%" }}
              whileInView={{ left: "0%" }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="absolute inset-0 bg-gold"
            />
          </div>
        </div>

        {/* Search bar */}
        <div className="mb-10 flex justify-center bg-white/60 p-4 rounded-3xl border border-neutral-200/40 shadow-sm max-w-xl mx-auto">
          {/* Search Input */}
          <div className="relative w-full">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
            <input
              type="text"
              placeholder="Search for any dish (e.g. Biryani, Sadya, Mojito)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-10 py-3 rounded-2xl border border-neutral-200 focus:outline-none focus:border-gold text-xs transition-colors text-charcoal bg-white"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {searchQuery ? (
          /* Search Results View */
          <div className="min-h-[400px]">
            <h3 className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-6">
              Search Results ({filteredMenu.reduce((acc, c) => acc + c.items.length, 0)} items found)
            </h3>
            
            {filteredMenu.length === 0 ? (
              <div className="text-center py-16 bg-white/40 border border-neutral-200/40 rounded-3xl">
                <p className="text-sm text-neutral-500">No dishes match your search query. Try another keyword!</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredMenu.map((cat) => (
                  <div key={cat.category} className="bg-white border border-neutral-200/60 p-6 rounded-3xl shadow-sm">
                    <span className="text-[10px] font-bold text-gold uppercase tracking-wider block mb-2">
                      {cat.category}
                    </span>
                    <div className="space-y-2">
                      {cat.items.map((item, idx) => {
                        const index = item.toLowerCase().indexOf(searchQuery.toLowerCase());
                        const before = item.substring(0, index);
                        const match = item.substring(index, index + searchQuery.length);
                        const after = item.substring(index + searchQuery.length);
                        return (
                          <div key={idx} className="flex items-center gap-2 py-1.5 border-b border-neutral-100 last:border-0">
                            <div className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                            <span className="text-xs font-semibold text-charcoal tracking-wide">
                              {before}
                              <mark className="bg-gold/20 text-charcoal font-bold rounded px-0.5">{match}</mark>
                              {after}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          /* Interactive Digital Menu Board */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Sidebar Navigation - Desktop */}
            <div className="hidden lg:block lg:col-span-4 bg-white/80 border border-neutral-200/60 p-4 rounded-3xl shadow-sm sticky top-24 max-h-[492px] overflow-y-auto no-scrollbar">
              <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest px-3 mb-3 block">
                Menu Categories
              </span>
              <div className="space-y-1">
                {fullMenuData.map((cat, idx) => {
                  const Icon = categoryIcons[idx] || Utensils;
                  const isActive = activeCategoryIndex === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => setActiveCategoryIndex(idx)}
                      className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left transition-all duration-200 cursor-pointer ${
                        isActive
                          ? "bg-gold text-white shadow-md shadow-gold/25"
                          : "hover:bg-gold/5 text-charcoal/80 hover:text-charcoal"
                      }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                          isActive ? "bg-white/20 text-white" : "bg-gold/10 text-gold"
                        }`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-xs font-bold tracking-wide truncate">
                          {cat.category.replace(/^\d+\.\s*/, "")}
                        </span>
                      </div>
                      <ChevronRight className={`w-3.5 h-3.5 shrink-0 ${
                        isActive ? "text-white" : "text-neutral-400"
                      }`} />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Horizontal Scroll Navigation - Mobile/Tablet */}
            <div
              ref={mobileNavRef}
              onTouchStart={handleMobileInteractionStart}
              onTouchEnd={handleMobileInteractionEnd}
              onMouseDown={handleMobileInteractionStart}
              onMouseUp={handleMobileInteractionEnd}
              onMouseLeave={handleMobileInteractionEnd}
              className="lg:hidden w-full overflow-x-auto no-scrollbar flex gap-2 pb-2 mb-4"
              style={{ scrollBehavior: "auto" }}
            >
              {fullMenuData.map((cat, idx) => {
                const Icon = categoryIcons[idx] || Utensils;
                const isActive = activeCategoryIndex === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveCategoryIndex(idx)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-full shrink-0 text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "bg-gold text-white shadow-md shadow-gold/25"
                        : "bg-white text-charcoal/70 border border-neutral-200"
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{cat.category.replace(/^\d+\.\s*/, "")}</span>
                  </button>
                );
              })}
            </div>

            {/* Selected Category Details Area */}
            <div 
              className="lg:col-span-8 border border-neutral-200/50 p-6 sm:p-8 rounded-3xl shadow-lg min-h-[480px] flex flex-col justify-between"
              style={{ 
                backgroundImage: "url('/menu_card_bg.png')", 
                backgroundSize: "cover", 
                backgroundPosition: "center" 
              }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategoryIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
                >
                  {/* Category Image & Info (Left) */}
                  <div className="md:col-span-5 flex flex-col items-center text-center space-y-4">
                    <div className="relative w-[160px] h-[160px] sm:w-[180px] sm:h-[180px] rounded-full overflow-hidden shadow-xl border-4 border-white/90 bg-cream-dark flex items-center justify-center">
                      <Image
                        src={getCategoryImageUrl(activeCategoryIndex)}
                        alt={activeCategory.category}
                        fill
                        sizes="(max-width: 640px) 160px, 180px"
                        className="object-cover"
                        priority
                      />
                    </div>
                    
                    <div className="space-y-1">
                      <span className="text-[9px] font-bold text-gold uppercase tracking-wider block">
                        Category {activeCategory.category.split(".")[0]}
                      </span>
                      <h3 className="font-serif text-lg font-bold text-charcoal leading-tight">
                        {activeCategory.category.replace(/^\d+\.\s*/, "")}
                      </h3>
                    </div>

                    <button
                      onClick={() => window.dispatchEvent(new CustomEvent("open-quote-modal"))}
                      className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-[9px] font-bold uppercase tracking-widest text-white bg-gold-gradient hover:scale-[1.02] active:scale-95 transition-all duration-300 shadow-md shadow-gold/20 cursor-pointer overflow-hidden group w-full"
                    >
                      {/* Moving black fade line / sheen shimmer */}
                      <span className="absolute inset-0 overflow-hidden rounded-xl pointer-events-none">
                        <span className="absolute top-0 -left-[100%] w-[50%] h-full bg-gradient-to-r from-transparent via-black/20 to-transparent skew-x-[-25deg] animate-shine" />
                      </span>
                      <span>Enquire For This Category</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>

                  {/* Category Items List (Right) */}
                  <div className="md:col-span-7 space-y-4 text-left">
                    <span className="text-[9px] font-bold text-neutral-400 uppercase tracking-widest block border-b border-neutral-100 pb-2">
                      Available Dishes ({activeCategory.items.length})
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-[300px] overflow-y-auto pr-1 no-scrollbar">
                      {activeCategory.items.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white border border-neutral-200/40 hover:border-gold/30 hover:scale-[1.01] transition-all duration-200"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                          <span className="text-[11px] font-bold text-charcoal tracking-wide truncate">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Action and Note footer */}
              <div className="mt-8 pt-4 border-t border-neutral-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-[10px] text-neutral-400 leading-normal max-w-sm text-left">
                  * Minimum order quantity is 50 guests. We design customized packages based on your count, venue, and choices.
                </p>
              </div>

            </div>

          </div>
        )}

        {/* Custom Tailored Menu Info Bar */}
        <div className="mt-12 text-center max-w-3xl mx-auto bg-white/60 border border-neutral-200/40 p-6 rounded-3xl shadow-sm">
          <span className="text-gold font-bold uppercase tracking-wider text-[11px] block mb-1">
            Need a Fully Customized Catering Menu Package?
          </span>
          <p className="text-xs text-neutral-500 leading-relaxed">
            We specialize in creating bespoke menus tailored exactly to your wedding style, culinary preferences, and dietary requirements. Click below to contact our head chef and event planners.
          </p>
          <div className="mt-4 flex flex-col items-center gap-4">
            <button
              onClick={() => {
                const element = document.querySelector("#contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-chocolate hover:text-gold transition-colors duration-200 cursor-pointer"
            >
              <span>Get in touch with us</span>
              <ArrowRight className="w-4 h-4 text-gold" />
            </button>

            <a
              href="/Menu/menu.pdf"
              download="Taste_of_Malabar_Catering_Menu.pdf"
              className="relative inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-2xl text-[10px] font-bold uppercase tracking-widest text-white bg-gold-gradient hover:scale-[1.02] active:scale-95 transition-all duration-300 shadow-md shadow-gold/20 cursor-pointer overflow-hidden group"
            >
              {/* Moving black fade line / sheen shimmer */}
              <span className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
                <span className="absolute top-0 -left-[100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-25deg] animate-shine" />
              </span>
              <FileDown className="w-3.5 h-3.5 text-white" />
              <span>Download Menu PDF</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
