import { useId, useState } from "react";
import type { AssetImage, CaseStudy, PortfolioContent } from "../data/portfolio";

type CaseStudyCardProps = {
  caseStudy: CaseStudy;
  labels: PortfolioContent["caseStudyLabels"];
  index: number;
  openArtifactLabel: string;
  onImageOpen: (image: AssetImage) => void;
};

function CaseStudyCard({ caseStudy, labels, index, openArtifactLabel, onImageOpen }: CaseStudyCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const detailId = useId();
  const isReversed = index % 2 === 1;
  const rows = [
    [labels.problem, caseStudy.problem],
    [labels.role, caseStudy.role],
    [labels.outcomeLearning, caseStudy.outcomeLearning],
  ];

  return (
    <article className="border-y border-line py-10 md:py-14">
      <div className={`grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start ${isReversed ? "lg:[&>*:first-child]:order-2" : ""}`}>
        <div className="min-w-0">
          <p className="section-kicker text-muted">
            {labels.eyebrow} 0{index + 1}
          </p>
          <h3 className="max-w-3xl text-balance text-[30px] font-semibold leading-[1.08] text-navy md:text-[44px]">{caseStudy.title}</h3>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {rows.map(([label, value]) => (
              <div key={label}>
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.08em] text-navy">{label}</p>
                <p className="text-sm leading-6 text-ink md:text-base md:leading-7">{value}</p>
              </div>
            ))}
          </div>

          <div className="mt-7 border-y border-line py-5">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.08em] text-navy">{labels.keyDecisions}</p>
            <ul className="grid gap-3">
              {caseStudy.keyDecisions.map((decision) => (
                <li key={decision} className="flex gap-3 text-sm leading-6 text-ink md:text-base md:leading-7">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-navy" aria-hidden="true" />
                  <span>{decision}</span>
                </li>
              ))}
            </ul>
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
            className="mt-8 min-h-11 rounded-md border border-navy px-5 text-sm font-semibold text-navy transition duration-300 hover:-translate-y-px hover:bg-navy hover:text-cream focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-4"
            aria-controls={detailId}
            aria-expanded={isExpanded}
            onClick={() => setIsExpanded((current) => !current)}
          >
            {isExpanded ? labels.hideDetails : labels.viewDetails}
          </button>
        </div>

        <div className="min-w-0">
          {caseStudy.mainPreview ? (
            <ImagePreview image={caseStudy.mainPreview} openArtifactLabel={openArtifactLabel} onImageOpen={onImageOpen} />
          ) : (
            <PermissionPreview labels={labels} />
          )}
        </div>
      </div>

      <div id={detailId} className={`${isExpanded ? "grid" : "hidden"} mt-8 gap-6 border-t border-line pt-8 lg:grid-cols-[0.72fr_1.28fr]`}>
        {caseStudy.detailPreview ? (
          <ImagePreview image={caseStudy.detailPreview} openArtifactLabel={openArtifactLabel} onImageOpen={onImageOpen} compact />
        ) : (
          <TimelinePreview />
        )}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.08em] text-navy">{labels.context}</p>
            <p className="text-sm leading-6 text-ink md:text-base md:leading-7">{caseStudy.context}</p>
          </div>
          <DetailList title={labels.process} items={caseStudy.process} />
          <DetailList title={labels.deliveredArtifacts} items={caseStudy.artifacts} />
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.08em] text-navy">{labels.delivered}</p>
            <p className="text-sm leading-6 text-ink md:text-base md:leading-7">{caseStudy.delivered}</p>
          </div>
        </div>
      </div>
    </article>
  );
}

function ImagePreview({
  image,
  openArtifactLabel,
  onImageOpen,
  compact = false,
}: {
  image: AssetImage;
  openArtifactLabel: string;
  onImageOpen: (image: AssetImage) => void;
  compact?: boolean;
}) {
  return (
    <figure className="group rounded-lg border border-line bg-card p-3 transition duration-300 hover:-translate-y-1 hover:border-navy/40">
      <button
        type="button"
        className="block w-full text-left focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-4"
        aria-label={`${openArtifactLabel}: ${image.title}`}
        onClick={() => onImageOpen(image)}
      >
        <span className={`relative block overflow-hidden rounded-md bg-cream ${compact ? "h-[300px]" : "h-[360px] md:h-[520px]"}`}>
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
        <span className="text-sm font-semibold text-navy">{image.title}</span>
        {image.caption ? <span className="text-xs font-medium text-muted">{image.caption}</span> : null}
      </figcaption>
    </figure>
  );
}

function PermissionPreview({ labels }: { labels: PortfolioContent["caseStudyLabels"] }) {
  return (
    <div className="rounded-lg border border-line bg-card p-5 md:p-6">
      <div className="mb-6 flex items-center justify-between gap-4">
        <span className="artifact-label">{labels.matrixTitle}</span>
        <span className="text-xs font-semibold text-muted">{labels.matrixMeta}</span>
      </div>
      <div className="grid grid-cols-[1.2fr_repeat(5,1fr)] gap-px bg-line text-[10px] font-semibold text-muted">
        {["Role", "Read", "Create", "Edit", "Approve", "Admin"].map((label) => (
          <span key={label} className="bg-cream px-2 py-3 text-navy">
            {label}
          </span>
        ))}
        {Array.from({ length: 48 }).map((_, cellIndex) => (
          <span
            key={cellIndex}
            className={`h-10 bg-card ${cellIndex % 6 === 0 ? "bg-cream" : ""} ${
              cellIndex % 8 === 0 || cellIndex % 11 === 0 ? "bg-sky/70" : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function TimelinePreview() {
  const phases = ["Discovery", "Flow Mapping", "Mockup", "Review", "Dev Handoff", "QA"];

  return (
    <div className="rounded-lg border border-line bg-card p-5 md:p-6">
      <div className="space-y-4">
        {phases.map((phase, phaseIndex) => (
          <div key={phase} className="grid grid-cols-[108px_1fr] items-center gap-4 text-xs font-semibold text-navy">
            <span className="truncate text-muted">{phase}</span>
            <span className="relative h-7 bg-cream">
              <span
                className="absolute top-1/2 h-3 -translate-y-1/2 bg-navy"
                style={{
                  left: `${Math.min(phaseIndex * 12, 66)}%`,
                  width: `${phaseIndex % 2 === 0 ? 30 : 24}%`,
                }}
              />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function DetailList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.08em] text-navy">{title}</p>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-6 text-ink md:text-base md:leading-7">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-navy" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CaseStudyCard;
