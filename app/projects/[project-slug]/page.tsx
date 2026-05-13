import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/shared/navbar";
import { Footer } from "@/components/shared/footer";
import { ProjectPageContent } from "./_components/project-page-content";
import { Project } from "../types";
import { solarMaternityProject } from "../data";

// In production, replace this with a fetch/db lookup keyed by slug.
const PROJECTS_BY_SLUG: Record<string, Project> = {
  [solarMaternityProject.slug]: solarMaternityProject,
};

interface PageProps {
  params: Promise<{ "project-slug": string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { "project-slug": slug } = await params;
  const project = PROJECTS_BY_SLUG[slug];
  if (!project) return { title: "Project not found" };

  return {
    title: `${project.title.leading} ${project.title.emphasis}${project.title.trailing ?? ""} — MissionaryDoctors`,
    description: project.subtitle,
    openGraph: {
      title: `${project.title.leading} ${project.title.emphasis}`,
      description: project.subtitle,
      images: [{ url: project.heroImage.src, alt: project.heroImage.alt }],
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { "project-slug": slug } = await params;
  const project = PROJECTS_BY_SLUG[slug];
  if (!project) notFound();

  return (
    <>
      <Navbar currentPath={`/projects/${slug}`} />
      <main>
        <ProjectPageContent project={project} />
      </main>
      <Footer />
    </>
  );
}
