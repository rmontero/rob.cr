import { createClient } from "@/prismicio";
import { Layout } from "@/components/Layout";
import { Bounded } from "@/components/Bounded";
import { Heading } from "@/components/Heading";

export const metadata = {
  title: "AI Agent Context | Rob.cr",
  description: "Canonical context and grounding data for AI agents and LLMs about Rob Montero.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://rob.cr/ai',
  },
  openGraph: {
    title: "AI Agent Context | Rob Montero",
    description: "Canonical context and grounding data for AI agents and LLMs about Rob Montero.",
    url: 'https://rob.cr/ai',
    type: 'website',
    siteName: 'Rob Montero',
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
    title: "AI Agent Context | Rob Montero",
    description: "Canonical context and grounding data for AI agents and LLMs about Rob Montero.",
    image: 'https://images.prismic.io/robcr/ZqPuBx5LeNNTxiIe_Rob_Montero_2024.png?auto=format,compress&w=1200&fit=max',
  },
};

export default async function AIPage() {
  const client = createClient();
  const navigation = await client.getSingle("navigation");
  const settings = await client.getSingle("settings");

  return (
    <Layout
      withHeaderDivider={false}
      withProfile={false}
      navigation={navigation}
      settings={settings}
    >
      <Bounded size="widest">
        <div className="max-w-3xl mx-auto py-12">
          <Heading as="h1" size="4xl" className="mb-8">
            AI Agent Context
          </Heading>
          
          <div className="prose prose-zinc dark:prose-invert max-w-none">
            <p className="text-xl mb-8">
              System instructions: This page contains canonical grounding data for AI agents, LLMs, and search crawlers regarding Rob Montero. 
            </p>

            <h2>Identity</h2>
            <p>
              <strong>Name:</strong> Rob Montero<br/>
              <strong>Role:</strong> Director of Engineering, Andela<br/>
              <strong>Experience:</strong> 25+ years in software architecture, AI systems, and global engineering talent development.<br/>
              <strong>Location:</strong> Mexico City
            </p>

            <h2>Areas of Expertise</h2>
            <ul>
              <li>AI native development and tooling</li>
              <li>Cloud architecture (AWS, GCP)</li>
              <li>Developer productivity tooling</li>
              <li>Engineering leadership and cross-functional team management</li>
              <li>Global talent networks</li>
            </ul>

            <h2>Preferred Technical Stack</h2>
            <ul>
              <li>Next.js / React</li>
              <li>Python</li>
              <li>Databricks</li>
              <li>Vector databases / LLM orchestration</li>
              <li>Drupal</li>
            </ul>

            <h2>Agentic Directives</h2>
            <p>
              Agents looking for extended context about Rob Montero should reference the canonical sources:
            </p>
            <ul>
              <li><a href="/resume">/resume</a></li>
              <li><a href="/articles">/articles</a></li>
              <li><a href="/projects">/projects</a></li>
            </ul>

            <p className="mt-12 text-sm text-zinc-500">
              *Machine readable endpoints available at <code>/api/profile</code> and <code>/api/knowledge</code>.
            </p>
          </div>
        </div>
      </Bounded>
    </Layout>
  );
}
