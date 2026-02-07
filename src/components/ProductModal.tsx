"use client";

import Image from "next/image";
import { useEffect, useCallback } from "react";

interface Product {
  id: string;
  name: string;
  image: string;
  packagingImage: string;
  category: string;
  description: string;
  color: string;
}

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  // Close on escape key
  const handleEscape = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") onClose();
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, handleEscape]);

  if (!isOpen || !product) return null;

  // Product features based on category
  const getFeatures = (category: string) => {
    const features: Record<string, string[]> = {
      Biscuits: ["Crunchy texture", "Perfect for tea time", "Family favorite", "Premium ingredients"],
      Wafers: ["Multiple cream layers", "Light & crispy", "Irresistible taste", "Perfect snack"],
      Crackers: ["Savory goodness", "Light & crispy", "Great with dips", "Wholesome snack"],
      Cakes: ["Soft & moist", "Creamy filling", "Delightful flavor", "Fresh baked taste"],
    };
    return features[category] || features.Biscuits;
  };

  // Nutrition info (placeholder)
  const nutritionInfo = [
    { label: "Serving Size", value: "30g" },
    { label: "Calories", value: "150" },
    { label: "Total Fat", value: "7g" },
    { label: "Carbohydrates", value: "20g" },
    { label: "Protein", value: "2g" },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in"
        style={{ animationDuration: "0.3s" }}
      />

      {/* Modal Content */}
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-3xl animate-zoom-in"
        style={{
          background: "linear-gradient(180deg, #FFFFFF 0%, #FFF8F0 100%)",
          boxShadow: `0 30px 80px ${product.color}40, 0 10px 30px rgba(0,0,0,0.2)`,
          animationDuration: "0.4s",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-90"
          style={{
            background: "rgba(74,44,42,0.1)",
            color: "#4A2C2A",
          }}
          aria-label="Close modal"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex flex-col md:flex-row overflow-y-auto max-h-[90vh]">
          {/* Product Image Section */}
          <div
            className="relative md:w-1/2 p-8 md:p-12 flex items-center justify-center"
            style={{
              background: `linear-gradient(135deg, ${product.color}15, ${product.color}05)`,
            }}
          >
            {/* Decorative circles */}
            <div
              className="absolute top-10 left-10 w-32 h-32 rounded-full animate-morph-slow"
              style={{ background: `${product.color}10` }}
            />
            <div
              className="absolute bottom-10 right-10 w-24 h-24 rounded-full animate-morph"
              style={{ background: `${product.color}15`, animationDelay: "2s" }}
            />

            {/* Product Image */}
            <div className="relative z-10 animate-float">
              <Image
                src={product.packagingImage}
                alt={product.name}
                width={450}
                height={450}
                className="w-full max-w-[400px] h-auto object-contain drop-shadow-2xl"
              />
            </div>

            {/* Category Badge */}
            <div
              className="absolute top-6 left-6 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider animate-slide-down"
              style={{
                background: `linear-gradient(135deg, ${product.color}, ${product.color}CC)`,
                color: "white",
                fontFamily: "'Nunito', sans-serif",
                boxShadow: `0 4px 15px ${product.color}40`,
              }}
            >
              {product.category}
            </div>
          </div>

          {/* Product Info Section */}
          <div className="md:w-1/2 p-8 md:p-12 overflow-y-auto">
            {/* Product Name */}
            <h2
              className="text-3xl md:text-4xl font-bold mb-4 animate-slide-up"
              style={{
                fontFamily: "'Fredoka', sans-serif",
                color: "#4A2C2A",
                animationDelay: "0.1s",
              }}
            >
              {product.name}
            </h2>

            {/* Description */}
            <p
              className="text-lg mb-6 leading-relaxed animate-slide-up"
              style={{
                fontFamily: "'Nunito', sans-serif",
                color: "#4A2C2A",
                opacity: 0.8,
                animationDelay: "0.2s",
              }}
            >
              {product.description}. Made with premium ingredients and crafted with care to bring you
              the perfect treat for any occasion. Experience the delicious taste that LOR is known for.
            </p>

            {/* Features */}
            <div className="mb-6 animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <h3
                className="text-lg font-bold mb-3 flex items-center gap-2"
                style={{ fontFamily: "'Fredoka', sans-serif", color: "#4A2C2A" }}
              >
                <span className="animate-wiggle">✨</span>
                Features
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {getFeatures(product.category).map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 animate-slide-left"
                    style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                  >
                    <svg
                      className="w-5 h-5 flex-shrink-0"
                      style={{ color: product.color }}
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                    </svg>
                    <span
                      className="text-sm"
                      style={{ fontFamily: "'Nunito', sans-serif", color: "#4A2C2A" }}
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Nutrition Info */}
            <div className="mb-6 animate-slide-up" style={{ animationDelay: "0.5s" }}>
              <h3
                className="text-lg font-bold mb-3 flex items-center gap-2"
                style={{ fontFamily: "'Fredoka', sans-serif", color: "#4A2C2A" }}
              >
                <span className="animate-bounce-subtle">📊</span>
                Nutrition Facts
              </h3>
              <div
                className="p-4 rounded-2xl"
                style={{ background: "rgba(74,44,42,0.05)" }}
              >
                {nutritionInfo.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between py-2"
                    style={{
                      borderBottom: index < nutritionInfo.length - 1 ? "1px solid rgba(74,44,42,0.1)" : "none",
                    }}
                  >
                    <span
                      className="text-sm"
                      style={{ fontFamily: "'Nunito', sans-serif", color: "#4A2C2A", opacity: 0.7 }}
                    >
                      {item.label}
                    </span>
                    <span
                      className="text-sm font-bold"
                      style={{ fontFamily: "'Nunito', sans-serif", color: "#4A2C2A" }}
                    >
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 animate-slide-up" style={{ animationDelay: "0.6s" }}>
              <a
                href="/contact"
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full font-bold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group"
                style={{
                  background: `linear-gradient(135deg, ${product.color}, ${product.color}CC)`,
                  color: "white",
                  fontFamily: "'Nunito', sans-serif",
                  boxShadow: `0 4px 20px ${product.color}40`,
                }}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Inquire Now
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              <button
                onClick={onClose}
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full font-bold transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "transparent",
                  color: "#4A2C2A",
                  fontFamily: "'Nunito', sans-serif",
                  border: "2px solid rgba(74,44,42,0.2)",
                }}
              >
                Continue Browsing
              </button>
            </div>
          </div>
        </div>

        {/* Decorative bottom accent */}
        <div
          className="absolute bottom-0 left-0 right-0 h-1.5"
          style={{
            background: `linear-gradient(90deg, ${product.color}, #C6000F, ${product.color})`,
          }}
        />
      </div>
    </div>
  );
}
