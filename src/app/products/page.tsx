"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductModal from "@/components/ProductModal";

interface Product {
  id: string;
  name: string;
  image: string;
  category: string;
  description: string;
  color: string;
}

const products: Product[] = [
  { id: "waferio", name: "Waferio", image: "/images/products/waferio.png", category: "Wafers", description: "Irresistibly crunchy wafer rolls with delicious cream filling", color: "#D4A574" },
  { id: "joy-cake", name: "Joy Cake", image: "/images/products/joy-cake.png", category: "Cakes", description: "Classic chocolate stuffed cake with soft sponge layers", color: "#3D5A80" },
  { id: "mega-bite", name: "Mega Bite", image: "/images/products/mega-bite.png", category: "Biscuits", description: "Big, bold biscuits packed with flavor", color: "#7CB518" },
  { id: "digestive-classic", name: "Digestive Classic", image: "/images/products/digestive-classic.png", category: "Biscuits", description: "Wholesome digestive biscuits with classic taste", color: "#C6000F" },
  { id: "custard-creams", name: "Custard Creams", image: "/images/products/custard-creams.png", category: "Biscuits", description: "Traditional vanilla cream sandwich biscuits", color: "#E9C46A" },
  { id: "creamy-smiles", name: "Creamy Smiles", image: "/images/products/creamy-smiles.png", category: "Biscuits", description: "Fun strawberry cream filled biscuits - don't forget to smile!", color: "#E91E8C" },
  { id: "ginger-nuts", name: "Ginger Nuts", image: "/images/products/ginger-nuts.png", category: "Biscuits", description: "Crunchy ginger-flavored biscuits with a spicy kick", color: "#F77F00" },
  { id: "coconutty", name: "Coconutty", image: "/images/products/coconutty.png", category: "Biscuits", description: "Pure coconut bliss with tropical flavor", color: "#9ACD32" },
  { id: "milky", name: "Milky", image: "/images/products/milky.png", category: "Biscuits", description: "Creamy shortbread biscuits with milk goodness", color: "#5B4B9E" },
  { id: "marie-gold", name: "Marie Gold", image: "/images/products/marie-gold.png", category: "Biscuits", description: "Classic Marie biscuits, perfect with tea", color: "#C6000F" },
  { id: "glucose", name: "Glucose", image: "/images/products/glucose.png", category: "Biscuits", description: "Energy-boosting glucose biscuits", color: "#00B4D8" },
  { id: "abu-cracker", name: "Abu Cracker", image: "/images/products/abu-cracker.png", category: "Crackers", description: "Light and crispy savory crackers", color: "#E07A5F" },
  { id: "mr-cracker", name: "Mr Cracker", image: "/images/products/mr-cracker.png", category: "Crackers", description: "Premium crackers for every occasion", color: "#2A9D8F" },
  { id: "i-love-salt", name: "I Love Salt", image: "/images/products/i-love-salt.png", category: "Crackers", description: "Perfectly salted crackers for snack lovers", color: "#E63946" },
  { id: "power-cake", name: "Power Cake", image: "/images/products/power-cake.png", category: "Cakes", description: "Energy-packed cake for active lifestyles", color: "#C6000F" },
  { id: "spongy", name: "Spongy", image: "/images/products/spongy.png", category: "Cakes", description: "Light and fluffy sponge cakes", color: "#F4A261" },
  { id: "two-friends", name: "Two Friends", image: "/images/products/two-friends.png", category: "Biscuits", description: "Two delicious biscuits, better together", color: "#6D4C3D" },
  { id: "wafemax", name: "Wafemax", image: "/images/products/wafemax.png", category: "Wafers", description: "Maximum wafer crunch with cream layers", color: "#C6000F" },
  { id: "kidz", name: "Kidz", image: "/images/products/kidz.png", category: "Kids", description: "Fun alphabet-shaped biscuits for kids", color: "#F9A825" },
  { id: "zoo", name: "Zoo", image: "/images/products/zoo.png", category: "Kids", description: "Animal-shaped biscuits kids love", color: "#4ECDC4" },
  { id: "chip-stars", name: "Chip Stars", image: "/images/products/chip-stars.png", category: "Snacks", description: "Chocolate chip cookies bursting with flavor", color: "#8D6E63" },
  { id: "yum-yum", name: "Yum Yum", image: "/images/products/yum-yum.png", category: "Snacks", description: "Delicious strawberry donut cakes", color: "#00B4D8" },
];

