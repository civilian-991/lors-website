"use client";

import { ReactNode, CSSProperties } from "react";
import { useScrollAnimation, useMagneticEffect, useParallax } from "@/hooks/useScrollAnimation";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: "fade-up" | "fade-left" | "fade-right" | "fade-scale" | "flip-x" | "flip-y";
  delay?: number;
  duration?: number;
  threshold?: number;
}

export function AnimatedSection({
  children,
  className = "",
  animation = "fade-up",
  delay = 0,
  duration = 800,
  threshold = 0.1,
}: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold });

  const animations: Record<string, CSSProperties> = {
    "fade-up": {
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? "translateY(0)" : "translateY(40px)",
    },
    "fade-left": {
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? "translateX(0)" : "translateX(-50px)",
    },
    "fade-right": {
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? "translateX(0)" : "translateX(50px)",
    },
    "fade-scale": {
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? "scale(1)" : "scale(0.8)",
    },
    "flip-x": {
      opacity: isVisible ? 1 : 0,
      transform: isVisible
        ? "perspective(400px) rotateX(0)"
        : "perspective(400px) rotateX(90deg)",
    },
    "flip-y": {
      opacity: isVisible ? 1 : 0,
      transform: isVisible
        ? "perspective(400px) rotateY(0)"
        : "perspective(400px) rotateY(90deg)",
    },
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...animations[animation],
        transition: `all ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

interface AnimatedTextProps {
  children: string;
  className?: string;
  animation?: "reveal" | "shimmer" | "wave" | "bounce";
  delay?: number;
}

export function AnimatedText({
  children,
  className = "",
  animation = "reveal",
  delay = 0,
}: AnimatedTextProps) {
  const { ref, isVisible } = useScrollAnimation();

  if (animation === "wave" || animation === "bounce") {
    return (
      <span ref={ref} className={className}>
        {children.split("").map((char, i) => (
          <span
            key={i}
            className={`inline-block ${isVisible ? (animation === "wave" ? "animate-wave" : "animate-bounce-subtle") : ""}`}
            style={{
              animationDelay: `${delay + i * 50}ms`,
              opacity: isVisible ? 1 : 0,
              transition: `opacity 0.3s ease ${delay + i * 30}ms`,
            }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </span>
    );
  }

  return (
    <span
      ref={ref}
      className={`${className} ${isVisible ? (animation === "shimmer" ? "animate-text-shimmer" : "animate-text-reveal") : ""}`}
      style={{
        animationDelay: `${delay}ms`,
        opacity: animation === "reveal" && !isVisible ? 0 : 1,
      }}
    >
      {children}
    </span>
  );
}

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  strength?: number;
  onClick?: () => void;
}

export function MagneticButton({
  children,
  className = "",
  strength = 0.3,
  onClick,
}: MagneticButtonProps) {
  const { ref, transform, handlers } = useMagneticEffect(strength);

  return (
    <div
      ref={ref}
      className={`inline-block ${className}`}
      style={{
        transform: `translate(${transform.x}px, ${transform.y}px)`,
        transition: "transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      }}
      onClick={onClick}
      {...handlers}
    >
      {children}
    </div>
  );
}

interface ParallaxSectionProps {
  children: ReactNode;
  className?: string;
  speed?: number;
  direction?: "up" | "down";
}

export function ParallaxSection({
  children,
  className = "",
  speed = 0.3,
  direction = "up",
}: ParallaxSectionProps) {
  const { ref, offset } = useParallax(speed);
  const translateValue = direction === "up" ? -offset : offset;

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform: `translateY(${translateValue}px)`,
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
}

interface FloatingElementProps {
  children: ReactNode;
  className?: string;
  animation?: "float" | "float-reverse" | "float-delay" | "bounce" | "wiggle" | "spin";
  duration?: number;
}

export function FloatingElement({
  children,
  className = "",
  animation = "float",
  duration,
}: FloatingElementProps) {
  const animationClasses: Record<string, string> = {
    float: "animate-float",
    "float-reverse": "animate-float-reverse",
    "float-delay": "animate-float-delay",
    bounce: "animate-bounce-subtle",
    wiggle: "animate-wiggle",
    spin: "animate-spin-slow",
  };

  return (
    <div
      className={`${animationClasses[animation]} ${className}`}
      style={duration ? { animationDuration: `${duration}s` } : undefined}
    >
      {children}
    </div>
  );
}

interface StaggeredListProps {
  children: ReactNode[];
  className?: string;
  itemClassName?: string;
  staggerDelay?: number;
  animation?: "fade-up" | "fade-left" | "fade-right" | "scale";
}

export function StaggeredList({
  children,
  className = "",
  itemClassName = "",
  staggerDelay = 100,
  animation = "fade-up",
}: StaggeredListProps) {
  const { ref, isVisible } = useScrollAnimation();

  const getItemStyle = (index: number): CSSProperties => {
    const baseStyle = {
      transition: `all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${index * staggerDelay}ms`,
    };

    switch (animation) {
      case "fade-up":
        return {
          ...baseStyle,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(30px)",
        };
      case "fade-left":
        return {
          ...baseStyle,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateX(0)" : "translateX(-30px)",
        };
      case "fade-right":
        return {
          ...baseStyle,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateX(0)" : "translateX(30px)",
        };
      case "scale":
        return {
          ...baseStyle,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "scale(1)" : "scale(0.8)",
        };
      default:
        return baseStyle;
    }
  };

  return (
    <div ref={ref} className={className}>
      {children.map((child, index) => (
        <div key={index} className={itemClassName} style={getItemStyle(index)}>
          {child}
        </div>
      ))}
    </div>
  );
}

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
  intensity?: "low" | "medium" | "high";
}

export function GlowCard({
  children,
  className = "",
  glowColor = "rgba(198, 0, 15, 0.3)",
  intensity = "medium",
}: GlowCardProps) {
  const glowSizes = {
    low: "0 0 20px",
    medium: "0 0 30px",
    high: "0 0 50px",
  };

  return (
    <div
      className={`transition-all duration-300 hover:animate-glow ${className}`}
      style={{
        "--glow-color": glowColor,
        "--glow-size": glowSizes[intensity],
      } as CSSProperties}
    >
      {children}
    </div>
  );
}

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
  perspective?: number;
  scale?: number;
}

export function TiltCard({
  children,
  className = "",
  maxTilt = 10,
  perspective = 1000,
  scale = 1.02,
}: TiltCardProps) {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;

    card.style.transform = `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = `perspective(${perspective}px) rotateX(0) rotateY(0) scale(1)`;
  };

  return (
    <div
      className={`transition-transform duration-300 ease-out ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </div>
  );
}

interface RippleButtonProps {
  children: ReactNode;
  className?: string;
  rippleColor?: string;
  onClick?: () => void;
}

export function RippleButton({
  children,
  className = "",
  rippleColor = "rgba(255, 255, 255, 0.4)",
  onClick,
}: RippleButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const ripple = document.createElement("span");
    ripple.style.cssText = `
      position: absolute;
      background: ${rippleColor};
      border-radius: 50%;
      transform: scale(0);
      animation: ripple 0.6s ease-out;
      pointer-events: none;
      left: ${x}px;
      top: ${y}px;
      width: 100px;
      height: 100px;
      margin-left: -50px;
      margin-top: -50px;
    `;

    button.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);

    onClick?.();
  };

  return (
    <button
      className={`relative overflow-hidden ${className}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

export function AnimatedCounter({
  end,
  suffix = "",
  prefix = "",
  duration = 2000,
  className = "",
}: AnimatedCounterProps) {
  const { ref, isVisible } = useScrollAnimation();
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!isVisible || hasAnimated) return;
    setHasAnimated(true);

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOut * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration, hasAnimated]);

  return (
    <span ref={ref} className={className}>
      {prefix}{count}{suffix}
    </span>
  );
}

