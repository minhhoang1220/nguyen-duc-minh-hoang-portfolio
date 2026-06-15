import type { PortfolioContent } from "../data/portfolio";

type ToolsStripProps = {
  content: PortfolioContent["tools"];
};

function ToolsStrip({ content }: ToolsStripProps) {
  return (
    <section className="section-tools bg-cream px-0 pb-14 text-ink md:pb-16 lg:pb-20" aria-labelledby="tools-title">
      <div className="container-wide">
        <div className="grid gap-6 border-t border-line pt-7 lg:grid-cols-[180px_1fr] lg:gap-12">
          <p className="section-kicker text-navy">{content.eyebrow}</p>
          <div>
            <h2 id="tools-title" className="text-[28px] font-semibold leading-[1.08] text-navy md:text-[40px]">
              {content.title}
            </h2>
            {content.description ? (
              <p className="mt-4 max-w-4xl text-base leading-7 text-muted md:text-lg">
                {content.description}
              </p>
            ) : null}
          </div>
        </div>

        <ul className="mt-7 flex flex-wrap gap-3" aria-label={content.title}>
          {content.items.map((tool) => (
            <li
              key={tool}
              className="inline-flex min-h-10 items-center rounded-md border border-navy/10 bg-[#FCFBF8] px-4 py-2 text-sm font-semibold text-navy shadow-minimal transition duration-200 hover:-translate-y-0.5 hover:border-navy/30 hover:bg-white"
            >
              {tool}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ToolsStrip;
