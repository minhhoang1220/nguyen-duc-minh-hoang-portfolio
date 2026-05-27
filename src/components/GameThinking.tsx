import SectionHeader from "./SectionHeader";
import type { GameNote } from "../data/portfolio";

type GameThinkingProps = {
  description: string;
  notes: GameNote[];
};

function GameThinking({ description, notes }: GameThinkingProps) {
  return (
    <section id="game-thinking" className="section-padding bg-navy text-cream" aria-labelledby="game-thinking-title">
      <div className="container-main">
        <SectionHeader
          eyebrow="Game & Product Thinking"
          titleId="game-thinking-title"
          title="Game interest framed as product systems analysis."
          description={description}
          inverse
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {notes.map((note) => (
            <article key={note.title} className="border border-cream/20 bg-navy-night/35 p-6">
              <p className="mb-5 inline-flex border border-sky/40 px-3 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-sky">
                {note.label}
              </p>
              <h3 className="text-2xl font-semibold leading-tight text-cream">{note.title}</h3>
              <p className="mt-4 text-base leading-7 text-cream/80">{note.focus}</p>
              <div className="mt-6 grid grid-cols-[32px_1fr_32px] items-center gap-3" aria-hidden="true">
                <span className="h-8 border border-sky/60" />
                <span className="h-px bg-cream/30" />
                <span className="h-8 bg-sky/80" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GameThinking;
