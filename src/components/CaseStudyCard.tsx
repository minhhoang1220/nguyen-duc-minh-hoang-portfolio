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

  const darkThemes = [
    'bg-gradient-to-br from-[#0c241c] to-[#070b1a] border-[#1d3f35]/50',
    'bg-gradient-to-br from-[#071330] to-[#0a0f1d] border-[#152752]/50',
    'bg-gradient-to-br from-[#070b1c] to-[#0a0f1e] border-[#131a38]/50',
  ];
  const theme = darkThemes[index % darkThemes.length];

  return (
    <article className={`case-study-card rounded-2xl border ${theme} p-8 md:p-10 lg:p-12 mb-8 text-cream`}>
      <div className={`grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start ${isReversed ? "lg:[&>*:first-child]:order-2" : ""}`}>
        <div className="min-w-0">
          <div className="flex items-center gap-3 mb-2">
            <p className="section-kicker text-sky mb-0">
              {labels.eyebrow} 0{index + 1}
            </p>
            {caseStudy.logo && (
              <img src={caseStudy.logo} alt="" className="h-5 w-auto object-contain shrink-0" />
            )}
          </div>
          <h3 className="case-study-title max-w-3xl text-balance text-[30px] font-semibold leading-[1.08] md:text-[44px] !text-cream">{caseStudy.title}</h3>
          <div className="case-bottom-line mt-5 !bg-black/20 !border-white/10">
            <p className="case-bottom-label !text-sky">{labels.bottomLine}</p>
            <EmphasizedText className="text-base leading-7 text-cream/85 md:text-lg md:leading-8" text={caseStudy.summary} />
          </div>

          {caseStudy.artifactTags?.length ? <CaseArtifactTags tags={caseStudy.artifactTags} label={labels.artifactTags} /> : null}

          <CaseSnapshot caseStudy={caseStudy} labels={labels} />

          <div className="case-evidence-box mt-6 !bg-black/20 !border-white/10">
            <p className="detail-label mb-4 !bg-sky/30 !border-sky/40 !text-cream">{labels.evidence}</p>
            <ul className="grid gap-3">
              {caseStudy.evidence.slice(0, 3).map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-cream/85 md:text-base md:leading-7">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-navy" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <button
            type="button"
            className="mt-8 min-h-11 rounded-md border border-cream/30 px-5 text-sm font-semibold text-cream transition duration-300 hover:-translate-y-px hover:bg-cream/15 hover:text-sky focus:outline-none focus:ring-2 focus:ring-sky focus:ring-offset-4 focus:ring-offset-transparent"
            aria-controls={detailId}
            aria-expanded={isExpanded}
            onClick={() => setIsExpanded((current) => !current)}
          >
            {isExpanded ? labels.hideDetails : labels.viewDetails}
          </button>
        </div>

        <div className="min-w-0">
          {index === 0 && caseStudy.mainPreview ? (
            <Case1Visual
              mainPreview={caseStudy.mainPreview}
              openArtifactLabel={openArtifactLabel}
              onImageOpen={onImageOpen}
              labels={labels}
            />
          ) : index === 1 && caseStudy.mainPreview ? (
            <Case2Visual
              mainPreview={caseStudy.mainPreview}
              openArtifactLabel={openArtifactLabel}
              onImageOpen={onImageOpen}
              labels={labels}
            />
          ) : index === 2 && caseStudy.mainPreview ? (
            <Case3Visual
              mainPreview={caseStudy.mainPreview}
              openArtifactLabel={openArtifactLabel}
              onImageOpen={onImageOpen}
              labels={labels}
            />
          ) : caseStudy.mainPreview ? (
            <ImagePreview
              image={caseStudy.mainPreview}
              detailImage={caseStudy.detailPreview}
              labels={labels}
              openArtifactLabel={openArtifactLabel}
              onImageOpen={onImageOpen}
            />
          ) : caseStudy.visualType === "timeline" ? (
            <TimelinePreview labels={labels} large />
          ) : (
            <PermissionPreview labels={labels} />
          )}
        </div>
      </div>

      <div id={detailId} className={`${isExpanded ? "case-detail-panel block" : "hidden"} mt-8 border-t border-cream/15 pt-8`}>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          <DetailBlock emphasis="high">
            <p className="detail-label mb-3">{labels.problem}</p>
            <EmphasizedText className="text-sm leading-6 text-cream/85 md:text-base md:leading-7" text={caseStudy.problem} />
          </DetailBlock>
          <DetailBlock emphasis="high">
            <p className="detail-label mb-3">{labels.outcomeLearning}</p>
            <EmphasizedText className="text-sm leading-6 text-cream/85 md:text-base md:leading-7" text={caseStudy.outcomeLearning} />
          </DetailBlock>
          <DetailBlock emphasis="high">
            <p className="detail-label mb-3">{labels.impact}</p>
            <EmphasizedText className="text-sm leading-6 text-cream/85 md:text-base md:leading-7" text={caseStudy.impact} />
          </DetailBlock>
          <DetailBlock emphasis="medium">
            <p className="detail-label mb-3">{labels.context}</p>
            <EmphasizedText className="text-sm leading-6 text-cream/85 md:text-base md:leading-7" text={caseStudy.context} />
          </DetailBlock>
          <DetailList emphasis="medium" title={labels.keyDecisions} items={caseStudy.keyDecisions} />
          <DetailList emphasis="medium" title={labels.process} items={caseStudy.process} />
          <DetailList emphasis="low" title={labels.deliveredArtifacts} items={caseStudy.artifacts} />
          <DetailBlock emphasis="low">
            <p className="detail-label mb-3">{labels.delivered}</p>
            <EmphasizedText className="text-sm leading-6 text-cream/85 md:text-base md:leading-7" text={caseStudy.delivered} />
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

          {index === 0 && (
            <DetailBlock emphasis="medium">
              <p className="detail-label mb-3">Supporting Visual Artifacts</p>
              <p className="text-xs text-muted mb-4">Click to view high-resolution work samples:</p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  {
                    title: "Flow Canvas",
                    src: "/assets/case-studies/vega-canvas-flow.png",
                    previewSrc: "/assets/previews/vega-canvas-flow-preview.png",
                    alt: "Engagement flow canvas trigger flow layout",
                  },
                  {
                    title: "Drop-off Analytics",
                    src: "/assets/case-studies/vega-flow-details.png",
                    previewSrc: "/assets/previews/vega-flow-details-preview.png",
                    alt: "Funnel drop-off analytics metrics dashboard",
                  },
                  {
                    title: "Messenger Output",
                    src: "/assets/case-studies/vega-mess-chatbox.png",
                    previewSrc: "/assets/previews/vega-mess-chatbox-preview.png",
                    alt: "Messenger chatbox mockup output preview",
                  },
                  {
                    title: "Facebook Segment",
                    src: "/assets/case-studies/vega-facebook-profile.png",
                    previewSrc: "/assets/previews/vega-facebook-profile-preview.png",
                    alt: "Facebook connected target user profile",
                  },
                  {
                    title: "Zalo Notification",
                    src: "/assets/case-studies/vega-zalo.png",
                    previewSrc: "/assets/previews/vega-zalo-preview.png",
                    alt: "Zalo official account notification layout preview",
                  },
                ].map((artifact) => (
                  <button
                    key={artifact.title}
                    type="button"
                    className="flex flex-col text-left rounded border border-line bg-cream overflow-hidden hover:border-navy transition focus:outline-none focus:ring-2 focus:ring-navy"
                    onClick={() => onImageOpen(artifact)}
                    onPointerEnter={() => preloadImage(artifact.src)}
                    onFocus={() => preloadImage(artifact.src)}
                  >
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-white border-b border-line">
                      <img
                        src={artifact.previewSrc}
                        alt={artifact.alt}
                        className="h-full w-full object-cover object-top"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <span className="p-2 text-[10px] font-bold text-navy truncate block w-full">
                      {artifact.title}
                    </span>
                  </button>
                ))}
              </div>
            </DetailBlock>
          )}
        </div>
      </div>
    </article>
  );
}

