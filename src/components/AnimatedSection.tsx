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

      // Use a lower threshold for tall stagger containers on mobile
      const effectiveThreshold = variant === "stagger-children" ? Math.min(threshold, 0.05) : threshold;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) observer.disconnect();
          } else if (!once) {
            setVisible(false);
          }
        },
        { threshold: effectiveThreshold, rootMargin: "100px 0px 100px 0px" },
      );

      observer.observe(node);
      observerRef.current = observer;

      // Fallback: if JS hydrated after the user already scrolled past this
      // element, the observer fires with isIntersecting=false and never
      // triggers again. Detect this and show the content immediately.
      const rect = node.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        // Element is currently in the viewport — observer should handle it,
        // but fire a safety check after one frame in case it doesn't.
        requestAnimationFrame(() => {
          if (!elRef.current) return;
          const r = elRef.current.getBoundingClientRect();
          if (r.top < window.innerHeight) {
            setVisible(true);
            if (once && observerRef.current) {
              observerRef.current.disconnect();
              observerRef.current = null;
            }
          }
        });
      } else if (rect.bottom < 0) {
        // Already scrolled past — show immediately
        setVisible(true);
        if (once) {
          observer.disconnect();
          observerRef.current = null;
        }
      }
    },
    [threshold, once, variant],
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
