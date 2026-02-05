"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #FFFDF9 0%, #FFF8F0 30%, #FBF3E8 60%, #FFF5F2 100%)",
      }}
    >
      {/* Animated Background Blobs - Warmer, richer colors */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-20 -left-20 w-96 h-96 rounded-full animate-blob"
          style={{
            background: "radial-gradient(circle, rgba(198,0,15,0.08) 0%, rgba(103,0,8,0.04) 100%)",
            animationDelay: "0s"
          }}
        />
        <div
          className="absolute top-40 right-20 w-72 h-72 rounded-full animate-blob"
          style={{
            background: "radial-gradient(circle, rgba(217,119,6,0.12) 0%, rgba(180,83,9,0.06) 100%)",
            animationDelay: "2s"
          }}
        />
        <div
          className="absolute bottom-20 left-1/3 w-80 h-80 rounded-full animate-blob"
          style={{
            background: "radial-gradient(circle, rgba(198,0,15,0.05) 0%, transparent 70%)",
            animationDelay: "4s"
          }}
        />
        {/* New luxury gold accent blob */}
        <div
          className="absolute top-1/3 right-1/3 w-64 h-64 rounded-full animate-morph-slow"
          style={{
            background: "radial-gradient(circle, rgba(217,119,6,0.08) 0%, transparent 70%)",
            animationDelay: "1s"
          }}
        />
      </div>

      {/* Decorative Circles - Gold & Crimson accents */}
      <div className="absolute top-32 right-1/4 w-4 h-4 rounded-full bg-crimson animate-float opacity-70" />
      <div className="absolute top-1/2 left-16 w-6 h-6 rounded-full animate-float-reverse opacity-60" style={{ background: "var(--gold-500)" }} />
      <div className="absolute bottom-40 right-20 w-3 h-3 rounded-full bg-burgundy animate-float-delay opacity-80" />
      <div className="absolute top-1/3 right-10 w-5 h-5 rounded-full animate-float opacity-50" style={{ background: "var(--gold-600)" }} />
      <div className="absolute bottom-1/3 left-1/4 w-2 h-2 rounded-full bg-crimson animate-pulse opacity-60" />

      {/* Subtle grid pattern for premium feel */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(var(--warm-800) 1px, transparent 1px), linear-gradient(90deg, var(--warm-800) 1px, transparent 1px)`,
          backgroundSize: "60px 60px"
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 flex flex-col lg:flex-row items-center gap-16">
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left">
          <div className="animate-slide-up opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
            <span
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-heavy tracking-widest mb-8 text-white shadow-lg"
              style={{
                background: "linear-gradient(135deg, var(--lor-crimson) 0%, var(--lor-burgundy) 100%)",
                boxShadow: "0 4px 20px rgba(198,0,15,0.3), inset 0 1px 0 rgba(255,255,255,0.1)"
              }}
            >
              <span className="w-2 h-2 rounded-full bg-white/80 animate-pulse" />
              DELICIOUSLY CRAFTED
            </span>
          </div>

          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] mb-8 animate-slide-up opacity-0"
            style={{
              color: "var(--warm-900)",
              animationDelay: "0.4s",
              animationFillMode: "forwards",
              letterSpacing: "-0.02em"
            }}
          >
            Every Bite is a{" "}
            <span className="relative inline-block">
              <span
                style={{
                  background: "linear-gradient(135deg, var(--lor-crimson) 0%, var(--lor-burgundy) 50%, var(--gold-600) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Celebration
              </span>
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
                    <stop offset="0%" stopColor="var(--lor-crimson)" stopOpacity="0.4" />
                    <stop offset="50%" stopColor="var(--gold-500)" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="var(--lor-burgundy)" stopOpacity="0.4" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h1>

          <p
            className="text-xl md:text-2xl max-w-xl mx-auto lg:mx-0 mb-12 leading-relaxed animate-slide-up opacity-0"
            style={{
              color: "var(--warm-700)",
              animationDelay: "0.6s",
              animationFillMode: "forwards",
            }}
          >
            Discover our irresistible collection of biscuits, wafers, and treats
            crafted with love and the finest ingredients.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start animate-slide-up opacity-0"
            style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}
          >
            <a
              href="#products"
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-white font-heavy text-lg overflow-hidden transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "linear-gradient(135deg, var(--lor-crimson) 0%, var(--lor-burgundy) 100%)",
                boxShadow: "0 8px 30px rgba(198,0,15,0.35), inset 0 1px 0 rgba(255,255,255,0.1)"
              }}
            >
              <span className="relative z-10">Explore Products</span>
              <svg className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-r from-burgundy to-crimson opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            <a
              href="#about"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-heavy text-lg transition-all duration-300 hover:-translate-y-1"
              style={{
                color: "var(--lor-crimson)",
                border: "2px solid var(--lor-crimson)",
                background: "rgba(255,255,255,0.8)",
                backdropFilter: "blur(10px)"
              }}
            >
              Our Story
              <span className="w-2 h-2 rounded-full bg-current opacity-60 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </div>

        {/* Hero Image / Logo Display */}
        <div className="flex-1 relative">
          <div
            className="relative animate-scale-in opacity-0"
            style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
          >
            {/* Premium glowing backdrop */}
            <div
              className="absolute inset-0 rounded-full blur-3xl animate-pulse-scale"
              style={{
                background: "radial-gradient(circle, rgba(198,0,15,0.15) 0%, rgba(217,119,6,0.08) 50%, transparent 70%)",
                transform: "scale(1.6)",
              }}
            />

            {/* Secondary gold glow */}
            <div
              className="absolute inset-0 rounded-full blur-2xl"
              style={{
                background: "radial-gradient(circle at 70% 30%, rgba(217,119,6,0.12) 0%, transparent 50%)",
                transform: "scale(1.3)",
              }}
            />

            {/* Main Logo */}
            <div className="relative animate-float">
              <Image
                src="/images/logos/lor-logo.png"
                alt="LORS - Delicious Treats"
                width={500}
                height={250}
                className="w-full max-w-lg mx-auto drop-shadow-2xl"
                style={{
                  filter: "drop-shadow(0 20px 40px rgba(198,0,15,0.2))"
                }}
                priority
              />
            </div>

            {/* Floating Product Previews - Enhanced with gold borders */}
            <div className="absolute -top-8 -right-4 w-28 h-28 animate-float-reverse">
              <div
                className="w-full h-full rounded-2xl shadow-2xl flex items-center justify-center p-2 overflow-hidden bg-white"
                style={{
                  boxShadow: "0 10px 40px rgba(0,0,0,0.1), inset 0 0 0 1px rgba(217,119,6,0.2)"
                }}
              >
                <Image
                  src="/images/products/waferio.png"
                  alt="Waferio"
                  width={90}
                  height={90}
                  className="object-contain"
                />
              </div>
            </div>

            <div className="absolute -bottom-4 -left-8 w-24 h-24 animate-float-delay">
              <div
                className="w-full h-full rounded-2xl shadow-2xl flex items-center justify-center p-2 overflow-hidden bg-white"
                style={{
                  boxShadow: "0 10px 40px rgba(0,0,0,0.1), inset 0 0 0 1px rgba(198,0,15,0.15)"
                }}
              >
                <Image
                  src="/images/products/joy-cake.png"
                  alt="Joy Cake"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
            </div>

            <div className="absolute top-1/2 -right-12 w-20 h-20 animate-float">
              <div
                className="w-full h-full rounded-xl shadow-xl flex items-center justify-center p-1.5 overflow-hidden bg-white"
                style={{
                  boxShadow: "0 8px 30px rgba(0,0,0,0.08), inset 0 0 0 1px rgba(217,119,6,0.15)"
                }}
              >
                <Image
                  src="/images/products/mega-bite.png"
                  alt="Mega Bite"
                  width={65}
                  height={65}
                  className="object-contain"
                />
              </div>
            </div>

            {/* Decorative gold ring */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full border border-dashed animate-spin-slow opacity-20"
              style={{ borderColor: "var(--gold-500)" }}
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Enhanced */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div
          className="w-10 h-14 rounded-full flex items-start justify-center p-2"
          style={{
            border: "2px solid var(--lor-crimson)",
            opacity: 0.4
          }}
        >
          <div
            className="w-2 h-3 rounded-full animate-pulse"
            style={{ background: "var(--lor-crimson)" }}
          />
        </div>
      </div>

      {/* Wave Divider - Warmer tone */}
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
            fill="#FFFDF9"
          />
        </svg>
      </div>
    </section>
  );
}
