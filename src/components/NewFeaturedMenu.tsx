"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { 
  Star, Utensils, Flame, Sparkles, ArrowRight, Search, X, ChevronRight, ChevronLeft, ChevronDown, BookOpen, 
  GlassWater, Coffee, Leaf, Award, Soup, ChefHat, Fish, IceCream, FileDown, ArrowLeft, Heart
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

const categoryIcons: { [key: number]: any } = {
  0: GlassWater, // 1. Welcome Drinks
  1: Sparkles,   // 2. Starters
  2: Coffee,     // 3. Live Samovar Tea Counter
  3: Leaf,       // 4. Salads
  4: Flame,      // 5. Signature Biryani & Rice Dishes
  5: Flame,      // 6. Arabic Rice Varieties
  6: Award,      // 7. Kerala Sadya Packages
  7: Utensils,   // 8. Bread Items
  8: Soup,       // 9. Chinese Dishes
  9: Flame,      // 10. Live Grill Station
  10: ChefHat,    // 11. Signature Mutton Curries
  11: ChefHat,    // 12. Chicken Specialities
  12: ChefHat,    // 13. Beef Classics
  13: ChefHat,    // 14. Duck Items
  14: Fish,       // 15. Sea Food / Fish Specialties
  15: Leaf,       // 16. Pure Veg Specialties
  16: IceCream,   // 17. Desserts
};

