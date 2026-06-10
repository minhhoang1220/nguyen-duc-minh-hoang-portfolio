import type { PortfolioContent } from "../data/portfolio";

type WhyWorkWithMeProps = {
  content: PortfolioContent["whyWork"];
};

function WhyWorkWithMe({ content }: WhyWorkWithMeProps) {
  const [leadPillar, ...supportPillars] = content.pillars;

  return (
    <section className="section-why-work section-padding" aria-labelledby="why-work-title">
      <div className="container-wide">
        <div className="grid gap-8 border-t border-line pt-8 lg:grid-cols-[0.32fr_0.68fr] lg:gap-12">
          <p className="section-kicker text-navy">{content.eyebrow}</p>
          <div>
            <h2 id="why-work-title" className="section-title max-w-5xl text-navy">
              {content.title}
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-8 text-muted md:text-lg">{content.description}</p>
          </div>
        </div>

        <div className="why-work-editorial mt-10">
          {leadPillar ? (
            <article className="why-work-lead stagger-item">
              <span className="why-work-index" aria-hidden="true">
                01
              </span>
              <div>
                <h3>{leadPillar.title}</h3>
                <p>{leadPillar.body}</p>
                <p className="why-work-proof">{leadPillar.proof}</p>
              </div>
            </article>
          ) : null}

          <div className="why-work-list">
            {supportPillars.map((pillar, index) => (
              <article key={pillar.title} className="why-work-row stagger-item" style={{ transitionDelay: `${(index + 1) * 70}ms` }}>
                <span className="why-work-index" aria-hidden="true">
                  {String(index + 2).padStart(2, "0")}
                </span>
                <div className="min-w-0">
                  <h3>{pillar.title}</h3>
                  <p>{pillar.body}</p>
                  <p className="why-work-proof">{pillar.proof}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyWorkWithMe;
