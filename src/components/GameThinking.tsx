import type { PortfolioContent } from "../data/portfolio";

type GameThinkingProps = {
  content: PortfolioContent["gameDirection"];
};

function GameThinking({ content }: GameThinkingProps) {
  return (
    <section id="game-direction" className="section-padding bg-card" aria-labelledby="game-direction-title">
      <div className="container-wide">
        <div className="grid gap-8 lg:grid-cols-[0.32fr_0.68fr] lg:gap-12">
          <p className="section-kicker text-navy">{content.eyebrow}</p>
          <div>
            <h2 id="game-direction-title" className="max-w-5xl text-balance text-[34px] font-semibold leading-[1.05] text-navy md:text-[56px] lg:text-[72px]">
              {content.title}
            </h2>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-muted md:text-xl md:leading-9">{content.body}</p>
          </div>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <ListPanel title={content.genresTitle} items={content.genres} />
          <ListPanel title={content.gamesTitle} items={content.games} />
        </div>
      </div>
    </section>
  );
}

function ListPanel({ title, items }: { title: string; items: string[] }) {
  return (
    <article className="border-y border-line py-6">
      <h3 className="text-2xl font-semibold text-navy">{title}</h3>
      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <li key={item} className="border border-line bg-cream px-4 py-3 text-sm font-semibold text-navy">
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default GameThinking;
