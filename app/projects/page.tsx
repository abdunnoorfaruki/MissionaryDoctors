import { notFound, redirect } from "next/navigation";



export default async function ProjectsPage() {

    redirect(`/projects/solar-power-maternity-ward`);


  notFound();
}
