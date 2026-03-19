"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type StatItem = {
  value: string;
  label: string;
  detail: string;
};

function parseNumeric(value: string): { prefix: string; number: number; suffix: string } | null {
  // Only animate values that start with a number (e.g. "20+ years", "3 director roles")
  const match = value.match(/^(\d+)(.*)$/);
  if (!match) return null;
  return { prefix: "", number: parseInt(match[1], 10), suffix: match[2] };
}

function CountUp({ value, active }: { value: string; active: boolean }) {
  const parsed = useMemo(() => parseNumeric(value), [value]);
  const [display, setDisplay] = useState(value);
  const frameRef = useRef(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!active || !parsed || hasAnimated.current) return;
    hasAnimated.current = true;

    const duration = 1200;
    const start = performance.now();
    const { prefix, number: target, suffix } = parsed;

    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);
      setDisplay(`${prefix}${current}${suffix}`);

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      }
    };

    frameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameRef.current);
  }, [active, parsed]);

  return <span>{display}</span>;
}

export default function StatsStrip({ signals }: { signals: StatItem[] }) {
  const stripRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = stripRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={stripRef}
      className={`stats-strip ${visible ? "stats-strip-visible" : ""}`}
      aria-label="Executive leadership signals"
    >
      <div className="stats-strip-inner">
        {signals.map((signal, i) => (
          <article
            key={signal.label}
            className="stats-strip-item"
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <div className="stats-strip-value">
              <CountUp value={signal.value} active={visible} />
            </div>
            <p className="stats-strip-label">{signal.label}</p>
            <p className="stats-strip-detail">{signal.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
