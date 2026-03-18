import { careerMetrics, careerRoles, educationHighlights, siteCopy } from "@/data/portfolio";

export default function CareerPanels() {
  const { career } = siteCopy;

  return (
    <section
      id="career"
      className="section-block section-band-soft"
      aria-labelledby="career-title"
    >
      <div className="section-shell">
        <div className="section-heading reveal">
          <p className="section-label">{career.label}</p>
          <h2 id="career-title" className="section-title">
            {career.title}
          </h2>
          <p className="section-intro">{career.intro}</p>
        </div>

        <div className="career-layout">
          <div className="career-panels" role="list" aria-label="Career roles and scope">
            {careerRoles.map((role) => (
              <details
                key={`${role.period}-${role.role}`}
                className="career-card reveal"
                open={role.defaultOpen}
                role="listitem"
              >
                <summary className="career-summary">
                  <div className="career-summary-main">
                    <p className="career-period">{role.period}</p>
                    <h3>{role.role}</h3>
                    <p className="career-company">{role.company}</p>
                    <p className="career-summary-copy">{role.summary}</p>
                    <p className="career-scale">{role.scale}</p>
                  </div>
                  <span className="proof-toggle" aria-hidden="true" />
                </summary>

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

          <section className="education-card reveal" aria-labelledby="career-credentials-title">
            <p className="section-label" aria-hidden="true">
              {career.credentialsLabel}
            </p>
            <h3 id="career-credentials-title">{career.credentialsTitle}</h3>
            {career.credentialsBody ? <p>{career.credentialsBody}</p> : null}

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
          </section>
        </div>

        <div
          className="metric-grid career-metric-grid reveal"
          role="list"
          aria-label="Supporting career metrics"
        >
          {careerMetrics.map((metric) => (
            <article key={metric.label} className="metric-card" role="listitem">
              <div className="metric-value">{metric.value}</div>
              <p className="metric-label">{metric.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}