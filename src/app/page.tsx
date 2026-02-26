"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  AnimatedSection,
  MagneticButton,
  Marquee,
  AnimatedCounter,
} from "@/components/AnimatedElements";
import { useReducedMotion } from "@/hooks/useScrollAnimation";

// Featured categories data - using official brand colors
const featuredCategories = [
  {
    id: "biscuits",
    name: "Biscuits",
    description: "From crunchy classics to cream-filled favorites, our biscuits are perfect for every moment",
    color: "#12357A",
    productCount: 16,
    images: ["/images/products/mega-bite.png", "/images/products/creamy-smiles-strawberry.png", "/images/products/kidz-zoo.png"],
  },
  {
    id: "wafers",
    name: "Wafers",
    description: "Light, crispy layers filled with irresistible cream in every delicious bite",
    color: "#0E2F71",
    productCount: 6,
    images: ["/images/products/waferio-chocolate.png", "/images/products/waferio-strawberry.png", "/images/products/wafemax.png"],
  },
  {
    id: "crackers",
    name: "Crackers",
    description: "Savory, crunchy crackers crafted for snacking, dipping, and sharing",
    color: "#57534E",
    productCount: 3,
    images: ["/images/products/abu-cracker.png", "/images/products/mr-cracker.png", "/images/products/i-love-salt.png"],
  },
  {
    id: "cakes",
    name: "Cakes",
    description: "Soft, moist cakes with rich fillings that make every treat a celebration",
    color: "#670008",
    productCount: 12,
    images: ["/images/products/joy-cake-chocolate.png", "/images/products/spongy-chocolate.png", "/images/products/power-cake-peanut-butter.png"],
  },
];

// Product images for the marquee
const marqueeProducts = [
  "/images/products/mega-bite.png",
  "/images/products/waferio-chocolate.png",
  "/images/products/joy-cake-chocolate.png",
  "/images/products/abu-cracker.png",
  "/images/products/creamy-smiles-strawberry.png",
  "/images/products/wafemax.png",
  "/images/products/spongy-chocolate.png",
  "/images/products/kidz-zoo.png",
  "/images/products/digestive-classic.png",
  "/images/products/power-cake-peanut-butter.png",
  "/images/products/waferio-strawberry.png",
  "/images/products/glucose.png",
  "/images/products/mr-cracker.png",
  "/images/products/coconutty.png",
  "/images/products/joy-cake-vanilla.png",
  "/images/products/milky.png",
  "/images/products/two-friends.png",
  "/images/products/yum-yum.png",
  "/images/products/ginger-nuts.png",
  "/images/products/custard-creams.png",
];

// Hero product grid images
const heroProducts = [
  { src: "/images/products/mega-bite.png", alt: "Mega Bite" },
  { src: "/images/products/waferio-chocolate.png", alt: "Waferio Chocolate" },
  { src: "/images/products/joy-cake-chocolate.png", alt: "Joy Cake" },
  { src: "/images/products/creamy-smiles-strawberry.png", alt: "Creamy Smiles" },
  { src: "/images/products/digestive-classic.png", alt: "Digestive Classic" },
  { src: "/images/products/spongy-chocolate.png", alt: "Spongy Chocolate" },
  { src: "/images/products/kidz-zoo.png", alt: "Kidz Zoo" },
  { src: "/images/products/wafemax.png", alt: "Wafemax" },
];

