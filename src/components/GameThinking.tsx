import type { PortfolioContent } from "../data/portfolio";

type GameThinkingProps = {
  content: PortfolioContent["gameDirection"];
};

function GameThinking({ content }: GameThinkingProps) {
  return (
    <section id="game-direction" className="section-game section-padding text-cream" aria-labelledby="game-direction-title">
      <div className="container-wide relative">
        <div className="grid gap-8 border-t border-cream/25 pt-8 lg:grid-cols-[0.32fr_0.68fr] lg:gap-12">
          <p className="section-kicker text-sky">{content.eyebrow}</p>
          <div>
            <h2 id="game-direction-title" className="game-direction-title max-w-5xl text-balance text-[34px] font-semibold leading-[1.05] text-cream md:text-[56px] lg:text-[72px]">
              {content.title}
            </h2>
            <p className="mt-7 max-w-3xl text-base leading-8 text-cream/78 md:text-lg md:leading-9">{content.body}</p>
          </div>
        </div>

        <div className="mt-12">
          <p className="section-kicker text-sky">{content.pillarsTitle}</p>
          <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {content.pillars.map((pillar, index) => (
              <article key={pillar.title} className="game-pillar-card stagger-item" style={{ transitionDelay: `${index * 70}ms` }}>
                <span className="game-pillar-index">0{index + 1}</span>
                <h3 className="mt-5 text-xl font-semibold leading-tight text-cream">{pillar.title}</h3>
                <p className="mt-4 text-sm leading-6 text-cream/74">{pillar.body}</p>
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
      className="stagger-item flex flex-col rounded-lg border border-cream/15 p-6 md:p-8"
      style={{ background: 'rgba(13, 22, 58, 0.65)', backdropFilter: 'blur(10px)', transitionDelay: `${delay}ms` }}
    >
      <h3 className="text-2xl font-semibold text-cream">{title}</h3>
      <ul className={`mt-6 flex flex-1 flex-wrap items-start gap-3 ${featured ? "max-w-4xl" : ""}`}>
        {items.map((item, index) => (
          <li
            key={item}
            className="stagger-item w-fit max-w-full rounded-md border border-cream/20 bg-cream/8 px-4 py-3 text-sm font-semibold text-cream/90 transition duration-300 hover:border-sky/40 hover:bg-[#1a2c6d]"
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
