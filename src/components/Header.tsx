"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update active link based on current path
  useEffect(() => {
    setActiveLink(window.location.pathname);
  }, []);

  const navLinks = [
    { href: "/", label: "Home", icon: "🏠" },
    { href: "/products", label: "Products", icon: "🍪" },
    { href: "/about", label: "About", icon: "💫" },
    { href: "/contact", label: "Contact", icon: "📧" },
  ];

  // Magnetic effect for nav links
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.15;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.15;
    target.style.transform = `translate(${x}px, ${y}px)`;
    setHoveredLink(href);
  }, []);

  const handleMouseLeave = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.transform = "translate(0, 0)";
    setHoveredLink(null);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "py-3"
          : "bg-transparent py-6"
      }`}
      style={{
        background: isScrolled
          ? "rgba(255,255,255,0.98)"
          : "transparent",
        boxShadow: isScrolled
          ? "0 4px 20px rgba(14,47,113,0.08), inset 0 -2px 0 #0E2F71"
          : "none",
        backdropFilter: isScrolled ? "blur(12px)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo with hover animation */}
        <Link href="/" className="relative z-10 group">
          <Image
            src="/images/logos/lor-logo.png"
            alt="LORS Logo"
            width={100}
            height={50}
            className={`transition-all duration-500 group-hover:scale-105 group-hover:drop-shadow-lg ${
              isScrolled ? "h-12 w-auto" : "h-16 w-auto"
            }`}
            priority
          />
          {/* Glow effect on hover */}
          <div className="absolute inset-0 rounded-lg bg-crimson/0 group-hover:bg-crimson/10 blur-xl transition-all duration-500 -z-10" />
        </Link>

        {/* Desktop Navigation with Enhanced Animations */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              onMouseMove={(e) => handleMouseMove(e, link.href)}
              onMouseLeave={handleMouseLeave}
              className={`relative font-semibold text-lg transition-all duration-300 group ${
                activeLink === link.href
                  ? "text-crimson"
                  : "text-warm-800 hover:text-crimson"
              }`}
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <span className="relative inline-flex items-center gap-1.5">
                {/* Icon appears on hover */}
                <span className={`inline-block transition-all duration-300 ${hoveredLink === link.href ? "opacity-100 scale-100 mr-0" : "opacity-0 scale-0 -mr-5"}`}>
                  {link.icon}
                </span>
                {link.label}
              </span>
              {/* Animated underline */}
              <span
                className={`absolute -bottom-1 left-0 h-[3px] rounded-full transition-all duration-300 ${
                  activeLink === link.href ? "w-full" : "w-0 group-hover:w-full"
                }`}
                style={{ background: "linear-gradient(90deg, #C6000F, #0E2F71)" }}
              />
              {/* Subtle glow on hover */}
              <span className="absolute inset-0 rounded-lg bg-crimson/0 group-hover:bg-crimson/5 blur-sm transition-all duration-300 -z-10" />
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button with Enhanced Animation */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden relative z-10 w-12 h-12 flex flex-col items-center justify-center gap-1.5 rounded-xl hover:bg-crimson/10 transition-colors duration-300"
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-0.5 bg-crimson rounded-full transition-all duration-500 ease-out ${
              isMobileMenuOpen ? "rotate-45 translate-y-2 w-7" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-crimson rounded-full transition-all duration-500 ease-out ${
              isMobileMenuOpen ? "opacity-0 scale-0" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-crimson rounded-full transition-all duration-500 ease-out ${
              isMobileMenuOpen ? "-rotate-45 -translate-y-2 w-7" : ""
            }`}
          />
        </button>

        {/* Mobile Menu with Enhanced Animations */}
        <div
          className={`fixed inset-0 flex flex-col items-center justify-center gap-6 transition-all duration-700 md:hidden bg-gradient-hero backdrop-blur-xl ${
            isMobileMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          {/* Decorative background elements */}
          <div className={`absolute top-20 left-10 w-32 h-32 rounded-full transition-all duration-1000 ${isMobileMenuOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"}`} style={{ background: "rgba(198,0,15,0.1)", animationDelay: "200ms" }} />
          <div className={`absolute bottom-20 right-10 w-48 h-48 rounded-full transition-all duration-1000 ${isMobileMenuOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"}`} style={{ background: "rgba(14,47,113,0.1)", animationDelay: "400ms" }} />

          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-3xl font-heavy transition-all duration-500 hover:scale-110 flex items-center gap-3 ${
                activeLink === link.href ? "text-crimson" : "text-warm-800 hover:text-crimson"
              } ${isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
              style={{
                transitionDelay: isMobileMenuOpen ? `${index * 100 + 200}ms` : "0ms",
              }}
            >
              <span className="text-2xl">{link.icon}</span>
              {link.label}
              {activeLink === link.href && (
                <span className="ml-2 w-2 h-2 rounded-full bg-crimson animate-pulse" />
              )}
            </Link>
          ))}

          {/* Decorative dots pattern */}
          <div
            className={`absolute bottom-1/4 left-1/4 w-16 h-16 rounded-full transition-all duration-700 ${
              isMobileMenuOpen ? "opacity-20" : "opacity-0"
            }`}
            style={{
              background: "radial-gradient(circle, var(--lor-crimson) 2px, transparent 2px)",
              backgroundSize: "8px 8px",
            }}
          />
        </div>
      </div>
    </header>
  );
}
