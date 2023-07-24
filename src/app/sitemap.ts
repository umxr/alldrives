import { getDrives } from "@/groq/getDrives";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const drives =
    (await getDrives({
      limit: 1000,
    })) || [];
  return [
    {
      url: "https://alldrives.xyz",
      lastModified: new Date(),
    },
    {
      url: "https://alldrives.xyz/about",
      lastModified: new Date(),
    },
    {
      url: "https://alldrives.xyz/contact",
      lastModified: new Date(),
    },
    {
      url: "https://alldrives.xyz/roadmap",
      lastModified: new Date(),
    },
    {
      url: "https://alldrives.xyz/drives",
      lastModified: new Date(),
    },
    ...drives.map((drive) => {
      return {
        url: `https://alldrives.xyz/drives/${drive.slug}`,
        lastModified: new Date(drive._updatedAt),
      };
    }),
  ];
}
