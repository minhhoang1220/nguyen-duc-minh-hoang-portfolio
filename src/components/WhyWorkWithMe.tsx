import type { PortfolioContent } from "../data/portfolio";

type WhyWorkWithMeProps = {
  content: PortfolioContent["whyWork"];
};

function WhyWorkWithMe({ content }: WhyWorkWithMeProps) {
  const cardThemes = [
    "bg-gradient-to-br from-[#0c1a30] to-[#071f16]",
    "bg-gradient-to-br from-[#0a162b] to-[#080e24]",
    "bg-gradient-to-br from-[#071f16] to-[#0c1735]",
  ];

  return (
    <section id="value" className="section-padding text-cream border-y border-cream/10" aria-labelledby="why-work-title" style={{ background: "linear-gradient(180deg, #080e24 0%, #071f16 100%)" }}>
      <div className="container-wide">
        <div className="grid gap-8 border-t border-cream/10 pt-8 lg:grid-cols-[140px_1fr] lg:gap-12">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-sky">{content.eyebrow}</p>
          <div>
            <h2 id="why-work-title" className="section-title max-w-none w-full text-cream m-0 !text-wrap">
              {content.title}
            </h2>
            <p className="mt-6 max-w-5xl text-base leading-8 text-cream/78 md:text-lg !text-wrap">{content.description}</p>
          </div>
        </div>

        <div className="mt-10 grid gap-5 lg:ml-[calc(140px+3rem)] xl:max-w-5xl">
          {content.pillars.map((pillar, index) => (
            <article
              key={pillar.title}
              className={`stagger-item grid gap-5 rounded-lg border border-cream/15 p-6 text-cream shadow-minimal transition-all duration-300 hover:-translate-y-1 hover:border-sky/40 hover:shadow-glow-blue md:grid-cols-[170px_1fr] md:p-7 ${cardThemes[index % cardThemes.length]}`}
              style={{ transitionDelay: `${index * 70}ms` }}
            >
              <div className="flex items-start gap-4 md:block">
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded bg-sky text-xs font-bold text-[#080E24] md:h-11 md:w-11">
                  0{index + 1}
                </span>
                <h3 className="text-lg font-bold text-cream leading-tight md:mt-5">{pillar.title}</h3>
              </div>
              <div className="min-w-0">
                <p className="mt-4 text-sm leading-relaxed text-cream/80">{pillar.body}</p>
                {pillar.proof && (
                  <div className="mt-5 border-t border-cream/10 pt-4 border-dashed">
                    <p className="text-xs font-semibold uppercase tracking-[0.08em] text-sky">{content.proofLabel}</p>
                    <p className="mt-1.5 text-xs text-cream/70 leading-relaxed font-medium">{pillar.proof}</p>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyWorkWithMe;
