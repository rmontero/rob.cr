import * as prismic from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import { Bounded } from "@/components/Bounded";

const Gallery = ({ slice }) => {
  return (
    <Bounded as="section">
      {prismic.isFilled.richText(slice.primary.title) && (
        <div className="text-center mb-12">
          <PrismicRichText 
            field={slice.primary.title}
            components={{
              heading2: ({ children }) => (
                <h2 className="text-3xl font-bold text-gray-900">{children}</h2>
              ),
              paragraph: ({ children }) => (
                <p className="text-lg text-gray-600 mt-4">{children}</p>
              ),
            }}
          />
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {slice.items.map((item, index) => (
          <div key={index} className="group cursor-pointer">
            {prismic.isFilled.image(item.image) && (
              <div className="overflow-hidden rounded-lg">
                <PrismicNextImage
                  field={item.image}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            )}
            {prismic.isFilled.keyText(item.caption) && (
              <p className="mt-3 text-sm text-gray-600 text-center">{item.caption}</p>
            )}
          </div>
        ))}
      </div>
    </Bounded>
  );
};

export default Gallery;
