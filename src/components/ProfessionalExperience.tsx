import type { AssetImage, PortfolioContent, SupportedProject } from "../data/portfolio";
import { preloadImage } from "../utils/preloadImage";
import SectionHeader from "./SectionHeader";

type ProfessionalExperienceProps = {
  content: PortfolioContent["professionalExperience"];
  openSampleLabel: string;
  onImageOpen: (image: AssetImage) => void;
};

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
          <div className="grid gap-8 border-b border-navy/10 pb-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <p className="text-sm font-bold text-navy-accent">{content.vega.period}</p>
                {content.vega.logo ? (
                  <img src={content.vega.logo} alt="" className="cred-logo-md shrink-0 object-contain" />
                ) : null}
              </div>
              <h3 className="mt-4 text-[30px] font-semibold leading-[1.06] text-navy md:text-[44px]">
                {content.vega.title}
              </h3>
            </div>
            <p className="text-base leading-8 text-ink/80 md:text-lg md:leading-9">
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
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-navy-accent">
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
        <EvidencePanel title={labels.scope} items={project.scope} />
        <EvidencePanel title={labels.contributions} items={project.contributions} />
        <EvidencePanel title={labels.evidence} items={project.evidence} />
      </div>

      {supportingSamples.length ? (
        <div className="mt-6">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.12em] text-navy-accent">{labels.samples}</p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {supportingSamples.map((sample) => (
              <WorkSampleButton key={sample.src} sample={sample} label={labels.openSample} onImageOpen={onImageOpen} />
            ))}
          </div>
        </div>
      ) : null}

      {project.details.length ? (
        <details className="mt-6 rounded-lg border border-navy/10 bg-[#f8fafc] p-4 md:p-5">
          <summary className="cursor-pointer select-none text-sm font-bold uppercase tracking-[0.12em] text-navy-accent">
            {labels.details}
          </summary>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {project.details.map((detail) => (
              <article key={detail.title} className="rounded-md border border-navy/10 bg-white p-4">
                <h5 className="text-base font-semibold leading-tight text-navy">{detail.title}</h5>
                {detail.body ? <p className="mt-3 text-sm leading-7 text-ink/78">{detail.body}</p> : null}
                {detail.items?.length ? (
                  <ul className="mt-3 grid gap-2">
                    {detail.items.map((item) => (
                      <li key={item} className="flex gap-2 text-sm leading-6 text-ink/78">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-navy-accent" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}
          </div>
        </details>
      ) : null}
    </section>
  );
}

function EvidencePanel({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-lg border border-navy/10 bg-[#f8fafc] p-4">
      <p className="detail-label mb-4">{title}</p>
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
