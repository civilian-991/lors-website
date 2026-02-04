"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: "Email Us",
      value: "hello@lor.com",
      href: "mailto:hello@lor.com",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      label: "Call Us",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: "Visit Us",
      value: "123 Sweet Street, Treat City",
      href: "#",
    },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
      href: "#",
    },
    {
      name: "Instagram",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
        </svg>
      ),
      href: "#",
    },
    {
      name: "Twitter",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      href: "#",
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-24 overflow-hidden"
      style={{ background: "#FFFAF5" }}
    >
      {/* Background Decoration */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle at 10% 90%, rgba(198,0,15,0.05) 0%, transparent 40%),
                           radial-gradient(circle at 90% 10%, rgba(212,165,116,0.08) 0%, transparent 40%)`,
        }}
      />

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
            className="text-lg md:text-xl max-w-2xl mx-auto"
            style={{
              fontFamily: "'Nunito', sans-serif",
              color: "#4A2C2A",
              opacity: 0.7,
            }}
          >
            Have questions, feedback, or just want to say hello? We&apos;re here for you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div>
            <div className="space-y-6 mb-10">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="group flex items-center gap-5 p-5 rounded-2xl transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: "white",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                  }}
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: "linear-gradient(135deg, rgba(198,0,15,0.1), rgba(103,0,8,0.05))",
                      color: "#C6000F",
                    }}
                  >
                    {info.icon}
                  </div>
                  <div>
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
                      className="text-lg font-bold"
                      style={{
                        fontFamily: "'Nunito', sans-serif",
                        color: "#4A2C2A",
                      }}
                    >
                      {info.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h3
                className="text-lg font-bold mb-4"
                style={{
                  fontFamily: "'Fredoka', sans-serif",
                  color: "#4A2C2A",
                }}
              >
                Follow Us
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                    style={{
                      background: "linear-gradient(135deg, #C6000F, #670008)",
                      color: "white",
                      boxShadow: "0 4px 15px rgba(198,0,15,0.3)",
                    }}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="p-8 md:p-10 rounded-3xl"
            style={{
              background: "white",
              boxShadow: "0 20px 60px rgba(0,0,0,0.08)",
            }}
          >
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label
                  className="block text-sm font-semibold mb-2"
                  style={{
                    fontFamily: "'Nunito', sans-serif",
                    color: "#4A2C2A",
                  }}
                >
                  Your Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-5 py-4 rounded-xl border-2 border-transparent transition-all duration-300 focus:outline-none focus:border-[#C6000F]"
                  style={{
                    background: "#FFF8F0",
                    fontFamily: "'Nunito', sans-serif",
                    color: "#4A2C2A",
                  }}
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label
                  className="block text-sm font-semibold mb-2"
                  style={{
                    fontFamily: "'Nunito', sans-serif",
                    color: "#4A2C2A",
                  }}
                >
                  Your Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-5 py-4 rounded-xl border-2 border-transparent transition-all duration-300 focus:outline-none focus:border-[#C6000F]"
                  style={{
                    background: "#FFF8F0",
                    fontFamily: "'Nunito', sans-serif",
                    color: "#4A2C2A",
                  }}
                  placeholder="john@example.com"
                  required
                />
              </div>
            </div>

            <div className="mb-6">
              <label
                className="block text-sm font-semibold mb-2"
                style={{
                  fontFamily: "'Nunito', sans-serif",
                  color: "#4A2C2A",
                }}
              >
                Subject
              </label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-5 py-4 rounded-xl border-2 border-transparent transition-all duration-300 focus:outline-none focus:border-[#C6000F]"
                style={{
                  background: "#FFF8F0",
                  fontFamily: "'Nunito', sans-serif",
                  color: "#4A2C2A",
                }}
                placeholder="How can we help?"
                required
              />
            </div>

            <div className="mb-8">
              <label
                className="block text-sm font-semibold mb-2"
                style={{
                  fontFamily: "'Nunito', sans-serif",
                  color: "#4A2C2A",
                }}
              >
                Message
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="w-full px-5 py-4 rounded-xl border-2 border-transparent transition-all duration-300 focus:outline-none focus:border-[#C6000F] resize-none"
                style={{
                  background: "#FFF8F0",
                  fontFamily: "'Nunito', sans-serif",
                  color: "#4A2C2A",
                }}
                placeholder="Tell us more..."
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "linear-gradient(135deg, #C6000F, #670008)",
                color: "white",
                fontFamily: "'Nunito', sans-serif",
                boxShadow: "0 8px 30px rgba(198,0,15,0.3)",
              }}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
