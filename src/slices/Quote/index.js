import * as prismic from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";

import { Bounded } from "@/components/Bounded";

const Quote = ({ slice }) => {
  return (
    <Bounded as="section" size="wide">
      {prismic.isFilled.richText(slice.primary.quote) && (
        <div className="font-serif text-3xl italic leading-relaxed">
          &ldquo;
          <PrismicRichText 
            field={slice.primary.quote}
            components={{
              paragraph: ({ children }) => <span>{children}</span>
            }}
          />
          &rdquo;
          {prismic.isFilled.keyText(slice.primary.source) && (
            <> &mdash; {slice.primary.source}</>
          )}
        </div>
      )}
    </Bounded>
  );
};

export default Quote;
