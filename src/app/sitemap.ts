import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: "https://adbibe.com",
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://adbibe.com/privacy",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: "https://adbibe.com/cookies",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: "https://adbibe.com/terms",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: "https://adbibe.com/ai-disclosure",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: "https://adbibe.com/community",
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: "https://adbibe.com/events",
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
  ];
}
