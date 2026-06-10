import type { AssetImage, Project } from "../data/portfolio";
import { preloadImage } from "../utils/preloadImage";

type ProjectCardProps = {
  project: Project;
  openArtifactLabel: string;
  onImageOpen: (image: AssetImage) => void;
};

function ProjectCard({ project, openArtifactLabel, onImageOpen }: ProjectCardProps) {
  return (
    <article className="card-hover flex h-full min-w-0 flex-col overflow-hidden border border-white/10 bg-[#090d16] text-cream">
      <button
        type="button"
        className="group block w-full bg-[#080e24] p-3 text-left focus:outline-none focus:ring-2 focus:ring-sky focus:ring-offset-4 focus:ring-offset-[#080e24]"
        aria-label={`${openArtifactLabel}: ${project.image.title}`}
        onClick={() => onImageOpen(project.image)}
        onPointerEnter={() => preloadImage(project.image.src)}
        onFocus={() => preloadImage(project.image.src)}
      >
        <span className="artifact-window-bar mb-3 !bg-black/20 !border-white/10">
          <span className="flex items-center gap-1.5" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <span className="min-w-0 truncate text-[11px] font-semibold uppercase tracking-[0.08em] !text-sky">{project.image.title}</span>
          <span className="hidden min-w-0 truncate text-right text-[11px] font-semibold !text-cream/55 md:block">{project.type}</span>
        </span>
        <span className="case-visual-frame relative block aspect-[16/10] overflow-hidden bg-[#090d16] border border-white/10">
          <img
            src={project.image.previewSrc ?? project.image.src}
            alt={project.image.alt}
            className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-[1.04]"
            loading="lazy"
            decoding="async"
          />
          <span className="pointer-events-none absolute inset-x-4 bottom-4 translate-y-2 rounded-md border border-cream/70 bg-navy/90 px-3 py-2 text-xs font-semibold text-cream opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 z-20">
            {openArtifactLabel}
          </span>
          <span className="artifact-device-label">Supporting artifact</span>
        </span>
      </button>

      <div className="flex flex-1 flex-col gap-4 p-6 md:p-7 bg-[#090d16]">
        <div>
          <div className="flex items-center justify-between gap-2 mb-3">
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-sky">{project.type}</p>
            {project.logo && (
              <span className="logo-dark-bg-wrapper">
                <img src={project.logo} alt="" className="cred-logo-md shrink-0" />
              </span>
            )}
          </div>
          <h3 className="text-2xl font-semibold leading-tight text-cream">{project.title}</h3>
          <p className="mt-4 text-sm leading-6 text-cream/80">{project.positioning}</p>
        </div>

        <p className="text-sm leading-6 text-cream/60">{project.relevance}</p>

        <div className="mt-auto flex flex-wrap items-start gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="inline-flex w-fit max-w-full items-center rounded-sm border border-sky/30 bg-sky/15 px-3 py-1 text-xs font-semibold leading-5 text-sky transition duration-300 hover:border-sky/60 hover:bg-sky/25 shrink-0">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
