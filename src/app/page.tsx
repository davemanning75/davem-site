"use client";

import { useEffect } from "react";
import WorkGrid from "@/components/WorkGrid";

export default function Home() {
  useEffect(() => {
    const cursor = document.getElementById("cursor");
    const ring = document.getElementById("cursorRing");
    let mx = 0;
    let my = 0;
    let rx = 0;
    let ry = 0;

    const onMouseMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (cursor) {
        cursor.style.left = `${mx}px`;
        cursor.style.top = `${my}px`;
      }
    };

    document.addEventListener("mousemove", onMouseMove);

    let rafId: number;

    const animateRing = () => {
      if (!ring) return;
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ring.style.left = `${rx}px`;
      ring.style.top = `${ry}px`;
      rafId = requestAnimationFrame(animateRing);
    };

    animateRing();

    const onHoverEnter = () => {
      if (!ring) return;
      ring.style.width = "52px";
      ring.style.height = "52px";
      ring.style.opacity = "0.7";
    };
    const onHoverLeave = () => {
      if (!ring) return;
      ring.style.width = "36px";
      ring.style.height = "36px";
      ring.style.opacity = "0.4";
    };

    const hoverTargets = Array.from(document.querySelectorAll("a, button"));
    hoverTargets.forEach((el) => {
      el.addEventListener("mouseenter", onHoverEnter);
      el.addEventListener("mouseleave", onHoverLeave);
    });

    const canvas = document.getElementById("stars") as HTMLCanvasElement | null;
    const ctx = canvas?.getContext("2d");
    const stars: Array<{
      x: number;
      y: number;
      r: number;
      a: number;
      speed: number;
    }> = [];

    const resize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createStars = () => {
      stars.length = 0;
      for (let i = 0; i < 200; i++) {
        stars.push({
          x: Math.random(),
          y: Math.random(),
          r: Math.random() * 1.2 + 0.2,
          a: Math.random(),
          speed: Math.random() * 0.0002 + 0.00005,
        });
      }
    };

    const drawStars = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((s) => {
        s.a += s.speed;
        const alpha = 0.2 + 0.5 * Math.abs(Math.sin(s.a));
        ctx.beginPath();
        ctx.arc(s.x * canvas.width, s.y * canvas.height, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,184,255,${alpha})`;
        ctx.fill();
      });
      requestAnimationFrame(drawStars);
    };

    resize();
    window.addEventListener("resize", resize);
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
      { threshold: 0.12 },
    );

    reveals.forEach((r) => observer.observe(r));

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", resize);
      hoverTargets.forEach((el) => {
        el.removeEventListener("mouseenter", onHoverEnter);
        el.removeEventListener("mouseleave", onHoverLeave);
      });
      observer.disconnect();
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <canvas id="stars" />
      <div className="grid-overlay" />
      <div id="cursor" className="cursor" />
      <div id="cursorRing" className="cursor-ring" />

      <main id="top">
        <section id="hero">
          <div className="hero-inner">
            <div className="hero-label">
              <span /> Agentic AI Leader · Architect · Strategist
            </div>
            <h1 className="hero-name">
              Dave <br />
              <span className="line2">Manning</span>
            </h1>
            <p className="hero-tagline">
              Building the frameworks that move enterprises from <strong>AI
              ambition to production reality</strong> — at measurable, repeatable
              velocity.
            </p>
            <div className="hero-ctas">
              <a className="btn-primary" href="#work">
                View My Work
              </a>
              <a className="btn-outline" href="#contact">
                Get In Touch
              </a>
            </div>
            <div className="hero-stats reveal">
              <div className="stat-item">
                <div className="stat-num">20+</div>
                <div className="stat-label">Years in Enterprise IT</div>
              </div>
              <div className="stat-item">
                <div className="stat-num">AI<span style={{ fontSize: "1rem" }}>Factory</span></div>
                <div className="stat-label">Architect</div>
              </div>
              <div className="stat-item">
                <div className="stat-num">3</div>
                <div className="stat-label">Director-Level Roles</div>
              </div>
              <div className="stat-item">
                <div className="stat-num">F500</div>
                <div className="stat-label">Enterprise Clients</div>
              </div>
            </div>
          </div>

          <div className="hero-headshot-wrapper">
            <img
              className="hero-headshot"
              src="/headshot.png"
              alt="Dave Manning"
            />
          </div>
        </section>

        <section id="about" className="reveal">
          <div className="about-inner">
            <div className="about-text">
              <div className="section-label">About</div>
              <h2 className="section-title">Agentic AI for real-world impact</h2>
              <p>
                I design and deliver intelligent systems that enable
                organizations to move faster and act with confidence. My focus
                is on building scalable, explainable AI experiences that
                include strategy, product, and technical execution.
              </p>
              <p>
                Whether it’s launching new platforms, optimizing existing
                processes or mentoring teams, I help bring AI projects from
                concept to reliable operation.
              </p>
              <a className="btn-outline" href="#contact">
                Let’s talk
              </a>
            </div>
            <div className="about-box reveal">
              <h3>Latest Work</h3>
              <p>
                Currently leading architecture and design on a large-scale agentic
                platforms that helps teams coordinate complex workflows with AI.
              </p>
              <a href="#work">View case studies</a>
            </div>
          </div>
        </section>

        <section id="services">
          <div className="services-inner">
            <div className="services-header reveal">
              <p className="section-label">What I Do</p>
              <h2 className="section-title">AI strategy, delivery, professional/managed services, and governance</h2>
            </div>
            <div className="services-grid">
              <div className="service-card reveal">
                <div className="service-num">01</div>
                <svg
                  className="service-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                >
                  <path d="M22 12H2" />
                  <path d="M12 2v20" />
                  <path d="M6 7l6 5 6-5" />
                  <path d="M6 17l6-5 6 5" />
                </svg>
                <h3>Agentic AI Product & Platform Delivery</h3>
                <p>
                  From pioneering agent platforms to production-grade AI services,
                  I lead end-to-end delivery — architecture, data, tooling, and
                  measurable outcomes.
                </p>
              </div>
              <div className="service-card reveal" style={{ transitionDelay: "0.1s" }}>
                <div className="service-num">02</div>
                <svg
                  className="service-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                >
                  <path d="M12 20l9-12H3l9 12z" />
                  <path d="M12 12v8" />
                </svg>
                <h3>AI Architecture & Cloud Foundations</h3>
                <p>
                  Defining scalable, secure architectural patterns — from landing
                  zones to end-to-end agent orchestration across cloud and hybrid
                  environments.
                </p>
              </div>
              <div className="service-card reveal" style={{ transitionDelay: "0.2s" }}>
                <div className="service-num">03</div>
                <svg
                  className="service-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                >
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                </svg>
                <h3>Architecture Leadership & Team Building</h3>
                <p>
                  Recruiting, coaching, and developing high-performing architecture
                  practices. Translating technical strategy into business language
                  that executives act on.
                </p>
              </div>
              <div className="service-card reveal" style={{ transitionDelay: "0.3s" }}>
                <div className="service-num">04</div>
                <svg
                  className="service-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                >
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
                <h3>IT Strategy & Enterprise Roadmaps</h3>
                <p>
                  Developing comprehensive IT roadmaps aligned to business
                  strategy — cloud modernization, infrastructure transformation,
                  and AI integration across regulated industries.
                </p>
              </div>
              <div className="service-card reveal" style={{ transitionDelay: "0.4s" }}>
                <div className="service-num">05</div>
                <svg
                  className="service-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <h3>Regulated Industry AI Governance</h3>
                <p>
                  Securing enterprise AI in financial services and regulated sectors
                  — role-based access, audit trails, compliance risk management,
                  and responsible AI by design.
                </p>
              </div>
              <div className="service-card reveal" style={{ transitionDelay: "0.5s" }}>
                <div className="service-num">06</div>
                <svg
                  className="service-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                >
                  <line x1="12" y1="1" x2="12" y2="23" />
                  <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
                </svg>
                <h3>Pre-Sales, Proposals & Solution Consulting</h3>
                <p>
                  Winning complex enterprise deals — building proposals, SOWs, and
                  solution architectures that connect technical depth to business
                  value and executive decision-making.
                </p>
              </div>
            </div>
          </div>
        </section>

        <WorkGrid />

        <section id="career">
          <div className="career-inner">
            <div className="career-header reveal">
              <p className="section-label">Career</p>
              <h2 className="section-title">Career Timeline</h2>
            </div>
            <div className="experience-timeline">
              <div className="timeline-item">
                <div className="timeline-year">2021 — Present</div>
                <div className="timeline-role">Director of Architecture</div>
                <div className="timeline-company">Centrilogic / WatServ</div>
              </div>
              <div className="timeline-item">
                <div className="timeline-year">2015 — 2021</div>
                <div className="timeline-role">
                  Director, Consulting — Enterprise Archtecture, Tech Strategy & Innovation
                </div>
                <div className="timeline-company">CGI Inc.</div>
              </div>
              <div className="timeline-item">
                <div className="timeline-year">2008 — 2015</div>
                <div className="timeline-role">Senior IT Architect</div>
                <div className="timeline-company">
                  IBM Canada — Custom Hosting Services
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-year">2002 — 2008</div>
                <div className="timeline-role">Technical Lead & Senior Architect</div>
                <div className="timeline-company">
                  IBM Canada
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-year">Earlier</div>
                <div className="timeline-role">Project Leader / Intranet Architect</div>
                <div className="timeline-company">Kraft Canada · IBM Canada</div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact">
          <div className="contact-inner">
            <div className="contact-left reveal">
              <p className="section-label">Contact</p>
              <h2>
                Let's build something <em>that actually ships.</em>
              </h2>
              <p>
                Whether you're standing up an AI practice, architecting your
                first production agent, or looking for strategic leadership — I'd
                like to connect.
              </p>
              <form
                className="contact-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.target as HTMLFormElement;
                  const name = (form.elements.namedItem("name") as HTMLInputElement).value;
                  const email = (form.elements.namedItem("email") as HTMLInputElement).value;
                  const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;
                  const subject = encodeURIComponent("email from davem.ca");
                  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
                  window.location.href = `mailto:davemanning75@gmail.com?subject=${subject}&body=${body}`;
                }}
              >
                <label>
                  Name
                  <input name="name" type="text" required />
                </label>
                <label>
                  Email
                  <input name="email" type="email" required />
                </label>
                <label>
                  Message
                  <textarea name="message" rows={4} required />
                </label>
                <button type="submit" className="btn-primary">
                  Send Email
                </button>
              </form>
            </div>
          </div>
        </section>

        <footer>
          <p>© 2026 Dave Manning · B.Eng.Mgt, MBA · Burlington, ON</p>
          <p>Agentic AI Leader · davem.ca</p>
        </footer>
      </main>
    </>
  );
}
