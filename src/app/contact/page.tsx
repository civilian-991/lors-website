"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const subjectOptions = [
    "General Inquiry",
    "Product Information",
    "Wholesale & Distribution",
    "Feedback & Suggestions",
    "Partnership Opportunities",
    "Press & Media",
    "Other",
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (formData.phone && !/^[\d\s+\-()]+$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.subject) {
      newErrors.subject = "Please select a subject";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitSuccess(true);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });

    // Reset success message after 5 seconds
    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      label: "Email Us",
      value: "hello@lor.com",
      href: "mailto:hello@lor.com",
      description: "We typically respond within 24 hours",
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
      label: "Call Us",
      value: "+1 555 123 4567",
      href: "tel:+15551234567",
      description: "Mon-Fri, 9am to 6pm EST",
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      label: "Visit Us",
      value: "123 Sweet Street, Treat City",
      href: "https://maps.google.com",
      description: "Come taste the sweetness in person",
    },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
      href: "https://facebook.com",
      color: "#1877F2",
    },
    {
      name: "Instagram",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
        </svg>
      ),
      href: "https://instagram.com",
      color: "#E4405F",
    },
    {
      name: "Twitter/X",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      href: "https://twitter.com",
      color: "#000000",
    },
    {
      name: "LinkedIn",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      href: "https://linkedin.com",
      color: "#0A66C2",
    },
  ];

  const faqItems = [
    {
      question: "Where can I purchase LOR products?",
      answer:
        "LOR products are available at major supermarkets, grocery stores, and convenience stores nationwide. You can also find our products at select international retailers. Visit our Store Locator (coming soon) to find the nearest location to you.",
    },
    {
      question: "Do your products contain any allergens?",
      answer:
        "Our products may contain common allergens such as wheat, milk, soy, and nuts. We always list all ingredients and allergen information on our packaging. If you have specific dietary concerns, please check the product label or contact us directly for detailed information.",
    },
    {
      question: "How can I become a distributor or wholesale partner?",
      answer:
        "We are always looking to expand our distribution network! Please select 'Wholesale & Distribution' in the subject dropdown of our contact form, or email us directly at wholesale@lor.com with details about your business and the regions you cover.",
    },
    {
      question: "What is the shelf life of your products?",
      answer:
        "Our products typically have a shelf life of 6-12 months from the manufacturing date, depending on the specific product. Always check the 'Best Before' date printed on the packaging for the most accurate information.",
    },
    {
      question: "Do you offer custom or private label products?",
      answer:
        "Yes! We offer private label and custom manufacturing services for qualified partners. Please reach out to us with your requirements, and our team will get in touch to discuss the possibilities.",
    },
    {
      question: "How can I provide feedback or report an issue with a product?",
      answer:
        "We value your feedback! Please use the contact form on this page and select 'Feedback & Suggestions' as the subject. Include the product name, batch number (if available), and a detailed description of your experience. We take all feedback seriously and will respond promptly.",
    },
  ];

  const businessHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM EST" },
    { day: "Saturday", hours: "10:00 AM - 4:00 PM EST" },
    { day: "Sunday", hours: "Closed" },
  ];

  return (
    <>
      <Header />
      <main className="pt-24" id="main">
        {/* Hero Section */}
        <section
          className="relative py-20 md:py-28 overflow-hidden"
          style={{
            background: "linear-gradient(180deg, #0E2F71 0%, #071A45 100%)",
          }}
        >
          {/* Decorative Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div
              className="absolute -top-20 -right-20 w-96 h-96 rounded-full opacity-20 animate-blob"
              style={{ background: "radial-gradient(circle, #C6000F 0%, transparent 70%)" }}
            />
            <div
              className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full opacity-15 animate-blob"
              style={{
                background: "radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)",
                animationDelay: "2s",
              }}
            />
            {/* Dots Pattern */}
            <div
              className="absolute inset-0 dots-pattern"
              style={{ opacity: 0.03 }}
            />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
            <span
              className="inline-block px-6 py-2 rounded-full text-sm font-bold tracking-wider mb-6 animate-slide-up"
              style={{
                background: "rgba(198,0,15,0.2)",
                color: "#FF6B6B",
                fontFamily: "'Nunito', sans-serif",
              }}
            >
              CONTACT US
            </span>
            <h1
              className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 animate-slide-up stagger-1"
              style={{
                fontFamily: "'Fredoka', sans-serif",
                color: "#FFFFFF",
              }}
            >
              Get In{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #FF6B6B, #C6000F)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Touch
              </span>
            </h1>
            <p
              className="text-lg md:text-xl max-w-2xl mx-auto animate-slide-up stagger-2"
              style={{
                fontFamily: "'Nunito', sans-serif",
                color: "rgba(255,255,255,0.8)",
              }}
            >
              Have a question, feedback, or just want to say hello? We&apos;re here for you!
              Our team is ready to assist with anything you need.
            </p>
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
                d="M0 120L60 105C120 90 240 60 360 52.5C480 45 600 60 720 67.5C840 75 960 75 1080 67.5C1200 60 1320 45 1380 37.5L1440 30V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
                fill="#0A2255"
              />
            </svg>
          </div>
        </section>

        {/* Main Contact Section */}
        <section
          className="relative py-16 md:py-24"
          style={{
            background: "linear-gradient(180deg, #0A2255 0%, #0E2F71 50%, #071A45 100%)",
          }}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 xl:gap-20">
              {/* Contact Form */}
              <div className="order-2 lg:order-1">
                <div
                  className="p-8 md:p-10 rounded-3xl relative overflow-hidden"
                  style={{
                    background: "linear-gradient(145deg, #FFFFFF 0%, #FFFFFF 100%)",
                    boxShadow: "0 25px 80px rgba(198,0,15,0.08), 0 10px 30px rgba(0,0,0,0.05)",
                  }}
                >
                  {/* Decorative Corner */}
                  <div
                    className="absolute -top-20 -right-20 w-40 h-40 rounded-full"
                    style={{
                      background: "radial-gradient(circle, rgba(198,0,15,0.08) 0%, transparent 70%)",
                    }}
                  />

                  <h2
                    className="text-2xl md:text-3xl font-bold mb-2 relative z-10"
                    style={{
                      fontFamily: "'Fredoka', sans-serif",
                      color: "#4A2C2A",
                    }}
                  >
                    Send Us a Message
                  </h2>
                  <p
                    className="mb-8 relative z-10"
                    style={{
                      fontFamily: "'Nunito', sans-serif",
                      color: "#4A2C2A",
                      opacity: 0.6,
                    }}
                  >
                    Fill out the form below and we&apos;ll get back to you soon.
                  </p>

                  {submitSuccess && (
                    <div
                      className="mb-6 p-4 rounded-xl flex items-center gap-3 animate-scale-in"
                      style={{
                        background: "rgba(34, 197, 94, 0.1)",
                        border: "1px solid rgba(34, 197, 94, 0.3)",
                      }}
                    >
                      <svg
                        className="w-6 h-6 text-green-500 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span
                        style={{
                          fontFamily: "'Nunito', sans-serif",
                          color: "#166534",
                          fontWeight: 600,
                        }}
                      >
                        Thank you! Your message has been sent successfully.
                      </span>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                    {/* Name & Email Row */}
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Name Field */}
                      <div className="relative">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          autoComplete="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField("name")}
                          onBlur={() => setFocusedField(null)}
                          className={`peer w-full px-5 pt-6 pb-3 rounded-xl border-2 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none focus:outline-none ${
                            errors.name
                              ? "border-red-400 bg-red-50"
                              : focusedField === "name" || formData.name
                              ? "border-[#C6000F] bg-white"
                              : "border-transparent bg-[#F8FAFC]"
                          }`}
                          style={{
                            fontFamily: "'Nunito', sans-serif",
                            color: "#4A2C2A",
                          }}
                          placeholder=" "
                          aria-label="Your Name"
                          aria-invalid={!!errors.name}
                          aria-describedby={errors.name ? "name-error" : undefined}
                        />
                        <label
                          htmlFor="name"
                          className={`absolute left-5 transition-all duration-300 pointer-events-none ${
                            focusedField === "name" || formData.name
                              ? "top-2 text-xs font-semibold"
                              : "top-1/2 -translate-y-1/2 text-base"
                          }`}
                          style={{
                            fontFamily: "'Nunito', sans-serif",
                            color:
                              focusedField === "name"
                                ? "#C6000F"
                                : errors.name
                                ? "#EF4444"
                                : "rgba(74,44,42,0.5)",
                          }}
                        >
                          Your Name *
                        </label>
                        {errors.name && (
                          <p
                            id="name-error"
                            className="mt-1 text-sm text-red-500"
                            style={{ fontFamily: "'Nunito', sans-serif" }}
                          >
                            {errors.name}
                          </p>
                        )}
                      </div>

                      {/* Email Field */}
                      <div className="relative">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          autoComplete="email"
                          spellCheck={false}
                          value={formData.email}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField("email")}
                          onBlur={() => setFocusedField(null)}
                          className={`peer w-full px-5 pt-6 pb-3 rounded-xl border-2 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none focus:outline-none ${
                            errors.email
                              ? "border-red-400 bg-red-50"
                              : focusedField === "email" || formData.email
                              ? "border-[#C6000F] bg-white"
                              : "border-transparent bg-[#F8FAFC]"
                          }`}
                          style={{
                            fontFamily: "'Nunito', sans-serif",
                            color: "#4A2C2A",
                          }}
                          placeholder=" "
                          aria-label="Your Email"
                          aria-invalid={!!errors.email}
                          aria-describedby={errors.email ? "email-error" : undefined}
                        />
                        <label
                          htmlFor="email"
                          className={`absolute left-5 transition-all duration-300 pointer-events-none ${
                            focusedField === "email" || formData.email
                              ? "top-2 text-xs font-semibold"
                              : "top-1/2 -translate-y-1/2 text-base"
                          }`}
                          style={{
                            fontFamily: "'Nunito', sans-serif",
                            color:
                              focusedField === "email"
                                ? "#C6000F"
                                : errors.email
                                ? "#EF4444"
                                : "rgba(74,44,42,0.5)",
                          }}
                        >
                          Your Email *
                        </label>
                        {errors.email && (
                          <p
                            id="email-error"
                            className="mt-1 text-sm text-red-500"
                            style={{ fontFamily: "'Nunito', sans-serif" }}
                          >
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Phone & Subject Row */}
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Phone Field */}
                      <div className="relative">
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          autoComplete="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField("phone")}
                          onBlur={() => setFocusedField(null)}
                          className={`peer w-full px-5 pt-6 pb-3 rounded-xl border-2 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none focus:outline-none ${
                            errors.phone
                              ? "border-red-400 bg-red-50"
                              : focusedField === "phone" || formData.phone
                              ? "border-[#C6000F] bg-white"
                              : "border-transparent bg-[#F8FAFC]"
                          }`}
                          style={{
                            fontFamily: "'Nunito', sans-serif",
                            color: "#4A2C2A",
                          }}
                          placeholder=" "
                          aria-label="Phone Number (Optional)"
                          aria-invalid={!!errors.phone}
                          aria-describedby={errors.phone ? "phone-error" : undefined}
                        />
                        <label
                          htmlFor="phone"
                          className={`absolute left-5 transition-all duration-300 pointer-events-none ${
                            focusedField === "phone" || formData.phone
                              ? "top-2 text-xs font-semibold"
                              : "top-1/2 -translate-y-1/2 text-base"
                          }`}
                          style={{
                            fontFamily: "'Nunito', sans-serif",
                            color:
                              focusedField === "phone"
                                ? "#C6000F"
                                : errors.phone
                                ? "#EF4444"
                                : "rgba(74,44,42,0.5)",
                          }}
                        >
                          Phone (Optional)
                        </label>
                        {errors.phone && (
                          <p
                            id="phone-error"
                            className="mt-1 text-sm text-red-500"
                            style={{ fontFamily: "'Nunito', sans-serif" }}
                          >
                            {errors.phone}
                          </p>
                        )}
                      </div>

                      {/* Subject Dropdown */}
                      <div className="relative">
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField("subject")}
                          onBlur={() => setFocusedField(null)}
                          className={`peer w-full px-5 pt-6 pb-3 rounded-xl border-2 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none focus:outline-none appearance-none cursor-pointer ${
                            errors.subject
                              ? "border-red-400 bg-red-50"
                              : focusedField === "subject" || formData.subject
                              ? "border-[#C6000F] bg-white"
                              : "border-transparent bg-[#F8FAFC]"
                          }`}
                          style={{
                            fontFamily: "'Nunito', sans-serif",
                            color: formData.subject ? "#4A2C2A" : "rgba(74,44,42,0.5)",
                          }}
                          aria-label="Subject"
                          aria-invalid={!!errors.subject}
                          aria-describedby={errors.subject ? "subject-error" : undefined}
                        >
                          <option value="" disabled>
                            Select a subject
                          </option>
                          {subjectOptions.map((option) => (
                            <option key={option} value={option} style={{ color: "#4A2C2A" }}>
                              {option}
                            </option>
                          ))}
                        </select>
                        <label
                          htmlFor="subject"
                          className={`absolute left-5 transition-all duration-300 pointer-events-none ${
                            focusedField === "subject" || formData.subject
                              ? "top-2 text-xs font-semibold"
                              : "top-1/2 -translate-y-1/2 text-base opacity-0"
                          }`}
                          style={{
                            fontFamily: "'Nunito', sans-serif",
                            color: focusedField === "subject" ? "#C6000F" : "rgba(74,44,42,0.5)",
                          }}
                        >
                          Subject *
                        </label>
                        {/* Dropdown Arrow */}
                        <svg
                          className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none transition-transform duration-300"
                          style={{ color: focusedField === "subject" ? "#C6000F" : "#4A2C2A" }}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                        {errors.subject && (
                          <p
                            id="subject-error"
                            className="mt-1 text-sm text-red-500"
                            style={{ fontFamily: "'Nunito', sans-serif" }}
                          >
                            {errors.subject}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Message Field */}
                    <div className="relative">
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField("message")}
                        onBlur={() => setFocusedField(null)}
                        rows={5}
                        className={`peer w-full px-5 pt-8 pb-3 rounded-xl border-2 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none focus:outline-none resize-none ${
                          errors.message
                            ? "border-red-400 bg-red-50"
                            : focusedField === "message" || formData.message
                            ? "border-[#C6000F] bg-white"
                            : "border-transparent bg-[#F8FAFC]"
                        }`}
                        style={{
                          fontFamily: "'Nunito', sans-serif",
                          color: "#4A2C2A",
                        }}
                        placeholder=" "
                        aria-label="Your Message"
                        aria-invalid={!!errors.message}
                        aria-describedby={errors.message ? "message-error" : undefined}
                      />
                      <label
                        htmlFor="message"
                        className={`absolute left-5 transition-all duration-300 pointer-events-none ${
                          focusedField === "message" || formData.message
                            ? "top-3 text-xs font-semibold"
                            : "top-5 text-base"
                        }`}
                        style={{
                          fontFamily: "'Nunito', sans-serif",
                          color:
                            focusedField === "message"
                              ? "#C6000F"
                              : errors.message
                              ? "#EF4444"
                              : "rgba(74,44,42,0.5)",
                        }}
                      >
                        Your Message *
                      </label>
                      {errors.message && (
                        <p
                          id="message-error"
                          className="mt-1 text-sm text-red-500"
                          style={{ fontFamily: "'Nunito', sans-serif" }}
                        >
                          {errors.message}
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full py-4 px-8 rounded-xl font-bold text-lg transition-all duration-300 relative overflow-hidden group ${
                        isSubmitting ? "cursor-not-allowed" : "hover:-translate-y-1"
                      }`}
                      style={{
                        background: "linear-gradient(135deg, #C6000F, #670008)",
                        color: "white",
                        fontFamily: "'Nunito', sans-serif",
                        boxShadow: isSubmitting
                          ? "none"
                          : "0 8px 30px rgba(198,0,15,0.3)",
                      }}
                    >
                      {/* Button Shine Effect */}
                      <span
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{
                          background:
                            "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
                          transform: "translateX(-100%)",
                          animation: isSubmitting ? "none" : "shine 2s infinite",
                        }}
                      />
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        {isSubmitting ? (
                          <>
                            <svg
                              className="w-5 h-5 animate-spin"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              />
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              />
                            </svg>
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                              />
                            </svg>
                          </>
                        )}
                      </span>
                    </button>
                  </form>
                </div>
              </div>

              {/* Contact Info Side */}
              <div className="order-1 lg:order-2 space-y-8">
                {/* Contact Cards */}
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      target={info.href.startsWith("http") ? "_blank" : undefined}
                      rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="group flex items-start gap-5 p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                      style={{
                        background: "#FFFFFF",
                        border: "1px solid rgba(198,0,15,0.08)",
                      }}
                    >
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                        style={{
                          background: "linear-gradient(135deg, #C6000F, #670008)",
                          color: "white",
                          boxShadow: "0 8px 20px rgba(198,0,15,0.25)",
                        }}
                      >
                        {info.icon}
                      </div>
                      <div>
                        <div
                          className="text-sm font-semibold mb-1"
                          style={{
                            fontFamily: "'Nunito', sans-serif",
                            color: "#C6000F",
                          }}
                        >
                          {info.label}
                        </div>
                        <div
                          className="text-xl font-bold mb-1"
                          style={{
                            fontFamily: "'Fredoka', sans-serif",
                            color: "#4A2C2A",
                          }}
                        >
                          {info.value}
                        </div>
                        <div
                          className="text-sm"
                          style={{
                            fontFamily: "'Nunito', sans-serif",
                            color: "#4A2C2A",
                            opacity: 0.6,
                          }}
                        >
                          {info.description}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Business Hours */}
                <div
                  className="p-6 rounded-2xl"
                  style={{
                    background: "linear-gradient(145deg, #4A2C2A 0%, #2D1A19 100%)",
                  }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <h3
                      className="text-xl font-bold"
                      style={{
                        fontFamily: "'Fredoka', sans-serif",
                        color: "white",
                      }}
                    >
                      Business Hours
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {businessHours.map((item, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center"
                        style={{
                          fontFamily: "'Nunito', sans-serif",
                          paddingBottom: index < businessHours.length - 1 ? "12px" : "0",
                          borderBottom:
                            index < businessHours.length - 1
                              ? "1px solid rgba(255,255,255,0.1)"
                              : "none",
                        }}
                      >
                        <span style={{ color: "rgba(255,255,255,0.7)" }}>{item.day}</span>
                        <span style={{ color: "white", fontWeight: 600 }}>{item.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div
                  className="p-6 rounded-2xl"
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid rgba(198,0,15,0.08)",
                  }}
                >
                  <h3
                    className="text-xl font-bold mb-4"
                    style={{
                      fontFamily: "'Fredoka', sans-serif",
                      color: "#4A2C2A",
                    }}
                  >
                    Follow Us
                  </h3>
                  <p
                    className="text-sm mb-5"
                    style={{
                      fontFamily: "'Nunito', sans-serif",
                      color: "#4A2C2A",
                      opacity: 0.6,
                    }}
                  >
                    Stay connected and see our latest treats, behind-the-scenes content, and more!
                  </p>
                  <div className="flex gap-3">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                        style={{
                          background: "linear-gradient(135deg, #C6000F, #670008)",
                          color: "white",
                          boxShadow: "0 4px 15px rgba(198,0,15,0.25)",
                        }}
                        aria-label={social.name}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map / Location Section */}
        <section
          className="relative py-16 md:py-24 overflow-hidden"
          style={{
            background: "linear-gradient(180deg, #071A45 0%, #0E2F71 100%)",
          }}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{
                  fontFamily: "'Fredoka', sans-serif",
                  color: "#FFFFFF",
                }}
              >
                Find Our Sweet Spot
              </h2>
              <p
                className="text-lg max-w-xl mx-auto"
                style={{
                  fontFamily: "'Nunito', sans-serif",
                  color: "rgba(255,255,255,0.7)",
                }}
              >
                Visit us at our headquarters and experience the world of LOR chocolates
              </p>
            </div>

            {/* Decorative Map Placeholder */}
            <div
              className="relative h-[400px] rounded-3xl overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #1A3A6E 0%, #0D2850 100%)",
                boxShadow: "inset 0 0 100px rgba(0,0,0,0.3)",
              }}
            >
              {/* Map Pattern */}
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
                  `,
                  backgroundSize: "40px 40px",
                }}
              />

              {/* Roads */}
              <div
                className="absolute top-1/2 left-0 right-0 h-3"
                style={{
                  background: "rgba(255,255,255,0.1)",
                  transform: "translateY(-50%)",
                }}
              />
              <div
                className="absolute left-1/3 top-0 bottom-0 w-3"
                style={{ background: "rgba(255,255,255,0.1)" }}
              />
              <div
                className="absolute left-2/3 top-0 bottom-0 w-2"
                style={{ background: "rgba(255,255,255,0.08)" }}
              />

              {/* Location Marker */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full">
                <div className="relative animate-float">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{
                      background: "linear-gradient(135deg, #C6000F, #670008)",
                      boxShadow: "0 8px 30px rgba(198,0,15,0.4)",
                    }}
                  >
                    <svg
                      className="w-8 h-8 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                  </div>
                  {/* Marker Shadow */}
                  <div
                    className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-10 h-3 rounded-full"
                    style={{
                      background: "rgba(0,0,0,0.2)",
                      filter: "blur(4px)",
                    }}
                  />
                </div>
              </div>

              {/* Location Card */}
              <div
                className="absolute bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-sm p-5 rounded-2xl"
                style={{
                  background: "rgba(255,255,255,0.95)",
                  backdropFilter: "blur(10px)",
                  boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
                }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "linear-gradient(135deg, rgba(198,0,15,0.1), rgba(103,0,8,0.05))",
                      color: "#C6000F",
                    }}
                  >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4
                      className="font-bold text-lg mb-1"
                      style={{
                        fontFamily: "'Fredoka', sans-serif",
                        color: "#4A2C2A",
                      }}
                    >
                      LOR Headquarters
                    </h4>
                    <p
                      className="text-sm mb-3"
                      style={{
                        fontFamily: "'Nunito', sans-serif",
                        color: "#4A2C2A",
                        opacity: 0.7,
                      }}
                    >
                      123 Sweet Street, Treat City, TC 12345
                    </p>
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:opacity-80"
                      style={{
                        fontFamily: "'Nunito', sans-serif",
                        color: "#C6000F",
                      }}
                    >
                      Get Directions
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section
          className="relative py-16 md:py-24"
          style={{
            background: "linear-gradient(180deg, #0E2F71 0%, #071A45 100%)",
          }}
        >
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <span
                className="inline-block px-5 py-2 rounded-full text-sm font-bold tracking-wider mb-4"
                style={{
                  background: "rgba(198,0,15,0.2)",
                  color: "#FF6B6B",
                  fontFamily: "'Nunito', sans-serif",
                }}
              >
                FAQ
              </span>
              <h2
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{
                  fontFamily: "'Fredoka', sans-serif",
                  color: "#FFFFFF",
                }}
              >
                Frequently Asked Questions
              </h2>
              <p
                className="text-lg max-w-xl mx-auto"
                style={{
                  fontFamily: "'Nunito', sans-serif",
                  color: "rgba(255,255,255,0.7)",
                }}
              >
                Find quick answers to common questions about our products and services
              </p>
            </div>

            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <div
                  key={index}
                  className="rounded-2xl overflow-hidden transition-all duration-300"
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid",
                    borderColor: openFaq === index ? "rgba(198,0,15,0.3)" : "rgba(255,255,255,0.1)",
                    boxShadow:
                      openFaq === index
                        ? "0 10px 40px rgba(0,0,0,0.2)"
                        : "0 2px 10px rgba(0,0,0,0.1)",
                  }}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left"
                    aria-expanded={openFaq === index}
                    aria-controls={`faq-content-${index}`}
                  >
                    <span
                      className="font-bold text-lg"
                      style={{
                        fontFamily: "'Fredoka', sans-serif",
                        color: "#4A2C2A",
                      }}
                    >
                      {item.question}
                    </span>
                    <span
                      className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                      style={{
                        background:
                          openFaq === index
                            ? "linear-gradient(135deg, #C6000F, #670008)"
                            : "rgba(198,0,15,0.1)",
                        color: openFaq === index ? "white" : "#C6000F",
                        transform: openFaq === index ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </span>
                  </button>
                  <div
                    id={`faq-content-${index}`}
                    className={`overflow-hidden transition-all duration-300 ${
                      openFaq === index ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <div
                      className="px-6 pb-5"
                      style={{
                        fontFamily: "'Nunito', sans-serif",
                        color: "#4A2C2A",
                        opacity: 0.7,
                        lineHeight: 1.7,
                      }}
                    >
                      {item.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Still Have Questions */}
            <div
              className="mt-12 p-8 rounded-3xl text-center"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <div
                className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, #C6000F, #670008)",
                  boxShadow: "0 8px 30px rgba(198,0,15,0.35)",
                }}
              >
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3
                className="text-2xl font-bold mb-2"
                style={{
                  fontFamily: "'Fredoka', sans-serif",
                  color: "#FFFFFF",
                }}
              >
                Still Have Questions?
              </h3>
              <p
                className="mb-6"
                style={{
                  fontFamily: "'Nunito', sans-serif",
                  color: "rgba(255,255,255,0.7)",
                }}
              >
                Can&apos;t find the answer you&apos;re looking for? Our friendly team is here to help!
              </p>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "linear-gradient(135deg, #C6000F, #670008)",
                  color: "white",
                  fontFamily: "'Nunito', sans-serif",
                  boxShadow: "0 8px 30px rgba(198,0,15,0.4)",
                }}
              >
                Contact Us
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Custom Styles for Shine Animation */}
      <style jsx>{`
        @keyframes shine {
          0% {
            transform: translateX(-100%);
          }
          50%,
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </>
  );
}
