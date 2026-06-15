import type { AssetImage, PortfolioContent } from "../data/portfolio";
import ProjectCard from "./ProjectCard";
import SectionHeader from "./SectionHeader";

type AcademicProjectsProps = {
  content: PortfolioContent["sections"]["projects"];
  projects: PortfolioContent["projects"];
  openSampleLabel: string;
  onImageOpen: (image: AssetImage) => void;
};

function AcademicProjects({ content, projects, openSampleLabel, onImageOpen }: AcademicProjectsProps) {
  return (
    <section className="section-padding bg-cream text-ink border-b border-line" aria-labelledby="academic-projects-title">
      <div className="container-wide">
        <SectionHeader
          eyebrow={content.eyebrow}
          titleId="academic-projects-title"
          title={content.title}
          description={content.description}
          wide
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              openArtifactLabel={openSampleLabel}
              onImageOpen={onImageOpen}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default AcademicProjects;
