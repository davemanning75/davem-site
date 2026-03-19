"use client";

import { useCallback, useRef, useState } from "react";

interface AnimatedHeadingProps {
  children: string;
  as?: "h1" | "h2" | "h3" | "h4";
  delay?: number;
  stagger?: number;
  threshold?: number;
  className?: string;
  id?: string;
}

const EASING = "cubic-bezier(0.22, 1, 0.36, 1)";

export default function AnimatedHeading({
  children,
  as: Tag = "h2",
  delay = 0,
  stagger = 40,
  threshold = 0.15,
  className = "",
  ...rest
}: AnimatedHeadingProps) {
  const [visible, setVisible] = useState(false);
  const prefersReduced = typeof window !== "undefined"
    ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
    : false;
  const observerRef = useRef<IntersectionObserver | null>(null);

  const setRef = useCallback(
    (node: HTMLHeadingElement | null) => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }

      if (!node) return;

      if (prefersReduced) {
        setVisible(true);
        return;
      }

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        },
        { threshold },
      );

      observer.observe(node);
      observerRef.current = observer;
    },
    [threshold, prefersReduced],
  );

  const words = children.split(/\s+/);

  return (
    <Tag
      ref={setRef}
      className={`anim-heading ${visible ? "anim-heading-visible" : ""} ${className}`.trim()}
      aria-label={children}
      {...rest}
    >
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="anim-word"
          style={{
            transitionDelay: `${delay + i * stagger}ms`,
            transitionTimingFunction: EASING,
          }}
          aria-hidden="true"
        >
          {word}
          {i < words.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </Tag>
  );
}
