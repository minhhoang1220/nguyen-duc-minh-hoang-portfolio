import type { AssetImage, Project } from "../data/portfolio";
import { preloadImage } from "../utils/preloadImage";

type ProjectCardProps = {
  project: Project;
  openArtifactLabel: string;
  onImageOpen: (image: AssetImage) => void;
};

function ProjectCard({ project, openArtifactLabel, onImageOpen }: ProjectCardProps) {
  return (
    <article className="card-hover flex h-full min-w-0 flex-col overflow-hidden border border-line bg-card">
      <button
        type="button"
        className="group block w-full bg-cream p-3 text-left focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-4"
        aria-label={`${openArtifactLabel}: ${project.image.title}`}
        onClick={() => onImageOpen(project.image)}
        onPointerEnter={() => preloadImage(project.image.src)}
        onFocus={() => preloadImage(project.image.src)}
      >
        <span className="artifact-window-bar mb-3">
          <span className="flex items-center gap-1.5" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <span className="min-w-0 truncate text-[11px] font-semibold uppercase tracking-[0.08em] text-muted">{project.image.title}</span>
          <span className="hidden min-w-0 truncate text-right text-[11px] font-semibold text-muted md:block">{project.type}</span>
        </span>
        <span className="case-visual-frame relative block aspect-[16/10] overflow-hidden bg-cream">
          <img
            src={project.image.previewSrc ?? project.image.src}
            alt={project.image.alt}
            className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-[1.04]"
            loading="lazy"
            decoding="async"
          />
          <span className="pointer-events-none absolute inset-x-4 bottom-4 translate-y-2 rounded-md border border-cream/70 bg-navy/90 px-3 py-2 text-xs font-semibold text-cream opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            {openArtifactLabel}
          </span>
          <span className="artifact-device-label">Supporting artifact</span>
        </span>
      </button>

      <div className="flex flex-1 flex-col gap-4 p-6 md:p-7">
        <div>
          <div className="flex items-center justify-between gap-2 mb-3">
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-muted">{project.type}</p>
            {project.logo && (
              <img src={project.logo} alt="" className="h-5 w-auto object-contain shrink-0" />
            )}
          </div>
          <h3 className="text-2xl font-semibold leading-tight text-navy">{project.title}</h3>
          <p className="mt-4 text-sm leading-6 text-ink">{project.positioning}</p>
        </div>

        <p className="text-sm leading-6 text-muted">{project.relevance}</p>

        <div className="mt-auto flex flex-wrap items-start gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="badge shrink-0">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