// Need to import useState and useEffect for AnimatedCounter
import { useState, useEffect } from "react";

interface MarqueeProps {
  children: ReactNode;
  className?: string;
  speed?: number;
  direction?: "left" | "right";
  pauseOnHover?: boolean;
}

export function Marquee({
  children,
  className = "",
  speed = 20,
  direction = "left",
  pauseOnHover = true,
}: MarqueeProps) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <div
        className={`flex ${direction === "left" ? "animate-marquee" : "animate-marquee-reverse"} ${pauseOnHover ? "hover:[animation-play-state:paused]" : ""}`}
        style={{ animationDuration: `${speed}s` }}
      >
        <div className="flex-shrink-0">{children}</div>
        <div className="flex-shrink-0">{children}</div>
      </div>
    </div>
  );
}

interface PulsingDotProps {
  className?: string;
  color?: string;
  size?: "sm" | "md" | "lg";
}

export function PulsingDot({
  className = "",
  color = "#C6000F",
  size = "md",
}: PulsingDotProps) {
  const sizes = { sm: "w-2 h-2", md: "w-3 h-3", lg: "w-4 h-4" };
  const ringSizes = { sm: "w-4 h-4", md: "w-6 h-6", lg: "w-8 h-8" };

  return (
    <div className={`relative ${className}`}>
      <div
        className={`${sizes[size]} rounded-full`}
        style={{ backgroundColor: color }}
      />
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${ringSizes[size]} rounded-full animate-pulse-ring`}
        style={{ backgroundColor: color, opacity: 0.5 }}
      />
    </div>
  );
}
