import { leaderVoices, siteCopy } from "@/data/portfolio";

export default function VoicesSection() {
  const { voices } = siteCopy;

  return (
    <section id={voices.anchorId} className="section-block" aria-labelledby="voices-title">
      <div className="section-shell">
        <div className="section-heading reveal">
          <p className="section-label">{voices.label}</p>
          <h2 id="voices-title" className="section-title">
            {voices.title}
          </h2>
        </div>

        <div className="voices-grid" role="list" aria-label="Leader recommendations">
          {leaderVoices.map((voice) => (
            <figure key={voice.id} className="voice-card reveal" role="listitem">
              <blockquote className="voice-quote">{voice.quote}</blockquote>
              <figcaption className="voice-attribution">
                <span className="voice-identity">{voice.name}, {voice.title}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="voices-source reveal">{voices.sourceNote}</p>
      </div>
    </section>
  );
}