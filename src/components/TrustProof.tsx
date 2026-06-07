import type { PortfolioContent } from "../data/portfolio";

type TrustProofProps = {
  content: PortfolioContent["socialProof"];
};

function TrustProof({ content }: TrustProofProps) {
  return (
    <section className="section-trust section-padding" aria-labelledby="trust-proof-title">
      <div className="container-wide">
        <div className="grid gap-8 border-t border-line pt-8 lg:grid-cols-[0.32fr_0.68fr] lg:gap-12">
          <p className="section-kicker text-navy">{content.eyebrow}</p>
          <div>
            <h2 id="trust-proof-title" className="max-w-5xl text-balance text-[34px] font-semibold leading-[1.05] text-navy md:text-[56px] lg:text-[72px]">
              {content.title}
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-8 text-muted md:text-lg">{content.description}</p>
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {content.cards.map((card, index) => (
            <article key={card.title} className="trust-card stagger-item" style={{ transitionDelay: `${index * 80}ms` }}>
              <p className="trust-card-label">{card.label}</p>
              <h3 className="mt-5 text-2xl font-semibold leading-tight text-navy">{card.title}</h3>
              <p className="mt-4 text-sm leading-6 text-ink md:text-base md:leading-7">{card.body}</p>
              <ul className="mt-6 space-y-3">
                {card.evidence.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6 text-muted">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-navy" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrustProof;
