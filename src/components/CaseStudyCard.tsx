import { useId, useState } from "react";
import type { CaseStudy, PortfolioContent } from "../data/portfolio";

type CaseStudyCardProps = {
  caseStudy: CaseStudy;
  labels: PortfolioContent["caseStudyLabels"];
};

function CaseStudyCard({ caseStudy, labels }: CaseStudyCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const detailId = useId();
  const rows = [
    [labels.context, caseStudy.context],
    [labels.problem, caseStudy.problem],
    [labels.role, caseStudy.role],
    [labels.impact, caseStudy.impact],
  ];

  return (
    <article className="card-hover flex h-full min-w-0 flex-col border border-line bg-card p-6 md:p-8">
      <div className="mb-6">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.08em] text-muted">{labels.eyebrow}</p>
        <h3 className="text-2xl font-semibold leading-tight text-navy">{caseStudy.title}</h3>
      </div>

      <ArtifactPreview caseStudy={caseStudy} labels={labels} />

      <div className="mt-7 space-y-5">
        {rows.map(([label, value]) => (
          <div key={label}>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.08em] text-navy">{label}</p>
            <p className="text-sm leading-6 text-ink">{value}</p>
          </div>
        ))}
      </div>

      <div id={detailId} className={`${isExpanded ? "grid" : "hidden"} mt-6 gap-5 border-t border-line pt-6`}>
        {caseStudy.detailPreview ? <ImagePreview image={caseStudy.detailPreview} label={labels.sanitized} detail /> : null}
        <DetailList title={labels.process} items={caseStudy.process} />
        <DetailList title={labels.deliveredArtifacts} items={caseStudy.artifacts} />
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.08em] text-navy">{labels.delivered}</p>
          <p className="text-sm leading-6 text-ink">{caseStudy.delivered}</p>
        </div>
      </div>

      <div className="mt-7">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.08em] text-navy">{labels.skills}</p>
        <div className="flex flex-wrap gap-2">
          {caseStudy.skills.map((skill) => (
            <span key={skill} className="badge">
              {skill}
            </span>
          ))}
        </div>
      </div>

      <button
        type="button"
        className="mt-8 min-h-11 border border-navy px-5 text-left text-sm font-semibold text-navy transition duration-300 hover:-translate-y-px hover:bg-navy hover:text-cream focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-4"
        aria-controls={detailId}
        aria-expanded={isExpanded}
        onClick={() => setIsExpanded((current) => !current)}
      >
        {isExpanded ? labels.hideSummary : labels.viewSummary}
      </button>
    </article>
  );
}

function DetailList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.08em] text-navy">{title}</p>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-6 text-ink">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-navy" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ArtifactPreview({ caseStudy, labels }: { caseStudy: CaseStudy; labels: PortfolioContent["caseStudyLabels"] }) {
  if (caseStudy.mainPreview) {
    return <ImagePreview image={caseStudy.mainPreview} label={labels.sanitized} />;
  }

  if (caseStudy.preview === "matrix") {
    return (
      <div className="artifact-preview">
        <div className="mb-4 flex items-center justify-between">
          <span className="artifact-label">{labels.matrixTitle}</span>
          <span className="text-[11px] font-semibold text-muted">{labels.sanitized}</span>
        </div>
        <div className="grid grid-cols-[1.2fr_repeat(5,1fr)] gap-px bg-line text-[10px] font-semibold text-muted">
          {labels.matrixColumns.map((label) => (
            <span key={label} className="bg-cream px-2 py-2 text-navy">
              {label}
            </span>
          ))}
          {Array.from({ length: 24 }).map((_, index) => (
            <span
              key={index}
              className={`h-7 bg-card ${index % 5 === 0 ? "bg-cream" : ""} ${index % 7 === 0 ? "bg-sky/70" : ""}`}
            />
          ))}
        </div>
      </div>
    );
  }

  return null;
}

function ImagePreview({ image, label, detail = false }: { image: NonNullable<CaseStudy["mainPreview"]>; label: string; detail?: boolean }) {
  return (
    <figure className="artifact-preview">
      <div className="mb-4 flex items-center justify-between gap-3">
        <figcaption className="artifact-label">{image.title}</figcaption>
        <span className="text-[11px] font-semibold text-muted">{image.caption ?? label}</span>
      </div>
      <div className={`bg-card ${detail ? "h-48" : "h-44"} border border-line`}>
        <img src={image.src} alt={image.alt} className="h-full w-full object-contain" loading="lazy" decoding="async" />
      </div>
    </figure>
  );
}

export default CaseStudyCard;