function CaseArtifactTags({ tags, label }: { tags: string[]; label: string }) {
  return (
    <div className="case-artifact-tags" aria-label={label}>
      {tags.map((tag) => (
        <span key={tag}>{tag}</span>
      ))}
    </div>
  );
}

function CaseSnapshot({ caseStudy, labels }: { caseStudy: CaseStudy; labels: PortfolioContent["caseStudyLabels"] }) {
  const items = [
    { label: labels.problem, text: caseStudy.problem },
    { label: labels.role, text: caseStudy.role },
    { label: labels.delivered, text: caseStudy.delivered },
    { label: labels.whatItProves, text: caseStudy.impact },
  ];

  return (
    <dl className="case-snapshot-list mt-6 !bg-black/20 !border-white/10">
      {items.map((item) => (
        <div key={item.label} className="case-snapshot-item">
          <dt className="case-snapshot-label !text-sky">{item.label}</dt>
          <dd className="case-snapshot-text !text-cream/80">{item.text}</dd>
        </div>
      ))}
    </dl>
  );
}

function ImagePreview({
  image,
  detailImage,
  labels,
  openArtifactLabel,
  onImageOpen,
  compact = false,
}: {
  image: AssetImage;
  detailImage?: AssetImage;
  labels: PortfolioContent["caseStudyLabels"];
  openArtifactLabel: string;
  onImageOpen: (image: AssetImage) => void;
  compact?: boolean;
}) {
  return (
    <figure className="case-artifact-shell group">
      <ArtifactWindowBar title={labels.artifactPreview} meta={labels.sanitized} />
      <button
        type="button"
        className="block w-full text-left focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-4"
        aria-label={`${openArtifactLabel}: ${image.title}`}
        onClick={() => onImageOpen(image)}
        onPointerEnter={() => preloadImage(image.src)}
        onFocus={() => preloadImage(image.src)}
      >
        <span className={`case-visual-frame relative block overflow-hidden bg-cream ${compact ? "h-[300px]" : "h-[360px] md:h-[520px]"}`}>
          <img
            src={image.previewSrc ?? image.src}
            alt={image.alt}
            className={`h-full w-full transition duration-700 group-hover:scale-[1.04] ${getPreviewImageClass(image.src)}`}
            loading="lazy"
            decoding="async"
          />
          {detailImage ? (
            <span className="case-detail-preview-layer" aria-hidden="true">
              <img src={detailImage.previewSrc ?? detailImage.src} alt="" loading="lazy" decoding="async" />
            </span>
          ) : null}
          <span className="artifact-annotation">{image.caption ?? labels.sanitized}</span>
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
    <div className="case-artifact-shell">
      <ArtifactWindowBar title={labels.matrixTitle} meta={labels.matrixMeta} />
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
      <p className="mt-4 text-sm leading-6 text-muted">{labels.internalPreview}</p>
    </div>
  );
}

