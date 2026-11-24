import type { MetadataRoute } from "next";
import { getAllPerspectives } from "@/lib/perspectives";

const BASE_URL = "https://www.davem.ca";

// Lists every public route so search engines and AI research tools can
// discover /proof and each /perspectives essay without relying on JS links.
export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = ["", "/proof", "/perspectives", "/career"].map(
    (path) => ({
      url: `${BASE_URL}${path}`,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
    }),
  );

  const essays: MetadataRoute.Sitemap = getAllPerspectives().map((essay) => ({
    url: `${BASE_URL}/perspectives/${essay.slug}`,
    lastModified: essay.date,
    changeFrequency: "yearly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...essays];
}
