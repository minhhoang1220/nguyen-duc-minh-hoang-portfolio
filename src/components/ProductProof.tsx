import type { AssetImage, PortfolioContent } from "../data/portfolio";
import { preloadImage } from "../utils/preloadImage";

type ProductProofProps = {
  proof: PortfolioContent["projectProof"];
  titleId?: string;
  openArtifactLabel: string;
  onImageOpen: (image: AssetImage) => void;
};

function ProductProof({ proof, titleId, openArtifactLabel, onImageOpen }: ProductProofProps) {
  return (
    <div>
      <div className="grid gap-8 lg:grid-cols-[0.2fr_0.8fr] lg:gap-12">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-navy-accent">{proof.eyebrow}</p>
        <div>
          <h2 id={titleId} className="section-title max-w-none w-full text-navy text-balance">{proof.title}</h2>
          <p className="mt-6 max-w-none text-base leading-8 text-muted md:text-lg text-pretty">{proof.description}</p>
        </div>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {proof.images.map((image, index) => (
          <figure
            key={image.src}
            className="case-artifact-shell stagger-item group"
            style={{ transitionDelay: `${index * 70}ms` }}
          >
            <div className="artifact-window-bar">
              <span className="flex items-center gap-1.5" aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
              <span className="min-w-0 truncate text-[11px] font-semibold uppercase tracking-[0.08em] text-muted">{image.title}</span>
              {image.caption ? <span className="hidden min-w-0 truncate text-right text-[11px] font-semibold text-muted md:block">{image.caption}</span> : null}
            </div>
            <button
              type="button"
              className="block w-full text-left focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-4"
              aria-label={`${openArtifactLabel}: ${image.title}`}
              onClick={() => onImageOpen(image)}
              onPointerEnter={() => preloadImage(image.src)}
              onFocus={() => preloadImage(image.src)}
            >
              <span className="case-visual-frame relative block h-[360px] overflow-hidden bg-card md:h-[520px]">
                <img
                  src={image.previewSrc ?? image.src}
                  alt={image.alt}
                  className="h-full w-full object-contain bg-[#f3f6f8] transition duration-700 group-hover:scale-[1.04]"
                  loading="lazy"
                  decoding="async"
                />
                <span className="pointer-events-none absolute inset-x-4 bottom-4 translate-y-2 rounded border border-cream/70 bg-navy/90 px-3 py-2 text-xs font-semibold text-cream opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  {openArtifactLabel}
                </span>
                <span className="artifact-device-label">Desktop/browser work sample</span>
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
