"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  AnimatedSection,
  FloatingElement,
  TiltCard,
  MagneticButton,
  StaggeredList,
  ParallaxSection,
  Marquee,
  PulsingDot,
} from "@/components/AnimatedElements";
import { useScrollAnimation, useCountUp } from "@/hooks/useScrollAnimation";

// Featured products data
const featuredProducts = [
  { id: "waferio", name: "Waferio", image: "/images/products-logos/waferio.png", category: "Wafers", description: "Irresistibly crunchy wafer rolls with delicious cream filling", color: "#0E2F71" },
  { id: "joy-cake", name: "Joy Cake", image: "/images/products-logos/joy-cake.png", category: "Cakes", description: "Soft sponge cake layered with sweet cream", color: "#3D5A80" },
  { id: "mega-bite", name: "Mega Bite", image: "/images/products-logos/mega-bite.png", category: "Biscuits", description: "Big, bold biscuits packed with flavor", color: "#7CB518" },
  { id: "digestive-classic", name: "Digestive Classic", image: "/images/products-logos/digestive-classic.png", category: "Biscuits", description: "Wholesome digestive biscuits with classic taste", color: "#C6000F" },
  { id: "wafemax", name: "Wafemax", image: "/images/products-logos/wafemax.png", category: "Wafers", description: "Maximum wafer crunch with cream layers", color: "#C6000F" },
  { id: "kidz", name: "Kidz", image: "/images/products-logos/kidz.png", category: "Kids", description: "Fun treats designed especially for kids", color: "#F9A825" },
];

// Benefits data
const benefits = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Premium Quality",
    description: "Every ingredient is carefully selected to ensure the highest quality in every bite.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Made with Love",
    description: "Our treats are crafted with passion and care, bringing joy to families worldwide.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Fresh Daily",
    description: "From our ovens to your table, we ensure freshness in every package.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "For Every Occasion",
    description: "Whether it is a snack break or celebration, LOR has the perfect treat for you.",
  },
];

// Testimonials data
const testimonials = [
  {
    name: "Sarah M.",
    location: "California",
    text: "The Waferio is absolutely divine! My kids cannot get enough of them. Best wafers we have ever had!",
    rating: 5,
    avatar: "S",
  },
  {
    name: "James K.",
    location: "Texas",
    text: "LOR Digestive biscuits are a staple in our home. Perfect with morning tea and so delicious!",
    rating: 5,
    avatar: "J",
  },
  {
    name: "Emily R.",
    location: "New York",
    text: "The Joy Cake is pure happiness in every bite. Soft, creamy, and absolutely perfect!",
    rating: 5,
    avatar: "E",
  },
  {
    name: "Michael T.",
    location: "Florida",
    text: "Finally found biscuits that taste like homemade! LOR has won our family over completely.",
    rating: 5,
    avatar: "M",
  },
];

