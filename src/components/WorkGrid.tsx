import AnimatedSection from "@/components/AnimatedSection";
import { proofCases, siteCopy } from "@/data/portfolio";

export default function WorkGrid() {
  const { proof } = siteCopy;

  return (
    <section id="work" className="section-block" aria-labelledby="proof-title">
      <div className="section-shell">
        <div className="section-heading reveal">
          <p className="section-label">{proof.label}</p>
          <h2 id="proof-title" className="section-title">
            {proof.title}
          </h2>
          <p className="section-intro">{proof.intro}</p>
        </div>

        <AnimatedSection
          variant="stagger-children"
          className="proof-grid"
          role="list"
          aria-label="Leadership proof surfaces"
        >
          {proofCases.map((item) => (
            <article
              key={item.id}
              className={`proof-card${item.featured ? " proof-card-featured" : ""}`}
              role="listitem"
            >
              <span className="proof-badge">{item.category}</span>
              <h3>{item.title}</h3>
              <p className="proof-headline">{item.headline}</p>
              <p className="proof-description">{item.summary}</p>

              <div className="proof-metrics" aria-label="Key impact">
                {item.impact.map((metric) => (
                  <span key={metric} className="proof-metric-tag">
                    {metric}
                  </span>
                ))}
              </div>

              <div className="proof-detail-grid">
                <div className="proof-detail-col">
                  <p className="proof-detail-kicker">{proof.leadership.kicker}</p>
                  <h4>{proof.leadership.title}</h4>
                  <ul className="proof-detail-list">
                    {item.leadership.map((entry) => (
                      <li key={entry}>{entry}</li>
                    ))}
                  </ul>
                </div>

                <div className="proof-detail-col">
                  <p className="proof-detail-kicker">{proof.architecture.kicker}</p>
                  <h4>{proof.architecture.title}</h4>
                  <ul className="proof-detail-list">
                    {item.architecture.map((entry) => (
                      <li key={entry}>{entry}</li>
                    ))}
                  </ul>
                </div>

                <div className="proof-detail-col">
                  <p className="proof-detail-kicker">{proof.outcomes.kicker}</p>
                  <h4>{proof.outcomes.title}</h4>
                  <ul className="proof-detail-list">
                    {item.outcomes.map((entry) => (
                      <li key={entry}>{entry}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="proof-stack" aria-label="Technology stack">
                {item.stack.map((tech) => (
                  <span key={tech} className="proof-stack-pill">
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
