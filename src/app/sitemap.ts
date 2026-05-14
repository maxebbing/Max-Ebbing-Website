import type { MetadataRoute } from "next";

const baseUrl = "https://deinedomain.de";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/kontakt", "/impressum", "/datenschutz"];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}