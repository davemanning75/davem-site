"use client";

import { useEffect, useRef, useState } from "react";

type StatItem = {
  value: string;
  label: string;
  detail: string;
};

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
              {signal.value}
            </div>
            <p className="stats-strip-label">{signal.label}</p>
            <p className="stats-strip-detail">{signal.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
