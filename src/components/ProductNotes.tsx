import type { PortfolioContent } from "../data/portfolio";
import SectionHeader from "./SectionHeader";

type ProductNotesProps = {
  content: PortfolioContent["productNotes"];
};

function ProductNotes({ content }: ProductNotesProps) {
  return (
    <section id="product-notes" className="section-padding bg-card" aria-labelledby="product-notes-title">
      <div className="container-wide">
        <SectionHeader
          eyebrow={content.eyebrow}
          titleId="product-notes-title"
          title={content.title}
          description={content.description}
          wide
        />

        <article className="mt-12 grid gap-8 rounded-lg border border-line bg-cream p-6 md:grid-cols-[0.34fr_0.66fr] md:p-8 lg:p-10">
          <div>
            <p className="section-kicker text-navy">{content.noteLabel}</p>
            <p className="mt-8 inline-flex rounded border border-navy px-4 py-2 text-sm font-semibold text-navy">
              {content.availability}
            </p>
          </div>
          <div>
            <h3 className="text-balance text-[30px] font-semibold leading-[1.08] text-navy md:text-[46px]">
              {content.noteTitle}
            </h3>
            <p className="mt-6 max-w-3xl text-base leading-8 text-muted md:text-lg">{content.notePreview}</p>
          </div>
        </article>
      </div>
    </section>
  );
}

export default ProductNotes;