const categories = [
  { name: "All", color: "#C6000F", icon: "M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" },
  { name: "Biscuits", color: "#C68642", icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" },
  { name: "Wafers", color: "#D4A574", icon: "M3 3h18v18H3V3zm2 2v14h14V5H5zm2 2h10v2H7V7zm0 4h10v2H7v-2zm0 4h7v2H7v-2z" },
  { name: "Cakes", color: "#FF6B35", icon: "M12 6c1.11 0 2-.9 2-2 0-.38-.1-.73-.29-1.03L12 0l-1.71 2.97c-.19.3-.29.65-.29 1.03 0 1.1.9 2 2 2zm4.6 9.99l-1.07-1.07-1.08 1.07c-1.3 1.3-3.58 1.31-4.89 0l-1.07-1.07-1.09 1.07C6.75 16.64 5.88 17 4.96 17c-.73 0-1.4-.23-1.96-.61V21c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-4.61c-.56.38-1.23.61-1.96.61-.92 0-1.79-.36-2.44-1.01zM18 9h-5V7h-2v2H6c-1.66 0-3 1.34-3 3v1.54c0 1.08.88 1.96 1.96 1.96.52 0 1.02-.2 1.38-.57l2.14-2.13 2.13 2.13c.74.74 2.03.74 2.77 0l2.14-2.13 2.13 2.13c.37.37.86.57 1.38.57 1.08 0 1.96-.88 1.96-1.96V12C21 10.34 19.66 9 18 9z" },
  { name: "Crackers", color: "#DEB887", icon: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z" },
  { name: "Kids", color: "#FF69B4", icon: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" },
  { name: "Snacks", color: "#FF4500", icon: "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" },
];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);
  const [visibleCards, setVisibleCards] = useState<Set<string>>(new Set());
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);

  // Open product modal
  const handleViewDetails = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  // Close product modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProduct(null), 300); // Clear after animation
  };

  // Filter products based on category and search
  const filteredProducts = products.filter((product) => {
    const matchesCategory = activeCategory === "All" || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    const cards = document.querySelectorAll("[data-product-card]");
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, [filteredProducts]);

  const getCategoryColor = (categoryName: string) => {
    const cat = categories.find((c) => c.name === categoryName);
    return cat?.color || "#C6000F";
  };

  return (
    <main className="min-h-screen bg-[#FFFAF5]">
      <Header />

      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Gradient Background */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, #FFF8F0 0%, #FFE5E7 50%, #FFF8F0 100%)",
          }}
        />

        {/* Decorative Blobs */}
        <div
          className="absolute top-20 left-10 w-72 h-72 rounded-full animate-blob opacity-30"
          style={{ background: "linear-gradient(135deg, #C6000F20, #67000820)" }}
        />
        <div
          className="absolute top-40 right-20 w-96 h-96 rounded-full animate-blob opacity-20"
          style={{ background: "linear-gradient(135deg, #D4A57430, #C6864220)", animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-10 left-1/4 w-64 h-64 rounded-full animate-blob opacity-25"
          style={{ background: "linear-gradient(135deg, #FF69B420, #FFD70020)", animationDelay: "4s" }}
        />

        {/* Floating Elements */}
        <div className="absolute top-32 left-20 w-8 h-8 rounded-full bg-[#C6000F]/20 animate-float" />
        <div className="absolute top-48 right-32 w-6 h-6 rounded-full bg-[#D4A574]/30 animate-float-reverse" />
        <div className="absolute bottom-20 right-1/4 w-10 h-10 rounded-full bg-[#FFD700]/20 animate-float-delay" />
        <div className="absolute top-60 left-1/3 w-4 h-4 rounded-full bg-[#FF69B4]/30 animate-float" />

        {/* Dots Pattern */}
        <div className="absolute inset-0 dots-pattern pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full mb-8 animate-slide-up"
            style={{
              background: "linear-gradient(135deg, rgba(198,0,15,0.1), rgba(103,0,8,0.05))",
              border: "2px solid rgba(198,0,15,0.2)",
            }}
          >
            <svg className="w-5 h-5" fill="#C6000F" viewBox="0 0 24 24">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
            <span
              className="text-sm font-bold tracking-wider uppercase"
              style={{ fontFamily: "'Nunito', sans-serif", color: "#C6000F" }}
            >
              Premium Quality Treats
            </span>
          </div>

          {/* Title */}
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up stagger-1"
            style={{ fontFamily: "'Fredoka', sans-serif", color: "#4A2C2A" }}
          >
            Our Delicious{" "}
            <span
              className="relative inline-block"
              style={{
                background: "linear-gradient(135deg, #C6000F, #670008)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Collection
              {/* Underline decoration */}
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 200 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 8C50 2 150 2 198 8"
                  stroke="#C6000F"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeDasharray="1 8"
                />
              </svg>
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-xl md:text-2xl max-w-3xl mx-auto mb-12 animate-slide-up stagger-2"
            style={{
              fontFamily: "'Nunito', sans-serif",
              color: "#4A2C2A",
              opacity: 0.7,
              lineHeight: 1.6,
            }}
          >
            Explore our wide range of delightful biscuits, wafers, cakes, and snacks.
            Every product is crafted with love and the finest ingredients.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 animate-slide-up stagger-3">
            {[
              { number: "22+", label: "Products" },
              { number: "6", label: "Categories" },
              { number: "100%", label: "Delicious" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div
                  className="text-4xl md:text-5xl font-bold mb-2"
                  style={{
                    fontFamily: "'Fredoka', sans-serif",
                    background: "linear-gradient(135deg, #C6000F, #670008)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {stat.number}
                </div>
                <div
                  className="text-sm font-semibold uppercase tracking-wider"
                  style={{ fontFamily: "'Nunito', sans-serif", color: "#4A2C2A", opacity: 0.6 }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
            preserveAspectRatio="none"
          >
            <path
              d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z"
              fill="#FFFAF5"
            />
          </svg>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="relative py-8 bg-[#FFFAF5]">
        <div className="max-w-7xl mx-auto px-6">
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto mb-10">
            <div
              className="relative flex items-center overflow-hidden rounded-2xl transition-all duration-300 focus-within:shadow-lg"
              style={{
                background: "white",
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                border: "2px solid transparent",
              }}
            >
              <div className="pl-6">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="#C6000F"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search for your favorite treats..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-5 text-lg focus:outline-none"
                style={{
                  fontFamily: "'Nunito', sans-serif",
                  color: "#4A2C2A",
                  background: "transparent",
                }}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="pr-6 transition-transform hover:scale-110"
                >
                  <svg className="w-6 h-6" fill="#C6000F" viewBox="0 0 24 24">
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                  </svg>
                </button>
              )}
            </div>
          </div>

          {/* Category Filter Chips */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {categories.map((category, index) => (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={`group relative flex items-center gap-2 px-5 py-3 md:px-6 md:py-3.5 rounded-full font-semibold text-sm md:text-base transition-all duration-300 ${
                  activeCategory === category.name
                    ? "scale-105"
                    : "hover:scale-105"
                }`}
                style={{
                  fontFamily: "'Nunito', sans-serif",
                  background:
                    activeCategory === category.name
                      ? `linear-gradient(135deg, ${category.color}, ${category.color}CC)`
                      : "white",
                  color: activeCategory === category.name ? "white" : "#4A2C2A",
                  boxShadow:
                    activeCategory === category.name
                      ? `0 8px 25px ${category.color}40`
                      : "0 2px 10px rgba(0,0,0,0.05)",
                  border: activeCategory === category.name
                    ? "none"
                    : `2px solid ${category.color}30`,
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <svg
                  className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:rotate-12"
                  fill={activeCategory === category.name ? "white" : category.color}
                  viewBox="0 0 24 24"
                >
                  <path d={category.icon} />
                </svg>
                {category.name}
                {activeCategory === category.name && (
                  <span
                    className="absolute -top-1 -right-1 w-3 h-3 rounded-full animate-pulse"
                    style={{ background: "white" }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Results Count */}
          <div className="text-center mt-8">
            <p
              className="text-sm"
              style={{ fontFamily: "'Nunito', sans-serif", color: "#4A2C2A", opacity: 0.6 }}
            >
              Showing{" "}
              <span className="font-bold" style={{ color: "#C6000F" }}>
                {filteredProducts.length}
              </span>{" "}
              {filteredProducts.length === 1 ? "product" : "products"}
              {activeCategory !== "All" && (
                <>
                  {" "}in{" "}
                  <span className="font-bold" style={{ color: getCategoryColor(activeCategory) }}>
                    {activeCategory}
                  </span>
                </>
              )}
              {searchQuery && (
                <>
                  {" "}matching{" "}
                  <span className="font-bold" style={{ color: "#C6000F" }}>
                    &quot;{searchQuery}&quot;
                  </span>
                </>
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="relative py-12 pb-24 overflow-hidden bg-[#FFFAF5]">
        {/* Background Elements */}
        <div
          className="absolute top-40 left-0 w-96 h-96 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #C6000F 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-20 right-0 w-80 h-80 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #D4A574 0%, transparent 70%)" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6" ref={gridRef}>
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
              {filteredProducts.map((product, index) => (
                <div
                  key={product.id}
                  id={`card-${product.id}`}
                  data-product-card
                  className={`product-card group opacity-0 ${
                    visibleCards.has(`card-${product.id}`) ? "animate-slide-up" : ""
                  }`}
                  onMouseEnter={() => setHoveredProduct(product.id)}
                  onMouseLeave={() => setHoveredProduct(null)}
                  style={{
                    animationDelay: `${(index % 8) * 0.1}s`,
                    animationFillMode: "forwards",
                  }}
                >
                  <div
                    onClick={() => handleViewDetails(product)}
                    className="relative rounded-3xl overflow-hidden cursor-pointer h-full"
                    style={{
                      background: "white",
                      boxShadow:
                        hoveredProduct === product.id
                          ? `0 25px 50px ${product.color}35`
                          : "0 4px 20px rgba(0,0,0,0.08)",
                      transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                    }}
                  >
                    {/* Category Badge */}
                    <div
                      className="absolute top-4 left-4 z-20 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider"
                      style={{
                        background: `${getCategoryColor(product.category)}20`,
                        color: getCategoryColor(product.category),
                        fontFamily: "'Nunito', sans-serif",
                        border: `1px solid ${getCategoryColor(product.category)}30`,
                      }}
                    >
                      {product.category}
                    </div>

                    {/* Product Image Container */}
                    <div
                      className="relative aspect-square p-8 flex items-center justify-center overflow-hidden"
                      style={{
                        background: `linear-gradient(135deg, ${product.color}15, ${product.color}05)`,
                      }}
                    >
                      {/* Decorative Circles */}
                      <div
                        className="absolute w-40 h-40 rounded-full transition-all duration-700 group-hover:scale-[2] group-hover:opacity-50"
                        style={{
                          background: `radial-gradient(circle, ${product.color}20, transparent 70%)`,
                          filter: "blur(20px)",
                        }}
                      />
                      <div
                        className="absolute w-24 h-24 rounded-full transition-all duration-500 group-hover:scale-150 opacity-0 group-hover:opacity-100"
                        style={{
                          background: `${product.color}15`,
                          right: "20%",
                          top: "20%",
                        }}
                      />

                      {/* Product Image */}
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={220}
                        height={220}
                        className="relative z-10 w-full h-full object-contain transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
                        style={{
                          filter: hoveredProduct === product.id ? "drop-shadow(0 10px 20px rgba(0,0,0,0.15))" : "none",
                        }}
                      />
                    </div>

                    {/* Product Info */}
                    <div className="p-6 text-center relative">
                      {/* Product Name */}
                      <h3
                        className="text-xl md:text-2xl font-bold mb-2 transition-colors duration-300"
                        style={{
                          fontFamily: "'Fredoka', sans-serif",
                          color: hoveredProduct === product.id ? product.color : "#4A2C2A",
                        }}
                      >
                        {product.name}
                      </h3>

                      {/* Description */}
                      <p
                        className="text-sm leading-relaxed transition-all duration-300"
                        style={{
                          fontFamily: "'Nunito', sans-serif",
                          color: "#4A2C2A",
                          opacity: hoveredProduct === product.id ? 0.9 : 0.6,
                          transform: hoveredProduct === product.id ? "translateY(0)" : "translateY(5px)",
                        }}
                      >
                        {product.description}
                      </p>

                      {/* Hover Action Button */}
                      <div
                        className="mt-4 overflow-hidden transition-all duration-300"
                        style={{
                          maxHeight: hoveredProduct === product.id ? "50px" : "0",
                          opacity: hoveredProduct === product.id ? 1 : 0,
                        }}
                      >
                        <button
                          onClick={() => handleViewDetails(product)}
                          className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover:gap-3 hover:scale-105 hover:shadow-lg"
                          style={{
                            background: `linear-gradient(135deg, ${product.color}, ${product.color}CC)`,
                            color: "white",
                            fontFamily: "'Nunito', sans-serif",
                            boxShadow: `0 4px 15px ${product.color}40`,
                          }}
                        >
                          View Details
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                    </div>

                    {/* Bottom Accent Line */}
                    <div
                      className="absolute bottom-0 left-0 right-0 h-1.5 transition-transform duration-300 origin-left scale-x-0 group-hover:scale-x-100"
                      style={{
                        background: `linear-gradient(90deg, ${product.color}, #C6000F)`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* No Results State */
            <div className="text-center py-20">
              <div
                className="w-32 h-32 mx-auto mb-8 rounded-full flex items-center justify-center animate-pulse"
                style={{ background: "rgba(198,0,15,0.1)" }}
              >
                <svg className="w-16 h-16" fill="#C6000F" viewBox="0 0 24 24">
                  <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                </svg>
              </div>
              <h3
                className="text-3xl font-bold mb-4"
                style={{ fontFamily: "'Fredoka', sans-serif", color: "#4A2C2A" }}
              >
                No treats found
              </h3>
              <p
                className="text-lg mb-8 max-w-md mx-auto"
                style={{ fontFamily: "'Nunito', sans-serif", color: "#4A2C2A", opacity: 0.6 }}
              >
                We could not find any products matching your search. Try a different keyword or browse our categories.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("All");
                }}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, #C6000F, #670008)",
                  color: "white",
                  fontFamily: "'Nunito', sans-serif",
                  boxShadow: "0 4px 20px rgba(198,0,15,0.3)",
                }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Reset Filters
              </button>
            </div>
          )}
        </div>

        {/* Decorative Floating Elements */}
        <div className="absolute top-20 right-10 w-16 h-16 rounded-full bg-[#FFD700]/10 animate-float" />
        <div className="absolute top-1/3 left-5 w-12 h-12 rounded-full bg-[#C6000F]/10 animate-float-reverse" />
        <div className="absolute bottom-40 right-20 w-20 h-20 rounded-full bg-[#FF69B4]/10 animate-float-delay" />
        <div className="absolute bottom-20 left-1/4 w-8 h-8 rounded-full bg-[#4CAF50]/15 animate-float" />
      </section>

      {/* Call to Action Section */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, #C6000F 0%, #670008 100%)",
          }}
        />

        {/* Decorative Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 50%, white 2px, transparent 2px),
                               radial-gradient(circle at 80% 50%, white 2px, transparent 2px)`,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        {/* Floating Shapes */}
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white/5 animate-float" />
        <div className="absolute bottom-10 right-20 w-40 h-40 rounded-full bg-white/5 animate-float-reverse" />
        <div className="absolute top-1/2 right-1/4 w-24 h-24 rounded-full bg-white/5 animate-float-delay" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white"
            style={{ fontFamily: "'Fredoka', sans-serif" }}
          >
            Cannot Find What You Are Looking For?
          </h2>
          <p
            className="text-lg md:text-xl mb-10 text-white/80"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            Get in touch with us! We are always happy to help you find the perfect treat.
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:gap-4"
            style={{
              background: "white",
              color: "#C6000F",
              fontFamily: "'Nunito', sans-serif",
              boxShadow: "0 8px 30px rgba(0,0,0,0.2)",
            }}
          >
            Contact Us
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>

      <Footer />

      {/* Product Detail Modal */}
      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </main>
  );
}
