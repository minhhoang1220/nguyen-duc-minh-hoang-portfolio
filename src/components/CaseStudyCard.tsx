import { useId, useState, type ReactNode } from "react";
import type { AssetImage, CaseStudy, PortfolioContent } from "../data/portfolio";
import { preloadImage } from "../utils/preloadImage";

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

  return (
    <article className="border-y border-line py-10 md:py-14">
      <div className={`grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start ${isReversed ? "lg:[&>*:first-child]:order-2" : ""}`}>
        <div className="min-w-0">
          <p className="section-kicker text-muted">
            {labels.eyebrow} 0{index + 1}
          </p>
          <h3 className="max-w-3xl text-balance text-[30px] font-semibold leading-[1.08] text-navy md:text-[44px]">{caseStudy.title}</h3>
          <EmphasizedText className="mt-5 max-w-2xl text-base leading-7 text-ink md:text-lg md:leading-8" text={caseStudy.summary} />

          <div className="mt-6 rounded-lg border border-sky/45 border-l-4 border-l-navy bg-sky/15 p-5">
            <p className="detail-label">{labels.role}</p>
            <EmphasizedText className="mt-2 text-sm leading-6 text-muted md:text-base md:leading-7" text={caseStudy.role} />
          </div>

          <div className="mt-7 rounded-lg border border-line bg-cream p-5 shadow-minimal">
            <p className="detail-label mb-4">{labels.evidence}</p>
            <ul className="grid gap-3">
              {caseStudy.evidence.slice(0, 3).map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-ink md:text-base md:leading-7">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-navy" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
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
          ) : caseStudy.visualType === "timeline" ? (
            <TimelinePreview large />
          ) : (
            <PermissionPreview labels={labels} />
          )}
        </div>
      </div>

      <div id={detailId} className={`${isExpanded ? "case-detail-panel block" : "hidden"} mt-8 border-t border-line pt-8`}>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          <DetailBlock emphasis="high">
            <p className="detail-label mb-3">{labels.problem}</p>
            <EmphasizedText className="text-sm leading-6 text-ink md:text-base md:leading-7" text={caseStudy.problem} />
          </DetailBlock>
          <DetailBlock emphasis="high">
            <p className="detail-label mb-3">{labels.outcomeLearning}</p>
            <EmphasizedText className="text-sm leading-6 text-ink md:text-base md:leading-7" text={caseStudy.outcomeLearning} />
          </DetailBlock>
          <DetailBlock emphasis="high">
            <p className="detail-label mb-3">{labels.impact}</p>
            <EmphasizedText className="text-sm leading-6 text-ink md:text-base md:leading-7" text={caseStudy.impact} />
          </DetailBlock>
          <DetailBlock emphasis="medium">
            <p className="detail-label mb-3">{labels.context}</p>
            <EmphasizedText className="text-sm leading-6 text-ink md:text-base md:leading-7" text={caseStudy.context} />
          </DetailBlock>
          <DetailList emphasis="medium" title={labels.keyDecisions} items={caseStudy.keyDecisions} />
          <DetailList emphasis="medium" title={labels.process} items={caseStudy.process} />
          <DetailList emphasis="low" title={labels.deliveredArtifacts} items={caseStudy.artifacts} />
          <DetailBlock emphasis="low">
            <p className="detail-label mb-3">{labels.delivered}</p>
            <EmphasizedText className="text-sm leading-6 text-ink md:text-base md:leading-7" text={caseStudy.delivered} />
          </DetailBlock>
          <DetailBlock emphasis="low">
            <p className="detail-label mb-3">{labels.skills}</p>
            <div className="flex flex-wrap items-start gap-2">
              {caseStudy.skills.map((skill) => (
                <span key={skill} className="badge shrink-0">
                  {skill}
                </span>
              ))}
            </div>
          </DetailBlock>
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
        onPointerEnter={() => preloadImage(image.src)}
        onFocus={() => preloadImage(image.src)}
      >
        <span className={`relative block overflow-hidden rounded-md bg-cream ${compact ? "h-[300px]" : "h-[360px] md:h-[520px]"}`}>
          <img
            src={image.previewSrc ?? image.src}
            alt={image.alt}
            className={`h-full w-full transition duration-500 group-hover:scale-[1.015] ${getPreviewImageClass(image.src)}`}
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

function TimelinePreview({ large = false }: { large?: boolean }) {
  const phases = ["Discovery", "Flow Mapping", "Mockup", "Review", "Dev Handoff", "QA"];

  return (
    <div className={`rounded-lg border border-line bg-card p-5 md:p-6 ${large ? "lg:min-h-[420px]" : ""}`}>
      <div className={`space-y-4 ${large ? "lg:pt-8" : ""}`}>
        {phases.map((phase, phaseIndex) => (
          <div key={phase} className="grid grid-cols-[minmax(88px,108px)_1fr] items-center gap-4 text-xs font-semibold text-navy">
            <span className="truncate text-muted">{phase}</span>
            <span className={`relative bg-cream ${large ? "h-10" : "h-7"}`}>
              <span
                className={`absolute top-1/2 -translate-y-1/2 bg-navy ${large ? "h-4" : "h-3"}`}
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

function DetailBlock({ children, emphasis = "low" }: { children: ReactNode; emphasis?: "high" | "medium" | "low" }) {
  const toneClass =
    emphasis === "high"
      ? "border-sky/70 border-l-navy bg-[linear-gradient(135deg,rgba(157,196,255,0.34),rgba(250,248,242,0.95))] shadow-card"
      : emphasis === "medium"
        ? "border-navy/15 border-l-sky bg-[linear-gradient(135deg,rgba(250,248,242,0.96),rgba(236,234,229,0.58))]"
        : "border-line border-l-navy/20 bg-card";

  return <div className={`rounded-lg border border-l-4 p-5 transition duration-300 hover:-translate-y-0.5 hover:border-navy/35 ${toneClass}`}>{children}</div>;
}

function DetailList({ title, items, emphasis = "low" }: { title: string; items: string[]; emphasis?: "high" | "medium" | "low" }) {
  return (
    <DetailBlock emphasis={emphasis}>
      <p className="detail-label mb-3">{title}</p>
      <ul className="space-y-3.5">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-6 text-ink md:text-base md:leading-7">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-navy" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </DetailBlock>
  );
}

function getPreviewImageClass(src: string) {
  if (src.includes("cdp-automation-flow-map")) {
    return "object-cover object-center";
  }

  if (src.includes("cdp-flow-management-states")) {
    return "object-cover object-top";
  }

  if (src.includes("cdp-flow-report") || src.includes("cdp-campaign")) {
    return "object-cover object-top";
  }

  return "object-cover object-center";
}

function EmphasizedText({ text, className }: { text: string; className: string }) {
  const sentenceMatch = text.match(/^(.{12,130}?[.!?])\s+(.*)$/);

  if (sentenceMatch) {
    return (
      <p className={className}>
        <strong className="font-semibold text-ink">{sentenceMatch[1]}</strong> {sentenceMatch[2]}
      </p>
    );
  }

  const words = text.split(" ");

  if (words.length <= 8) {
    return <p className={className}>{text}</p>;
  }

  return (
    <p className={className}>
      <strong className="font-semibold text-ink">{words.slice(0, 6).join(" ")}</strong> {words.slice(6).join(" ")}
    </p>
  );
}

export default CaseStudyCard;
