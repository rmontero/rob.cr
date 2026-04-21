import { MetadataRoute } from 'next';
import { createClient } from '@/prismicio';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const client = createClient();

  const pages = await client.getAllByType('page');
  const articles = await client.getAllByType('article');

  const baseUrl = 'https://rob.cr';

  // Home page
  const homeSitemap: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ];

  // Dynamic pages (like /resume)
  const pagesSitemap = pages.map((page) => ({
    url: `${baseUrl}/${page.uid}`,
    lastModified: new Date(page.last_publication_date),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Articles
  const articlesSitemap = articles.map((article) => ({
    url: `${baseUrl}/articles/${article.uid}`,
    lastModified: new Date(article.last_publication_date),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // AI context page
  const aiPageSitemap: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/ai`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ];

  return [...homeSitemap, ...pagesSitemap, ...articlesSitemap, ...aiPageSitemap];
}
