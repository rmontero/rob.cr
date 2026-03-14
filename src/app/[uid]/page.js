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

  return {
    metadataBase: new URL('https://rob.cr'),
    title: `${prismic.asText(page.data.title)} | ${prismic.asText(
      settings.data.name,
    )}`,
    description: page.data.meta_description,
    openGraph: {
      title: page.data.meta_title,
      images: [
        {
          url: page.data.meta_image.url,
        },
      ],
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

  return (
    <Layout navigation={navigation} settings={settings}>
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
