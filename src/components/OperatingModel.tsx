"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { operatingPhases, siteCopy } from "@/data/portfolio";

type ConnectorCoord = { x1: number; y1: number; x2: number; y2: number };

export default function OperatingModel() {
  const [activePhaseId, setActivePhaseId] = useState(operatingPhases[0].id);
  const activePhase =
    operatingPhases.find((phase) => phase.id === activePhaseId) ?? operatingPhases[0];
  const { operatingModel } = siteCopy;
  const reduceMotion = useReducedMotion();

  const railRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [connectors, setConnectors] = useState<ConnectorCoord[]>([]);
  const [railSize, setRailSize] = useState<{ w: number; h: number }>({ w: 0, h: 0 });

  useLayoutEffect(() => {
    const measure = () => {
      const rail = railRef.current;
      if (!rail) return;
      const railRect = rail.getBoundingClientRect();
      setRailSize({ w: railRect.width, h: railRect.height });
      const coords: ConnectorCoord[] = [];
      for (let i = 0; i < nodeRefs.current.length - 1; i++) {
        const a = nodeRefs.current[i];
        const b = nodeRefs.current[i + 1];
        if (!a || !b) continue;
        const aRect = a.getBoundingClientRect();
        const bRect = b.getBoundingClientRect();
        coords.push({
          x1: (aRect.left + aRect.right) / 2 - railRect.left,
          y1: aRect.bottom - railRect.top,
          x2: (bRect.left + bRect.right) / 2 - railRect.left,
          y2: bRect.top - railRect.top,
        });
      }
      setConnectors(coords);
    };
    measure();
    const rail = railRef.current;
    const ro = typeof ResizeObserver !== "undefined" ? new ResizeObserver(measure) : null;
    if (ro && rail) ro.observe(rail);
    window.addEventListener("resize", measure);
    return () => {
      ro?.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  return (
    <section
      id="services"
      className="section-block section-band"
      aria-labelledby="operating-model-title"
    >
      <div className="section-shell">
        <div className="section-heading reveal">
          <p className="section-label">{operatingModel.label}</p>
          <h2 id="operating-model-title" className="section-title">
            {operatingModel.title}
          </h2>
          <p className="section-intro">{operatingModel.intro}</p>
        </div>

        <div className="operating-model">
          <div
            className="phase-rail"
            role="tablist"
            aria-label="AI operating model phases"
            ref={railRef}
          >
            {operatingPhases.map((phase, index) => {
              const isActive = phase.id === activePhase.id;

              return (
                <motion.button
                  key={phase.id}
                  ref={(el) => {
                    nodeRefs.current[index] = el;
                  }}
                  type="button"
                  className={`phase-node${isActive ? " is-active" : ""}`}
                  onClick={() => setActivePhaseId(phase.id)}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`phase-panel-${phase.id}`}
                  id={`phase-tab-${phase.id}`}
                  initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.45,
                    delay: reduceMotion ? 0 : index * 0.1,
                    ease: "easeOut",
                  }}
                >
                  <span className="phase-step" aria-hidden="true">
                    {phase.step}
                  </span>
                  <span className="phase-title">{phase.title}</span>
                  <span className="phase-summary">{phase.summary}</span>
                </motion.button>
              );
            })}

            {!reduceMotion && connectors.length > 0 && railSize.w > 0 && (
              <svg
                className="phase-connector"
                aria-hidden="true"
                width={railSize.w}
                height={railSize.h}
                viewBox={`0 0 ${railSize.w} ${railSize.h}`}
              >
                {connectors.map((c, i) => (
                  <motion.path
                    key={i}
                    d={`M ${c.x1} ${c.y1} L ${c.x2} ${c.y2}`}
                    stroke="var(--accent-primary)"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.15 + i * 0.1,
                      ease: "easeOut",
                    }}
                  />
                ))}
              </svg>
            )}
          </div>

          <div
            className="phase-detail"
            role="tabpanel"
            id={`phase-panel-${activePhase.id}`}
            aria-labelledby={`phase-tab-${activePhase.id}`}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activePhase.id}
                initial={reduceMotion ? false : { opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={reduceMotion ? { opacity: 0 } : { opacity: 0, x: -8 }}
                transition={{ duration: reduceMotion ? 0 : 0.22, ease: "easeOut" }}
              >
                <p className="phase-detail-kicker" aria-hidden="true">
                  {operatingModel.detailKicker}
                </p>
                <h3>{activePhase.title}</h3>
                <p>{activePhase.description}</p>

                <div
                  className="phase-detail-grid"
                  role="list"
                  aria-label="Operating model outcomes by audience"
                >
                  <div className="phase-card" role="listitem">
                    <h4>{operatingModel.executiveHeading}</h4>
                    <ul className="signal-list">
                      {activePhase.executiveSignals.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="phase-card" role="listitem">
                    <h4>{operatingModel.deliveryHeading}</h4>
                    <ul className="signal-list">
                      {activePhase.deliverySignals.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="phase-card" role="listitem">
                    <h4>{operatingModel.proofHeading}</h4>
                    <ul className="signal-list">
                      {activePhase.proofSignals.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
