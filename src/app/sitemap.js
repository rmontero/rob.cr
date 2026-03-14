import { createClient } from "@/prismicio";

export default async function sitemap() {
  const client = createClient();
  const articles = await client.getAllByType("article");

  const articleUrls = articles.map((article) => ({
    url: `https://rob.cr/articles/${article.uid}`,
    lastModified: new Date(article.last_publication_date),
  }));

  return [
    {
      url: 'https://rob.cr',
      lastModified: new Date(),
    },
    ...articleUrls,
  ];
}
