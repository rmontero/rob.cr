import * as prismic from "@prismicio/client";
import { SliceZone } from "@prismicio/react";
import { notFound } from "next/navigation";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { Layout } from "@/components/Layout";
import { TableOfContents } from "@/components/TableOfContents";

export async function generateMetadata({ params }) {
  const { uid } = await params;
  const client = createClient();
  const settings = await client.getSingle("settings");
  const page = await client
    .getByUID("page", uid)
    .catch(() => notFound());

  const isResume = uid === 'resume';

  return {
    metadataBase: new URL('https://rob.cr'),
    title: `${prismic.asText(page.data.title)} | ${prismic.asText(
      settings.data.name,
    )}`,
    description: page.data.meta_description || prismic.asText(settings.data.description),
    robots: { index: true, follow: true },
    alternates: {
      canonical: `https://rob.cr/${uid}`,
    },
    openGraph: {
      title: page.data.meta_title || prismic.asText(page.data.title),
      description: page.data.meta_description || prismic.asText(settings.data.description),
      url: `https://rob.cr/${uid}`,
      type: isResume ? 'profile' : 'website',
      siteName: 'Rob Montero',
      images: [
        {
          url: page.data.meta_image?.url || prismic.asImageSrc(settings.data.profilePicture),
          width: 1200,
          height: 630,
          alt: prismic.asText(page.data.title),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@robcr",
      creator: "@robcr",
      title: page.data.meta_title || prismic.asText(page.data.title),
      description: page.data.meta_description || prismic.asText(settings.data.description),
      image: page.data.meta_image?.url || prismic.asImageSrc(settings.data.profilePicture),
    },
  };
}

export default async function Page({ params }) {
  const { uid } = await params;
  const client = createClient();

  const page = await client
    .getByUID("page", uid)
    .catch(() => notFound());
  const navigation = await client.getSingle("navigation");
  const settings = await client.getSingle("settings");

  const isResume = uid === 'resume';

  const jsonLd = isResume ? {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    dateModified: new Date().toISOString().split('T')[0],
    mainEntity: {
      "@type": "Person",
      name: "Rob Montero",
      url: "https://rob.cr",
      jobTitle: "Director of Engineering",
      worksFor: {
        "@type": "Organization",
        "name": "Andela",
        "url": "https://andela.com"
      },
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          name: "Acquia Certified Engineer",
          credentialCategory: "Professional Certification"
        },
        {
          "@type": "EducationalOccupationalCredential",
          name: "Contentful Certified",
          credentialCategory: "Professional Certification"
        }
      ]
    }
  } : {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: prismic.asText(page.data.title),
    url: `https://rob.cr/${uid}`,
    description: page.data.meta_description || prismic.asText(settings.data.description),
    mainEntity: {
      "@type": "Person",
      name: "Rob Montero",
      url: "https://rob.cr"
    }
  };

  return (
    <Layout navigation={navigation} settings={settings}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col lg:flex-row gap-16 relative py-12">
        <div className="flex-1 w-full max-w-3xl">
          <SliceZone slices={page.data.slices} components={components} />
        </div>
        <TableOfContents />
      </article>
    </Layout>
  );
}

export async function generateStaticParams() {
  const client = createClient();

  const pages = await client.getAllByType("page");

  return pages.map((page) => {
    return { uid: page.uid };
  });
}
