import * as prismic from "@prismicio/client";

import { Bounded } from "@/components/Bounded";
import { Markdown } from "@/components/ui/markdown";

const MarkdownText = ({ slice }) => {
  return (
    <Bounded as="section">
      {prismic.isFilled.keyText(slice.primary.content) && (
        <div className="font-serif leading-relaxed md:text-xl md:leading-relaxed">
          <Markdown className="max-w-none prose-lg prose-a:text-blue-600 prose-a:underline hover:prose-a:text-blue-800">
            {slice.primary.content}
          </Markdown>
        </div>
      )}
    </Bounded>
  );
};

export default MarkdownText;
