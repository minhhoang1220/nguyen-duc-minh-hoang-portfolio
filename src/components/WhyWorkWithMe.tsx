import type { PortfolioContent } from "../data/portfolio";

type WhyWorkWithMeProps = {
  content: PortfolioContent["whyWork"];
};

function WhyWorkWithMe({ content }: WhyWorkWithMeProps) {
  const cardThemes = [
    "bg-gradient-to-br from-[#0c1a30] to-[#080e24] border-cream/15 text-cream hover:border-sky/40 hover:bg-[#0e2242] shadow-minimal hover:shadow-glow-blue",
    "bg-gradient-to-br from-[#0a162b] to-[#080e24] border-cream/15 text-cream hover:border-sky/40 hover:bg-[#0d203f] shadow-minimal hover:shadow-glow-blue",
    "bg-gradient-to-br from-[#0c1735] to-[#080e24] border-cream/15 text-cream hover:border-sky/40 hover:bg-[#11234b] shadow-minimal hover:shadow-glow-blue",
    "bg-gradient-to-br from-[#08152e] to-[#080e24] border-cream/15 text-cream hover:border-sky/40 hover:bg-[#0b2148] shadow-minimal hover:shadow-glow-blue",
  ];

  return (
    <section className="section-padding bg-cream text-ink border-b border-line" aria-labelledby="why-work-title">
      <div className="container-wide">
        <div className="grid gap-8 border-t border-line pt-8 lg:grid-cols-[140px_1fr] lg:gap-12">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-navy-accent">{content.eyebrow}</p>
          <div>
            <h2 id="why-work-title" className="section-title max-w-none w-full text-navy m-0 !text-wrap">
              {content.title}
            </h2>
            <p className="mt-6 text-base leading-8 text-muted md:text-lg !text-wrap max-w-none">{content.description}</p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {content.pillars.map((pillar, index) => (
            <article
              key={pillar.title}
              className={`stagger-item flex flex-col justify-between rounded-lg border p-6 md:p-8 shadow-minimal transition-all duration-300 hover:-translate-y-1 hover:shadow-hover ${cardThemes[index % cardThemes.length]}`}
              style={{ transitionDelay: `${index * 70}ms` }}
            >
              <div>
                <div className="flex items-center gap-3 border-b border-cream/10 pb-3 border-dashed">
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded bg-sky text-xs font-bold text-[#080E24]">
                    0{index + 1}
                  </span>
                  <h3 className="text-lg font-bold text-cream leading-tight">{pillar.title}</h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-cream/80">{pillar.body}</p>
              </div>
              {pillar.proof && (
                <div className="mt-6 border-t border-cream/10 pt-4 border-dashed">
                  <p className="text-xs font-semibold uppercase tracking-[0.08em] text-sky">Evidence</p>
                  <p className="mt-1.5 text-xs text-cream/70 leading-relaxed font-medium">{pillar.proof}</p>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyWorkWithMe;
