"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);
  const [isNewsletterFocused, setIsNewsletterFocused] = useState(false);

  const footerLinks = {
    products: [
      { label: "Biscuits", href: "/products" },
      { label: "Wafers", href: "/products" },
      { label: "Cakes", href: "/products" },
      { label: "Crackers", href: "/products" },
    ],
    company: [
      { label: "About Us", href: "/about" },
      { label: "Our Story", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
    support: [
      { label: "FAQ", href: "/contact" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
    ],
  };

  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #3D0005 0%, #1A0002 100%)",
      }}
    >
      {/* Premium pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Gold accent line at top */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{
          background: "linear-gradient(90deg, transparent, #D97706, #B45309, #D97706, transparent)"
        }}
      />

      {/* Decorative Wave */}
      <div className="absolute top-1 left-0 right-0">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 80L60 70C120 60 240 40 360 35C480 30 600 40 720 47.5C840 55 960 60 1080 57.5C1200 55 1320 45 1380 40L1440 35V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V80Z"
            fill="#FEF3E2"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block group mb-8">
              <Image
                src="/images/logos/lor-logo.png"
                alt="LORS Logo"
                width={150}
                height={75}
                className="transition-all duration-500 group-hover:scale-105"
                style={{
                  filter: "drop-shadow(0 0 30px rgba(198,0,15,0.3))"
                }}
              />
            </Link>
            <p className="text-lg mb-8 max-w-sm leading-relaxed text-white/60">
              Crafting delicious moments with every bite. Quality treats that bring
              joy to families everywhere.
            </p>

            {/* Newsletter - Premium styling */}
            <div
              className={`flex gap-2 p-1.5 rounded-2xl transition-all duration-500 ${isNewsletterFocused ? "shadow-lg" : ""}`}
              style={{
                background: isNewsletterFocused ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.04)",
                border: isNewsletterFocused ? "1px solid rgba(217,119,6,0.3)" : "1px solid rgba(255,255,255,0.08)"
              }}
            >
              <input
                type="email"
                placeholder="Your email"
                onFocus={() => setIsNewsletterFocused(true)}
                onBlur={() => setIsNewsletterFocused(false)}
                className="flex-1 px-5 py-3.5 rounded-xl bg-transparent focus:outline-none text-white placeholder:text-white/40"
              />
              <button
                className="px-6 py-3.5 rounded-xl font-semibold transition-all duration-300 hover:scale-105 group relative overflow-hidden text-white"
                style={{
                  background: "linear-gradient(135deg, #C6000F 0%, #670008 100%)",
                  boxShadow: "0 4px 20px rgba(198,0,15,0.4)"
                }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Subscribe
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </button>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-heavy mb-6 flex items-center gap-3 text-white">
              <span
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, rgba(217,119,6,0.2), rgba(217,119,6,0.1))" }}
              >
                🍪
              </span>
              Products
            </h4>
            <ul className="space-y-4">
              {footerLinks.products.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-3 transition-all duration-300 hover:text-white text-white/50"
                  >
                    <span className="w-0 h-0.5 rounded-full transition-all duration-300 group-hover:w-4" style={{ background: "#D97706" }} />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-heavy mb-6 flex items-center gap-3 text-white">
              <span
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, rgba(198,0,15,0.2), rgba(198,0,15,0.1))" }}
              >
                ✨
              </span>
              Company
            </h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-3 transition-all duration-300 hover:text-white text-white/50"
                  >
                    <span className="w-0 h-0.5 rounded-full transition-all duration-300 group-hover:w-4" style={{ background: "#C6000F" }} />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-heavy mb-6 flex items-center gap-3 text-white">
              <span
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, rgba(217,119,6,0.2), rgba(198,0,15,0.1))" }}
              >
                💬
              </span>
              Support
            </h4>
            <ul className="space-y-4">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-3 transition-all duration-300 hover:text-white text-white/50"
                  >
                    <span className="w-0 h-0.5 rounded-full transition-all duration-300 group-hover:w-4" style={{ background: "#D97706" }} />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider with gold accent */}
        <div className="h-px mb-10" style={{ background: "linear-gradient(90deg, transparent, rgba(217,119,6,0.3), transparent)" }} />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm flex items-center gap-2 text-white/40">
            © {currentYear} LORS. All rights reserved. Made with
            <span className="animate-heartbeat inline-block" style={{ color: "#C6000F" }}>❤️</span>
            for sweet moments.
          </p>

          {/* Social Links */}
          <div className="flex gap-3">
            {[
              { name: "facebook", color: "#1877F2" },
              { name: "instagram", color: "#E4405F" },
              { name: "twitter", color: "#1DA1F2" },
            ].map((social) => (
              <a
                key={social.name}
                href="#"
                onMouseEnter={() => setHoveredSocial(social.name)}
                onMouseLeave={() => setHoveredSocial(null)}
                className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 hover:scale-110 hover:-translate-y-1"
                style={{
                  background: hoveredSocial === social.name
                    ? `linear-gradient(135deg, ${social.color}, ${social.color}CC)`
                    : "rgba(255,255,255,0.06)",
                  color: hoveredSocial === social.name ? "white" : "rgba(255,255,255,0.5)",
                  boxShadow: hoveredSocial === social.name
                    ? `0 10px 30px ${social.color}50`
                    : "none",
                  border: hoveredSocial === social.name ? "none" : "1px solid rgba(255,255,255,0.08)"
                }}
                aria-label={social.name}
              >
                {social.name === "facebook" && (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                )}
                {social.name === "instagram" && (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                  </svg>
                )}
                {social.name === "twitter" && (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                )}
              </a>
            ))}
          </div>
        </div>

        {/* Back to Top */}
        <div className="flex justify-center mt-10">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group flex flex-col items-center gap-3 transition-all duration-300 hover:-translate-y-2"
          >
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 group-hover:shadow-lg text-white/50 group-hover:text-white"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "linear-gradient(135deg, #C6000F, #670008)";
                e.currentTarget.style.boxShadow = "0 8px 30px rgba(198,0,15,0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </div>
            <span className="text-xs font-semibold text-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Back to Top
            </span>
          </button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-10" style={{ background: "radial-gradient(circle, rgba(198,0,15,0.3), transparent 70%)" }} />
      <div className="absolute top-1/3 left-0 w-64 h-64 rounded-full opacity-10" style={{ background: "radial-gradient(circle, rgba(217,119,6,0.2), transparent 70%)" }} />
    </footer>
  );
}
