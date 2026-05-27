import type { Project } from "../data/portfolio";

type ProjectCardProps = {
  project: Project;
};

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="card-hover grid h-full gap-6 border border-line bg-cream p-6 md:p-8">
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.08em] text-muted">{project.type}</p>
        <h3 className="text-2xl font-semibold leading-tight text-navy">{project.title}</h3>
        <p className="mt-4 text-sm leading-6 text-ink">{project.positioning}</p>
      </div>

      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.08em] text-navy">Contributions</p>
        <ul className="grid gap-2">
          {project.contributions.map((item) => (
            <li key={item} className="flex gap-3 text-sm leading-6 text-ink">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-navy" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.08em] text-navy">Why it matters</p>
        <p className="text-sm leading-6 text-muted">{project.relevance}</p>
      </div>

      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="badge">
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}

export default ProjectCard;
