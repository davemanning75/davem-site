import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content/perspectives");

export type PerspectiveFrontmatter = {
  title: string;
  dek: string;
  slug: string;
  date: string;
  originallyPublished?: string;
  tags: string[];
  readingTime: number;
  linkedinUrl?: string;
  status: "draft" | "ready" | "published";
};

export type Perspective = {
  frontmatter: PerspectiveFrontmatter;
  content: string;
};

function computeReadingTime(content: string): number {
  const words = content.trim().split(/\s+/).length;
  return Math.round(words / 225);
}

function parseFrontmatter(filePath: string): { frontmatter: PerspectiveFrontmatter; content: string } {
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const frontmatter = data as PerspectiveFrontmatter;
  if (!frontmatter.readingTime) {
    frontmatter.readingTime = computeReadingTime(content);
  }
  return { frontmatter, content };
}

export function getAllPerspectives(): PerspectiveFrontmatter[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".mdx"));
  return files
    .map((file) => parseFrontmatter(path.join(CONTENT_DIR, file)).frontmatter)
    .filter((fm) => fm.status === "published")
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPerspective(slug: string): Perspective | null {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  return parseFrontmatter(filePath);
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function formatDate(dateStr: string): string {
  return new Intl.DateTimeFormat("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(dateStr));
}
