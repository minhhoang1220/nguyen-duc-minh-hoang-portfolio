import type { AssetImage, PortfolioContent, SupportedProject } from "../data/portfolio";
import { preloadImage } from "../utils/preloadImage";
import SectionHeader from "./SectionHeader";

type ProfessionalExperienceProps = {
  content: PortfolioContent["professionalExperience"];
  openSampleLabel: string;
  onImageOpen: (image: AssetImage) => void;
};

type BlockIconType = "problem" | "context" | "decisions" | "process" | "impact" | "outcome" | "skills" | "evidence" | "supporting" | "scope";

function ProfessionalExperience({ content, openSampleLabel, onImageOpen }: ProfessionalExperienceProps) {
  return (
    <section id="experience" className="section-full section-padding bg-[#FCFBF8] text-ink border-y border-line" aria-labelledby="experience-title">
      <div className="container-wide">
        <SectionHeader
          eyebrow={content.eyebrow}
          titleId="experience-title"
          title={content.title}
          description={content.description}
          wide
        />

        <article className="mt-10 rounded-lg border border-navy/10 bg-white p-5 text-navy shadow-minimal md:p-8 lg:p-10">
          <div className="border-b border-navy/10 pb-8">
            <div className="flex flex-wrap items-center gap-3">
              <p className="text-sm font-bold text-navy-accent">{content.vega.period}</p>
              {content.vega.logo ? (
                <img src={content.vega.logo} alt="" className="cred-logo-md shrink-0 object-contain" />
              ) : null}
            </div>
            <h3 className="mt-4 max-w-[1120px] text-[30px] font-semibold leading-[1.06] text-navy md:text-[44px]">
              {content.vega.title}
            </h3>
            <p className="mt-5 max-w-[1120px] text-base leading-8 text-ink/80 md:text-lg md:leading-9">
              {content.vega.focus}
            </p>
          </div>

          <div className="mt-8 grid gap-6">
            {content.vega.projects.map((project, index) => (
              <SupportedProjectCard
                key={project.title}
                project={project}
                index={index}
                labels={{
                  project: content.projectLabel,
                  scope: content.scopeLabel,
                  contributions: content.contributionLabel,
                  evidence: content.evidenceLabel,
                  details: content.detailsLabel,
                  samples: content.sampleLabel,
                  openSample: openSampleLabel,
                }}
                onImageOpen={onImageOpen}
              />
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}

function SupportedProjectCard({
  project,
  index,
  labels,
  onImageOpen,
}: {
  project: SupportedProject;
  index: number;
  labels: {
    project: string;
    scope: string;
    contributions: string;
    evidence: string;
    details: string;
    samples: string;
    openSample: string;
  };
  onImageOpen: (image: AssetImage) => void;
}) {
  const [primarySample, ...supportingSamples] = project.samples;

  return (
    <section className="border-t border-navy/10 pt-8 first:border-t-0 first:pt-0" aria-labelledby={`supported-project-${index + 1}`}>
      <div className="grid gap-7 xl:grid-cols-[0.92fr_1.08fr] xl:items-start">
        <div>
          <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-navy-accent">
            {getBlockIcon("supporting", "h-4 w-4")}
            {labels.project} 0{index + 1}
          </p>
          <h4 id={`supported-project-${index + 1}`} className="mt-3 text-[24px] font-semibold leading-[1.08] text-navy md:text-[34px]">
            {project.title}
          </h4>
          <p className="mt-4 text-base leading-8 text-ink/80">{project.summary}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="inline-flex w-fit max-w-full rounded-sm border border-navy/10 bg-navy/5 px-3 py-1 text-xs font-semibold leading-5 text-navy">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {primarySample ? (
          <WorkSampleButton sample={primarySample} label={labels.openSample} onImageOpen={onImageOpen} featured />
        ) : null}
      </div>

      <div className="mt-6 grid gap-5 lg:grid-cols-3">
        <EvidencePanel title={labels.scope} items={project.scope} iconType="scope" />
        <EvidencePanel title={labels.contributions} items={project.contributions} iconType="process" />
        <EvidencePanel title={labels.evidence} items={project.evidence} iconType="evidence" />
      </div>

      {project.details.length ? (
        <details className="mt-6 rounded-lg border border-navy/10 bg-[#f8fafc] p-4 md:p-5">
          <summary className="inline-flex cursor-pointer select-none items-center gap-2 text-sm font-bold uppercase tracking-[0.12em] text-navy-accent">
            {getBlockIcon("context", "h-4 w-4")}
            {labels.details}
          </summary>
          <div className="mt-6 grid gap-4">
            {project.details.map((detail, detailIndex) => (
              <StoryBlock key={detail.title} detail={detail} index={detailIndex} />
            ))}
          </div>
          {supportingSamples.length ? (
            <div className="mt-6 border-t border-navy/10 pt-6">
              <IconLabel title={labels.samples} iconType="supporting" className="mb-4" />
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {supportingSamples.map((sample) => (
                  <WorkSampleButton key={sample.src} sample={sample} label={labels.openSample} onImageOpen={onImageOpen} />
                ))}
              </div>
            </div>
          ) : null}
        </details>
      ) : null}
    </section>
  );
}

function EvidencePanel({ title, items, iconType }: { title: string; items: string[]; iconType: BlockIconType }) {
  return (
    <div className="rounded-lg border border-navy/10 bg-[#f8fafc] p-4">
      <IconLabel title={title} iconType={iconType} className="mb-4" />
      <ul className="grid gap-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-6 text-ink/80">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-navy" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function StoryBlock({
  detail,
  index,
}: {
  detail: SupportedProject["details"][number];
  index: number;
}) {
  const iconType = getStoryIconType(detail.title);

  return (
    <article className="grid gap-4 rounded-lg border border-navy/10 bg-white p-4 shadow-minimal md:grid-cols-[72px_minmax(0,1fr)] md:p-5">
      <div className="flex items-center gap-3 md:block">
        <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-navy/10 bg-navy text-sm font-bold text-cream">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="mt-3 hidden h-px w-full bg-navy/10 md:block" aria-hidden="true" />
      </div>
      <div className="min-w-0">
        <IconLabel title={detail.title} iconType={iconType} className="mb-3" />
        {detail.body ? <p className="text-sm leading-7 text-ink/78 md:text-base">{detail.body}</p> : null}
        {detail.items?.length ? (
          <ul className="mt-3 grid gap-2">
            {detail.items.map((item) => (
              <li key={item} className="flex gap-2 text-sm leading-6 text-ink/78 md:text-base md:leading-7">
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-navy-accent" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </article>
  );
}

function IconLabel({ title, iconType, className = "" }: { title: string; iconType: BlockIconType; className?: string }) {
  return (
    <p className={`detail-label inline-flex items-center gap-1.5 ${className}`}>
      {getBlockIcon(iconType)}
      {title}
    </p>
  );
}

function getStoryIconType(title: string): BlockIconType {
  const normalized = title.toLowerCase();

  if (normalized.includes("problem") || normalized.includes("vấn đề")) return "problem";
  if (normalized.includes("role") || normalized.includes("vai trò") || normalized.includes("context") || normalized.includes("bối cảnh")) return "context";
  if (normalized.includes("decision") || normalized.includes("tradeoff") || normalized.includes("quyết định") || normalized.includes("đánh đổi")) return "decisions";
  if (normalized.includes("process") || normalized.includes("action")) return "process";
  if (normalized.includes("impact") || normalized.includes("tác động")) return "impact";
  if (normalized.includes("learning") || normalized.includes("bài học")) return "outcome";
  if (normalized.includes("skill") || normalized.includes("năng lực")) return "skills";

  return "context";
}

function getBlockIcon(type: BlockIconType, customClass?: string) {
  const baseClass = customClass ?? "h-4 w-4 shrink-0";

  switch (type) {
    case "problem":
      return (
        <svg className={baseClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M4.93 19h14.14c1.54 0 2.5-1.67 1.73-3L13.73 4c-.77-1.33-2.69-1.33-3.46 0L3.2 16c-.77 1.33.19 3 1.73 3z" />
        </svg>
      );
    case "context":
      return (
        <svg className={baseClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 21a9 9 0 100-18 9 9 0 000 18z" />
        </svg>
      );
    case "decisions":
      return (
        <svg className={baseClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 8a3 3 0 100 6 3 3 0 000-6zm10 0a3 3 0 100 6 3 3 0 000-6zM10 11h4M4 11H2m20 0h-2" />
        </svg>
      );
    case "process":
      return (
        <svg className={baseClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h5M20 20v-5h-5M5 15a7 7 0 0012 4M19 9A7 7 0 007 5" />
        </svg>
      );
    case "impact":
      return (
        <svg className={baseClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 17l6-6 4 4 6-8m0 0h-5m5 0v5" />
        </svg>
      );
    case "outcome":
      return (
        <svg className={baseClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M12 3l7 4v5c0 4.5-2.9 7.8-7 9-4.1-1.2-7-4.5-7-9V7l7-4z" />
        </svg>
      );
    case "skills":
      return (
        <svg className={baseClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v3m6.36-.36l-2.12 2.12M21 12h-3M6 12H3m4.76-4.24L5.64 5.64M9 18h6m-5 3h4M8 14a5 5 0 118 0l-1.5 2h-5L8 14z" />
        </svg>
      );
    case "evidence":
      return (
        <svg className={baseClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M4 5h16v14H4z" />
        </svg>
      );
    case "supporting":
      return (
        <svg className={baseClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.17 7L8.59 13.59a2 2 0 102.82 2.82l6.42-6.58a4 4 0 10-5.66-5.66L5.76 10.76a6 6 0 108.48 8.48L20.5 13" />
        </svg>
      );
    case "scope":
      return (
        <svg className={baseClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h10M4 18h7" />
        </svg>
      );
    default:
      return null;
  }
}

function WorkSampleButton({
  sample,
  label,
  onImageOpen,
  featured = false,
}: {
  sample: AssetImage;
  label: string;
  onImageOpen: (image: AssetImage) => void;
  featured?: boolean;
}) {
  return (
    <button
      type="button"
      className="group overflow-hidden rounded-lg border border-navy/10 bg-[#080e24] text-left shadow-minimal transition duration-300 hover:-translate-y-0.5 hover:border-navy/30 hover:shadow-hover focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-2"
      aria-label={`${label}: ${sample.title}`}
      onClick={() => onImageOpen(sample)}
      onPointerEnter={() => preloadImage(sample.src)}
      onFocus={() => preloadImage(sample.src)}
    >
      <span className="artifact-window-bar !h-auto !min-h-10 !border-navy/10 !bg-cream px-3 py-2">
        <span className="flex items-center gap-1.5 shrink-0" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
        <span className="min-w-0 flex-1 break-words text-left text-[10px] font-bold uppercase leading-4 tracking-[0.08em] text-navy">
          {sample.title}
        </span>
      </span>
      <span className={`relative block overflow-hidden bg-[#f3f6f8] ${featured ? "aspect-[16/9]" : "aspect-[16/10]"}`}>
        <img
          src={sample.previewSrc ?? sample.src}
          alt={sample.alt}
          className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-[1.04]"
          loading="lazy"
          decoding="async"
        />
        <span className="pointer-events-none absolute inset-x-3 bottom-3 translate-y-2 rounded border border-cream/70 bg-navy/90 px-3 py-2 text-center text-xs font-semibold text-cream opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          {label}
        </span>
      </span>
      {sample.caption ? (
        <span className="block border-t border-cream/10 bg-[#080e24] px-3 py-2 text-xs font-semibold text-cream/75">
          {sample.caption}
        </span>
      ) : null}
    </button>
  );
}

export default ProfessionalExperience;
