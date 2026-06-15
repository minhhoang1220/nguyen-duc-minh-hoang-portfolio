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
    <section id="experience" className="section-full section-padding text-cream" aria-labelledby="experience-title" style={{ background: "linear-gradient(180deg, #05140e 0%, #071f16 52%, #080e24 100%)" }}>
      <div className="container-wide">
        <SectionHeader
          eyebrow={content.eyebrow}
          titleId="experience-title"
          title={content.title}
          description={content.description}
          wide
          inverse
        />

        <article className="mt-10 rounded-lg border border-cream/15 bg-[#FCFBF8] p-5 text-navy shadow-minimal md:p-8 lg:p-10">
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
                  samples: content.sampleLabel,
                  openSample: openSampleLabel,
                }}
                onImageOpen={onImageOpen}
              />
            ))}
          </div>
        </article>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          {content.entries.map((entry) => (
            <article key={entry.title} className="rounded-lg border border-cream/15 bg-gradient-to-br from-[#0c1635] to-[#080e24] p-6 text-cream shadow-minimal md:p-8">
              <div className="flex items-start justify-between gap-4 border-b border-cream/10 pb-5">
                <div>
                  <h3 className="text-2xl font-semibold leading-tight text-cream">{entry.title}</h3>
                  <p className="mt-3 text-sm font-semibold leading-6 text-sky">{entry.focus}</p>
                </div>
                {entry.logo ? (
                  <span className="logo-dark-bg-wrapper shrink-0">
                    <img src={entry.logo} alt="" className="cred-logo-md" />
                  </span>
                ) : null}
              </div>
              <p className="mt-5 text-sm leading-7 text-cream/80 md:text-base md:leading-8">{entry.summary}</p>
            </article>
          ))}
        </div>

        {content.additionalNote ? (
          <p className="mt-6 max-w-5xl border-l-2 border-sky/50 pl-4 text-sm leading-7 text-cream/70">
            {content.additionalNote}
          </p>
        ) : null}
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
    samples: string;
    openSample: string;
  };
  onImageOpen: (image: AssetImage) => void;
}) {
  return (
    <section className="border-t border-navy/10 pt-7 first:border-t-0 first:pt-0" aria-labelledby={`supported-project-${index + 1}`}>
      <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr] xl:items-start">
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

        <div className="grid gap-5">
          <div className="rounded-lg border border-navy/10 bg-[#f8fafc] p-4">
            <p className="detail-label mb-4">{labels.scope}</p>
            <ul className="grid gap-3">
              {project.scope.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-ink/80 md:text-base md:leading-7">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-navy" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {project.samples.length ? (
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.12em] text-navy-accent">{labels.samples}</p>
              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {project.samples.map((sample) => (
                  <button
                    key={sample.src}
                    type="button"
                    className="group overflow-hidden rounded-lg border border-navy/10 bg-[#080e24] text-left shadow-minimal transition duration-300 hover:-translate-y-0.5 hover:border-navy/30 hover:shadow-hover focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-2"
                    aria-label={`${labels.openSample}: ${sample.title}`}
                    onClick={() => onImageOpen(sample)}
                    onPointerEnter={() => preloadImage(sample.src)}
                    onFocus={() => preloadImage(sample.src)}
                  >
                    <span className="artifact-window-bar !border-navy/10 !bg-cream px-3 py-2">
                      <span className="flex items-center gap-1.5" aria-hidden="true">
                        <span />
                        <span />
                        <span />
                      </span>
                      <span className="min-w-0 truncate text-[10px] font-bold uppercase tracking-[0.08em] text-navy">{sample.title}</span>
                    </span>
                    <span className="relative block aspect-[16/10] overflow-hidden bg-[#f3f6f8]">
                      <img
                        src={sample.previewSrc ?? sample.src}
                        alt={sample.alt}
                        className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-[1.04]"
                        loading="lazy"
                        decoding="async"
                      />
                      <span className="pointer-events-none absolute inset-x-3 bottom-3 translate-y-2 rounded border border-cream/70 bg-navy/90 px-3 py-2 text-center text-xs font-semibold text-cream opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        {labels.openSample}
                      </span>
                    </span>
                    {sample.caption ? (
                      <span className="block border-t border-cream/10 bg-[#080e24] px-3 py-2 text-xs font-semibold text-cream/75">
                        {sample.caption}
                      </span>
                    ) : null}
                  </button>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export default ProfessionalExperience;
