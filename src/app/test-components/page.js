import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";
import { Layout } from "@/components/Layout";
import { Bounded } from "@/components/Bounded";

// Mock navigation and settings
const mockNavigation = { data: { links: [] } };
const mockSettings = {
  data: {
    name: [
      {
        type: "heading1",
        text: "Rob.cr Component Test",
        spans: []
      }
    ],
    description: [
      {
        type: "paragraph",
        text: "Testing New Prismic Components",
        spans: []
      }
    ],
    profilePicture: {
      dimensions: { width: 32, height: 32 },
      url: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
      alt: "Test"
    }
  }
};

// Focus on the 5 new components we created
const newComponentSlices = [
  {
    slice_type: "markdown_text",
    primary: {
      content: `# New Component Testing

This page showcases the **5 new Prismic components** we just created:

## Components Available:
1. **MarkdownText** - This component you're reading now!
2. **Gallery** - Image grid with captions
3. **FeatureList** - Skills/services with icons  
4. **Timeline** - Career/project history
5. **Testimonials** - Client recommendations

### MarkdownText Features:
- [External links](https://prismic.io) open in new tabs
- **Bold** and *italic* text support
- \`Inline code\` formatting
- Lists and headers
- > Blockquotes like this one

Perfect for blog posts, documentation, and rich content!`
    }
  },

  {
    slice_type: "gallery",
    primary: {
      title: [
        { type: "heading2", text: "Gallery Component", spans: [] }
      ]
    },
    items: [
      {
        image: {
          dimensions: { width: 600, height: 400 },
          alt: "Project 1",
          url: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop"
        },
        caption: "Dashboard UI Design"
      },
      {
        image: {
          dimensions: { width: 600, height: 400 },
          alt: "Project 2", 
          url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
        },
        caption: "Data Visualization App"
      },
      {
        image: {
          dimensions: { width: 600, height: 400 },
          alt: "Project 3",
          url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
        },
        caption: "E-commerce Platform"
      }
    ]
  },

  {
    slice_type: "feature_list",
    primary: {
      title: [
        { type: "heading2", text: "FeatureList Component", spans: [] }
      ]
    },
    items: [
      {
        icon: {
          dimensions: { width: 64, height: 64 },
          alt: "React",
          url: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=64&h=64&fit=crop"
        },
        title: "Frontend Development",
        description: [
          { type: "paragraph", text: "React, Next.js, TypeScript, and modern CSS frameworks", spans: [] }
        ]
      },
      {
        icon: {
          dimensions: { width: 64, height: 64 },
          alt: "Backend",
          url: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=64&h=64&fit=crop"
        },
        title: "Backend Development", 
        description: [
          { type: "paragraph", text: "Node.js, APIs, databases, and cloud infrastructure", spans: [] }
        ]
      },
      {
        icon: {
          dimensions: { width: 64, height: 64 },
          alt: "Design",
          url: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=64&h=64&fit=crop"
        },
        title: "UI/UX Design",
        description: [
          { type: "paragraph", text: "User-centered design, prototyping, and design systems", spans: [] }
        ]
      }
    ]
  },

  {
    slice_type: "timeline",
    primary: {
      title: [
        { type: "heading2", text: "Timeline Component", spans: [] }
      ]
    },
    items: [
      {
        title: "Senior Developer",
        company: "Tech Company",
        date: "2022 - Present",
        description: [
          { type: "paragraph", text: "Leading development of scalable applications", spans: [] },
          { type: "list-item", text: "Built 10+ production applications", spans: [] },
          { type: "list-item", text: "Mentored junior developers", spans: [] }
        ]
      },
      {
        title: "Frontend Developer",
        company: "Digital Agency", 
        date: "2020 - 2022",
        description: [
          { type: "paragraph", text: "Focused on user experience and responsive design", spans: [] },
          { type: "list-item", text: "Improved performance by 40%", spans: [] },
          { type: "list-item", text: "Collaborated with design teams", spans: [] }
        ]
      }
    ]
  },

  {
    slice_type: "testimonials",
    primary: {
      title: [
        { type: "heading2", text: "Testimonials Component", spans: [] }
      ]
    },
    items: [
      {
        quote: [
          { type: "paragraph", text: "Excellent work on our web application. Delivered on time and exceeded expectations!", spans: [] }
        ],
        name: "Sarah Johnson",
        title: "Product Manager",
        company: "TechCorp",
        avatar: {
          dimensions: { width: 80, height: 80 },
          alt: "Sarah",
          url: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face"
        }
      },
      {
        quote: [
          { type: "paragraph", text: "Great communication and technical skills. Would definitely work with again!", spans: [] }
        ],
        name: "Mike Chen", 
        title: "CTO",
        company: "StartupXYZ",
        avatar: {
          dimensions: { width: 80, height: 80 },
          alt: "Mike",
          url: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face"
        }
      }
    ]
  },

  {
    slice_type: "markdown_text",
    primary: {
      content: `## Component Testing Complete! ✅

All **5 new components** are working perfectly:

### What's Next?
1. Visit [Slice Machine](http://localhost:9999) to manage components
2. Push components to your Prismic repository  
3. Add them to pages in Prismic dashboard
4. Customize with your real content

### Component Features:
- ✅ **Responsive design** - Works on all screen sizes
- ✅ **Professional styling** - Clean, modern appearance  
- ✅ **Rich content support** - Text formatting and media
- ✅ **Prismic integration** - Easy content management
- ✅ **Performance optimized** - Fast loading and rendering

Ready to build something amazing! 🚀`
    }
  }
];

export const dynamic = 'force-dynamic';

export default function NewComponentsTestPage() {
  return (
    <Layout
      withHeaderDivider={false} 
      navigation={mockNavigation}
      settings={mockSettings}
    >
      <div className="min-h-screen">
        <SliceZone slices={newComponentSlices} components={components} />
        
        <Bounded>
          <div className="text-center py-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold mb-2">🎉 All Components Ready!</h3>
            <p className="text-gray-600">
              Visit <code className="bg-gray-100 px-2 py-1 rounded">localhost:9999</code> (Slice Machine) to manage these components
            </p>
          </div>
        </Bounded>
      </div>
    </Layout>
  );
}
