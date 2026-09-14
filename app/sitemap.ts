import type { MetadataRoute } from "next";
import { listPosts } from "@/lib/api";

export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  const posts = await listPosts().catch(() => []);

  const staticRoutes = ["", "/give", "/privacy", "/updates"].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
  }));

  const postRoutes = posts.map((p) => ({
    url: `${siteUrl}/updates/${p.slug}`,
    lastModified: p.published_at ? new Date(p.published_at) : new Date(),
  }));

  return [...staticRoutes, ...postRoutes];
}
