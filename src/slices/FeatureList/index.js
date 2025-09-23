import * as prismic from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { Bounded } from "@/components/Bounded";

const FeatureList = ({ slice }) => {
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
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {slice.items.map((item, index) => (
          <div key={index} className="text-center">
            {prismic.isFilled.image(item.icon) && (
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <PrismicNextImage
                  field={item.icon}
                  className="w-full h-full object-contain"
                />
              </div>
            )}
            {prismic.isFilled.keyText(item.title) && (
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
            )}
            {prismic.isFilled.richText(item.description) && (
              <div className="prose prose-gray max-w-none">
                <PrismicRichText 
                  field={item.description}
                  components={{
                    paragraph: ({ children }) => (
                      <p className="text-gray-600">{children}</p>
                    )
                  }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </Bounded>
  );
};

export default FeatureList;
