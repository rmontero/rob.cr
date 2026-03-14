import * as prismic from "@prismicio/client";

import { createClient } from "@/prismicio";
import { Layout } from "@/components/Layout";
import { Bounded } from "@/components/Bounded";
import { Article } from "@/components/Article";

export async function generateMetadata() {
  const client = createClient();
  const settings = await client.getSingle("settings");

  return {
    metadataBase: new URL('https://rob.cr'),
    title: prismic.asText(settings.data.name),
    description: prismic.asText(settings.data.description),
    alternates: {
      canonical: '/',
    },
    openGraph: {
      title: prismic.asText(settings.data.name),
      description: prismic.asText(settings.data.description),
      url: 'https://rob.cr',
      siteName: prismic.asText(settings.data.name),
      images: [
        {
          url: prismic.asImageSrc(settings.data.profilePicture)
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: prismic.asText(settings.data.name),
      description: prismic.asText(settings.data.description),
      images: [prismic.asImageSrc(settings.data.profilePicture)],
    },
  };
}

export default async function Index() {
  const client = createClient();

  const articles = await client.getAllByType("article", {
    orderings: [
      { field: "my.article.publishDate", direction: "desc" },
      { field: "document.first_publication_date", direction: "desc" },
    ],
  });
  const navigation = await client.getSingle("navigation");
  const settings = await client.getSingle("settings");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Rob Montero",
    "url": "https://rob.cr",
    "jobTitle": "Director of Engineering",
    "worksFor": {
      "@type": "Organization",
      "name": "Andela"
    },
    "sameAs": [
      "https://linkedin.com/in/rmontero",
      "https://github.com/rmontero"
    ]
  };

  return (
    <Layout
      withHeaderDivider={false}
      navigation={navigation}
      settings={settings}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Bounded size="widest">
        <ul className="grid grid-cols-1 gap-16">
          {articles.map((article) => (
            <Article key={article.id} article={article} />
          ))}
        </ul>
      </Bounded>
    </Layout>
  );
}
