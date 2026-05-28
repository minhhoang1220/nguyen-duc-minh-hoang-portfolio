import type { PortfolioContent } from "../data/portfolio";

type AboutProps = {
  content: PortfolioContent["about"];
};

function About({ content }: AboutProps) {
  return (
    <section id="about" className="section-padding bg-cream" aria-labelledby="about-title">
      <div className="container-wide">
        <div className="grid gap-10 lg:grid-cols-[0.32fr_0.68fr] lg:gap-12">
          <div>
            <p className="section-kicker text-navy">{content.eyebrow}</p>
          </div>
          <div>
            <h2
              id="about-title"
              className="max-w-5xl text-balance text-[36px] font-semibold leading-[1.04] text-navy sm:text-[42px] md:text-[64px] lg:text-[76px]"
            >
              {content.title}
            </h2>
            <p className="mt-8 max-w-3xl text-lg leading-8 text-muted md:text-xl md:leading-9">{content.body}</p>
          </div>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.38fr_0.62fr] lg:items-stretch">
          <aside className="relative overflow-hidden border border-line bg-card p-6 md:p-8" aria-label={content.abstractCard.eyebrow}>
            <p className="section-kicker text-navy">{content.abstractCard.eyebrow}</p>
            <div className="mt-7 grid grid-cols-4 gap-2" aria-hidden="true">
              {Array.from({ length: 8 }).map((_, index) => (
                <span key={index} className={`h-7 border border-line ${index % 3 === 0 ? "bg-sky/55" : "bg-cream"}`} />
              ))}
            </div>
            <h3 className="mt-8 max-w-sm break-words text-[34px] font-semibold leading-[1.04] text-navy sm:text-[40px] md:text-[52px]">
              {content.abstractCard.title}
            </h3>
            <div className="mt-10 grid gap-2">
              {content.abstractCard.lines.map((line) => (
                <span key={line} className="border-t border-line pt-3 text-sm font-semibold text-muted">
                  {line}
                </span>
              ))}
            </div>
            <div className="mt-10 border border-line bg-cream p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-navy">{content.educationLabel}</p>
              <p className="mt-3 text-base font-semibold leading-6 text-navy">{content.education.school}</p>
              <p className="mt-3 text-sm font-medium text-ink">{content.education.degree}</p>
              <p className="mt-1 text-sm text-muted">{content.education.period}</p>
            </div>
          </aside>

          <div className="grid gap-0 border-y border-line">
            {content.points.map((point, index) => (
              <article key={point.title} className="grid gap-5 border-b border-line py-8 last:border-b-0 md:grid-cols-[120px_1fr]">
                <p className="text-[48px] font-semibold leading-none text-navy/20 md:text-[72px]">{String(index + 1).padStart(2, "0")}</p>
                <div>
                  <h3 className="text-2xl font-semibold leading-tight text-navy md:text-3xl">{point.title}</h3>
                  <p className="mt-4 max-w-2xl text-base leading-8 text-muted md:text-lg">{point.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
