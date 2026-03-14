import { isFilled } from "@prismicio/client";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.HeroSlice} HeroSlice
 *
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroSlice>} HeroProps
 *
 * @type {import("react").FC<HeroProps>}
 */
const Hero = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative w-full py-12 md:py-20"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col gap-10 md:gap-14">
        
        {/* Header Section */}
        <div className="flex flex-col gap-4 text-left max-w-4xl">
          {isFilled.keyText(slice.primary.eyebrowHeadline) && (
            <p className="text-teal-500 dark:text-teal-400 text-lg md:text-xl font-semibold tracking-wider uppercase">
              {slice.primary.eyebrowHeadline}
            </p>
          )}
          {isFilled.richText(slice.primary.title) && (
            <div className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-zinc-50 leading-tight [&>p]:m-0">
              <PrismicRichText field={slice.primary.title} />
            </div>
          )}
        </div>

        {/* Image Section */}
        {isFilled.image(slice.primary.image) && (
          <div className="w-full">
            <PrismicNextImage
              field={slice.primary.image}
              className="w-full h-auto rounded-3xl shadow-2xl dark:shadow-none dark:border dark:border-zinc-800 object-cover bg-slate-100 dark:bg-zinc-900"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            />
          </div>
        )}

        {/* Text / Body Section */}
        <div className="flex flex-col gap-8 max-w-3xl items-start">
          {isFilled.richText(slice.primary.description) && (
            <div className="text-lg md:text-xl leading-relaxed text-slate-600 dark:text-zinc-400 [&>p]:mb-6 last:[&>p]:mb-0 [&>p>a]:text-teal-500 [&>p>a]:underline [&>p>a]:underline-offset-4 hover:[&>p>a]:text-teal-600 transition-colors">
              <PrismicRichText field={slice.primary.description} />
            </div>
          )}
          
          <PrismicNextLink
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-teal-500 to-purple-500 px-8 py-4 text-base font-bold text-white shadow-lg shadow-teal-500/25 dark:shadow-none hover:shadow-xl hover:shadow-purple-500/30 transition-all hover:-translate-y-1 active:translate-y-0"
            field={slice.primary.callToActionLink}
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;
