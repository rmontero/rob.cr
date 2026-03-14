import Link from "next/link";
import { PrismicText } from "@prismicio/react";
import * as prismic from "@prismicio/client";

import { Bounded } from "./Bounded";
import { Heading } from "./Heading";
import { HorizontalDivider } from "./HorizontalDivider";


export function Footer() {
  return (
    <Bounded as="footer" className="pb-12 border-t border-zinc-200 dark:border-zinc-800 mt-24">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 w-full text-sm font-medium tracking-tight text-zinc-500 dark:text-zinc-400">
        <div>
          Proudly published using{" "}
          <Link href="https://prismic.io" className="text-zinc-900 dark:text-zinc-50 hover:underline">
            Prismic
          </Link>
        </div>
        <div>
          <Link href="https://www.linkedin.com/in/rmontero/" target="_blank" rel="noopener noreferrer" className="text-zinc-900 dark:text-zinc-50 hover:underline">
            Follow me on LinkedIn
          </Link>
        </div>
      </div>
    </Bounded>
  );
}
