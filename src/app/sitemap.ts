import { getList } from "@/lib/microcms";
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const defaultPages: MetadataRoute.Sitemap = [
        {
            url: "https://satoha.net/",
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 1,
        },
        {
            url: "https://satoha.net/profile",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        // other pages
    ];
    const { contents } = await getList();

    const blogPages: MetadataRoute.Sitemap = contents.map((article) => ({
        url: `https://satoha.net/article/${article.id}`,
        lastModified: new Date(article.updatedAt),
    }));

    return [...defaultPages, ...blogPages];
}
