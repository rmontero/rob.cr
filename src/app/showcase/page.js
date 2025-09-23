import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";
import { Layout } from "@/components/Layout";
import { Bounded } from "@/components/Bounded";

// Mock navigation and settings data
const mockNavigation = {
  data: {
    links: []
  }
};

const mockSettings = {
  data: {
    name: "Rob.cr",
    description: "Full Stack Developer & Designer",
    profilePicture: {
      url: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      alt: "Profile picture"
    }
  }
};

// Mock slice data for all new components
const mockSlices = [
  // Hero Section
  {
    slice_type: "hero",
    primary: {
      title: [
        {
          type: "heading1",
          text: "Component Showcase",
          spans: []
        }
      ],
      description: [
        {
          type: "paragraph",
          text: "A comprehensive preview of all available Prismic slice components",
          spans: []
        }
      ]
    },
    items: []
  },
  
  // MarkdownText Component
  {
    slice_type: "markdown_text",
    primary: {
      content: `# Markdown Text Component

This component supports **bold text**, *italic text*, and [inline links](https://prismic.io).

## Features:
- GitHub Flavored Markdown support
- Automatic link handling
- Professional typography
- Code syntax: \`console.log("Hello World")\`

### Code Block Example:
\`\`\`javascript
const greeting = "Hello from Markdown!";
console.log(greeting);
\`\`\`

> This is a blockquote demonstrating styled text formatting.`
    }
  },

  // Gallery Component
  {
    slice_type: "gallery",
    primary: {
      title: [
        {
          type: "heading2",
          text: "Project Gallery",
          spans: []
        },
        {
          type: "paragraph", 
          text: "Showcase your work with a responsive image gallery",
          spans: []
        }
      ]
    },
    items: [
      {
        image: {
          dimensions: { width: 800, height: 600 },
          alt: "Dashboard Interface",
          url: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop"
        },
        caption: "Modern dashboard interface with data visualization"
      },
      {
        image: {
          dimensions: { width: 800, height: 600 },
          alt: "Mobile App Design",
          url: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop"
        },
        caption: "Responsive mobile application design"
      },
      {
        image: {
          dimensions: { width: 800, height: 600 },
          alt: "Web Application",
          url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
        },
        caption: "Full-stack web application architecture"
      },
      {
        image: {
          dimensions: { width: 800, height: 600 },
          alt: "E-commerce Platform",
          url: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop"
        },
        caption: "E-commerce platform with payment integration"
      },
      {
        image: {
          dimensions: { width: 800, height: 600 },
          alt: "API Documentation",
          url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
        },
        caption: "Comprehensive API documentation site"
      },
      {
        image: {
          dimensions: { width: 800, height: 600 },
          alt: "Analytics Dashboard",
          url: "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=800&h=600&fit=crop"
        },
        caption: "Real-time analytics and reporting dashboard"
      }
    ]
  },

  // FeatureList Component  
  {
    slice_type: "feature_list",
    primary: {
      title: [
        {
          type: "heading2", 
          text: "Skills & Expertise",
          spans: []
        },
        {
          type: "paragraph",
          text: "Technical skills and areas of specialization",
          spans: []
        }
      ]
    },
    items: [
      {
        icon: {
          dimensions: { width: 64, height: 64 },
          alt: "Frontend Development",
          url: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=64&h=64&fit=crop"
        },
        title: "Frontend Development",
        description: [
          {
            type: "paragraph",
            text: "Building responsive and interactive user interfaces with React, Next.js, TypeScript, and modern CSS frameworks like Tailwind CSS.",
            spans: [
              { start: 67, end: 72, type: "strong" },
              { start: 74, end: 81, type: "strong" },
              { start: 83, end: 93, type: "strong" }
            ]
          }
        ]
      },
      {
        icon: {
          dimensions: { width: 64, height: 64 },
          alt: "Backend Development",
          url: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=64&h=64&fit=crop"
        },
        title: "Backend Development", 
        description: [
          {
            type: "paragraph",
            text: "Creating robust APIs and server-side applications using Node.js, Express, PostgreSQL, and cloud services like AWS and Vercel.",
            spans: [
              { start: 63, end: 70, type: "strong" },
              { start: 72, end: 79, type: "strong" },
              { start: 81, end: 91, type: "strong" }
            ]
          }
        ]
      },
      {
        icon: {
          dimensions: { width: 64, height: 64 },
          alt: "Cloud & DevOps",
          url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=64&h=64&fit=crop"
        },
        title: "Cloud & DevOps",
        description: [
          {
            type: "paragraph", 
            text: "Deploying and scaling applications on cloud platforms, implementing CI/CD pipelines, and managing infrastructure as code.",
            spans: [
              { start: 77, end: 82, type: "strong" },
              { start: 98, end: 113, type: "strong" }
            ]
          }
        ]
      },
      {
        icon: {
          dimensions: { width: 64, height: 64 },
          alt: "UI/UX Design",
          url: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=64&h=64&fit=crop"
        },
        title: "UI/UX Design",
        description: [
          {
            type: "paragraph",
            text: "Designing user-centered interfaces with Figma, creating design systems, and ensuring excellent user experience across all platforms.",
            spans: [
              { start: 44, end: 49, type: "strong" }
            ]
          }
        ]
      },
      {
        icon: {
          dimensions: { width: 64, height: 64 },
          alt: "Mobile Development", 
          url: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=64&h=64&fit=crop"
        },
        title: "Mobile Development",
        description: [
          {
            type: "paragraph",
            text: "Building cross-platform mobile applications with React Native and creating progressive web apps that work seamlessly on mobile devices.",
            spans: [
              { start: 57, end: 69, type: "strong" }
            ]
          }
        ]
      },
      {
        icon: {
          dimensions: { width: 64, height: 64 },
          alt: "Database Design",
          url: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=64&h=64&fit=crop"
        },
        title: "Database Design",
        description: [
          {
            type: "paragraph",
            text: "Designing efficient database schemas, optimizing queries, and working with both SQL databases like PostgreSQL and NoSQL solutions like MongoDB.",
            spans: [
              { start: 85, end: 88, type: "strong" },
              { start: 105, end: 115, type: "strong" },
              { start: 120, end: 125, type: "strong" },
              { start: 144, end: 151, type: "strong" }
            ]
          }
        ]
      }
    ]
  },

  // Timeline Component
  {
    slice_type: "timeline", 
    primary: {
      title: [
        {
          type: "heading2",
          text: "Professional Experience",
          spans: []
        },
        {
          type: "paragraph", 
          text: "Career journey and key achievements in software development",
          spans: []
        }
      ]
    },
    items: [
      {
        title: "Senior Full Stack Developer",
        company: "Tech Innovations Inc.",
        date: "Jan 2022 - Present",
        description: [
          {
            type: "paragraph",
            text: "Leading development of scalable web applications and mentoring a team of junior developers. Specializing in React, Next.js, and Node.js ecosystems.",
            spans: [
              { start: 98, end: 103, type: "strong" },
              { start: 105, end: 112, type: "strong" },
              { start: 118, end: 125, type: "strong" }
            ]
          },
          { type: "list-item", text: "Increased application performance by 40% through code optimization", spans: [] },
          { type: "list-item", text: "Reduced deployment time from 2 hours to 5 minutes with CI/CD implementation", spans: [] },
          { type: "list-item", text: "Mentored 3 junior developers and established code review processes", spans: [] },
          { type: "list-item", text: "Architected microservices infrastructure serving 10K+ daily active users", spans: [] }
        ]
      },
      {
        title: "Frontend Developer",
        company: "Digital Solutions Ltd.",
        date: "Mar 2020 - Dec 2021",
        description: [
          {
            type: "paragraph", 
            text: "Developed responsive web applications and collaborated with design teams to create intuitive user experiences. Focus on React and modern CSS frameworks.",
            spans: [
              { start: 109, end: 114, type: "strong" }
            ]
          },
          { type: "list-item", text: "Built 15+ production web applications from concept to deployment", spans: [] },
          { type: "list-item", text: "Improved mobile user experience scores by 60% through responsive design", spans: [] },
          { type: "list-item", text: "Implemented automated testing reducing bugs by 35%", spans: [] }
        ]
      },
      {
        title: "Junior Web Developer", 
        company: "StartupXYZ",
        date: "Jun 2018 - Feb 2020",
        description: [
          {
            type: "paragraph",
            text: "Started career building websites and learning modern development practices. Gained foundational experience in JavaScript, HTML, CSS, and version control.",
            spans: [
              { start: 102, end: 112, type: "strong" },
              { start: 114, end: 118, type: "strong" },
              { start: 120, end: 123, type: "strong" }
            ]
          },
          { type: "list-item", text: "Completed 20+ client websites using WordPress and custom HTML/CSS", spans: [] },
          { type: "list-item", text: "Learned React and modern JavaScript frameworks", spans: [] },
          { type: "list-item", text: "Contributed to open-source projects and built personal portfolio", spans: [] }
        ]
      },
      {
        title: "Computer Science Degree",
        company: "University of Technology",
        date: "Sep 2014 - May 2018",
        description: [
          {
            type: "paragraph",
            text: "Bachelor of Science in Computer Science with focus on software engineering, algorithms, and web technologies. Graduated with honors.",
            spans: []
          },
          { type: "list-item", text: "Relevant coursework: Data Structures, Algorithms, Database Systems, Web Development", spans: [] },
          { type: "list-item", text: "Senior project: E-commerce platform built with React and Node.js", spans: [] },
          { type: "list-item", text: "GPA: 3.8/4.0, Dean's List for 3 consecutive semesters", spans: [] }
        ]
      }
    ]
  },

  // Testimonials Component
  {
    slice_type: "testimonials",
    primary: {
      title: [
        {
          type: "heading2",
          text: "What Clients Say", 
          spans: []
        },
        {
          type: "paragraph",
          text: "Feedback from satisfied clients and collaborators",
          spans: []
        }
      ]
    },
    items: [
      {
        quote: [
          {
            type: "paragraph",
            text: "Rob delivered an exceptional web application that exceeded our expectations. His attention to detail and technical expertise made our project a huge success. The code quality was outstanding and the project was delivered on time.",
            spans: []
          }
        ],
        name: "Sarah Johnson",
        title: "Product Manager",
        company: "TechCorp Inc.",
        avatar: {
          dimensions: { width: 100, height: 100 },
          alt: "Sarah Johnson",
          url: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
        }
      },
      {
        quote: [
          {
            type: "paragraph", 
            text: "Working with Rob was a pleasure from start to finish. He's not only technically skilled but also excellent at communication and meeting deadlines. I would highly recommend him for any web development project.",
            spans: []
          }
        ],
        name: "Michael Chen",
        title: "CTO",
        company: "Digital Innovations",
        avatar: {
          dimensions: { width: 100, height: 100 },
          alt: "Michael Chen", 
          url: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
        }
      },
      {
        quote: [
          {
            type: "paragraph",
            text: "Rob's expertise in React and Next.js helped us build a lightning-fast application that our users absolutely love. The performance improvements were remarkable and the user experience is now best-in-class.",
            spans: [
              { start: 17, end: 22, type: "strong" },
              { start: 27, end: 34, type: "strong" }
            ]
          }
        ],
        name: "Emily Rodriguez", 
        title: "Lead Designer",
        company: "Creative Studios",
        avatar: {
          dimensions: { width: 100, height: 100 },
          alt: "Emily Rodriguez",
          url: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
        }
      },
      {
        quote: [
          {
            type: "paragraph",
            text: "The e-commerce platform Rob built for us has been a game-changer for our business. Sales increased by 200% in the first quarter after launch. His understanding of both technical and business requirements is exceptional.",
            spans: []
          }
        ],
        name: "David Park",
        title: "Founder & CEO", 
        company: "RetailTech Solutions",
        avatar: {
          dimensions: { width: 100, height: 100 },
          alt: "David Park",
          url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
        }
      },
      {
        quote: [
          {
            type: "paragraph",
            text: "Rob transformed our outdated website into a modern, responsive platform that perfectly represents our brand. The attention to UI/UX details and performance optimization exceeded our expectations.",
            spans: []
          }
        ],
        name: "Lisa Thompson",
        title: "Marketing Director",
        company: "GrowthCo Agency", 
        avatar: {
          dimensions: { width: 100, height: 100 },
          alt: "Lisa Thompson",
          url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face"
        }
      },
      {
        quote: [
          {
            type: "paragraph",
            text: "The mobile app Rob developed has been a tremendous success with over 50,000 downloads in the first month. His expertise in React Native and user experience design is truly impressive.",
            spans: [
              { start: 109, end: 121, type: "strong" }
            ]
          }
        ],
        name: "Alex Kumar",
        title: "VP of Engineering",
        company: "MobileFirst Inc.",
        avatar: {
          dimensions: { width: 100, height: 100 },
          alt: "Alex Kumar",
          url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face"
        }
      }
    ]
  },

  // FAQ Component
  {
    slice_type: "faq",
    primary: {
      title: [
        {
          type: "heading2",
          text: "Frequently Asked Questions",
          spans: []
        },
        {
          type: "paragraph",
          text: "Common questions about my work process and services",
          spans: []
        }
      ]
    },
    items: [
      {
        question: "What technologies do you specialize in?",
        answer: [
          {
            type: "paragraph",
            text: "I specialize in modern web development technologies including React, Next.js, TypeScript, Node.js, and cloud platforms like AWS and Vercel. I also have extensive experience with databases like PostgreSQL and MongoDB, and I'm proficient in UI/UX design tools like Figma.",
            spans: [
              { start: 73, end: 78, type: "strong" },
              { start: 80, end: 87, type: "strong" },
              { start: 89, end: 99, type: "strong" },
              { start: 101, end: 108, type: "strong" },
              { start: 140, end: 143, type: "strong" },
              { start: 148, end: 154, type: "strong" },
              { start: 194, end: 204, type: "strong" },
              { start: 209, end: 216, type: "strong" },
              { start: 248, end: 253, type: "strong" }
            ]
          }
        ]
      },
      {
        question: "How long does a typical project take?",
        answer: [
          {
            type: "paragraph",
            text: "Project timelines vary significantly based on complexity and scope. A simple landing page or portfolio site might take 1-2 weeks, while a full web application with custom features can take 8-16 weeks. I always provide detailed project timelines and milestones during the initial consultation and planning phase.",
            spans: []
          }
        ]
      },
      {
        question: "Do you work with teams or prefer solo projects?",
        answer: [
          {
            type: "paragraph", 
            text: "I'm comfortable working both independently and as part of a team. I have extensive experience collaborating with designers, other developers, project managers, and stakeholders using tools like Slack, GitHub, Figma, and various project management platforms like Jira and Trello.",
            spans: [
              { start: 156, end: 161, type: "strong" },
              { start: 163, end: 169, type: "strong" },
              { start: 171, end: 176, type: "strong" },
              { start: 227, end: 231, type: "strong" },
              { start: 236, end: 242, type: "strong" }
            ]
          }
        ]
      },
      {
        question: "What's your development process like?",
        answer: [
          {
            type: "paragraph",
            text: "I follow a structured development process that includes discovery and planning, design and prototyping, development with regular check-ins, testing and quality assurance, deployment, and ongoing support. I believe in transparent communication and provide regular updates throughout the project lifecycle.",
            spans: []
          }
        ]
      },
      {
        question: "Do you provide ongoing support after project completion?",
        answer: [
          {
            type: "paragraph",
            text: "Yes, I offer various support packages including bug fixes, feature updates, performance monitoring, and general maintenance. I believe in building long-term relationships with clients and ensuring their projects continue to perform optimally over time. Support terms are discussed and agreed upon before project completion.",
            spans: []
          }
        ]
      },
      {
        question: "Can you help with existing projects or only new builds?",
        answer: [
          {
            type: "paragraph",
            text: "I work on both new projects and existing codebases. Whether you need to add new features, fix bugs, improve performance, migrate to newer technologies, or completely redesign an existing application, I can help. I'm experienced in working with legacy code and modernizing applications.",
            spans: []
          }
        ]
      },
      {
        question: "What are your rates and how do you structure pricing?",
        answer: [
          {
            type: "paragraph",
            text: "My pricing varies based on project complexity, timeline, and requirements. I offer both hourly rates for smaller tasks and fixed-price packages for complete projects. I always provide detailed proposals with clear scope and pricing before starting any work. Contact me for a personalized quote.",
            spans: []
          }
        ]
      },
      {
        question: "Do you work with international clients?",
        answer: [
          {
            type: "paragraph", 
            text: "Absolutely! I work with clients worldwide and am experienced in remote collaboration across different time zones. I use modern communication tools and project management systems to ensure smooth collaboration regardless of location. I'm flexible with meeting times to accommodate different schedules.",
            spans: []
          }
        ]
      }
    ]
  },

  // Call to Action Component
  {
    slice_type: "call_to_action", 
    primary: {
      title: [
        {
          type: "heading2",
          text: "Ready to Start Your Project?",
          spans: []
        }
      ],
      description: [
        {
          type: "paragraph",
          text: "Let's discuss your project requirements and bring your ideas to life with modern web technologies.",
          spans: []
        }
      ],
      button_text: "Get in Touch",
      button_link: {
        link_type: "Web",
        url: "/contact"
      }
    },
    items: []
  }
];

export default function ComponentShowcasePage() {
  return (
    <Layout 
      withHeaderDivider={false}
      navigation={mockNavigation}
      settings={mockSettings}
    >
      <div className="min-h-screen">
        <SliceZone slices={mockSlices} components={components} />
        
        {/* Footer note */}
        <Bounded>
          <div className="text-center py-12 border-t border-gray-200">
            <p className="text-gray-600 max-w-2xl mx-auto">
              This showcase page demonstrates all available Prismic slice components. 
              Each component is fully functional and ready to be used in your content management system.
              Visit <strong>Slice Machine</strong> at <code>localhost:9999</code> to manage these components.
            </p>
          </div>
        </Bounded>
      </div>
    </Layout>
  );
}
