import * as prismic from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";
import { Bounded } from "@/components/Bounded";

const Timeline = ({ slice }) => {
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
      
      <div className="max-w-4xl mx-auto relative">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300 hidden md:block"></div>
        
        <div className="space-y-8">
          {slice.items.map((item, index) => (
            <div key={index} className="relative flex items-start">
              {/* Timeline dot */}
              <div className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-md z-10 hidden md:block"></div>
              
              <div className="md:ml-16 w-full">
                <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    {prismic.isFilled.keyText(item.title) && (
                      <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                    )}
                    {prismic.isFilled.keyText(item.date) && (
                      <span className="text-sm text-blue-600 font-medium md:ml-4 mt-1 md:mt-0">
                        {item.date}
                      </span>
                    )}
                  </div>
                  
                  {prismic.isFilled.keyText(item.company) && (
                    <p className="text-gray-600 mb-3 font-medium">{item.company}</p>
                  )}
                  
                  {prismic.isFilled.richText(item.description) && (
                    <div className="prose prose-zinc max-w-none">
                      <PrismicRichText 
                        field={item.description}
                        components={{
                          paragraph: ({ children }) => (
                            <p className="text-gray-700 mb-2 last:mb-0">{children}</p>
                          ),
                          list: ({ children }) => (
                            <ul className="list-disc list-inside text-gray-700 space-y-1">{children}</ul>
                          ),
                          listItem: ({ children }) => (
                            <li>{children}</li>
                          )
                        }}
                      />
                    </div>
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

export default Timeline;
