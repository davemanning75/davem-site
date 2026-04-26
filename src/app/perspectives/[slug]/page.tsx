import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import PerspectiveLayout from "@/components/perspectives/PerspectiveLayout";
import { getAllSlugs, getPerspective } from "@/lib/perspectives";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const essay = getPerspective(slug);
  if (!essay) return {};

  const { frontmatter } = essay;
  const baseUrl = "https://www.davem.ca";

  return {
    title: `${frontmatter.title} | Dave Manning`,
    description: frontmatter.dek,
    openGraph: {
      title: frontmatter.title,
      description: frontmatter.dek,
      type: "article",
      publishedTime: frontmatter.date,
      url: `${baseUrl}/perspectives/${frontmatter.slug}`,
      images: [{ url: `${baseUrl}/og.svg`, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: frontmatter.title,
      description: frontmatter.dek,
    },
  };
}

export default async function EssayPage({ params }: Props) {
  const { slug } = await params;
  const essay = getPerspective(slug);
  if (!essay) notFound();

  const { frontmatter, content } = essay;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: frontmatter.title,
    description: frontmatter.dek,
    datePublished: frontmatter.date,
    ...(frontmatter.originallyPublished &&
      frontmatter.originallyPublished < frontmatter.date && {
        dateCreated: frontmatter.originallyPublished,
      }),
    author: {
      "@type": "Person",
      name: "Dave Manning",
      url: "https://www.davem.ca",
    },
    url: `https://www.davem.ca/perspectives/${frontmatter.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PerspectiveLayout frontmatter={frontmatter}>
        <MDXRemote source={content} />
      </PerspectiveLayout>
    </>
  );
}
