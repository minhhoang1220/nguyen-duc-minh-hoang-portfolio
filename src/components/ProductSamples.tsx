import type { PortfolioContent } from "../data/portfolio";
import SectionHeader from "./SectionHeader";

type ProductSamplesProps = {
  content: PortfolioContent["productNotes"];
};

function ProductSamples({ content }: ProductSamplesProps) {
  return (
    <section id="product-samples" className="section-padding bg-cream text-ink border-b border-line" aria-labelledby="product-samples-title">
      <div className="container-wide">
        <SectionHeader
          eyebrow={content.eyebrow}
          titleId="product-samples-title"
          title={content.title}
          description={content.description}
          wide
        />

        <article className="mt-9 grid gap-7 rounded-lg border border-line bg-card p-5 shadow-minimal md:grid-cols-[0.34fr_0.66fr] md:p-7 hover:-translate-y-1 hover:border-navy/30 hover:shadow-hover transition duration-300">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-navy-accent">{content.noteLabel}</p>
            <p className="mt-7 inline-flex rounded border border-navy px-4 py-2 text-sm font-semibold text-navy">
              {content.availability}
            </p>
          </div>
          <div>
            <h3 className="text-balance text-[28px] font-semibold leading-[1.08] text-navy md:text-[38px] text-wrap">
              {content.noteTitle}
            </h3>
            <p className="mt-6 max-w-3xl text-base leading-8 text-muted md:text-lg text-pretty text-justify md:text-left">{content.notePreview}</p>
          </div>
        </article>
      </div>
    </section>
  );
}

export default ProductSamples;
