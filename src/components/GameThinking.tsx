import type { PortfolioContent } from "../data/portfolio";

type GameThinkingProps = {
  content: PortfolioContent["gameDirection"];
};

function GameThinking({ content }: GameThinkingProps) {
  const pillarGradients = [
    "from-[#0c244c] to-[#070d22] border-sky/15 hover:border-sky/45",
    "from-[#112d5e] to-[#070d22] border-sky/15 hover:border-sky/45",
    "from-[#163670] to-[#080e24] border-sky/15 hover:border-sky/45",
    "from-[#1c4082] to-[#080e24] border-sky/15 hover:border-sky/45",
  ];

  return (
    <section id="game-direction" className="section-padding bg-cream text-ink border-b border-line" aria-labelledby="game-direction-title">
      <div className="container-wide relative">
        <div className="grid gap-8 border-t border-navy/15 pt-8 lg:grid-cols-[0.22fr_0.78fr] lg:gap-12">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-navy-accent">{content.eyebrow}</p>
          <div>
            <h2 id="game-direction-title" className="max-w-5xl text-wrap-balance text-[34px] font-semibold leading-[1.05] text-navy md:text-[56px] lg:text-[72px]">
              {content.title}
            </h2>
            <p className="mt-7 lg:max-w-6xl xl:max-w-7xl text-base leading-8 text-ink/80 md:text-lg md:leading-9 text-wrap-pretty text-left">{content.body}</p>
          </div>
        </div>

        <div className="mt-12">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-navy-accent">{content.pillarsTitle}</p>
          <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {content.pillars.map((pillar, index) => {
              const bgClass = pillarGradients[index % pillarGradients.length];
              return (
                <article
                  key={pillar.title}
                  className={`game-pillar-card stagger-item h-full flex flex-col rounded-lg border bg-gradient-to-br ${bgClass} p-5 md:p-6 transition-all duration-150 hover:-translate-y-1 hover:shadow-glow-blue`}
                  style={{ transitionDelay: `${index * 70}ms` }}
                >
                  <span className="game-pillar-index inline-flex h-10 w-10 items-center justify-center rounded-md bg-sky text-[#080E24] text-sm font-extrabold shadow-sm">
                    0{index + 1}
                  </span>
                  <h3 className="mt-5 text-xl font-semibold leading-tight text-cream">{pillar.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-cream/85 flex-1">{pillar.body}</p>
                </article>
              );
            })}
          </div>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2 lg:items-stretch">
          <ListPanel title={content.genresTitle} items={content.genres} featured delay={0} />
          <ListPanel title={content.gamesTitle} items={content.games} delay={80} />
        </div>
      </div>
    </section>
  );
}

function renderChipIcon(item: string) {
  const lowercase = item.toLowerCase();

  // Crosshair icon for FPS shooters
  if (lowercase.includes("cs2") || lowercase.includes("pubg") || lowercase.includes("valorant") || lowercase.includes("fps") || lowercase.includes("shooter")) {
    return (
      <svg className="h-4 w-4 shrink-0 text-navy-accent group-hover:text-sky transition-colors duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
        <circle cx="12" cy="12" r="8" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v2M12 20v2M2 12h2M20 12h2" />
      </svg>
    );
  }

  // Trophy/Star icon for MOBA/Auto-Battlers
  if (lowercase.includes("legends") || lowercase.includes("valor") || lowercase.includes("moba") || lowercase.includes("tft") || lowercase.includes("tactics") || lowercase.includes("liên quân")) {
    return (
      <svg className="h-4 w-4 shrink-0 text-navy-accent group-hover:text-sky transition-colors duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l3 5 3-5M12 3v3" />
      </svg>
    );
  }

  // Shield/Key icon for Systems/Balance/LiveOps
  if (lowercase.includes("system") || lowercase.includes("progression") || lowercase.includes("economy") || lowercase.includes("liveops") || lowercase.includes("balance") || lowercase.includes("meta")) {
    return (
      <svg className="h-4 w-4 shrink-0 text-navy-accent group-hover:text-sky transition-colors duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    );
  }

  // Gaming controller default icon
  return (
    <svg className="h-4 w-4 shrink-0 text-navy-accent/65 group-hover:text-sky transition-colors duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
      <rect x="2" y="6" width="20" height="12" rx="3" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12h4M8 10v4M16 11h.01M18 13h.01" />
    </svg>
  );
}

function ListPanel({ title, items, featured = false, delay = 0 }: { title: string; items: string[]; featured?: boolean; delay?: number }) {
  return (
    <article
      className="stagger-item flex flex-col rounded-lg border border-line bg-[#f8fafc] p-6 md:p-8 hover:-translate-y-1 hover:border-navy/30 hover:shadow-hover transition duration-150 shadow-minimal"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <h3 className="text-2xl font-semibold text-navy">{title}</h3>
      <ul className={`mt-6 flex flex-1 flex-wrap items-start gap-3 ${featured ? "max-w-4xl" : ""}`}>
        {items.map((item, index) => (
          <li
            key={item}
            className="stagger-item w-fit max-w-full rounded-md border border-navy/20 bg-white px-4 py-3 text-sm font-bold text-navy transition-all duration-150 hover:border-navy hover:bg-navy hover:text-cream hover:-translate-y-0.5 shadow-sm group flex items-center gap-2"
            style={{ transitionDelay: `${delay + 120 + index * 45}ms` }}
          >
            {renderChipIcon(item)}
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default GameThinking;
