import { careerMetrics, careerRoles, educationHighlights, siteCopy } from "@/data/portfolio";

export default function CareerPanels() {
  const { career } = siteCopy;

  return (
    <section id="career" className="section-block section-band-soft">
      <div className="section-shell">
        <div className="section-heading reveal">
          <p className="section-label">{career.label}</p>
          <h2 className="section-title">{career.title}</h2>
          <p className="section-intro">{career.intro}</p>
        </div>

        <div className="metric-grid reveal">
          {careerMetrics.map((metric) => (
            <article key={metric.label} className="metric-card">
              <div className="metric-value">{metric.value}</div>
              <p className="metric-label">{metric.label}</p>
            </article>
          ))}
        </div>

        <div className="career-layout">
          <div className="career-panels">
            {careerRoles.map((role) => (
              <details
                key={`${role.period}-${role.role}`}
                className="career-card reveal"
                open={role.defaultOpen}
              >
                <summary className="career-summary">
                  <div>
                    <p className="career-period">{role.period}</p>
                    <h3>{role.role}</h3>
                    <p className="career-company">{role.company}</p>
                  </div>
                  <span className="proof-toggle">{career.viewScopeLabel}</span>
                </summary>

                <p className="career-description">{role.summary}</p>
                <p className="career-scale">{role.scale}</p>

                <div className="career-panel-grid">
                  <div>
                    <h4>{career.responsibilitiesHeading}</h4>
                    <ul className="signal-list">
                      {role.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4>{career.signalsHeading}</h4>
                    <ul className="signal-list">
                      {role.supportingSignals.map((signal) => (
                        <li key={signal}>{signal}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </details>
            ))}
          </div>

          <aside className="education-card reveal">
            <p className="section-label">{career.credentialsLabel}</p>
            <h3>{career.credentialsTitle}</h3>
            <p>{career.credentialsBody}</p>

            <ul className="signal-list">
              {educationHighlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <a
              className="text-link"
              href="https://www.linkedin.com/in/davemanninggta/"
              target="_blank"
              rel="noreferrer"
            >
              {career.chronologyLinkLabel}
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}