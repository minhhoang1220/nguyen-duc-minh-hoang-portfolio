import type { PortfolioContent } from "../data/portfolio";

type GameThinkingProps = {
  content: PortfolioContent["gameDirection"];
};

function GameThinking({ content }: GameThinkingProps) {
  return (
    <section id="game-direction" className="section-padding bg-cream text-ink" aria-labelledby="game-direction-title">
      <div className="container-wide relative">
        <div className="grid gap-8 border-t border-navy/15 pt-8 lg:grid-cols-[0.32fr_0.68fr] lg:gap-12">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-navy-accent">{content.eyebrow}</p>
          <div>
            <h2 id="game-direction-title" className="max-w-5xl text-balance text-[34px] font-semibold leading-[1.05] text-navy md:text-[56px] lg:text-[72px]">
              {content.title}
            </h2>
            <p className="mt-7 max-w-3xl text-base leading-8 text-ink/80 md:text-lg md:leading-9">{content.body}</p>
          </div>
        </div>

        <div className="mt-12">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-navy-accent">{content.pillarsTitle}</p>
          <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {content.pillars.map((pillar, index) => (
              <article key={pillar.title} className="game-pillar-card stagger-item !border-line !bg-card !shadow-minimal hover:!shadow-hover hover:!border-navy/35 transition duration-300 p-5 md:p-6" style={{ transitionDelay: `${index * 70}ms` }}>
                <span className="game-pillar-index !border-navy/30 !text-navy">0{index + 1}</span>
                <h3 className="mt-5 text-xl font-semibold leading-tight text-navy">{pillar.title}</h3>
                <p className="mt-4 text-sm leading-6 text-muted">{pillar.body}</p>
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
            className="stagger-item w-fit max-w-full rounded-md border border-navy/15 bg-navy/5 px-4 py-3 text-sm font-semibold text-navy transition duration-300 hover:border-navy hover:bg-[#9dc4ff]/25 hover:-translate-y-0.5"
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
