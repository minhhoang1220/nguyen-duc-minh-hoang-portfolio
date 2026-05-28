import type { AssetImage, PortfolioContent } from "../data/portfolio";

type ProductProofProps = {
  proof: PortfolioContent["projectProof"];
  openArtifactLabel: string;
  onImageOpen: (image: AssetImage) => void;
};

function ProductProof({ proof, openArtifactLabel, onImageOpen }: ProductProofProps) {
  return (
    <div className="mt-12">
      <div className="grid gap-8 lg:grid-cols-[0.32fr_0.68fr] lg:gap-12">
        <p className="section-kicker text-navy">{proof.eyebrow}</p>
        <div>
          <h3 className="max-w-5xl text-balance text-[34px] font-semibold leading-[1.05] text-navy md:text-[56px] lg:text-[72px]">{proof.title}</h3>
          <p className="mt-6 max-w-3xl text-base leading-8 text-muted md:text-lg">{proof.description}</p>
        </div>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {proof.images.map((image) => (
          <figure key={image.src} className="group rounded-lg border border-line bg-cream p-3 transition duration-300 hover:-translate-y-1 hover:border-navy/40">
            <button
              type="button"
              className="block w-full text-left focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-4"
              aria-label={`${openArtifactLabel}: ${image.title}`}
              onClick={() => onImageOpen(image)}
            >
              <span className="relative block h-[360px] overflow-hidden rounded-md bg-card md:h-[520px]">
                <img
                  src={image.previewSrc ?? image.src}
                  alt={image.alt}
                  className="h-full w-full object-contain transition duration-500 group-hover:scale-[1.015]"
                  loading="lazy"
                  decoding="async"
                />
                <span className="pointer-events-none absolute inset-x-4 bottom-4 translate-y-2 rounded border border-cream/70 bg-navy/90 px-3 py-2 text-xs font-semibold text-cream opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  {openArtifactLabel}
                </span>
              </span>
            </button>
            <figcaption className="mt-4 flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
              <span className="text-base font-semibold text-navy">{image.title}</span>
              {image.caption ? <span className="text-sm font-medium text-muted">{image.caption}</span> : null}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

export default ProductProof;
