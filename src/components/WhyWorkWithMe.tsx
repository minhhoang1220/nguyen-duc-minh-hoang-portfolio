import type { PortfolioContent } from "../data/portfolio";

type WhyWorkWithMeProps = {
  content: PortfolioContent["whyWork"];
};

function WhyWorkWithMe({ content }: WhyWorkWithMeProps) {
  return (
    <section className="section-why-work section-padding" aria-labelledby="why-work-title">
      <div className="container-wide">
        <div className="grid gap-8 border-t border-line pt-8 lg:grid-cols-[0.32fr_0.68fr] lg:gap-12">
          <p className="section-kicker text-navy">{content.eyebrow}</p>
          <div>
            <h2 id="why-work-title" className="max-w-5xl text-balance text-[34px] font-semibold leading-[1.05] text-navy md:text-[54px] lg:text-[68px]">
              {content.title}
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-8 text-muted md:text-lg">{content.description}</p>
          </div>
        </div>

        <div className="why-work-grid mt-12">
          {content.pillars.map((pillar, index) => (
            <article key={pillar.title} className="why-work-card stagger-item" style={{ transitionDelay: `${index * 70}ms` }}>
              <span className="why-work-index" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="min-w-0">
                <h3 className="text-2xl font-semibold leading-tight text-navy">{pillar.title}</h3>
                <p className="mt-4 text-sm leading-6 text-ink md:text-base md:leading-7">{pillar.body}</p>
                <p className="why-work-proof mt-5">{pillar.proof}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyWorkWithMe;
