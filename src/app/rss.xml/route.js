import { createClient } from '@/prismicio';
import * as prismic from '@prismicio/client';

export async function GET() {
  const client = createClient();

  const articles = await client.getAllByType("article", {
    orderings: [
      { field: "my.article.publishDate", direction: "desc" },
      { field: "document.first_publication_date", direction: "desc" },
    ],
  });

  const settings = await client.getSingle("settings");
  const siteUrl = "https://rob.cr";

  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${prismic.asText(settings.data.name)}</title>
    <link>${siteUrl}</link>
    <description>${prismic.asText(settings.data.description)}</description>
    <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml" />
    <language>en-us</language>
    ${articles
      .map((article) => {
        const title = prismic.asText(article.data.title);
        const description = article.data.meta_description || "An article by Rob Montero.";
        const date = new Date(prismic.asDate(article.data.publishDate || article.first_publication_date));
        
        return `
    <item>
      <title><![CDATA[${title}]]></title>
      <link>${siteUrl}/articles/${article.uid}</link>
      <guid>${siteUrl}/articles/${article.uid}</guid>
      <pubDate>${date.toUTCString()}</pubDate>
      <description><![CDATA[${description}]]></description>
    </item>`;
      })
      .join("")}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
