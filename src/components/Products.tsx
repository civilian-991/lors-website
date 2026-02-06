"use client";

import Image from "next/image";
import { useState } from "react";

interface Product {
  id: string;
  name: string;
  image: string;
  category: string;
  description: string;
  color: string;
}

const products: Product[] = [
  { id: "waferio", name: "Waferio", image: "/images/products/waferio.png", category: "Wafers", description: "Irresistibly crunchy wafer rolls with delicious cream filling", color: "#D97706" },
  { id: "joy-cake", name: "Joy Cake", image: "/images/products/joy-cake.png", category: "Cakes", description: "Soft sponge cake layered with sweet cream", color: "#B45309" },
  { id: "mega-bite", name: "Mega Bite", image: "/images/products/mega-bite.png", category: "Biscuits", description: "Big, bold biscuits packed with flavor", color: "#059669" },
  { id: "digestive-classic", name: "Digestive Classic", image: "/images/products/digestive-classic.png", category: "Biscuits", description: "Wholesome digestive biscuits with classic taste", color: "#B45309" },
  { id: "custard-creams", name: "Custard Creams", image: "/images/products/custard-creams.png", category: "Biscuits", description: "Traditional biscuits with rich custard cream", color: "#D97706" },
  { id: "creamy-smiles", name: "Creamy Smiles", image: "/images/products/creamy-smiles.png", category: "Biscuits", description: "Fun-shaped biscuits with creamy centers", color: "#DB2777" },
  { id: "ginger-nuts", name: "Ginger Nuts", image: "/images/products/ginger-nuts.png", category: "Biscuits", description: "Crunchy ginger-flavored biscuits with a spicy kick", color: "#92400E" },
  { id: "coconutty", name: "Coconutty", image: "/images/products/coconutty.png", category: "Biscuits", description: "Tropical coconut biscuits with exotic flavor", color: "#0891B2" },
  { id: "milky", name: "Milky", image: "/images/products/milky.png", category: "Biscuits", description: "Creamy milk-flavored biscuits", color: "#6B7280" },
  { id: "marie-gold", name: "Marie Gold", image: "/images/products/marie-gold.png", category: "Biscuits", description: "Classic Marie biscuits, perfect with tea", color: "#D97706" },
  { id: "glucose", name: "Glucose", image: "/images/products/glucose.png", category: "Biscuits", description: "Energy-boosting glucose biscuits", color: "#F59E0B" },
  { id: "abu-cracker", name: "Abu Cracker", image: "/images/products/abu-cracker.png", category: "Crackers", description: "Light and crispy savory crackers", color: "#92400E" },
  { id: "mr-cracker", name: "Mr Cracker", image: "/images/products/mr-cracker.png", category: "Crackers", description: "Premium crackers for every occasion", color: "#B45309" },
  { id: "i-love-salt", name: "I Love Salt", image: "/images/products/i-love-salt.png", category: "Crackers", description: "Perfectly salted crackers for snack lovers", color: "#0891B2" },
  { id: "power-cake", name: "Power Cake", image: "/images/products/power-cake.png", category: "Cakes", description: "Energy-packed cake for active lifestyles", color: "#C6000F" },
  { id: "spongy", name: "Spongy", image: "/images/products/spongy.png", category: "Cakes", description: "Light and fluffy sponge cakes", color: "#D97706" },
  { id: "two-friends", name: "Two Friends", image: "/images/products/two-friends.png", category: "Biscuits", description: "Two delicious biscuits, better together", color: "#92400E" },
  { id: "wafemax", name: "Wafemax", image: "/images/products/wafemax.png", category: "Wafers", description: "Maximum wafer crunch with cream layers", color: "#C6000F" },
  { id: "kidz", name: "Kidz", image: "/images/products/kidz.png", category: "Kids", description: "Fun treats designed especially for kids", color: "#EC4899" },
  { id: "zoo", name: "Zoo", image: "/images/products/zoo.png", category: "Kids", description: "Animal-shaped biscuits kids love", color: "#84CC16" },
  { id: "chip-stars", name: "Chip Stars", image: "/images/products/chip-stars.png", category: "Snacks", description: "Star-shaped chips bursting with flavor", color: "#F59E0B" },
  { id: "yum-yum", name: "Yum Yum", image: "/images/products/yum-yum.png", category: "Snacks", description: "Irresistible snacks that make you say yum!", color: "#C6000F" },
];

