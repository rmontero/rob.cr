import Link from "next/link";
import { PrismicText } from "@prismicio/react";
import * as prismic from "@prismicio/client";

import { Bounded } from "./Bounded";
import { Heading } from "./Heading";
import { HorizontalDivider } from "./HorizontalDivider";


export function Footer() {
  return (
    <Bounded as="footer" className="pb-12 border-t border-slate-200 dark:border-zinc-800 mt-24">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 w-full text-sm font-medium tracking-tight text-slate-500 dark:text-zinc-400">
        <div>
          Proudly published using{" "}
          <Link href="https://prismic.io" className="text-slate-900 dark:text-zinc-50 hover:underline">
            Prismic
          </Link>
        </div>
        <div>
          <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-900 dark:text-zinc-50 hover:underline">
            Follow me on LinkedIn
          </Link>
        </div>
      </div>
    </Bounded>
  );
}
