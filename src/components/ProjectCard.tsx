import type { AssetImage, Project } from "../data/portfolio";
import { preloadImage } from "../utils/preloadImage";

type ProjectCardProps = {
  project: Project;
  index: number;
  openArtifactLabel: string;
  onImageOpen: (image: AssetImage) => void;
};

function ProjectCard({ project, index, openArtifactLabel, onImageOpen }: ProjectCardProps) {
  const gradients = [
    "from-[#0b1533] via-[#080e24] to-[#050a18]",
    "from-[#0d1c4a] via-[#080e24] to-[#040815]",
    "from-[#112460] via-[#080e24] to-[#030610]",
  ];
  const cardGradient = gradients[index % gradients.length];

  return (
    <article className={`card-hover flex h-full min-w-0 flex-col overflow-hidden border border-white/10 bg-gradient-to-br ${cardGradient} text-cream`}>
      <button
        type="button"
        className="group block w-full bg-black/20 p-3 text-left focus:outline-none focus:ring-2 focus:ring-sky focus:ring-offset-4 focus:ring-offset-[#080e24]"
        aria-label={`${openArtifactLabel}: ${project.image.title}`}
        onClick={() => onImageOpen(project.image)}
        onPointerEnter={() => preloadImage(project.image.src)}
        onFocus={() => preloadImage(project.image.src)}
      >
        <span className="artifact-window-bar mb-3 !bg-cream/95 !border-navy/15 flex items-center justify-between rounded-t-md px-3 py-2 min-h-10 h-auto flex-wrap gap-y-1 select-none">
          <span className="flex items-center gap-1.5 shrink-0" aria-hidden="true">
            <span className="w-2 h-2 rounded-full bg-[#d56f5d]" />
            <span className="w-2 h-2 rounded-full bg-[#d7aa4a]" />
            <span className="w-2 h-2 rounded-full bg-[#68a37d]" />
          </span>
          <span className="text-[10px] font-bold uppercase tracking-[0.08em] !text-navy px-2 break-words leading-tight flex-1 text-center">
            {project.image.title}
          </span>
          <span className="text-[9px] font-semibold !text-navy/60 shrink-0 uppercase tracking-wider hidden sm:inline-block">{project.type}</span>
        </span>
        <span className="case-visual-frame relative block aspect-[16/10] overflow-hidden bg-[#090d16] border border-white/10">
          <img
            src={project.image.previewSrc ?? project.image.src}
            alt={project.image.alt}
            className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-[1.04]"
            loading="lazy"
            decoding="async"
          />
          <span className="pointer-events-none absolute inset-x-4 bottom-4 translate-y-2 rounded-md border border-cream/70 bg-[#080e24]/95 px-3 py-2 text-center text-xs font-semibold text-cream opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 z-30">
            {openArtifactLabel}
          </span>
          <span className="artifact-device-label bg-[#080e24]/95 text-sky z-20">Supporting work sample</span>
        </span>
      </button>

      <div className="flex flex-1 flex-col gap-4 p-6 md:p-7 bg-transparent">
        <div>
          <div className="flex items-center justify-between gap-2 mb-3 h-7">
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-sky">{project.type}</p>
            {project.logo && (
              <span className="logo-dark-bg-wrapper bg-white/10 px-2 py-1 rounded inline-flex items-center">
                <img src={project.logo} alt="" className="cred-logo-sm shrink-0 object-contain" style={{ height: '26px' }} />
              </span>
            )}
          </div>
          <h3 className="text-2xl font-semibold leading-tight text-cream">{project.title}</h3>
          <p className="mt-4 text-sm leading-6 text-cream/80">{project.positioning}</p>
        </div>

        <p className="text-sm leading-6 text-cream/60">{project.relevance}</p>

        <div className="mt-auto flex flex-wrap items-start gap-2 pt-2">
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
