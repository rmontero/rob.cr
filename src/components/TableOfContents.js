"use client";

import { useState, useEffect } from "react";
import { List } from "lucide-react";

export function TableOfContents() {
  const [headings, setHeadings] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Collect all h2, h3, h4, etc. within the main article area
    // PrismicRichText maps heading1 -> h2, heading2 -> h3, heading3 -> h4
    const elements = Array.from(document.querySelectorAll("article h2, article h3, article h4"));
    
    const idCounts = {};
    const parsedHeadings = elements.map((el, index) => {
      // Ensure the element has a unique ID to link to
      let baseId = el.id;
      if (!baseId) {
        baseId = el.innerText.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
        // fallback if empty
        if (!baseId) baseId = `heading-${index}`;
      }

      let uniqueId = baseId;
      if (idCounts[baseId]) {
        uniqueId = `${baseId}-${idCounts[baseId]}`;
        idCounts[baseId]++;
      } else {
        idCounts[baseId] = 1;
      }

      // Re-assign the element's ID to be unique
      el.id = uniqueId;

      return {
        id: uniqueId,
        text: el.innerText,
        level: Number(el.tagName.substring(1)),
      };
    });

    setHeadings(parsedHeadings);
  }, []);

  if (headings.length === 0) {
    return null;
  }

  const navigateTo = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      // Offset for sticky headers if any + smooth scrolling
      const y = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const menuItems = (
    <ul className="flex flex-col gap-3">
      {headings.map((heading) => (
        <li
          key={heading.id}
          className={`transition-colors`}
          style={{ paddingLeft: `${(heading.level - 2) * 1}rem` }}
        >
          <a
            href={`#${heading.id}`}
            onClick={(e) => navigateTo(e, heading.id)}
            className="text-sm text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors block leading-tight"
          >
            {heading.text}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      {/* Desktop Floating Sidebar */}
      <div className="hidden lg:block sticky top-32 w-64 shrink-0 pl-10 self-start max-h-[calc(100vh-10rem)] overflow-y-auto custom-scrollbar">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-100 mb-4">
          On this page
        </h3>
        {menuItems}
      </div>

      {/* Mobile Sticky Jump Menu */}
      <div className="lg:hidden fixed bottom-6 right-6 z-50">
        {isOpen && (
          <div className="absolute bottom-16 right-0 mb-2 w-64 bg-white dark:bg-zinc-900 block rounded-2xl shadow-xl border border-zinc-200 dark:border-zinc-800 p-6 max-h-[60vh] overflow-y-auto">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-100 mb-4">
              Jump to
            </h3>
            {menuItems}
          </div>
        )}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-center p-4 bg-zinc-900 text-white dark:bg-zinc-50 dark:text-zinc-900 rounded-full shadow-lg hover:scale-105 active:scale-95 transition-transform"
          aria-label="Table of Contents"
        >
          <List size={24} />
        </button>
      </div>
      
      {/* Mobile backdrop to close menu */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 z-40 bg-black/10 dark:bg-black/40 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
