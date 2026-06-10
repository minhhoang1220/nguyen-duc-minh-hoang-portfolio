import type { PortfolioContent } from "../data/portfolio";

type WhyWorkWithMeProps = {
  content: PortfolioContent["whyWork"];
};

function WhyWorkWithMe({ content }: WhyWorkWithMeProps) {
  const cardThemes = [
    "bg-gradient-to-br from-cream to-[#f2f5f1] border-line hover:border-[#2e6d58]/40 hover:bg-[#eaf2ed]/60",
    "bg-gradient-to-br from-cream to-[#f0f4f8] border-line hover:border-[#1a2c6d]/40 hover:bg-[#e4effd]/60",
    "bg-gradient-to-br from-cream to-[#f4f3f8] border-line hover:border-[#521a6d]/40 hover:bg-[#efeafd]/60",
    "bg-gradient-to-br from-cream to-[#fcfaf4] border-line hover:border-[#6d561a]/40 hover:bg-[#fbf4e4]/60",
  ];

  return (
    <section className="section-padding bg-cream text-ink border-b border-line" aria-labelledby="why-work-title">
      <div className="container-wide">
        <div className="grid gap-8 border-t border-line pt-8 lg:grid-cols-[0.32fr_0.68fr] lg:gap-12">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-navy-accent">{content.eyebrow}</p>
          <div>
            <h2 id="why-work-title" className="section-title max-w-5xl text-navy m-0">
              {content.title}
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-8 text-muted md:text-lg">{content.description}</p>
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
                <div className="flex items-center gap-3 border-b border-line/20 pb-3 border-dashed">
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded bg-navy text-xs font-bold text-cream">
                    0{index + 1}
                  </span>
                  <h3 className="text-lg font-bold text-navy leading-tight">{pillar.title}</h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-ink/80">{pillar.body}</p>
              </div>
              {pillar.proof && (
                <div className="mt-6 border-t border-line/20 pt-4 border-dashed">
                  <p className="text-xs font-semibold uppercase tracking-[0.08em] text-navy-accent">Evidence</p>
                  <p className="mt-1.5 text-xs text-muted leading-relaxed font-medium">{pillar.proof}</p>
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
