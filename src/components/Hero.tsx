"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero"
    >
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-20 -left-20 w-96 h-96 bg-crimson/10 animate-blob"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="absolute top-40 right-20 w-72 h-72 bg-gold/20 animate-blob"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-20 left-1/3 w-80 h-80 bg-crimson/5 animate-blob"
          style={{ animationDelay: "4s" }}
        />
      </div>

      {/* Decorative Circles */}
      <div className="absolute top-32 right-1/4 w-4 h-4 rounded-full bg-crimson animate-float opacity-60" />
      <div className="absolute top-1/2 left-16 w-6 h-6 rounded-full bg-gold animate-float-reverse opacity-50" />
      <div className="absolute bottom-40 right-20 w-3 h-3 rounded-full bg-burgundy animate-float-delay opacity-70" />
      <div className="absolute top-1/3 right-10 w-5 h-5 rounded-full bg-gold-600 animate-float opacity-40" />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 flex flex-col lg:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left">
          <div className="animate-slide-up opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
            <span className="inline-block px-6 py-2 rounded-full text-sm font-heavy tracking-wider mb-6 bg-gradient-brand text-white">
              DELICIOUSLY CRAFTED
            </span>
          </div>

          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6 text-warm-800 animate-slide-up opacity-0"
            style={{
              animationDelay: "0.4s",
              animationFillMode: "forwards",
            }}
          >
            Every Bite is a{" "}
            <span className="relative inline-block gradient-text">
              Celebration
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 200 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 8C50 2 150 2 198 8"
                  stroke="var(--lor-crimson)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  style={{ opacity: 0.3 }}
                />
              </svg>
            </span>
          </h1>

          <p
            className="text-xl md:text-2xl max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed text-warm-700 animate-slide-up opacity-0"
            style={{
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
            <a href="#products" className="btn-primary">
              Explore Products
            </a>
            <a href="#about" className="btn-secondary">
              Our Story
            </a>
          </div>
        </div>

        {/* Hero Image / Logo Display */}
        <div className="flex-1 relative">
          <div
            className="relative animate-scale-in opacity-0"
            style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
          >
            {/* Glowing backdrop */}
            <div
              className="absolute inset-0 rounded-full blur-3xl"
              style={{
                background: "radial-gradient(circle, var(--crimson-500)/20 0%, transparent 70%)",
                transform: "scale(1.5)",
              }}
            />

            {/* Main Logo */}
            <div className="relative animate-float">
              <Image
                src="/images/logos/lor-logo.png"
                alt="LORS - Delicious Treats"
                width={500}
                height={250}
                className="w-full max-w-md mx-auto drop-shadow-2xl"
                priority
              />
            </div>

            {/* Floating Product Previews */}
            <div className="absolute -top-8 -right-4 w-24 h-24 animate-float-reverse">
              <div className="w-full h-full rounded-2xl shadow-xl flex items-center justify-center p-2 overflow-hidden bg-white">
                <Image
                  src="/images/products/waferio.png"
                  alt="Waferio"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
            </div>

            <div className="absolute -bottom-4 -left-8 w-20 h-20 animate-float-delay">
              <div className="w-full h-full rounded-2xl shadow-xl flex items-center justify-center p-2 overflow-hidden bg-white">
                <Image
                  src="/images/products/joy-cake.png"
                  alt="Joy Cake"
                  width={70}
                  height={70}
                  className="object-contain"
                />
              </div>
            </div>

            <div className="absolute top-1/2 -right-12 w-16 h-16 animate-float">
              <div className="w-full h-full rounded-xl shadow-lg flex items-center justify-center p-1.5 overflow-hidden bg-white">
                <Image
                  src="/images/products/mega-bite.png"
                  alt="Mega Bite"
                  width={55}
                  height={55}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 rounded-full border-3 border-crimson/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-crimson animate-pulse" />
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
            fill="var(--warm-50)"
          />
        </svg>
      </div>
    </section>
  );
}
