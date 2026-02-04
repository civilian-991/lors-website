"use client";

import Image from "next/image";

export default function About() {
  const stats = [
    { number: "22+", label: "Products" },
    { number: "100%", label: "Quality" },
    { number: "1M+", label: "Happy Customers" },
  ];

  const values = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Made with Love",
      description: "Every product is crafted with care and passion for quality",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Premium Ingredients",
      description: "We source only the finest ingredients for our treats",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Joy in Every Bite",
      description: "Creating moments of happiness for families everywhere",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-24 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, var(--warm-50) 0%, var(--crimson-100) 100%)",
      }}
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
            fill="var(--warm-50)"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image Side */}
          <div className="relative">
            <div className="relative">
              {/* Main Image Container */}
              <div
                className="relative rounded-[3rem] overflow-hidden"
                style={{
                  boxShadow: "0 30px 60px var(--crimson-500)/15",
                }}
              >
                <div className="aspect-square flex items-center justify-center p-12 bg-gradient-hero">
                  <Image
                    src="/images/logos/lor-logo.png"
                    alt="LORS Brand"
                    width={400}
                    height={200}
                    className="w-full max-w-sm animate-float"
                  />
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full flex flex-col items-center justify-center animate-wiggle bg-gradient-brand shadow-lg">
                <span className="text-3xl font-black text-white">
                  100%
                </span>
                <span className="text-xs text-white/80 font-semibold">
                  QUALITY
                </span>
              </div>

              {/* Decorative Dots */}
              <div
                className="absolute -top-8 -left-8 w-24 h-24 rounded-full opacity-30"
                style={{
                  background: "radial-gradient(circle, var(--gold-500) 2px, transparent 2px)",
                  backgroundSize: "12px 12px",
                }}
              />
            </div>
          </div>

          {/* Text Side */}
          <div>
            <span className="inline-block px-5 py-2 rounded-full text-sm font-heavy tracking-wider mb-6 bg-crimson/10 text-crimson">
              ABOUT LORS
            </span>

            <h2 className="text-4xl md:text-5xl font-black mb-6 text-warm-800">
              Crafting{" "}
              <span className="gradient-text">Delicious</span>{" "}
              Moments
            </h2>

            <p className="text-lg mb-6 leading-relaxed text-warm-700">
              At LORS, we believe that every snack should be a moment of pure joy.
              Our passion for creating delicious treats drives us to craft products
              that bring smiles to faces young and old.
            </p>

            <p className="text-lg mb-8 leading-relaxed text-warm-700">
              From our classic biscuits to our innovative wafers, every LORS product
              is made with premium ingredients and a commitment to quality that
              you can taste in every bite.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-black mb-1 gradient-text">
                    {stat.number}
                  </div>
                  <div className="text-sm font-semibold text-warm-500">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-3xl transition-all duration-300 hover:-translate-y-2 bg-white shadow-sm"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 bg-crimson/10 text-crimson">
                {value.icon}
              </div>

              <h3 className="text-xl font-heavy mb-3 text-warm-800">
                {value.title}
              </h3>

              <p className="leading-relaxed text-warm-600">
                {value.description}
              </p>

              {/* Hover Accent */}
              <div
                className="absolute bottom-0 left-8 right-8 h-1 rounded-full transition-all duration-300 scale-x-0 group-hover:scale-x-100 bg-gradient-to-r from-crimson to-gold"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 rounded-full bg-crimson/5 blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-48 h-48 rounded-full bg-gold/10 blur-3xl" />
    </section>
  );
}
