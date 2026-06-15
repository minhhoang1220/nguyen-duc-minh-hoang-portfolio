import type { PortfolioContent } from "../data/portfolio";
import SectionHeader from "./SectionHeader";

type AdditionalExperienceProps = {
  content: PortfolioContent["additionalExperience"];
  entries: PortfolioContent["professionalExperience"]["entries"];
};

function AdditionalExperience({ content, entries }: AdditionalExperienceProps) {
  return (
    <section className="section-full section-padding text-cream" aria-labelledby="additional-experience-title" style={{ background: "linear-gradient(180deg, #071f16 0%, #08152e 100%)" }}>
      <div className="container-wide">
        <SectionHeader
          eyebrow={content.eyebrow}
          titleId="additional-experience-title"
          title={content.title}
          description={content.description}
          wide
          inverse
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {entries.map((entry) => (
            <article key={entry.title} className="rounded-lg border border-cream/15 bg-cream/5 p-6 text-cream shadow-minimal md:p-7">
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
              <p className="mt-5 text-sm leading-7 text-cream/78 md:text-base md:leading-8">{entry.summary}</p>
            </article>
          ))}
        </div>

        <aside className="mt-6 rounded-lg border border-sky/25 bg-sky/10 p-5 text-cream md:p-6">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-sky">{content.noteTitle}</p>
          <p className="mt-3 max-w-5xl text-sm leading-7 text-cream/78 md:text-base md:leading-8">{content.note}</p>
        </aside>
      </div>
    </section>
  );
}

export default AdditionalExperience;
