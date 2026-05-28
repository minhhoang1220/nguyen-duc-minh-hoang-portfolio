import type { Experience } from "../data/portfolio";

type ExperienceCardProps = {
  experience: Experience;
  featured?: boolean;
};

function ExperienceCard({ experience, featured = false }: ExperienceCardProps) {
  return (
    <article className={`card-hover border border-line bg-card ${featured ? "p-6 md:p-8 lg:p-10" : "p-6 md:p-8"}`}>
      <div className={`mb-6 border-b border-line pb-6 ${featured ? "grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start" : ""}`}>
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-sm font-semibold text-navy">{experience.period}</p>
            {experience.featuredLabel ? (
              <span className="border border-navy bg-cream px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-navy">
                {experience.featuredLabel}
              </span>
            ) : null}
          </div>
          <h3 className={`${featured ? "mt-4 text-[34px] md:text-[48px]" : "mt-3 text-2xl"} font-semibold leading-tight text-navy`}>
            {experience.company}
          </h3>
          <p className={`${featured ? "mt-3 text-lg" : "mt-2 text-base"} font-medium text-ink`}>{experience.role}</p>
          <p className="mt-4 text-sm leading-6 text-muted md:text-base md:leading-7">{experience.context}</p>
        </div>
        {featured ? (
          <div>
            {experience.summary ? <p className="text-base leading-8 text-ink md:text-lg">{experience.summary}</p> : null}
            {experience.proof ? (
              <div className="mt-5 rounded-md border border-line bg-cream p-4">
                {experience.proofLabel ? (
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.08em] text-navy">{experience.proofLabel}</p>
                ) : null}
                <p className="text-sm leading-6 text-ink md:text-base md:leading-7">{experience.proof}</p>
              </div>
            ) : null}
            {experience.highlights ? (
              <dl className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
                {experience.highlights.map((highlight) => (
                  <div key={`${highlight.value}-${highlight.label}`} className="rounded-md border border-line bg-cream p-4">
                    <dt className="text-xs font-semibold uppercase tracking-[0.08em] text-muted">{highlight.label}</dt>
                    <dd className="mt-2 text-2xl font-semibold leading-none text-navy md:text-3xl">{highlight.value}</dd>
                  </div>
                ))}
              </dl>
            ) : null}
          </div>
        ) : null}
      </div>
      <ul className={`grid gap-4 ${featured ? "lg:grid-cols-3" : ""}`}>
        {experience.evidence.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-6 text-ink">
            <span className="mt-2 h-2 w-2 shrink-0 bg-navy" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default ExperienceCard;
