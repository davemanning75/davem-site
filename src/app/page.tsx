"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import CareerPanels from "@/components/CareerPanels";
import OperatingModel from "@/components/OperatingModel";
import WorkGrid from "@/components/WorkGrid";
import {
  contactFocusAreas,
  heroMandate,
  heroMetrics,
  heroSignals,
  leadershipPillars,
  siteCopy,
  snapshotGroups,
} from "@/data/portfolio";

export default function Home() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [validationError, setValidationError] = useState<string | null>(null);
  const { contact, footer, hero, mandate } = siteCopy;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("idle");
    setValidationError(null);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const honeypot = String(formData.get("hp") ?? "").trim();

    if (honeypot) {
      setValidationError(contact.validationMessages.spam);
      return;
    }

    if (!name || !email || !message) {
      setValidationError(contact.validationMessages.required);
      return;
    }

    if (message.length < 20) {
      setValidationError(contact.validationMessages.detail);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setValidationError(contact.validationMessages.email);
      return;
    }

    setStatus("sending");

    const subject = encodeURIComponent(contact.subject);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);

    try {
      window.location.href = `mailto:davemanning75@gmail.com?subject=${subject}&body=${body}`;
      window.setTimeout(() => setStatus("sent"), 400);
    } catch {
      setStatus("error");
    }
  };

  useEffect(() => {
    const cursorEnabled = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const cursor = document.getElementById("cursor");
    const ring = document.getElementById("cursorRing");
    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let ringFrameId = 0;
    let starsFrameId = 0;

    if (!cursorEnabled) {
      if (cursor) {
        cursor.style.display = "none";
      }

      if (ring) {
        ring.style.display = "none";
      }
    }

    const onMouseMove = (event: MouseEvent) => {
      if (!cursorEnabled) {
        return;
      }

      mouseX = event.clientX;
      mouseY = event.clientY;

      if (cursor) {
        cursor.style.left = `${mouseX}px`;
        cursor.style.top = `${mouseY}px`;
      }
    };

    if (cursorEnabled) {
      document.addEventListener("mousemove", onMouseMove);
    }

    const animateRing = () => {
      if (!ring) {
        return;
      }

      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      ring.style.left = `${ringX}px`;
      ring.style.top = `${ringY}px`;
      ringFrameId = requestAnimationFrame(animateRing);
    };

    if (cursorEnabled) {
      animateRing();
    }

    const onHoverEnter = () => {
      if (!ring) {
        return;
      }

      ring.style.width = "52px";
      ring.style.height = "52px";
      ring.style.opacity = "0.72";
    };

    const onHoverLeave = () => {
      if (!ring) {
        return;
      }

      ring.style.width = "36px";
      ring.style.height = "36px";
      ring.style.opacity = "0.42";
    };

    const hoverTargets = Array.from(
      document.querySelectorAll<HTMLElement>("a, button, summary"),
    );

    if (cursorEnabled) {
      hoverTargets.forEach((element) => {
        element.addEventListener("mouseenter", onHoverEnter);
        element.addEventListener("mouseleave", onHoverLeave);
      });
    }

    const canvas = document.getElementById("stars") as HTMLCanvasElement | null;
    const ctx = canvas?.getContext("2d");
    const stars: Array<{
      x: number;
      y: number;
      r: number;
      a: number;
      speed: number;
    }> = [];

    const resizeCanvas = () => {
      if (!canvas) {
        return;
      }

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createStars = () => {
      stars.length = 0;
      for (let index = 0; index < 180; index += 1) {
        stars.push({
          x: Math.random(),
          y: Math.random(),
          r: Math.random() * 1.15 + 0.2,
          a: Math.random(),
          speed: Math.random() * 0.00018 + 0.00004,
        });
      }
    };

    const drawStars = () => {
      if (!ctx || !canvas) {
        return;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((star) => {
        star.a += star.speed;
        const alpha = 0.18 + 0.42 * Math.abs(Math.sin(star.a));
        ctx.beginPath();
        ctx.arc(star.x * canvas.width, star.y * canvas.height, star.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(120, 215, 240, ${alpha})`;
        ctx.fill();
      });
      starsFrameId = requestAnimationFrame(drawStars);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    createStars();
    drawStars();

    const reveals = Array.from(document.querySelectorAll(".reveal"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.14 },
    );

    reveals.forEach((element) => observer.observe(element));

    return () => {
      if (cursorEnabled) {
        document.removeEventListener("mousemove", onMouseMove);
        hoverTargets.forEach((element) => {
          element.removeEventListener("mouseenter", onHoverEnter);
          element.removeEventListener("mouseleave", onHoverLeave);
        });
      }

      window.removeEventListener("resize", resizeCanvas);
      observer.disconnect();
      cancelAnimationFrame(ringFrameId);
      cancelAnimationFrame(starsFrameId);
    };
  }, []);

  useEffect(() => {
    if (status !== "sent") {
      return;
    }

    const timer = window.setTimeout(() => setStatus("idle"), 4000);
    return () => window.clearTimeout(timer);
  }, [status]);

  return (
    <>
      <canvas id="stars" />
      <div className="grid-overlay" />
      <div id="cursor" className="cursor" />
      <div id="cursorRing" className="cursor-ring" />

      <main id="top" className="site-main">
        <section id="hero" className="hero-section">
          <div className="section-shell hero-shell">
            <div className="hero-copy">
              <p className="section-label hero-label">{hero.label}</p>
              <h1 className="hero-title">{hero.title}</h1>
              <p className="hero-intro">{hero.intro}</p>

              <div className="hero-cta-row">
                <a className="btn-primary" href="#work">
                  {hero.primaryCtaLabel}
                </a>
                <a className="btn-outline" href="#contact">
                  {hero.secondaryCtaLabel}
                </a>
              </div>

              <div className="hero-signal-grid reveal">
                {heroSignals.map((signal) => (
                  <article key={signal.label} className="hero-signal-card">
                    <div className="hero-signal-value">{signal.value}</div>
                    <p className="hero-signal-label">{signal.label}</p>
                    <p className="hero-signal-detail">{signal.detail}</p>
                  </article>
                ))}
              </div>
            </div>

            <aside className="hero-aside reveal">
              <div className="hero-portrait-frame">
                <Image
                  src="/headshot.png"
                  alt={hero.imageAlt}
                  fill
                  priority
                  sizes="(max-width: 900px) 70vw, 28vw"
                  className="hero-portrait"
                />
              </div>

              <div className="hero-brief-card">
                <p className="card-label">{hero.briefLabel}</p>
                <h2>{hero.briefTitle}</h2>
                <ul className="signal-list compact-list">
                  {heroMandate.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <div className="hero-metric-grid">
                  {heroMetrics.map((metric) => (
                    <div key={metric.label} className="hero-metric-item">
                      <div className="hero-metric-value">{metric.value}</div>
                      <p>{metric.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section id="about" className="section-block">
          <div className="section-shell">
            <div className="section-heading reveal">
              <p className="section-label">{mandate.label}</p>
              <h2 className="section-title">{mandate.title}</h2>
              <p className="section-intro">{mandate.intro}</p>
            </div>

            <div className="narrative-grid">
              <div className="narrative-copy reveal">
                {mandate.narrative.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <aside className="narrative-note reveal">
                <p className="card-label">{mandate.noteLabel}</p>
                <h3>{mandate.noteTitle}</h3>
                <p>{mandate.noteBody}</p>
                <ul className="signal-list compact-list">
                  {mandate.noteBullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </aside>
            </div>

            <div className="pillar-grid">
              {leadershipPillars.map((pillar) => (
                <article key={pillar.title} className="pillar-card reveal">
                  <p className="card-step">{pillar.step}</p>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.description}</p>
                  <div className="tag-row">
                    {pillar.proof.map((item) => (
                      <span key={item} className="tag-chip">
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            <div className="snapshot-grid reveal">
              {snapshotGroups.map((group) => (
                <article key={group.title} className="snapshot-card">
                  <p className="card-label">{group.title}</p>
                  <div className="tag-row">
                    {group.items.map((item) => (
                      <span key={item} className="tag-chip muted-chip">
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <OperatingModel />
        <WorkGrid />
        <CareerPanels />

        <section id="contact" className="section-block">
          <div className="section-shell contact-layout">
            <div className="contact-copy reveal">
              <p className="section-label">{contact.label}</p>
              <h2 className="section-title">{contact.title}</h2>
              <p className="section-intro">{contact.intro}</p>

              <ul className="signal-list contact-focus-list">
                {contactFocusAreas.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              {validationError && <div className="contact-error">{validationError}</div>}
              {status === "error" && (
                <div className="contact-error">{contact.errorMessage}</div>
              )}
              {status === "sent" && (
                <div className="contact-thankyou">{contact.successMessage}</div>
              )}
            </div>

            <div className="contact-form-card reveal">
              <p className="card-label">{contact.cardLabel}</p>
              <form className="contact-form" onSubmit={handleSubmit}>
                <input type="text" name="hp" className="hp-field" tabIndex={-1} autoComplete="off" />

                <label>
                  {contact.fieldLabels.name}
                  <input name="name" type="text" required />
                </label>

                <label>
                  {contact.fieldLabels.email}
                  <input name="email" type="email" required />
                </label>

                <label>
                  {contact.fieldLabels.message}
                  <textarea name="message" rows={5} required />
                </label>

                <button type="submit" className="btn-primary" disabled={status === "sending"}>
                  {status === "sending" ? <span className="spinner" /> : contact.submitLabel}
                </button>
              </form>
            </div>
          </div>
        </section>

        <footer className="site-footer">
          <div className="footer-meta">
            <p>{footer.name}</p>
            <span>{footer.meta}</span>
          </div>
          <a
            href="https://www.linkedin.com/in/davemanninggta/"
            className="footer-linkedin"
            target="_blank"
            rel="noreferrer"
            aria-label={footer.linkedinAriaLabel}
          >
            {footer.linkedinLabel}
          </a>
        </footer>
      </main>
    </>
  );
}