export default function Home() {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const reducedMotion = useReducedMotion();

  return (
    <>
      <Header />
      <main id="main">
        {/* ===== 1. HERO — Dark Navy ===== */}
        <section
          id="home"
          className="relative min-h-screen flex items-center justify-center overflow-hidden"
          style={{
            background: "linear-gradient(180deg, #0E2F71 0%, #071A45 100%)",
          }}
        >
          {/* Subtle background glow */}
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage: `radial-gradient(circle at 30% 40%, rgba(198,0,15,0.12) 0%, transparent 50%),
                               radial-gradient(circle at 70% 60%, rgba(18,53,122,0.2) 0%, transparent 50%)`,
            }}
          />

          {/* Main Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 flex flex-col lg:flex-row items-center gap-12">
            {/* Text Content */}
            <div className="flex-1 text-center lg:text-left">
              <div className="animate-slide-up opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
                <span
                  className="inline-block px-6 py-2 rounded-full text-sm font-bold tracking-wider mb-6"
                  style={{
                    background: "rgba(255,255,255,0.1)",
                    backdropFilter: "blur(10px)",
                    color: "rgba(255,255,255,0.9)",
                    fontFamily: "'Nunito', sans-serif",
                  }}
                >
                  BISCUITS | WAFERS | CRACKERS | CAKES
                </span>
              </div>

              <h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-slide-up opacity-0"
                style={{
                  fontFamily: "'Fredoka', sans-serif",
                  color: "#FFFFFF",
                  animationDelay: "0.4s",
                  animationFillMode: "forwards",
                }}
              >
                Every Bite is a{" "}
                <span
                  className="relative inline-block"
                  style={{
                    background: "linear-gradient(135deg, #C6000F, #FF4D5A)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Celebration
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    viewBox="0 0 200 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 8C50 2 150 2 198 8"
                      stroke="url(#underlineGradient)"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient id="underlineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#C6000F" />
                        <stop offset="50%" stopColor="#0E2F71" />
                        <stop offset="100%" stopColor="#C6000F" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </h1>

              <p
                className="text-xl md:text-2xl max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed animate-fade-in-up opacity-0"
                style={{
                  fontFamily: "'Nunito', sans-serif",
                  color: "rgba(255,255,255,0.8)",
                  animationDelay: "0.6s",
                  animationFillMode: "forwards",
                }}
              >
                Discover our irresistible collection of biscuits, wafers, and treats
                crafted with love and the finest ingredients.
              </p>

              <div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up opacity-0"
                style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}
              >
                <MagneticButton strength={0.2}>
                  <Link href="/products" className="btn-primary inline-flex items-center gap-2 group">
                    Explore Products
                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </MagneticButton>
                <MagneticButton strength={0.2}>
                  <Link href="/about" className="btn-secondary inline-block">
                    Our Story
                  </Link>
                </MagneticButton>
              </div>
            </div>

            {/* Hero Product Grid */}
            <div className="flex-1 relative">
              <div
                className="animate-scale-in opacity-0"
                style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
              >
                <div className="grid grid-cols-4 gap-3 max-w-md mx-auto">
                  {heroProducts.map((product, i) => (
                    <div
                      key={i}
                      className="aspect-square rounded-2xl overflow-hidden flex items-center justify-center p-2 transition-transform duration-300 hover:-translate-y-1"
                      style={{
                        background: "rgba(255,255,255,0.08)",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(255,255,255,0.1)",
                      }}
                    >
                      <Image
                        src={product.src}
                        alt={product.alt}
                        width={100}
                        height={100}
                        className="object-contain w-full h-full drop-shadow-lg"
                        priority={i < 4}
                        loading={i < 4 ? undefined : "lazy"}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-8 h-12 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
              <div className="w-1.5 h-3 rounded-full bg-white/40" />
            </div>
          </div>

          {/* Wave Divider — fills to white for next section */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg
              viewBox="0 0 1440 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full"
              preserveAspectRatio="none"
            >
              <path
                d="M0 120L60 105C120 90 240 60 360 55C480 50 600 70 720 80C840 90 960 90 1080 82.5C1200 75 1320 60 1380 52.5L1440 45V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
                fill="#FFFFFF"
              />
            </svg>
          </div>
        </section>

        {/* ===== 2. CATEGORIES — White Background ===== */}
        <section
          id="categories"
          className="relative py-24 overflow-hidden"
          style={{ background: "#FFFFFF" }}
        >
          <div className="relative z-10 max-w-7xl mx-auto px-6">
            {/* Section Header */}
            <AnimatedSection animation="fade-up" className="text-center mb-16">
              <span
                className="inline-block px-5 py-2 rounded-full text-sm font-bold tracking-wider mb-4"
                style={{
                  background: "rgba(14,47,113,0.08)",
                  color: "#0E2F71",
                  fontFamily: "'Nunito', sans-serif",
                }}
              >
                EXPLORE
              </span>
              <h2
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                style={{
                  fontFamily: "'Fredoka', sans-serif",
                  color: "#171717",
                }}
              >
                Our{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #C6000F, #670008)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Categories
                </span>
              </h2>
              <p
                className="text-lg md:text-xl max-w-2xl mx-auto"
                style={{
                  fontFamily: "'Nunito', sans-serif",
                  color: "#525252",
                }}
              >
                Browse our delicious range of treats crafted for every taste
              </p>
            </AnimatedSection>

            {/* Categories Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 mb-12">
              {featuredCategories.map((category, index) => (
                <AnimatedSection
                  key={category.id}
                  animation="fade-scale"
                  delay={index * 120}
                  className="group"
                >
                  <Link href={`/products?category=${category.name}`}>
                    <div
                      className="relative rounded-3xl overflow-hidden cursor-pointer transition-shadow duration-400"
                      onMouseEnter={() => setHoveredCategory(category.id)}
                      onMouseLeave={() => setHoveredCategory(null)}
                      style={{
                        background: "white",
                        boxShadow:
                          hoveredCategory === category.id
                            ? `0 25px 50px ${category.color}30`
                            : "0 4px 20px rgba(0,0,0,0.06)",
                      }}
                    >
                      {/* Category Image Area */}
                      <div
                        className="relative h-56 md:h-64 overflow-hidden"
                        style={{
                          background: `linear-gradient(135deg, ${category.color}90, ${category.color}60)`,
                        }}
                      >
                        <div
                          className="absolute w-40 h-40 rounded-full transition-all duration-700 group-hover:scale-[2.5] group-hover:opacity-60"
                          style={{
                            background: `${category.color}40`,
                            filter: "blur(30px)",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                          }}
                        />

                        <div className="relative z-10 flex items-center justify-center h-full gap-2 px-6">
                          {category.images.map((img, imgIndex) => (
                            <div
                              key={imgIndex}
                              className="transition-all duration-500"
                              style={{
                                transform: hoveredCategory === category.id
                                  ? `translateY(${imgIndex === 1 ? -12 : 0}px) scale(${imgIndex === 1 ? 1.1 : 1.05}) rotate(${imgIndex === 0 ? -5 : imgIndex === 2 ? 5 : 0}deg)`
                                  : `translateY(0) scale(1) rotate(${imgIndex === 0 ? -3 : imgIndex === 2 ? 3 : 0}deg)`,
                              }}
                            >
                              <Image
                                src={img}
                                alt={`${category.name} product`}
                                width={130}
                                height={130}
                                className="object-contain drop-shadow-lg"
                                style={{
                                  filter: hoveredCategory === category.id
                                    ? "drop-shadow(0 10px 20px rgba(0,0,0,0.25))"
                                    : "drop-shadow(0 4px 8px rgba(0,0,0,0.15))",
                                }}
                              />
                            </div>
                          ))}
                        </div>

                        <div
                          className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold"
                          style={{
                            background: "rgba(255,255,255,0.2)",
                            backdropFilter: "blur(10px)",
                            color: "white",
                            fontFamily: "'Nunito', sans-serif",
                          }}
                        >
                          {category.productCount} products
                        </div>
                      </div>

                      {/* Category Info */}
                      <div className="p-6 relative overflow-hidden">
                        <h3
                          className="text-2xl font-bold mb-2 transition-colors duration-300"
                          style={{
                            fontFamily: "'Fredoka', sans-serif",
                            color: hoveredCategory === category.id ? category.color : "#171717",
                          }}
                        >
                          {category.name}
                        </h3>
                        <p
                          className="text-sm leading-relaxed mb-4"
                          style={{
                            fontFamily: "'Nunito', sans-serif",
                            color: "#525252",
                          }}
                        >
                          {category.description}
                        </p>

                        <span
                          className="inline-flex items-center gap-2 text-sm font-bold transition-all duration-300 group-hover:gap-3"
                          style={{
                            color: category.color,
                            fontFamily: "'Nunito', sans-serif",
                          }}
                        >
                          Explore {category.name}
                          <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </span>
                      </div>

                      {/* Hover Accent Line */}
                      <div
                        className="absolute bottom-0 left-0 right-0 h-1.5 transition-transform duration-500 origin-left scale-x-0 group-hover:scale-x-100"
                        style={{
                          background: `linear-gradient(90deg, ${category.color}, #0E2F71, #C6000F)`,
                        }}
                      />
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>

            {/* View All Button */}
            <AnimatedSection animation="fade-up" delay={600} className="text-center">
              <MagneticButton strength={0.25}>
                <Link
                  href="/products"
                  className="inline-flex items-center gap-3 px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 hover:-translate-y-2 hover:gap-4 group"
                  style={{
                    background: "linear-gradient(135deg, #C6000F, #670008)",
                    color: "white",
                    fontFamily: "'Nunito', sans-serif",
                    boxShadow: "0 8px 30px rgba(198,0,15,0.35)",
                  }}
                >
                  <span>View All Products</span>
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </MagneticButton>
            </AnimatedSection>
          </div>
        </section>

        {/* ===== 3. PRODUCT IMAGE MARQUEE — Light Gray ===== */}
        <section className="relative py-10 overflow-hidden" style={{ background: "#F8FAFC" }}>
          <Marquee speed={25} pauseOnHover>
            <div className="flex items-center gap-8 px-4">
              {marqueeProducts.map((src, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-24 h-24 rounded-2xl overflow-hidden flex items-center justify-center p-2"
                  style={{
                    background: "white",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
                  }}
                >
                  <Image
                    src={src}
                    alt="LOR product"
                    width={80}
                    height={80}
                    loading="lazy"
                    className="object-contain w-full h-full"
                  />
                </div>
              ))}
            </div>
          </Marquee>
        </section>

        {/* ===== 4. COMPANY CREDENTIALS — Dark Navy ===== */}
        <section
          className="relative py-24 overflow-hidden"
          style={{
            background: "linear-gradient(180deg, #0E2F71 0%, #071A45 100%)",
          }}
        >
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 50%, rgba(198,0,15,0.1) 0%, transparent 50%),
                               radial-gradient(circle at 80% 50%, rgba(255,255,255,0.05) 0%, transparent 50%)`,
            }}
          />

          <div className="relative z-10 max-w-5xl mx-auto px-6">
            <AnimatedSection animation="fade-up" className="text-center mb-14">
              <span
                className="inline-block px-5 py-2 rounded-full text-sm font-bold tracking-wider mb-4"
                style={{
                  background: "rgba(255,255,255,0.1)",
                  color: "rgba(255,255,255,0.9)",
                  fontFamily: "'Nunito', sans-serif",
                }}
              >
                OUR CREDENTIALS
              </span>
              <h2
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                style={{
                  fontFamily: "'Fredoka', sans-serif",
                  color: "#FFFFFF",
                }}
              >
                Trusted by{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #C6000F, #FF4D5A)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Families
                </span>
              </h2>
            </AnimatedSection>

            {/* Stat Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-14">
              {[
                { end: 37, suffix: "+", label: "Products", description: "Across our full range" },
                { end: 4, suffix: "", label: "Categories", description: "Biscuits, Wafers, Crackers, Cakes" },
                { end: 100, suffix: "%", label: "Quality", description: "Premium ingredients always" },
              ].map((stat, i) => (
                <AnimatedSection key={i} animation="fade-scale" delay={i * 150}>
                  <div
                    className="p-8 rounded-3xl text-center transition-transform duration-300 hover:-translate-y-2"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <div
                      className="text-5xl md:text-6xl font-bold mb-2"
                      style={{ fontFamily: "'Fredoka', sans-serif" }}
                    >
                      <AnimatedCounter
                        end={stat.end}
                        suffix={stat.suffix}
                        className="bg-gradient-to-r from-[#C6000F] to-[#FF4D5A] bg-clip-text text-transparent"
                      />
                    </div>
                    <div
                      className="text-xl font-bold text-white mb-1"
                      style={{ fontFamily: "'Fredoka', sans-serif" }}
                    >
                      {stat.label}
                    </div>
                    <div
                      className="text-sm"
                      style={{
                        fontFamily: "'Nunito', sans-serif",
                        color: "rgba(255,255,255,0.6)",
                      }}
                    >
                      {stat.description}
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            {/* Company description */}
            <AnimatedSection animation="fade-up" className="text-center max-w-3xl mx-auto">
              <p
                className="text-lg leading-relaxed"
                style={{
                  fontFamily: "'Nunito', sans-serif",
                  color: "rgba(255,255,255,0.7)",
                }}
              >
                At LOR, we believe every snack should be a moment of pure joy.
                Our passion for creating delicious treats drives us to craft products
                that bring smiles to faces young and old, using only premium ingredients
                and a commitment to quality you can taste in every bite.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* ===== 5. ABOUT — Dark Navy ===== */}
        <section
          id="about"
          className="relative py-24 overflow-hidden"
          style={{ background: "linear-gradient(180deg, #071A45 0%, #0E2F71 100%)" }}
        >
          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Image Side */}
              <AnimatedSection animation="fade-scale">
                <div className="relative">
                  <div
                    className="relative rounded-[3rem] overflow-hidden"
                    style={{
                      boxShadow: "0 30px 60px rgba(0,0,0,0.3)",
                    }}
                  >
                    <div
                      className="aspect-square flex items-center justify-center p-12"
                      style={{
                        background: "linear-gradient(135deg, #FFFFFF, #F1F5F9)",
                      }}
                    >
                      <Image
                        src="/images/logos/lor-logo.png"
                        alt="LOR Brand"
                        width={400}
                        height={200}
                        loading="lazy"
                        className="w-full max-w-sm"
                      />
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Text Side */}
              <AnimatedSection animation="fade-up" delay={200}>
                <div>
                  <span
                    className="inline-block px-5 py-2 rounded-full text-sm font-bold tracking-wider mb-6"
                    style={{
                      background: "rgba(198,0,15,0.3)",
                      color: "#FFFFFF",
                      fontFamily: "'Nunito', sans-serif",
                    }}
                  >
                    ABOUT LOR
                  </span>

                  <h2
                    className="text-4xl md:text-5xl font-bold mb-6"
                    style={{
                      fontFamily: "'Fredoka', sans-serif",
                      color: "#FFFFFF",
                    }}
                  >
                    Crafting{" "}
                    <span
                      style={{
                        background: "linear-gradient(135deg, #C6000F, #FF4D5A)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      Delicious
                    </span>{" "}
                    Moments
                  </h2>

                  <p
                    className="text-lg mb-6 leading-relaxed"
                    style={{
                      fontFamily: "'Nunito', sans-serif",
                      color: "rgba(255,255,255,0.8)",
                    }}
                  >
                    At LOR, we believe that every snack should be a moment of pure joy.
                    Our passion for creating delicious treats drives us to craft products
                    that bring smiles to faces young and old.
                  </p>

                  <p
                    className="text-lg mb-8 leading-relaxed"
                    style={{
                      fontFamily: "'Nunito', sans-serif",
                      color: "rgba(255,255,255,0.8)",
                    }}
                  >
                    From our classic biscuits to our innovative wafers, every LOR product
                    is made with premium ingredients and a commitment to quality that
                    you can taste in every bite.
                  </p>

                  {/* Stats with AnimatedCounter */}
                  <div className="grid grid-cols-3 gap-6 mb-8">
                    {[
                      { end: 37, suffix: "+", label: "Products" },
                      { end: 100, suffix: "%", label: "Quality" },
                      { end: 1, suffix: "M+", label: "Happy Customers" },
                    ].map((stat, index) => (
                      <div key={index} className="text-center">
                        <div
                          className="text-3xl md:text-4xl font-bold mb-1"
                          style={{ fontFamily: "'Fredoka', sans-serif" }}
                        >
                          <AnimatedCounter
                            end={stat.end}
                            suffix={stat.suffix}
                            className="bg-gradient-to-r from-[#C6000F] to-[#FF4D5A] bg-clip-text text-transparent"
                          />
                        </div>
                        <div
                          className="text-sm font-semibold"
                          style={{
                            fontFamily: "'Nunito', sans-serif",
                            color: "rgba(255,255,255,0.7)",
                          }}
                        >
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Learn More Button */}
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:-translate-y-1"
                    style={{
                      background: "linear-gradient(135deg, #C6000F, #670008)",
                      color: "white",
                      fontFamily: "'Nunito', sans-serif",
                      boxShadow: "0 4px 20px rgba(198,0,15,0.3)",
                    }}
                  >
                    Learn More About Us
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </AnimatedSection>
            </div>
          </div>

          {/* Subtle decorative blurs */}
          <div className="absolute top-1/4 right-0 w-64 h-64 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute bottom-1/4 left-0 w-48 h-48 rounded-full bg-white/10 blur-3xl" />
        </section>

        {/* ===== 6. CONTACT — White Background ===== */}
        <section
          id="contact"
          className="relative py-24 overflow-hidden"
          style={{ background: "#FFFFFF" }}
        >
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            {/* Section Header */}
            <AnimatedSection animation="fade-up">
              <span
                className="inline-block px-5 py-2 rounded-full text-sm font-bold tracking-wider mb-4"
                style={{
                  background: "rgba(14,47,113,0.08)",
                  color: "#0E2F71",
                  fontFamily: "'Nunito', sans-serif",
                }}
              >
                GET IN TOUCH
              </span>
              <h2
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                style={{
                  fontFamily: "'Fredoka', sans-serif",
                  color: "#171717",
                }}
              >
                We&apos;d Love to{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #C6000F, #FF4D5A)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Hear
                </span>{" "}
                From You
              </h2>
              <p
                className="text-lg md:text-xl max-w-2xl mx-auto mb-10"
                style={{
                  fontFamily: "'Nunito', sans-serif",
                  color: "#525252",
                }}
              >
                Have questions, feedback, or just want to say hello? We&apos;re here for you!
              </p>
            </AnimatedSection>

            {/* Contact Info Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                  label: "Email Us",
                  value: "hello@lor.com",
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  ),
                  label: "Call Us",
                  value: "+1 (555) 123-4567",
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                  label: "Visit Us",
                  value: "123 Sweet Street",
                },
              ].map((info, index) => (
                <AnimatedSection key={index} animation="fade-scale" delay={index * 120}>
                  <div
                    className="p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1"
                    style={{
                      background: "#F8FAFC",
                      boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                    }}
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                      style={{
                        background: "rgba(14,47,113,0.08)",
                        color: "#0E2F71",
                      }}
                    >
                      {info.icon}
                    </div>
                    <div
                      className="text-sm font-semibold mb-1"
                      style={{
                        fontFamily: "'Nunito', sans-serif",
                        color: "#525252",
                      }}
                    >
                      {info.label}
                    </div>
                    <div
                      className="font-bold"
                      style={{
                        fontFamily: "'Nunito', sans-serif",
                        color: "#171717",
                      }}
                    >
                      {info.value}
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            {/* Contact Us Button */}
            <AnimatedSection animation="fade-up" delay={400}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "linear-gradient(135deg, #C6000F, #670008)",
                  color: "white",
                  fontFamily: "'Nunito', sans-serif",
                  boxShadow: "0 4px 20px rgba(198,0,15,0.3)",
                }}
              >
                Contact Us
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
