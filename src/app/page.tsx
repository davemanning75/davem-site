"use client";

import { useEffect } from "react";

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

      <nav>
        <div className="nav-logo">davemanning75</div>
        <ul className="nav-links">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#work">Work</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      <main>
        <section id="hero">
          <div className="hero-inner">
            <div className="hero-label">
              <span /> Agentic AI Leader
            </div>
            <h1 className="hero-name">
              Dave <span className="line2">Manning</span>
            </h1>
            <p className="hero-tagline">
              Building bold AI experiences that fuse strategic
              thinking with hands-on execution. Focused on
              autonomous systems, generative AI, and practical
              impact.
            </p>
            <div className="hero-ctas">
              <a className="btn-primary" href="#about">
                Learn More
              </a>
              <a className="btn-outline" href="#contact">
                Get in Touch
              </a>
            </div>
            <div className="hero-stats reveal">
              <div className="stat-item">
                <div className="stat-num">20+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-num">100+</div>
                <div className="stat-label">Projects Delivered</div>
              </div>
              <div className="stat-item">
                <div className="stat-num">10+</div>
                <div className="stat-label">AI Products Launched</div>
              </div>
            </div>
          </div>
          <div className="hero-orb" />
        </section>

        <section id="about" className="reveal">
          <div className="about-inner">
            <div className="about-text">
              <div className="section-label">About</div>
              <h2 className="section-title">Agentic AI for real-world impact</h2>
              <p>
                I design and deliver intelligent systems that
                enable organizations to move faster and act
                with confidence. My focus is on building
                scalable, explainable AI experiences that
                include strategy, product, and technical
                execution.
              </p>
              <p>
                Whether it’s launching new platforms, optimizing
                existing processes or mentoring teams, I help
                bring AI projects from concept to reliable
                operation.
              </p>
              <a className="btn-outline" href="#contact">
                Let’s talk
              </a>
            </div>
            <div className="about-box reveal">
              <h3>Latest Work</h3>
              <p>
                Currently leading development on a large-scale
                autonomous agent platform that helps teams
                coordinate complex workflows with AI.
              </p>
              <a href="#work">View case studies</a>
            </div>
          </div>
        </section>

        <footer>
          <p>© 2026 Dave Manning · B.Eng.Mgt, MBA · Hamilton, ON</p>
          <p>Agentic AI Leader · davem.ca</p>
        </footer>
      </main>
    </>
  );
}
