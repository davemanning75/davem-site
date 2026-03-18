"use client";

import { useState } from "react";
import { operatingPhases, siteCopy } from "@/data/portfolio";

export default function OperatingModel() {
  const [activePhaseId, setActivePhaseId] = useState(operatingPhases[0].id);
  const activePhase =
    operatingPhases.find((phase) => phase.id === activePhaseId) ?? operatingPhases[0];
  const { operatingModel } = siteCopy;

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

        <div className="operating-model reveal">
          <div className="phase-rail" role="tablist" aria-label="AI operating model phases">
            {operatingPhases.map((phase) => {
              const isActive = phase.id === activePhase.id;

              return (
                <button
                  key={phase.id}
                  type="button"
                  className={`phase-node${isActive ? " is-active" : ""}`}
                  onClick={() => setActivePhaseId(phase.id)}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`phase-panel-${phase.id}`}
                  id={`phase-tab-${phase.id}`}
                >
                  <span className="phase-step" aria-hidden="true">
                    {phase.step}
                  </span>
                  <span className="phase-title">{phase.title}</span>
                  <span className="phase-summary">{phase.summary}</span>
                </button>
              );
            })}
          </div>

          <div
            className="phase-detail"
            role="tabpanel"
            id={`phase-panel-${activePhase.id}`}
            aria-labelledby={`phase-tab-${activePhase.id}`}
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
          </div>
        </div>
      </div>
    </section>
  );
}