export default function NewFeaturedMenu() {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [favoriteDishes, setFavoriteDishes] = useState<string[]>([]);
  const detailsRef = useRef<HTMLDivElement>(null);

  // Load favorites from local storage if client-side
  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("malabar_menu_favorites");
      if (stored) {
        try {
          setFavoriteDishes(JSON.parse(stored));
        } catch (e) {}
      }
    }
  }, []);

  const toggleFavorite = (itemName: string) => {
    let updated;
    if (favoriteDishes.includes(itemName)) {
      updated = favoriteDishes.filter(item => item !== itemName);
    } else {
      updated = [...favoriteDishes, itemName];
    }
    setFavoriteDishes(updated);
    localStorage.setItem("malabar_menu_favorites", JSON.stringify(updated));
  };

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

  const handlePrevCategory = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeCategoryIndex !== null) {
      const prev = activeCategoryIndex === 0 ? fullMenuData.length - 1 : activeCategoryIndex - 1;
      setActiveCategoryIndex(prev);
    }
  };

  const handleNextCategory = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeCategoryIndex !== null) {
      const next = activeCategoryIndex === fullMenuData.length - 1 ? 0 : activeCategoryIndex + 1;
      setActiveCategoryIndex(next);
    }
  };

  // Close book on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveCategoryIndex(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Global search filtering
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
    <section id="menu" className="py-16 lg:py-24 bg-[#070707] relative overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#E55928]/5 rounded-full filter blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gold/5 rounded-full filter blur-[180px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        
        {/* Luxury Heading */}
        <div className="space-y-3 mb-12">
          <span className="text-[10px] sm:text-xs font-black uppercase text-[#E55928] tracking-[0.25em] block">
            Gastronomy Showcase
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
            Explore Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-amber-200 to-[#E55928]">Catering Menu</span>
          </h2>
          <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-4" />
          <p className="text-xs sm:text-sm text-neutral-400 max-w-2xl mx-auto leading-relaxed pt-2">
            Flip through our selection of 17 culinary categories crafted with genuine Malabar traditions and contemporary elegance.
          </p>
        </div>

        {/* Global Interactive Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto mb-12 bg-neutral-900/40 p-3.5 rounded-2xl border border-neutral-800/80 backdrop-blur-md">
          {/* Quick Search */}
          <div className="relative w-full sm:max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
            <input
              type="text"
              placeholder="Search 250+ delicacies (e.g. Biryani, Mandi, Halwa)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-10 py-2.5 rounded-xl bg-neutral-950/80 border border-neutral-850 hover:border-gold/30 focus:border-[#E55928]/60 text-xs text-white placeholder-neutral-500 focus:outline-none transition-all duration-300 shadow-inner"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-white p-1"
              >
                <X className="w-3 h-3" />
              </button>
            )}
          </div>

          {/* Stat Badge */}
          <div className="flex items-center gap-3 shrink-0">
            <span className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider">
              {searchQuery ? "Matches Found" : "Curated Selection"}
            </span>
            <span className="text-[10px] bg-gradient-to-r from-[#E55928] to-gold text-white font-black px-3.5 py-1 rounded-full shadow-md shadow-[#E55928]/15">
              17 Categories Available
            </span>
          </div>
        </div>

        {/* Categories Grid (Magazine Layout) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {filteredMenu.map((cat) => {
            const originalIndex = fullMenuData.findIndex(item => item.category === cat.category);
            const Icon = categoryIcons[originalIndex] || Utensils;
            const itemsCount = cat.items.length;
            
            return (
              <motion.div
                key={cat.category}
                whileHover={{ y: -6 }}
                onClick={() => setActiveCategoryIndex(originalIndex)}
                className="group relative h-[220px] rounded-3xl overflow-hidden cursor-pointer border border-neutral-800 hover:border-[#E55928]/50 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
              >
                {/* Background Cover Image */}
                <Image
                  src={getCategoryImageUrl(originalIndex)}
                  alt={cat.category}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.4] group-hover:brightness-[0.3]"
                />
                
                {/* Gold/Orange gradient radial glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />
                <div className="absolute inset-0 bg-[#E55928]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Floating category index count */}
                <div className="absolute top-4 left-4 flex items-center gap-1.5">
                  <span className="text-[9px] bg-black/60 border border-neutral-800 text-gold/90 font-black px-2 py-0.5 rounded-md backdrop-blur-sm">
                    #{cat.category.split(".")[0]}
                  </span>
                </div>

                {/* Favorite heart count */}
                <div className="absolute top-4 right-4 text-[9px] text-white/50 group-hover:text-[#E55928] transition-colors flex items-center gap-1">
                  <Heart className="w-3.5 h-3.5" />
                  <span>{cat.items.filter(item => favoriteDishes.includes(item)).length || ""}</span>
                </div>

                {/* Content info at bottom */}
                <div className="absolute inset-x-0 bottom-0 p-5 text-left flex flex-col justify-end">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-gold/15 to-[#E55928]/10 border border-gold/20 flex items-center justify-center text-gold mb-3 group-hover:scale-110 transition-transform duration-300 shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-white tracking-wide leading-tight group-hover:text-gold transition-colors">
                    {cat.category.replace(/^\d+\.\s*/, "")}
                  </h3>
                  <div className="flex items-center justify-between mt-1 pt-1.5 border-t border-neutral-800/80">
                    <span className="text-[9px] text-neutral-400 font-bold uppercase tracking-wider">
                      {itemsCount} Dishes listed
                    </span>
                    <span className="text-[9px] text-[#E55928] font-bold uppercase tracking-widest flex items-center gap-0.5 group-hover:translate-x-1 transition-transform">
                      View Menu <ChevronRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Empty Search State */}
        {filteredMenu.length === 0 && (
          <div className="py-20 max-w-xl mx-auto text-center bg-neutral-900/20 border border-neutral-800/60 rounded-3xl p-6">
            <span className="text-4xl">🍽️</span>
            <h3 className="font-serif text-lg font-bold text-white mt-4">No dishes match your query</h3>
            <p className="text-xs text-neutral-500 mt-2">
              We couldn't find matches for "{searchQuery}". Try searching for popular keywords like "Biryani", "Sadya", "Fish", or "Mojito".
            </p>
            <button 
              onClick={() => setSearchQuery("")}
              className="mt-5 px-5 py-2.5 rounded-xl bg-gold/10 hover:bg-gold/25 border border-gold/30 text-xs font-bold text-gold cursor-pointer"
            >
              Reset Search Filter
            </button>
          </div>
        )}

        {/* Digital Luxury Menu Book Overlay (Modal) */}
        <AnimatePresence>
          {activeCategoryIndex !== null && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="relative w-full max-w-4xl bg-neutral-950 border border-gold/20 p-5 sm:p-8 rounded-3xl shadow-[0_0_50px_rgba(229,89,40,0.15)] max-h-[90vh] overflow-y-auto no-scrollbar"
                ref={detailsRef}
              >
                {/* Corner Gold Ornaments */}
                <div className="absolute top-2 left-2 w-8 h-8 border-t border-l border-gold/30 rounded-tl-xl pointer-events-none" />
                <div className="absolute top-2 right-2 w-8 h-8 border-t border-r border-gold/30 rounded-tr-xl pointer-events-none" />
                <div className="absolute bottom-2 left-2 w-8 h-8 border-b border-l border-gold/30 rounded-bl-xl pointer-events-none" />
                <div className="absolute bottom-2 right-2 w-8 h-8 border-b border-r border-gold/30 rounded-br-xl pointer-events-none" />

                {/* Close Button */}
                <button
                  onClick={() => setActiveCategoryIndex(null)}
                  className="absolute right-4 top-4 w-9 h-9 rounded-full bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-400 hover:text-white flex items-center justify-center cursor-pointer transition-all hover:rotate-90 z-20"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Page Navigation Arrows */}
                <button
                  onClick={handlePrevCategory}
                  className="absolute left-2 sm:-left-16 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-neutral-900/90 hover:bg-[#E55928] border border-neutral-800 hover:border-transparent text-white flex items-center justify-center cursor-pointer transition-all hover:scale-105 z-20 shadow-lg"
                  title="Previous Category"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNextCategory}
                  className="absolute right-2 sm:-right-16 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-neutral-900/90 hover:bg-[#E55928] border border-neutral-800 hover:border-transparent text-white flex items-center justify-center cursor-pointer transition-all hover:scale-105 z-20 shadow-lg"
                  title="Next Category"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Main Content Layout */}
                {(() => {
                  const activeCat = fullMenuData[activeCategoryIndex];
                  return (
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start relative z-10 pt-4">
                      {/* Left: Category Presentation Banner */}
                      <div className="md:col-span-5 flex flex-col items-center text-center space-y-4">
                        <div className="relative w-full aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-gold/25 bg-neutral-950 flex items-center justify-center">
                          <Image
                            src={getCategoryImageUrl(activeCategoryIndex)}
                            alt={activeCat.category}
                            fill
                            sizes="(max-width: 768px) 100vw, 30vw"
                            className="object-cover"
                            priority
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                          <span className="absolute top-4 left-4 bg-[#E55928] text-white font-black text-[9px] px-2.5 py-0.5 rounded-full shadow-md">
                            CATEGORY #{activeCat.category.split(".")[0]}
                          </span>
                        </div>
                        
                        <div className="space-y-2 w-full text-left">
                          <span className="text-[9px] font-bold text-gold uppercase tracking-wider block">
                            Malabar Culinary Art
                          </span>
                          <h3 className="font-serif text-xl sm:text-2xl font-extrabold text-white leading-tight">
                            {activeCat.category.replace(/^\d+\.\s*/, "")}
                          </h3>
                          <p className="text-[11px] text-neutral-400 leading-normal">
                            Experience the premium flavors prepared with authentic recipes and the finest spices.
                          </p>
                          
                          {/* Premium feature indicators */}
                          <div className="grid grid-cols-2 gap-1.5 pt-3 border-t border-neutral-800/80">
                            <div className="flex items-center gap-1 text-[9px] text-neutral-300 font-medium">
                              <span className="text-[#E55928]">✓</span> 100% Halal
                            </div>
                            <div className="flex items-center gap-1 text-[9px] text-neutral-300 font-medium">
                              <span className="text-[#E55928]">✓</span> Fresh Prep
                            </div>
                            <div className="flex items-center gap-1 text-[9px] text-neutral-300 font-medium">
                              <span className="text-[#E55928]">✓</span> Traditional
                            </div>
                            <div className="flex items-center gap-1 text-[9px] text-neutral-300 font-medium">
                              <span className="text-[#E55928]">✓</span> Custom Spicy
                            </div>
                          </div>
                        </div>

                        <button
                          onClick={() => {
                            setActiveCategoryIndex(null);
                            window.dispatchEvent(new CustomEvent("open-quote-modal"));
                          }}
                          className="relative inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-[9px] font-bold uppercase tracking-widest text-white bg-gold-gradient hover:scale-[1.02] active:scale-95 transition-all duration-300 shadow-md shadow-gold/20 cursor-pointer overflow-hidden group w-full mt-2"
                        >
                          <span className="absolute inset-0 overflow-hidden rounded-xl pointer-events-none">
                            <span className="absolute top-0 -left-[100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-25deg] animate-shine" />
                          </span>
                          <span>Enquire For This Category</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>

                      {/* Right: Available Dishes Column */}
                      <div className="md:col-span-7 space-y-4 text-left">
                        <div className="flex items-center justify-between border-b border-neutral-800 pb-2.5">
                          <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest block">
                            Available Dishes ({activeCat.items.length})
                          </span>
                          <span className="text-[8px] text-neutral-500 font-bold uppercase tracking-widest">
                            Use escape key to close
                          </span>
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-[360px] overflow-y-auto pr-1 no-scrollbar">
                          {activeCat.items.map((item, idx) => {
                            const tags = getItemTags(item, activeCat.category);
                            const isFav = favoriteDishes.includes(item);
                            return (
                              <div
                                key={idx}
                                className="flex flex-col justify-center p-3 rounded-xl bg-neutral-900/40 border border-neutral-850 hover:border-gold/30 hover:bg-neutral-900/70 hover:scale-[1.01] transition-all duration-200"
                              >
                                <div className="flex items-center justify-between gap-2.5 min-w-0">
                                  <div className="flex items-center gap-2 min-w-0">
                                    <span className="text-gold text-xs shrink-0 select-none">✦</span>
                                    <span className="text-[11px] font-bold text-neutral-200 tracking-wide truncate">
                                      {item}
                                    </span>
                                  </div>
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      toggleFavorite(item);
                                    }}
                                    className="text-neutral-600 hover:text-[#E55928] p-1 transition-colors shrink-0 cursor-pointer"
                                    title={isFav ? "Remove from wishlist" : "Add to wishlist"}
                                  >
                                    <Heart className={`w-3.5 h-3.5 ${isFav ? "fill-[#E55928] text-[#E55928]" : ""}`} />
                                  </button>
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
                                            : "bg-[#E55928]/10 text-[#E55928] border border-[#E55928]/20"
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
                    </div>
                  );
                })()}
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