// Sweet Moments gallery data
const sweetMoments = [
  { id: 1, title: "Family Tea Time", description: "Perfect moments with LOR biscuits", image: "/images/products-logos/digestive-classic.png" },
  { id: 2, title: "Kids Party", description: "Making celebrations sweeter", image: "/images/products-logos/kidz.png" },
  { id: 3, title: "Snack Break", description: "Energize your day", image: "/images/products-logos/mega-bite.png" },
  { id: 4, title: "Sweet Treats", description: "Indulge in joy", image: "/images/products-logos/joy-cake.png" },
];

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);

  // Track mouse for parallax effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
        const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section
          ref={heroRef}
          id="home"
          className="relative min-h-screen flex items-center justify-center overflow-hidden"
          style={{
            background: "linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 50%, #F1F5F9 100%)",
          }}
        >
          {/* Animated Background Blobs with Mouse Parallax */}
          <div className="absolute inset-0 overflow-hidden">
            <div
              className="absolute top-20 -left-20 w-96 h-96 bg-[#C6000F]/10 animate-blob animate-morph-slow"
              style={{
                animationDelay: "0s",
                transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
                transition: "transform 0.3s ease-out",
              }}
            />
            <div
              className="absolute top-40 right-20 w-72 h-72 bg-[#0E2F71]/20 animate-blob animate-morph"
              style={{
                animationDelay: "2s",
                transform: `translate(${mousePosition.x * -30}px, ${mousePosition.y * -30}px)`,
                transition: "transform 0.3s ease-out",
              }}
            />
            <div
              className="absolute bottom-20 left-1/3 w-80 h-80 bg-[#C6000F]/5 animate-blob animate-morph-slow"
              style={{
                animationDelay: "4s",
                transform: `translate(${mousePosition.x * 15}px, ${mousePosition.y * 15}px)`,
                transition: "transform 0.3s ease-out",
              }}
            />
            {/* Additional animated shapes */}
            <div
              className="absolute top-1/4 right-1/3 w-64 h-64 rounded-full bg-gradient-to-r from-[#0E2F71]/10 to-[#C6000F]/10 animate-spin-slow"
              style={{
                transform: `translate(${mousePosition.x * -25}px, ${mousePosition.y * -25}px) rotate(${mousePosition.x * 20}deg)`,
                transition: "transform 0.5s ease-out",
              }}
            />
          </div>

          {/* Decorative Circles with Enhanced Animations */}
          <FloatingElement animation="float" className="absolute top-32 right-1/4">
            <div className="w-4 h-4 rounded-full bg-[#C6000F] opacity-60 animate-pulse-scale" />
          </FloatingElement>
          <FloatingElement animation="float-reverse" className="absolute top-1/2 left-16">
            <div className="w-6 h-6 rounded-full bg-[#0E2F71] opacity-50 animate-glow" />
          </FloatingElement>
          <FloatingElement animation="bounce" className="absolute bottom-40 right-20">
            <div className="w-3 h-3 rounded-full bg-[#670008] opacity-70" />
          </FloatingElement>
          <FloatingElement animation="wiggle" className="absolute top-1/3 right-10">
            <div className="w-5 h-5 rounded-full bg-[#12357A] opacity-40" />
          </FloatingElement>
          {/* New decorative elements */}
          <div className="absolute top-20 left-1/4 w-2 h-2 rounded-full bg-[#C6000F] animate-bounce-subtle" style={{ animationDelay: "0.5s" }} />
          <div className="absolute bottom-1/3 left-10 w-4 h-4 rounded-full bg-[#0E2F71]/60 animate-heartbeat" />
          <div className="absolute top-2/3 right-1/3 w-3 h-3 rounded-full bg-[#670008]/50 animate-zoom-pulse" />

          {/* Main Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 flex flex-col lg:flex-row items-center gap-12">
            {/* Text Content */}
            <div className="flex-1 text-center lg:text-left">
              <div className="animate-slide-up opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
                <span
                  className="inline-block px-6 py-2 rounded-full text-sm font-bold tracking-wider mb-6 animate-gradient hover:animate-pulse-scale cursor-default"
                  style={{
                    background: "linear-gradient(135deg, #C6000F, #670008, #C6000F)",
                    backgroundSize: "200% 200%",
                    color: "white",
                    fontFamily: "'Nunito', sans-serif",
                  }}
                >
                  <span className="inline-flex items-center gap-2">
                    <span className="animate-wave-hand">✨</span>
                    DELICIOUSLY CRAFTED
                  </span>
                </span>
              </div>

              <h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-slide-up opacity-0"
                style={{
                  fontFamily: "'Fredoka', sans-serif",
                  color: "#4A2C2A",
                  animationDelay: "0.4s",
                  animationFillMode: "forwards",
                }}
              >
                Every Bite is a{" "}
                <span
                  className="relative inline-block animate-text-shimmer"
                  style={{
                    background: "linear-gradient(90deg, #C6000F, #670008, #0E2F71, #C6000F)",
                    backgroundSize: "200% auto",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Celebration
                  <svg
                    className="absolute -bottom-2 left-0 w-full animate-slide-right"
                    viewBox="0 0 200 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ animationDelay: "1s" }}
                  >
                    <path
                      d="M2 8C50 2 150 2 198 8"
                      stroke="url(#underlineGradient)"
                      strokeWidth="4"
                      strokeLinecap="round"
                      className="animate-pulse"
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
                  color: "#4A2C2A",
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
                  <Link href="/products" className="btn-primary hover:animate-pulse-scale inline-flex items-center gap-2 group">
                    Explore Products
                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:animate-bounce-x" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </MagneticButton>
                <MagneticButton strength={0.2}>
                  <Link href="/about" className="btn-secondary hover:animate-elastic-pop inline-block">
                    Our Story
                  </Link>
                </MagneticButton>
              </div>
            </div>

            {/* Hero Image / Logo Display */}
            <div className="flex-1 relative">
              <div
                className="relative animate-scale-in opacity-0"
                style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
              >
                {/* Glowing backdrop with animation */}
                <div
                  className="absolute inset-0 rounded-full blur-3xl animate-pulse-glow"
                  style={{
                    background: "radial-gradient(circle, rgba(198,0,15,0.25) 0%, transparent 70%)",
                    transform: `scale(1.5) translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`,
                    transition: "transform 0.3s ease-out",
                  }}
                />

                {/* Rotating ring decoration */}
                <div
                  className="absolute inset-0 animate-spin-slow"
                  style={{
                    border: "2px dashed rgba(198,0,15,0.1)",
                    borderRadius: "50%",
                    transform: "scale(1.3)",
                  }}
                />

                {/* Main Logo with enhanced animation */}
                <TiltCard className="relative" maxTilt={5}>
                  <div className="animate-float">
                    <Image
                      src="/images/logos/lor-logo.png"
                      alt="LOR - Delicious Treats"
                      width={500}
                      height={250}
                      className="w-full max-w-md mx-auto drop-shadow-2xl hover:drop-shadow-[0_20px_50px_rgba(198,0,15,0.3)] transition-all duration-500"
                      priority
                    />
                  </div>
                </TiltCard>

                {/* Floating Product Previews with Enhanced Animations */}
                <FloatingElement animation="float-reverse" className="absolute -top-8 -right-4 w-24 h-24">
                  <TiltCard className="w-full h-full">
                    <div
                      className="w-full h-full rounded-2xl shadow-xl flex items-center justify-center p-2 overflow-hidden hover-lift hover:animate-glow"
                      style={{ background: "white" }}
                    >
                      <Image
                        src="/images/products-logos/waferio.png"
                        alt="Waferio"
                        width={80}
                        height={80}
                        className="object-contain transition-transform hover:scale-110"
                      />
                    </div>
                  </TiltCard>
                </FloatingElement>

                <FloatingElement animation="bounce" className="absolute -bottom-4 -left-8 w-20 h-20">
                  <TiltCard className="w-full h-full">
                    <div
                      className="w-full h-full rounded-2xl shadow-xl flex items-center justify-center p-2 overflow-hidden hover-lift"
                      style={{ background: "white" }}
                    >
                      <Image
                        src="/images/products-logos/joy-cake.png"
                        alt="Joy Cake"
                        width={70}
                        height={70}
                        className="object-contain transition-transform hover:scale-110"
                      />
                    </div>
                  </TiltCard>
                </FloatingElement>

                <FloatingElement animation="wiggle" className="absolute top-1/2 -right-12 w-16 h-16">
                  <TiltCard className="w-full h-full">
                    <div
                      className="w-full h-full rounded-xl shadow-lg flex items-center justify-center p-1.5 overflow-hidden hover-lift"
                      style={{ background: "white" }}
                    >
                      <Image
                        src="/images/products-logos/mega-bite.png"
                        alt="Mega Bite"
                        width={55}
                        height={55}
                        className="object-contain transition-transform hover:scale-110"
                      />
                    </div>
                  </TiltCard>
                </FloatingElement>

                {/* New floating badge */}
                <div className="absolute -bottom-12 right-1/4 animate-bounce-subtle" style={{ animationDelay: "1s" }}>
                  <div
                    className="px-4 py-2 rounded-full text-white text-sm font-bold animate-glow"
                    style={{
                      background: "linear-gradient(135deg, #0E2F71, #12357A)",
                      fontFamily: "'Nunito', sans-serif",
                    }}
                  >
                    <span className="animate-wave-hand inline-block mr-1">🍪</span> Taste the Joy!
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-8 h-12 rounded-full border-3 border-[#C6000F]/30 flex items-start justify-center p-2">
              <div className="w-1.5 h-3 rounded-full bg-[#C6000F] animate-pulse" />
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
                d="M0 120L60 105C120 90 240 60 360 55C480 50 600 70 720 80C840 90 960 90 1080 82.5C1200 75 1320 60 1380 52.5L1440 45V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
                fill="#FFFFFF"
              />
            </svg>
          </div>
        </section>

        {/* Featured Products Section */}
        <section
          id="featured-products"
          className="relative py-24 overflow-hidden"
          style={{ background: "#FFFFFF" }}
        >
          {/* Animated Background Pattern */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 80%, rgba(198,0,15,0.05) 0%, transparent 50%),
                               radial-gradient(circle at 80% 20%, rgba(14,47,113,0.08) 0%, transparent 50%)`,
            }}
          />

          {/* Animated decorative elements */}
          <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-[#C6000F]/5 animate-morph-slow" />
          <div className="absolute bottom-20 right-20 w-48 h-48 rounded-full bg-[#0E2F71]/10 animate-morph" style={{ animationDelay: "3s" }} />

          <div className="relative z-10 max-w-7xl mx-auto px-6">
            {/* Section Header with Animations */}
            <AnimatedSection animation="fade-up" className="text-center mb-16">
              <span
                className="inline-block px-5 py-2 rounded-full text-sm font-bold tracking-wider mb-4 animate-bounce-subtle hover:animate-pulse-scale cursor-default"
                style={{
                  background: "rgba(198,0,15,0.1)",
                  color: "#C6000F",
                  fontFamily: "'Nunito', sans-serif",
                }}
              >
                <span className="inline-flex items-center gap-2">
                  <span className="animate-heartbeat">⭐</span>
                  BESTSELLERS
                </span>
              </span>
              <h2
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                style={{
                  fontFamily: "'Fredoka', sans-serif",
                  color: "#4A2C2A",
                }}
              >
                Featured{" "}
                <span
                  className="animate-text-shimmer inline-block"
                  style={{
                    background: "linear-gradient(90deg, #C6000F, #670008, #0E2F71, #C6000F)",
                    backgroundSize: "200% auto",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Products
                </span>
              </h2>
              <p
                className="text-lg md:text-xl max-w-2xl mx-auto"
                style={{
                  fontFamily: "'Nunito', sans-serif",
                  color: "#4A2C2A",
                  opacity: 0.7,
                }}
              >
                Discover our most loved treats that bring joy to families everywhere
              </p>
            </AnimatedSection>

            {/* Products Grid with Staggered Animations */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-12">
              {featuredProducts.map((product, index) => (
                <AnimatedSection
                  key={product.id}
                  animation="fade-scale"
                  delay={index * 100}
                  className="product-card group"
                >
                  <TiltCard maxTilt={8} scale={1.03}>
                    <div
                      className="relative rounded-3xl overflow-hidden cursor-pointer"
                      onMouseEnter={() => setHoveredProduct(product.id)}
                      onMouseLeave={() => setHoveredProduct(null)}
                      style={{
                        background: "white",
                        boxShadow:
                          hoveredProduct === product.id
                            ? `0 25px 50px ${product.color}40`
                            : "0 4px 20px rgba(0,0,0,0.08)",
                        transition: "box-shadow 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                      }}
                    >
                      {/* Product Image Container */}
                      <div
                        className="relative aspect-square p-6 flex items-center justify-center overflow-hidden"
                        style={{
                          background: `linear-gradient(135deg, ${product.color}40, ${product.color}25)`,
                        }}
                      >
                        {/* Animated Decorative Circles */}
                        <div
                          className="absolute w-32 h-32 rounded-full transition-all duration-700 group-hover:scale-[2] group-hover:opacity-60"
                          style={{
                            background: `${product.color}35`,
                            filter: "blur(20px)",
                          }}
                        />
                        <div
                          className="absolute w-20 h-20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-150"
                          style={{
                            background: `radial-gradient(circle, ${product.color}40, transparent 70%)`,
                            right: "20%",
                            top: "20%",
                          }}
                        />

                        <Image
                          src={product.image}
                          alt={product.name}
                          width={200}
                          height={200}
                          className="relative z-10 w-full h-full object-contain transition-all duration-500 group-hover:scale-115 group-hover:rotate-3"
                          style={{
                            filter: hoveredProduct === product.id
                              ? "drop-shadow(0 15px 25px rgba(0,0,0,0.2))"
                              : "none",
                          }}
                        />

                        {/* Sparkle effect on hover */}
                        <div className={`absolute top-4 right-4 transition-all duration-300 ${hoveredProduct === product.id ? "opacity-100 scale-100" : "opacity-0 scale-0"}`}>
                          <span className="text-2xl animate-heartbeat">✨</span>
                        </div>
                      </div>

                      {/* Product Info with slide-up effect */}
                      <div className="p-5 text-center relative overflow-hidden">
                        <span
                          className={`text-xs font-bold uppercase tracking-wider mb-2 block transition-all duration-300 ${hoveredProduct === product.id ? "animate-bounce-subtle" : ""}`}
                          style={{
                            color: product.color,
                            fontFamily: "'Nunito', sans-serif",
                          }}
                        >
                          {product.category}
                        </span>
                        <h3
                          className="text-xl font-bold mb-2 transition-colors duration-300"
                          style={{
                            fontFamily: "'Fredoka', sans-serif",
                            color: hoveredProduct === product.id ? product.color : "#4A2C2A",
                          }}
                        >
                          {product.name}
                        </h3>
                        <p
                          className="text-sm leading-relaxed transition-all duration-300"
                          style={{
                            fontFamily: "'Nunito', sans-serif",
                            color: "#4A2C2A",
                            opacity: hoveredProduct === product.id ? 0.8 : 0,
                            transform: hoveredProduct === product.id ? "translateY(0)" : "translateY(10px)",
                          }}
                        >
                          {product.description}
                        </p>
                      </div>

                      {/* Animated Hover Accent Line */}
                      <div
                        className="absolute bottom-0 left-0 right-0 h-1.5 transition-transform duration-500 origin-left scale-x-0 group-hover:scale-x-100"
                        style={{
                          background: `linear-gradient(90deg, ${product.color}, #0E2F71, #C6000F)`,
                        }}
                      />

                      {/* Corner glow effect */}
                      <div
                        className="absolute -top-10 -right-10 w-20 h-20 rounded-full transition-all duration-500 opacity-0 group-hover:opacity-100"
                        style={{
                          background: `radial-gradient(circle, ${product.color}30, transparent 70%)`,
                          filter: "blur(10px)",
                        }}
                      />
                    </div>
                  </TiltCard>
                </AnimatedSection>
              ))}
            </div>

            {/* View All Button with Enhanced Animation */}
            <AnimatedSection animation="fade-up" delay={600} className="text-center">
              <MagneticButton strength={0.25}>
                <Link
                  href="/products"
                  className="inline-flex items-center gap-3 px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 hover:-translate-y-2 hover:gap-4 group relative overflow-hidden"
                  style={{
                    background: "linear-gradient(135deg, #C6000F, #670008)",
                    color: "white",
                    fontFamily: "'Nunito', sans-serif",
                    boxShadow: "0 8px 30px rgba(198,0,15,0.35)",
                  }}
                >
                  {/* Shine effect */}
                  <span
                    className="absolute inset-0 opacity-0 group-hover:opacity-100"
                    style={{
                      background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
                      animation: "none",
                    }}
                  />
                  <span className="relative z-10">View All Products</span>
                  <svg className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-1 group-hover:animate-bounce-x" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </MagneticButton>
            </AnimatedSection>
          </div>

          {/* Enhanced Decorative Elements */}
          <FloatingElement animation="float" className="absolute top-20 left-10">
            <div className="w-20 h-20 rounded-full bg-[#C6000F]/5 animate-morph" />
          </FloatingElement>
          <FloatingElement animation="float-reverse" className="absolute bottom-40 right-10">
            <div className="w-32 h-32 rounded-full bg-[#0E2F71]/10 animate-morph-slow" />
          </FloatingElement>
          <div className="absolute top-1/2 left-5 w-4 h-4 rounded-full bg-[#670008]/20 animate-bounce-subtle" style={{ animationDelay: "0.5s" }} />
          <div className="absolute bottom-1/4 right-1/4 w-6 h-6 rounded-full bg-[#0E2F71]/15 animate-zoom-pulse" />
        </section>

        {/* Animated Marquee Banner */}
        <section className="relative py-6 overflow-hidden bg-gradient-to-r from-[#C6000F] via-[#670008] to-[#C6000F]">
          <Marquee speed={25} pauseOnHover>
            <div className="flex items-center gap-12 px-6">
              {["Premium Quality", "Made with Love", "Fresh Daily", "100% Delicious", "Family Favorite", "Best Sellers"].map((text, i) => (
                <div key={i} className="flex items-center gap-3 text-white/90">
                  <span className="text-xl animate-heartbeat">✨</span>
                  <span className="text-lg font-bold whitespace-nowrap" style={{ fontFamily: "'Nunito', sans-serif" }}>{text}</span>
                  <span className="text-xl animate-wiggle">🍪</span>
                </div>
              ))}
            </div>
          </Marquee>
        </section>

        {/* Why Choose LOR Section */}
        <section
          id="why-choose"
          className="relative py-24 overflow-hidden"
          style={{
            background: "linear-gradient(180deg, #FFFFFF 0%, #F1F5F9 100%)",
          }}
        >
          <div className="relative z-10 max-w-7xl mx-auto px-6">
            {/* Section Header with Animations */}
            <AnimatedSection animation="fade-up" className="text-center mb-16">
              <span
                className="inline-block px-5 py-2 rounded-full text-sm font-bold tracking-wider mb-4 hover:animate-jello cursor-default"
                style={{
                  background: "rgba(198,0,15,0.1)",
                  color: "#C6000F",
                  fontFamily: "'Nunito', sans-serif",
                }}
              >
                <span className="inline-flex items-center gap-2">
                  <span className="animate-pendulum inline-block">💫</span>
                  WHY LOR
                </span>
              </span>
              <h2
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                style={{
                  fontFamily: "'Fredoka', sans-serif",
                  color: "#4A2C2A",
                }}
              >
                Why Choose{" "}
                <span
                  className="relative inline-block"
                  style={{
                    background: "linear-gradient(135deg, #C6000F, #670008)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  LOR
                  <span className="absolute -right-6 -top-2 text-2xl animate-wave-hand">🍪</span>
                </span>
              </h2>
              <p
                className="text-lg md:text-xl max-w-2xl mx-auto"
                style={{
                  fontFamily: "'Nunito', sans-serif",
                  color: "#4A2C2A",
                  opacity: 0.7,
                }}
              >
                Experience the difference that quality and passion make in every treat
              </p>
            </AnimatedSection>

            {/* Benefits Grid with Staggered Animations */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <AnimatedSection
                  key={index}
                  animation="flip-y"
                  delay={index * 150}
                >
                  <TiltCard maxTilt={6} className="h-full">
                    <div
                      className="group relative p-8 rounded-3xl transition-all duration-500 hover:-translate-y-3 text-center h-full hover:shadow-2xl"
                      style={{
                        background: "white",
                        boxShadow: "0 10px 40px rgba(0,0,0,0.05)",
                      }}
                    >
                      {/* Icon with enhanced animation */}
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:animate-glow"
                        style={{
                          background: "linear-gradient(135deg, rgba(198,0,15,0.1), rgba(103,0,8,0.05))",
                          color: "#C6000F",
                        }}
                      >
                        <span className="group-hover:animate-bounce-subtle">{benefit.icon}</span>
                      </div>

                      <h3
                        className="text-xl font-bold mb-3 transition-colors duration-300 group-hover:text-[#C6000F]"
                        style={{
                          fontFamily: "'Fredoka', sans-serif",
                          color: "#4A2C2A",
                        }}
                      >
                        {benefit.title}
                      </h3>

                      <p
                        className="leading-relaxed transition-all duration-300 group-hover:opacity-90"
                        style={{
                          fontFamily: "'Nunito', sans-serif",
                          color: "#4A2C2A",
                          opacity: 0.7,
                        }}
                      >
                        {benefit.description}
                      </p>

                      {/* Animated Hover Accent */}
                      <div
                        className="absolute bottom-0 left-8 right-8 h-1.5 rounded-full transition-all duration-500 scale-x-0 group-hover:scale-x-100"
                        style={{
                          background: "linear-gradient(90deg, #C6000F, #0E2F71, #C6000F)",
                        }}
                      />

                      {/* Corner number badge */}
                      <div
                        className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold opacity-10 group-hover:opacity-30 transition-opacity duration-300"
                        style={{
                          background: "linear-gradient(135deg, #C6000F, #670008)",
                          color: "white",
                          fontFamily: "'Fredoka', sans-serif",
                        }}
                      >
                        {index + 1}
                      </div>
                    </div>
                  </TiltCard>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-1/4 right-0 w-64 h-64 rounded-full bg-[#C6000F]/5 blur-3xl" />
          <div className="absolute bottom-1/4 left-0 w-48 h-48 rounded-full bg-[#0E2F71]/10 blur-3xl" />
        </section>

        {/* Testimonials Section */}
        <section
          id="testimonials"
          className="relative py-24 overflow-hidden"
          style={{ background: "#FFFFFF" }}
        >
          {/* Animated background decorations */}
          <div className="absolute top-1/4 left-10 w-40 h-40 rounded-full bg-[#C6000F]/5 animate-morph-slow" />
          <div className="absolute bottom-1/4 right-10 w-32 h-32 rounded-full bg-[#0E2F71]/10 animate-morph" style={{ animationDelay: "2s" }} />

          <div className="relative z-10 max-w-7xl mx-auto px-6">
            {/* Section Header with Animation */}
            <AnimatedSection animation="fade-up" className="text-center mb-16">
              <span
                className="inline-block px-5 py-2 rounded-full text-sm font-bold tracking-wider mb-4 hover:animate-elastic-pop cursor-default"
                style={{
                  background: "rgba(198,0,15,0.1)",
                  color: "#C6000F",
                  fontFamily: "'Nunito', sans-serif",
                }}
              >
                <span className="inline-flex items-center gap-2">
                  <span className="animate-heartbeat">❤️</span>
                  TESTIMONIALS
                </span>
              </span>
              <h2
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                style={{
                  fontFamily: "'Fredoka', sans-serif",
                  color: "#4A2C2A",
                }}
              >
                What Our{" "}
                <span
                  className="animate-text-shimmer inline-block"
                  style={{
                    background: "linear-gradient(90deg, #C6000F, #670008, #0E2F71, #C6000F)",
                    backgroundSize: "200% auto",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Customers
                </span>{" "}
                Say
              </h2>
            </AnimatedSection>

            {/* Testimonials Carousel with Enhanced Animations */}
            <AnimatedSection animation="fade-scale" className="relative max-w-4xl mx-auto">
              <TiltCard maxTilt={3}>
                <div
                  className="relative p-8 md:p-12 rounded-3xl transition-all duration-500 hover:shadow-2xl"
                  style={{
                    background: "white",
                    boxShadow: "0 20px 60px rgba(0,0,0,0.08)",
                  }}
                >
                  {/* Animated Quote Icon */}
                  <div
                    className="absolute -top-6 left-8 w-12 h-12 rounded-full flex items-center justify-center animate-bounce-subtle"
                    style={{
                      background: "linear-gradient(135deg, #C6000F, #670008)",
                      boxShadow: "0 8px 25px rgba(198,0,15,0.4)",
                    }}
                  >
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>

                  {/* Testimonial Content with transition */}
                  <div className="text-center">
                    <p
                      key={currentTestimonial}
                      className="text-xl md:text-2xl mb-8 leading-relaxed animate-fade-in-up"
                      style={{
                        fontFamily: "'Nunito', sans-serif",
                        color: "#4A2C2A",
                      }}
                    >
                      &ldquo;{testimonials[currentTestimonial].text}&rdquo;
                    </p>

                    {/* Animated Rating Stars */}
                    <div className="flex justify-center gap-1 mb-4">
                      {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-6 h-6 animate-bounce-subtle"
                          style={{ animationDelay: `${i * 100}ms` }}
                          fill="#0E2F71"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>

                    {/* Customer Info with animation */}
                    <div
                      key={`info-${currentTestimonial}`}
                      className="flex items-center justify-center gap-4 animate-slide-up"
                    >
                      <div
                        className="w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold text-white animate-pulse-scale"
                        style={{
                          background: "linear-gradient(135deg, #C6000F, #670008)",
                          fontFamily: "'Fredoka', sans-serif",
                          boxShadow: "0 6px 20px rgba(198,0,15,0.35)",
                        }}
                      >
                        {testimonials[currentTestimonial].avatar}
                      </div>
                      <div className="text-left">
                        <div
                          className="font-bold text-lg"
                          style={{
                            fontFamily: "'Fredoka', sans-serif",
                            color: "#4A2C2A",
                          }}
                        >
                          {testimonials[currentTestimonial].name}
                        </div>
                        <div
                          className="text-sm flex items-center gap-1"
                          style={{
                            fontFamily: "'Nunito', sans-serif",
                            color: "#4A2C2A",
                            opacity: 0.6,
                          }}
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                          </svg>
                          {testimonials[currentTestimonial].location}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Navigation Dots */}
                  <div className="flex justify-center gap-3 mt-8">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentTestimonial(index)}
                        className={`rounded-full transition-all duration-500 hover:scale-125 ${
                          currentTestimonial === index ? "w-10 h-3" : "w-3 h-3 hover:bg-[#C6000F]/50"
                        }`}
                        style={{
                          background:
                            currentTestimonial === index
                              ? "linear-gradient(135deg, #C6000F, #670008)"
                              : "rgba(198,0,15,0.2)",
                          boxShadow: currentTestimonial === index ? "0 4px 15px rgba(198,0,15,0.4)" : "none",
                        }}
                        aria-label={`Go to testimonial ${index + 1}`}
                      />
                    ))}
                  </div>

                  {/* Decorative corner elements */}
                  <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-[#0E2F71]/5 animate-spin-slow" />
                  <div className="absolute bottom-4 left-4 w-16 h-16 rounded-full bg-[#C6000F]/5 animate-morph" />
                </div>
              </TiltCard>
            </AnimatedSection>
          </div>

          {/* Enhanced Decorative Elements */}
          <FloatingElement animation="float" className="absolute top-20 right-10">
            <div className="w-24 h-24 rounded-full bg-[#C6000F]/5 animate-glow" />
          </FloatingElement>
          <FloatingElement animation="float-reverse" className="absolute bottom-20 left-10">
            <div className="w-16 h-16 rounded-full bg-[#0E2F71]/10" />
          </FloatingElement>
          <div className="absolute top-1/2 right-1/4 w-4 h-4 rounded-full bg-[#670008]/20 animate-bounce-subtle" />
        </section>

        {/* Sweet Moments Gallery Section */}
        <section
          id="sweet-moments"
          className="relative py-24 overflow-hidden"
          style={{
            background: "linear-gradient(180deg, #F1F5F9 0%, #FFFFFF 100%)",
          }}
        >
          <div className="relative z-10 max-w-7xl mx-auto px-6">
            {/* Section Header */}
            <div className="text-center mb-16">
              <span
                className="inline-block px-5 py-2 rounded-full text-sm font-bold tracking-wider mb-4"
                style={{
                  background: "rgba(198,0,15,0.1)",
                  color: "#C6000F",
                  fontFamily: "'Nunito', sans-serif",
                }}
              >
                GALLERY
              </span>
              <h2
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                style={{
                  fontFamily: "'Fredoka', sans-serif",
                  color: "#4A2C2A",
                }}
              >
                Sweet{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #C6000F, #670008)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Moments
                </span>
              </h2>
              <p
                className="text-lg md:text-xl max-w-2xl mx-auto"
                style={{
                  fontFamily: "'Nunito', sans-serif",
                  color: "#4A2C2A",
                  opacity: 0.7,
                }}
              >
                Celebrate life&apos;s precious moments with LOR treats
              </p>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {sweetMoments.map((moment, index) => (
                <div
                  key={moment.id}
                  className={`group relative overflow-hidden rounded-3xl ${
                    index === 0 ? "md:col-span-2 md:row-span-2" : ""
                  }`}
                  style={{
                    aspectRatio: index === 0 ? "1/1" : "1/1",
                  }}
                >
                  <div
                    className="absolute inset-0 transition-transform duration-500 group-hover:scale-110"
                    style={{
                      background: `linear-gradient(135deg, rgba(198,0,15,0.1), rgba(14,47,113,0.1))`,
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    <Image
                      src={moment.image}
                      alt={moment.title}
                      width={200}
                      height={200}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div
                    className="absolute inset-0 flex flex-col items-center justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: "linear-gradient(to top, rgba(74,44,42,0.9), transparent)",
                    }}
                  >
                    <h3
                      className="text-white text-lg md:text-xl font-bold mb-1"
                      style={{ fontFamily: "'Fredoka', sans-serif" }}
                    >
                      {moment.title}
                    </h3>
                    <p
                      className="text-white/80 text-sm"
                      style={{ fontFamily: "'Nunito', sans-serif" }}
                    >
                      {moment.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Preview Section */}
        <section
          id="about"
          className="relative py-24 overflow-hidden"
          style={{ background: "#FFFFFF" }}
        >
          {/* Decorative Wave Top */}
          <div className="absolute top-0 left-0 right-0">
            <svg
              viewBox="0 0 1440 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full"
              preserveAspectRatio="none"
            >
              <path
                d="M0 0L60 10C120 20 240 40 360 50C480 60 600 60 720 50C840 40 960 20 1080 15C1200 10 1320 20 1380 25L1440 30V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0Z"
                fill="#FFFFFF"
              />
            </svg>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6">
            {/* Main Content */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Image Side */}
              <div className="relative">
                <div className="relative">
                  {/* Main Image Container */}
                  <div
                    className="relative rounded-[3rem] overflow-hidden"
                    style={{
                      boxShadow: "0 30px 60px rgba(198,0,15,0.15)",
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
                        className="w-full max-w-sm animate-float"
                      />
                    </div>
                  </div>

                  {/* Floating Badge */}
                  <div
                    className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full flex flex-col items-center justify-center animate-wiggle"
                    style={{
                      background: "linear-gradient(135deg, #C6000F, #670008)",
                      boxShadow: "0 10px 30px rgba(198,0,15,0.4)",
                    }}
                  >
                    <span
                      className="text-3xl font-bold text-white"
                      style={{ fontFamily: "'Fredoka', sans-serif" }}
                    >
                      100%
                    </span>
                    <span
                      className="text-xs text-white/80 font-semibold"
                      style={{ fontFamily: "'Nunito', sans-serif" }}
                    >
                      QUALITY
                    </span>
                  </div>

                  {/* Decorative Dots */}
                  <div
                    className="absolute -top-8 -left-8 w-24 h-24 rounded-full"
                    style={{
                      background: "radial-gradient(circle, #0E2F71 2px, transparent 2px)",
                      backgroundSize: "12px 12px",
                      opacity: 0.3,
                    }}
                  />
                </div>
              </div>

              {/* Text Side */}
              <div>
                <span
                  className="inline-block px-5 py-2 rounded-full text-sm font-bold tracking-wider mb-6"
                  style={{
                    background: "rgba(198,0,15,0.1)",
                    color: "#C6000F",
                    fontFamily: "'Nunito', sans-serif",
                  }}
                >
                  ABOUT LOR
                </span>

                <h2
                  className="text-4xl md:text-5xl font-bold mb-6"
                  style={{
                    fontFamily: "'Fredoka', sans-serif",
                    color: "#4A2C2A",
                  }}
                >
                  Crafting{" "}
                  <span
                    style={{
                      background: "linear-gradient(135deg, #C6000F, #670008)",
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
                    color: "#4A2C2A",
                    opacity: 0.8,
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
                    color: "#4A2C2A",
                    opacity: 0.8,
                  }}
                >
                  From our classic biscuits to our innovative wafers, every LOR product
                  is made with premium ingredients and a commitment to quality that
                  you can taste in every bite.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 mb-8">
                  {[
                    { number: "22+", label: "Products" },
                    { number: "100%", label: "Quality" },
                    { number: "1M+", label: "Happy Customers" },
                  ].map((stat, index) => (
                    <div key={index} className="text-center">
                      <div
                        className="text-3xl md:text-4xl font-bold mb-1"
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
                        className="text-sm font-semibold"
                        style={{
                          fontFamily: "'Nunito', sans-serif",
                          color: "#4A2C2A",
                          opacity: 0.6,
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
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-1/4 right-0 w-64 h-64 rounded-full bg-[#C6000F]/5 blur-3xl" />
          <div className="absolute bottom-1/4 left-0 w-48 h-48 rounded-full bg-[#0E2F71]/10 blur-3xl" />
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="relative py-24 overflow-hidden"
          style={{
            background: "linear-gradient(180deg, #FFFFFF 0%, #F1F5F9 100%)",
          }}
        >
          {/* Background Decoration */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 10% 90%, rgba(198,0,15,0.05) 0%, transparent 40%),
                               radial-gradient(circle at 90% 10%, rgba(14,47,113,0.08) 0%, transparent 40%)`,
            }}
          />

          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            {/* Section Header */}
            <span
              className="inline-block px-5 py-2 rounded-full text-sm font-bold tracking-wider mb-4"
              style={{
                background: "rgba(198,0,15,0.1)",
                color: "#C6000F",
                fontFamily: "'Nunito', sans-serif",
              }}
            >
              GET IN TOUCH
            </span>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              style={{
                fontFamily: "'Fredoka', sans-serif",
                color: "#4A2C2A",
              }}
            >
              We&apos;d Love to{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #C6000F, #670008)",
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
                color: "#4A2C2A",
                opacity: 0.7,
              }}
            >
              Have questions, feedback, or just want to say hello? We&apos;re here for you!
            </p>

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
                <div
                  key={index}
                  className="p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: "white",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                    style={{
                      background: "linear-gradient(135deg, rgba(198,0,15,0.1), rgba(103,0,8,0.05))",
                      color: "#C6000F",
                    }}
                  >
                    {info.icon}
                  </div>
                  <div
                    className="text-sm font-semibold mb-1"
                    style={{
                      fontFamily: "'Nunito', sans-serif",
                      color: "#4A2C2A",
                      opacity: 0.6,
                    }}
                  >
                    {info.label}
                  </div>
                  <div
                    className="font-bold"
                    style={{
                      fontFamily: "'Nunito', sans-serif",
                      color: "#4A2C2A",
                    }}
                  >
                    {info.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Us Button */}
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
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
