import type { PortfolioContent } from "../data/portfolio";

type GameThinkingProps = {
  content: PortfolioContent["gameDirection"];
};

function GameThinking({ content }: GameThinkingProps) {
  return (
    <section id="game-direction" className="section-game section-padding text-cream" aria-labelledby="game-direction-title">
      <div className="container-wide">
        <div className="grid gap-8 border-t border-cream/25 pt-8 lg:grid-cols-[0.32fr_0.68fr] lg:gap-12">
          <p className="section-kicker text-sky">{content.eyebrow}</p>
          <div>
            <h2 id="game-direction-title" className="max-w-5xl text-balance text-[34px] font-semibold leading-[1.05] text-cream md:text-[56px] lg:text-[72px]">
              {content.title}
            </h2>
            <p className="mt-7 max-w-3xl text-base leading-8 text-cream/78 md:text-lg md:leading-9">{content.body}</p>
          </div>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.64fr_0.36fr]">
          <ListPanel title={content.genresTitle} items={content.genres} featured delay={0} />
          <ListPanel title={content.gamesTitle} items={content.games} delay={80} />
        </div>
      </div>
    </section>
  );
}

function ListPanel({ title, items, featured = false, delay = 0 }: { title: string; items: string[]; featured?: boolean; delay?: number }) {
  return (
    <article className="stagger-item rounded-lg border border-cream/20 bg-card p-6 shadow-minimal md:p-8" style={{ transitionDelay: `${delay}ms` }}>
      <h3 className="text-2xl font-semibold text-navy">{title}</h3>
      <ul className={`mt-6 flex flex-wrap items-start gap-3 ${featured ? "max-w-4xl" : ""}`}>
        {items.map((item, index) => (
          <li
            key={item}
            className="stagger-item w-fit max-w-full rounded-md border border-line bg-cream px-4 py-3 text-sm font-semibold text-navy"
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