function TimelinePreview({ labels, large = false }: { labels: PortfolioContent["caseStudyLabels"]; large?: boolean }) {
  const phases = ["Discovery", "Flow Mapping", "Mockup", "Review", "Dev Handoff", "QA"];

  return (
    <div className={`case-artifact-shell ${large ? "lg:min-h-[420px]" : ""}`}>
      <ArtifactWindowBar title={labels.artifactPreview} meta={labels.internalPreview} />
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

function ArtifactWindowBar({ title, meta }: { title: string; meta: string }) {
  return (
    <div className="artifact-window-bar">
      <span className="flex items-center gap-1.5" aria-hidden="true">
        <span />
        <span />
        <span />
      </span>
      <span className="min-w-0 truncate text-[11px] font-semibold uppercase tracking-[0.08em] text-muted">{title}</span>
      <span className="hidden min-w-0 truncate text-right text-[11px] font-semibold text-muted md:block">{meta}</span>
    </div>
  );
}

function DetailBlock({ children, emphasis = "low" }: { children: ReactNode; emphasis?: "high" | "medium" | "low" }) {
  const toneClass =
    emphasis === "high"
      ? "border-sky/40 border-l-sky bg-[linear-gradient(135deg,rgba(157,196,255,0.12),rgba(10,15,30,0.8))] shadow-[0_2px_12px_rgba(0,0,0,0.3)]"
      : emphasis === "medium"
        ? "border-white/10 border-l-sky/50 bg-[linear-gradient(135deg,rgba(10,15,30,0.7),rgba(12,22,53,0.5))]"
        : "border-white/10 border-l-white/20 bg-black/20";

  return <div className={`rounded-lg border border-l-4 p-5 transition duration-300 hover:-translate-y-0.5 hover:border-sky/40 ${toneClass}`}>{children}</div>;
}

function DetailList({ title, items, emphasis = "low" }: { title: string; items: string[]; emphasis?: "high" | "medium" | "low" }) {
  return (
    <DetailBlock emphasis={emphasis}>
      <p className="detail-label mb-3">{title}</p>
      <ul className="space-y-3.5">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-6 text-cream/85 md:text-base md:leading-7">
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
        <strong className="font-semibold text-cream">{sentenceMatch[1]}</strong> {sentenceMatch[2]}
      </p>
    );
  }

  const words = text.split(" ");

  if (words.length <= 8) {
    return <p className={className}>{text}</p>;
  }

  return (
    <p className={className}>
      <strong className="font-semibold text-cream">{words.slice(0, 6).join(" ")}</strong> {words.slice(6).join(" ")}
    </p>
  );
}

function Case1Visual({
  mainPreview,
  openArtifactLabel,
  onImageOpen,
  labels,
}: {
  mainPreview: AssetImage;
  openArtifactLabel: string;
  onImageOpen: (image: AssetImage) => void;
  labels: any;
}) {
  return (
    <div className="case-artifact-shell relative overflow-hidden bg-gradient-to-br from-[#173D34] to-[#080E24] rounded-xl border border-line p-6 md:p-8 min-h-[380px] md:min-h-[500px] flex items-center justify-center select-none group">
      <div className="parity-grid-bg" />
      <div className="parity-glow" />
      
      <button
        type="button"
        className="relative z-10 w-full flex flex-col md:flex-row gap-6 items-center justify-center text-left focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-4"
        aria-label={`${openArtifactLabel}: ${mainPreview.title}`}
        onClick={() => onImageOpen(mainPreview)}
        onPointerEnter={() => preloadImage(mainPreview.src)}
        onFocus={() => preloadImage(mainPreview.src)}
      >
        {/* Browser window */}
        <div className="w-full md:w-[65%] bg-white rounded-lg border border-line shadow-hover overflow-hidden flex flex-col transition duration-500 group-hover:-translate-y-1">
          <div className="h-7 bg-[#FAF8F2] border-b border-line flex items-center justify-between px-3">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#d56f5d]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#d7aa4a]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#68a37d]" />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-navy">
              {labels.artifactPreview ?? "Engagement flow canvas"}
            </span>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden bg-cream">
            <img
              src={mainPreview.previewSrc ?? mainPreview.src}
              alt={mainPreview.alt}
              className="h-full w-full object-cover object-center"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        {/* Spec hint floating card */}
        <div className="spec-hint shadow-hover transition duration-500 group-hover:-translate-y-1">
          <div className="spec-hint-kicker">Key Contributions</div>
          <div className="spec-hint-title">Trigger & State Validation</div>
          <div className="spec-hint-item mt-1">
            <div className="spec-dot" />
            <span>Event trigger routing logic</span>
          </div>
          <div className="spec-hint-item">
            <div className="spec-dot" />
            <span>Segment condition filters</span>
          </div>
          <div className="spec-hint-item">
            <div className="spec-dot" />
            <span>Failure path handling</span>
          </div>
          <div className="spec-hint-item">
            <div className="spec-dot" />
            <span>QA/UAT validation specs</span>
          </div>
        </div>

        {/* View Artifact Overlay inside browser card */}
        <span className="pointer-events-none absolute inset-x-4 bottom-4 translate-y-2 rounded border border-cream/70 bg-navy/90 px-3 py-2 text-center text-xs font-semibold text-cream opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          {openArtifactLabel}
        </span>
      </button>

      {/* Badge label */}
      <div className="absolute bottom-4 right-4 bg-sky/90 border border-sky px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider text-[#080E24] shadow-sm pointer-events-none select-none z-20">
        Product Work Evidence
      </div>
    </div>
  );
}

function Case2Visual({
  mainPreview,
  openArtifactLabel,
  onImageOpen,
  labels,
}: {
  mainPreview: AssetImage;
  openArtifactLabel: string;
  onImageOpen: (image: AssetImage) => void;
  labels: any;
}) {
  const phases = [
    { label: "Discovery", left: "0%", width: "30%", status: "Done", type: "done" },
    { label: "Flow Mapping", left: "15%", width: "30%", status: "Done", type: "done" },
    { label: "Interface Mockups", left: "30%", width: "30%", status: "Done", type: "done" },
    { label: "Review", left: "50%", width: "20%", status: "Active", type: "progress" },
    { label: "Dev Handoff", left: "65%", width: "18%", status: "Planned", type: "scheduled" },
    { label: "QA / UAT", left: "80%", width: "18%", status: "Planned", type: "scheduled" },
  ];

  return (
    <div className="case-artifact-shell relative overflow-hidden bg-gradient-to-br from-[#080E24] to-[#14245F] rounded-xl border border-line p-6 md:p-8 min-h-[380px] md:min-h-[500px] flex items-center justify-center select-none group">
      <div className="parity-grid-bg" />
      <div className="parity-glow" />

      <button
        type="button"
        className="relative z-10 w-full flex items-center justify-center text-left focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-4"
        aria-label={`${openArtifactLabel}: ${mainPreview.title}`}
        onClick={() => onImageOpen(mainPreview)}
        onPointerEnter={() => preloadImage(mainPreview.src)}
        onFocus={() => preloadImage(mainPreview.src)}
      >
        <div className="gantt-hint transition duration-500 group-hover:-translate-y-1">
          {phases.map((phase) => (
            <div key={phase.label} className="gantt-row">
              <span className="gantt-label">{phase.label}</span>
              <div className="gantt-bar-track">
                <div
                  className={`gantt-bar-fill ${
                    phase.type === "done"
                      ? "bar-done"
                      : phase.type === "progress"
                      ? "bar-progress"
                      : "bar-scheduled"
                  }`}
                  style={{ left: phase.left, width: phase.width }}
                >
                  <span className="gantt-bar-text">{phase.status}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View Artifact Overlay inside browser card */}
        <span className="pointer-events-none absolute inset-x-4 bottom-4 translate-y-2 rounded border border-cream/70 bg-navy/90 px-3 py-2 text-center text-xs font-semibold text-cream opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          {openArtifactLabel}
        </span>
      </button>

      {/* Badge label */}
      <div className="absolute bottom-4 right-4 bg-navy-accent border border-navy-accent px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider text-cream shadow-sm pointer-events-none select-none z-20">
        Process Evidence
      </div>
    </div>
  );
}

function Case3Visual({
  mainPreview,
  openArtifactLabel,
  onImageOpen,
  labels,
}: {
  mainPreview: AssetImage;
  openArtifactLabel: string;
  onImageOpen: (image: AssetImage) => void;
  labels: any;
}) {
  const headers = ["Permission", "Admin", "Manager", "Analyst", "Agent"];
  const rows = [
    { name: "Edit Event Config", cells: [true, false, false, false] },
    { name: "Approve Campaign", cells: [true, true, false, false] },
    { name: "Export Report", cells: [true, true, true, false] },
    { name: "Manage User Role", cells: [true, false, false, false] },
    { name: "View Activity Log", cells: [true, true, true, true] },
    { name: "Update Segment Rule", cells: [true, true, false, false] },
  ];

  return (
    <div className="case-artifact-shell relative overflow-hidden bg-gradient-to-br from-[#0A1233] via-[#080E24] to-[#0D1A40] rounded-xl border border-line p-6 md:p-8 min-h-[380px] md:min-h-[500px] flex items-center justify-center select-none group">
      <div className="parity-grid-bg" />
      <div className="parity-glow" />

      <button
        type="button"
        className="relative z-10 w-full flex items-center justify-center text-left focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-4"
        aria-label={`${openArtifactLabel}: ${mainPreview.title}`}
        onClick={() => onImageOpen(mainPreview)}
        onPointerEnter={() => preloadImage(mainPreview.src)}
        onFocus={() => preloadImage(mainPreview.src)}
      >
        <div className="matrix-hint transition duration-500 group-hover:-translate-y-1">
          {headers.map((header) => (
            <div key={header} className="matrix-header">
              {header}
            </div>
          ))}

          {rows.map((row) => (
            <div key={row.name} className="contents">
              <div className="matrix-row-label">{row.name}</div>
              {row.cells.map((allowed, cellIdx) => (
                <div key={cellIdx} className="matrix-cell">
                  {allowed ? (
                    <div className="cell-allowed">✓</div>
                  ) : (
                    <div className="cell-denied">-</div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* View Artifact Overlay inside browser card */}
        <span className="pointer-events-none absolute inset-x-4 bottom-4 translate-y-2 rounded border border-cream/70 bg-navy/90 px-3 py-2 text-center text-xs font-semibold text-cream opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          {openArtifactLabel}
        </span>
      </button>

      {/* Badge label */}
      <div className="absolute bottom-4 right-4 bg-navy-accent border border-navy-accent px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider text-cream shadow-sm pointer-events-none select-none z-20">
        System Logic Matrix
      </div>
    </div>
  );
}

export default CaseStudyCard;
