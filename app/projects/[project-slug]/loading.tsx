import { Navbar } from "@/components/shared/navbar";
import { Footer } from "@/components/shared/footer";
import { ProjectPageSkeleton } from "./_components/project-skeleton";

/**
 * Renders automatically by Next.js during the server data fetch in `page.tsx`.
 * The Navbar/Footer render normally — only the project content streams in.
 */
export default function Loading() {
  return (
    <>
      <Navbar />
      <main>
        <ProjectPageSkeleton />
      </main>
      <Footer />
    </>
  );
}
