type ProofStripProps = {
  items: string[];
};

function ProofStrip({ items }: ProofStripProps) {
  return (
    <section className="border-y border-line bg-card py-10 md:py-12" aria-labelledby="proof-title">
      <div className="container-main grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-navy">Proof Points</p>
          <h2 id="proof-title" className="text-balance text-3xl font-semibold leading-tight text-navy md:text-[40px]">
            Measured artifacts, not abstract traits.
          </h2>
        </div>
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-5">
          {items.map((item) => (
            <li key={item} className="border border-line bg-cream px-4 py-3 text-sm font-semibold text-navy">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ProofStrip;
