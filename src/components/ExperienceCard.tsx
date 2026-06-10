import type { Experience } from "../data/portfolio";

type ExperienceCardProps = {
  experience: Experience;
  featured?: boolean;
};

function ExperienceCard({ experience, featured = false }: ExperienceCardProps) {
  return (
    <article className={`card-hover border border-cream/15 bg-gradient-to-br from-[#0c1635] to-[#080e24] text-cream ${featured ? "p-6 md:p-8 lg:p-10" : "p-6 md:p-8"}`}>
      <div className={`mb-6 border-b border-cream/10 pb-6 ${featured ? "grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start" : ""}`}>
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-sm font-semibold text-sky/95">{experience.period}</p>
            {experience.featuredLabel ? (
              <span className="border border-sky/30 bg-[#162758] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-sky">
                {experience.featuredLabel}
              </span>
            ) : null}
          </div>
          <div className={`flex items-center gap-3 ${featured ? "mt-4" : "mt-3"}`}>
            <h3 className={`${featured ? "text-[34px] md:text-[48px]" : "text-2xl"} font-semibold leading-tight text-cream`}>
              {experience.company}
            </h3>
            {experience.logo && (
              <img src={experience.logo} alt="" className="h-6 w-auto object-contain shrink-0" />
            )}
          </div>
          <p className={`${featured ? "mt-3 text-lg" : "mt-2 text-base"} font-medium text-cream/90`}>{experience.role}</p>
          <p className="mt-4 text-sm leading-6 text-cream/75 md:text-base md:leading-7">{experience.context}</p>
        </div>
        {featured ? (
          <div>
            {experience.summary ? <p className="text-base leading-8 text-cream/80 md:text-lg">{experience.summary}</p> : null}
            {experience.proof ? (
              <div className="mt-5 rounded-md border border-navy/15 bg-cream p-4 text-navy">
                {experience.proofLabel ? (
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.08em] text-navy-accent">{experience.proofLabel}</p>
                ) : null}
                <p className="text-sm leading-6 text-ink md:text-base md:leading-7">{experience.proof}</p>
              </div>
            ) : null}
            {experience.highlights ? (
              <dl className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
                {experience.highlights.map((highlight) => (
                  <div key={`${highlight.value}-${highlight.label}`} className="rounded-md border border-navy/15 bg-cream p-4 text-navy">
                    <dt className="text-xs font-semibold uppercase tracking-[0.08em] text-navy-accent">{highlight.label}</dt>
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
          <li key={item} className="flex gap-3 text-sm leading-6 text-cream/85">
            <span className="mt-2 h-2 w-2 shrink-0 bg-sky" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default ExperienceCard;
