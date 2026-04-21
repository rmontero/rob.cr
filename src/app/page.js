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
    description: "Rob Montero — Director of Engineering at Andela. 25+ years in full-stack engineering leadership, AI-accelerated development, and distributed team building across LATAM and globally.",
    robots: { index: true, follow: true },
    alternates: {
      canonical: 'https://rob.cr/',
    },
    openGraph: {
      title: prismic.asText(settings.data.name),
      description: "Rob Montero is a strategic engineering leader with 25+ years of experience, specializing in AI-accelerated development and global distributed teams.",
      url: 'https://rob.cr',
      type: 'website',
      siteName: 'Rob Montero',
      locale: 'en_US',
      images: [
        {
          url: 'https://images.prismic.io/robcr/ZqPuBx5LeNNTxiIe_Rob_Montero_2024.png?auto=format,compress&w=1200&fit=max',
          width: 1200,
          height: 630,
          alt: 'Rob Montero - Director of Engineering',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@robcr',
      creator: '@robcr',
      title: prismic.asText(settings.data.name),
      description: "Rob Montero is a strategic engineering leader with 25+ years of experience, specializing in AI-accelerated development and global distributed teams.",
      image: 'https://images.prismic.io/robcr/ZqPuBx5LeNNTxiIe_Rob_Montero_2024.png?auto=format,compress&w=1200&fit=max',
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
    "image": "https://images.prismic.io/robcr/ZqPuBx5LeNNTxiIe_Rob_Montero_2024.png?auto=format,compress&w=500",
    "jobTitle": "Director of Engineering",
    "worksFor": {
      "@type": "Organization",
      "name": "Andela",
      "url": "https://andela.com"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Mexico City",
      "addressCountry": "MX"
    },
    "description": "Director of Engineering at Andela with over 25 years of experience in full-stack development, engineering leadership, AI-accelerated workflows, and distributed team building across Latin America and globally.",
    "knowsAbout": [
      "Engineering Leadership",
      "AI-accelerated Development",
      "Distributed Teams",
      "Drupal",
      "React",
      "Node.js",
      "Talent Matching",
      "CMS Architecture"
    ],
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "ULACIT — Latin American University of Science and Technology"
    },
    "sameAs": [
      "https://www.linkedin.com/in/rmontero/",
      "https://github.com/rmontero",
      "https://www.hackerrank.com/robcr",
      "https://www.zoominfo.com/p/Rob-Montero/1661171783"
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