const categories = ["All", "Biscuits", "Wafers", "Cakes", "Crackers", "Kids", "Snacks"];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section
      id="products"
      className="relative py-28 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 50%, #F1F5F9 100%)" }}
    >
      {/* Premium Background Pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 80%, rgba(198,0,15,0.04) 0%, transparent 50%),
                           radial-gradient(circle at 80% 20%, rgba(217,119,6,0.06) 0%, transparent 50%),
                           radial-gradient(circle at 50% 50%, rgba(103,0,8,0.02) 0%, transparent 70%)`,
        }}
      />

      {/* Subtle texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header - Premium styling */}
        <div className="text-center mb-20">
          <span
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-heavy tracking-widest mb-6"
            style={{
              background: "linear-gradient(135deg, #0E2F71 0%, #12357A 100%)",
              color: "#FFFFFF",
              boxShadow: "0 4px 15px rgba(14,47,113,0.3)"
            }}
          >
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            OUR COLLECTION
          </span>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-black mb-6"
            style={{ color: "var(--warm-900)", letterSpacing: "-0.02em" }}
          >
            Discover Our{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #C6000F 0%, #670008 50%, #D97706 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Treats
            </span>
          </h2>
          <p
            className="text-lg md:text-xl max-w-2xl mx-auto"
            style={{ color: "var(--warm-600)" }}
          >
            From classic biscuits to indulgent wafers, find your perfect treat
          </p>
        </div>

        {/* Category Filter - Enhanced with gold accent */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-7 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                activeCategory === category
                  ? "text-white scale-105"
                  : "hover:scale-105"
              }`}
              style={{
                background:
                  activeCategory === category
                    ? "linear-gradient(135deg, #C6000F 0%, #670008 100%)"
                    : "rgba(255,255,255,0.9)",
                color: activeCategory === category ? "white" : "var(--warm-800)",
                boxShadow:
                  activeCategory === category
                    ? "0 8px 30px rgba(198,0,15,0.35), inset 0 1px 0 rgba(255,255,255,0.1)"
                    : "0 2px 15px rgba(0,0,0,0.06), inset 0 0 0 1px rgba(0,0,0,0.04)",
                border: activeCategory === category ? "none" : "1px solid rgba(217,119,6,0.1)"
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid - Premium cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="product-card group"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
              style={{
                animationDelay: `${index * 0.05}s`,
              }}
            >
              <div
                className="relative rounded-3xl overflow-hidden transition-all duration-500"
                style={{
                  background: "#FFFFFF",
                  boxShadow:
                    hoveredProduct === product.id
                      ? `0 25px 50px ${product.color}25, 0 0 0 2px #0E2F71`
                      : "0 4px 20px rgba(0,0,0,0.06)",
                  border: hoveredProduct === product.id ? "none" : "1px solid rgba(14,47,113,0.08)"
                }}
              >
                {/* Product Image Container */}
                <div
                  className="relative aspect-square p-6 flex items-center justify-center overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${product.color}08, ${product.color}03)`,
                  }}
                >
                  {/* Decorative Circle */}
                  <div
                    className="absolute w-36 h-36 rounded-full transition-all duration-700 group-hover:scale-[2] group-hover:opacity-60"
                    style={{
                      background: `radial-gradient(circle, ${product.color}12, transparent 70%)`,
                    }}
                  />

                  {/* Premium corner accent */}
                  <div
                    className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(225deg, ${product.color}15, transparent 70%)`,
                    }}
                  />

                  <Image
                    src={product.image}
                    alt={product.name}
                    width={200}
                    height={200}
                    className="relative z-10 w-full h-full object-contain transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-lg"
                  />
                </div>

                {/* Product Info */}
                <div className="p-5 text-center">
                  <span
                    className="text-xs font-heavy uppercase tracking-wider mb-2 block transition-colors duration-300"
                    style={{ color: product.color }}
                  >
                    {product.category}
                  </span>
                  <h3
                    className="text-xl font-heavy mb-2 transition-colors duration-300"
                    style={{ color: "var(--warm-900)" }}
                  >
                    {product.name}
                  </h3>
                  <p
                    className="text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
                    style={{ color: "var(--warm-600)" }}
                  >
                    {product.description}
                  </p>
                </div>

                {/* Hover Accent Line */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-1 transition-transform duration-500 origin-left scale-x-0 group-hover:scale-x-100"
                  style={{
                    background: `linear-gradient(90deg, ${product.color}, #C6000F)`,
                  }}
                />

                {/* Gold corner detail on hover */}
                <div
                  className="absolute top-4 right-4 w-8 h-8 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, #D97706, #B45309)",
                    transform: hoveredProduct === product.id ? "scale(1)" : "scale(0.5)",
                  }}
                >
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Elements - Premium accents */}
      <div className="absolute top-20 left-10 w-24 h-24 rounded-full animate-float opacity-40" style={{ background: "radial-gradient(circle, rgba(198,0,15,0.08), transparent 70%)" }} />
      <div className="absolute bottom-40 right-10 w-36 h-36 rounded-full animate-float-reverse opacity-30" style={{ background: "radial-gradient(circle, rgba(217,119,6,0.1), transparent 70%)" }} />
      <div className="absolute top-1/2 right-0 w-48 h-48 rounded-full opacity-20" style={{ background: "radial-gradient(circle, rgba(103,0,8,0.06), transparent 70%)" }} />
    </section>
  );
}
