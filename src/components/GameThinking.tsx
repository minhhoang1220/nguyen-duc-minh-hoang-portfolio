import type { PortfolioContent } from "../data/portfolio";

type GameThinkingProps = {
  content: PortfolioContent["gameDirection"];
};

function GameThinking({ content }: GameThinkingProps) {
  return (
    <section id="game-direction" className="section-padding bg-cream text-ink" aria-labelledby="game-direction-title">
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
            {content.pillars.map((pillar, index) => (
              <article
                key={pillar.title}
                className="game-pillar-card stagger-item h-full flex flex-col rounded-lg border border-cream/15 bg-gradient-to-br from-[#0c1635] to-[#080e24] p-5 md:p-6 transition duration-300 hover:-translate-y-1 hover:border-sky/40 hover:shadow-glow-blue"
                style={{ transitionDelay: `${index * 70}ms` }}
              >
                <span className="game-pillar-index inline-flex h-10 w-10 items-center justify-center rounded-md border border-sky/30 bg-[#162758] text-sm font-bold text-sky">0{index + 1}</span>
                <h3 className="mt-5 text-xl font-semibold leading-tight text-cream">{pillar.title}</h3>
                <p className="mt-4 text-sm leading-6 text-cream/70 flex-1">{pillar.body}</p>
              </article>
            ))}
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

function ListPanel({ title, items, featured = false, delay = 0 }: { title: string; items: string[]; featured?: boolean; delay?: number }) {
  return (
    <article
      className="stagger-item flex flex-col rounded-lg border border-line bg-[#f8fafc] p-6 md:p-8 hover:-translate-y-1 hover:border-navy/30 hover:shadow-hover transition duration-300 shadow-minimal"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <h3 className="text-2xl font-semibold text-navy">{title}</h3>
      <ul className={`mt-6 flex flex-1 flex-wrap items-start gap-3 ${featured ? "max-w-4xl" : ""}`}>
        {items.map((item, index) => (
          <li
            key={item}
            className="stagger-item w-fit max-w-full rounded-md border border-navy/35 bg-white px-4 py-3 text-sm font-bold text-navy transition duration-300 hover:border-navy hover:bg-navy hover:text-cream hover:-translate-y-0.5 shadow-sm"
            style={{ transitionDelay: `${delay + 120 + index * 45}ms` }}
          >
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default GameThinking;
