import type { PortfolioContent } from "../data/portfolio";

type ProofStripProps = {
  proof: PortfolioContent["proof"];
};

function ProofStrip({ proof }: ProofStripProps) {
  return (
    <section className="section-padding bg-navy text-cream" aria-labelledby="proof-title">
      <div className="container-wide">
        <div className="grid gap-8 border-t border-cream/25 pt-8 lg:grid-cols-[0.32fr_0.68fr] lg:gap-12">
          <p className="section-kicker text-sky">{proof.eyebrow}</p>
          <h2 id="proof-title" className="max-w-5xl text-balance text-[40px] font-semibold leading-[1.03] md:text-[70px] lg:text-[86px]">
            {proof.title}
          </h2>
        </div>

        <dl className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-5">
          {proof.stats.map((stat, index) => (
            <div key={`${stat.value}-${stat.label}`} className="reveal-number border-t border-cream/20 pt-6" style={{ transitionDelay: `${index * 70}ms` }}>
              <dt className="text-sm font-semibold leading-6 text-cream/80">{stat.label}</dt>
              <dd className="mt-3 text-[68px] font-semibold leading-none text-sky md:text-[92px] lg:text-[104px]">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export default ProofStrip;
