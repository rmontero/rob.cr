import Link from "next/link";
import { notFound } from "next/navigation";
import * as prismic from "@prismicio/client";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";
import { PrismicText, SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { Layout } from "@/components/Layout";
import { Bounded } from "@/components/Bounded";
import { Heading } from "@/components/Heading";
import { HorizontalDivider } from "@/components/HorizontalDivider";
import { TableOfContents } from "@/components/TableOfContents";

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});



export async function generateMetadata({ params }) {
  const { uid } = await params;
  const client = createClient();
  const settings = await client.getSingle("settings");
  const article = await client
    .getByUID("article", uid)
    .catch(() => notFound());

  const publishDate = article.data.publishDate || article.first_publication_date;

  return {
    metadataBase: new URL('https://rob.cr'),
    title: `${prismic.asText(article.data.title)} | ${prismic.asText(
      settings.data.name,
    )}`,
    description: article.data.meta_description || prismic.asText(settings.data.description),
    keywords: ["AI Engineering", "Cloud Architecture", "Rob Montero", prismic.asText(article.data.title)],
    robots: { index: true, follow: true },
    alternates: {
      canonical: `https://rob.cr/articles/${uid}`,
    },
    openGraph: {
      type: "article",
      title: article.data.meta_title || prismic.asText(article.data.title),
      description: article.data.meta_description || prismic.asText(settings.data.description),
      url: `https://rob.cr/articles/${uid}`,
      authors: ['Rob Montero'],
      publishedTime: publishDate,
      modifiedTime: article.last_publication_date || publishDate,
      images: [
        {
          url: article.data.meta_image?.url || prismic.asImageSrc(settings.data.profilePicture),
          width: 1200,
          height: 630,
          alt: prismic.asText(article.data.title),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@robcr",
      creator: "@robcr",
      title: article.data.meta_title || prismic.asText(article.data.title),
      description: article.data.meta_description || prismic.asText(settings.data.description),
      image: article.data.meta_image?.url || prismic.asImageSrc(settings.data.profilePicture),
    },
  };
}

export default async function Page({ params }) {
  const { uid } = await params;
  const client = createClient();

  const article = await client
    .getByUID("article", uid)
    .catch(() => notFound());
  const navigation = await client.getSingle("navigation");
  const settings = await client.getSingle("settings");

  const date = prismic.asDate(
    article.data.publishDate || article.first_publication_date,
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: prismic.asText(article.data.title),
    url: `https://rob.cr/articles/${article.uid}`,
    image: article.data.meta_image?.url || prismic.asImageSrc(settings.data.profilePicture),
    datePublished: date.toISOString().split('T')[0],
    dateModified: article.last_publication_date ? new Date(article.last_publication_date).toISOString().split('T')[0] : date.toISOString().split('T')[0],
    author: {
      "@type": "Person",
      name: "Rob Montero",
      url: "https://rob.cr",
      image: "https://images.prismic.io/robcr/ZqPuBx5LeNNTxiIe_Rob_Montero_2024.png?auto=format,compress&w=500",
    },
    publisher: {
      "@type": "Person",
      name: "Rob Montero",
      url: "https://rob.cr",
      image: "https://images.prismic.io/robcr/ZqPuBx5LeNNTxiIe_Rob_Montero_2024.png?auto=format,compress&w=1200",
    },
    description: article.data.meta_description,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://rob.cr/articles/${article.uid}`,
    },
  };

  return (
    <Layout
      navigation={navigation}
      withHeaderDivider={false}
      withProfile={true}
      profileSize="small"
      settings={settings}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article>
        <Bounded className="pb-0" size="widest">
          <h1 className="mb-8 text-4xl font-bold tracking-tighter text-zinc-900 md:text-5xl dark:text-zinc-50 leading-tight">
            <PrismicText field={article.data.title} />
          </h1>
          <div className="flex items-center gap-4 mb-16 border-b border-zinc-200 dark:border-zinc-800 pb-8">
             {/* Note: since there's no author image defined in article settings, just date is kept */}
             <div className="flex items-center gap-2 text-sm font-medium text-zinc-900 dark:text-zinc-50">
               {prismic.isFilled.image(settings.data.profilePicture) ? (
                 <div className="relative h-8 w-8 overflow-hidden rounded-full bg-zinc-300">
                   <PrismicNextImage
                     field={settings.data.profilePicture}
                     fill={true}
                     sizes="2rem"
                     className="object-cover"
                   />
                 </div>
               ) : (
                 <span className="h-8 w-8 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-xs">RM</span>
               )}
               Rob Montero
             </div>
             <span className="text-zinc-400 dark:text-zinc-400">&bull;</span>
             <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
               {dateFormatter.format(date)}
             </p>
          </div>

          {/* AI Crawler Grounding Block */}
          {article.data.meta_description && (
            <div className="mb-12 p-6 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg text-sm text-zinc-600 dark:text-zinc-400 max-w-3xl">
              <strong>AI Summary:</strong> This article explains {article.data.meta_description}
            </div>
          )}
        </Bounded>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col lg:flex-row gap-16 relative">
          <div className="flex-1 w-full max-w-3xl">
            <SliceZone slices={article.data.slices} components={components} />
          </div>
          <TableOfContents />
        </div>
      </article>
    </Layout>
  );
}

export async function generateStaticParams() {
  const client = createClient();

  const articles = await client.getAllByType("article");

  return articles.map((article) => {
    return { uid: article.uid };
  });
}
