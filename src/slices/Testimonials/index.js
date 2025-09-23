import * as prismic from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { Bounded } from "@/components/Bounded";

const Testimonials = ({ slice }) => {
  return (
    <Bounded as="section">
      <div className="bg-gray-50 -mx-6 px-6 py-16 md:-mx-8 md:px-8 lg:-mx-12 lg:px-12">
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {slice.items.map((item, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              {prismic.isFilled.richText(item.quote) && (
                <div className="mb-6">
                  <svg className="w-8 h-8 text-blue-600 mb-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                  </svg>
                  <PrismicRichText 
                    field={item.quote}
                    components={{
                      paragraph: ({ children }) => (
                        <blockquote className="text-gray-700 text-lg leading-relaxed italic">
                          "{children}"
                        </blockquote>
                      )
                    }}
                  />
                </div>
              )}
              
              <div className="flex items-center">
                {prismic.isFilled.image(item.avatar) && (
                  <PrismicNextImage
                    field={item.avatar}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                )}
                <div>
                  {prismic.isFilled.keyText(item.name) && (
                    <p className="font-semibold text-gray-900">{item.name}</p>
                  )}
                  {prismic.isFilled.keyText(item.title) && (
                    <p className="text-sm text-gray-600">{item.title}</p>
                  )}
                  {prismic.isFilled.keyText(item.company) && (
                    <p className="text-sm text-gray-600">{item.company}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Bounded>
  );
};

export default Testimonials;
