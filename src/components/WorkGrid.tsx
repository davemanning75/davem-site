import { proofCases, siteCopy } from "@/data/portfolio";

export default function WorkGrid() {
  const { proof } = siteCopy;

  return (
    <section id="work" className="section-block">
      <div className="section-shell">
        <div className="section-heading reveal">
          <p className="section-label">{proof.label}</p>
          <h2 className="section-title">{proof.title}</h2>
          <p className="section-intro">{proof.intro}</p>
        </div>

        <div className="proof-grid">
          {proofCases.map((item) => (
            <details
              key={item.id}
              className={`proof-card reveal${item.featured ? " proof-card-featured" : ""}`}
              open={item.featured}
            >
              <summary className="proof-summary">
                <div className="proof-summary-main">
                  <p className="case-type">{item.category}</p>
                  <h3>{item.title}</h3>
                  <p className="proof-headline">{item.headline}</p>
                  <span className="proof-toggle">{proof.toggleLabel}</span>
                </div>
              </summary>

              <p className="proof-description">{item.summary}</p>

              <div className="case-outcomes">
                {item.impact.map((impact) => (
                  <span key={impact} className="outcome">
                    {impact}
                  </span>
                ))}
              </div>

              <div className="proof-panel">
                <div className="proof-panel-grid">
                  <div className="proof-column">
                    <p className="detail-kicker">{proof.leadership.kicker}</p>
                    <h4>{proof.leadership.title}</h4>
                    <ul className="detail-list">
                      {item.leadership.map((entry) => (
                        <li key={entry}>{entry}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="proof-column">
                    <p className="detail-kicker">{proof.architecture.kicker}</p>
                    <h4>{proof.architecture.title}</h4>
                    <ul className="detail-list">
                      {item.architecture.map((entry) => (
                        <li key={entry}>{entry}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="proof-column">
                    <p className="detail-kicker">{proof.outcomes.kicker}</p>
                    <h4>{proof.outcomes.title}</h4>
                    <ul className="detail-list">
                      {item.outcomes.map((entry) => (
                        <li key={entry}>{entry}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="stack-row" aria-label="Technology and capability stack">
                  {item.stack.map((entry) => (
                    <span key={entry} className="stack-chip">
                      {entry}
                    </span>
                  ))}
                </div>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
