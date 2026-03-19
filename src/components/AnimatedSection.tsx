"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";

type Variant = "fade-up" | "fade-in" | "slide-left" | "slide-right" | "stagger-children";

interface AnimatedSectionProps {
  children: ReactNode;
  variant?: Variant;
  delay?: number;
  duration?: number;
  threshold?: number;
  once?: boolean;
  className?: string;
  id?: string;
  role?: string;
  "aria-label"?: string;
  "aria-labelledby"?: string;
}

const EASING = "cubic-bezier(0.22, 1, 0.36, 1)";

export default function AnimatedSection({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 600,
  threshold = 0.15,
  once = true,
  className = "",
  ...rest
}: AnimatedSectionProps) {
  const elRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  const prefersReduced = useRef(false);

  useEffect(() => {
    prefersReduced.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  const observerRef = useRef<IntersectionObserver | null>(null);

  const setRef = useCallback(
    (node: HTMLDivElement | null) => {
      // Cleanup previous
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }

      elRef.current = node;
      if (!node) return;

      if (prefersReduced.current) {
        setVisible(true);
        return;
      }

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) observer.disconnect();
          } else if (!once) {
            setVisible(false);
          }
        },
        { threshold },
      );

      observer.observe(node);
      observerRef.current = observer;
    },
    [threshold, once],
  );

  const variantClass = `anim-${variant}`;
  const visibleClass = visible ? "anim-visible" : "";

  return (
    <div
      ref={setRef}
      className={`${variantClass} ${visibleClass} ${className}`.trim()}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: EASING,
        ...(variant === "stagger-children"
          ? ({ "--stagger-duration": `${duration}ms`, "--stagger-easing": EASING } as React.CSSProperties)
          : {}),
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
