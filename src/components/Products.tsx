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
  { id: "waferio", name: "Waferio", image: "/images/products/waferio.png", category: "Wafers", description: "Irresistibly crunchy wafer rolls with delicious cream filling", color: "var(--gold-500)" },
  { id: "joy-cake", name: "Joy Cake", image: "/images/products/joy-cake.png", category: "Cakes", description: "Soft sponge cake layered with sweet cream", color: "var(--warm-200)" },
  { id: "mega-bite", name: "Mega Bite", image: "/images/products/mega-bite.png", category: "Biscuits", description: "Big, bold biscuits packed with flavor", color: "#4CAF50" },
  { id: "digestive-classic", name: "Digestive Classic", image: "/images/products/digestive-classic.png", category: "Biscuits", description: "Wholesome digestive biscuits with classic taste", color: "var(--gold-600)" },
  { id: "custard-creams", name: "Custard Creams", image: "/images/products/custard-creams.png", category: "Biscuits", description: "Traditional biscuits with rich custard cream", color: "#FFD700" },
  { id: "creamy-smiles", name: "Creamy Smiles", image: "/images/products/creamy-smiles.png", category: "Biscuits", description: "Fun-shaped biscuits with creamy centers", color: "#FFB6C1" },
  { id: "ginger-nuts", name: "Ginger Nuts", image: "/images/products/ginger-nuts.png", category: "Biscuits", description: "Crunchy ginger-flavored biscuits with a spicy kick", color: "var(--warm-700)" },
  { id: "coconutty", name: "Coconutty", image: "/images/products/coconutty.png", category: "Biscuits", description: "Tropical coconut biscuits with exotic flavor", color: "#87CEEB" },
  { id: "milky", name: "Milky", image: "/images/products/milky.png", category: "Biscuits", description: "Creamy milk-flavored biscuits", color: "var(--warm-100)" },
  { id: "marie-gold", name: "Marie Gold", image: "/images/products/marie-gold.png", category: "Biscuits", description: "Classic Marie biscuits, perfect with tea", color: "#FFD700" },
  { id: "glucose", name: "Glucose", image: "/images/products/glucose.png", category: "Biscuits", description: "Energy-boosting glucose biscuits", color: "var(--gold-400)" },
  { id: "abu-cracker", name: "Abu Cracker", image: "/images/products/abu-cracker.png", category: "Crackers", description: "Light and crispy savory crackers", color: "var(--warm-300)" },
  { id: "mr-cracker", name: "Mr Cracker", image: "/images/products/mr-cracker.png", category: "Crackers", description: "Premium crackers for every occasion", color: "var(--gold-600)" },
  { id: "i-love-salt", name: "I Love Salt", image: "/images/products/i-love-salt.png", category: "Crackers", description: "Perfectly salted crackers for snack lovers", color: "#87CEEB" },
  { id: "power-cake", name: "Power Cake", image: "/images/products/power-cake.png", category: "Cakes", description: "Energy-packed cake for active lifestyles", color: "var(--lor-crimson)" },
  { id: "spongy", name: "Spongy", image: "/images/products/spongy.png", category: "Cakes", description: "Light and fluffy sponge cakes", color: "var(--warm-200)" },
  { id: "two-friends", name: "Two Friends", image: "/images/products/two-friends.png", category: "Biscuits", description: "Two delicious biscuits, better together", color: "var(--warm-700)" },
  { id: "wafemax", name: "Wafemax", image: "/images/products/wafemax.png", category: "Wafers", description: "Maximum wafer crunch with cream layers", color: "var(--lor-crimson)" },
  { id: "kidz", name: "Kidz", image: "/images/products/kidz.png", category: "Kids", description: "Fun treats designed especially for kids", color: "#FF69B4" },
  { id: "zoo", name: "Zoo", image: "/images/products/zoo.png", category: "Kids", description: "Animal-shaped biscuits kids love", color: "#9ACD32" },
  { id: "chip-stars", name: "Chip Stars", image: "/images/products/chip-stars.png", category: "Snacks", description: "Star-shaped chips bursting with flavor", color: "#FFD700" },
  { id: "yum-yum", name: "Yum Yum", image: "/images/products/yum-yum.png", category: "Snacks", description: "Irresistible snacks that make you say yum!", color: "var(--lor-crimson)" },
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
      className="relative py-24 overflow-hidden bg-warm-50"
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 80%, var(--crimson-500)/5 0%, transparent 50%),
                           radial-gradient(circle at 80% 20%, var(--gold-500)/8 0%, transparent 50%)`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-5 py-2 rounded-full text-sm font-heavy tracking-wider mb-4 bg-crimson/10 text-crimson">
            OUR COLLECTION
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-warm-800">
            Discover Our{" "}
            <span className="gradient-text">Treats</span>
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-warm-600">
            From classic biscuits to indulgent wafers, find your perfect treat
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-brand text-white shadow-lg scale-105"
                  : "bg-white text-warm-800 hover:scale-105 shadow-sm"
              }`}
              style={{
                boxShadow:
                  activeCategory === category
                    ? "0 4px 20px var(--crimson-500)/30"
                    : "0 2px 10px rgba(0,0,0,0.05)",
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
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
                className="relative rounded-3xl overflow-hidden bg-white transition-all duration-400"
                style={{
                  boxShadow:
                    hoveredProduct === product.id
                      ? `0 20px 40px ${product.color}40`
                      : "0 4px 20px rgba(0,0,0,0.08)",
                }}
              >
                {/* Product Image Container */}
                <div
                  className="relative aspect-square p-6 flex items-center justify-center overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${product.color}10, ${product.color}05)`,
                  }}
                >
                  {/* Decorative Circle */}
                  <div
                    className="absolute w-32 h-32 rounded-full transition-transform duration-500 group-hover:scale-150"
                    style={{
                      background: `${product.color}15`,
                      filter: "blur(20px)",
                    }}
                  />

                  <Image
                    src={product.image}
                    alt={product.name}
                    width={200}
                    height={200}
                    className="relative z-10 w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Product Info */}
                <div className="p-5 text-center">
                  <span
                    className="text-xs font-heavy uppercase tracking-wider mb-2 block"
                    style={{ color: product.color }}
                  >
                    {product.category}
                  </span>
                  <h3 className="text-xl font-heavy mb-2 text-warm-800">
                    {product.name}
                  </h3>
                  <p className="text-sm leading-relaxed text-warm-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {product.description}
                  </p>
                </div>

                {/* Hover Accent */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-1 transition-transform duration-300 origin-left scale-x-0 group-hover:scale-x-100"
                  style={{
                    background: `linear-gradient(90deg, ${product.color}, var(--lor-crimson))`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-crimson/5 animate-float" />
      <div className="absolute bottom-40 right-10 w-32 h-32 rounded-full bg-gold/10 animate-float-reverse" />
    </section>
  );
}
