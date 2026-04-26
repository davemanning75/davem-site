import type { Metadata } from "next";
import AnimatedHeading from "@/components/AnimatedHeading";
import AnimatedSection from "@/components/AnimatedSection";
import PageBackground from "@/components/PageBackground";
import LinkedInEmbedStrip from "@/components/perspectives/LinkedInEmbedStrip";
import PerspectiveCard from "@/components/perspectives/PerspectiveCard";
import { getAllPerspectives } from "@/lib/perspectives";

export const metadata: Metadata = {
  title: "Perspectives | Dave Manning",
  description:
    "Long-form takes on the architecture, governance, and operating-model questions that come up in real AI engagements.",
};

export default function PerspectivesPage() {
  const essays = getAllPerspectives();

  return (
    <>
      <PageBackground />
      <main id="top" className="site-main">
        <section className="section-block" aria-labelledby="perspectives-title">
          <div className="section-shell">
            <AnimatedSection variant="fade-up" className="section-heading">
              <p className="section-label">Perspectives</p>
              <AnimatedHeading id="perspectives-title" className="section-title">
                Working theses on AI in regulated enterprises.
              </AnimatedHeading>
              <p className="section-intro">
                Long-form takes on the architecture, governance, and operating-model questions that
                come up in real engagements. Each piece pairs with a condensed LinkedIn version.
                Comments and counter-arguments welcome.
              </p>
            </AnimatedSection>

            <AnimatedSection variant="stagger-children" className="perspective-grid">
              {essays.length > 0 ? (
                essays.map((essay) => (
                  <PerspectiveCard key={essay.slug} perspective={essay} />
                ))
              ) : (
                <p className="perspective-empty">Essays coming soon.</p>
              )}
            </AnimatedSection>
          </div>
        </section>

        <LinkedInEmbedStrip />
      </main>
    </>
  );
}
