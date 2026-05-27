import type { PortfolioContent } from "../data/portfolio";

type ProductProofProps = {
  proof: PortfolioContent["projectProof"];
};

function ProductProof({ proof }: ProductProofProps) {
  return (
    <div className="mt-10 grid gap-6 border border-line bg-cream p-5 md:p-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-navy">{proof.eyebrow}</p>
        <h3 className="text-balance text-2xl font-semibold leading-tight text-navy md:text-3xl">{proof.title}</h3>
        <p className="mt-4 text-sm leading-6 text-muted md:text-base md:leading-7">{proof.description}</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {proof.images.map((image) => (
          <figure key={image.src} className="border border-line bg-card p-3">
            <div className="h-52 bg-cream md:h-56">
              <img src={image.src} alt={image.alt} className="h-full w-full object-contain" loading="lazy" decoding="async" />
            </div>
            <figcaption className="mt-3">
              <p className="text-sm font-semibold text-navy">{image.title}</p>
              {image.caption ? <p className="mt-1 text-xs font-medium text-muted">{image.caption}</p> : null}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

export default ProductProof;
