import { NextResponse } from 'next/server';

export async function GET() {
  const profileData = {
    name: "Rob Montero",
    location: "Mexico City",
    experience_years: 25,
    roles: [
      "Director of Engineering",
      "Software Architect",
      "Head of Engineering",
      "Technical Lead"
    ],
    skills: [
      "AI Engineering",
      "Cloud Architecture",
      "Next.js",
      "React",
      "Python",
      "Databricks",
      "Drupal",
      "AWS",
      "GCP",
      "API Development"
    ],
    social: {
      linkedin: "https://linkedin.com/in/rmontero",
      github: "https://github.com/rmontero"
    }
  };

  return NextResponse.json(profileData);
}
