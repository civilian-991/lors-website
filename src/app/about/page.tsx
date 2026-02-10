"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Animated counter hook
function useCountUp(end: number, duration: number = 2000, startOnView: boolean = true) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!startOnView) {
      setHasStarted(true);
    }
  }, [startOnView]);

  useEffect(() => {
    if (startOnView && ref.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !hasStarted) {
            setHasStarted(true);
          }
        },
        { threshold: 0.5 }
      );
      observer.observe(ref.current);
      return () => observer.disconnect();
    }
  }, [startOnView, hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [hasStarted, end, duration]);

  return { count, ref };
}

function StatCard({ stat }: { stat: { value: number; suffix: string; label: string; icon: string } }) {
  const { count, ref } = useCountUp(stat.value, 2000);
  return (
    <div
      ref={ref}
      className="group text-center p-8 rounded-3xl transition-all duration-500 hover:-translate-y-3"
      style={{
        background: "rgba(255,255,255,0.05)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      {/* Icon */}
      <div
        className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all duration-500 group-hover:scale-110"
        style={{
          background: "linear-gradient(135deg, #C6000F, #670008)",
          boxShadow: "0 10px 30px rgba(198,0,15,0.3)",
        }}
      >
        {stat.icon === "package" && (
          <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
        )}
        {stat.icon === "shield" && (
          <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        )}
        {stat.icon === "heart" && (
          <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        )}
        {stat.icon === "globe" && (
          <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )}
      </div>

      {/* Number */}
      <div
        className="text-4xl md:text-5xl font-bold mb-2"
        style={{
          fontFamily: "'Fredoka', sans-serif",
          background: "linear-gradient(135deg, #FFFFFF, #0E2F71)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {count}{stat.suffix}
      </div>

      {/* Label */}
      <div
        className="text-lg font-semibold"
        style={{
          fontFamily: "'Nunito', sans-serif",
          color: "rgba(255,255,255,0.7)",
        }}
      >
        {stat.label}
      </div>
    </div>
  );
}

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Stats data with animated counters
  const stats = [
    { value: 37, suffix: "+", label: "Products", icon: "package" },
    { value: 100, suffix: "%", label: "Quality", icon: "shield" },
    { value: 1, suffix: "M+", label: "Happy Customers", icon: "heart" },
    { value: 50, suffix: "+", label: "Countries", icon: "globe" },
  ];

  // Core values data
  const coreValues = [
    {
      title: "Quality",
      description: "We never compromise on the quality of our ingredients. Every product undergoes rigorous testing to ensure it meets our high standards.",
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      color: "#C6000F",
    },
    {
      title: "Joy",
      description: "We believe every moment deserves a touch of sweetness. Our treats are designed to bring smiles and create happy memories.",
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: "#0E2F71",
    },
    {
      title: "Innovation",
      description: "We continuously explore new flavors, textures, and experiences to surprise and delight our customers with every new creation.",
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      color: "#670008",
    },
    {
      title: "Family",
      description: "From our family to yours, we craft treats that bring people together. Sharing is at the heart of everything we do.",
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      color: "#12357A",
    },
  ];

  // Timeline milestones
  const milestones = [
    {
      year: "2010",
      title: "The Sweet Beginning",
      description: "LOR was founded with a simple dream: to create the most delicious treats that bring joy to every household.",
    },
    {
      year: "2013",
      title: "First Major Export",
      description: "Our products crossed borders for the first time, reaching customers in neighboring countries who fell in love with our taste.",
    },
    {
      year: "2016",
      title: "Innovation Award",
      description: "Received international recognition for our innovative approach to confectionery and commitment to quality.",
    },
    {
      year: "2019",
      title: "Sustainability Initiative",
      description: "Launched our green initiative, committing to eco-friendly packaging and sustainable sourcing practices.",
    },
    {
      year: "2022",
      title: "Global Expansion",
      description: "Expanded to over 50 countries, bringing LOR's delicious treats to millions of new customers worldwide.",
    },
    {
      year: "2024",
      title: "A Million Smiles",
      description: "Celebrated serving over 1 million happy customers, a testament to our commitment to quality and joy.",
    },
  ];

  // Mission and Vision data
  const missionVision = [
    {
      title: "Our Mission",
      description: "To craft delicious, high-quality treats that create moments of joy and bring people together. We are committed to using premium ingredients and innovative recipes to deliver exceptional taste in every bite.",
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: "Our Vision",
      description: "To become the world's most loved confectionery brand, recognized for our unwavering commitment to quality, innovation, and the happiness we bring to families across the globe.",
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
    },
  ];

  return (
    <>
      <Header />
      <main className="overflow-hidden" id="main">
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
          {/* Background Gradient */}
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(135deg, #670008 0%, #C6000F 50%, #4A2C2A 100%)",
            }}
          />

          {/* Animated Blob Shapes */}
          <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-white/10 animate-blob blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-[#0E2F71]/20 animate-blob blur-3xl" style={{ animationDelay: "2s" }} />
          <div className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full bg-[#C6000F]/30 animate-blob blur-2xl" style={{ animationDelay: "4s" }} />

          {/* Dots Pattern Overlay */}
          <div className="absolute inset-0 dots-pattern opacity-5" />

          {/* Hero Content */}
          <div className={`relative z-10 text-center px-6 max-w-5xl mx-auto transition-[opacity,transform] duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            {/* Badge */}
            <span
              className="inline-block px-6 py-2 rounded-full text-sm font-bold tracking-widest mb-8 animate-float"
              style={{
                background: "rgba(255,255,255,0.15)",
                color: "white",
                backdropFilter: "blur(10px)",
                fontFamily: "'Nunito', sans-serif",
              }}
            >
              DISCOVER OUR JOURNEY
            </span>

            {/* Main Headline */}
            <h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
              style={{
                fontFamily: "'Fredoka', sans-serif",
                color: "white",
                textShadow: "0 4px 30px rgba(0,0,0,0.3)",
              }}
            >
              Our Sweet{" "}
              <span
                className="relative inline-block"
                style={{
                  background: "linear-gradient(135deg, #FFFFFF, #0E2F71)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Story
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                  <path d="M2 8C50 3 150 3 198 8" stroke="#0E2F71" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            {/* Subtitle */}
            <p
              className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed"
              style={{
                fontFamily: "'Nunito', sans-serif",
                color: "rgba(255,255,255,0.9)",
              }}
            >
              From a small kitchen to kitchens around the world, discover the passion, dedication, and love that goes into every LOR treat.
            </p>

            {/* Scroll Indicator */}
            <div className="animate-bounce">
              <svg className="w-8 h-8 mx-auto text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>

          {/* Decorative Wave Bottom */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg
              viewBox="0 0 1440 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full"
              preserveAspectRatio="none"
            >
              <path
                d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
                fill="#0E2F71"
              />
            </svg>
          </div>
        </section>

        {/* Brand Story Section */}
        <section className="relative py-24" style={{ background: "linear-gradient(180deg, #0E2F71 0%, #071A45 100%)" }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Image Side */}
              <div className="relative order-2 lg:order-1">
                <div className="relative">
                  {/* Main Image Container */}
                  <div
                    className="relative rounded-[3rem] overflow-hidden animate-slide-up"
                    style={{
                      boxShadow: "0 40px 80px rgba(198,0,15,0.15)",
                    }}
                  >
                    <div
                      className="aspect-[4/3] flex items-center justify-center p-16"
                      style={{
                        background: "linear-gradient(135deg, #F1F5F9, #FFFFFF)",
                      }}
                    >
                      <Image
                        src="/images/logos/lor-logo.png"
                        alt="LOR Brand Story"
                        width={400}
                        height={200}
                        loading="lazy"
                        className="w-full max-w-md animate-float"
                      />
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <div
                    className="absolute -top-8 -right-8 w-24 h-24 rounded-full flex items-center justify-center animate-wiggle"
                    style={{
                      background: "linear-gradient(135deg, #0E2F71, #12357A)",
                      boxShadow: "0 10px 30px rgba(14,47,113,0.4)",
                    }}
                  >
                    <span className="text-2xl">🍫</span>
                  </div>

                  <div
                    className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full flex items-center justify-center animate-float-delay"
                    style={{
                      background: "linear-gradient(135deg, #C6000F, #670008)",
                      boxShadow: "0 10px 30px rgba(198,0,15,0.4)",
                    }}
                  >
                    <span className="text-xl">🍪</span>
                  </div>

                  {/* Decorative Dots */}
                  <div
                    className="absolute -bottom-12 right-12 w-32 h-32 rounded-full"
                    style={{
                      background: "radial-gradient(circle, #C6000F 2px, transparent 2px)",
                      backgroundSize: "14px 14px",
                      opacity: 0.15,
                    }}
                  />
                </div>
              </div>

              {/* Text Side */}
              <div className="order-1 lg:order-2">
                <span
                  className="inline-block px-5 py-2 rounded-full text-sm font-bold tracking-wider mb-6"
                  style={{
                    background: "rgba(198,0,15,0.3)",
                    color: "#FFFFFF",
                    fontFamily: "'Nunito', sans-serif",
                  }}
                >
                  OUR STORY
                </span>

                <h2
                  className="text-4xl md:text-5xl font-bold mb-8"
                  style={{
                    fontFamily: "'Fredoka', sans-serif",
                    color: "#FFFFFF",
                  }}
                >
                  A Passion for{" "}
                  <span
                    style={{
                      background: "linear-gradient(135deg, #C6000F, #FF6B6B)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Delicious
                  </span>{" "}
                  Treats
                </h2>

                <div className="space-y-6">
                  <p
                    className="text-lg leading-relaxed"
                    style={{
                      fontFamily: "'Nunito', sans-serif",
                      color: "rgba(255,255,255,0.8)",
                    }}
                  >
                    It all started with a simple belief: that every moment deserves a touch of sweetness. In a small kitchen filled with the aroma of freshly baked treats, LOR was born from a family&apos;s love for creating delicious confections that bring people together.
                  </p>

                  <p
                    className="text-lg leading-relaxed"
                    style={{
                      fontFamily: "'Nunito', sans-serif",
                      color: "rgba(255,255,255,0.8)",
                    }}
                  >
                    What began as a passion project quickly grew into something extraordinary. Our recipes, perfected over generations, combine the finest ingredients with innovative techniques to create treats that are simply irresistible.
                  </p>

                  <p
                    className="text-lg leading-relaxed"
                    style={{
                      fontFamily: "'Nunito', sans-serif",
                      color: "rgba(255,255,255,0.8)",
                    }}
                  >
                    Today, LOR brings joy to millions of customers across the globe. But our heart remains the same: to create moments of happiness, one delicious bite at a time.
                  </p>
                </div>

                {/* Signature */}
                <div className="mt-10 pt-8 border-t border-white/20">
                  <p
                    className="italic text-lg"
                    style={{
                      fontFamily: "'Nunito', sans-serif",
                      color: "rgba(255,255,255,0.7)",
                    }}
                  >
                    &quot;Every treat we make carries a piece of our heart.&quot;
                  </p>
                  <p
                    className="mt-2 font-bold"
                    style={{
                      fontFamily: "'Fredoka', sans-serif",
                      color: "#C6000F",
                    }}
                  >
                    - The LOR Family
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-1/4 right-0 w-64 h-64 rounded-full bg-[#C6000F]/10 blur-3xl" />
          <div className="absolute bottom-1/4 left-0 w-48 h-48 rounded-full bg-white/5 blur-3xl" />
        </section>

        {/* Mission & Vision Section */}
        <section
          className="relative py-24 overflow-hidden"
          style={{
            background: "linear-gradient(180deg, #071A45 0%, #0E2F71 100%)",
          }}
        >
          {/* Wave Top */}
          <div className="absolute top-0 left-0 right-0">
            <svg viewBox="0 0 1440 60" fill="none" className="w-full" preserveAspectRatio="none">
              <path d="M0 60L1440 60L1440 0C1200 40 960 50 720 45C480 40 240 25 0 0L0 60Z" fill="#071A45" />
            </svg>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span
                className="inline-block px-5 py-2 rounded-full text-sm font-bold tracking-wider mb-6"
                style={{
                  background: "rgba(198,0,15,0.3)",
                  color: "#FFFFFF",
                  fontFamily: "'Nunito', sans-serif",
                }}
              >
                WHAT DRIVES US
              </span>
              <h2
                className="text-4xl md:text-5xl font-bold"
                style={{
                  fontFamily: "'Fredoka', sans-serif",
                  color: "#FFFFFF",
                }}
              >
                Mission & Vision
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
              {missionVision.map((item, index) => (
                <div
                  key={index}
                  className="group relative p-10 rounded-[2rem] transition-[transform,box-shadow] duration-500 hover:-translate-y-3"
                  style={{
                    background: "white",
                    boxShadow: "0 20px 60px rgba(0,0,0,0.08)",
                  }}
                >
                  {/* Icon */}
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
                    style={{
                      background: index === 0
                        ? "linear-gradient(135deg, #C6000F, #670008)"
                        : "linear-gradient(135deg, #0E2F71, #12357A)",
                      color: "white",
                      boxShadow: index === 0
                        ? "0 10px 30px rgba(198,0,15,0.3)"
                        : "0 10px 30px rgba(14,47,113,0.3)",
                    }}
                  >
                    {item.icon}
                  </div>

                  <h3
                    className="text-2xl md:text-3xl font-bold mb-4"
                    style={{
                      fontFamily: "'Fredoka', sans-serif",
                      color: "#4A2C2A",
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    className="text-lg leading-relaxed"
                    style={{
                      fontFamily: "'Nunito', sans-serif",
                      color: "#4A2C2A",
                      opacity: 0.8,
                    }}
                  >
                    {item.description}
                  </p>

                  {/* Decorative corner */}
                  <div
                    className="absolute top-6 right-6 w-16 h-16 rounded-full opacity-10"
                    style={{
                      background: index === 0
                        ? "radial-gradient(circle, #C6000F 2px, transparent 2px)"
                        : "radial-gradient(circle, #0E2F71 2px, transparent 2px)",
                      backgroundSize: "8px 8px",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="relative py-24" style={{ background: "linear-gradient(180deg, #0E2F71 0%, #071A45 100%)" }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span
                className="inline-block px-5 py-2 rounded-full text-sm font-bold tracking-wider mb-6"
                style={{
                  background: "rgba(198,0,15,0.3)",
                  color: "#FFFFFF",
                  fontFamily: "'Nunito', sans-serif",
                }}
              >
                WHAT WE STAND FOR
              </span>
              <h2
                className="text-4xl md:text-5xl font-bold mb-4"
                style={{
                  fontFamily: "'Fredoka', sans-serif",
                  color: "#FFFFFF",
                }}
              >
                Our Core Values
              </h2>
              <p
                className="text-lg max-w-2xl mx-auto"
                style={{
                  fontFamily: "'Nunito', sans-serif",
                  color: "rgba(255,255,255,0.7)",
                }}
              >
                The principles that guide everything we do, from sourcing ingredients to delivering smiles.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {coreValues.map((value, index) => (
                <div
                  key={index}
                  className={`group relative p-8 rounded-3xl transition-all duration-500 hover:-translate-y-4 animate-slide-up stagger-${index + 1}`}
                  style={{
                    background: "white",
                    boxShadow: "0 15px 50px rgba(0,0,0,0.08)",
                  }}
                >
                  {/* Icon */}
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6"
                    style={{
                      background: `linear-gradient(135deg, ${value.color}15, ${value.color}05)`,
                      color: value.color,
                    }}
                  >
                    {value.icon}
                  </div>

                  <h3
                    className="text-xl font-bold mb-3"
                    style={{
                      fontFamily: "'Fredoka', sans-serif",
                      color: "#4A2C2A",
                    }}
                  >
                    {value.title}
                  </h3>

                  <p
                    className="leading-relaxed"
                    style={{
                      fontFamily: "'Nunito', sans-serif",
                      color: "#4A2C2A",
                      opacity: 0.7,
                    }}
                  >
                    {value.description}
                  </p>

                  {/* Hover accent bar */}
                  <div
                    className="absolute bottom-0 left-6 right-6 h-1 rounded-full transition-all duration-500 scale-x-0 group-hover:scale-x-100"
                    style={{
                      background: `linear-gradient(90deg, ${value.color}, ${value.color}80)`,
                    }}
                  />

                  {/* Floating number */}
                  <div
                    className="absolute top-4 right-4 text-6xl font-bold opacity-5 transition-all duration-500 group-hover:opacity-10"
                    style={{
                      fontFamily: "'Fredoka', sans-serif",
                      color: value.color,
                    }}
                  >
                    {index + 1}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* By The Numbers Section */}
        <section
          className="relative py-24 overflow-hidden"
          style={{
            background: "linear-gradient(180deg, #071A45 0%, #0E2F71 100%)",
          }}
        >
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-[#C6000F]/15 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-white/5 blur-3xl" />

          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span
                className="inline-block px-5 py-2 rounded-full text-sm font-bold tracking-wider mb-6"
                style={{
                  background: "rgba(255,255,255,0.1)",
                  color: "white",
                  fontFamily: "'Nunito', sans-serif",
                }}
              >
                OUR IMPACT
              </span>
              <h2
                className="text-4xl md:text-5xl font-bold"
                style={{
                  fontFamily: "'Fredoka', sans-serif",
                  color: "white",
                }}
              >
                By The Numbers
              </h2>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <StatCard key={index} stat={stat} />
              ))}
            </div>
          </div>
        </section>

        {/* Team/Culture Section */}
        <section className="relative py-24 overflow-hidden" style={{ background: "linear-gradient(180deg, #0E2F71 0%, #071A45 100%)" }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span
                className="inline-block px-5 py-2 rounded-full text-sm font-bold tracking-wider mb-6"
                style={{
                  background: "rgba(198,0,15,0.3)",
                  color: "#FFFFFF",
                  fontFamily: "'Nunito', sans-serif",
                }}
              >
                OUR PEOPLE
              </span>
              <h2
                className="text-4xl md:text-5xl font-bold mb-4"
                style={{
                  fontFamily: "'Fredoka', sans-serif",
                  color: "#FFFFFF",
                }}
              >
                Meet The Sweet Team
              </h2>
              <p
                className="text-lg max-w-2xl mx-auto"
                style={{
                  fontFamily: "'Nunito', sans-serif",
                  color: "rgba(255,255,255,0.7)",
                }}
              >
                The passionate people behind every delicious LOR creation.
              </p>
            </div>

            {/* Team Grid - Image Placeholders */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="group relative aspect-square rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2"
                  style={{
                    background: `linear-gradient(135deg, ${item % 2 === 0 ? "#F1F5F9" : "#FFFFFF"}, ${item % 2 === 0 ? "#FFFFFF" : "#F1F5F9"})`,
                    boxShadow: "0 15px 40px rgba(0,0,0,0.08)",
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="w-24 h-24 rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110"
                      style={{
                        background: "rgba(198,0,15,0.1)",
                        color: "#C6000F",
                      }}
                    >
                      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  </div>

                  {/* Hover overlay */}
                  <div
                    className="absolute inset-0 flex flex-col items-center justify-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-500"
                    style={{
                      background: "linear-gradient(180deg, transparent 0%, rgba(74,44,42,0.9) 100%)",
                    }}
                  >
                    <p
                      className="text-lg font-bold text-white"
                      style={{ fontFamily: "'Fredoka', sans-serif" }}
                    >
                      Team Member
                    </p>
                    <p
                      className="text-sm text-white/70"
                      style={{ fontFamily: "'Nunito', sans-serif" }}
                    >
                      Sweet Expert
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Culture Statement */}
            <div
              className="relative p-10 md:p-16 rounded-[2rem] text-center"
              style={{
                background: "linear-gradient(135deg, #C6000F, #670008)",
                boxShadow: "0 30px 80px rgba(198,0,15,0.25)",
              }}
            >
              {/* Decorative blobs */}
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-[#0E2F71]/20 blur-2xl" />

              <div className="relative z-10">
                <h3
                  className="text-3xl md:text-4xl font-bold mb-6"
                  style={{
                    fontFamily: "'Fredoka', sans-serif",
                    color: "white",
                  }}
                >
                  Our Culture is Built on Joy
                </h3>
                <p
                  className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
                  style={{
                    fontFamily: "'Nunito', sans-serif",
                    color: "rgba(255,255,255,0.9)",
                  }}
                >
                  At LOR, we believe that happy people make happy treats. Our team is a family united by a shared passion for creating delicious moments. We celebrate creativity, encourage innovation, and most importantly, we have fun doing what we love.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section
          className="relative py-24 overflow-hidden"
          style={{
            background: "linear-gradient(180deg, #071A45 0%, #0E2F71 100%)",
          }}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span
                className="inline-block px-5 py-2 rounded-full text-sm font-bold tracking-wider mb-6"
                style={{
                  background: "rgba(198,0,15,0.3)",
                  color: "#FFFFFF",
                  fontFamily: "'Nunito', sans-serif",
                }}
              >
                OUR JOURNEY
              </span>
              <h2
                className="text-4xl md:text-5xl font-bold"
                style={{
                  fontFamily: "'Fredoka', sans-serif",
                  color: "#FFFFFF",
                }}
              >
                Brand Milestones
              </h2>
            </div>

            {/* Timeline */}
            <div className="relative">
              {/* Central Line */}
              <div
                className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 hidden lg:block"
                style={{
                  background: "linear-gradient(180deg, #C6000F, rgba(255,255,255,0.3), #C6000F)",
                }}
              />

              {/* Mobile Line */}
              <div
                className="absolute left-8 top-0 bottom-0 w-1 lg:hidden"
                style={{
                  background: "linear-gradient(180deg, #C6000F, rgba(255,255,255,0.3), #C6000F)",
                }}
              />

              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div
                    key={index}
                    className={`relative flex items-center ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                  >
                    {/* Year Circle */}
                    <div
                      className="absolute left-8 lg:left-1/2 w-16 h-16 rounded-full flex items-center justify-center -translate-x-1/2 z-10"
                      style={{
                        background: "linear-gradient(135deg, #C6000F, #670008)",
                        boxShadow: "0 10px 30px rgba(198,0,15,0.4)",
                      }}
                    >
                      <span
                        className="text-sm font-bold text-white"
                        style={{ fontFamily: "'Fredoka', sans-serif" }}
                      >
                        {milestone.year}
                      </span>
                    </div>

                    {/* Content Card */}
                    <div
                      className={`ml-20 lg:ml-0 lg:w-5/12 ${index % 2 === 0 ? "lg:pr-16" : "lg:pl-16"}`}
                    >
                      <div
                        className="group p-8 rounded-3xl transition-all duration-500 hover:-translate-y-2"
                        style={{
                          background: "white",
                          boxShadow: "0 15px 50px rgba(0,0,0,0.08)",
                        }}
                      >
                        <h3
                          className="text-xl md:text-2xl font-bold mb-3"
                          style={{
                            fontFamily: "'Fredoka', sans-serif",
                            color: "#4A2C2A",
                          }}
                        >
                          {milestone.title}
                        </h3>
                        <p
                          className="leading-relaxed"
                          style={{
                            fontFamily: "'Nunito', sans-serif",
                            color: "#4A2C2A",
                            opacity: 0.7,
                          }}
                        >
                          {milestone.description}
                        </p>

                        {/* Hover accent */}
                        <div
                          className="absolute bottom-0 left-6 right-6 h-1 rounded-full transition-all duration-500 scale-x-0 group-hover:scale-x-100"
                          style={{
                            background: "linear-gradient(90deg, #C6000F, #0E2F71)",
                          }}
                        />
                      </div>
                    </div>

                    {/* Spacer for opposite side */}
                    <div className="hidden lg:block lg:w-5/12" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section
          className="relative py-24 overflow-hidden"
          style={{
            background: "linear-gradient(180deg, #0E2F71 0%, #071A45 100%)",
          }}
        >
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white/5 animate-float" />
            <div className="absolute bottom-20 right-20 w-48 h-48 rounded-full bg-[#C6000F]/10 animate-float-delay" />
            <div className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full bg-white/5 animate-float-reverse" />
          </div>

          {/* Wave Top */}
          <div className="absolute top-0 left-0 right-0">
            <svg viewBox="0 0 1440 80" fill="none" className="w-full" preserveAspectRatio="none">
              <path d="M0 80L60 70C120 60 240 40 360 35C480 30 600 40 720 47.5C840 55 960 60 1080 57.5C1200 55 1320 45 1380 40L1440 35V0H0V80Z" fill="#0E2F71" />
            </svg>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <span
              className="inline-block px-6 py-2 rounded-full text-sm font-bold tracking-widest mb-8"
              style={{
                background: "rgba(255,255,255,0.15)",
                color: "white",
                fontFamily: "'Nunito', sans-serif",
              }}
            >
              READY TO TASTE THE JOY?
            </span>

            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              style={{
                fontFamily: "'Fredoka', sans-serif",
                color: "white",
              }}
            >
              Discover Our{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #FFFFFF, #0E2F71)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Delicious
              </span>{" "}
              Collection
            </h2>

            <p
              className="text-xl mb-12 max-w-2xl mx-auto leading-relaxed"
              style={{
                fontFamily: "'Nunito', sans-serif",
                color: "rgba(255,255,255,0.9)",
              }}
            >
              From classic favorites to exciting new flavors, explore the full range of LOR treats that have been bringing joy to families worldwide.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#products"
                className="inline-flex items-center justify-center gap-3 px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                style={{
                  background: "white",
                  color: "#C6000F",
                  fontFamily: "'Nunito', sans-serif",
                  boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
                }}
              >
                Explore Products
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>

              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-3 px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "transparent",
                  color: "white",
                  fontFamily: "'Nunito', sans-serif",
                  border: "2px solid rgba(255,255,255,0.5)",
                }}
              >
                Get In Touch
              </Link>
            </div>
          </div>

          {/* Wave Bottom */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 80" fill="none" className="w-full" preserveAspectRatio="none">
              <path d="M0 0L60 10C120 20 240 40 360 45C480 50 600 40 720 32.5C840 25 960 20 1080 22.5C1200 25 1320 35 1380 40L1440 45V80H0V0Z" fill="#071A45" />
            </svg>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
