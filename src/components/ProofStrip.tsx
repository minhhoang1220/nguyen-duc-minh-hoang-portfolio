type ProofStripProps = {
  items: string[];
};

function ProofStrip({ items }: ProofStripProps) {
  return (
    <section className="border-y border-line bg-card py-6" aria-label="Portfolio proof points">
      <div className="container-main">
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
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
