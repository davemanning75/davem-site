import Link from "next/link";
import type { PerspectiveFrontmatter } from "@/lib/perspectives";
import { formatDate } from "@/lib/perspectives";

type Props = { perspective: PerspectiveFrontmatter };

export default function PerspectiveCard({ perspective }: Props) {
  const { title, dek, slug, date, readingTime, tags } = perspective;
  const visibleTags = tags.slice(0, 3);

  return (
    <Link href={`/perspectives/${slug}`} className="perspective-card">
      <div className="perspective-card-meta">
        <span className="perspective-card-date">{formatDate(date)}</span>
        <span className="perspective-card-reading">{readingTime} min read</span>
      </div>
      <h3 className="perspective-card-title">{title}</h3>
      <p className="perspective-card-dek">{dek}</p>
      <div className="perspective-card-tags">
        {visibleTags.map((tag) => (
          <span key={tag} className="tag-chip">{tag}</span>
        ))}
      </div>
      <span className="perspective-card-cta" aria-hidden="true">Read →</span>
    </Link>
  );
}
