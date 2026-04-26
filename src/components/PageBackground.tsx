"use client";

import { useEffect } from "react";

export default function PageBackground() {
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
      if (cursor) cursor.style.display = "none";
      if (ring) ring.style.display = "none";
    }

    const onMouseMove = (event: MouseEvent) => {
      if (!cursorEnabled) return;
      mouseX = event.clientX;
      mouseY = event.clientY;
      if (cursor) {
        cursor.style.left = `${mouseX}px`;
        cursor.style.top = `${mouseY}px`;
      }
    };

    if (cursorEnabled) document.addEventListener("mousemove", onMouseMove);

    const animateRing = () => {
      if (!ring) return;
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      ring.style.left = `${ringX}px`;
      ring.style.top = `${ringY}px`;
      ringFrameId = requestAnimationFrame(animateRing);
    };

    if (cursorEnabled) animateRing();

    const onHoverEnter = () => {
      if (!ring) return;
      ring.style.width = "52px";
      ring.style.height = "52px";
      ring.style.opacity = "0.72";
    };

    const onHoverLeave = () => {
      if (!ring) return;
      ring.style.width = "36px";
      ring.style.height = "36px";
      ring.style.opacity = "0.42";
    };

    const hoverTargets = Array.from(
      document.querySelectorAll<HTMLElement>("a, button, summary"),
    );

    if (cursorEnabled) {
      hoverTargets.forEach((el) => {
        el.addEventListener("mouseenter", onHoverEnter);
        el.addEventListener("mouseleave", onHoverLeave);
      });
    }

    const canvas = document.getElementById("stars") as HTMLCanvasElement | null;
    const ctx = canvas?.getContext("2d");
    const stars: Array<{ x: number; y: number; r: number; a: number; speed: number }> = [];

    const resizeCanvas = () => {
      if (!canvas) return;
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
      if (!ctx || !canvas) return;
      const style = getComputedStyle(document.documentElement);
      const r = style.getPropertyValue("--star-color-r").trim();
      const g = style.getPropertyValue("--star-color-g").trim();
      const b = style.getPropertyValue("--star-color-b").trim();
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((star) => {
        star.a += star.speed;
        const alpha = 0.18 + 0.42 * Math.abs(Math.sin(star.a));
        ctx.beginPath();
        ctx.arc(star.x * canvas.width, star.y * canvas.height, star.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
        ctx.fill();
      });
      starsFrameId = requestAnimationFrame(drawStars);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    createStars();
    drawStars();

    const reveals = Array.from(document.querySelectorAll(".reveal"));
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.14 },
    );
    reveals.forEach((el) => revealObserver.observe(el));

    return () => {
      if (cursorEnabled) {
        document.removeEventListener("mousemove", onMouseMove);
        hoverTargets.forEach((el) => {
          el.removeEventListener("mouseenter", onHoverEnter);
          el.removeEventListener("mouseleave", onHoverLeave);
        });
      }
      window.removeEventListener("resize", resizeCanvas);
      revealObserver.disconnect();
      cancelAnimationFrame(ringFrameId);
      cancelAnimationFrame(starsFrameId);
    };
  }, []);

  return (
    <>
      <canvas id="stars" />
      <div className="grid-overlay" />
      <div id="cursor" className="cursor" />
      <div id="cursorRing" className="cursor-ring" />
    </>
  );
}
