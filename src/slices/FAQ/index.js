"use client";
import { useState } from "react";
import * as prismic from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";
import { Bounded } from "@/components/Bounded";

const FAQ = ({ slice }) => {
  const [openItems, setOpenItems] = useState(new Set());

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

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
      
      <div className="max-w-4xl mx-auto space-y-4">
        {slice.items.map((item, index) => (
          <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleItem(index)}
              className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
            >
              <span className="font-medium text-gray-900">{item.question}</span>
              <svg 
                className={`w-5 h-5 transition-transform duration-200 ${
                  openItems.has(index) ? 'rotate-180' : ''
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openItems.has(index) && (
              <div className="px-6 pb-4 border-t border-gray-100">
                {prismic.isFilled.richText(item.answer) && (
                  <div className="prose prose-gray max-w-none pt-4">
                    <PrismicRichText field={item.answer} />
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </Bounded>
  );
};

export default FAQ;
