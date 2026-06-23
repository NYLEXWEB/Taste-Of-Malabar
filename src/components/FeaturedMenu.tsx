"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { 
  Star, Utensils, Flame, Sparkles, ArrowRight, Search, X, ChevronRight, ChevronDown, BookOpen, 
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
  const [isMobileCategoryDrawerOpen, setIsMobileCategoryDrawerOpen] = useState(false);
  const [hasClickedCategorySelector, setHasClickedCategorySelector] = useState(false);

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
      
    return `/Menu/${cleanName}.png`;
  };

  const getItemTags = (itemName: string, categoryName: string) => {
    const tags: string[] = [];
    const nameLower = itemName.toLowerCase();
    const catLower = categoryName.toLowerCase();
    
    if (nameLower.includes("dum biryani") || nameLower.includes("mutton chettinad") || nameLower.includes("kuttanadan") || nameLower.includes("unnakaya") || nameLower.includes("luqaimat") || nameLower.includes("raan")) {
      tags.push("Chef's Special 🌟");
    } else if (nameLower.includes("mandi") || nameLower.includes("alfaham") || nameLower.includes("kebab") || nameLower.includes("pepper") || nameLower.includes("chilli") || nameLower.includes("spicy") || nameLower.includes("65") || nameLower.includes("fry")) {
      tags.push("Spicy 🌶️");
    } else if (nameLower.includes("cocktail") || nameLower.includes("coconut") || nameLower.includes("mojito") || nameLower.includes("fruit punch") || nameLower.includes("juice")) {
      tags.push("Popular 🍹");
    } else if (nameLower.includes("jalebi") || nameLower.includes("kunafa") || nameLower.includes("halwa") || nameLower.includes("puddings") || nameLower.includes("baklava")) {
      tags.push("Must Try 🍮");
    } else if (nameLower.includes("sadya") || nameLower.includes("pooriss") || nameLower.includes("samboorna") || nameLower.includes("porotta") || nameLower.includes("pathiri") || nameLower.includes("pathal")) {
      tags.push("Traditional 🌾");
    }
    
    if (catLower.includes("veg") && !tags.length) {
      tags.push("Pure Veg 🥬");
    }
    
    return tags;
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
    <section id="menu" className="py-10 lg:py-14 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background radial glows and decoration */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-gold/5 rounded-full filter blur-[120px] -z-10" />
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-gold/5 rounded-full filter blur-[120px] -z-10" />
      
      {/* Subtle Kerala Palm Leaf Silhouette in dark background */}
      <svg 
        className="absolute left-0 bottom-10 w-[300px] h-[300px] opacity-[0.02] pointer-events-none text-gold select-none" 
        viewBox="0 0 100 100" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="0.5"
      >
        <path d="M 10 90 C 20 80 40 75 90 70" />
        <path d="M 30 78 C 30 70 32 60 35 55" />
        <path d="M 40 76 C 42 66 45 56 50 50" />
        <path d="M 50 74 C 54 64 58 54 65 48" />
        <path d="M 60 73 C 65 63 70 53 78 48" />
      </svg>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-gold mb-2 block">
            ✦ Culinary Offerings ✦
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-3 uppercase">
            Catering Menu
          </h2>
          <div className="w-24 h-[3px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-4" />
          <p className="text-xs sm:text-sm text-neutral-400 max-w-lg mx-auto font-medium">
            Browse our complete selection of 17 culinary categories and over 200+ delicacies prepared by our master chefs.
          </p>
        </div>

        {/* Search bar */}
        <div className="mb-10 flex justify-center bg-neutral-900/40 p-4 rounded-3xl border border-neutral-800/80 shadow-inner max-w-xl mx-auto backdrop-blur-md">
          {/* Search Input */}
          <div className="relative w-full">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
            <input
              type="text"
              placeholder="Search for any dish (e.g. Biryani, Sadya, Mojito)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-10 py-3 rounded-2xl border border-neutral-800/80 focus:outline-none focus:border-gold/60 text-xs transition-colors text-white bg-neutral-950/80 placeholder-neutral-500"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-neutral-300 cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {searchQuery ? (
          /* Search Results View */
          <div className="min-h-[400px]">
            <h3 className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-6">
              Search Results ({filteredMenu.reduce((acc, c) => acc + c.items.length, 0)} items found)
            </h3>
            
            {filteredMenu.length === 0 ? (
              <div className="text-center py-16 bg-neutral-900/30 border border-neutral-800/80 rounded-3xl">
                <p className="text-sm text-neutral-400">No dishes match your search query. Try another keyword!</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredMenu.map((cat) => (
                  <div key={cat.category} className="bg-neutral-900/60 border border-neutral-800/85 p-6 rounded-3xl shadow-md">
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
                          <div key={idx} className="flex items-center gap-2 py-1.5 border-b border-neutral-800/50 last:border-0">
                            <div className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 animate-pulse" />
                            <span className="text-xs font-semibold text-neutral-200 tracking-wide">
                              {before}
                              <mark className="bg-gold/30 text-white font-bold rounded px-0.5">{match}</mark>
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
            <div className="hidden lg:block lg:col-span-4 bg-neutral-900/80 border border-neutral-800/80 p-4 rounded-3xl shadow-lg sticky top-24 max-h-[492px] overflow-y-auto no-scrollbar backdrop-blur-md">
              <div className="flex items-center justify-between px-3 mb-3 pb-2 border-b border-neutral-850">
                <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest block">
                  Menu Categories
                </span>
                <span className="text-[8px] bg-[#E55928] text-white font-extrabold uppercase px-2 py-0.5 rounded-full shadow-sm">
                  17 Categories
                </span>
              </div>
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
                          ? "bg-gold text-white shadow-md shadow-gold/25 font-bold"
                          : "hover:bg-white/5 text-neutral-400 hover:text-white"
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
                        isActive ? "text-white" : "text-neutral-500"
                      }`} />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Mobile Category Selection Trigger (Dropdown/Drawer) */}
            <div className="lg:hidden w-full mb-5 relative z-30">
              <button
                onClick={() => {
                  setIsMobileCategoryDrawerOpen(!isMobileCategoryDrawerOpen);
                  setHasClickedCategorySelector(true);
                }}
                className="w-full flex items-center justify-between px-5 py-4 rounded-2xl bg-[#E55928] border border-white/10 text-white shadow-[0_0_25px_rgba(229,89,40,0.3)] hover:scale-[1.01] active:scale-95 transition-all duration-300 cursor-pointer relative"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center text-white shrink-0 shadow-inner">
                    {(() => {
                      const Icon = categoryIcons[activeCategoryIndex] || Utensils;
                      return <Icon className="w-4 h-4" />;
                    })()}
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-[9px] text-white/80 font-bold uppercase tracking-widest leading-none mb-1">
                      Category Selection
                    </span>
                    <span className="text-sm font-black uppercase tracking-wide truncate max-w-[150px] sm:max-w-[200px]">
                      {activeCategory.category.replace(/^\d+\.\s*/, "")}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0 ml-2">
                  <span className="text-[9px] bg-white text-[#E55928] font-black uppercase tracking-widest px-2.5 py-1 rounded-full shadow-sm animate-pulse">
                    17 Categories
                  </span>
                  <ChevronDown className={`w-4 h-4 text-white transition-transform duration-300 ${
                    isMobileCategoryDrawerOpen ? "rotate-180" : ""
                  }`} />
                </div>
              </button>

              {/* Animated hand pointer overlay */}
              {!hasClickedCategorySelector && (
                <div className="absolute right-6 sm:right-10 bottom-[-22px] pointer-events-none z-50 flex items-center justify-center">
                  {/* Ping effect ring under hand */}
                  <span className="absolute -top-1 right-2 w-7 h-7 rounded-full bg-gold/50 animate-ping" />
                  
                  {/* Glowing bubble box */}
                  <div className="bg-neutral-900 border border-gold/30 px-2 py-1 rounded-xl shadow-2xl flex items-center gap-1.5 backdrop-blur-md">
                    <span className="text-sm animate-bounce select-none">👆</span>
                    <span className="text-[7.5px] font-black uppercase text-gold tracking-widest whitespace-nowrap">
                      Tap to Choose Category
                    </span>
                  </div>
                </div>
              )}
              
              {/* Dropdown Grid of 17 Categories */}
              <AnimatePresence>
                {isMobileCategoryDrawerOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 right-0 top-[105%] bg-neutral-950 border border-neutral-800/80 rounded-2xl p-3.5 shadow-2xl z-40 max-h-[340px] overflow-y-auto"
                  >
                    <div className="grid grid-cols-2 gap-2">
                      {fullMenuData.map((cat, idx) => {
                        const Icon = categoryIcons[idx] || Utensils;
                        const isActive = activeCategoryIndex === idx;
                        return (
                          <button
                            key={idx}
                            onClick={() => {
                              setActiveCategoryIndex(idx);
                              setIsMobileCategoryDrawerOpen(false);
                            }}
                            className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-wider text-left transition-all duration-200 cursor-pointer w-full min-w-0 ${
                              isActive
                                ? "bg-gold text-neutral-950 shadow-sm"
                                : "bg-neutral-900 hover:bg-neutral-850 text-neutral-300"
                            }`}
                          >
                            <Icon className={`w-3.5 h-3.5 shrink-0 ${isActive ? "text-neutral-950" : "text-gold"}`} />
                            <span className="truncate">{cat.category.replace(/^\d+\.\s*/, "")}</span>
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Selected Category Details Area */}
            <div 
              className="lg:col-span-8 border border-gold/15 p-6 sm:p-8 rounded-3xl shadow-[0_0_30px_rgba(212,175,55,0.08)] bg-neutral-900/60 backdrop-blur-md min-h-[480px] flex flex-col justify-between relative overflow-hidden"
            >
              {/* Internal abstract gold circle background decorator */}
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-gold/5 rounded-full filter blur-3xl pointer-events-none" />
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategoryIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10"
                >
                  {/* Category Image & Info (Left) */}
                  <div className="md:col-span-5 flex flex-col items-center text-center space-y-4 md:pr-4">
                    <div className="relative w-full aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-gold/25 bg-neutral-950 flex items-center justify-center">
                      <Image
                        src={getCategoryImageUrl(activeCategoryIndex)}
                        alt={activeCategory.category}
                        fill
                        sizes="(max-width: 768px) 100vw, 30vw"
                        className="object-cover hover:scale-103 transition-transform duration-500"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                      <span className="absolute top-4 left-4 bg-gold/90 text-neutral-950 font-black text-[9px] px-2.5 py-0.5 rounded-full shadow-md">
                        #{activeCategory.category.split(".")[0]}
                      </span>
                    </div>
                    
                    <div className="space-y-2 w-full text-left">
                      <span className="text-[9px] font-bold text-gold uppercase tracking-wider block animate-pulse">
                        Malabar Culinary Art
                      </span>
                      <h3 className="font-serif text-xl sm:text-2xl font-extrabold text-white leading-tight">
                        {activeCategory.category.replace(/^\d+\.\s*/, "")}
                      </h3>
                      <p className="text-[11px] text-neutral-400 leading-normal">
                        Experience the premium flavors prepared with authentic recipes and the finest spices.
                      </p>
                      
                      {/* Premium feature indicators */}
                      <div className="grid grid-cols-2 gap-1.5 pt-2.5 border-t border-neutral-800/80">
                        <div className="flex items-center gap-1 text-[9px] text-neutral-300 font-medium">
                          <span className="text-gold">✓</span> 100% Halal
                        </div>
                        <div className="flex items-center gap-1 text-[9px] text-neutral-300 font-medium">
                          <span className="text-gold">✓</span> Fresh Prep
                        </div>
                        <div className="flex items-center gap-1 text-[9px] text-neutral-300 font-medium">
                          <span className="text-gold">✓</span> Traditional
                        </div>
                        <div className="flex items-center gap-1 text-[9px] text-neutral-300 font-medium">
                          <span className="text-gold">✓</span> Custom Spicy
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => window.dispatchEvent(new CustomEvent("open-quote-modal"))}
                      className="relative inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-[9px] font-bold uppercase tracking-widest text-white bg-gold-gradient hover:scale-[1.02] active:scale-95 transition-all duration-300 shadow-md shadow-gold/20 cursor-pointer overflow-hidden group w-full mt-2"
                    >
                      {/* Moving black fade line / sheen shimmer */}
                      <span className="absolute inset-0 overflow-hidden rounded-xl pointer-events-none">
                        <span className="absolute top-0 -left-[100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-25deg] animate-shine" />
                      </span>
                      <span>Enquire For This Category</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>

                  {/* Category Items List (Right) */}
                  <div className="md:col-span-7 space-y-4 text-left">
                    <span className="text-[9px] font-bold text-neutral-400 uppercase tracking-widest block border-b border-neutral-800 pb-2">
                      Available Dishes ({activeCategory.items.length})
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-[320px] overflow-y-auto pr-1 no-scrollbar">
                      {activeCategory.items.map((item, idx) => {
                        const tags = getItemTags(item, activeCategory.category);
                        return (
                          <div
                            key={idx}
                            className="flex flex-col justify-center p-3 rounded-xl bg-neutral-950/60 border border-neutral-800/85 hover:border-gold/40 hover:bg-neutral-900/50 hover:scale-[1.01] transition-all duration-200"
                          >
                            <div className="flex items-center gap-2.5 min-w-0">
                              <span className="text-gold text-xs shrink-0 select-none">✦</span>
                              <span className="text-[11px] font-bold text-neutral-200 tracking-wide truncate">
                                {item}
                              </span>
                            </div>
                            {tags.length > 0 && (
                              <div className="flex flex-wrap gap-1 mt-1.5 pl-4.5">
                                {tags.map((tag, tagIdx) => (
                                  <span
                                    key={tagIdx}
                                    className={`text-[8px] font-extrabold uppercase px-1.5 py-0.5 rounded-full ${
                                      tag.includes("🌶️") 
                                        ? "bg-red-500/10 text-red-400 border border-red-500/20" 
                                        : tag.includes("🥬")
                                        ? "bg-green-500/10 text-green-400 border border-green-500/20"
                                        : "bg-gold/10 text-gold border border-gold/20"
                                    }`}
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Action and Note footer */}
              <div className="mt-8 pt-4 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
                <p className="text-[10px] text-neutral-500 leading-normal max-w-sm text-left">
                  * Minimum order quantity is 50 guests. We design customized packages based on your count, venue, and choices.
                </p>
              </div>

            </div>

          </div>
        )}

      </div>
    </section>
  );
}
