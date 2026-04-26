import Link from "next/link";
import PageBackground from "@/components/PageBackground";
import type { PerspectiveFrontmatter } from "@/lib/perspectives";
import { formatDate } from "@/lib/perspectives";

type Props = {
  frontmatter: PerspectiveFrontmatter;
  children: React.ReactNode;
};

export default function PerspectiveLayout({ frontmatter, children }: Props) {
  const { title, dek, date, readingTime, tags, linkedinUrl } = frontmatter;

  return (
    <>
      <PageBackground />
      <main id="top" className="site-main">
        <article className="perspective-article">
          <header className="perspective-header section-shell">
            <Link href="/perspectives" className="perspective-back">
              ← Perspectives
            </Link>
            <h1 className="perspective-title">{title}</h1>
            <p className="perspective-dek">{dek}</p>
            <div className="perspective-meta">
              <span>{formatDate(date)}</span>
              <span className="perspective-meta-sep" aria-hidden="true">·</span>
              <span>{readingTime} min read</span>
              <div className="perspective-meta-tags">
                {tags.map((tag) => (
                  <span key={tag} className="tag-chip">{tag}</span>
                ))}
              </div>
            </div>
          </header>

          <div className="perspective-prose section-shell">
            {children}
          </div>

          <footer className="perspective-footer section-shell">
            {linkedinUrl && (
              <p className="perspective-footer-origin">
                Originally appeared in condensed form on{" "}
                <a href={linkedinUrl} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
                . Comments and counter-arguments welcome there.
              </p>
            )}
            <div className="perspective-footer-cta">
              <p>Navigating AI strategy, governance, or architecture decisions?</p>
              <Link href="/#contact" className="btn-primary">
                Start a conversation
              </Link>
            </div>
          </footer>
        </article>
      </main>
    </>
  );
}
