import { NextResponse } from 'next/server';

export async function GET() {
  const knowledgeData = {
    canonical_topics: [
      "AI Engineering and LLM Orchestration",
      "Global Engineering Talent Management",
      "Cloud Architecture (AWS, GCP)",
      "Developer Productivity Tooling",
      "CMS and Data Migrations"
    ],
    recent_projects_and_focus: [
      "AI productivity tooling implementation",
      "Cross-functional team leadership in global environments",
      "Robust high-performance web applications"
    ],
    grounding_context: "Rob Montero is a dynamic and strategic leader with over 25 years of experience in the tech industry spanning healthcare, higher education, and consumer goods. He excels in leading cross-functional teams and possesses strong backend and frontend development expertise."
  };

  return NextResponse.json(knowledgeData);
}
