import "../styles/globals.css";

import { Inter, Libre_Baskerville } from "next/font/google";

import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const libre_baskerville = Libre_Baskerville({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "700"],
  variable: "--libre-baskerville",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.className} ${libre_baskerville.className}`}
    >
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="msapplication-TileColor" content="#ffc40d" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className="overflow-x-hidden antialiased">
        <main>
          {process.env.NODE_ENV === "development" && (
            <div
              style={{
                background: "#5163ba",
                padding: "1rem",
                textAlign: "center",
                fontSize: "0.85rem",
                color: "#fff",
              }}
            >
              <p>
                <strong>👋 Welcome to your new website!</strong> To customize
                the code and content of this site,{" "}
                <a
                  href="https://github.com/prismicio-community/nextjs-starter-prismic-blog/tree/master/docs"
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "underline" }}
                >
                  see the documentation
                </a>
                . Remove this bar in <code>app/layout.js</code>.
              </p>
            </div>
          )}
          {children}
          <PrismicPreview repositoryName={repositoryName} />
          <SpeedInsights />
          <Analytics />
        </main>
      </body>
    </html>
  );
}
