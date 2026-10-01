import { MetadataRoute } from "next"
import { sacredLocations } from "@/data/sacred-locations"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://tirth-yatra.vercel.app"

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/yatra/84-kos`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/yatra/namisharanya`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ]

  const locationRoutes: MetadataRoute.Sitemap = sacredLocations.map((loc) => ({
    url: `${baseUrl}/yatra/namisharanya/${loc.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }))

  return [...staticRoutes, ...locationRoutes]
}
